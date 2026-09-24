import Link from "next/link";



const Banner = () => {
  return (
    <section className="container mx-auto mt-5 w-[92%] max-w-7xl overflow-hidden rounded-[20px] border border-[#292D33] bg-[#191C22] lg:mt-8 lg:w-full">
      <div className="flex flex-col items-center gap-8 px-5 py-10 sm:px-8 lg:min-h-[735px] lg:flex-row lg:gap-0 lg:px-16 lg:py-0">
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <p className="mb-5 text-[14px] font-bold uppercase text-[#B8F000] sm:text-[16px] lg:mb-8 lg:text-[18px]">
            Workout Library
          </p>

          <h1 className="max-w-[650px] text-[36px] font-bold uppercase leading-[1.18] tracking-[-1px] text-[#F1F1F1] sm:text-[48px] lg:text-[64px]">
            Train with intent. Log
            <br />
            every set.
          </h1>

          <p className="mt-5 max-w-[570px] text-[16px] leading-[1.5] text-[#B8BFC9] sm:text-[18px] lg:mt-7 lg:text-[20px]">
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
        <div className="flex w-full items-center justify-center lg:w-1/2">
          <img
            src="/banner.png"
            alt="Workout illustration"
            className="w-full max-w-[420px] object-contain lg:max-w-[600px]"
            width='250'
            height='100'
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;