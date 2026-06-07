import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">

      {/* Box 1 */}
      <div className="about__box">
        <i class='bx bx-award about__icon'></i>
        <h3 className="about__title">Estudio</h3>
        <span className="about__subtitle">3 años</span>
      </div>

      {/* Box 1 */}
      <div className="about__box">
        <i className='bx bxs-briefcase-alt-2 about__icon' ></i>
        <h3 className="about__title">Completados</h3>
        <span className="about__subtitle">3 proyectos</span>
      </div>

      {/* Box 1 */}
      {/*
      <div className="about__box">
        <i class='bx bx-support about__icon' ></i>
        <h3 className="about__title">Soporte</h3>
        <span className="about__subtitle">24/7</span>
      </div>*/}

    </div>
  )
}

export default Info