import HandSVG from '../../assets/hand.svg'
import ContactSVG from '../../assets/send.svg'
import FileSVG from '../../assets/files.svg'
import CV_GAMM from "../../assets/doc/CV_Jhonatan_Mantilla.pdf"
import { Typewriter } from 'react-simple-typewriter'

const Data = () => {
  return (
    <div className="home__data"
      data-aos="fade-up"
      data-aos-duration="1500">

      {/* Titulo Nombre */}
      <h1 className="home__title">Jhonatan Mantilla
        <img src={HandSVG} className='home__hand' alt='handSVG' />
      </h1>

      {/* Desempeño */}
      <h3 className="home__subtitle">
        <Typewriter className='subtitle'
          words={['Ingeniero', 'Programador',]}
          loop
          cursor
          cursorStyle='|'
          typeSpeed={70}
          deleteSpeed={60}
          delaySpeed={1000}
        />
      </h3>

      {/* Descripción del inicio */}
      <p className="home__description">
        Soy <strong>ingeniero de sistemas y de minas</strong> con interés en programación y nuevas tecnologías. Desarrollo soluciones de software con <i>Java, PHP</i>, usando bases de datos <i>relacionales y no relacionales</i>. Tengo experiencia en backend con <i>Spring Boot</i>, frontend con <i>React, Angular y Tailwind CSS</i>, y apps móviles con <i>Flutter</i>.
      </p>

      <p className="home__description">
        Me motiva el aprendizaje continuo y la resolución de desafíos tecnológicos, participando en proyectos diversos que fortalecen mis habilidades en backend y frontend. Actualmente, amplío mis conocimientos en <i>Python</i> para complementar mi perfil.
      </p>

      <p className="home__description">
        Mi objetivo es aplicar mis conocimientos en software para resolver problemas reales, combinando formación técnica, creatividad y enfoque analítico orientado a resultados.
      </p>

      {/* Botón de contacto */}
      <div className="button__container">
        <a download="CV_Jhonatan_Mantilla.pdf" href={CV_GAMM} className="button button--flex" id='about__download'
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1000">
          Descargar CV
          <img src={FileSVG} className='button__icon' alt='files' />
        </a>

        <a href="#proyectos" className="button button--flex"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1000">
          Ver proyectos
          <img src={ContactSVG} className='button__icon' alt='sendSVG' />
        </a>
      </div>

    </div>
  )
}

export default Data