import React, { useState } from "react";
import AthkariAudioPlayer from "./AthkariAudioPlayer";
import { MdContentCopy } from "react-icons/md";

const ThikrItem = ({ text, repeat = 1, audio, elementIndex }) => {
  const [harakat, setHarakat] = useState(true);
  const [copied, setCopied] = useState(false);

  let parts = text.split(/(﴿[^﴾]*﴾)/);

  // Output the split parts
  return (
    <section className="bg-whiteColor dark:bg-dark_grayColor p-4 rounded-xl my-4 ">
      <div className="flex flex-row-reverse justify-between items-center">
        <div className="flex flex-row-reverse gap-2">
          <MdContentCopy
            className="text-blackColor dark:text-white opacity-60 text-2xl hover:text-greenColor dark:hover:text-greenColor active:text-greenColor cursor-pointer hover:scale-105 duration-300"
            onClick={() => {
              navigator.clipboard.writeText(text);
              setCopied(true);
              setTimeout(() => {
                setCopied(false);
              }, 2000);
            }}
          />
          {copied && <p className=" text-greenColor  ">تم نسخ النص</p>}
        </div>
        <div className="bg-greenColor h-10 w-10 rounded-full flex justify-center items-center font-extrabold text-white text-2xl my-2">
          {elementIndex}
        </div>
      </div>

      <p className=" text-blackColor dark:text-white text-lg md:text-xl mb-4 leading-[3rem] md:leading-[4rem]">
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
      <AthkariAudioPlayer source={audio} />
    </section>
  );
};

export default ThikrItem;
