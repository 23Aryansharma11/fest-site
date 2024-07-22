import React, { useId } from "react";
const Input = React.forwardRef(function Input(
  {
    label,
    type = "text",
    className = "",
    requiredInput = true, // Removes the required symbol "*" from the label
    ...props
  },
  ref
) {
  const id = useId(); //To give (random) id to all input fields
  return (
    <div className="w-full flex flex-col items-start">
      {label && (
        <label className="  mb-1 pl-2" htmlFor={id}>
          {label} {requiredInput && "*"}
        </label>
      )}
      <input
        type={type}
        className={`px-3 py-2 rounded-lg bg-[#E0E0E0] text-black outline-none focus:bg-gray-50 duration-200 focus:ring-0 w-full ${className}`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});

export default Input;
