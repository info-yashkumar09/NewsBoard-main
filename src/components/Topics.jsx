function Topics({ setSearch }) {
  
  return (
    <div className="w-full ">
      <div className="flex items-center justify-around pt-5">
        <h2 className="text-2xl font-bold text-slate-800">Latest News</h2>
        <div
          className="hidden md:flex items-center space-x-2 p-1 bg-slate-200/50 rounded-full">
          <div onClick={() => setSearch("Technology", "Politics", "Business", "Health", "Sports")} className="px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 bg-white text-slate-600 hover:bg-blue-100 hover:text-blue-700 cursor-pointer">
            All
          </div>
          <div onClick={() => setSearch("Indian Technology")} className="px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 bg-white text-slate-600 hover:bg-blue-100 hover:text-blue-700 cursor-pointer">
            Technology
          </div>
          <div onClick={() => setSearch("Indian Politics")} className="px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 bg-white text-slate-600 hover:bg-blue-100 hover:text-blue-700 cursor-pointer">
            Politics
          </div>
          <div onClick={() => setSearch("Indian Business")} className="px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 bg-white text-slate-600 hover:bg-blue-100 hover:text-blue-700 cursor-pointer">
            Business
          </div>
          <div onClick={() => setSearch("Indian Health")} className="px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 bg-white text-slate-600 hover:bg-blue-100 hover:text-blue-700 cursor-pointer">
            Health
          </div>
          <div onClick={() => setSearch("Indian Sports")} className="px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 bg-white text-slate-600 hover:bg-blue-100 hover:text-blue-700 cursor-pointer">
            Sports
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topics;
