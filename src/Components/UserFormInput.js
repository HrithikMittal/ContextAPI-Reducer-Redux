import React from "react";

const useFormInput = (initialValue) => {
  const [value, setValue] = React.useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleReset = () => {
    setValue("");
  };

  return {
    value,
    onChange: handleChange,
    onReset: handleReset,
  };
};

export default useFormInput;
