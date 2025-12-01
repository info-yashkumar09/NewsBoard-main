import React from "react";

const Contact = () => {

	// https://script.google.com/macros/s/AKfycbzFTsNAzxyy0imKgUKtTnc_E_LjYYUuSj6HvEU7y-14Md9YmpKFmpoSdQOl0WTVj3qSCg/exec

	// inside src/components/Contact.jsx - update handleSubmit and inputs
const handleSubmit = async (e) => {
	e.preventDefault();
	const url = "/api/contact";
	const body = `name=${encodeURIComponent(e.target.name.value)}&email=${encodeURIComponent(e.target.email.value)}&message=${encodeURIComponent(e.target.message.value)}`;

	try {
		const resp = await fetch(url, {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body,
		});

		const text = await resp.text();
		// Try parse JSON
		let parsed;
		try { parsed = JSON.parse(text); } catch (err) { parsed = text; }

		console.log('[Contact] /api/contact response status', resp.status, 'body:', parsed);

		if (!resp.ok) {
			alert('Contact submit failed — see console for details. Server response: ' + (typeof parsed === 'string' ? parsed : JSON.stringify(parsed)));
			return;
		}

		alert('Message sent successfully.');
	} catch (err) {
		console.error('[Contact] Fetch error', err);
		alert('Network error when sending message — check console and server logs.');
	}
}
// ...
// <input ... name="name" ... />
// <input ... name="email" ... />
// <textarea ... name="message" ... />

	return (
		<div className=" min-h-screen font-sans text-slate-800">
			<div className="max-w-3xl mx-auto p-6">
				<h1 className="text-3xl font-bold mb-4">Contact Us</h1>
				<p className="mb-6 text-slate-600">
					We'd love to hear from you. Send us a message using the form below ⬇️
				</p>
				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<label className="block text-sm font-medium text-slate-700">Name</label>
						<input
								name="name"
								className="mt-1 block w-full outline-none rounded-md border border-slate-300 px-3 py-2"
								type="text"
								placeholder="Your name"
						/>
					</div>
					<div>
						<label className="block text-sm font-medium text-slate-700">Email</label>
						<input
							name="email"
							className="mt-1 block w-full outline-none rounded-md border border-slate-300 px-3 py-2"
							type="email"
							placeholder="you@example.com"
						/>
					</div>
					<div>
						<label className="block text-sm font-medium text-slate-700">Message</label>
						<textarea
							name="message"
							className="mt-1 block w-full outline-none rounded-md border border-slate-300 px-3 py-2 h-32"
							placeholder="How can we help?"
						/>
					</div>
					<div>
						<button
							type="submit"
							className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer"
						>
							Send Message
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
