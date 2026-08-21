import { Users, Handshake, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const formats = [
  {
    icon: Users,
    eyebrow: "Live now",
    title: "Learning pods",
    description: "Small groups, full term.",
    path: "/search",
    cta: "Find a pod",
    iconBg: "bg-brand-light text-brand-deep",
    live: true,
  },
  {
    icon: Handshake,
    eyebrow: "Live now",
    title: "Compatible families",
    description: "Matched by age and interest.",
    path: "/request",
    cta: "Start a pod",
    iconBg: "bg-amber-light text-amber",
    live: true,
  },
  {
    icon: MapPin,
    eyebrow: "Live now",
    title: "Local community",
    description: "Nearby, chosen by the group.",
    path: "/how-it-works",
    cta: "See how",
    iconBg: "bg-success-light text-success",
    live: true,
  },
];

const ServicesSection = () => (
  <section className="py-20 md:py-24">
    <div className="container">
      <div className="mb-12">
        <span className="text-accent font-medium text-sm uppercase tracking-[0.18em]">
          Community
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mt-3 leading-[1.12]">
          <span className="font-extrabold text-accent">Community building for kids.</span>
          <br />
          <span className="font-bold">Learning follows.</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {formats.map((format, i) => (
          <motion.div
            key={format.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <Link
              to={format.path}
              className="group block h-full bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 border border-border hover:border-accent/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <div
                className={`w-16 h-16 rounded-xl ${format.iconBg} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}
              >
                <format.icon className="w-8 h-8" />
              </div>
              <span
                className={`inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] ${
                  format.live
                    ? "bg-success-light text-success"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {format.eyebrow}
              </span>
              <h3 className="text-2xl font-display font-semibold mt-3 mb-3 text-foreground group-hover:text-accent transition-colors">
                {format.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {format.description}
              </p>
              <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm">
                {format.cta}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
