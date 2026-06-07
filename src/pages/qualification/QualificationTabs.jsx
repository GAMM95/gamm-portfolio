import React from "react";

const QualificationTabs = ({ toggleState, setToggleState }) => (
  <div className="flex justify-center mb-12 gap-6">
    <button
      onClick={() => setToggleState("education")}
      className={`btn-tab ${toggleState === "education" ? "active" : ""}`}
    >
      🎓 Educación
    </button>

    <button
      onClick={() => setToggleState("experience")}
      className={`btn-tab ${toggleState === "experience" ? "active" : ""}`}
    >
      💼 Experiencia
    </button>
  </div>
);

export default QualificationTabs;