import { Chart } from "react-google-charts";
import { useTheme } from "../../../context/ThemeContext";
import { useTodoContext } from "../../../context/useTodoContext";

const PieChart = () => {
  const { theme } = useTheme();

  const textColor = theme === "dark" ? "#e5e7eb" : "#111827";
  const piaColor =
    theme === "dark"
      ? {
          high: "#f87171",
          medium: "#f97316",
          low: "#facc15",
          success: "#22c55e",
        }
      : {
          high: "#ef4444",
          medium: "#fb923c",
          low: "#facc15",
          success: "#22c55e",
        };

  const { todos } = useTodoContext();

  // ✅ derive counts (NO useEffect)
  const priorityCount = todos.reduce(
    (count, todo) => {
      if (todo.priority === "high") count.high += 1;
      if (todo.priority === "medium") count.medium += 1;
      if (todo.priority === "low") count.low += 1;
      if (todo.status === "completed") count.completed += 1;
      return count;
    },
    { high: 0, medium: 0, low: 0, completed: 0 }
  );

  const data = [
    ["Task By Priority", "Total Task"],
    ["high", priorityCount.high],
    ["medium", priorityCount.medium],
    ["low", priorityCount.low],
    ["completed", priorityCount.completed],
  ];

  const options = {
    backgroundColor: "transparent",
    is3D: true,
    pieHole: 0.4,

    titleTextStyle: {
      color: textColor,
      fontSize: 14,
      bold: true,
    },

    legend: {
      position: "bottom",
      textStyle: {
        color: textColor,
        fontSize: 12,
      },
    },

    pieSliceTextStyle: {
      color: textColor,
      fontSize: 11,
    },
    colors: [piaColor.high, piaColor.medium, piaColor.low, piaColor.success],
  };

  return (
    <div
      className="w-full h-full rounded-2xl border border-(--border)"
      style={{ backgroundColor: "var(--surface)" }}
    >
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default PieChart;
