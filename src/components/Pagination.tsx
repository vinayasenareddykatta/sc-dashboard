import React from "react";

const Pagination = () => {
  return (
    <div className="flex p-4 items-center justify-between text-gray-500">
      <button
        disabled
        className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Prev
      </button>
      <div className="flex items-center gap-2 text-sm">
        <button className="px-2 rounded-sm bg-lamaSky text-xs">1</button>
        <button className="px-2 rounded-sm  text-xs">2</button>
        <button className="px-2 rounded-sm  text-xs">3</button>
        ...
        <button className="px-2 rounded-sm text-xs">10</button>
      </div>
      <button className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
        Next
      </button>
    </div>
  );
};

export default Pagination;
