import React from "react";
import ExercisesCard from "./ExercisesCard";
import type { Exercise } from "@/app/context/exerciseContext";

const getExerciseData = async (): Promise<(Exercise & { muscleGroups: string[] })[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

const Exercises = async () => {
  const exercises = await getExerciseData();

  return (
    <>
      <div id="ex" className="mt-10 mb-6 w-[92%] mx-auto sm:w-[90%] lg:mt-12 lg:mb-8 lg:w-[85%]">
        <h2 className="text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
          The Library
        </h2>

        <p className="mt-2 text-base text-[#B8BFC9] sm:text-xl">
          Twelve lifts covering every major muscle group.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 mt-6 w-[92%] mx-auto sm:grid-cols-2 sm:w-[90%] lg:grid-cols-3 lg:mt-10 lg:w-[85%]">
        {exercises.map((ex) => (
          <ExercisesCard key={ex.id} ex={ex} />
        ))}
      </div>
    </>
  );
};

export default Exercises;