import { ArrowRight, Quote } from "lucide-react";
import { motion } from "framer-motion";
import family from "@/assets/family.jpg";

const comparisons = [
  {
    name: "Facebook groups",
    before: "Buried posts. No vetting.",
    after: "Tracked pods, visible demand.",
  },
  {
    name: "Outschool",
    before: "Online, supply-first.",
    after: "Local, demand-first.",
  },
  {
    name: "Wyzant",
    before: "One tutor only.",
    after: "A whole pod.",
  },
  {
    name: "Venmo / Zelle",
    before: "Pay before it forms.",
    after: "Pay when it runs.",
  },
];

const TestimonialsSection = () => (
  <section className="py-20 md:py-24 overflow-hidden">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 items-start">
        <div className="lg:sticky lg:top-32">
          <span className="text-accent font-medium text-sm uppercase tracking-[0.18em]">
            Beat the workaround
          </span>
          <h2 className="text-3xl md:text-4xl font-display mt-3 mb-6 leading-[1.15]">
            <span className="font-extrabold text-accent">Skip the</span>{" "}
            <span className="font-extrabold">group chat.</span>
          </h2>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative hidden lg:block mt-10"
          >
            <img
              src={family}
              alt="A parent and child exploring learning options together"
              loading="lazy"
              width={1280}
              height={1280}
              className="rounded-2xl object-cover w-full h-[380px] shadow-hero"
            />
            <div className="absolute -bottom-6 -right-4 max-w-xs rounded-xl bg-card shadow-card-hover p-6 border border-border">
              <Quote className="w-6 h-6 text-accent mb-2" />
              <p className="font-display text-base font-bold leading-snug text-foreground">
                “The class does not exist yet. So we build it.”
              </p>
            </div>
          </motion.div>
        </div>

        <div className="space-y-4">
          {comparisons.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              className="rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300"
            >
              <h3 className="font-display text-xl font-semibold mb-4">{item.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.before}</p>
              <div className="flex items-start gap-3 rounded-lg bg-brand-light/60 p-4">
                <ArrowRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <p className="text-sm text-foreground leading-relaxed font-medium">{item.after}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
