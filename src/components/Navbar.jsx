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
      <nav className="flex justify-between items-center h-20 mx-auto container">
        <Link to="/">
          <img
            src="assets/images/main_logo.svg"
            alt="Athkari Logo"
            className="w-16 h-16"
          />
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
