import React, { useState } from "react";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: ""
	});
	const [submitted, setSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError(null);
		setSubmitted(false);

		try {
			// Replace with your Google Apps Script deployment URL
			const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/d/AKfycbzFTsNAzxyy0imKgUKtTnc_E_LjYYUuSj6HvEU7y-14Md9YmpKFmpoSdQOl0WTVj3qSCg/usercoderun";

			const response = await fetch(GOOGLE_SCRIPT_URL, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					timestamp: new Date().toLocaleString(),
					name: formData.name,
					email: formData.email,
					message: formData.message
				})
			});

			if (!response.ok) {
				throw new Error("Failed to send message");
			}

			setSubmitted(true);
			setFormData({ name: "", email: "", message: "" });
			console.log("Message sent successfully!");

			// Clear success message after 5 seconds
			setTimeout(() => setSubmitted(false), 5000);
		} catch (err) {
			console.error("Error sending message:", err);
			setError(err.message || "Failed to send message. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className=" min-h-screen font-sans text-slate-800">
			<div className="max-w-3xl mx-auto p-6">
				<h1 className="text-3xl font-bold mb-4">Contact Us</h1>
				<p className="mb-6 text-slate-600">
					We'd love to hear from you. Send us a message using the form below ⬇️
				</p>

				{/* Success Message */}
				{submitted && (
					<div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
						✅ Message sent successfully! We'll get back to you soon.
					</div>
				)}

				{/* Error Message */}
				{error && (
					<div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
						❌ {error}
					</div>
				)}

				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<label className="block text-sm font-medium text-slate-700">Name</label>
						<input
							className="mt-1 block w-full outline-none rounded-md border border-slate-300 px-3 py-2"
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
							placeholder="Your name"
							required
						/>
					</div>
					<div>
						<label className="block text-sm font-medium text-slate-700">Email</label>
						<input
							className="mt-1 block w-full outline-none rounded-md border border-slate-300 px-3 py-2"
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							placeholder="you@example.com"
							required
						/>
					</div>
					<div>
						<label className="block text-sm font-medium text-slate-700">Message</label>
						<textarea
							className="mt-1 block w-full outline-none rounded-md border border-slate-300 px-3 py-2 h-32"
							name="message"
							value={formData.message}
							onChange={handleChange}
							placeholder="How can we help?"
							required
						/>
					</div>
					<div>
						<button
							type="submit"
							disabled={loading}
							className={`inline-flex items-center px-4 py-2 rounded-md cursor-pointer ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} text-white`}
						>
							{loading ? "Sending..." : "Send Message"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
