function LabeledInput(props) {
    const { label, id, ...rest } = props;
  
    return (
      <>
        <label
          htmlFor={id}
          className="block text-sm mb-2"
        >
          {label}
        </label>
  
        <input
          id={id}
          className="
            py-3 px-4
            text-sm
            rounded-md
            w-full
            bg-special-mainBg
            border border-gray-05
          "
          {...rest}
        />
      </>
    );
  }
  
  export default LabeledInput;