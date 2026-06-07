import { useState, useRef, useEffect } from "react";

const ImageCarousel = ({ media = [] }) => {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef(null);

  // ✅ Hook SIEMPRE se ejecuta
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [current]);

  // ✅ Ahora sí puedes cortar render
  if (!media.length) return null;

  const next = () => {
    setCurrent((prev) => (prev + 1) % media.length);
  };

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? media.length - 1 : prev - 1
    );
  };

  const currentItem = media[current];

  return (
    <div className="w-full">
      <div className="relative w-full h-[350px] flex items-center justify-center bg-white rounded-lg overflow-hidden">

        {currentItem.type === "image" ? (
          <img
            src={currentItem.src}
            alt="project"
            className="w-full h-full object-contain"
          />
        ) : (
          <video
            ref={videoRef}
            src={currentItem.src}
            controls
            poster={currentItem.poster}
            className="w-full h-full object-contain"
          />
        )}

        {media.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
            >
              ‹
            </button>

            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
            >
              ›
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ImageCarousel;