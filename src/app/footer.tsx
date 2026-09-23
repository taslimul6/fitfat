const Footer = () => {
    return (
        <footer className="mt-16 border-t border-[#292D33] bg-[#191C22]">
            <div className="mx-auto flex min-h-[110px] max-w-7xl items-center justify-between px-6">

                {/* Logo */}
                <img
                    src="/logo.png"
                    alt="FitLog Logo"
                    className="h-8 w-auto"
                />

                {/* Copyright */}
                <p className="text-base text-[#B8BFC9]">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>

            </div>
        </footer>
    );
};

export default Footer;