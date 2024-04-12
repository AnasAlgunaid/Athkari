import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";
import FontSizeChanger from "./FontSizeChanger";

const Navbar = () => {
  const [dark, setDark] = useState(false);
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <header className="bg-greenColor text-white">
      <nav className="flex justify-between items-center py-6 mx-auto container">
        <Link to="/">
          <h1 className="text-xl sm:text-2xl font-extrabold ">أذكاري</h1>
        </Link>
        <div className="flex justify-center items-center gap-2 text-[16px]">
          <FontSizeChanger />
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
