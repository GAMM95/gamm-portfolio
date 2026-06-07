const Social = () => {
  return (
    <div
      className="flex flex-row justify-center gap-6 lg:flex-col lg:gap-4 text-xl
                 text-[var(--button-color)] dark:text-[var(--icon-color)]"
      data-aos="fade-right"
      data-aos-duration="1500"
    >
      {/* Icono de linkedin */}
      <a
        className="hover:text-[var(--hover-text-color)] transition transform hover:-translate-y-1"
        href="https://www.linkedin.com/in/jhonatan-mantilla-jmm190395/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>

      {/* Icono de github */}
      <a
        className="hover:text-[var(--hover-text-color)] transition transform hover:-translate-y-1"
        href="https://github.com/GAMM95"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;