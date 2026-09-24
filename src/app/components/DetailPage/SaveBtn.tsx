'use client'
import { exerciseContext } from "@/app/context/exerciseContext";
import React, { useContext } from "react";
import { FiBookmark } from "react-icons/fi";
import { toast } from "react-toastify";

const SaveBtn = ({ex}) => {
  const { savedPlan, setSavedPlan } = useContext(exerciseContext);

  const handleSaveBtn = () => {
    if (savedPlan.find((e) => e.id == ex.id)) {
      toast.error("Already added!");
    } else {
      setSavedPlan([...savedPlan, ex]);
      toast.success("Added to your Save list");
    }
  };

  return (
    <div>
      <button
        onClick={handleSaveBtn}
        type="button"
        className="flex items-center gap-2 rounded-full border border-[#B8BFC9] px-4 py-2 text-sm font-semibold hover:border-[#B8F000]"
      >
        <FiBookmark />
        Save for later
      </button>
    </div>
  );
};

export default SaveBtn;
