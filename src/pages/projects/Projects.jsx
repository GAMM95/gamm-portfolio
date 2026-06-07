import Work from "./Work";

const Projects = () => {
  return (
    <section id="proyectos" className="py-20" >
      <div className="sm:pt-10">
        {/* Título */}
        <h2 className="text-[var(--h1-font-size)] text-center font-semibold">
          Proyectos
        </h2>

        {/* Subtítulo */}
        <span className="block text-center text-sm text-gray-500 mb-12">
          Mi portafolio de proyectos realizados
        </span>

        <Work />
      </div>

    </section>
  );
};

export default Projects;
