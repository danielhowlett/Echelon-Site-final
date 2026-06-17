import logoImage from "@assets/logo_trimmed.png";
import { JANE_BOOKING_URL } from "@/config/booking";

export function Footer() {
  return (
    <footer className="bg-[#183e2c] py-12 md:py-14 px-5 md:px-10 lg:px-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-10 md:mb-12">

          <div className="flex flex-col gap-3 sm:col-span-2 lg:col-span-1">
            <img
              src={logoImage}
              alt="Echelon Chiropractic"
              className="h-14 w-auto object-contain object-left brightness-0 invert"
            />
            <p className="font-sans text-white/60 text-sm leading-relaxed max-w-xs">
              Personalized Chiropractic Care in Dickson, TN.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="font-sans font-bold text-white/40 uppercase tracking-widest text-xs mb-2">Contact Info</h4>
            <p className="font-sans text-white/75 text-sm leading-relaxed">
              Inside VitaLive Health and Wellness<br />
              301 N Main Street, Dickson, TN 37055
            </p>
            <a href="tel:615-857-9089" className="font-sans text-sm text-white/75 hover:text-white transition-colors mt-1">
              615-857-9089
            </a>
            <a
              href="mailto:echelonchiropracticdickson@gmail.com"
              className="font-sans text-sm text-white/75 hover:text-white transition-colors"
              style={{ wordBreak: "break-word", overflowWrap: "break-word" }}
            >
              echelonchiropracticdickson@gmail.com
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="font-sans font-bold text-white/40 uppercase tracking-widest text-xs mb-2">Quick Links</h4>
            <nav className="flex flex-col gap-2 font-sans text-sm text-white/75">
              <a href="#services" className="hover:text-white transition-colors w-fit">Services</a>
              <a href="#about" className="hover:text-white transition-colors w-fit">About</a>
              <a href={JANE_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors w-fit">Book Online</a>
              <a href="#location" className="hover:text-white transition-colors w-fit">Location</a>
            </nav>
          </div>

        </div>

        <div className="border-t border-white/10 pt-6">
          <p className="font-sans text-sm text-white/40">
            © {new Date().getFullYear()} Echelon Chiropractic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
