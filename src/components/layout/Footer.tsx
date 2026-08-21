import { Link } from "react-router-dom";
import { Network, Quote } from "lucide-react";

const columns = [
  {
    title: "Platform",
    links: [
      { label: "Find a pod", path: "/search" },
      { label: "Request a pod", path: "/request" },
      { label: "How it works", path: "/how-it-works" },
    ],
  },
  {
    title: "Families & instructors",
    links: [
      { label: "Safety & trust", path: "/safety" },
      { label: "For instructors", path: "/for-instructors" },
      { label: "Saved pods", path: "/saved" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy (prototype)", path: "/privacy" },
      { label: "Terms of service (prototype)", path: "/terms" },
    ],
  },
];

const Footer = () => (
  <footer className="bg-brand-deep text-white">
    <div className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <span className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                <Network className="w-5 h-5 text-accent" />
              </span>
              <span className="text-xl font-display font-bold">
                Pod<span className="text-accent">Finder</span>
              </span>
            </Link>
            <p className="text-sm text-white/80 leading-relaxed">
              Find the people. Form the pod. Recurring learning pods forming across Connecticut.
            </p>
            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-5">
              <Quote className="w-5 h-5 text-accent mb-2" />
              <p className="font-display text-sm leading-relaxed text-white/85">
                “The class your child needs may not exist yet. PodFinder helps bring together the families and instructor to make it possible.”
              </p>
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70 mb-4">
                {column.title}
              </h2>
              <ul className="space-y-3 text-sm text-white/80">
                {column.links.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="hover:text-accent transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="border-t border-white/10 py-6">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/70 text-center md:text-left">
        <p>
          Illustrative demo data. Connecticut-first, built to scale by region. · Prototype: no real
          payments, accounts or messaging are processed.
        </p>
        <p>© 2026 PodFinder. All data shown is illustrative.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
