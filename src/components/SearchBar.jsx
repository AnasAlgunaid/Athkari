import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";

const SearchBar = ({ placeholder = "البحث", onChange }) => {
  const handleChange = (event) => {
    if (event.target.value) {
      setShowClearButton(true);
    } else {
      setShowClearButton(false);
    }
    // Update the search value state
    setSearchValue(event.target.value);

    // Call the onChange function with the input value
    onChange(event.target.value);
  };

  const [searchValue, setSearchValue] = useState("");

  const onClickClear = () => {
    // document.getElementById("search").value = "";
    onChange("");
    setSearchValue("");
    setShowClearButton(false);
  };

  const [showClearButton, setShowClearButton] = useState(false);

  return (
    <div className="my-4 flex flex-row-reverse justify-end items-center relative">
      <IoCloseOutline
        className={`dark:text-white absolute left-0 ml-4 text-2xl opacity-40 cursor-pointer active:text-greenColor duration-200 showClearButton active:scale-105 ${
          showClearButton ? "absolute" : "hidden"
        }`}
        onClick={onClickClear}
      />
      <input
        id="search"
        type="text"
        value={searchValue}
        placeholder={placeholder}
        className="w-full py-4 px-12 border border-gray-300 dark:border-gray-700  rounded-3xl focus:outline-none dark:focus:outline-none focus:border-greenColor dark:focus:border-gray-600 dark:bg-dark_grayColor dark:text-white "
        onChange={handleChange}
      />
      <FiSearch className="absolute mr-4 text-xl opacity-40 dark:text-white" />
    </div>
  );
};

export default SearchBar;
