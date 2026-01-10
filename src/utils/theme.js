const THEME_KEY = "todo-theme";

export const getInitialTheme = () => {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved) return saved;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export const setTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(THEME_KEY, theme);
};
