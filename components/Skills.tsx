"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  const { ref } = useSectionInView("Skills", 0.75);

  return (
    <>
      <section
        ref={ref}
        className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      >
        <SectionHeading>My skills</SectionHeading>
        <ul className="flex flex-wrap gap-2 justify-center text-lg text-gray-800">
          {skillsData.map((skill, index) => {
            return (
              <motion.li
                className="bg-white border border-black/[0.1] rounded-xl py-3 px-5"
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
              >
                {skill}
              </motion.li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Skills;
