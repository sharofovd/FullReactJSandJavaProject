import { useState } from "react";

// const useHandleValue = initialValue => {
//   const [value, setValue] = useState(initialValue);
//   const handleChange = event => set
// }

export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: {
      value,
      onChange: event => {
        setValue(event.target.value);
      }
    }
  };
};