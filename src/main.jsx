import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.jsx";
import { ThemeProvider } from "./components/common/ThemeProvider.jsx";
import RouterProvider from "./router/RouterProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider>
        <App />
      </RouterProvider>
    </ThemeProvider>
  </StrictMode>
);
