import { Chart } from "react-google-charts";
import { useTheme } from "../../../context/ThemeContext";
import { useTodoContext } from "../../../context/useTodoContext";



const ColumnChart = () => {
  const { theme } = useTheme(); // ✅ hook INSIDE component
  const textColor = theme === "dark" ? "#e5e7eb" : "#111827";

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
    const piaColor =
    theme === "dark"
      ? {
          high: "#f87171",
          medium: "#f97316",
          low: "#facc15",
          completed: "#22c55e",
        }
      : {
          high: "#ef4444",
          medium: "#fb923c",
          low: "#facc15",
          completed: "#22c55e",
        };
  const data = [
  ["Element", "Density", { role: "style" }],
  ["High", priorityCount.high, piaColor.high],
  ["Medium", priorityCount.medium, piaColor.medium],
  ["Low", priorityCount.low, piaColor.low],
  ["Completed", priorityCount.completed, piaColor.completed],
];

  return (
    <div className="w-full h-full">
      <Chart
        key={theme}
        chartType="ColumnChart"
        width="100%"
        height="100%"
        data={data}
        options={{
          backgroundColor: "transparent",
          legend: { textStyle: { color: textColor } },
          hAxis: {
            textStyle: { color: textColor },
            titleTextStyle: { color: textColor },
          },
          vAxis: {
            textStyle: { color: textColor },
            titleTextStyle: { color: textColor },
          },
          titleTextStyle: { color: textColor },
        }}
      />
    </div>
  );
};

export default ColumnChart;
