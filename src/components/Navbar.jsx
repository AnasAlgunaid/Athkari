import React from "react";

const Navbar = () => {
  return (
    <header className="bg-greenColor text-white">
      <nav className="flex justify-center sm:justify-between items-center py-6 mx-auto container">
        <h1 className="text-2xl font-extrabold ">أذكاري</h1>
        <div>
          <ul className="hidden sm:flex">
            <li>
              <a href="/" className="mr-4">
                الرئيسية
              </a>
            </li>
            <li>
              <a href="/" className="mr-4">
                حولنا
              </a>
            </li>

            <li>
              <a href="/" className="mr-4">
                تواصل معنا
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
