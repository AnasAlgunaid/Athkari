import React, { useState } from "react";

import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  const [dark, setDark] = useState(false);
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <header className="bg-greenColor text-white">
      <nav className="flex justify-between items-center py-6 mx-auto container">
        <h1 className="text-2xl font-extrabold ">أذكاري</h1>
        <div>
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
