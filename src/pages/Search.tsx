import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search as SearchIcon, MapPin, Users, Clock, ShieldCheck, Sparkles, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import PageHero from "@/components/layout/PageHero";

type Status = "Forming" | "Needs instructor" | "Running" | "Waitlist";

interface Listing {
  id: string;
  title: string;
  subject: string;
  area: string;
  ages: string;
  schedule: string;
  meetings: string;
  seats: number;
  filled: number;
  tuition: string;
  installments: string;
  status: Status;
}

const listings: Listing[] = [
  {
    id: "1",
    title: "Hands-on middle-school science",
    subject: "Science",
    area: "Stamford, CT · within 10 mi",
    ages: "Ages 11–14",
    schedule: "Weekly · Tuesday 10:00–11:30",
    meetings: "12-week term · 12 meetings",
    seats: 6,
    filled: 4,
    tuition: "12-week term · $336",
    installments: "or 3 installments of $112",
    status: "Forming",
  },
  {
    id: "2",
    title: "Algebra I small group",
    subject: "Math",
    area: "Stamford, CT · within 10 mi",
    ages: "Ages 12–14",
    schedule: "Twice weekly · 75 minutes",
    meetings: "12-week term · 24 meetings",
    seats: 6,
    filled: 5,
    tuition: "12-week term · $768",
    installments: "or 3 installments of $256",
    status: "Forming",
  },
  {
    id: "3",
    title: "Beginner photography",
    subject: "Electives",
    area: "Fairfield County, CT · within 12 mi",
    ages: "Ages 12–16",
    schedule: "Weekly recurring elective · 90 minutes",
    meetings: "Term length set with instructor",
    seats: 6,
    filled: 4,
    tuition: "Tuition set after instructor and term approval",
    installments: "Installment plan offered at enrollment",
    status: "Needs instructor",
  },
  {
    id: "4",
    title: "ELA and writing workshop pod",
    subject: "Writing",
    area: "New Haven County, CT · within 10 mi",
    ages: "Ages 10–13",
    schedule: "Weekly · 90 minutes",
    meetings: "10-week term · 10 meetings",
    seats: 8,
    filled: 3,
    tuition: "10-week term · $260",
    installments: "or 2 installments of $130",
    status: "Forming",
  },
  {
    id: "5",
    title: "U.S. history seminar",
    subject: "History",
    area: "Hartford County, CT · within 15 mi",
    ages: "Ages 13–17",
    schedule: "Weekly · 90 minutes",
    meetings: "10-week term · 10 meetings",
    seats: 8,
    filled: 8,
    tuition: "10-week term · $220",
    installments: "or 2 installments of $110",
    status: "Waitlist",
  },
  {
    id: "6",
    title: "Intro chemistry with lab",
    subject: "Science",
    area: "Fairfield County, CT · within 12 mi",
    ages: "Ages 14–17",
    schedule: "Weekly · 90 minutes",
    meetings: "8-week term · 8 meetings",
    seats: 6,
    filled: 6,
    tuition: "8-week term · $272",
    installments: "or 2 installments of $136",
    status: "Running",
  },
];

const subjects = ["All", "Science", "Math", "Writing", "History", "Electives"];

const statusStyles: Record<Status, string> = {
  Forming: "bg-amber-light text-foreground",
  "Needs instructor": "bg-muted text-foreground",
  Running: "bg-success-light text-success",
  Waitlist: "bg-brand-light text-brand-deep",
};

const Search = () => {
  const [params] = useSearchParams();
  const [query, setQuery] = useState(params.get("q") ?? "");
  const [subject, setSubject] = useState("All");

  const results = useMemo(
    () =>
      listings.filter((l) => {
        const matchesSubject = subject === "All" || l.subject === subject;
        const q = query.trim().toLowerCase();
        const matchesQuery =
          !q ||
          l.title.toLowerCase().includes(q) ||
          l.subject.toLowerCase().includes(q) ||
          l.area.toLowerCase().includes(q);
        return matchesSubject && matchesQuery;
      }),
    [query, subject]
  );

  return (
    <>
      <PageHero
        eyebrow="Find a pod"
        titleLight="Recurring learning pods are"
        titleBold="forming across Connecticut."
        description="Search near you · or request the core academic or elective pod your child needs."
      >
        <div className="flex flex-col sm:flex-row max-w-xl rounded-lg border border-white/25 bg-white/10 backdrop-blur-md p-2">
          <div className="flex-1 flex items-center gap-2 px-4">
            <SearchIcon className="w-5 h-5 text-white/70 shrink-0" />
            <input
              type="text"
              aria-label="Search recurring pods"
              placeholder="Science, algebra, writing, photography…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent text-white outline-none placeholder:text-white/60 py-3 sm:py-2 focus-visible:outline-none"
            />
          </div>
          <Button
            className="bg-accent hover:bg-coral-hover text-accent-foreground rounded-md px-6 mt-2 sm:mt-0"
            asChild
          >
            <Link to="/request">Request a pod</Link>
          </Button>
        </div>
        <p className="mt-4 text-sm text-white/80">
          Selected search example: Stamford, CT · 10 mi. Tutoring and one-time workshops are roadmap
          formats and are not shown here.
        </p>
      </PageHero>

      <section className="py-14 md:py-20">
        <div className="container">
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {subjects.map((s) => (
              <button
                key={s}
                onClick={() => setSubject(s)}
                aria-pressed={subject === s}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  subject === s
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {s}
              </button>
            ))}
            <span className="ml-auto text-sm text-muted-foreground">
              {results.length} {results.length === 1 ? "result" : "results"}
            </span>
          </div>

          {results.length === 0 ? (
            <div className="rounded-2xl border border-border bg-muted/40 p-12 text-center">
              <Sparkles className="w-10 h-10 text-accent mx-auto mb-4" />
              <h2 className="font-display text-2xl font-bold mb-2">Nothing matches yet</h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Post a non-identifying request. PodFinder will surface compatible local interest and
                qualified instructors as they become available.
              </p>
              <Button
                className="bg-accent hover:bg-coral-hover text-accent-foreground rounded-full"
                asChild
              >
                <Link to="/request">Request a pod</Link>
              </Button>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((l, i) => (
                <motion.article
                  key={l.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-card-hover transition-shadow"
                >
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="rounded-full bg-brand-light px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-brand-deep">
                      Recurring pod
                    </span>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[l.status]}`}
                    >
                      {l.status}
                    </span>
                  </div>
                  <h2 className="font-display text-xl font-bold leading-snug mb-3">{l.title}</h2>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" /> {l.area} · {l.ages}
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" /> {l.schedule} ·{" "}
                      {l.meetings}
                    </li>
                    <li className="flex items-start gap-2">
                      <Users className="w-4 h-4 text-primary shrink-0 mt-0.5" /> {l.filled} of{" "}
                      {l.seats} seats committed
                    </li>
                    <li className="flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Location to be
                      determined privately by enrolled families and instructor.
                    </li>
                  </ul>
                  <div className="mt-4 h-1.5 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full rounded-full bg-accent"
                      style={{ width: `${Math.min(100, (l.filled / l.seats) * 100)}%` }}
                    />
                  </div>
                  <div className="mt-auto pt-5 border-t border-border">
                    <p className="font-semibold">{l.tuition}</p>
                    <p className="text-xs text-muted-foreground mt-1">{l.installments}</p>
                    <Button size="sm" className="rounded-full mt-4 w-full" asChild>
                      <Link to="/request">Request enrollment</Link>
                    </Button>
                  </div>
                </motion.article>
              ))}
            </div>
          )}

          <p className="mt-10 flex items-start gap-2 text-sm text-muted-foreground">
            <Info className="w-4 h-4 shrink-0 mt-0.5" /> Illustrative demo data · profiles,
            credentials, ratings and prices are examples, not live records or validated market prices.
          </p>
        </div>
      </section>
    </>
  );
};

export default Search;
