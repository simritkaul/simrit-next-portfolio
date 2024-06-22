"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import Project from "./Project";
import { useSectionInView } from "@/lib/hooks";

const Projects = () => {
  const { ref } = useSectionInView("Projects");

  return (
    <>
      <motion.section ref={ref} id="projects" className="scroll-mt-28">
        <SectionHeading>My Projects</SectionHeading>
        <div>
          {projectsData?.map((project) => (
            <>
              <Project {...project} />
            </>
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default Projects;
