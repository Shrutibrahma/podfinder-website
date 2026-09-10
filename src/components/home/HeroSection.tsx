import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroMicroclass from "@/assets/hero-microclass.jpg";
import { katalystLinks } from "@/config/katalyst";

const subjectPills = [
  "Robotics",
  "Science labs",
  "Creative writing",
  "Photography",
  "Algebra",
  "Spanish",
];

const HeroSection = () => (
  <section className="relative overflow-hidden bg-[#fffdf9] pt-28 pb-20 md:pt-36 md:pb-28">
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_8%_10%,rgba(169,220,255,.58),transparent_27%),radial-gradient(circle_at_88%_12%,rgba(246,200,223,.45),transparent_24%),radial-gradient(circle_at_22%_78%,rgba(191,231,214,.34),transparent_28%),linear-gradient(180deg,#fffdf9_0%,#faf8ff_52%,#fffaf5_100%)]" />
    <div className="absolute inset-0 -z-10 opacity-[0.14] bg-[linear-gradient(rgba(30,34,48,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(30,34,48,.08)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />

    <div className="container">
      <div className="grid lg:grid-cols-[1.02fr_.98fr] gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 text-brand-deep/70 text-xs font-extrabold tracking-[0.18em] uppercase mb-6">
            <span className="h-0.5 w-7 rounded-full bg-gradient-to-r from-accent to-[#a9dcff]" />
            <MapPin className="h-3.5 w-3.5 text-accent" />
            Connecticut
          </span>

          <h1 className="font-display text-5xl md:text-7xl lg:text-[clamp(4.5rem,7.3vw,6.5rem)] leading-[0.94] tracking-[-0.055em] text-brand-deep mb-7">
            Kids learn better{" "}
            <span className="bg-gradient-to-r from-[#8f7dd8] via-[#6baed8] to-[#74b897] bg-clip-text text-transparent">
              together.
            </span>
          </h1>

          <p className="text-lg md:text-xl leading-8 text-muted-foreground max-w-2xl">
            Pods & Tutors helps families create small-group learning around real
            interests — enrichment, academics, STEM, arts, languages, and more.
            It can support homeschoolers, after-school learners, and traditionally
            schooled kids who want more connection.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-9">
            <Button
              size="lg"
              className="bg-accent hover:bg-coral-hover text-accent-foreground rounded-full text-base font-bold shadow-card-hover"
              asChild
            >
              <a
                href={katalystLinks.family || "/request"}
                target={katalystLinks.family ? "_blank" : undefined}
                rel={katalystLinks.family ? "noreferrer" : undefined}
              >
                I’m a Connecticut Family <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full text-base font-bold border-white/80 bg-white/60 text-brand-deep hover:bg-white hover:text-brand-deep shadow-card"
              asChild
            >
              <a
                href={katalystLinks.instructor || "/for-instructors"}
                target={katalystLinks.instructor ? "_blank" : undefined}
                rel={katalystLinks.instructor ? "noreferrer" : undefined}
              >
                <Sparkles className="w-4 h-4 mr-2" /> I’m Interested in Teaching
              </a>
            </Button>
          </div>

          <p className="mt-5 text-sm font-semibold text-muted-foreground">
            Small groups. Shared curiosity. Real local connection.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.08 }}
          className="relative"
        >
          <div className="absolute -top-8 -right-7 h-44 w-44 rounded-full bg-[#a9dcff]/70 blur-2xl" />
          <div className="absolute -bottom-8 -left-8 h-44 w-44 rounded-full bg-[#ffd0b8]/70 blur-2xl" />

          <div className="relative rounded-[2.6rem] border border-white/80 bg-white/55 p-4 shadow-[0_26px_80px_rgba(72,76,96,.14)] backdrop-blur-2xl">
            <img
              src={heroMicroclass}
              alt="Children learning together in a small group"
              width={1920}
              height={1280}
              className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-card"
            />

            <div className="absolute -left-3 top-8 rounded-2xl border border-white/80 bg-white/80 px-4 py-3 shadow-card backdrop-blur-md">
              <p className="text-[10px] uppercase tracking-[0.14em] font-extrabold text-muted-foreground">
                Families asking for
              </p>
              <p className="text-sm font-extrabold text-brand-deep">Robotics near Stamford</p>
            </div>

            <div className="absolute -right-3 bottom-8 rounded-2xl border border-white/80 bg-white/80 px-4 py-3 shadow-card backdrop-blur-md">
              <p className="text-[10px] uppercase tracking-[0.14em] font-extrabold text-muted-foreground">
                Group forming
              </p>
              <p className="text-sm font-extrabold text-brand-deep">4 families interested</p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {subjectPills.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-white/80 bg-white/65 px-4 py-2 text-sm font-bold text-brand-deep/80 shadow-card backdrop-blur-md"
              >
                {pill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
