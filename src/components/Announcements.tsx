import Image from "next/image";
import React from "react";

const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <div className="flex justify-between items-center my-4">
        <h1 className="text-lg font-semibold">Announcements</h1>
        <span className="text-sm text-gray-400">View all</span>
      </div>
      <div className="flex flex-col mt-4 gap-4">
        <div className="bg-lamaSkyLight p-4 rounded-md">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-sm font-semibold">Lorem Ipsum</h1>
            <span className="text-xs bg-white p-1 text-gray-500 rounded-md">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
            beatae voluptas illum quia rem. Voluptates soluta adipisci,
            perferendis dolorem natus, velit dolore sed optio ut, nam quam
            veniam animi ipsam.
          </p>
        </div>
      </div>

      {/* 2 */}
      <div className="flex flex-col mt-4 gap-4">
        <div className="bg-lamaPurpleLight p-4 rounded-md">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-sm font-semibold">Lorem Ipsum</h1>
            <span className="text-xs bg-white p-1 text-gray-500 rounded-md">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
            beatae voluptas illum quia rem. Voluptates soluta adipisci,
            perferendis dolorem natus, velit dolore sed optio ut, nam quam
            veniam animi ipsam.
          </p>
        </div>
      </div>

      {/* 3 */}
      <div className="flex flex-col mt-4 gap-4">
        <div className="bg-lamaYellowLight p-4 rounded-md">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-sm font-semibold">Lorem Ipsum</h1>
            <span className="text-xs bg-white p-1 text-gray-500 rounded-md">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
            beatae voluptas illum quia rem. Voluptates soluta adipisci,
            perferendis dolorem natus, velit dolore sed optio ut, nam quam
            veniam animi ipsam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
