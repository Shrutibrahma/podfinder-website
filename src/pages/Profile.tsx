import { Link } from "react-router-dom";
import { MapPin, Bell, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/layout/PageHero";

const children = [
  { name: "Ava", detail: "Age 12 · Science, math" },
  { name: "Noah", detail: "Age 9 · Reading, robotics" },
];

const activity = [
  { label: "Requests posted", value: "3" },
  { label: "Pods joined", value: "1" },
  { label: "Saved pods", value: "3" },
];

const Profile = () => (
  <>
    <PageHero
      eyebrow="Your profile"
      titleLight="Rachel A."
      titleBold="Connecticut parent."
      description="Your preferences shape which forming pods you see first · neighbourhood, age bands, and the times you can realistically make."
    />

    <section className="py-14 md:py-20">
      <div className="container grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <h2 className="font-display text-xl font-bold mb-4">Children</h2>
            <ul className="space-y-3">
              {children.map((c) => (
                <li key={c.name} className="flex items-center gap-4 rounded-xl bg-muted/60 p-4">
                  <span className="w-10 h-10 rounded-full bg-brand-light text-brand-deep flex items-center justify-center font-semibold">
                    {c.name[0]}
                  </span>
                  <div>
                    <p className="font-medium">{c.name}</p>
                    <p className="text-sm text-muted-foreground">{c.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <h2 className="font-display text-xl font-bold mb-4">Preferences</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              {[
                ["Search area", "Stamford, CT · within 10 miles"],
                ["Preferred cadence", "Saturday mornings"],
                ["Group size", "4–6 children"],
                ["Budget", "Up to $40 / session"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl bg-muted/60 p-4">
                  <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">{k}</p>
                  <p className="mt-1 font-medium">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <h2 className="font-display text-lg font-bold mb-4">Activity</h2>
            <ul className="space-y-3">
              {activity.map((a) => (
                <li key={a.label} className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{a.label}</span>
                  <span className="font-display text-xl font-bold">{a.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-gradient-hero p-6 text-white">
            <Sparkles className="w-6 h-6 text-accent mb-3" />
            <p className="font-display text-lg leading-snug mb-4">
              Something still missing for Ava or Noah?
            </p>
            <Button className="bg-accent hover:bg-coral-hover text-accent-foreground rounded-full w-full" asChild>
              <Link to="/request">Request a pod</Link>
            </Button>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-card space-y-3 text-sm text-muted-foreground">
            <p className="flex items-center gap-2"><Bell className="w-4 h-4 text-primary" /> Alerts on when a pod nears launch</p>
            <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Illustrative demo profile</p>
            <p className="flex items-center gap-2"><Users className="w-4 h-4 text-primary" /> Visible to matched families only</p>
          </div>
        </aside>
      </div>
    </section>
  </>
);

export default Profile;
