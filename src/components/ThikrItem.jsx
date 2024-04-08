import React, { useState } from "react";

const ThikrItem = ({ text, repeat = 1, audio }) => {
  const [harakat, setHarakat] = useState(true);
  let repeatText = "";
  if (repeat == 1) {
    repeatText = "مرة واحدة";
  } else if (repeat == 2) {
    repeatText = "مرتين";
  } else {
    repeatText = `${repeat} مرات`;
  }

  let parts = text.split(/(﴿[^﴾]*﴾)/);

  // Output the split parts
  return (
    <div className="bg-whiteColor p-4 rounded-xl my-4">
      <p className=" text-blackColor text-lg md:text-xl mb-4 leading-[3rem] md:leading-[4rem]">
        {parts.map((part, index) => {
          if (part.startsWith("﴿")) {
            return (
              <span key={index} className="text-greenColor">
                {part}
              </span>
            );
          } else {
            return part;
          }
        })}
      </p>
      <audio src={audio} controls></audio>
    </div>
  );
};

export default ThikrItem;
