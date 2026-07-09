import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

function Button(props) {
  const { theme } = useContext(ThemeContext);

  const {
    children,
    type = "submit",
    variant = "primary",
    ...rest
  } = props;

  return (
    <button
      type={type}
      {...rest}
      className={`rounded-md py-3 w-full ${
        variant === "secondary"
          ? "bg-[#E8E8E8] text-[#878787]"
          : "text-white"
      }`}
      style={variant === "primary" ? { backgroundColor: theme.color } : {}}
    >
      {children}
    </button>
  );
}

export default Button;