import React from "react";
import { IoCalendarOutline } from "react-icons/io5";

const TimelineItem = ({ item, isLeft }) => {
  const CardContent = (
    <div
      className="
        w-full
        p-4
        rounded-xl
        transition-all
        duration-300
        group-hover:bg-[var(--hover-color)]
      "
      style={{
        backgroundColor: "var(--card-color)",
      }}
    >
      <h3
        className="text-lg font-semibold"
        style={{ color: "var(--title-color)" }}
      >
        {item.title}
      </h3>

      <span
        className="block text-sm mt-1"
        style={{ color: "var(--text-color)" }}
      >
        {item.subtitle}
      </span>

      <span
        className="block text-xs mt-1"
        style={{ color: "var(--disabled-color)" }}
      >
        {item.place}
      </span>

      <span
        className="mt-1 text-xs inline-flex items-center gap-1"
        style={{ color: "var(--disabled-color)" }}
      >
        <IoCalendarOutline size={14} />
        {item.date}
      </span>
    </div>
  );

  return (
    <div className="relative group">
      {/* Desktop */}
      <div className="hidden md:grid grid-cols-[1fr_40px_1fr] items-center">
        {/* Izquierda */}
        {isLeft ? (
          <div className="text-right">
            {CardContent}
          </div>
        ) : (
          <div />
        )}

        {/* Centro */}
        <div className="flex justify-center relative">
          <div
            className="
              w-6 h-6
              border-2
              rounded-full
              shadow-lg
              z-10
              relative
              transition-all
              duration-300
              group-hover:scale-125
            "
            style={{
              backgroundColor: "var(--card-color)",
              borderColor: "var(--border-input-color)",
            }}
          />
        </div>

        {/* Derecha */}
        {!isLeft ? (
          <div className="text-left">
            {CardContent}
          </div>
        ) : (
          <div />
        )}
      </div>

      {/* Mobile */}
      <div className="flex md:hidden items-start relative mb-4 mx-2">
        {/* Línea */}
        <div
          className="absolute left-3 top-5 w-[2px] h-full z-0"
          style={{
            backgroundColor: "var(--border-input-color)",
          }}
        />

        {/* Círculo */}
        <div
          className="
            w-6 h-6
            border-2
            rounded-full
            shadow-lg
            z-10
            relative
            transition-all
            duration-300
            group-hover:scale-125
          "
          style={{
            backgroundColor: "var(--card-color)",
            borderColor: "var(--border-input-color)",
          }}
        />

        {/* Contenido */}
        <div className="ml-6 w-full">
          {CardContent}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;