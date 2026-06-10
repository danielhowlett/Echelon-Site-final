import { useState } from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Macy",
    label: "Family & Pregnancy Care",
    preview:
      "Dr. Nathan has been incredible! He takes the time to explain what's going on in a way that's easy to understand and focuses on helping you move and feel better long term, not just get a quick adjustment.",
    fullQuote:
      "Dr. Nathan has been incredible! He takes the time to explain what's going on in a way that's easy to understand and focuses on helping you move and feel better long term, not just get a quick adjustment. I'd highly recommend to both active individuals, and anyone dealing with everyday aches and pains.",
  },
  {
    name: "Abby",
    label: "Mobility & Wellness",
    preview:
      "I leave with less tension in my body and feeling more relaxed. I went to get adjusted multiple times during all three trimesters of my pregnancy and hardly dealt with any lower back pain at all.",
    fullQuote:
      "I've been adjusted by Nathan Smith many times and each time I leave with less tension in my body and feeling more relaxed all together. I went to get adjusted multiple times during all three trimesters of my pregnancy and hardly dealt with any lower back pain at all. I have always felt safe and comfortable when getting adjusted and would 10/10 recommend echelon chiropractic.",
  },
  {
    name: "Callie",
    label: "Pregnancy Care",
    preview:
      "Dr. Smith does an excellent job adjusting me. He takes the time to talk through my issues and gives me good exercises and advice to help strengthen my problem areas.",
    fullQuote:
      "When my local chiropractor of many years retired I was worried that I wouldn't find another one like him. I'm so glad that wasn't the case! Dr. Smith does an excellent job adjusting me. He takes the time to talk through my issues and gives me good exercises and advice to help strengthen my problem areas. I would highly recommend Dr. Smith!",
  },
  {
    name: "Lori",
    label: "Ongoing Care",
    preview:
      "I've had a lot of issues with my neck and he has taken intentional care to make sure I get relief when needed. Something else I really appreciate is his ability to sit with you and actually listen to your concerns.",
    fullQuote:
      "I have gone to multiple chiropractors in the Dickson area and none of them compare to Dr. Smith at Echelon chiropractic. I've had a lot of issues with my neck and he has taken intentional care to make sure I get relief when needed. I also got adjusted throughout my entire pregnancy as well and I know it's the reason I feel as good as I do. He is very intentional with trying to get ahead of an issue or immediately tackling one that comes up. Something else I really appreciate is his ability to sit with you and actually listen to your concerns- time with him is never rushed. I highly recommend Dr. Smith!",
  },
  {
    name: "Gracie",
    label: "Neck Pain & Pregnancy Care",
    preview:
      "I've had a lot of issues with my neck and he has taken intentional care to make sure I get relief when needed. I also got adjusted throughout my entire pregnancy as well and I know it's the reason I feel as good as I do.",
    fullQuote:
      "I have gone to multiple chiropractors in the Dickson area and none of them compare to Dr. Smith at Echelon chiropractic. I've had a lot of issues with my neck and he has taken intentional care to make sure I get relief when needed. I also got adjusted throughout my entire pregnancy as well and I know it's the reason I feel as good as I do. He is very intentional with trying to get ahead of an issue or immediately tackling one that comes up. Something else I really appreciate is his ability to sit with you and actually listen to your concerns- time with him is never rushed. I highly recommend Dr. Smith!",
  },
];

function StarRow() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="#183e2c"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="bg-[#fffbe9] py-14 md:py-18 lg:py-20 overflow-hidden border-b border-[#183e2c]/10">
      <div className="container mx-auto px-5 md:px-10">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-12">
          <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-[#183e2c]/50 mb-3">
            Patient Stories
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#183e2c] leading-tight">
            What Patients Are Saying
          </h2>
          <p className="font-sans text-[#183e2c]/55 text-sm md:text-base leading-relaxed mt-4 max-w-2xl mx-auto">
            A few words from patients who have visited Echelon Chiropractic in Dickson, TN.
          </p>
        </div>

        {/* Carousel - 1 card mobile, 2 cards tablet, 3 cards desktop */}
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((t, i) => (
                <CarouselItem
                  key={i}
                  className="md:basis-1/2 lg:basis-1/3 pl-4"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-white rounded-2xl p-7 flex flex-col gap-3 shadow-sm border border-[#183e2c]/6 w-full h-full"
                  >
                    <StarRow />
                    <p className="font-sans text-[#183e2c]/75 text-sm leading-relaxed flex-1">
                      {expandedIndex === i ? `"${t.fullQuote}"` : `"${t.preview}"`}
                    </p>
                    <div className="pt-3 border-t border-[#183e2c]/10">
                      <p className="font-serif text-[#183e2c] font-medium text-sm">{t.name}</p>
                      <p className="font-sans text-[11px] text-[#183e2c]/45 tracking-wide mt-0.5">{t.label}</p>
                    </div>
                    <button
                      onClick={() => toggleExpand(i)}
                      className="mt-3 font-sans text-[#183e2c] text-sm font-medium hover:text-[#2d5a45] transition-colors duration-200 underline underline-offset-4 text-left"
                    >
                      {expandedIndex === i ? "Close Story" : "Read Full Story"}
                    </button>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex -left-16 top-1/2 -translate-y-1/2 w-10 h-10 border-[#183e2c]/20 bg-white text-[#183e2c] hover:bg-[#183e2c]/5" />
            <CarouselNext className="hidden lg:flex -right-16 top-1/2 -translate-y-1/2 w-10 h-10 border-[#183e2c]/20 bg-white text-[#183e2c] hover:bg-[#183e2c]/5" />
          </Carousel>
        </div>

        {/* Disclaimer */}
        <p className="text-center font-sans text-[11px] text-[#183e2c]/40 mt-8 md:mt-10 leading-relaxed px-2">
          Individual results may vary. Testimonials are shared for general informational purposes.
        </p>
      </div>
    </section>
  );
}
