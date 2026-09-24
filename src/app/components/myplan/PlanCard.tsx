'use client'

import { exerciseContext } from "@/app/context/exerciseContext";
import Link from "next/link";
import { useContext } from "react";
import { FiCheck, FiClock, FiStar, FiX } from "react-icons/fi";
import { LuFlame } from "react-icons/lu";
import { toast } from "react-toastify";

const PlanCard = ({ ex }) => {
  const { planList, setPlanList } = useContext(exerciseContext);

  const handleX = (hx) => {
    setPlanList([...planList.filter((e) => e.id != hx.id)]);
    toast.error(hx.name + " Plan Removed");
  };
   const handleDone = (hx) => {
    setPlanList([...planList.filter((e) => e.id != hx.id)]);
    toast.success(hx.name + " Plan Done Successfully");
  };

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-[#30343B] bg-[#202329] p-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex min-w-0 items-center gap-4">
        <img
          src={ex.image}
          alt={ex.name}
          className="h-21 w-31 shrink-0 rounded-xl object-cover"
        />

        <div className="min-w-0">
          <h3 className="text-lg font-bold uppercase">{ex.name}</h3>
          <p className="text-sm text-[#B8BFC9]">{ex.equipment}</p>

          <div className="mt-2 flex flex-wrap items-center gap-3 text-xs">
            <span className="flex items-center gap-1">
              <FiClock className="text-[#B8F000]" />
              {ex.duration} min
            </span>

            <span className="flex items-center gap-1">
              <LuFlame className="text-[#B8F000]" />
              {ex.caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-1">
              <FiStar className="text-[#B8F000]" />
              {ex.rating}
            </span>
          </div>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-2 sm:pr-2">
        <Link href={`/exercise/${ex.id}`}>
          <button
            type="button"
            className="rounded-full border border-white px-3 py-1.5 text-xs font-semibold hover:border-[#B8F000] hover:text-[#B8F000]"
          >
            View Details
          </button>
        </Link>

        <button
        onClick={ () => handleDone(ex) }
          type="button"
          className="flex items-center gap-1 rounded-full bg-[#B8F000] px-3 py-1.5 text-xs font-semibold text-black hover:bg-[#A5D800]"
        >
          <FiCheck />
          Mark as Done
        </button>

        <button
        onClick={()=>handleX(ex)}
          type="button"
          aria-label={`Remove ${ex.name}`}
          className="ml-1 p-1 hover:text-[#B8F000]"
        >
          <FiX />
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
