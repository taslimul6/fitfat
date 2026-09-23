import Image from "next/image";
import Link from "next/link";


const Navbar = () => {
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
          <a
            href="#"
            className="rounded-xl bg-[#191C22] px-4 py-3 text-[16px] font-semibold text-[#B8F000]"
          >
            Workouts
          </a>

          <a
            href="#"
            className="rounded-xl px-4 py-3 text-[16px] font-medium text-[#D4D4D8] transition-colors hover:text-white"
          >
            My Plan
          </a>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2">
            <span className="text-[15px] font-semibold text-[#D4D4D8]">
              Plan
            </span>

            <span className="flex h-8 min-w-8 items-center justify-center rounded-full bg-[#B8F000] px-2 text-[14px] font-bold text-[#10120D]">
              1
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[15px] font-semibold text-[#D4D4D8]">
              Saved
            </span>

            <span className="flex h-7 min-w-8 items-center justify-center rounded-full border border-[#D4D4D8] px-2 text-[14px] font-medium text-[#D4D4D8]">
              0
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;