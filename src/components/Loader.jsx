import React from "react";

const Loader = () => {
  return (
    <div className="w-full mt-6 flex items-center justify-center py-16">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-4 border-slate-200"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-600 animate-spin"></div>
        </div>
        <p className="text-slate-600 font-medium">Loading news...</p>
      </div>
    </div>
  );
};

export default Loader;
