import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroPod from "@/assets/hero-pod.jpg";
import heroTutoring from "@/assets/hero-tutoring.jpg";
import heroMicroclass from "@/assets/hero-microclass.jpg";

const slides = [heroPod, heroTutoring, heroMicroclass];

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const navigate = useNavigate();

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {slides.map((image, i) => (
        <motion.div
          key={i}
          animate={{ opacity: activeSlide === i ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{ zIndex: activeSlide === i ? 1 : 0 }}
        >
          <img
            src={image}
            alt="Small-group learning in Connecticut"
            className="w-full h-full object-cover scale-105"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/25" />
        </motion.div>
      ))}

      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 bg-accent/25 text-white backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold mb-6 border border-accent/50 tracking-[0.18em] uppercase">
            <MapPin className="w-3.5 h-3.5" /> Connecticut
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-[clamp(3.5rem,8vw,5.5rem)] font-display leading-[1.02] mb-6 text-white">
            <span className="font-extrabold text-accent">Find the people.</span>
            <br />
            <span className="font-extrabold">Form the pod.</span>
          </h1>

          <div className="flex flex-wrap gap-3">
            <Button
              size="lg"
              className="bg-accent hover:bg-coral-hover text-accent-foreground rounded-full text-base font-bold"
              onClick={() => navigate("/search")}
            >
              Find a pod <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full text-base font-bold border-white/50 bg-transparent text-white hover:bg-white/10 hover:text-white"
              onClick={() => navigate("/request")}
            >
              <Sparkles className="w-4 h-4 mr-2" /> Request a pod
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-3 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
              activeSlide === i ? "bg-accent w-8" : "bg-white/60 w-3 hover:bg-white/90"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
