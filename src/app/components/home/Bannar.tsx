import Link from "next/link";



const Banner = () => {
  return (
    <section className="container mx-auto mt-8 max-w-7xl overflow-hidden rounded-[20px] border border-[#292D33] bg-[#191C22]">
      <div className="flex min-h-[735px] items-center px-16">
        {/* Left Content */}
        <div className="w-1/2">
          <p className="mb-8 text-[18px] font-bold uppercase text-[#B8F000]">
            Workout Library
          </p>

          <h1 className="max-w-[650px] text-[64px] font-bold uppercase leading-[1.18] tracking-[-1px] text-[#F1F1F1]">
            Train with intent. Log
            <br />
            every set.
          </h1>

          <p className="mt-7 max-w-[570px] text-[20px] leading-[1.5] text-[#B8BFC9]">
            FitLog is a dark, no-nonsense gym companion: pick a lift,
            lock it into today&apos;s plan, and watch the week&apos;s work
            add up.
          </p>

          <Link href="/#ex">
          
          
          <button className="mt-7 rounded-[18px] bg-[#B8F000] px-6 py-4 text-[17px] font-bold text-[#10120D] transition hover:bg-[#C5FF19]">
            Browse Workouts
          </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex w-1/2 items-center justify-center">
          <img
            src="/banner.png"
            alt="Workout illustration"
            className="w-full max-w-[600px] object-contain"
            width='250'
            height='100'
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;