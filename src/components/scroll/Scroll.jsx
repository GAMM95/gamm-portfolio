// export default Scroll;
import React, { useEffect, useState } from "react";

const Scroll = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY >= 560);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="#inicio"
      className={`
        fixed
        right-3 sm:right-5  
        bottom-16 md:bottom-20 sm:bottom-20
        bg-[var(--button-color)] text-[var(--container-color)]
        p-1 px-2 rounded-md
        z-[var(--z-tooltip)]
        transition-all duration-300
        transform
        ${showScroll ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
    >
      <i className="uil uil-arrow-up text-xl md:text-lg sm:text-base"></i>
    </a>
  );
};

export default Scroll;
