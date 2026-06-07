
import React from "react";
import TimelineItem from "./TimelineItem";

const Timeline = ({ items }) => {
  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Línea vertical continua */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-gray-300 z-0"></div>

      <div className="flex flex-col relative">
        {items.map((item, index) => (
          <TimelineItem
            key={item.id}
            item={item}
            isLeft={index % 2 === 0} // zigzag
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
