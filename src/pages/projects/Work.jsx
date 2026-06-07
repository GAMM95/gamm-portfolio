import React, { useEffect, useState } from "react";
import { projectsData, projectsNav } from "./Data";
import WorksItems from "./WorksItems";

const Work = () => {
  const ITEMS_INICIAL = 3;
  const [visibleCount, setVisibleCount] = useState(ITEMS_INICIAL);
  const [item, setItem] = useState({ name: "todos" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const sorted = (list) =>
      [...list].sort((a, b) => new Date(b.date) - new Date(a.date));

    if (item.name === "todos") {
      setProjects(sorted(projectsData));
    } else {
      const newProjects = projectsData.filter(
        (project) => project.category.toLowerCase() === item.name
      );
      setProjects(sorted(newProjects));
    }
    setVisibleCount(ITEMS_INICIAL);
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      {/* Filtros */}
      <div
        data-aos="flip-left"
        data-aos-duration="1000"
        className="flex flex-wrap justify-center gap-3 mb-8"
      >
        {projectsNav.map((navItem, index) => (
          <span
            key={index}
            onClick={(e) => handleClick(e, index)}
            className={`btn-tab cursor-pointer ${active === index ? "active" : ""}`}
          >
            {navItem.name}
          </span>
        ))}
      </div>

      {/* Grid de proyectos */}
      <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(280px,1fr))] max-w-[1200px] mx-auto">
        {projects.slice(0, visibleCount).map((item) => (
          <WorksItems item={item} key={item.id} />
        ))}
      </div>

      {/* Botón mostrar más / menos */}
      {projects.length > ITEMS_INICIAL && (
        <div className="flex justify-center mt-12">
          {visibleCount < projects.length ? (
            <button
              onClick={() => setVisibleCount((prev) => prev + 4)}
              className="btn-outline"
            >
              Mostrar más
            </button>
          ) : (
            <button
              onClick={() => {
                setVisibleCount(ITEMS_INICIAL);
                const section = document.getElementById("proyectos");
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-outline"
            >
              Mostrar menos
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Work;