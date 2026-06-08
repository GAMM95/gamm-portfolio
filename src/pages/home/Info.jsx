import HandSVG from "../../assets/icons/hand.svg";
import FileSVG from "../../assets/icons/files.svg";
import CV_GAMM from "../../assets/doc/CV_Jhonatan_Mantilla.pdf";
import { Typewriter } from "react-simple-typewriter";

const Data = () => {
  return (
    <div className="text-center lg:text-left"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      {/* Titulo Nombre */}
      <h1 className="text-3xl lg:text-5xl font-semibold mb-5 flex justify-center lg:justify-start items-center gap-2">
        Jhonatan Mantilla
        <img src={HandSVG} className="hidden sm:inline w-8 h-8" alt="hand" />
      </h1>

      {/* Subtitulo Ingeniero - Desarrollador */}
      <h3 className="text-lg lg:text-xl text-gray-600 mb-5">
        <Typewriter
          words={[
            "Backend Developer",
            "Java & Spring Boot",
            "API REST Designer",
            "Angular & React",
            "Python & Machine Learning",
            "Flutter Developer",
          ]}
          loop
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={60}
          delaySpeed={1000}
        />
      </h3>

      {/* Descripción */}
      <p className="max-w-xl mb-4 text-justify">
        Ingeniero de <strong>sistemas y minas</strong> con enfoque en{" "}
        <strong>desarrollo backend</strong>. Especializado en construir APIs
        robustas con <strong>Java / Spring Boot</strong> y bases de datos
        relacionales. Complemento con frontend en React, Angular y Tailwind CSS,
        y desarrollo móvil con Flutter.{" "}
        <br />
        Me enfoco en arquitecturas limpias y código mantenible, orientado siempre
        a resultados concretos.
      </p>

      {/* Boton de descargar CV */}
      <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center items-center">

        {/* Desktop: Vista previa */}
        <a className="hidden sm:flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[var(--button-color)] text-white first-line:hover:bg-[var(--title-color-dark)] transition"
          href={CV_GAMM}
          target="_blank"
          rel="noopener noreferrer"
        >
          Vista previa CV
          <img src={FileSVG} className="w-5" alt="files" />
        </a>

        {/* Mobile: Descargar */}
        <a className="flex sm:hidden items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[var(--button-color)] text-white hover:bg-[var(--title-color-dark)] transition"
          href={CV_GAMM}
          download
        >
          Descargar CV
          <img src={FileSVG} className="w-5" alt="files" />
        </a>

      </div>

    </div>
  );
};

export default Data;
