import { cn } from "@/lib/utils";

/**
 * SocialAuthButtons · brand-compliant SSO button set, PRESENTATIONAL in this template.
 *
 * This site has NO auth backend: no Supabase, no `@lovable.dev/cloud-auth-js`, no
 * `src/integrations/`. The sign-in page is a mock · its email form is
 * `onSubmit={(e) => e.preventDefault()}`. So these buttons are a design element, and
 * they are deliberately INERT: clicking does nothing, exactly as before.
 *
 * Why the file exists at all: the markup is the official one, so the page stops
 * showing an off-brand Google button. Branding is fixed here rather than re-improvised
 * on the page:
 *   • official Google 4-colour "G" and Apple mark, approved wording
 *   • neutral surfaces + approved border · never the site's theme colour
 *
 * WHEN REAL AUTH IS ADDED: do not wire a handler onto this file. Replace it wholesale
 * with the canonical component from lovable-base-starter (which routes OAuth through
 * the Lovable managed broker and redirects to `${origin}/auth/callback`), and add the
 * `/auth/callback` route at the same time. A broker without a backend only produces an
 * error message on a page that cannot sign anyone in.
 */

export type SocialProvider = "google" | "apple";

export interface SocialAuthButtonsProps {
  /** "signin" → "Continue with", "signup" → "Sign up with". Default "signin". */
  mode?: "signin" | "signup";
  /** Only include providers the project has configured. Default both. */
  providers?: SocialProvider[];
  className?: string;
}

const GoogleMark = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

const AppleMark = () => (
  <svg width="18" height="18" viewBox="0 0 384 512" aria-hidden="true" focusable="false" className="fill-white dark:fill-black">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>
);

const label = (mode: "signin" | "signup", provider: string) =>
  `${mode === "signup" ? "Sign up with" : "Continue with"} ${provider}`;

export function SocialAuthButtons({
  mode = "signin",
  providers = ["google", "apple"],
  className,
}: SocialAuthButtonsProps) {
  if (providers.length === 0) return null;

  // No onClick: this template has no backend, so the buttons are inert by design.
  // See the file header before adding one.
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {providers.includes("google") && (
        <button
          type="button"
          className="flex h-11 w-full items-center justify-center gap-3 rounded-lg border px-4 text-[15px] font-medium border-[#747775] bg-white text-[#1f1f1f] hover:bg-[#f7f8f8] dark:border-[#8e918f] dark:bg-[#131314] dark:text-[#e3e3e3] dark:hover:bg-[#1e1f20]"
        >
          <GoogleMark />
          <span>{label(mode, "Google")}</span>
        </button>
      )}
      {providers.includes("apple") && (
        <button
          type="button"
          className="flex h-11 w-full items-center justify-center gap-3 rounded-lg border px-4 text-[15px] font-medium border-black bg-black text-white hover:bg-black/90 dark:border-white dark:bg-white dark:text-black dark:hover:bg-white/90"
        >
          <AppleMark />
          <span>{label(mode, "Apple")}</span>
        </button>
      )}
    </div>
  );
}
