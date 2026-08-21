import { Users, CreditCard, Clock } from "lucide-react";
import { motion } from "framer-motion";
import heroPod from "@/assets/hero-pod.jpg";

const stats = [
  { value: "Small", label: "Groups by design", icon: Users },
  { value: "$0", label: "Before it runs", icon: CreditCard },
  { value: "90 min", label: "Session cap", icon: Clock },
];

const StatsSection = () => (
  <section className="relative overflow-hidden py-20 md:py-24">
    <div className="absolute inset-0">
      <img
        src={heroPod}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="w-full h-full object-cover"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-black/85" />
    </div>

    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mb-14"
      >
        <span className="text-accent font-medium text-sm uppercase tracking-[0.18em]">
          Term commitment, protected
        </span>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mt-3 mb-4 leading-[1.12]">
          <span className="font-extrabold text-accent">Small groups.</span>
          <br />
          <span className="font-bold">Real courses.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm p-8"
          >
            <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center mb-6">
              <stat.icon className="w-5 h-5 text-accent" />
            </div>
            <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
              {stat.value}
            </div>
            <p className="text-sm font-medium text-white/85">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <p className="mt-8 text-xs text-white/70">Illustrative demo data.</p>
    </div>
  </section>
);

export default StatsSection;
