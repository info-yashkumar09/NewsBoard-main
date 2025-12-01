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
    console.log(`[Contact Proxy] Received form submission from ${email}`);
    console.log(`[Contact Proxy] Data:`, { name, email, message, timestamp });
    console.log(`[Contact Proxy] Google Script URL: ${GOOGLE_SCRIPT_URL}`);

    // Use form data instead of JSON for Google Apps Script
    const formData = new URLSearchParams();
    formData.append('timestamp', timestamp || new Date().toLocaleString());
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    console.log(`[Contact Proxy] Sending form data:`, formData.toString());

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: formData,
      mode: 'no-cors' // Google Apps Script doesn't support CORS
    });

    console.log(`[Contact Proxy] Request sent to Google Sheets, response type: ${response.type}`);

    // With no-cors, we can't read the response, so just assume success
    res.status(200).json({ success: true, message: 'Message saved to Google Sheets' });
  } catch (error) {
    console.error('[Contact Proxy] Error:', error);
    res.status(500).json({ error: error.message });
  }
}
