const PlanStats = () => {
  return (
    <div className="mt-7 grid grid-cols-3 overflow-hidden rounded-xl border border-[#30343B] bg-[#202329]">
      <div className="border-r border-dashed border-[#30343B] px-5 py-4">
        <p className="text-xs text-[#AEB5BF]">Exercises</p>
        <p className="mt-1 text-3xl font-bold text-[#B8F000]">2</p>
      </div>

      <div className="border-r border-dashed border-[#30343B] px-5 py-4">
        <p className="text-xs text-[#AEB5BF]">Minutes</p>
        <p className="mt-1 text-3xl font-bold">42</p>
      </div>

      <div className="px-5 py-4">
        <p className="text-xs text-[#AEB5BF]">Calories</p>
        <p className="mt-1 text-3xl font-bold">320</p>
      </div>
    </div>
  );
};

export default PlanStats;