import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, Sparkles, ArrowRight, ArrowLeft, Lock, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import PageHero from "@/components/layout/PageHero";

const steps = ["The need", "Who it's for", "Schedule & term", "Review"];

const formats = ["Recurring pod · core academic", "Recurring pod · elective"];
const cadences = ["Weekday mornings", "Weekday afternoons", "Weekday evenings", "Saturday mornings", "Flexible"];
const termLengths = ["8-week term", "10-week term", "12-week term", "Flexible"];
const availability = ["1 session / week", "2 sessions / week", "Either"];
const radii = ["Within 5 miles", "Within 10 miles", "Within 15 miles", "Within 25 miles"];

const Request = () => {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    subject: "",
    detail: "",
    format: formats[0],
    ages: "",
    groupSize: "6",
    preferences: "",
    radius: radii[1],
    cadence: cadences[0],
    availability: availability[0],
    term: termLengths[2],
    budget: "$300–$400 per term",
  });

  const set = (key: keyof typeof form, value: string) => setForm((f) => ({ ...f, [key]: value }));

  const submit = () => {
    setSubmitted(true);
    toast.success("Request posted as a non-identifying demand profile");
  };

  if (submitted) {
    return (
      <>
        <PageHero
          eyebrow="Request posted"
          titleLight="Your request is live"
          titleBold="on the formation board."
          description="Only a non-identifying summary is shared with potentially compatible families and approved instructors. Payment is completed only after the pod reaches minimum enrollment and the instructor confirms the course plan."
        />
        <section className="py-16">
          <div className="container max-w-2xl">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
              <div className="w-12 h-12 rounded-full bg-success-light flex items-center justify-center mb-5">
                <Check className="w-6 h-6 text-success" />
              </div>
              <h2 className="font-display text-2xl font-bold mb-4">{form.subject || "Your pod"}</h2>
              <dl className="grid sm:grid-cols-2 gap-4 text-sm">
                {[
                  ["Format", form.format],
                  ["Ages", form.ages || "Not specified"],
                  ["Target group size", form.groupSize],
                  ["Travel radius", form.radius],
                  ["Schedule", `${form.cadence} · ${form.availability}`],
                  ["Term length", form.term],
                  ["Comfortable term tuition", form.budget],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-xl bg-muted/60 p-4">
                    <dt className="text-xs uppercase tracking-[0.12em] text-muted-foreground">{k}</dt>
                    <dd className="mt-1 font-medium">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 flex items-start gap-2 rounded-xl bg-brand-light/60 p-4 text-sm text-foreground">
                <Lock className="w-4 h-4 shrink-0 mt-0.5 text-brand-deep" />
                Enrollment requested. Payment is completed only after the pod reaches minimum
                enrollment and the instructor confirms the course plan.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button className="rounded-full" asChild>
                  <Link to="/search">See what else is forming</Link>
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full"
                  onClick={() => {
                    setSubmitted(false);
                    setStep(0);
                  }}
                >
                  Post another request
                </Button>
              </div>
              <p className="mt-6 flex items-start gap-2 text-xs text-muted-foreground">
                <Info className="w-3.5 h-3.5 shrink-0 mt-0.5" /> Illustrative demo data · no payment,
                account or messaging is processed in this prototype.
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Request a pod"
        titleLight="Tell us what your child"
        titleBold="wants to learn."
        description="We'll help find compatible families and a qualified instructor. Only a non-identifying summary is shared · your identifying details never appear on public demand cards."
      />

      <section className="py-14 md:py-20">
        <div className="container max-w-2xl">
          <ol className="flex items-center gap-2 mb-10">
            {steps.map((label, i) => (
              <li key={label} className="flex-1">
                <div
                  className={`h-1.5 rounded-full transition-colors ${i <= step ? "bg-accent" : "bg-muted"}`}
                />
                <span
                  className={`mt-2 block text-xs font-medium ${
                    i <= step ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {label}
                </span>
              </li>
            ))}
          </ol>

          <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-card space-y-6">
            {step === 0 && (
              <>
                <Field label="What does your child want to learn?">
                  <input
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 outline-none focus:border-primary focus-visible:ring-2 focus-visible:ring-accent"
                    placeholder="e.g. Hands-on middle-school science"
                    value={form.subject}
                    onChange={(e) => set("subject", e.target.value)}
                  />
                </Field>
                <Field label="Anything an instructor should know?">
                  <textarea
                    rows={4}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 outline-none focus:border-primary focus-visible:ring-2 focus-visible:ring-accent"
                    placeholder="Goals, level, what you've already tried…"
                    value={form.detail}
                    onChange={(e) => set("detail", e.target.value)}
                  />
                </Field>
                <Field label="Format">
                  <Chips options={formats} value={form.format} onChange={(v) => set("format", v)} />
                </Field>
                <p className="text-sm text-muted-foreground">
                  Tutoring and one-time workshops are roadmap formats and cannot be requested yet.
                </p>
              </>
            )}

            {step === 1 && (
              <>
                <Field label="Age range">
                  <input
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 outline-none focus:border-primary focus-visible:ring-2 focus-visible:ring-accent"
                    placeholder="e.g. Ages 11–14"
                    value={form.ages}
                    onChange={(e) => set("ages", e.target.value)}
                  />
                </Field>
                <Field label="Ideal group size">
                  <Chips
                    options={["4", "5", "6", "8"]}
                    value={form.groupSize}
                    onChange={(v) => set("groupSize", v)}
                  />
                </Field>
                <Field label="Learning preferences and pod fit">
                  <textarea
                    rows={3}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 outline-none focus:border-primary focus-visible:ring-2 focus-visible:ring-accent"
                    placeholder="e.g. lots of hands-on work, calm pace, mixed ages fine"
                    value={form.preferences}
                    onChange={(e) => set("preferences", e.target.value)}
                  />
                </Field>
                <Field label="Travel radius">
                  <Chips options={radii} value={form.radius} onChange={(v) => set("radius", v)} />
                </Field>
              </>
            )}

            {step === 2 && (
              <>
                <Field label="Schedule availability">
                  <Chips options={cadences} value={form.cadence} onChange={(v) => set("cadence", v)} />
                </Field>
                <Field label="Sessions per week">
                  <Chips
                    options={availability}
                    value={form.availability}
                    onChange={(v) => set("availability", v)}
                  />
                </Field>
                <Field label="Desired term length">
                  <Chips options={termLengths} value={form.term} onChange={(v) => set("term", v)} />
                </Field>
                <Field label="Comfortable term tuition per child">
                  <Chips
                    options={["Under $300 per term", "$300–$400 per term", "$400–$600 per term", "$600+ per term"]}
                    value={form.budget}
                    onChange={(v) => set("budget", v)}
                  />
                </Field>
                <p className="text-sm text-muted-foreground">
                  Recurring sessions run no longer than 90 minutes. Nothing is charged now · payment
                  is completed only after minimum enrollment and instructor confirmation.
                </p>
              </>
            )}

            {step === 3 && (
              <div className="space-y-3 text-sm">
                <h2 className="font-display text-xl font-bold">Review your request</h2>
                {[
                  ["Subject", form.subject || "-"],
                  ["Notes", form.detail || "-"],
                  ["Format", form.format],
                  ["Ages", form.ages || "-"],
                  ["Group size", form.groupSize],
                  ["Preferences", form.preferences || "-"],
                  ["Travel radius", form.radius],
                  ["Schedule", `${form.cadence} · ${form.availability}`],
                  ["Term length", form.term],
                  ["Term tuition", form.budget],
                ].map(([k, v]) => (
                  <div key={k} className="flex gap-4 border-b border-border pb-2 last:border-0">
                    <span className="w-28 shrink-0 text-muted-foreground">{k}</span>
                    <span className="font-medium">{v}</span>
                  </div>
                ))}
                <p className="flex items-start gap-2 rounded-xl bg-brand-light/60 p-4 text-sm text-foreground">
                  <Lock className="w-4 h-4 shrink-0 mt-0.5 text-brand-deep" />
                  Only a non-identifying summary is shared with potentially compatible families and
                  approved instructors.
                </p>
              </div>
            )}

            <div className="flex items-center justify-between pt-2">
              <Button
                variant="outline"
                className="rounded-full"
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                disabled={step === 0}
              >
                <ArrowLeft className="w-4 h-4 mr-2" /> Back
              </Button>
              {step < steps.length - 1 ? (
                <Button className="rounded-full" onClick={() => setStep((s) => s + 1)}>
                  Continue <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  className="bg-accent hover:bg-coral-hover text-accent-foreground rounded-full"
                  onClick={submit}
                >
                  <Sparkles className="w-4 h-4 mr-2" /> Post request
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div>
    <label className="block text-sm font-medium mb-2">{label}</label>
    {children}
  </div>
);

const Chips = ({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) => (
  <div className="flex flex-wrap gap-2">
    {options.map((o) => (
      <button
        key={o}
        type="button"
        aria-pressed={value === o}
        onClick={() => onChange(o)}
        className={`rounded-full border px-4 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
          value === o
            ? "border-primary bg-primary text-primary-foreground"
            : "border-border hover:border-primary/40"
        }`}
      >
        {o}
      </button>
    ))}
  </div>
);

export default Request;
