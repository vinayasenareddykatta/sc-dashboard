import Image from "next/image";
import React from "react";

const TableSearch = () => {
  return (
    <div className="w-full md:w-auto flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 p-2">
      <Image src="/search.png" alt="search input icon" width={14} height={14} />
      <input
        type="text"
        className="outline-none bg-transparent w-[200px]"
        placeholder="Search..."
      />
    </div>
  );
};

export default TableSearch;
