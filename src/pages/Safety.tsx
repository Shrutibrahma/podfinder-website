import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { UserCheck, Eye, MapPin, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/layout/PageHero";
import heroPod from "@/assets/hero-pod.jpg";
import heroTutoring from "@/assets/hero-tutoring.jpg";
import heroMicroclass from "@/assets/hero-microclass.jpg";
import family from "@/assets/family.jpg";

const pillars = [
  { icon: UserCheck, title: "Vetted instructors", image: heroTutoring },
  { icon: Eye, title: "Anonymous families", image: heroPod },
  { icon: MapPin, title: "Private locations", image: heroMicroclass },
  { icon: CreditCard, title: "Pay when it runs", image: family },
];

const Safety = () => (
  <>
    <PageHero
      eyebrow="Safety and trust"
      titleLight="Small groups."
      titleBold="Clear rules."
    />

    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid gap-6 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="relative overflow-hidden rounded-3xl shadow-card"
            >
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                width={1920}
                height={1280}
                className="h-64 w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 p-6">
                <span className="w-10 h-10 shrink-0 rounded-xl bg-accent flex items-center justify-center">
                  <p.icon className="w-5 h-5 text-accent-foreground" />
                </span>
                <h2 className="font-display text-xl font-extrabold text-white">{p.title}</h2>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="pb-20">
      <div className="container text-center">
        <Button
          className="bg-accent hover:bg-coral-hover text-accent-foreground rounded-full"
          asChild
        >
          <Link to="/how-it-works">See how it works</Link>
        </Button>
        <p className="mt-6 text-xs text-muted-foreground">Illustrative demo data.</p>
      </div>
    </section>
  </>
);

export default Safety;
