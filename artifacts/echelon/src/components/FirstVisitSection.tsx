import { motion } from "framer-motion";
import { JANE_BOOKING_URL } from "@/config/booking";

const steps = [
  {
    number: "01",
    title: "Consultation",
    body: "We'll talk through your symptoms, health history, and goals so Dr. Smith can better understand what brought you in.",
  },
  {
    number: "02",
    title: "Examination",
    body: "Dr. Smith will evaluate movement, posture, and areas of discomfort to get a clearer picture of what may be contributing to the issue.",
  },
  {
    number: "03",
    title: "Care Plan",
    body: "You'll receive a personalized care plan based on your needs, comfort level, and long-term wellness goals.",
  },
  {
    number: "04",
    title: "Follow-Up Care",
    body: "We'll track your progress over time and adjust care as needed to support better movement, comfort, and function.",
  },
];

export function FirstVisitSection() {
  return (
    <section className="bg-[#fbf9f8] py-20 md:py-28">
      <div className="container mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — Heading + intro + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28"
          >
            <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-[#183e2c]/50 mb-4">
              Your First Visit
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#183e2c] leading-tight mb-6">
              What to Expect at<br className="hidden md:block" /> Your First Visit
            </h2>
            <p className="font-sans text-[#183e2c]/65 text-base md:text-lg leading-relaxed mb-8 max-w-md">
              Your first visit is designed to help us understand your needs, answer your questions, and create a care plan that makes sense for you.
            </p>
            <a
              href={JANE_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-sans text-xs font-semibold tracking-[0.18em] uppercase text-white bg-[#183e2c] px-7 py-3.5 rounded-sm hover:bg-[#1f4f38] transition-colors"
            >
              Book Online
            </a>
          </motion.div>

          {/* Right — Numbered timeline */}
          <div className="flex flex-col">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                {/* Top divider */}
                <div className="h-px bg-[#183e2c]/12 w-full" />

                <div className="flex gap-6 md:gap-8 py-8 md:py-10">
                  {/* Step number */}
                  <span
                    className="font-serif text-4xl md:text-5xl leading-none shrink-0 select-none"
                    style={{ color: "rgba(24,62,44,0.13)" }}
                  >
                    {step.number}
                  </span>

                  {/* Step content */}
                  <div className="pt-1">
                    <h3 className="font-serif text-lg md:text-xl text-[#183e2c] mb-2">
                      {step.title}
                    </h3>
                    <p className="font-sans text-sm md:text-base text-[#183e2c]/60 leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Bottom divider */}
            <div className="h-px bg-[#183e2c]/12 w-full" />
          </div>

        </div>
      </div>
    </section>
  );
}
