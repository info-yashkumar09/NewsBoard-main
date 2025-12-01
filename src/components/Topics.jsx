import React, { useState, useEffect } from "react";

function Topics({ setSearch, currentSearch }) {
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    // Update active category based on currentSearch
    if (currentSearch === "india") {
      setActiveCategory("All");
    } else if (currentSearch.includes("Technology")) {
      setActiveCategory("Technology");
    } else if (currentSearch.includes("Politics")) {
      setActiveCategory("Politics");
    } else if (currentSearch.includes("Business")) {
      setActiveCategory("Business");
    } else if (currentSearch.includes("Health")) {
      setActiveCategory("Health");
    } else if (currentSearch.includes("Sports")) {
      setActiveCategory("Sports");
    }
  }, [currentSearch]);

  const handleCategoryClick = (category, searchTerm) => {
    setActiveCategory(category);
    setSearch(searchTerm);
  };

  const getCategoryClass = (category) => {
    const baseClass = "px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 cursor-pointer";
    if (activeCategory === category) {
      return `${baseClass} bg-blue-600 text-white`;
    }
    return `${baseClass} bg-white text-slate-600 hover:bg-blue-100 hover:text-blue-700`;
  };

  return (
    <div className="w-full ">
      <div className="flex items-center justify-around pt-5">
        <h2 className="text-2xl font-bold text-slate-800">Latest News</h2>
        <div className="hidden md:flex items-center space-x-2 p-1 bg-slate-200/50 rounded-full">
          <div onClick={() => handleCategoryClick("All", "india")} className={getCategoryClass("All")}>
            All
          </div>
          <div onClick={() => handleCategoryClick("Technology", "Indian Technology")} className={getCategoryClass("Technology")}>
            Technology
          </div>
          <div onClick={() => handleCategoryClick("Politics", "Indian Politics")} className={getCategoryClass("Politics")}>
            Politics
          </div>
          <div onClick={() => handleCategoryClick("Business", "Indian Business")} className={getCategoryClass("Business")}>
            Business
          </div>
          <div onClick={() => handleCategoryClick("Health", "Indian Health")} className={getCategoryClass("Health")}>
            Health
          </div>
          <div onClick={() => handleCategoryClick("Sports", "Indian Sports")} className={getCategoryClass("Sports")}>
            Sports
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topics;
