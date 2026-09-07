import React, { useState, useEffect } from "react";
import AOS from "aos";
import { timelineData } from "./TimeLineData";
import QualificationTabs from "./QualificationTabs";
import TimelineItem from "./TimelineItem";
import { ChevronDown, ChevronUp } from "lucide-react";

const ITEMS_VISIBLE = 4;

const Qualification = () => {
  const [toggleState, setToggleState] = useState("education");
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Detectar resize
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const allItems = timelineData
    .filter((item) => item.type === toggleState)
    .sort((a, b) => new Date(b.startDate) - new Date(a.startDate));

  const visibleItems = expanded ? allItems : allItems.slice(0, ITEMS_VISIBLE);
  const hasMore = allItems.length > ITEMS_VISIBLE;

  // Resetea animaciones al cambiar tab
  useEffect(() => {
    setExpanded(false);

    const section = document.querySelector("#formacion");
    if (!section) return;
    section.querySelectorAll("[data-aos]").forEach((el) => {
      el.classList.remove("aos-animate");
    });
    const t = setTimeout(() => AOS.refresh(), 50);
    return () => clearTimeout(t);
  }, [toggleState]);

  // Refresca AOS al expandir para animar los nuevos items
  useEffect(() => {
    if (!expanded) return;
    const t = setTimeout(() => AOS.refresh(), 50);
    return () => clearTimeout(t);
  }, [expanded]);

  return (
    <section id="formacion" className="section">

      <h2
        className="section__title"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        Formación
      </h2>

      <span
        className="section__subtitle"
        style={{ color: "var(--text-color)" }}
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="100"
      >
        Mi trayectoria personal
      </span>

      <div className="max-w-4xl mx-auto px-4">
        <QualificationTabs
          toggleState={toggleState}
          setToggleState={setToggleState}
        />

        {/* Timeline */}
        <div className="relative">
          {/* Línea vertical — solo desktop */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full z-0 hidden md:block"
            style={{ backgroundColor: "var(--accent-border)" }}
          />

          {visibleItems.map((item, i) => {
            // En móvil solo fade-up para evitar overflow horizontal
            const aosAnim = isMobile
              ? "fade-up"
              : i % 2 === 0 ? "fade-right" : "fade-left";

            return (
              <div
                key={`${toggleState}-${item.id}`}
                data-aos={aosAnim}
                data-aos-duration="500"
                data-aos-delay={i * 80}
              >
                <TimelineItem item={item} isLeft={i % 2 === 0} />
              </div>
            );
          })}
        </div>

        {/* Botón ver más / ver menos */}
        {hasMore && (
          <div
            className="flex justify-center mt-8"
            data-aos="fade-up"
            data-aos-duration="400"
          >
            <button
              onClick={() => setExpanded((prev) => !prev)}
              className="btn-ghost inline-flex items-center gap-2"
            >
              {expanded ? (
                <ChevronUp
                  size={18}
                  strokeWidth={2}
                  className="transition-transform duration-300"
                />
              ) : (
                <ChevronDown
                  size={18}
                  strokeWidth={2}
                  className="transition-transform duration-300"
                />
              )}

              <span>
                {expanded
                  ? "Ver menos"
                  : `Ver ${allItems.length - ITEMS_VISIBLE} más`}
              </span>
            </button>
          </div>
        )}
      </div>

    </section>
  );
};

export default Qualification;