import React, { useState, useEffect } from "react";
import logo from "../../assets/gamm-logo.ico";

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#inicio");
  const [scrollHeader, setScrollHeader] = useState(false);

  // Shadow al hacer scroll
  useEffect(() => {
    const handleScrollHeader = () => setScrollHeader(window.scrollY >= 80);
    window.addEventListener("scroll", handleScrollHeader);
    return () => window.removeEventListener("scroll", handleScrollHeader);
  }, []);

  // Scroll activo y cierre de menú mobile
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const scrollActive = () => {
      const scrollY = window.pageYOffset;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 50;
        const sectionHeight = section.offsetHeight;
        const sectionId = `#${section.getAttribute("id")}`;
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveNav(sectionId);
        }
      });
      if (Toggle) showMenu(false);
    };
    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, [Toggle]);

  const handleLinkClick = (id) => {
    setActiveNav(id);
    if (Toggle) showMenu(false);
  };

  const navItems = [
    { id: "#inicio", icon: "uil-estate", text: "Inicio" },
    { id: "#habilidades", icon: "uil-file-alt", text: "Habilidades" },
    { id: "#proyectos", icon: "uil-scenery", text: "Proyectos" },
    { id: "#formacion", icon: "uil-graduation-cap", text: "Formación" },
    { id: "#contacto", icon: "uil-message", text: "Contacto" },
  ];

  return (
    <header
      className={`
        fixed w-full left-0 z-50
        bg-[var(--header-footer-color)]
        transition-shadow
        ${scrollHeader ? "shadow-md" : ""}
        md:top-0
        max-md:bottom-0
        overflow-x-hidden
      `}
    >
      <nav className="max-w-screen-xl mx-auto h-16 flex items-center justify-between px-4 relative">
        {/* Logo y botón menú en el mismo div */}
        <div className="w-full flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center">
            <img src={logo} alt="logo" className="w-14 md:w-12 max-md:w-10" />
          </a>

          {/* Botón menú mobile */}
          <div
            className="text-2xl cursor-pointer md:hidden"
            onClick={() => showMenu(true)}
          >
            <i className="uil uil-apps"></i>
          </div>
        </div>

        {/* Menú */}

        <div
          className={`
          fixed inset-x-0 bottom-0 transform ${Toggle ? "translate-y-0" : "translate-y-full"}
          bg-[var(--nav-menu-color)] px-4 pb-16 pt-8 shadow-[0_-1px_4px_rgba(0,0,0,0.15)] rounded-t-3xl transition-transform duration-300
          md:static md:flex md:flex-1 md:justify-end md:items-center md:pt-0 md:pb-0 md:p-0 md:shadow-none md:rounded-none md:bg-transparent md:-mt-5
          z-50`}
        >

          <ul className="grid grid-cols-3 gap-8 md:flex md:gap-8 md:items-center">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`
            flex flex-col items-center text-sm font-medium transition-colors
            ${activeNav === item.id
                      ? "text-[var(--hover-text-color)]"
                      : "text-[var(--title-color)] hover:text-[var(--hover-text-color)]"
                    }
          `}
                >
                  <i className={`uil ${item.icon} text-lg md:hidden`}></i>
                  {item.text}
                </a>
              </li>
            ))}
          </ul>

          {/* Botón cerrar menú mobile */}
          <i
            className="uil uil-times absolute right-6 bottom-4 text-2xl cursor-pointer text-[var(--title-color)] hover:text-[var(--title-color-dark)] md:hidden"
            onClick={() => showMenu(false)}
          />
        </div>

      </nav>
    </header>
  );
};

export default Header;
