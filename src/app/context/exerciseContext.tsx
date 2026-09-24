"use client";

import { createContext, useState } from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";

export type Exercise = {
  id: number | string;
  image: string;
  name: string;
  description: string;
  muscleGroups?: string[];
  equipment: string;
  difficulty: string;
  sets: number;
  reps: number | string;
  duration: number;
  caloriesBurned: number;
  rating: number;
  instructions?: string[];
};

type ExerciseContextType = {
  planList: Exercise[];
  setPlanList: Dispatch<SetStateAction<Exercise[]>>;
  savedPlan: Exercise[];
  setSavedPlan: Dispatch<SetStateAction<Exercise[]>>;
};

export const exerciseContext = createContext<ExerciseContextType>({
  planList: [],
  setPlanList: () => {},
  savedPlan: [],
  setSavedPlan: () => {},
});

const ExerciseProvider = ({ children }: { children: ReactNode }) => {

  const [planList, setPlanList] = useState<Exercise[]>([]);

  const [savedPlan, setSavedPlan] = useState<Exercise[]>([]);

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