"use client";

import { createContext, useState } from "react";

export const exerciseContext = createContext();

const ExerciseProvider = ({ children }) => {
  const [planList, setPlanList] = useState([]);
  const [savedPlan, setSavedPlan] = useState([]);

  const states = {
    planList,
    setPlanList,
    savedPlan,
    setSavedPlan,
  };

  return (
    <exerciseContext.Provider value={states}>
      {children}{" "}
    </exerciseContext.Provider>
  );
};

export default ExerciseProvider;
