import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <div className="flex items-center justify-between p-4">
      {/* SEARCGBAR */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2 py-1">
        <Image
          src="/search.png"
          alt="search input icon"
          width={14}
          height={14}
        />
        <input  type="text" className="outline-none bg-transparent w-[200px]" placeholder="Search..." />
      </div>
      {/* USER ACTIONS */}
      <div className="flex flex-row items-center gap-6 justify-end w-full">
        <div className="">
          <Image src="/message.png" alt="" width={20} height={20} />
        </div>
        <div className="relative">
          <Image src="/announcement.png" alt="" width={20} height={20} />
          <div className="absolute -top-3 -right-3 h-5 w-5 flex items-center justify-center text-xs bg-purple-500 text-white rounded-full">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">Rocky B</span>
          <span className="text-[12px] text-gray-500 text-right">Admin</span>
        </div>
        <Image
          src="/avatar.png"
          alt="user avatar"
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>
    </div>
  );
}

export default Navbar;
