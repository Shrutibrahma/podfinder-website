import { PenLine, Users, ShieldCheck, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: PenLine,
    title: "Request",
    description: "Subject, age, schedule.",
  },
  {
    icon: Users,
    title: "Families match",
    description: "With visible reasons.",
  },
  {
    icon: ShieldCheck,
    title: "Instructor applies",
    description: "Reviewed before approval.",
  },
  {
    icon: Rocket,
    title: "Pod launches",
    description: "Location set privately.",
  },
];

const HowItWorks = () => (
  <section className="py-20 md:py-24 bg-muted">
    <div className="container">
      <div className="text-center mb-14 max-w-2xl mx-auto">
        <span className="text-accent font-medium text-sm uppercase tracking-[0.18em]">
          How it works
        </span>
        <h2 className="text-3xl md:text-4xl font-display mt-3">
          <span className="font-extrabold text-accent">One request.</span>{" "}
          <span className="font-extrabold">Four steps.</span>
        </h2>
      </div>

      <div className="relative">
        <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-accent/20" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center relative"
            >
              <div className="relative mx-auto mb-6 w-32">
                <div className="w-32 h-32 rounded-full bg-card shadow-card flex items-center justify-center mx-auto">
                  <step.icon className="w-11 h-11 text-accent" />
                </div>
              </div>

              <h3 className="text-lg font-display font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
