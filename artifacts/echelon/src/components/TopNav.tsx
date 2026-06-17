import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImage from "@assets/logo_trimmed.png";
import { JANE_BOOKING_URL } from "@/config/booking";

export function TopNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Location", href: "#location" },
  ];

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-[#fffbe9]/95 backdrop-blur-md border-[#d4cdc3]/50 shadow-sm py-3"
            : "bg-[#fffbe9]/90 backdrop-blur-md border-[#d4cdc3]/30 py-4 md:py-5"
        }`}
      >
        <div className="container mx-auto px-5 md:px-10 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="shrink-0 flex items-center">
            <img
              src={logoImage}
              alt="Echelon Chiropractic"
              className="h-12 md:h-14 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative uppercase tracking-widest text-xs font-bold text-[#414843] hover:text-[#183e2c] transition-colors whitespace-nowrap"
              >
                {link.name}
                <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-[#183e2c] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-5 shrink-0">
            <a
              href="tel:615-857-9089"
              className="font-sans text-sm font-medium text-[#414843] hover:text-[#183e2c] transition-colors whitespace-nowrap"
            >
              615-857-9089
            </a>
            <a
              href={JANE_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#183e2c] text-white uppercase tracking-widest text-xs font-bold px-5 py-3 rounded-sm hover:bg-[#002818] transition-colors whitespace-nowrap"
            >
              Book Online
            </a>
          </div>

          {/* Mobile: hamburger only */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              className="text-[#183e2c] p-1.5 rounded"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 inset-x-0 z-40 bg-[#fbf9f8] border-b border-[#d4cdc3]/40 shadow-lg pt-20 pb-8 px-6 flex flex-col lg:hidden"
          >
            <nav className="flex flex-col gap-5 mb-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="uppercase tracking-widest text-sm font-bold text-[#183e2c] border-b border-[#d4cdc3]/30 pb-4"
                  onClick={closeMobile}
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <a
              href={JANE_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#183e2c] text-white uppercase tracking-widest text-xs font-bold px-8 py-4 rounded-sm text-center hover:bg-[#002818] transition-colors"
              onClick={closeMobile}
            >
              Book Online
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
