function CheckBox(props) {
    const { label, id, ...rest } = props;
  
    return (
      <>
        <input
          className="accent-primary"
          id={id}
          {...rest}
        />
  
        <label
          htmlFor={id}
          className="text-xs text-gray-01 ml-2"
        >
          {label}
        </label>
      </>
    );
  }
  
  export default CheckBox;