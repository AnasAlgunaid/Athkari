import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-dark_grayColor">
      <div className="container py-4">
        <p className="text-center text-blackColor dark:text-gray-300  ">
          تطوير{" "}
          <a
            className="text-greenColor hover:opacity-80 "
            href="https://algunaid.com/"
            target="_blank"
          >
            أنس الجنيد
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
