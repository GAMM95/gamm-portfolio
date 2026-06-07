// import React from "react";
// import { BsJournalBookmarkFill } from "react-icons/bs";
// import { IoBriefcaseOutline } from "react-icons/io5";

// const QualificationTabs = ({ toggleState, setToggleState }) => (
//   <div className="flex justify-center mb-12 gap-6">
//     <button
//       onClick={() => setToggleState("education")}
//       className={`btn-tab ${toggleState === "education" ? "active" : ""}`}
//     >
//       🎓 Educación
//     </button>

//     <button
//       onClick={() => setToggleState("experience")}
//       className={`btn-tab ${toggleState === "experience" ? "active" : ""}`}
//     >
//       💼 Experiencia
//     </button>
//   </div>
// );

// export default QualificationTabs;

import React from "react";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { IoBriefcaseOutline } from "react-icons/io5";

const QualificationTabs = ({ toggleState, setToggleState }) => (
  <div className="flex justify-center mb-12 gap-6">
    <button
      onClick={() => setToggleState("education")}
      className={`
        flex items-center gap-2 px-6 py-2 rounded-full
        text-sm sm:text-base font-medium
        transition-all duration-300
        ${
          toggleState === "education"
            ? "bg-[var(--button-color)] text-[var(--container-color)] shadow-lg"
            : "bg-[var(--card-color)] text-[var(--text-color)] hover:bg-[var(--hover-color)]"
        }
      `}
    >
      <BsJournalBookmarkFill className="text-lg" />
      Educación
    </button>

    <button
      onClick={() => setToggleState("experience")}
      className={`
        flex items-center gap-2 px-6 py-2 rounded-full
        text-sm sm:text-base font-medium
        transition-all duration-300
        ${
          toggleState === "experience"
            ? "bg-[var(--button-color)] text-[var(--container-color)] shadow-lg"
            : "bg-[var(--card-color)] text-[var(--text-color)] hover:bg-[var(--hover-color)]"
        }
      `}
    >
      <IoBriefcaseOutline className="text-lg" />
      Experiencia
    </button>
  </div>
);

export default QualificationTabs;