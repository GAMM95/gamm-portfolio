import React from "react";
import TimelineItem from "./TimelineItem";

// Timeline sin lógica de show/hide — esa la maneja Qualification
const Timeline = ({ items }) => {
  return (
    <div className="relative max-w-3xl mx-auto">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full z-0 hidden md:block"
        style={{ backgroundColor: "var(--accent-border)" }}
      />
      <div className="flex flex-col relative">
        {items.map((item, index) => (
          <TimelineItem key={item.id} item={item} isLeft={index % 2 === 0} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;