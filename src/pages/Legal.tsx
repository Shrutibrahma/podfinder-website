import { useLocation } from "react-router-dom";
import PageHero from "@/components/layout/PageHero";

const content = {
  privacy: {
    eyebrow: "Privacy policy · Prototype",
    titleLight: "We collect only what",
    titleBold: "formation requires.",
    description:
      "This is a hackathon prototype. No real accounts, payments, or messages are processed, and nothing you type here is stored on a server.",
    sections: [
      { h: "What we would collect", p: "In production: a parent name, neighbourhood, child age bands, subject interests, and availability. That is the minimum needed to match compatible families." },
      { h: "What stays hidden", p: "Contact details are never shown on the formation board. They are only shared between families once a group is confirmed and everyone has opted in." },
      { h: "Payments", p: "Card details would be held by a regulated payment processor, never by PodFinder, and only authorised when a group launches." },
      { h: "Children's data", p: "We store age bands and subject interests, not names or school records. Accounts belong to adults." },
      { h: "In this prototype", p: "All listings and profiles shown are illustrative. Form entries live in your browser for the length of the session only." },
    ],
  },
  terms: {
    eyebrow: "Terms of service · Prototype",
    titleLight: "A demonstration,",
    titleBold: "not a live marketplace.",
    description:
      "These terms describe how the PodFinder prototype may be used and what it explicitly does not do.",
    sections: [
      { h: "Nature of the service", p: "PodFinder coordinates small-group learning. It is not the employer of instructors and does not deliver instruction itself." },
      { h: "No live transactions", p: "This prototype does not process payments, create accounts, send messages, or reserve real seats. Any confirmation shown is simulated." },
      { h: "Verification", p: "In production, instructors and hosts are identity-verified. Verification reduces risk but does not replace a parent's own judgement." },
      { h: "Illustrative content", p: "Pod titles, seat counts, prices, and profiles on this site are examples used to demonstrate the formation flow." },
      { h: "Changes", p: "As a prototype, features and copy may change without notice while the Connecticut beta is being shaped." },
    ],
  },
};

const Legal = () => {
  const { pathname } = useLocation();
  const data = pathname.includes("terms") ? content.terms : content.privacy;

  return (
    <>
      <PageHero
        eyebrow={data.eyebrow}
        titleLight={data.titleLight}
        titleBold={data.titleBold}
        description={data.description}
      />
      <section className="py-14 md:py-20">
        <div className="container max-w-3xl space-y-8">
          {data.sections.map((s) => (
            <div key={s.h}>
              <h2 className="font-display text-xl font-bold mb-2">{s.h}</h2>
              <p className="text-muted-foreground leading-relaxed">{s.p}</p>
            </div>
          ))}
          <p className="text-xs text-muted-foreground border-t border-border pt-6">
            Last updated for the Connecticut beta prototype. All data shown is illustrative demo data. © 2026 PodFinder.
          </p>
        </div>
      </section>
    </>
  );
};

export default Legal;
