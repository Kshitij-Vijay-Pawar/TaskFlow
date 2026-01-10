// Adjusted the layout and size of the charts for better positioning and responsiveness
import React from "react";
import PieChart from "../ui/Chart/PieChart";
import CalendarChart from "../ui/Chart/CalendarChart";
import ColumnChart from "../ui/Chart/ColumnChart";

const StickyWall = () => {
  return (
    <div className="h-full w-full bg-(--bg)">
      <div className="mb-4">
        <h2 className="text-6xl font-black">Sticky Wall</h2>
      </div>

      <div className="grid grid-rows-[30%_30%_30%] gap-2 h-full">
        {/* 20% height */}
        <div className="flex justify-center items-center">
          <PieChart />
        </div>

        {/* 40% height */}
        <div className="bg-(--surface) rounded-2xl border border-(--border) flex justify-center items-center">
          <ColumnChart />
        </div>

        {/* 40% height */}
        <div className="bg-(--surface) rounded-2xl border border-(--border) flex justify-center items-center">
          <CalendarChart />
        </div>
      </div>
    </div>
  );
};

export default StickyWall;