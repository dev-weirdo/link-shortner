import React from "react";
import { useState } from "react";

const GetInput = ({ setLink }) => {
  const [inputValue, setInputValue] = useState("");
  const handleLink = () => {
    setLink(inputValue);
    setInputValue("");
  };
  return (
    <div className="flex flex-col items-center md:flex-row justify-center gap-3">
      <input
        className="rounded px-3 py-2 outline-none text-center"
        onKeyDown={(e) => e.key === "Enter" && handleLink()}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
      />
      <button
        className="bg-gray-800 uppercase text-white px-3 py-2 rounded"
        onClick={handleLink}
      >
        Shorten
      </button>
    </div>
  );
};

export default GetInput;
