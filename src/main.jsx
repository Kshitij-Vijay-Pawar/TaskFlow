import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { getInitialTheme, setTheme } from "./utils/theme.js";
import { TodoContextProvider } from "./context/TodoContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

// prevents theme flicker
setTheme(getInitialTheme());

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <TodoContextProvider>
          <App />
        </TodoContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
