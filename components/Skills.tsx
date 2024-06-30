import React from "react";
import SectionHeading from "./SectionHeading";
import { skillsData } from "@/lib/data";

const Skills = () => {
  return (
    <>
      <section className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
        <SectionHeading>My skills</SectionHeading>
        <ul className="flex flex-wrap gap-2 justify-center text-lg text-gray-800">
          {skillsData.map((skill, index) => {
            return (
              <li
                className="bg-white border border-black/[0.1] rounded-xl py-3 px-5"
                key={index}
              >
                {skill}
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Skills;
