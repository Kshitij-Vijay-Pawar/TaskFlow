import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = ({ device }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      {device === "small" ? (
        <button
          onClick={toggleTheme}
          className="border border-(--border) px-4 py-1 rounded-lg"
        >

          {theme === "light" ? "🌙" : "☀️"}
        </button>
      ) : (
        <button
          onClick={toggleTheme}
          className="border border-(--border) px-4 py-1 rounded-lg"
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      )}
    </>
  );
};

export default ThemeToggle;
