import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState(null);

  const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
  const secret = import.meta.env.VITE_CONTACT_SECRET;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMsg(null);

    if (!scriptUrl) {
      setStatusMsg("Server not configured (no URL).");
      return;
    }
    if (!name || !email || !message) {
      setStatusMsg("Please fill all fields.");
      return;
    }

    setLoading(true);
    try {
      const payload = { secret, name, email, message };
      const res = await fetch(scriptUrl, {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const body = await res.json().catch(() => ({}));
      if (!res.ok || !body.ok) {
        console.error("Submit error:", res.status, body);
        setStatusMsg(body.error || body.message || `Submit failed (status ${res.status})`);
        return;
      }

      setStatusMsg("Message sent — thank you!");
      // clear form
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("Network error:", err);
      setStatusMsg("Network error — please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen font-sans text-slate-800">
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="mb-6 text-slate-600">We'd love to hear from you. Send us a message using the form below ⬇️</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700">Name</label>
            <input
              className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <input
              className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">Message</label>
            <textarea
              className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 h-32"
              placeholder="How can we help?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <div>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>

          {statusMsg && (
            <div className="mt-2 text-sm text-slate-700">
              {statusMsg}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;