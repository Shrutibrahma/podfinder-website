import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const ParentInstructorSection = () => (
  <section className="py-20 md:py-24 bg-muted/40">
    <div className="container grid gap-6 lg:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl border border-border bg-card p-8 md:p-10 shadow-card"
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-light px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-deep">
          For families
        </span>
        <h2 className="font-display text-2xl md:text-3xl font-bold mt-4 mb-3 leading-snug">
          Can’t find the right class? Start the pod.
        </h2>
        <p className="text-muted-foreground leading-relaxed max-w-prose">
          Tell us what your child wants to learn. We’ll help find compatible families and a qualified
          instructor.
        </p>
        <Button
          className="mt-6 rounded-full bg-accent hover:bg-coral-hover text-accent-foreground"
          asChild
        >
          <Link to="/request">
            <Sparkles className="w-4 h-4 mr-2" /> Request a pod
          </Link>
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="rounded-2xl border border-border bg-card p-8 md:p-10 shadow-card"
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-amber-light px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
          For instructors
        </span>
        <h2 className="font-display text-2xl md:text-3xl font-bold mt-4 mb-3 leading-snug">
          Your expertise could become their favorite class.
        </h2>
        <p className="text-muted-foreground leading-relaxed max-w-prose">
          Meet families already looking for what you can teach. Set your schedule, term price and pod
          size.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
          <Button className="rounded-full" asChild>
            <Link to="/for-instructors">
              <GraduationCap className="w-4 h-4 mr-2" /> View teaching opportunities
            </Link>
          </Button>
          <Link
            to="/for-instructors"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
          >
            Have a class in mind? Propose a pod <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ParentInstructorSection;
