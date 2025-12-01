// Vercel Serverless Function to proxy Google Apps Script requests
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/d/AKfycbzFTsNAzxyy0imKgUKtTnc_E_LjYYUuSj6HvEU7y-14Md9YmpKFmpoSdQOl0WTVj3qSCg/usercoderun";

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message, timestamp } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    console.log(`[Contact Proxy] Sending to Google Sheets: ${name}, ${email}`);

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        timestamp: timestamp || new Date().toLocaleString(),
        name,
        email,
        message
      })
    });

    const responseText = await response.text();
    console.log(`[Contact Proxy] Response status: ${response.status}, Body: ${responseText}`);

    if (!response.ok) {
      throw new Error(`Google Apps Script returned ${response.status}`);
    }

    res.status(200).json({ success: true, message: 'Message saved to Google Sheets' });
  } catch (error) {
    console.error('[Contact Proxy] Error:', error);
    res.status(500).json({ error: error.message });
  }
}
