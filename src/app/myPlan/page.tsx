"use client";

import { useContext, useState } from "react";
import PlanCard from "../components/myplan/PlanCard";
import PlanStats from "../components/myplan/PlanStats";
import SavedCard from "../components/myplan/SavedCard";
import { exerciseContext } from "../context/exerciseContext";
import SavedStats from "../components/myplan/SavedStats";
import Sort from "../components/myplan/Sort";




 

const MyPlan = () => {
  const [activeTab, setActiveTab] = useState("today");

  const { planList, setPlanList, savedPlan, setSavedPlan } = useContext(exerciseContext);


 



  return (
    <main className="min-h-screen bg-[#15171B] px-4 py-9 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold uppercase">My Plan</h1>
        <p className="mt-1 text-[#B8BFC9]">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        {activeTab ==='today' ? <PlanStats /> : <SavedStats />}

        

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

         <Sort />
        </div>

        {/* Tab Content */}
        <div className="mt-7 space-y-4">
          {activeTab === "today"
            ? planList.map((ex) => <PlanCard key={ex.id} ex={ex} />)
            : savedPlan.map((ex) => <SavedCard key={ex.id} ex={ex} />)}
        </div>
      </div>
    </main>
  );
};

export default MyPlan;
