import React from "react";
import PulseLoader from "react-spinners/PulseLoader";

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[70vh]">
      <PulseLoader color="#00ac68" size="20px" />
      <p className="text-center mt-4 text-lg font-bold text-secondaryTextColor">
        جاري التحميل
      </p>
    </div>
  );
};

export default LoadingSpinner;
