import { Link } from "react-router-dom";
import { Bookmark, MapPin, Clock, Users, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/layout/PageHero";

const saved = [
  {
    title: "Hands-on middle-school science",
    area: "Stamford, CT · within 10 mi",
    schedule: "Weekly · Tuesday 10:00–11:30 · 12-week term",
    seats: "4 of 6 seats committed",
    tuition: "12-week term · $336",
    status: "Forming",
  },
  {
    title: "ELA and writing workshop pod",
    area: "New Haven County, CT · within 10 mi",
    schedule: "Weekly · 90 minutes · 10-week term",
    seats: "3 of 8 seats committed",
    tuition: "10-week term · $260",
    status: "Forming",
  },
  {
    title: "Beginner photography elective",
    area: "Fairfield County, CT · within 12 mi",
    schedule: "Weekly recurring elective · term set with instructor",
    seats: "4 of 6 seats committed",
    tuition: "Tuition set after instructor and term approval",
    status: "Needs instructor",
  },
];

const Saved = () => (
  <>
    <PageHero
      eyebrow="Saved pods"
      titleLight="The shortlist"
      titleBold="you're watching."
      description="Keep an eye on pods close to minimum enrollment. You'll be notified when one is ready to launch."
    />

    <section className="py-14 md:py-20">
      <div className="container">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {saved.map((s) => (
            <article
              key={s.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="rounded-full bg-amber-light px-3 py-1 text-xs font-semibold text-foreground">
                  {s.status}
                </span>
                <Bookmark className="w-4 h-4 text-accent fill-current" />
              </div>
              <h2 className="font-display text-xl font-bold mb-3 leading-snug">{s.title}</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" /> {s.area}
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" /> {s.schedule}
                </li>
                <li className="flex items-start gap-2">
                  <Users className="w-4 h-4 text-primary shrink-0 mt-0.5" /> {s.seats}
                </li>
              </ul>
              <p className="mt-4 font-semibold text-sm">{s.tuition}</p>
              <Button size="sm" className="mt-5 rounded-full w-full" asChild>
                <Link to="/search">View details</Link>
              </Button>
            </article>
          ))}
        </div>
        <p className="mt-10 flex items-start gap-2 text-sm text-muted-foreground">
          <Info className="w-4 h-4 shrink-0 mt-0.5" /> Illustrative demo data · saving is not
          persisted in this prototype.
        </p>
      </div>
    </section>
  </>
);

export default Saved;
