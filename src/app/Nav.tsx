'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { exerciseContext } from "./context/exerciseContext";


const Navbar = () => {

  const {planList, savedPlan} = useContext(exerciseContext);

  const path = usePathname();
  return (
    <nav className="w-full border-b border-[#25282D] bg-[#0D0F12]">
      <div className="container mx-auto flex w-full flex-wrap items-center justify-between gap-y-3 px-4 py-3 sm:px-6 lg:h-[82px] lg:w-[90%] lg:flex-nowrap lg:gap-y-0 lg:px-8 lg:py-0">
        {/* Logo */}

        <Link href="/">
        <div className="flex items-center gap-2 sm:gap-3">
          <Image src="/logo.png" height ="25" width="50" alt="logo" />

          <span className="text-[20px] font-medium tracking-[-0.5px] text-[#E5E7EB] sm:text-[24px]">
            FITFAT
          </span>
        </div>
        
        </Link>
        

        {/* Navigation */}
        <div className="order-3 flex w-full items-center gap-1 rounded-xl lg:order-none lg:w-auto">
          <Link
            href="/"
            className={`flex-1 rounded-xl px-3 py-2.5 text-center text-[14px] sm:text-[16px] lg:flex-none lg:px-4 lg:py-3 ${path === '/' ?'font-semibold  text-[#B8F000] bg-[#191C22]' : 'font-medium text-[#D4D4D8] transition-colors hover:text-white' }`}
          >
            Workouts
          </Link>

          <Link
            href="/myPlan"
            className={`flex-1 rounded-xl px-3 py-2.5 text-center text-[14px] sm:text-[16px] lg:flex-none lg:px-4 lg:py-3 ${path === '/myPlan' ?'font-semibold  text-[#B8F000] bg-[#191C22]' : 'font-medium text-[#D4D4D8] transition-colors hover:text-white' }`}
          >
            My Plan
          </Link>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-3 sm:gap-6 lg:gap-10">
          <Link href='/myPlan'>
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="hidden text-[15px] font-semibold text-[#D4D4D8] sm:inline">
              Plan
            </span>

            <span className="flex h-8 min-w-8 items-center justify-center rounded-full bg-[#B8F000] px-2 text-[14px] font-bold text-[#10120D]">
              {planList.length}
            </span>
          </div>
          </Link>

          <Link href='/myPlan'>
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="hidden text-[15px] font-semibold text-[#D4D4D8] sm:inline">
              Saved
            </span>

            <span className="flex h-7 min-w-8 items-center justify-center rounded-full border border-[#D4D4D8] px-2 text-[14px] font-medium text-[#D4D4D8]">
               {savedPlan.length}
            </span>
          </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;