import React from "react";

const Button = ({ text, bg = "bg-greenColor" }) => {
  return (
    <button
      className={`${bg} text-white px-4 py-2 rounded-lg mt-4 hover:opacity-80 duration-300`}
    >
      {text}
    </button>
  );
};

export default Button;
