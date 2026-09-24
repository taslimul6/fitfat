
import PlanBtn from "@/app/components/DetailPage/PlanBtn";
import SaveBtn from "@/app/components/DetailPage/SaveBtn";


const getExerciseData = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

const ExerciseDetailPage = async ({ params }) => {
  

  const { id } = await params;
  const exercises = await getExerciseData();
  const ex = exercises.find((e) => e.id == id);

  if (!ex) {
    return <p className="p-8 text-white">Exercise not found.</p>;
  }

  

  return (
    <main className="min-h-screen bg-[#15171B] px-4 py-9 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-9 lg:grid-cols-2">
        {/* Exercise Image */}
        <img
          src={ex.image}
          alt={ex.name}
          className="h-[450px] w-full rounded-2xl object-cover lg:h-[685px]"
        />

        {/* Exercise Details */}
        <div>
          <h1 className="text-3xl font-bold uppercase">{ex.name}</h1>

          <p className="mt-3 leading-6 text-[#B8BFC9]">{ex.description}</p>

          {/* Muscle Groups */}
          <div className="mt-4 flex flex-wrap gap-2">
            {ex.muscleGroups?.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#B8F000] px-3 py-1 text-sm font-medium text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Exercise Info */}
          <div className="mt-5 overflow-hidden rounded-xl border border-[#30343B] bg-[#202329]">
            {[
              ["Equipment", ex.equipment],
              ["Difficulty", ex.difficulty],
              ["Sets", ex.sets],
              ["Reps", ex.reps],
              ["Duration", `${ex.duration} min`],
              ["Calories", `${ex.caloriesBurned} kcal`],
              ["Rating", ex.rating],
            ].map(([label, value]) => (
              <div
                key={label}
                className="grid grid-cols-2 border-b border-[#30343B] px-4 py-3 last:border-b-0"
              >
                <span className="text-sm font-semibold uppercase">{label}</span>
                <span className="text-sm">{value}</span>
              </div>
            ))}
          </div>

          {/* Instructions */}
          <section className="mt-8">
            <h2 className="text-xl font-bold uppercase">Instructions</h2>

            <ol className="mt-3 list-decimal space-y-2 pl-5">
              {ex.instructions?.map((instruction, index) => (
                <li key={index} className="leading-6">
                  {instruction}
                </li>
              ))}
            </ol>
          </section>

          {/* Buttons */}
          <div className="mt-5 flex flex-wrap gap-3">
            <PlanBtn ex={ex} />
            <SaveBtn ex={ex} />

           
          </div>
        </div>
      </div>
    </main>
  );
};

export default ExerciseDetailPage;
