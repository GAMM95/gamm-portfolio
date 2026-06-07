import { useState, useEffect } from "react";
import AOS from "aos";
import { skillsTabs, skillsContent } from "./skillsData";

const Skills = () => {
  const [activeTab, setActiveTab] = useState(skillsTabs[0].id);

  const currentTab = skillsTabs.find((t) => t.id === activeTab);
  const currentSkills = skillsContent[activeTab] ?? [];

  // Re-trigger AOS cada vez que cambia el tab
  useEffect(() => {
    AOS.refresh();
  }, [activeTab]);

  const handleTab = (id) => {
    setActiveTab(id);
  };

  return (
    <section id="habilidades" className="section">
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
        className="flex flex-wrap justify-center gap-3 mb-10"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="150"
      >
        {skillsTabs.map((tab) => {
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              onClick={() => handleTab(tab.id)}
              className={`
          inline-flex items-center gap-2
          px-5 py-2 rounded-full
          text-sm sm:text-base font-medium
          transition-all duration-300
          ${activeTab === tab.id
                  ? "bg-[var(--button-color)] text-[var(--container-color)] shadow-lg"
                  : "bg-[var(--card-color)] text-[var(--text-color)] hover:bg-[var(--hover-color)]"
                }
        `}
            >
              <Icon size={16} />
              {tab.title}
            </button>
          );
        })}
      </div>
      {/* Category header */}
      <div className="text-center mb-8">
        <p
          className="text-base font-semibold mb-0.5"
          style={{ color: "var(--title-color)" }}
          data-aos="fade-down"
          data-aos-duration="400"
          data-aos-id={`header-${activeTab}`}
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

      {/* Skills grid */}
      <div
        className="grid gap-5 max-w-[720px] mx-auto px-4"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))" }}
      >
        {currentSkills.map(({ name, icon: Icon }, i) => (
          <div
            key={`${activeTab}-${name}`}
            className="skill-card"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay={i * 60}
          >
            <div className="skill-card__icon-wrap">
              <Icon aria-hidden="true" />
            </div>
            <span className="skill-card__name">{name}</span>
            <div className="skill-card__dot" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;