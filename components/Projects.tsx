"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import Project from "./Project";

const Projects = () => {
  return (
    <>
      <motion.section>
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
