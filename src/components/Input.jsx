function Input({ backgroundColor = "bg-special-mainBg", border = "border-gray-05", ...props }) {
  return (
    <input
      className={`
        py-3 px-4
        text-sm
        rounded-md
        w-full
        ${backgroundColor}
        border ${border}
      `}
      {...props}
    />
  );
}

export default Input;
