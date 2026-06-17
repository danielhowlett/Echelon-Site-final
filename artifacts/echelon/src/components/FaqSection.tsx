import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { JANE_BOOKING_URL } from "@/config/booking";

const faqs = [
  {
    q: "What does a chiropractor help with?",
    a: "Chiropractic care focuses on how the spine, joints, muscles, and nervous system work together. Many patients visit for back pain, neck pain, stiffness, mobility concerns, or general wellness support.",
  },
  {
    q: "What happens during a first visit?",
    a: "Your first visit includes a conversation about your symptoms, health history, and goals. Dr. Smith will also evaluate movement, posture, and areas of discomfort before discussing a care plan.",
  },
  {
    q: "Do I need to be in pain to see a chiropractor?",
    a: "Not at all. Some patients come in because of discomfort, while others seek support with mobility, posture, or long-term wellness.",
  },
  {
    q: "Where is Echelon Chiropractic located?",
    a: "We are located inside VitaLive Health and Wellness at 301 N Main Street, Dickson, TN 37055.",
  },
  {
    q: "What services are offered?",
    a: "Echelon Chiropractic offers chiropractic adjustments, new patient exams, therapeutic exercises, soft tissue therapy, wellness and maintenance care, and flexion distraction.",
  },
  {
    q: "What should I bring to my first visit?",
    a: "Bring a photo ID and any information that may help Dr. Smith better understand your health history, symptoms, and goals.",
  },
];

function PlusMinusIcon({ open }: { open: boolean }) {
  return (
    <span className="relative w-5 h-5 shrink-0 flex items-center justify-center">
      <span className="absolute block w-3 h-px bg-[#183e2c] transition-all duration-300" />
      <span
        className={`absolute block w-px h-3 bg-[#183e2c] transition-all duration-300 ${
          open ? "opacity-0 scale-y-0" : "opacity-100 scale-y-100"
        }`}
      />
    </span>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-[#fffbe9] py-12 md:py-14 border-b border-[#183e2c]/10">
      <div className="container mx-auto px-5 md:px-10">

        {/* Heading */}
        <div className="text-center mb-9 md:mb-10 max-w-2xl mx-auto">
          <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-[#183e2c]/50 mb-3">
            Common Questions
          </p>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#183e2c] leading-tight mb-3">
            Questions Before Your First Visit?
          </h2>
          <p className="font-sans text-[#183e2c]/55 text-sm md:text-base leading-relaxed">
            A few helpful things to know before reaching out to Echelon Chiropractic.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((item, i) => (
            <div key={i}>
              <div className="h-px bg-[#183e2c]/10" />
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 py-4 md:py-5 text-left group"
                aria-expanded={openIndex === i}
              >
                <span className="font-serif text-base md:text-[17px] text-[#183e2c] group-hover:opacity-70 transition-opacity leading-snug pr-2">
                  {item.q}
                </span>
                <PlusMinusIcon open={openIndex === i} />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="font-sans text-sm text-[#183e2c]/60 leading-relaxed pb-5 pr-8">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <div className="h-px bg-[#183e2c]/10" />
        </div>

        {/* Lead-in to contact section */}
        <div className="text-center mt-8 md:mt-9">
          <p className="font-serif text-lg md:text-xl text-[#183e2c]/60 italic max-w-3xl mx-auto">
            Ready to take the next step? Book your visit online through Jane.
          </p>
          <a
            href={JANE_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex mt-5 items-center justify-center bg-[#183e2c] text-white uppercase tracking-widest text-[11px] font-bold px-6 py-3 rounded-xl hover:bg-[#0e2a1e] transition-colors"
          >
            Book Online
          </a>
        </div>

      </div>
    </section>
  );
}
