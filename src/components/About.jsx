import React from "react";
import udayProfile from "../assets/udayprofile.jpg";
import yashProfile from "../assets/797.png";
import sumitProfile from "../assets/sumitprofile.jpg";

const About = () => {
	return (
		<div className="min-h-screen font-sans text-slate-800">
			<div className="max-w-5xl mx-auto p-6">
				<h1 className="text-3xl font-bold mb-10 mt-10 justify-self-center">About NewsBoard</h1>

				<section className="mb-8">
					<p className="mb-3 text-slate-600">
						NewsBoard is a lightweight news aggregator built as a demo project to
						showcase a simple, fast, and accessible client-side news browsing
						experience. It fetches news content (via public or mock APIs), presents
						categorized feeds, and includes search and topic filters so users can
						quickly find the stories they care about.
					</p>
					<p className="mb-3 text-slate-600">
						Key goals:
					</p>
					<ul className="list-disc list-inside mb-3 text-slate-600">
						<li>Simple, responsive UI with minimal dependencies.</li>
						<li>Fast client-side navigation using React Router.</li>
						<li>Clear separation between presentation and data fetching so the
							app can be extended or connected to different backends.</li>
						<li>Demo-friendly code structure for learning and prototyping.</li>
					</ul>
					<p className="text-sm text-slate-500">
						Tech stack: React, Vite, Tailwind-style utility classes, and optional
						news API integration. The project intentionally keeps dependencies
						small so it is easy to run and adapt.
					</p>
				</section>

				<section className="mb-8">
					<h2 className="text-3xl font-bold mb-15 mt-15 justify-self-center">Developer info</h2>
					<p className="mb-10 text-slate-600">
						This project was created by a small team of three developers. Replace
						the placeholder entries below with the real names and contact
						information as needed.
					</p>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
						<div className="p-4 border border-gray-300 shadow-lg rounded-lg bg-white justify-items-center">
							<img className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-red-900 shadow mb-3" src={udayProfile} alt="Uday Pratap Raghav" />
							<h3 className=" text-xl font-bold">Uday Pratap Raghav</h3>
							<p className="text-md font-bold text-[#155DFC]">Backend & Integration</p>
							<p className="text-sm text-slate-600 mb-7">Email: <a href="mailto:raghavudaypratap7@gmail.com">raghavudaypratap7@gmail.com</a></p>
							<p><span className="font-bold">Course: </span> <span className="text-gray-600">BCA</span></p>
							<p><span className="font-bold">Year: </span> <span className="text-gray-600">3rd Year</span></p>
							<p><span className="font-bold">Semester: </span> <span className="text-gray-600">5th Sem</span></p>
							<p><span className="font-bold">Roll No: </span> <span className="text-gray-600">230613000569</span></p>
						</div>

						<div className="p-4 border border-gray-300 shadow-lg rounded-lg bg-white justify-items-center">
							<img className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-red-900 shadow mb-3" src={yashProfile} alt="Yash Kumar" />
							<h3 className=" text-xl font-bold">Yash Kumar</h3>
							<p className="text-md font-bold text-[#155DFC]">Frontend Developer</p>
							<p className="text-sm text-slate-600 mb-7">Email: <a href="mailto:info.yashkumar.09@gamil.com">info.yashkumar.09@gamil.com</a></p>
							<p><span className="font-bold">Course: </span> <span className="text-gray-600">BCA</span></p>
							<p><span className="font-bold">Year: </span> <span className="text-gray-600">3rd Year</span></p>
							<p><span className="font-bold">Semester: </span> <span className="text-gray-600">5th Sem</span></p>
							<p><span className="font-bold">Roll No: </span> <span className="text-gray-600">230613000589</span></p>
						</div>

						<div className="p-4 border border-gray-300 shadow-lg rounded-lg bg-white justify-items-center">
							<img className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-red-900 shadow mb-3" src={sumitProfile} alt="Sumit Pratap Singh" />
							<h3 className=" text-xl font-bold">Sumit Pratap Singh</h3>
							<p className="text-md font-bold text-[#155DFC]">UI/UX Designer</p>
							<p className="text-sm text-slate-600 mb-7">Email: <a href="mailto:sumitpartapsingh2005@gmail.com">sumitpartapsingh2005@gmail.com</a></p>
							<p><span className="font-bold">Course: </span> <span className="text-gray-600">BCA</span></p>
							<p><span className="font-bold">Year: </span> <span className="text-gray-600">3rd Year</span></p>
							<p><span className="font-bold">Semester: </span> <span className="text-gray-600">5th Sem</span></p>
							<p><span className="font-bold">Roll No: </span> <span className="text-gray-600">230613000554 </span></p>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default About;
