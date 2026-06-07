import React, { useState, useEffect } from "react";
import AOS from "aos";
import { timelineData } from "./TimeLineData";
import QualificationTabs from "./QualificationTabs";
import Timeline from "./Timeline";

const Qualification = () => {
  const [toggleState, setToggleState] = useState("education");

  const items = timelineData
    .filter((item) => item.type === toggleState)
    .sort((a, b) => new Date(b.startDate) - new Date(a.startDate));

  // Re-trigger AOS al cambiar de tab
  useEffect(() => {
    AOS.refresh();
  }, [toggleState]);

  return (
    <section id="formacion" className="section">

      <h2 className="section__title">
        Formación
      </h2>

      <span
        className="section__subtitle"
        style={{ color: "var(--text-color)" }}
      >
        Mi trayectoria personal
      </span>

      <div className="max-w-4xl mx-auto px-4">
        <QualificationTabs toggleState={toggleState} setToggleState={setToggleState} />
        <Timeline items={items} />
      </div>

    </section>
  );
};

export default Qualification;