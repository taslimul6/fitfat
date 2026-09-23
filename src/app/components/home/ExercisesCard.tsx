import Link from "next/link";
import { FiClock, FiStar } from "react-icons/fi";
import { LuFlame } from "react-icons/lu";

const ExercisesCard = ({ ex }) => {
  return (
    <Link href={`/exercise/${ex.id}`}>
      <div className="overflow-hidden rounded-[20px] border border-[#292D33] bg-[#191C22] transition-colors hover:border-[#B8F000]">
        {/* Exercise Image */}
        <img
          src={ex.image}
          alt={ex.name}
          className="h-[265px] w-full object-cover"
        />

        {/* Card Content */}
        <div className="p-6">
          {/* Muscle Groups */}
          <div className="mb-5 flex flex-wrap gap-2">
            {ex.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#B8F000] px-4 py-1 text-sm font-semibold text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Exercise Name */}
          <h2 className="text-2xl font-bold uppercase text-white">{ex.name}</h2>

          {/* Equipment */}
          <p className="mt-3 text-lg text-[#B8BFC9]">{ex.equipment}</p>

          {/* Exercise Info */}
          <div className="mt-4 flex items-center gap-6 text-base text-white">
            {/* Duration */}
            <div className="flex items-center gap-2">
              <FiClock className="text-xl text-[#B8F000]" />
              <span>{ex.duration} min</span>
            </div>

            {/* Calories */}
            <div className="flex items-center gap-2">
              <LuFlame className="text-xl text-[#B8F000]" />
              <span>{ex.caloriesBurned} kcal</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <FiStar className="text-xl text-[#B8F000]" />
              <span>{ex.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ExercisesCard;
