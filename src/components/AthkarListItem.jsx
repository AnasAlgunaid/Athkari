import React from "react";
import { Link } from "react-router-dom";
import { FaPrayingHands } from "react-icons/fa";
const AthkarListItem = ({ title = "عنوان", subtitle = "عنوان بديل" }) => {
  return (
    <Link to={`/athkars/${id}`}>
      <div className="bg-whiteColor p-4 rounded-lg duration-300 hover:scale-105 hover:bg-greenColor group cursor-pointer h-full">
        <div className="h-10 w-10 bg-greenColor rounded-full text-white flex justify-center items-center group-hover:bg-white group-hover:text-greenColor mb-2">
          <FaPrayingHands className="text-lg" />
        </div>
        <div>
          <p className="text-blackColor text-lg font-semibold group-hover:text-white ">
            {title}
          </p>
          <p className="text-blackColor opacity-70 group-hover:text-white">
            {subtitle}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default AthkarListItem;
