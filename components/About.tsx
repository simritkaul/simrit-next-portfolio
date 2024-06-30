"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About", 0.75);

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-28 max-w-[45rem] text-center sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id minus
        inventore fugiat, explicabo quod autem deserunt ea magni tempora
        dolores?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
        inventore iusto repellendus ab quos illo provident fuga quod natus
        delectus itaque ducimus, sit in, ullam iure vero aspernatur! Eos, animi.
      </p>
    </motion.section>
  );
};

export default About;
