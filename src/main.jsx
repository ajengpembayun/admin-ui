import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { ThemeContextProvider } from "./context/themeContext";
import { AuthContextProvider } from "./context/authContext";
import { ModeContextProvider } from "./context/modeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ThemeContextProvider>
        <ModeContextProvider>
          <App />
        </ModeContextProvider>
      </ThemeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);