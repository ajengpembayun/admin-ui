import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

function Button(props) {
	const { theme } = useContext(ThemeContext);
	const {
	  children,
	  type = "submit",
	  variant = "primary",
	} = props;
  
	const baseClasses =
	  "h-12 rounded-md text-sm w-full flex items-center justify-center border";
  
	  const variantClasses = {
		primary: "bg-[#299d91] text-white",
		secondary: "bg-[#e8e8e8] text-[#878787]",
	  };
  
	return (
		<button
		className="text-white rounded-md py-3 w-full"
		style={{ backgroundColor: theme.color }}
	  >
		{children}
	  </button>
	);
  }
  
  export default Button;