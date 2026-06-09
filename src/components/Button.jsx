function Button(props) {
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
		className={`${baseClasses} ${
		  variantClasses[variant]
		}`}
		type={type}
	  >
		{children}
	  </button>
	);
  }
  
  export default Button;