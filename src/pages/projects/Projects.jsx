import Work from "./Work";

const Projects = () => {
  return (
    <section id="proyectos" className="section">
      <div className="sm:pt-10">

        <h2
          className="section__title"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          Proyectos
        </h2>

        <span
          className="section__subtitle"
          style={{ color: "var(--text-color)" }}
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          Mi portafolio de proyectos realizados
        </span>

        <Work />
      </div>
    </section>
  );
};

export default Projects;