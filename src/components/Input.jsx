import React, { useContext } from "react";
import { ModeContext } from "../context/modeContext";

function Input(props) {
  const {
    id,
    backgroundColor = false,
    border = "border-gray-03",
    ...rest
  } = props;

  const { darkMode } = useContext(ModeContext);

  return (
    <input
      id={id}
      className={`
        py-3 pl-4 text-sm rounded-md w-full border
        ${border}
        ${backgroundColor || ""}
        ${
          darkMode
            ? "bg-[#3b3b3b] text-white border-gray-500 placeholder:text-gray-400"
            : "bg-white text-black"
        }
      `}
      {...rest}
    />
  );
}

export default Input;