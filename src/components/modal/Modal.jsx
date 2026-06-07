import { TfiClose } from "react-icons/tfi";
import { BsGithub } from "react-icons/bs";
import { FaDownload, FaPlay } from "react-icons/fa";
import ImageCarousel from "../carousel/ImageCarousel";

const getYoutubeId = (url) => {
  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/i
  );

  return match ? match[1] : null;
};

const Modal = ({ item, onClose }) => {
  if (!item) return null;

  const youtubeId = item.demo
    ? getYoutubeId(item.demo)
    : null;
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Fondo */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Wrapper */}
      <div className="
        relative z-50
        w-[92%] max-w-[900px]
        rounded-2xl
        bg-[var(--card-color)]
        shadow-[0_20px_60px_rgba(0,0,0,0.5)]
        overflow-hidden
        animate-[fadeIn_.3s_ease]
      ">
        {/* Contenido con scroll */}
        <div className="flex flex-col gap-6 max-h-[90vh] overflow-y-auto no-scrollbar p-5 lg:p-8">

          {/* Imagen / Video */}
          <div
            className="w-full overflow-hidden rounded-xl"
            style={{
              backgroundColor: "var(--card-color)",
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
              <ImageCarousel
                media={
                  item.media
                    ? item.media
                    : item.image
                      ? [{ type: "image", src: item.image }]
                      : []
                }
              />
            )}
          </div>

          {/* Texto */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-[var(--title-color)] mb-2 text-center">
              {item.title}
            </h3>

            <p className="text-xs font-medium mb-4 text-center" style={{ color: "var(--first-color)" }}>
              {item.technologies}
            </p>

            <p className="text-sm leading-relaxed text-[var(--text-color)] mb-6 text-justify">
              {item.description}
            </p>

            {/* Botones */}
            <div className="flex flex-wrap justify-center gap-4">

              {item.github && (
                <a href={item.github} target="_blank" rel="noopener noreferrer" className="btn-outline">
                  <BsGithub /> Código
                </a>
              )}

              {item.demo && (
                <a href={item.demo} target="_blank" rel="noopener noreferrer" className="btn-solid">
                  <FaPlay /> Demo
                </a>
              )}

              {item.installer && (
                <a href={item.installer} target="_blank" rel="noopener noreferrer" className="btn-solid">
                  <FaDownload /> Instalador
                </a>
              )}

            </div>
          </div>
        </div>

        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-black/40 p-2 rounded-full text-white hover:scale-110 transition"
        >
          <TfiClose />
        </button>
      </div>
    </div>
  );
};

export default Modal;