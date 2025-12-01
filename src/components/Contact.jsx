import React from "react";

const Contact = () => {
	return (
		<div className=" min-h-screen font-sans text-slate-800">
			<div className="max-w-3xl mx-auto p-6">
				<h1 className="text-3xl font-bold mb-4">Contact Us</h1>
				<p className="mb-6 text-slate-600">
					We'd love to hear from you. Send us a message using the form below ⬇️
				</p>
				<form className="space-y-4">
					<div>
						<label className="block text-sm font-medium text-slate-700">Name</label>
						<input
							className="mt-1 block w-full outline-none rounded-md border border-slate-300 px-3 py-2"
							type="text"
							placeholder="Your name"
						/>
					</div>
					<div>
						<label className="block text-sm font-medium text-slate-700">Email</label>
						<input
							className="mt-1 block w-full outline-none rounded-md border border-slate-300 px-3 py-2"
							type="email"
							placeholder="you@example.com"
						/>
					</div>
					<div>
						<label className="block text-sm font-medium text-slate-700">Message</label>
						<textarea
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
