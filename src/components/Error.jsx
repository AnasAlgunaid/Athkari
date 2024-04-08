import React from "react";
import { MdError } from "react-icons/md";

const Error = ({ errorMessage }) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[70vh]">
      <MdError className="text-red-500 text-8xl" />

      <p className="text-center mt-4 text-lg font-bold text-secondaryTextColor">
        {errorMessage}
      </p>
    </div>
  );
};

export default Error;
