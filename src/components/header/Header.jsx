import React, { useState, useEffect } from "react";
import logo from "../../assets/gamm-logo.ico";

/**
 * Props:
 *   isDark      {boolean}  — estado del tema actual
 *   toggleTheme {function} — alterna entre light y dark
 */
const Header = ({ isDark, toggleTheme }) => {
  const [Toggle, showMenu]       = useState(false);
  const [activeNav, setActiveNav] = useState("#inicio");
  const [scrollHeader, setScrollHeader] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrollHeader(window.scrollY >= 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const onScroll = () => {
      const scrollY = window.pageYOffset;
      sections.forEach((s) => {
        const top    = s.offsetTop - 50;
        const id     = `#${s.getAttribute("id")}`;
        if (scrollY > top && scrollY <= top + s.offsetHeight) setActiveNav(id);
      });
      if (Toggle) showMenu(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [Toggle]);

  const handleLinkClick = (id) => {
    setActiveNav(id);
    showMenu(false);
  };

  const navItems = [
    { id: "#inicio",      icon: "uil-estate",        text: "Inicio"      },
    { id: "#habilidades", icon: "uil-file-alt",       text: "Habilidades" },
    { id: "#proyectos",   icon: "uil-scenery",        text: "Proyectos"   },
    { id: "#formacion",   icon: "uil-graduation-cap", text: "Formación"   },
    { id: "#contacto",    icon: "uil-message",        text: "Contacto"    },
  ];

  return (
    <header
      className={`
        fixed w-full left-0 z-50
        bg-[var(--header-footer-color)]
        border-b border-transparent
        transition-all duration-300
        md:top-0 max-md:bottom-0
        overflow-x-hidden
        ${scrollHeader
          ? "shadow-md border-b-[var(--accent-border)]"
          : ""}
      `}
    >
      <nav className="max-w-screen-xl mx-auto h-16 flex items-center justify-between px-4">

        {/* Logo */}
        <a href="#inicio" className="flex items-center shrink-0">
          <img src={logo} alt="GAMM logo" className="w-14 md:w-12 max-md:w-10" />
        </a>

        {/* Desktop: nav + theme toggle */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-7 items-center">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`
                    text-sm font-medium transition-colors duration-200 relative
                    after:absolute after:bottom-[-4px] after:left-0 after:h-[2px]
                    after:rounded-full after:transition-all after:duration-300
                    ${activeNav === item.id
                      ? "text-[var(--hover-text-color)] after:w-full after:bg-[var(--hover-text-color)]"
                      : "text-[var(--title-color)] hover:text-[var(--hover-text-color)] after:w-0 after:bg-[var(--hover-text-color)]"
                    }
                  `}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme toggle desktop */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
          >
            <i className={`uil ${isDark ? "uil-sun" : "uil-moon"}`} aria-hidden="true" />
          </button>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
          >
            <i className={`uil ${isDark ? "uil-sun" : "uil-moon"}`} aria-hidden="true" />
          </button>

          <button
            className="text-2xl p-1 rounded-md transition-colors"
            style={{ color: "var(--title-color)" }}
            onClick={() => showMenu(true)}
            aria-label="Abrir menú"
          >
            <i className="uil uil-apps" aria-hidden="true" />
          </button>
        </div>

        {/* Mobile menu drawer */}
        <div
          className={`
            fixed inset-x-0 bottom-0 z-50
            bg-[var(--nav-menu-color)]
            px-6 pb-16 pt-8
            rounded-t-3xl
            shadow-[0_-1px_4px_rgba(0,0,0,0.15)]
            transition-transform duration-300
            ${Toggle ? "translate-y-0" : "translate-y-full"}
            md:hidden
          `}
        >
          <ul className="grid grid-cols-3 gap-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`
                    flex flex-col items-center gap-1 text-xs font-medium transition-colors
                    ${activeNav === item.id
                      ? "text-[var(--hover-text-color)]"
                      : "text-[var(--title-color)] hover:text-[var(--hover-text-color)]"
                    }
                  `}
                >
                  <i className={`uil ${item.icon} text-xl`} aria-hidden="true" />
                  {item.text}
                </a>
              </li>
            ))}
          </ul>

          {/* Cerrar */}
          <button
            className="absolute right-6 bottom-4 text-2xl transition-colors"
            style={{ color: "var(--title-color)" }}
            onClick={() => showMenu(false)}
            aria-label="Cerrar menú"
          >
            <i className="uil uil-times" aria-hidden="true" />
          </button>
        </div>

      </nav>
    </header>
  );
};

export default Header;