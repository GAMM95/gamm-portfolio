// Qualification.jsx
import React, { useState } from "react";
import { timelineData } from "./TimeLineData";
import QualificationTabs from "./QualificationTabs";
import Timeline from "./Timeline";

const Qualification = () => {
	const [toggleState, setToggleState] = useState("education");

	const items = timelineData
		.filter(item => item.type === toggleState)
		.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));

	return (
		<section id="formacion" className="py-20">
			<h2 className="text-[var(--h1-font-size)] text-center font-semibold">
				Formación
			</h2>
			<span
				className="block text-center text-sm mb-12"
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
