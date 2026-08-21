import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/layout/PageHero";
import HowItWorks from "@/components/home/HowItWorks";
import TrustBadges from "@/components/home/TrustBadges";
import CTASection from "@/components/home/CTASection";

const faqs = [
  {
    q: "What happens if the pod never reaches minimum enrollment?",
    a: "Nothing is charged. The authorization is released, the request stays open, and you can adjust the schedule, age range or travel radius.",
  },
  {
    q: "How does matching work?",
    a: "AI-assisted, explainable matching turns your description into subject, age, schedule and preference fields, then surfaces compatible requests and approved instructors with human-readable reasons. Families and instructors decide whether to proceed.",
  },
  {
    q: "When is payment completed?",
    a: "Tuition is a term commitment. It is authorized when you enroll and completed only after the pod reaches minimum enrollment and the instructor confirms the course plan.",
  },
  {
    q: "Where do pods meet?",
    a: "Location is determined privately by the enrolled families and the instructor after formation. PodFinder does not select or approve meeting places.",
  },
  {
    q: "How long is a session?",
    a: "Recurring sessions run no longer than 90 minutes. Longer formats are reserved for one-time workshops, which are a roadmap feature.",
  },
  {
    q: "Where does PodFinder operate?",
    a: "Pods work when travel time is short, so search is distance-based across Connecticut · for example, Stamford, CT within 10 miles.",
  },
  {
    q: "What is on the roadmap?",
    a: "Tutoring search and booking, one-time workshops, private post-formation group discussion, instructor verification integrations, marketplace payments and payouts, and curriculum recommendations.",
  },
];

const HowItWorksPage = () => (
  <>
    <PageHero
      eyebrow="How it works"
      titleLight="One request becomes"
      titleBold="a pod that can launch."
      description="PodFinder brings together the families and the instructor a class needs. Here is the full path from an unmet need to a term that actually runs."
    />
    <TrustBadges />
    <HowItWorks />

    <section className="py-16 md:py-24 bg-muted/40">
      <div className="container max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl mb-10">
          <span className="font-extrabold text-accent">FAQ</span>
        </h2>
        <div className="space-y-4">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <h3 className="font-display text-lg font-bold mb-2">{f.q}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Button
            className="bg-accent hover:bg-coral-hover text-accent-foreground rounded-full"
            asChild
          >
            <Link to="/request">Request a pod</Link>
          </Button>
        </div>
      </div>
    </section>

    <CTASection />
  </>
);

export default HowItWorksPage;
