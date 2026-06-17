import { motion } from "framer-motion";
import logoImage from "@assets/logo_trimmed.png";
import { JANE_BOOKING_URL } from "@/config/booking";

export function ContactSection() {
  return (
    <section id="appointment" className="bg-[#fffbe9] py-16 md:py-24 px-5 md:px-10 lg:px-20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 flex h-full flex-col bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_25px_70px_rgba(24,62,44,0.08)] border border-[#e8e2d8]"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-1 h-8 bg-[#183e2c] rounded-full" />
              <p className="font-sans uppercase tracking-[0.28em] text-[10px] font-bold text-[#183e2c]/70">
                Online Booking
              </p>
            </div>

            <h2 className="font-serif text-4xl text-[#183e2c] mb-4">
              Book Your Appointment Online
            </h2>

            <p className="font-sans text-[#414843] text-base md:text-lg leading-relaxed max-w-2xl mb-8">
              Choose your visit type, view available appointment times, and schedule your visit online.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <a
                href={JANE_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#183e2c] text-white uppercase tracking-widest text-xs font-bold px-10 py-4 rounded-xl hover:bg-[#0e2a1e] transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fffbe9]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fffbe9]"
              >
                Book Online
              </a>
              <p className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[#183e2c]/70">
                <img src={logoImage} alt="Echelon logo" className="h-5 w-5 rounded-full bg-white p-1" />
                Opens in a new tab
              </p>
            </div>

            <div className="mt-10 grid gap-4 rounded-[1.75rem] bg-[#f7f1e6] border border-[#e8e2d8] p-6 md:p-7">
              <h3 className="font-serif text-xl text-[#183e2c] mb-4">How booking works</h3>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#183e2c] text-[11px] font-bold text-white">1</span>
                  <div>
                    <p className="font-sans text-sm font-semibold text-[#183e2c]">Choose your visit type</p>
                    <p className="font-sans text-sm text-[#414843]/80">Select the appointment option that best fits your needs.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#183e2c] text-[11px] font-bold text-white">2</span>
                  <div>
                    <p className="font-sans text-sm font-semibold text-[#183e2c]">Pick a time</p>
                    <p className="font-sans text-sm text-[#414843]/80">View available openings and choose what works for your schedule.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#183e2c] text-[11px] font-bold text-white">3</span>
                  <div>
                    <p className="font-sans text-sm font-semibold text-[#183e2c]">Complete your booking</p>
                    <p className="font-sans text-sm text-[#414843]/80">Enter your details and finish scheduling securely online.</p>
                  </div>
                </li>
              </ol>
              <p className="mt-4 font-sans text-sm text-[#414843]/80">
                Not sure which visit type to choose? Call the office and we’ll be happy to help.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2 flex h-full flex-col"
            id="location"
          >
            <div className="flex-1 rounded-[2rem] bg-[#183e2c] p-7 md:p-8 shadow-[0_25px_70px_rgba(24,62,44,0.12)] border border-[#183e2c]/15">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-white/30 rounded-full" />
                <h3 className="font-serif text-2xl text-white">Questions?</h3>
              </div>
              <p className="font-sans text-white/75 text-sm mb-6 max-w-sm">
                Reach out anytime for questions about your visit, insurance, or your first appointment.
              </p>

              <div className="space-y-4 text-white/90">
                <div className="flex gap-3.5 items-start">
                  <span className="material-symbols-outlined text-[#fffbe9]/70 text-xl shrink-0 mt-0.5">location_on</span>
                  <div>
                    <p className="font-sans font-medium">301 N Main Street</p>
                    <p className="text-sm text-white/70">Dickson, TN 37055</p>
                  </div>
                </div>
                <div className="flex gap-3.5 items-center">
                  <span className="material-symbols-outlined text-[#fffbe9]/70 text-xl shrink-0">phone</span>
                  <a href="tel:615-857-9089" className="font-sans font-medium text-white hover:text-[#fffbe9] transition-colors">
                    615-857-9089
                  </a>
                </div>
                <div className="flex gap-3.5 items-center">
                  <span className="material-symbols-outlined text-[#fffbe9]/70 text-xl shrink-0">mail</span>
                  <a
                    href="mailto:echelonchiropracticdickson@gmail.com"
                    className="font-sans font-medium text-white hover:text-[#fffbe9] transition-colors text-sm"
                    style={{ wordBreak: "break-word" }}
                  >
                    echelonchiropracticdickson@gmail.com
                  </a>
                </div>
              </div>

              <div className="mt-6 rounded-[1.5rem] bg-[#fffbe9]/10 border border-white/10 p-4">
                <p className="font-sans uppercase tracking-[0.24em] text-[10px] font-semibold text-[#fffbe9]/70 mb-3">
                  Office Hours
                </p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-[#fffbe9]/80">
                  <div className="font-medium">Monday</div>
                  <div>7:00 AM – 5:00 PM</div>
                  <div className="font-medium">Tuesday</div>
                  <div>7:00 AM – 5:00 PM</div>
                  <div className="font-medium">Wednesday</div>
                  <div>Closed</div>
                  <div className="font-medium">Thursday</div>
                  <div>9:00 AM – 6:00 PM</div>
                  <div className="font-medium">Friday</div>
                  <div>7:00 AM – 3:00 PM</div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://maps.google.com/?q=301+N+Main+St,+Dickson,+TN+37055"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white uppercase tracking-widest text-[10px] font-bold px-4 py-3 rounded-xl transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">directions</span>
                  Directions
                </a>
                <a
                  href="tel:615-857-9089"
                  className="inline-flex items-center gap-2 bg-[#fffbe9] text-[#183e2c] uppercase tracking-widest text-[10px] font-bold px-4 py-3 rounded-xl hover:bg-white transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">phone</span>
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
