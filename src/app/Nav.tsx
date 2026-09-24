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
      <div className="container mx-auto flex h-[82px] items-center justify-between px-4 sm:px-6 lg:px-8 w-[90%]">
        {/* Logo */}

        <Link href="/">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" height ="25" width="50" alt="logo" />

          <span className="text-[24px] font-medium tracking-[-0.5px] text-[#E5E7EB]">
            FITFAT
          </span>
        </div>
        
        </Link>
        

        {/* Navigation */}
        <div className="flex items-center gap-1 rounded-xl">
          <Link
            href="/"
            className={`rounded-xl  px-4 py-3 text-[16px] ${path === '/' ?'font-semibold  text-[#B8F000] bg-[#191C22]' : 'font-medium text-[#D4D4D8] transition-colors hover:text-white' }`}
          >
            Workouts
          </Link>

          <Link
            href="/myPlan"
            className={`rounded-xl px-4 py-3 text-[16px] ${path === '/myPlan' ?'font-semibold  text-[#B8F000] bg-[#191C22]' : 'font-medium text-[#D4D4D8] transition-colors hover:text-white' }`}
          >
            My Plan
          </Link>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-10">
          <Link href='/myPlan'>
          <div className="flex items-center gap-2">
            <span className="text-[15px] font-semibold text-[#D4D4D8]">
              Plan
            </span>

            <span className="flex h-8 min-w-8 items-center justify-center rounded-full bg-[#B8F000] px-2 text-[14px] font-bold text-[#10120D]">
              {planList.length}
            </span>
          </div>
          </Link>

          <Link href='/myPlan'>
          <div className="flex items-center gap-2">
            <span className="text-[15px] font-semibold text-[#D4D4D8]">
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