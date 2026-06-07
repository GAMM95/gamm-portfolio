import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="
        fixed
        right-3 sm:right-5
        bottom-32 md:bottom-36 sm:bottom-36
        bg-[var(--button-color)]  dark:bg-[var(--fab-color)]
        text-white               dark:text-[var(--fab-text-color)]
        hover:bg-[var(--button-color-hover)] dark:hover:bg-[var(--fab-hover)]
        p-2 rounded-md
        z-[var(--z-tooltip)]
        transition-all duration-300
      "
      aria-label="Cambiar tema"
    >
      <i className={`uil ${darkMode ? "uil-sun" : "uil-moon"} text-xl`}></i>
    </button>
  );
};

export default ThemeToggle;