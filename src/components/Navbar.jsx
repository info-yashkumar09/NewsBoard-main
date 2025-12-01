import { NavLink } from "react-router-dom";

// Icon components (using inline SVG for portability)
const SearchIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const UserIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const Logo = () => (
  <div className="flex items-center space-x-2">
    <div className="bg-blue-600 p-2 rounded-md">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
      </svg>
    </div>
    <span className="text-2xl font-bold text-slate-800">NewsBoard</span>
  </div>
);

function Navbar({ search, setSearch }) {
  const linkClass = (isActive) =>
    (isActive ? "text-blue-600" : "text-slate-600") +
    " text-sm font-medium hover:text-blue-600 transition-colors";

  return (
    <div className="bg-white/80 backdrop-blur-lg sticky top-0 z-10 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" end className={({ isActive }) => linkClass(isActive)}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => linkClass(isActive)}>
              About
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => linkClass(isActive)}>
              Contact
            </NavLink>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                className="w-40 sm:w-56 pl-10 pr-4 py-2 border border-slate-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for news..."
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                  }
                }}
              />
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            </div>
            <button className="p-2 rounded-full hover:bg-slate-100 transition-colors">
              <UserIcon className="w-6 h-6 text-slate-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
