// Serverless proxy for contact form — forwards form-encoded data to Google Apps Script
// Logs incoming data and upstream response for debugging.

module.exports = async (req, res) => {
  try {
    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Method not allowed' });
      return;
    }

    // Replace this with your deployed Apps Script web app URL
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzFTsNAzxyy0imKgUKtTnc_E_LjYYUuSj6HvEU7y-14Md9YmpKFmpoSdQOl0WTVj3qSCg/exec';

    // Build form-encoded body from req.body (handles JSON object or string)
    let bodyString;
    const contentType = (req.headers['content-type'] || req.headers['Content-Type'] || '').toLowerCase();

    if (typeof req.body === 'string') {
      bodyString = req.body;
    } else if (contentType.includes('application/x-www-form-urlencoded')) {
      bodyString = new URLSearchParams(req.body).toString();
    } else if (contentType.includes('application/json') || typeof req.body === 'object') {
      // Convert JSON to form-encoded keys (name,email,message)
      const params = new URLSearchParams();
      for (const key of Object.keys(req.body)) {
        params.append(key, req.body[key]);
      }
      bodyString = params.toString();
    } else {
      // Fallback: try to stringify
      bodyString = typeof req.body === 'object' ? new URLSearchParams(req.body).toString() : String(req.body || '');
    }

    console.log('[Contact Proxy] Incoming headers:', req.headers);
    console.log('[Contact Proxy] Forwarding body:', bodyString);

    const upstream = await fetch(SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: bodyString,
    });

    const text = await upstream.text().catch(() => '');
    console.log('[Contact Proxy] Upstream status:', upstream.status, 'body:', text);

    if (!upstream.ok) {
      res.status(502).json({ ok: false, status: upstream.status, body: text });
      return;
    }

    // Try parse upstream JSON, otherwise return raw text
    let parsed = text;
    try { parsed = JSON.parse(text); } catch (e) { /* not JSON */ }

    res.status(200).json({ ok: true, upstream: parsed });
  } catch (err) {
    console.error('[Contact Proxy] Error:', err);
    res.status(500).json({ ok: false, error: err && err.message ? err.message : String(err) });
  }
};
