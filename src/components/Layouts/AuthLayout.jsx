import React, { useContext } from "react";
import Logo from "../Logo";
import { ThemeContext } from "../../context/themeContext";
import { ModeContext } from "../../context/modeContext";

function AuthLayout({ children }) {
  const { theme } = useContext(ThemeContext);
  const { darkMode } = useContext(ModeContext);

  return (
    <main
      className={`
        min-h-screen flex justify-center items-center
        ${theme.name}
        ${darkMode ? "bg-[#2d2d2d] text-white" : "bg-special-mainBg"}
      `}
    >
      <div className="w-full max-w-sm">
        <Logo />
        {children}
      </div>
    </main>
  );
}

export default AuthLayout;