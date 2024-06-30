"use client";

import { links } from "@/lib/data";
import type { SectionName } from "@/lib/types";
import React, { createContext, useContext, useState } from "react";

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastHeaderClick: number;
  setTimeOfLastHeaderClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export const useActiveSectionContext = () => {
  const contextValue = useContext(ActiveSectionContext);

  if (!contextValue) {
    throw new Error(
      "useActiveSectionContext must be used within a ActiveSectionContextProvider"
    );
  }

  return contextValue;
};

const ActiveSectionContextProvider = ({
  children,
}: ActiveSectionContextProviderProps) => {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastHeaderClick, setTimeOfLastHeaderClick] = useState(0);
  // Keeping track of the interval since a section was clicked from the header
  // This helps us to prevent the scroll action setting the active link while it is scrolling because of the click
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastHeaderClick,
        setTimeOfLastHeaderClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default ActiveSectionContextProvider;
