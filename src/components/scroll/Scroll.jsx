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
      aria-label="Volver arriba"
      className={`
        fixed
        right-4 sm:right-6
        bottom-20 md:bottom-8
        w-10 h-10
        flex items-center justify-center
        rounded-xl
        bg-[var(--button-color)] dark:bg-[var(--fab-color)]
        text-white dark:text-[var(--fab-text-color)]
        hover:bg-[var(--button-color-hover)] dark:hover:bg-[var(--fab-hover)]
        hover:-translate-y-1
        shadow-lg
        z-[var(--z-tooltip)]
        transition-all duration-300
        ${showScroll ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}
      `}
    >
      <i className="uil uil-arrow-up text-lg" aria-hidden="true" />
    </a>
  );
};

export default Scroll;