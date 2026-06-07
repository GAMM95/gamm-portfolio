import React from "react";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { IoBriefcaseOutline } from "react-icons/io5";

const QualificationTabs = ({ toggleState, setToggleState }) => (
  <div className="flex justify-center mb-12 gap-6">
    <button
      onClick={() => setToggleState("education")}
      className={`btn-tab inline-flex items-center gap-2 ${
        toggleState === "education" ? "active" : ""
      }`}
    >
      <BsJournalBookmarkFill size={15} />
      Educación
    </button>

    <button
      onClick={() => setToggleState("experience")}
      className={`btn-tab inline-flex items-center gap-2 ${
        toggleState === "experience" ? "active" : ""
      }`}
    >
      <IoBriefcaseOutline size={16} />
      Experiencia
    </button>
  </div>
);

export default QualificationTabs;