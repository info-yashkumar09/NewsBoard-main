// Serverless proxy for contact form — forwards form-encoded data to Google Apps Script
// Logs incoming data and upstream response for debugging.

const https = require('https');
const { URL } = require('url');

async function postToUrl(urlString, bodyString) {
  return new Promise((resolve, reject) => {
    try {
      const url = new URL(urlString);
      const opts = {
        hostname: url.hostname,
        path: url.pathname + (url.search || ''),
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': Buffer.byteLength(bodyString || ''),
        },
      };

      const req = https.request(opts, (upRes) => {
        let data = '';
        upRes.on('data', (chunk) => (data += chunk));
        upRes.on('end', () => resolve({ status: upRes.statusCode, body: data }));
      });

      req.on('error', (err) => reject(err));
      req.write(bodyString || '');
      req.end();
    } catch (err) {
      reject(err);
    }
  });
}

module.exports = async (req, res) => {
  try {
    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Method not allowed' });
      return;
    }

    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzFTsNAzxyy0imKgUKtTnc_E_LjYYUuSj6HvEU7y-14Md9YmpKFmpoSdQOl0WTVj3qSCg/exec';

    // Build form-encoded body from req.body
    let bodyString = '';
    const contentType = (req.headers['content-type'] || req.headers['Content-Type'] || '').toLowerCase();

    if (typeof req.body === 'string') {
      bodyString = req.body;
    } else if (contentType.includes('application/x-www-form-urlencoded')) {
      bodyString = new URLSearchParams(req.body).toString();
    } else if (contentType.includes('application/json') || typeof req.body === 'object') {
      const params = new URLSearchParams();
      for (const key of Object.keys(req.body || {})) {
        if (req.body[key] !== undefined && req.body[key] !== null) params.append(key, String(req.body[key]));
      }
      bodyString = params.toString();
    } else {
      bodyString = typeof req.body === 'object' ? new URLSearchParams(req.body).toString() : String(req.body || '');
    }

    console.log('[Contact Proxy] Incoming headers:', req.headers || {});
    console.log('[Contact Proxy] Forwarding body:', bodyString);

    const upstream = await postToUrl(SCRIPT_URL, bodyString);
    console.log('[Contact Proxy] Upstream status:', upstream.status, 'body:', upstream.body);

    if (!upstream || upstream.status >= 400) {
      res.status(502).json({ ok: false, status: upstream && upstream.status, body: upstream && upstream.body });
      return;
    }

    let parsed = upstream.body;
    try { parsed = JSON.parse(upstream.body); } catch (e) { /* leave as text */ }

    res.status(200).json({ ok: true, upstream: parsed });
  } catch (err) {
    console.error('[Contact Proxy] Error:', err && err.stack ? err.stack : err);
    res.status(500).json({ ok: false, error: err && err.message ? err.message : String(err) });
  }
};
