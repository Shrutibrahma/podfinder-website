import { motion } from "framer-motion";

interface PageHeroProps {
  eyebrow: string;
  titleLight: string;
  titleBold: string;
  description?: string;
  children?: React.ReactNode;
}

const PageHero = ({ eyebrow, titleLight, titleBold, description, children }: PageHeroProps) => (
  <section className="relative overflow-hidden bg-gradient-to-br from-black via-brand-deep to-black pt-32 pb-16 md:pt-40 md:pb-20">
    <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />
    <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-accent/10 blur-3xl" />
    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <span className="inline-flex items-center rounded-full border border-accent/40 bg-accent/15 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white">
          {eyebrow}
        </span>
        <h1 className="mt-6 font-display text-3xl md:text-5xl leading-[1.1] text-white">
          <span className="font-extrabold text-accent">{titleLight}</span>{" "}
          <span className="font-bold">{titleBold}</span>
        </h1>
        {description && (
          <p className="mt-5 text-lg text-white/80 leading-relaxed max-w-2xl">{description}</p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </motion.div>
    </div>
  </section>
);

export default PageHero;
