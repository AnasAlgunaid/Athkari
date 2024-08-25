import React, { useState, useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const ThemeSwitcher = () => {
  // Retrieve and parse the stored preference, or use the system preference
  const storedPreference = localStorage.getItem("isDarkMode");
  const userPrefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Function to validate and parse the stored preference
  const getInitialDarkModeState = () => {
    if (storedPreference === null) {
      return userPrefersDark; // Default to system preference
    }

    try {
      // Attempt to parse the stored value as JSON
      const parsedPreference = JSON.parse(storedPreference);
      // Ensure that the parsed value is a boolean
      if (typeof parsedPreference === "boolean") {
        return parsedPreference;
      }
    } catch (error) {}

    // If parsing fails or value is not boolean, default to system preference
    return userPrefersDark;
  };

  // Initialize state
  const [isDarkMode, setIsDarkMode] = useState(getInitialDarkModeState);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("isDarkMode", JSON.stringify(newMode)); // Save as string
      return newMode;
    });
  };

  return (
    <DarkModeSwitch
      checked={isDarkMode}
      onChange={toggleDarkMode}
      sunColor="#fff"
      size={28}
    />
  );
};

export default ThemeSwitcher;
