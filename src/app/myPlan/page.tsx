'use client'

import { useState } from "react";
import PlanCard from "../components/myplan/PlanCard";
import PlanStats from "../components/myplan/PlanStats";
import SavedCard from "../components/myplan/SavedCard.tsx";

 const exercises = [
    {
      id: 1,
      name: "Dumbbell Bicep Curl",
      equipment: "Dumbbells",
      image: "/images/dumbbell-bicep-curl.jpg",
      duration: 12,
      caloriesBurned: 80,
      rating: 4.3,
    },
    {
      id: 2,
      name: "Back Squat",
      equipment: "Barbell, Rack",
      image: "/images/back-squat.jpg",
      duration: 30,
      caloriesBurned: 240,
      rating: 4.9,
    },
  ];



const MyPlan = () => {
  const [activeTab, setActiveTab] = useState("today");

  return (
    <main className="min-h-screen bg-[#15171B] px-4 py-9 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold uppercase">My Plan</h1>
        <p className="mt-1 text-[#B8BFC9]">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        <PlanStats />

        <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          {/* Tabs */}
          <div className="flex w-fit rounded-2xl bg-[#202329] p-1">
            <button
              type="button"
              onClick={() => setActiveTab("today")}
              className={`rounded-xl px-4 py-2 text-sm ${
                activeTab === "today"
                  ? "bg-[#15171B] font-semibold text-[#B8F000]"
                  : "text-[#AEB5BF]"
              }`}
            >
              Today's Plan
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("saved")}
              className={`rounded-xl px-4 py-2 text-sm ${
                activeTab === "saved"
                  ? "bg-[#15171B] font-semibold text-[#B8F000]"
                  : "text-[#AEB5BF]"
              }`}
            >
              Saved
            </button>
          </div>

          <label className="flex flex-col gap-1 text-sm">
            Sort By
            <select className="w-full rounded-xl border border-[#40444B] bg-[#15171B] px-3 py-2 outline-none sm:w-70">
              <option>Duration</option>
              <option>Calories</option>
              <option>Rating</option>
              <option>Name</option>
            </select>
          </label>
        </div>

        {/* Tab Content */}
        <div className="mt-7 space-y-4">
          {activeTab === "today"
            ? exercises.map((ex) => <PlanCard key={ex.id} ex={ex} />)
            : exercises.map((ex) => <SavedCard key={ex.id} ex={ex} />)}
        </div>
      </div>
    </main>
  );
};

export default MyPlan;