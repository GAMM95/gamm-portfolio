import { TfiClose } from "react-icons/tfi";
import { BsGithub } from "react-icons/bs";
import { FaDownload, FaPlay } from "react-icons/fa";
import ImageCarousel from "../carousel/ImageCarousel";
import { useEffect } from "react";

const getYoutubeId = (url) => {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/i);
  return match ? match[1] : null;
};

const Modal = ({ item, onClose }) => {
  // Bloquear scroll del body cuando el modal está abierto
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (!item) return null;

  const youtubeId = item.demo ? getYoutubeId(item.demo) : null;

  const media = item.media
    ? item.media
    : item.image
      ? [{ type: "image", src: item.image }]
      : [];

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/65 backdrop-blur-sm"
      />

      {/* Modal */}
      <div className="
        relative z-50 w-full max-w-[860px]
        rounded-2xl overflow-hidden
        shadow-[0_24px_64px_rgba(0,0,0,0.55)]
        animate-[fadeIn_.25s_ease]
        max-h-[92vh] flex flex-col
        "
        style={{
          backgroundColor: "var(--card-color)",
          borderWidth: "0.5px",
          borderStyle: "solid",
          borderColor: "var(--accent-border)",
        }}
      >

        {/* HEADER: título + chips + cerrar */}
        <div className="
          flex items-start justify-between gap-4 px-5 py-4 shrink-0"
          style={{ borderBottom: "0.5px solid var(--accent-border)" }}
        >
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold leading-snug mb-2 text-[var(--title-color)]">
              {item.title}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {item.technologies.split("-").map((tech, i) => (
                <span key={i} className="project-card__tech text-[11px]">
                  {tech.trim()}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="
              shrink-0 w-8 h-8 rounded-full flex items-center justify-center
              bg-[var(--body-color)] dark:bg-[rgba(255,255,255,0.05)]
              border border-[var(--accent-border)] dark:border-[rgba(255,255,255,0.08)]
              text-[var(--text-color)] dark:text-[#4a6070]
              hover:text-[var(--hover-text-color)] hover:border-[var(--hover-text-color)]
              transition-all duration-150 text-sm
            "
          >
            <TfiClose />
          </button>
        </div>

        {/* IMAGEN / VIDEO */}
        <div className="w-full shrink-0 relative"
          style={{
            backgroundColor: "var(--body-color)",
            borderBottom: "0.5px solid var(--accent-border)",
          }}
        >
          {youtubeId ? (
            <div className="relative w-full aspect-video">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${youtubeId}`}
                title={item.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <ImageCarousel media={media} />
          )}
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[var(--hover-text-color)]" />
        </div>

        {/* DESCRIPCIÓN */}
        <div className="flex-1 overflow-y-auto px-5 py-5 no-scrollbar">
          <p className="text-sm leading-relaxed text-justify text-[var(--text-color)]">
            {item.description}
          </p>
        </div>

        {/* FOOTER: botones */}
        {(item.github || item.demo || item.installer) && (
          <div className="
            shrink-0 flex flex-wrap gap-3 px-5 py-4
            border-t border-[var(--accent-border)] dark:border-[rgba(13,138,110,0.15)]
          ">
            {item.github && (
              <a href={item.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <BsGithub /> Código
              </a>
            )}
            {item.demo && (
              <a href={item.demo} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <FaPlay style={{ fontSize: "11px" }} /> Demo
              </a>
            )}
            {item.installer && (
              <a href={item.installer} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <FaDownload style={{ fontSize: "11px" }} /> Instalador
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;