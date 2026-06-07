import React, { useState, useEffect, useMemo } from "react";
import Modal from "./../../components/modal/Modal";

const WorksItems = ({ item }) => {
  const [modal, setModal] = useState(false);
  const [index, setIndex] = useState(0);

  // Normalizar media (memorizado)
  const media = useMemo(() => {
    return item.media && item.media.length
      ? item.media.filter((m) => m.type === "image")
      : item.image
        ? [{ type: "image", src: item.image }]
        : [];
  }, [item]);

  // 🔹 Reset cuando cambia proyecto
  useEffect(() => {
    setIndex(0);
  }, [media]);

  // 🔹 Auto cambio de imágenes
  useEffect(() => {
    if (media.length <= 1) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % media.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [media]);

  return (
    <>
      {/* CARD */}
      <div
        onClick={() => setModal(true)}
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="
          relative cursor-pointer
          bg-[var(--card-color)]
          border border-black/10
          rounded-xl p-4
          mx-4 sm:mx-0
          flex items-center justify-center
          transition-all duration-300
          hover:-translate-y-1.5 hover:shadow-xl
        "
      >
        {/* Contenedor imagen */}
        <div
          className="relative w-full max-w-[320px] h-[200px] overflow-hidden rounded-lg"
          style={{
            backgroundColor: "var(--card-color)",
          }}
        >

          {/* 🔥 BADGE */}
          {item.status === "en_progreso" && (
            <span
              className="
                absolute top-2 left-2 z-20
                bg-yellow-400/90 backdrop-blur-sm
                text-black text-xs font-semibold
                px-3 py-1 rounded-full shadow-md
              "
            >
              🚧 En desarrollo
            </span>
          )}

          {/* 🔥 SLIDER */}
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
        </div>

        {/* Overlay desktop */}
        <div
          className="
            absolute inset-0 z-10
            flex flex-col items-center justify-center
            bg-black/80 rounded-xl
            opacity-0 hover:opacity-100
            transition-opacity duration-300
            hidden sm:flex
          "
        >
          {/* <h3 className="text-white font-bold text-lg text-center px-2">
            {item.title}
          </h3>
          <p className="text-[15px] text-white/70 mt-1">
            {item.technologies.split('-')[0]}
          </p> */}
          <div className="text-center px-3">
            <h3 className="text-white font-semibold text-lg leading-tight">
              {item.title}
            </h3>

            <div className="mt-2 flex gap-2 justify-center flex-wrap">
              {item.technologies.split('-').slice(0, 4).map((tech, i) => (
                <span
                  key={i}
                  className="text-[10px] bg-white/10 text-white px-2 py-[2px] rounded"
                >
                  {tech.trim()}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Overlay mobile */}
        <div
          className="
            absolute inset-0 z-10
            flex items-center justify-center
            bg-black/70 rounded-xl sm:hidden
          "
        >
          <div className="text-center px-3">
            <h3 className="text-white font-semibold text-lg leading-tight">
              {item.title}
            </h3>

            <div className="mt-2 flex gap-2 justify-center flex-wrap">
              {item.technologies.split('-').slice(0, 2).map((tech, i) => (
                <span
                  key={i}
                  className="text-[12px] bg-white/10 text-white px-2 py-[2px] rounded"
                >
                  {tech.trim()}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {modal && (
        <Modal
          item={item}
          onClose={() => setModal(false)}
        />
      )}
    </>
  );
};

export default WorksItems;