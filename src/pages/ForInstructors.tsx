import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Sparkles, BadgeCheck, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/layout/PageHero";
import family from "@/assets/family.jpg";
import heroPod from "@/assets/hero-pod.jpg";
import heroTutoring from "@/assets/hero-tutoring.jpg";
import heroMicroclass from "@/assets/hero-microclass.jpg";

const steps = [
  { icon: MapPin, title: "Pick your area", image: heroPod },
  { icon: Sparkles, title: "Pick your subject", image: heroMicroclass },
  { icon: BadgeCheck, title: "Verify yourself", image: heroTutoring },
];

const ForInstructors = () => (
  <>
    <PageHero
      eyebrow="Teach a pod"
      titleLight="Pick your group."
      titleBold="Teach what you love."
    >
      <Button className="bg-accent hover:bg-coral-hover text-accent-foreground rounded-full" asChild>
        <Link to="/request">Start teaching</Link>
      </Button>
    </PageHero>

    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="overflow-hidden rounded-3xl border border-border bg-card shadow-card"
            >
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                width={1920}
                height={1280}
                className="h-52 w-full object-cover"
              />
              <div className="flex items-center gap-3 p-6">
                <span className="w-10 h-10 shrink-0 rounded-xl bg-brand-light flex items-center justify-center">
                  <s.icon className="w-5 h-5 text-brand-deep" />
                </span>
                <h2 className="font-display text-lg font-bold">{s.title}</h2>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="pb-20">
      <div className="container grid lg:grid-cols-2 gap-10 items-center">
        <div className="rounded-3xl overflow-hidden shadow-card-hover">
          <img
            src={family}
            alt="Instructor with a small group of students"
            loading="lazy"
            width={1920}
            height={1280}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="font-display text-3xl md:text-4xl mb-6">
            <span className="font-extrabold text-accent">You set</span>{" "}
            <span className="font-bold">the terms.</span>
          </h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {["Subject", "Schedule", "Term", "Tuition", "80% payout"].map((t) => (
              <span
                key={t}
                className="rounded-full bg-muted px-4 py-1.5 text-sm font-semibold text-foreground"
              >
                {t}
              </span>
            ))}
          </div>
          <Button className="rounded-full" asChild>
            <Link to="/request">Propose a pod</Link>
          </Button>
          <p className="mt-6 flex items-start gap-2 text-xs text-muted-foreground">
            <Info className="w-3.5 h-3.5 shrink-0 mt-0.5" /> Illustrative demo data.
          </p>
        </div>
      </div>
    </section>
  </>
);

export default ForInstructors;
