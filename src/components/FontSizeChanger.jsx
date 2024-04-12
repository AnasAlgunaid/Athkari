import React, { useState } from "react";
import { handler } from "tailwindcss-animate";

const FontSizeChanger = () => {
  const fontSizes = ["text-sm", "text-base", "text-lg", "text-xl", "text-2xl"];
  const [fontSize, setFontSize] = useState(1);
  const increaseFontSize = () => {
    if (fontSize < fontSizes.length - 1) {
      document.documentElement.classList.remove(fontSizes[fontSize]);
      setFontSize(fontSize + 1);
      document.documentElement.classList.add(fontSizes[fontSize + 1]);
    }
  };

  const decreaseFontSize = () => {
    if (fontSize > 0) {
      document.documentElement.classList.remove(fontSizes[fontSize]);
      setFontSize(fontSize - 1);
      document.documentElement.classList.add(fontSizes[fontSize - 1]);
    }
  };
  return (
    <div>
      <div className="flex justify-center items-center gap-2 ">
        <button
          className="border-2 border-gray-200 text-white h-[40px] w-[40px] rounded-full hover:bg-blackColor hover:border-blackColor duration-300 flex justify-center items-center "
          onClick={increaseFontSize}
        >
          أ +
        </button>
        <button
          className="border-2 border-gray-200 text-white h-[40px] w-[40px]  rounded-full hover:bg-blackColor hover:border-blackColor duration-300 flex justify-center items-center"
          onClick={decreaseFontSize}
        >
          أ -
        </button>
      </div>
    </div>
  );
};

export default FontSizeChanger;
