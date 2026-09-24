'use client'

import { exerciseContext } from "@/app/context/exerciseContext";
import React, { useContext } from "react";
import { FiCalendar } from "react-icons/fi";
import { toast } from "react-toastify";

const PlanBtn = ({ex}) => {

    const {planList, setPlanList} = useContext(exerciseContext);

    const handlePlanBtn =()=>{

        if(planList.find(e=> e.id == ex.id)){
           toast.error("Already added!")
        }else{
            setPlanList([...planList , ex])
            toast.success('Added to your Plan')

        }

    }
    

  return (
    <div>
      <button
        onClick={()=>handlePlanBtn()}
        type="button"
        className="flex items-center gap-2 rounded-full bg-[#B8F000] px-4 py-2 text-sm font-semibold text-black hover:bg-[#A5D800]"
      >
        <FiCalendar />
        Add to today's plan
      </button>
    </div>
  );
};

export default PlanBtn;
