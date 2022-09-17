import React from "react";
import { useState } from "react";

const GetInput = ({ setLink }) => {
  const [inputValue, setInputValue] = useState("");
  const handleLink = () => {
    setLink(inputValue);
    setInputValue("");
  };
  return (
    <div className="flex justify-center gap-3">
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
      />
      <button onClick={handleLink}>Shorten</button>
    </div>
  );
};

export default GetInput;
