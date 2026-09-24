"use client";

import { exerciseContext } from "@/app/context/exerciseContext";
import { useContext, useState } from "react";
import type { ChangeEvent } from "react";

const Sort = () => {
  const { planList, setPlanList, savedPlan, setSavedPlan } =
    useContext(exerciseContext);
  const [sorted, setSorted] = useState("duration");

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSorted(selectedValue);

    if (selectedValue === "duration") {
      const sortedArr1 = [...planList].sort((a, b) => b.duration - a.duration);
      const sortedArr2 = [...savedPlan].sort((a, b) => b.duration - a.duration);
      setPlanList([...sortedArr1]);
      setSavedPlan([...sortedArr2]);
    }
    if (selectedValue === "calories") {
      const sortedArr1 = [...planList].sort(
        (a, b) => b.caloriesBurned - a.caloriesBurned,
      );
      const sortedArr2 = [...savedPlan].sort(
        (a, b) => b.caloriesBurned - a.caloriesBurned,
      );
      setPlanList([...sortedArr1]);
      setSavedPlan([...sortedArr2]);
    }

    if (selectedValue === "rating") {
      const sortedArr1 = [...planList].sort(
        (a, b) => Number(b.rating) - Number(a.rating),
      );

      setPlanList(sortedArr1);
    }

    if (selectedValue === "name") {
      setPlanList((current) =>
        [...current].sort((a, b) => a.name.localeCompare(b.name)),
      );

      setSavedPlan((current) =>
        [...current].sort((a, b) => a.name.localeCompare(b.name)),
      );
    }
  };

  return (
    <div>
      <label className="flex flex-col gap-1 text-sm">
        Sort By
        <select
          value={sorted}
          onChange={handleChange}
          className="w-full rounded-xl border border-[#40444B] bg-[#15171B] px-3 py-2 outline-none sm:w-70"
        >
          <option value="duration">Duration</option>
          <option value="calories">Calories</option>
          <option value="rating">Rating</option>
          <option value="name">Name</option>
        </select>
      </label>
    </div>
  );
};

export default Sort;