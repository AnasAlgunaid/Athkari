import React from "react";
import { Link } from "react-router-dom";
import { FaPrayingHands } from "react-icons/fa";

const AthkarListItem = ({
  title = "عنوان",
  subtitle = "عنوان بديل",
  id,
  soundSrc,
}) => {
  return (
    <Link to={`/athkars/${id}`} state={{ source: soundSrc }}>
      <div className="bg-whiteColor dark:bg-dark_grayColor p-4 rounded-lg duration-300 hover:scale-105 hover:bg-greenColor dark:hover:bg-greenColor group cursor-pointer h-full ">
        <div className="h-10 w-10 bg-greenColor rounded-full  flex justify-center items-center group-hover:bg-white group-hover:text-greenColor mb-2 text-white">
          <FaPrayingHands className="text-lg " />
        </div>
        <div className="text-blackColor dark:text-white">
          <p className="text-lg font-bold group-hover:text-white ">{title}</p>
          <p className="opacity-70 dark:opacity-50 group-hover:text-white">
            {subtitle}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default AthkarListItem;
