// import { useState, useEffect } from "react";
// import AOS from "aos";
// import { skillsTabs, skillsContent } from "./skillsData";

// const Skills = () => {
//   const [activeTab, setActiveTab] = useState(skillsTabs[0].id);

//   const currentTab = skillsTabs.find((t) => t.id === activeTab);
//   const currentSkills = skillsContent[activeTab] ?? [];

//   // Re-trigger AOS cada vez que cambia el tab
//   useEffect(() => {
//     AOS.refresh();
//   }, [activeTab]);

//   const handleTab = (id) => {
//     setActiveTab(id);
//   };

//   return (
//     <section id="habilidades" className="section">
//       <h2
//         className="section__title"
//         data-aos="fade-up"
//         data-aos-duration="800"
//       >
//         Habilidades
//       </h2>
//       <span
//         className="section__subtitle"
//         style={{ color: "var(--text-color)" }}
//         data-aos="fade-up"
//         data-aos-duration="800"
//         data-aos-delay="100"
//       >
//         Tecnologías que manejo
//       </span>

//       {/* Tabs */}
//       <div
//         className="flex flex-wrap justify-center gap-3 mb-10"
//         data-aos="fade-up"
//         data-aos-duration="800"
//         data-aos-delay="150"
//       >
//         {skillsTabs.map((tab) => {
//           const Icon = tab.icon;

//           return (
//             <button
//               key={tab.id}
//               onClick={() => handleTab(tab.id)}
//               className={`
//           inline-flex items-center gap-2
//           px-5 py-2 rounded-full
//           text-sm sm:text-base font-medium
//           transition-all duration-300
//           ${activeTab === tab.id
//                   ? "bg-[var(--button-color)] text-[var(--container-color)] shadow-lg"
//                   : "bg-[var(--card-color)] text-[var(--text-color)] hover:bg-[var(--hover-color)]"
//                 }
//         `}
//             >
//               <Icon size={16} />
//               {tab.title}
//             </button>
//           );
//         })}
//       </div>
//       {/* Category header */}
//       <div className="text-center mb-8">
//         <p
//           className="text-base font-semibold mb-0.5"
//           style={{ color: "var(--title-color)" }}
//           data-aos="fade-down"
//           data-aos-duration="400"
//           data-aos-id={`header-${activeTab}`}
//         >
//           {currentTab?.title}
//         </p>
//         <p
//           className="text-sm"
//           style={{ color: "var(--disabled-color)" }}
//         >
//           {currentTab?.subtitle}
//         </p>
//       </div>

//       {/* Skills grid */}
//       <div
//         className="grid gap-5 max-w-[720px] mx-auto px-4"
//         style={{ gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))" }}
//       >
//         {currentSkills.map(({ name, icon: Icon }, i) => (
//           <div
//             key={`${activeTab}-${name}`}
//             className="skill-card"
//             data-aos="zoom-in"
//             data-aos-duration="500"
//             data-aos-delay={i * 60}
//           >
//             <div className="skill-card__icon-wrap">
//               <Icon aria-hidden="true" />
//             </div>
//             <span className="skill-card__name">{name}</span>
//             <div className="skill-card__dot" />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Skills;

import { useState, useEffect } from "react";
import AOS from "aos";
import { skillsTabs, skillsContent } from "./skillsData";

const Skills = () => {
  const [activeTab, setActiveTab] = useState(skillsTabs[0].id);

  const currentTab = skillsTabs.find((tab) => tab.id === activeTab);
  const currentSkills = skillsContent[activeTab] ?? [];

  useEffect(() => {
    AOS.refresh();
  }, [activeTab]);

  const handleTab = (id) => {
    setActiveTab(id);
  };

  return (
    <section id="habilidades" className="section">

      {/* Título */}
      <h2
        className="section__title"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        Habilidades
      </h2>

      <span
        className="section__subtitle"
        style={{ color: "var(--text-color)" }}
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="100"
      >
        Tecnologías que manejo
      </span>

      {/* Tabs */}
      <div
        className="
          flex flex-wrap justify-center
          gap-2 sm:gap-3
          mb-12
          px-4
        "
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="150"
      >
        {skillsTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => handleTab(tab.id)}
              aria-label={`Mostrar habilidades de ${tab.title}`}
              aria-pressed={isActive}
              className={`
                group relative
                inline-flex items-center gap-2
                px-4 sm:px-5 py-2.5
                rounded-xl
                text-sm sm:text-base
                font-medium
                cursor-pointer
                transition-all duration-300

                ${isActive
                  ? `
                      bg-[var(--button-color)]
                      text-[var(--container-color)]
                      shadow-lg
                      -translate-y-0.5
                    `
                  : `
                      bg-[var(--card-color)]
                      text-[var(--text-color)]
                      hover:bg-[var(--hover-color)]
                      hover:-translate-y-0.5
                    `
                }
              `}
            >
              <Icon
                size={17}
                strokeWidth={2}
                className="shrink-0 transition-transform duration-300 group-hover:scale-110"
              />

              <span>{tab.title}</span>

              {/* Indicador */}
              {isActive && (
                <span
                  className="
                    absolute
                    -bottom-1
                    left-1/2
                    -translate-x-1/2
                    w-8
                    h-1
                    rounded-full
                    bg-[var(--button-color)]
                  "
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Encabezado de categoría */}
      <div
        key={activeTab}
        className="text-center mb-9"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <div className="inline-flex flex-col items-center">

          <div
            className="
              inline-flex items-center justify-center
              w-12 h-12
              mb-3
              rounded-2xl
              bg-[var(--button-color)]/10
            "
          >
            {currentTab?.icon && (
              <currentTab.icon
                size={24}
                strokeWidth={2}
                style={{ color: "var(--button-color)" }}
              />
            )}
          </div>

          <p
            className="text-lg font-semibold mb-1"
            style={{ color: "var(--title-color)" }}
          >
            {currentTab?.title}
          </p>

          <p
            className="text-sm"
            style={{ color: "var(--disabled-color)" }}
          >
            {currentTab?.subtitle}
          </p>
        </div>
      </div>

      {/* Skills */}
      <div
        key={`skills-${activeTab}`}
        className="
          grid
          gap-4 sm:gap-5
          max-w-[820px]
          mx-auto
          px-4
        "
        style={{
          gridTemplateColumns:
            "repeat(auto-fit, minmax(155px, 1fr))",
        }}
      >
        {currentSkills.map(({ name, icon: Icon }, i) => (
          <div
            key={`${activeTab}-${name}`}
            className="
              skill-card
              group
              relative
              overflow-hidden
              cursor-default
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-lg
            "
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay={i * 60}
          >
            {/* Brillo/acentuación superior */}
            <div
              className="
                absolute top-0 left-0 right-0
                h-[2px]
                opacity-0
                group-hover:opacity-100
                transition-opacity duration-300
              "
              style={{
                backgroundColor: "var(--button-color)",
              }}
            />

            {/* Icono */}
            <div
              className="
                skill-card__icon-wrap
                transition-transform duration-300
                group-hover:scale-110
              "
            >
              <Icon
                aria-hidden="true"
                size={28}
                strokeWidth={1.8}
              />
            </div>

            {/* Nombre */}
            <span className="skill-card__name">
              {name}
            </span>

            {/* Indicador */}
            <div
              className="
                skill-card__dot
                transition-transform duration-300
                group-hover:scale-125
              "
            />
          </div>
        ))}
      </div>

    </section>
  );
};

export default Skills;