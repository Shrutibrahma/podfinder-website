import { motion } from "framer-motion";
import {
  Bar,
  BarChart,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { HeartHandshake, Repeat, Users, Wallet } from "lucide-react";

const enrollment = [
  { name: "Public", value: 50.26 },
  { name: "Homeschooling", value: 30.78 },
  { name: "Private", value: 17.32 },
  { name: "Off grid", value: 1.65 },
];

const pieColors = [
  "hsl(var(--brand-primary))",
  "hsl(var(--success))",
  "hsl(var(--amber))",
  "hsl(var(--accent))",
];

const reasons = [
  { name: "School environment", value: 83 },
  { name: "Moral instruction", value: 75 },
  { name: "Family life", value: 72 },
  { name: "Academics", value: 72 },
  { name: "Nontraditional", value: 50 },
];

const value = [
  { icon: Users, stat: "4+", label: "Families per pod" },
  { icon: Repeat, stat: "Full term", label: "Weekly rhythm" },
  { icon: HeartHandshake, stat: "Matched", label: "By age and interest" },
  { icon: Wallet, stat: "One price", label: "Split across the group" },
];

const rise = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const ProofSection = () => (
  <section className="relative overflow-hidden py-20 md:py-28">
    <div className="absolute inset-0 bg-gradient-soft opacity-70" />
    <div className="container relative z-10">
      <motion.div variants={rise} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <span className="text-accent font-medium text-sm uppercase tracking-[0.18em]">
          The shift
        </span>
        <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 leading-[1.1]">
          Kids are leaving classrooms.
          <br />
          <span className="text-accent">They still need each other.</span>
        </h2>
      </motion.div>

      <div className="mt-12 grid lg:grid-cols-2 gap-6">
        <motion.div
          variants={rise}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="clay bg-card p-7 md:p-8"
        >
          <h3 className="text-xl font-display font-bold">K-12 enrollment by 2030</h3>
          <div className="h-72 mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={enrollment}
                  dataKey="value"
                  nameKey="name"
                  innerRadius="52%"
                  outerRadius="82%"
                  paddingAngle={3}
                  stroke="none"
                >
                  {enrollment.map((_, i) => (
                    <Cell key={i} fill={pieColors[i]} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(v: number) => `${v}%`}
                  contentStyle={{
                    borderRadius: 16,
                    border: "1px solid hsl(var(--border))",
                    background: "hsl(var(--card))",
                    fontWeight: 600,
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <ul className="mt-2 grid grid-cols-2 gap-2">
            {enrollment.map((slice, i) => (
              <li key={slice.name} className="flex items-center gap-2 text-sm font-semibold">
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ background: pieColors[i] }}
                />
                {slice.name} {slice.value}%
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={rise}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="clay bg-card p-7 md:p-8"
        >
          <h3 className="text-xl font-display font-bold">Why parents homeschool</h3>
          <div className="h-72 mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={reasons} layout="vertical" margin={{ left: 8, right: 24 }}>
                <XAxis type="number" hide domain={[0, 100]} />
                <YAxis
                  type="category"
                  dataKey="name"
                  width={130}
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                />
                <Tooltip
                  formatter={(v: number) => `${v}%`}
                  contentStyle={{
                    borderRadius: 16,
                    border: "1px solid hsl(var(--border))",
                    background: "hsl(var(--card))",
                    fontWeight: 600,
                  }}
                />
                <Bar
                  dataKey="value"
                  radius={[8, 8, 8, 8]}
                  fill="hsl(var(--accent))"
                  barSize={18}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-2 text-xs font-semibold text-muted-foreground">
            Source: Pew Research Center, NCES 2023
          </p>
        </motion.div>
      </div>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {value.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="clay clay-hover bg-card p-6"
          >
            <span className="clay-pill flex h-11 w-11 items-center justify-center bg-brand-light">
              <item.icon className="h-5 w-5 text-brand-deep" />
            </span>
            <p className="mt-4 text-2xl font-display font-bold">{item.stat}</p>
            <p className="text-sm font-semibold text-muted-foreground">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProofSection;
