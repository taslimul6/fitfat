import React from "react";
import ExercisesCard from "./ExercisesCard";

const getExerciseData = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

const Exercises = async () => {
  const exercises = await getExerciseData();

  return (
    <>
      <div id="ex" className="mt-12 mb-8 w-[85%] mx-auto">
        <h2 className="text-4xl font-bold uppercase tracking-wide text-white">
          The Library
        </h2>

        <p className="mt-2 text-xl text-[#B8BFC9]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6 mt-10 w-[85%] mx-auto">
        {exercises.map((ex) => (
          <ExercisesCard key={ex.id} ex={ex} />
        ))}
      </div>
    </>
  );
};

export default Exercises;
