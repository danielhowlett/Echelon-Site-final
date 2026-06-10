import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { GOOGLE_APPS_SCRIPT_ENDPOINT } from "@/config/appointmentForm";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(7, "Phone is required"),
  email: z.string().email("Valid email required"),
  time: z.string().min(1, "Please select a time preference"),
  reason: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

/** Premium form fields: cream fill, soft border, no box shadow */
const fieldClassName =
  "h-11 w-full rounded-lg border border-[#183e2c]/12 bg-[#faf8f4] px-4 py-2.5 text-base text-[#1b1c1c] shadow-none placeholder:text-[#b0a99a] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#183e2c]/20 focus-visible:border-[#183e2c] disabled:cursor-not-allowed disabled:opacity-50 md:text-base";

const textareaClassName =
  "min-h-[104px] w-full resize-none rounded-lg border border-[#183e2c]/12 bg-[#faf8f4] px-4 py-3 text-base text-[#1b1c1c] shadow-none placeholder:text-[#b0a99a] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#183e2c]/20 focus-visible:border-[#183e2c] disabled:cursor-not-allowed disabled:opacity-50 md:text-base";

async function submitToGoogleSheets(data: FormValues): Promise<void> {
  if (
    !GOOGLE_APPS_SCRIPT_ENDPOINT ||
    GOOGLE_APPS_SCRIPT_ENDPOINT === "YOUR_GOOGLE_APPS_SCRIPT_ENDPOINT_HERE"
  ) {
    throw new Error(
      "Appointment form is not connected yet. Please add your Google Apps Script Web App URL."
    );
  }

  const payload = {
    fullName: data.name,
    phone: data.phone,
    email: data.email,
    preferredTime: data.time,
    message: data.reason ?? "",
    submittedAt: new Date().toISOString(),
    pageUrl: typeof window !== "undefined" ? window.location.href : "",
  };

  await fetch(GOOGLE_APPS_SCRIPT_ENDPOINT, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify(payload),
  });
}

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", email: "", time: "", reason: "" },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(null);

    try {
      await submitToGoogleSheets(data);
      form.reset();
      setSubmitSuccess(true);
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or call 615-857-9089."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="appointment" className="bg-[#fffbe9] py-16 md:py-24 px-5 md:px-10 lg:px-20">
      <div className="container mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-16"
        >
          <p className="font-sans uppercase tracking-widest text-xs font-bold text-[#183e2c]/60 mb-3">
            Get in Touch
          </p>
          <h2
            className="font-serif text-[#183e2c]"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Request an Appointment
          </h2>
          <p className="font-sans text-[#605f51] text-base md:text-lg mt-4 max-w-xl">
            Send us your information and the office will follow up to confirm availability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">

          {/* Left — Form (wider) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-[#e8e2d8]"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-1 h-8 bg-[#183e2c] rounded-full" />
              <h3 className="font-serif text-2xl text-[#183e2c]">Appointment Request</h3>
            </div>
            <p className="font-sans text-xs text-[#183e2c]/50 mb-7 pl-4">
              Appointment requests are not confirmed until you hear back from the office.
            </p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="uppercase tracking-widest text-[10px] font-bold text-[#183e2c]/70">
                          Full Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your Name"
                            {...field}
                            className={fieldClassName}
                            data-testid="input-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="uppercase tracking-widest text-[10px] font-bold text-[#183e2c]/70">
                          Phone Number
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="(555) 555-5555"
                            {...field}
                            className={fieldClassName}
                            data-testid="input-phone"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="uppercase tracking-widest text-[10px] font-bold text-[#183e2c]/70">
                          Email Address
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="you@example.com"
                            {...field}
                            className={fieldClassName}
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="uppercase tracking-widest text-[10px] font-bold text-[#183e2c]/70">
                          Preferred Day / Time
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g. Tuesday morning, after 2pm"
                            {...field}
                            className={fieldClassName}
                            data-testid="input-time"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="reason"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="uppercase tracking-widest text-[10px] font-bold text-[#183e2c]/70">
                        Brief Note
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Anything helpful for us to know before your visit..."
                          className={textareaClassName}
                          {...field}
                          data-testid="textarea-reason"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {submitSuccess && (
                  <p
                    role="status"
                    className="rounded-lg border border-[#183e2c]/15 bg-[#faf8f4] px-4 py-3 font-sans text-sm text-[#183e2c] leading-relaxed"
                  >
                    Thank you. Your request has been sent and the office will follow up.
                  </p>
                )}

                {submitError && (
                  <p
                    role="alert"
                    className="rounded-lg border border-red-200/80 bg-red-50/60 px-4 py-3 font-sans text-sm text-red-900/90 leading-relaxed"
                  >
                    {submitError}
                  </p>
                )}

                <div className="pt-1 space-y-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#183e2c] text-white uppercase tracking-widest text-xs font-bold px-10 py-5 rounded-xl hover:bg-[#0e2a1e] h-auto transition-colors w-full sm:w-auto disabled:opacity-60"
                    data-testid="button-submit"
                  >
                    {isSubmitting ? "Sending…" : "Send Request"}
                  </Button>
                  <p className="font-sans text-[11px] text-[#183e2c]/40 leading-relaxed max-w-sm">
                    Please do not submit emergency or highly sensitive medical information through this form.
                  </p>
                </div>
              </form>
            </Form>
          </motion.div>

          {/* Right — Location (forest green card + map) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="lg:col-span-2 flex flex-col gap-0 rounded-3xl overflow-hidden shadow-sm border border-[#183e2c]/10"
            id="location"
          >
            <div className="bg-[#183e2c] p-7 md:p-8 flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-white/30 rounded-full" />
                <h3 className="font-serif text-2xl text-white">Find Us</h3>
              </div>
              <p className="font-sans text-white/60 text-sm mb-7 -mt-3">
                Inside VitaLive Health and Wellness
              </p>

              <div className="space-y-5 mb-8">
                <div className="flex gap-3.5 items-start">
                  <span className="material-symbols-outlined text-[#fffbe9]/70 text-xl shrink-0 mt-0.5">location_on</span>
                  <div>
                    <p className="font-sans text-white font-medium">301 N Main Street</p>
                    <p className="font-sans text-white/60 text-sm">Dickson, TN 37055</p>
                  </div>
                </div>
                <div className="flex gap-3.5 items-center">
                  <span className="material-symbols-outlined text-[#fffbe9]/70 text-xl shrink-0">phone</span>
                  <a href="tel:615-857-9089" className="font-sans text-white font-medium hover:text-[#fffbe9] transition-colors">
                    615-857-9089
                  </a>
                </div>
                <div className="flex gap-3.5 items-center">
                  <span className="material-symbols-outlined text-[#fffbe9]/70 text-xl shrink-0">mail</span>
                  <a
                    href="mailto:echelonchiropracticdickson@gmail.com"
                    className="font-sans text-white font-medium hover:text-[#fffbe9] transition-colors text-sm"
                    style={{ wordBreak: "break-word" }}
                  >
                    echelonchiropracticdickson@gmail.com
                  </a>
                </div>
                <div className="flex gap-3.5 items-start">
                  <span className="material-symbols-outlined text-[#fffbe9]/70 text-xl shrink-0 mt-0.5">schedule</span>
                  <div className="space-y-1">
                    <p className="font-sans text-white font-medium">Monday</p>
                    <p className="font-sans text-white/60 text-sm">7:00 AM – 5:00 PM</p>
                    <p className="font-sans text-white font-medium">Tuesday</p>
                    <p className="font-sans text-white/60 text-sm">7:00 AM – 5:00 PM</p>
                    <p className="font-sans text-white font-medium">Wednesday</p>
                    <p className="font-sans text-white/60 text-sm">Closed</p>
                    <p className="font-sans text-white font-medium">Thursday</p>
                    <p className="font-sans text-white/60 text-sm">9:00 AM – 6:00 PM</p>
                    <p className="font-sans text-white font-medium">Friday</p>
                    <p className="font-sans text-white/60 text-sm">7:00 AM – 3:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5">
                <a
                  href="https://maps.google.com/?q=301+N+Main+St,+Dickson,+TN+37055"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white uppercase tracking-widest text-[10px] font-bold px-4 py-2.5 rounded-lg transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">directions</span>
                  Directions
                </a>
                <a
                  href="tel:615-857-9089"
                  className="inline-flex items-center gap-1.5 bg-[#fffbe9] text-[#183e2c] uppercase tracking-widest text-[10px] font-bold px-4 py-2.5 rounded-lg hover:bg-white transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">phone</span>
                  Call Now
                </a>
              </div>
            </div>

            <div className="h-[200px] md:h-[240px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3218.0!2d-87.3793!3d36.0773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886101a2b1f5b1a5%3A0x1234567890abcdef!2s301%20N%20Main%20St%2C%20Dickson%2C%20TN%2037055!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Echelon Chiropractic Location"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
