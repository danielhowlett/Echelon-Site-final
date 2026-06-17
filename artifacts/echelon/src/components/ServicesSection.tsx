import { motion } from "framer-motion";
import { JANE_BOOKING_URL } from "@/config/booking";

const services = [
  {
    icon: "accessibility_new",
    title: "Chiropractic Adjustments",
    description: "Targeted adjustments to improve joint mobility, reduce nerve irritability, and relieve pain."
  },
  {
    icon: "biotech",
    title: "New Patient Examinations",
    description: "Thorough assessment of your health history and physical condition to create a customized care plan."
  },
  {
    icon: "sports_gymnastics",
    title: "Therapeutic Exercises & Rehabilitation",
    description: "Specific exercises designed to strengthen weakened muscles and improve stability."
  },
  {
    icon: "touch_app",
    title: "Soft Tissue Therapy",
    description: "Hands-on techniques to release muscle tension, reduce inflammation, and improve circulation."
  },
  {
    icon: "spa",
    title: "Wellness & Maintenance Care",
    description: "Ongoing care designed to maintain your progress and prevent future injuries."
  },
  {
    icon: "airline_seat_recline_extra",
    title: "Flexion & Distraction",
    description: "A gentle chiropractic table technique that rhythmically stretches and decompresses the spine to reduce disc and nerve pressure, relieve pain, and improve mobility."
  }
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#fffbe9] py-16 md:py-28 px-5 md:px-10 lg:px-20">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-10 md:mb-16">
          <h2 className="font-serif text-[#183e2c] mb-5" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            Services Offered at Echelon Chiropractic
          </h2>
          <p className="font-sans text-[#414843] text-base md:text-lg leading-relaxed">
            Comprehensive chiropractic care, tailored to your needs—focused on mobility, long-term wellness, and practical pain relief.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl border border-[#d4cdc3]/30 p-6 md:p-8 flex flex-col gap-3 hover:shadow-md transition-shadow duration-300"
            >
              <span className="material-symbols-outlined text-4xl text-[#183e2c] font-light">
                {service.icon}
              </span>
              <h3 className="font-serif text-lg md:text-xl text-[#183e2c]">
                {service.title}
              </h3>
              <p className="font-sans text-[#414843] text-sm md:text-base leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center">
          <a
            href={JANE_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center bg-[#183e2c] text-white font-bold uppercase tracking-widest text-xs px-10 py-4 rounded-sm hover:bg-[#002818] transition-colors"
          >
            Book Online
          </a>
        </div>
      </div>
    </section>
  );
}
