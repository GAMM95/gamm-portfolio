import React, { useState } from 'react'
import './services.css'
import { HiOutlineCodeBracket } from "react-icons/hi2";
import { MdOutlineSupportAgent } from "react-icons/md";


const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  }
  return (
    <section className="services section" id="servicios">
      {/* Titulo */}
      <h2 className='section__title'>Servicios</h2>
      <span className='section__subtitle'>Lo que ofrezco</span>

      <div className="services__container container grid">

        {/* 1° contenedor */}
        <div className="services__content">
          {/* Descripcion */}
          <div>
            <HiOutlineCodeBracket className="services__icon" />
            <h3 className="services__title">
              Desarrollo de <br /> Sistemas Informáticos
            </h3>
          </div>

          {/* Evento para abrir nueva ventana */}
          <span className="services__button" onClick={() => toggleTab(1)}>
            Ver más
            <i className="bx bx-right-arrow-alt services__button-icon"></i>
          </span>

          {/* Ventana contenedor 1 */}
          <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">

              {/* Evento para cerrar ventana */}
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
              {/* Titulo Contenedor */}

              <h3 className="services__modal-title">Desarrollo de sistemas informáticos</h3>
              {/* Subtitulo Contenedor */}
              <p className="services__modal-description">
                Ofrezco soluciones innovadoras utilizando tecnologías modernas como PHP, Java, SQL Server, Flutter y frameworks como Spring Boot y React. Desarrollando tanto en frontend como backend, creo aplicaciones personalizadas, escalables y eficientes, adaptadas a las necesidades de cada cliente. Mi objetivo es resolver problemas reales con software intuitivo y de alto rendimiento.
              </p>
              {/* Lista de descripcion del contenedor */}
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Desarrollo de aplicaciones web y móviles.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Integración de bases de datos robustas con SQL Server.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Uso de tecnologías modernas y frameworks ágiles.
                  </p>
                </li>
              </ul>

            </div>
          </div>
        </div>

        {/* 2° contenedor */}
        <div className="services__content">
          <div>
            <MdOutlineSupportAgent className="services__icon" />
            <h3 className="services__title">
              Soporte Técnico y <br /> Mantenimiento Preventivo
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>
            Ver más
            <i className="bx bx-right-arrow-alt services__button-icon"></i>
          </span>


          <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">

              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title">Soporte Técnico y
                Mantenimiento Preventivo</h3>
              <p className="services__modal-description">
                Ofrezco mantenimiento preventivo para evitar fallos inesperados y aseguro una respuesta rápida ante cualquier problema técnico. Ya sea para reparar hardware, actualizar software o asegurar la red.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Limpieza física interna y externa de equipos, reemplazo de componentes defectuosos, y actualización de hardware.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Instalación y configuración de software, eliminación de virus y malware, optimización del sistema operativo para mejorar el rendimiento.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Diagnóstico y reparación de problemas de hardware y software, soporte remoto para resolver incidencias técnicas.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Recomendaciones para la compra de equipos de acuerdo a las necesidades del cliente, instalación y configuración de redes domésticas o empresariales.
                  </p>
                </li>

              </ul>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Services