import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import heroMicroclass from "@/assets/hero-microclass.jpg";

const CTASection = () => (
  <section className="relative overflow-hidden py-20 md:py-24">
    <div className="absolute inset-0 bg-gradient-to-br from-black via-brand-deep to-black" />
    <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
    <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-accent/10 blur-3xl" />

    <div className="container relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-accent font-medium text-sm uppercase tracking-[0.18em]">
            Across Connecticut
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-white mt-3 mb-4 leading-[1.12]">
            <span className="font-extrabold text-accent">Find a pod.</span>
            <br />
            <span className="font-extrabold">Or start one.</span>
          </h2>
          <div className="mb-8" />
          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-accent hover:bg-coral-hover text-accent-foreground rounded-full text-base"
              asChild
            >
              <Link to="/search">
                Explore pods <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full text-base border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
              asChild
            >
              <Link to="/request">
                <Sparkles className="w-5 h-5 mr-2" /> Request a pod
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full text-base border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
              asChild
            >
              <Link to="/for-instructors">
                <GraduationCap className="w-5 h-5 mr-2" /> Teach a pod
              </Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center relative"
        >
          <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
            <img
              src={heroMicroclass}
              alt="A small group learning together"
              loading="lazy"
              width={1920}
              height={1280}
              className="w-full h-full object-cover"
            />
          </div>
          <motion.div
            animate={{ y: [6, -6, 6] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
            className="absolute bottom-6 -right-2 rounded-full bg-accent px-4 py-2 shadow-card-hover"
          >
            <span className="text-xs font-semibold text-accent-foreground">
              4 of 6 families committed
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CTASection;
