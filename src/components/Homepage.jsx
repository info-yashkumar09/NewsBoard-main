import React, { useState } from "react";
import Topics from "./Topics";
import Feed from "./Feed";

const Homepage = ({ search, setSearch }) => {
  const [newsData, setNewsData] = useState(null);

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800">
      <Topics setSearch={setSearch} currentSearch={search} />
      <Feed searchQuery={search} newsData={newsData} setNewsData={setNewsData} />
    </div>
  );
};

export default Homepage;
