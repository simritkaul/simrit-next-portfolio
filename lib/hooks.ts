import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

export const useSectionInView = (sectionName: SectionName, threshold = 0.5) => {
  const { ref, inView } = useInView({ threshold: threshold });
  const { setActiveSection, timeOfLastHeaderClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastHeaderClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView]);

  return {
    ref,
  };
};
