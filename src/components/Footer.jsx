import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="bg-white border-t border-slate-200 mt-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
				<div className="text-sm text-slate-600">
					© {new Date().getFullYear()} NewsBoard — Built with React and Vite.
				</div>
				<div className="flex items-center gap-4">
					<Link className="text-sm text-slate-600 hover:text-blue-600" to="/about">About</Link>
					<Link className="text-sm text-slate-600 hover:text-blue-600" to="/contact">Contact</Link>
					<a className="text-sm text-slate-600 hover:text-blue-600" href="https://github.com/info-yashkumar09/NewsBoard-main" target="_blank" rel="noreferrer">GitHub</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
