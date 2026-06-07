const Footer = () => {
  const navLinks = [
    { href: "#inicio",      label: "Inicio"      },
    { href: "#habilidades", label: "Habilidades" },
    { href: "#proyectos",   label: "Proyectos"   },
    { href: "#formacion",   label: "Formación"   },
    { href: "#contacto",    label: "Contacto"    },
  ];

  return (
    <footer
      className="
        bg-[var(--header-footer-color)]
        border-t border-[var(--accent-border)]
        dark:border-[rgba(13,138,110,0.2)]
        py-10
      "
    >
      <div className="flex justify-center">
        <div className="w-full max-w-3xl px-6 flex flex-col items-center gap-7">

          {/* Nombre / título */}
          <div className="flex flex-col items-center gap-1">
            <h2
              className="text-lg font-semibold tracking-wide"
              style={{ color: "var(--title-color)" }}
            >
              GAMM
            </h2>
            <span className="text-xs" style={{ color: "var(--disabled-color)" }}>
              Jhonatan Mantilla · Desarrollador Backend
            </span>
          </div>

          {/* Nav links */}
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="
                    text-sm transition-colors duration-200
                    text-[var(--title-color)]
                    hover:text-[var(--hover-text-color)]
                  "
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Separador */}
          <div
            className="w-16 h-px"
            style={{ background: "var(--accent-border)" }}
          />

          {/* Redes sociales */}
          <div
            className="flex justify-center gap-4"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <a
              href="https://www.linkedin.com/in/jhonatan-mantilla-jmm190395/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
                w-10 h-10 rounded-lg inline-flex items-center justify-center text-xl
                bg-[var(--button-color)] dark:bg-[var(--fab-color)]
                text-white dark:text-[var(--fab-text-color)]
                hover:bg-[var(--button-color-hover)] dark:hover:bg-[var(--fab-hover)]
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              <i className="uil uil-linkedin-alt" aria-hidden="true" />
            </a>

            <a
              href="https://github.com/GAMM95"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                w-10 h-10 rounded-lg inline-flex items-center justify-center text-xl
                bg-[var(--button-color)] dark:bg-[var(--fab-color)]
                text-white dark:text-[var(--fab-text-color)]
                hover:bg-[var(--button-color-hover)] dark:hover:bg-[var(--fab-hover)]
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              <i className="uil uil-github-alt" aria-hidden="true" />
            </a>
          </div>

          {/* Copyright */}
          <span
            className="text-sm text-center"
            style={{ color: "var(--text-color)" }}
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="2000"
          >
            © {new Date().getFullYear()} · Hecho por{" "}
            <strong style={{ color: "var(--hover-text-color)" }}>Jhonatan Mantilla</strong>
            {" · "}
            <strong style={{ color: "var(--hover-text-color)" }}>GAMM</strong>
          </span>

        </div>
      </div>
    </footer>
  );
};

export default Footer;