import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { useTodoContext } from "../../../context/useTodoContext";
import getTaskCountByDate from "../../../utils/stats";

// const data = [
//   [{ type: "date", id: "Date" }, { type: "number", id: "Completed" }],
//   [new Date(2023, 2, 4), 10],
//   [new Date(2023, 2, 5), 3],
//   [new Date(2023, 2, 7), 1],
//   [new Date(2023, 2, 8), 2],
//   [new Date(2023, 2, 12), 1],
//   [new Date(2023, 2, 13), 1],
//   [new Date(2023, 2, 15), 1],
//   [new Date(2023, 2, 16), 4],
// ];

// 🔑 helper
const getCellSize = () => {
  const w = window.innerWidth;
  if (w < 640) return 4;
  if (w < 768) return 6;
  if (w < 1024) return 8;
  if (w < 1440) return 11;
  if (w < 2160) return 12;
  if (w < 2960) return 16;
  if (w < 4320) return 20;
  return 26;
};

const getCalendarChartData = (todos) => {
  const countMap = getTaskCountByDate(todos);

  return [
    [
      { type: "date", id: "Date" },
      { type: "number", id: "Tasks" },
    ],
    ...Object.entries(countMap).map(([dateStr, count]) => {
      const d = new Date(dateStr);
      return [new Date(d.getFullYear(), d.getMonth(), d.getDate()), count];
    }),
  ];
};

const CalendarChart = () => {
  const [cellSize, setCellSize] = useState(getCellSize());
  const { todos } = useTodoContext();
  const data = getCalendarChartData(todos);

  useEffect(() => {
    const onResize = () => setCellSize(getCellSize());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const options = {
    backgroundColor: "transparent",
    calendar: {
      cellSize,
      yearLabel: { color: "var(--text)" },
      monthLabel: { color: "var(--text-muted)" },
      dayOfWeekLabel: { color: "var(--text-muted)" },
    },
    noDataPattern: {
      backgroundColor: "#76a7fa",
      color: "#a0c3ff",
    },
  };

  return (
    <div
      className="
        w-full bg-(--surface) rounded-2xl py-4 pl-4
        h-38 sm:h-44 md:h-60 lg:h-72
      "
    >
      <h2 className="text-lg font-bold text-center mt-4 ">
        Task Progress Overview
      </h2>

      <div className="w-full h-full">
        <Chart
          chartType="Calendar"
          width="100%"
          height="100%"
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};

export default CalendarChart;
