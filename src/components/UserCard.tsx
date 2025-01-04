import Image from "next/image";
import React from "react";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="shadow-md rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 flex-1 min-w-130px ">
      <div className="flex justify-between items-center">
        <span className="text-[11px] bg-white rounded-full text-green-700 px-2 py-1">
          2024/25
        </span>
        <Image src="/more.png" alt="" width={20} height={20} />
      </div>
      <h1 className="text-2xl my-4 font-semibold">1,343</h1>
      <h2 className="capitalize text-sm text-gray-600 font-semibold">{type}</h2>
    </div>
  );
};

export default UserCard;
