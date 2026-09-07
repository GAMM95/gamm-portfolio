import React, { useState, useEffect, useMemo } from "react";
import Modal from "./../../components/modal/Modal";
import { ArrowUpRight, Construction } from "lucide-react";

const WorksItems = ({ item }) => {
  const [modal, setModal] = useState(false);
  const [index, setIndex] = useState(0);

  const media = useMemo(() => {
    return item.media && item.media.length
      ? item.media.filter((m) => m.type === "image")
      : item.image
        ? [{ type: "image", src: item.image }]
        : [];
  }, [item]);

  useEffect(() => { setIndex(0); }, [media]);

  useEffect(() => {
    if (media.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % media.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [media]);

  return (
    <>
      <div
        onClick={() => setModal(true)}
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="project-card"
      >
        {/* Imagen con slider automático */}
        <div className="project-card__img">

          {/* Badge en desarrollo */}
          {item.status === "en_progreso" && (
            <span
              className="
      absolute top-2 left-2 z-20
      inline-flex items-center gap-1.5
      px-3 py-1.5
      rounded-full
      bg-yellow-400
      text-yellow-950
      text-xs font-semibold
      border border-yellow-500
      shadow-lg shadow-black/20
    "
            >
              <Construction size={14} strokeWidth={2.5} />
              <span>En desarrollo</span>
            </span>
          )}

          {/* Slides */}
          {media.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={item.title}
              className={`
                absolute inset-0 w-full h-full object-contain
                transition-opacity duration-1000 ease-in-out
                ${i === index ? "opacity-100" : "opacity-0"}
              `}
            />
          ))}

          {/* Dots indicadores si hay más de 1 imagen */}
          {media.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {media.map((_, i) => (
                <span
                  key={i}
                  className={`
                    block h-1.5 rounded-full transition-all duration-300 bg-white/70
                    ${i === index ? "w-4 opacity-100" : "w-1.5 opacity-40"}
                  `}
                />
              ))}
            </div>
          )}

          {/* Línea acento teal */}
          <div className="project-card__accent" />
        </div>

        {/* Body */}
        <div className="project-card__body">
          <p className="project-card__title">{item.title}</p>
          <div className="project-card__techs">
            {item.technologies.split("-").slice(0, 4).map((tech, i) => (
              <span key={i} className="project-card__tech">
                {tech.trim()}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="project-card__footer">
          <span className="project-card__cat"> {item.category} </span>
          <span className="project-card__arrow"> <ArrowUpRight size={18} strokeWidth={2} /> </span>
        </div>
      </div>

      {modal && <Modal item={item} onClose={() => setModal(false)} />}
    </>
  );
};

export default WorksItems;