import { motion } from "framer-motion";
import { useState } from "react";
import drPhoto from "@assets/IMG_3427_1779219763966.jpeg";

export function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="bg-white py-16 md:py-28 px-5 md:px-10 lg:px-20 overflow-visible">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center md:items-start">

          {/* Image — left on desktop, after bio text but before quote on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <div className="md:sticky md:top-28 md:self-start">
              <div className="rounded-2xl overflow-hidden shadow-lg w-full max-w-[480px] mx-auto aspect-[4/5]">
                <img
                  src={drPhoto}
                  alt="Dr. Nathan Smith, chiropractor in Dickson, Tennessee"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Quote — mobile only, sits below image */}
              <div className="md:hidden mt-6 pt-6 border-t border-[#d4cdc3]">
                <p className="font-serif italic text-[#605f51] text-base text-center">
                  — Committed to your long-term wellbeing.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Text — right on desktop, top on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 flex flex-col justify-center"
          >
            <h2
              className="font-serif text-[#183e2c] mb-6 md:mb-8"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Meet Your Chiropractor
            </h2>
            <div className="space-y-5">
              <p className="font-sans text-[#414843] text-base md:text-lg leading-relaxed">
                Dr. Nathan Smith
              </p>
              <p className="font-sans text-[#414843] text-base md:text-lg leading-relaxed">
                Hi, I'm Dr. Nathan Smith, founder of Echelon Chiropractic in Dickson, Tennessee. My goal is to help patients become pain-free and stay pain-free through evidence-based chiropractic care.
              </p>
              <p className="font-sans text-[#414843] text-base md:text-lg leading-relaxed">
                I was born and raised in Morristown, Tennessee, and now live in Dickson with my wife. I attended Carson-Newman University in Jefferson City, Tennessee, where I earned a Bachelor of Science in Exercise Science. Afterward, I attended Palmer College of Chiropractic in Port Orange, Florida, where I received my Doctor of Chiropractic degree.
              </p>

              {/* Expandable content */}
              <motion.div
                initial={false}
                animate={{
                  height: isExpanded ? "auto" : 0,
                  opacity: isExpanded ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="space-y-5">
                  <p className="font-sans text-[#414843] text-base md:text-lg leading-relaxed">
                    I also serve in the United States Army Reserve. I enlisted in 2017 immediately after high school and commissioned as an officer in 2021 after graduating from Carson-Newman University. I recently reached nine years of military service.
                  </p>
                  <p className="font-sans text-[#414843] text-base md:text-lg leading-relaxed">
                    I chose the chiropractic profession after shadowing a chiropractor during my undergraduate studies at Carson-Newman. It was incredible to see people who could barely walk due to severe pain leave the office in significantly better condition — without medication or invasive procedures. That experience inspired my passion for helping others improve their quality of life through conservative, patient-centered care.
                  </p>
                  <p className="font-sans text-[#414843] text-base md:text-lg leading-relaxed">
                    I am passionate about helping people from all walks of life live their best lives. What that looks like varies from person to person, but I am confident in my ability to serve a wide range of patients — from athletes dealing with Achilles tendinitis, to pregnant mothers experiencing discomfort, to veterans who have spent years serving our country and are now living with chronic pain. I also regularly treat patients with low back pain, neck pain, sciatica, joint pain, sports injuries, and pregnancy-related conditions.
                  </p>
                  <p className="font-sans text-[#414843] text-base md:text-lg leading-relaxed">
                    My approach to care is individualized because there is no one-size-fits-all solution in chiropractic. Each person has lived a different life, experienced different challenges, and deserves a treatment plan tailored to their specific needs and goals. I utilize a combination of chiropractic adjustments, soft tissue therapy, rehabilitation exercises, flexion-distraction therapy, and, most importantly, patient education.
                  </p>
                  <p className="font-sans text-[#414843] text-base md:text-lg leading-relaxed">
                    I firmly believe that my role extends beyond helping patients feel better in the moment. My goal is to educate and empower each patient with the knowledge and tools they need to stay pain-free, maintain their progress, and achieve their long-term health goals.
                  </p>
                </div>
              </motion.div>

              {/* Expand/Collapse Button */}
              <div className="flex justify-center pt-4">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="font-sans text-[#183e2c] text-base md:text-lg font-medium hover:text-[#2d5a45] transition-colors duration-200 underline underline-offset-4"
                >
                  {isExpanded ? "Collapse" : "Read Dr. Smith's Story"}
                </button>
              </div>
            </div>

            {/* Quote — desktop only, inside text column */}
            <div className="hidden md:block mt-12 pt-6 border-t border-[#d4cdc3]">
              <p className="font-serif italic text-[#605f51] text-base md:text-lg">
                — Committed to your long-term wellbeing.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
