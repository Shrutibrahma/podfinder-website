import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Check,
  ClipboardList,
  CreditCard,
  MessageSquareX,
  Rocket,
  ShieldCheck,
  Sparkles,
  Ticket,
  UserCheck,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const traditional = [
  "Supply-first",
  "Fixed tutors",
  "Fixed subjects",
  "One child at a time",
  "Parents do the rest",
];

const podfinder = [
  "Demand-first",
  "Parent states the need",
  "Compatible families are matched",
  "Verified instructor joins",
  "Pay only when it runs",
];

const flow = [
  { icon: ClipboardList, label: "Request" },
  { icon: Users, label: "Match families" },
  { icon: UserCheck, label: "Invite instructor" },
  { icon: Rocket, label: "Launch pod" },
];

const table = [
  {
    icon: MessageSquareX,
    them: "Facebook groups",
    themCopy: "Messy, unverified.",
    usCopy: "Matched and verified.",
  },
  {
    icon: Building2,
    them: "Tutoring sites",
    themCopy: "One-to-one, tutor-first.",
    usCopy: "Small groups, demand-first.",
  },
  {
    icon: Sparkles,
    them: "Outschool",
    themCopy: "Online, supply-first.",
    usCopy: "Local and flexible.",
  },
  {
    icon: CreditCard,
    them: "Payment apps",
    themCopy: "Separate from enrollment.",
    usCopy: "Held, released if no pod.",
  },
];

const rise = {
  hidden: { opacity: 0, y: 44, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const DifferentSection = () => (
  <section id="how-we-are-different" className="relative overflow-hidden py-24 md:py-32">
    <div className="absolute inset-0 bg-gradient-soft" />
    <div className="absolute -top-24 -left-24 w-[26rem] h-[26rem] rounded-full bg-accent/20 blur-3xl" />
    <div className="absolute bottom-0 right-0 w-[22rem] h-[22rem] rounded-full bg-sunrise/30 blur-3xl" />

    <div className="container relative z-10">
      <motion.div
        variants={rise}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-3xl"
      >
        <span className="clay-pill inline-block bg-card px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-accent-foreground">
          The difference
        </span>
        <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.05] tracking-tight">
          How PodFinder <span className="text-gradient-sunrise">is different</span>
        </h2>
        <p className="mt-5 text-xl md:text-2xl font-semibold text-foreground/80 leading-snug">
          Tutoring schools sell instruction. PodFinder forms learning communities.
        </p>
      </motion.div>

      <div className="mt-14 grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        <motion.div
          variants={rise}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="clay clay-hover bg-card/80 p-8 md:p-10"
        >
          <div className="flex items-center gap-3 mb-7">
            <span className="clay-pill flex h-12 w-12 items-center justify-center bg-muted">
              <Building2 className="h-6 w-6 text-muted-foreground" />
            </span>
            <h3 className="text-2xl font-display font-bold">Traditional tutoring schools</h3>
          </div>
          <ul className="space-y-4">
            {traditional.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-muted-foreground/50" />
                <span className="text-lg font-medium text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={rise}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.12 }}
          className="clay clay-hover relative overflow-hidden bg-card p-8 md:p-10 ring-2 ring-accent/40"
        >
          <div className="absolute -top-16 -right-10 h-48 w-48 rounded-full bg-gradient-warm opacity-25 blur-2xl" />
          <div className="relative flex items-center gap-3 mb-7">
            <span className="clay-pill flex h-12 w-12 items-center justify-center bg-accent">
              <ShieldCheck className="h-6 w-6 text-accent-foreground" />
            </span>
            <h3 className="text-2xl font-display font-bold">PodFinder</h3>
          </div>
          <ul className="relative space-y-4">
            {podfinder.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-start gap-3"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success-light">
                  <Check className="h-3.5 w-3.5 text-success" strokeWidth={3} />
                </span>
                <span className="text-lg font-semibold text-foreground">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Flow */}
      <div className="mt-16 clay bg-card/70 p-8 md:p-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {flow.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 28, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-4 md:flex-col md:gap-3 md:text-center"
            >
              <span className="clay-pill flex h-14 w-14 shrink-0 items-center justify-center bg-gradient-warm">
                <step.icon className="h-6 w-6 text-accent-foreground" />
              </span>
              <span className="text-base font-bold tracking-tight">{step.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.p
        variants={rise}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-14 max-w-4xl text-xl md:text-2xl font-display leading-relaxed"
      >
        With a tutoring school, families choose from whatever is already offered. With PodFinder, a
        parent can say,{" "}
        <span className="font-bold">
          “My child needs a beginner photography class, middle-school science lab, or algebra pod,”
        </span>{" "}
        and the platform helps turn that unmet need into a real small-group learning opportunity.
      </motion.p>

      {/* Comparison table */}
      <div className="mt-14 grid sm:grid-cols-2 gap-6">
        {table.map((row, i) => (
          <motion.div
            key={row.them}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="clay clay-hover bg-card p-7"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="clay-pill flex h-10 w-10 items-center justify-center bg-muted">
                <row.icon className="h-5 w-5 text-muted-foreground" />
              </span>
              <h4 className="text-lg font-display font-bold">{row.them}</h4>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">{row.themCopy}</p>
            <div className="mt-5 flex items-start gap-3 rounded-2xl bg-brand-light/70 p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success-light">
                <Check className="h-3.5 w-3.5 text-success" strokeWidth={3} />
              </span>
              <p className="text-base font-semibold leading-relaxed">{row.usCopy}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        variants={rise}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-16 clay relative overflow-hidden bg-gradient-sunrise p-10 md:p-14 text-center"
      >
        <div className="absolute inset-0 bg-brand-deep/55" />
        <h3 className="relative text-3xl md:text-5xl font-display font-bold text-white leading-tight">
          Find what exists. Form what does not.
        </h3>
        <Button
          size="lg"
          className="relative mt-8 clay-pill bg-card text-foreground hover:bg-card text-base font-bold px-8 h-14 transition-transform duration-500 hover:-translate-y-1"
          asChild
        >
          <Link to="/request">
            Request a pod <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default DifferentSection;
