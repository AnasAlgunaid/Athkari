import React from "react";

const SectionTitle = ({ title = "عنوان" }) => {
  return <h2 className="text-3xl my-6 text-center font-extrabold">{title}</h2>;
};

export default SectionTitle;
