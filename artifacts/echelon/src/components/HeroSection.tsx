import { motion } from "framer-motion";
import heroImage from "@assets/david-trinks-U276SVdo4ik-unsplash_1779218066419.jpg";
import { JANE_BOOKING_URL } from "@/config/booking";

export function HeroSection() {
  return (
    <section className="hero">

      {/* Left — Forest green text panel */}
      <div className="hero-content bg-[#183e2c]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          <h1 className="font-serif text-white">
            {/* Mobile: controlled breaks — hide/show per breakpoint */}
            <span className="sm:hidden">
              Personalized<br />Chiropractic Care<br />in Dickson, TN
            </span>
            <span className="hidden sm:inline">
              Personalized Chiropractic Care in Dickson, TN
            </span>
          </h1>
          <p className="font-sans text-white/85">
            Helping patients improve mobility, manage pain, and feel better through practical, personalized chiropractic care.
          </p>
          <a
            href={JANE_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-center bg-white text-[#183e2c] font-bold uppercase tracking-widest text-xs px-8 py-3.5 rounded-sm hover:bg-gray-100 transition-colors"
            style={{ maxWidth: "360px", width: "100%" }}
          >
            Book Online
          </a>
        </motion.div>
      </div>

      {/* Right — Image panel */}
      <div className="hero-image">
        <img
          src={heroImage}
          alt="Spine model used for chiropractic care and patient education"
        />
        {/* Gradient blending left edge into green panel */}
        <div
          className="overlay"
          style={{
            background:
              "linear-gradient(to right, #183e2c 0%, rgba(24,62,44,0.55) 30%, rgba(24,62,44,0.1) 70%, transparent 100%)",
          }}
        />
      </div>

    </section>
  );
}
