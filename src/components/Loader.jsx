import React from "react";
import { Triangle } from "react-loader-spinner";

const Loader = ({ loading }) => {
  return (
    <div
      className={
        loading
          ? "w-full flex justify-center items-center"
          : "min-h-screen w-full flex justify-center items-center bg-white"
      }
    >
      <Triangle
        height="120"
        width="120"
        color="#2C394B"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
