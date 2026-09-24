import Link from "next/link";

const EmptyPlanCard = () => {
  return (
    <div className="flex min-h-[180px] flex-col items-center justify-center rounded-xl border border-dashed border-[#30343B] bg-[#202329] px-4 py-8 text-center">
      <h2 className="text-base font-semibold uppercase text-white">
        Nothing here yet
      </h2>

      <p className="mt-2 text-sm text-[#B8BFC9]">
        Browse the library and add a lift to get today moving.
      </p>

      <Link
        href="/#ex"
        className="mt-5 rounded-full bg-[#B8F000] px-5 py-2 text-sm font-semibold text-black hover:bg-[#A5D800]"
      >
        Go to workouts
      </Link>
    </div>
  );
};

export default EmptyPlanCard;