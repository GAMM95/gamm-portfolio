const Footer = () => {
  return (
    <footer className="bg-[var(--header-footer-color)] border-t border-black/10 py-8">
      <div className="flex justify-center">
        <div className="w-full max-w-3xl px-4">
          <h1 className="text-center mb-8 text-[var(--title-color)] text-2xl font-semibold">
            Mi Portafolio
          </h1>

          <ul className="flex justify-center gap-6 mb-8">
            <li>
              <a
                href="#habilidades"
                className="text-[var(--title-color)] hover:text-[var(--hover-text-color)] transition-colors"
              >
                Habilidades
              </a>
            </li>

            <li>
              <a
                href="#proyectos"
                className="text-[var(--title-color)] hover:text-[var(--hover-text-color)] transition-colors"
              >
                Proyectos
              </a>
            </li>
          </ul>

          <div
            className="flex justify-center gap-5"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <a
              href="https://www.linkedin.com/in/jhonatan-mantilla-jmm190395/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--button-color)] text-[var(--container-color)] p-2 rounded-lg inline-flex text-xl transition-all duration-300 hover:bg-[var(--title-color-dark)] hover:-translate-y-1"
            >
              <i className="uil uil-linkedin-alt"></i>
            </a>

            <a
              href="https://github.com/GAMM95"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--button-color)] text-[var(--container-color)] p-2 rounded-lg inline-flex text-xl transition-all duration-300 hover:bg-[var(--title-color-dark)] hover:-translate-y-1"
            >
              <i className="uil uil-github-alt"></i>
            </a>
          </div>

          <span
            className="block mt-8 text-center text-[var(--title-color)] text-sm"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="2000"
          >
            &#169; Hecho por <strong>Jhonatan Mantilla</strong> - <strong>GAMM</strong>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
