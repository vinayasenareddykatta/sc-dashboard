import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import EventCalendar from "@/components/EventCalendar";
import React from "react";

const TeacherPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row flex-1">
      {/* LEFT */}
      <div className="w-full xl:w-2/3 ">
        <div className="h-full bg-white p-4 rounded-lg shadow-md">
          <h1 className="font-semibold text-xl ">Schedule (4A)</h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-4">
        <Announcements />
      </div>
    </div>
  );
};

export default TeacherPage;
