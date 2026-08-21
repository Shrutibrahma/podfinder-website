import { motion } from "framer-motion";

const steps = ["Request", "Families join", "Instructor applies", "Pod runs"];

const TrustBadges = () => (
  <section className="bg-brand-deep py-8">
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="flex items-center gap-3"
          >
            <span className="w-3.5 h-3.5 shrink-0 rounded-full bg-accent ring-4 ring-accent/25" />

            <span className="text-sm font-bold text-white leading-snug">{step}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBadges;
