/** Home page: hero, features, popular tools, newsletter CTA */
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Briefcase, Code2, GraduationCap, PenLine, Palette } from "lucide-react";
import { seo, useSite } from "@/lib/site";
import { tools } from "@/lib/data";
import { Newsletter } from "@/components/site/Layout";

export const Route = createFileRoute("/")({
  head: () => seo("AI Master Solution — Learn & Use AI Tools the Right Way", "Guides, tool directory and ready-made prompts to use AI for writing, business, study, coding and design. English & Roman Urdu."),
  component: Home,
});

function Home() {
  const { t } = useSite();
  const features = [
    { icon: PenLine, en: "Writing", ur: "Likhai", d: t("Emails, blogs, captions in seconds.", "Emails, blogs, captions seconds mein.") },
    { icon: Briefcase, en: "Business", ur: "Business", d: t("Marketing, plans and automation.", "Marketing, plans aur automation.") },
    { icon: GraduationCap, en: "Study", ur: "Parhai", d: t("Notes, summaries and exam prep.", "Notes, khulasa aur exam ki tayyari.") },
    { icon: Code2, en: "Coding", ur: "Coding", d: t("Write and debug code faster.", "Code tez likhein aur theek karein.") },
    { icon: Palette, en: "Design", ur: "Design", d: t("Logos, posts and images with AI.", "AI se logo, posts aur tasveerein.") },
    { icon: BookOpen, en: "Tutorials", ur: "Sabaq", d: t("Step-by-step, beginner friendly.", "Qadam ba qadam, asaan zubaan.") },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-dots opacity-60" />
        <div className="absolute inset-0 bg-glow" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 text-center md:py-32">
          <span className="inline-block rounded-full border bg-card px-3 py-1 text-xs text-muted-foreground">
            {t("English + Roman Urdu • 100% free guides", "English + Roman Urdu • Bilkul free guides")}
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            {t("Master AI. ", "AI seekhein. ")}
            <span className="text-gradient">{t("Work smarter.", "Kaam asaan banayein.")}</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground md:text-lg">
            {t("The simplest way for beginners and pros to use AI tools for writing, business, study, coding and design.", "Beginners aur professionals ke liye AI tools ko likhai, business, parhai, coding aur design mein istemal karne ka sab se asaan tareeqa.")}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/learn" className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3 font-semibold text-primary-foreground shadow-glow transition hover:opacity-90">
              {t("Get Started", "Shuru Karein")} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/tools" className="rounded-xl border bg-card px-6 py-3 font-semibold transition hover:bg-muted">
              {t("Browse AI Tools", "AI Tools Dekhein")}
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-3xl font-bold">{t("AI for every daily task", "Har roz ke kaam ke liye AI")}</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.en} className="rounded-2xl border bg-card p-6 transition hover:-translate-y-1 hover:shadow-glow">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-accent-foreground"><f.icon className="h-5 w-5" /></span>
              <h3 className="mt-4 text-lg font-semibold">{t(f.en, f.ur)}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* POPULAR TOOLS */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-bold">{t("Popular tools", "Mashhoor tools")}</h2>
          <Link to="/tools" className="text-sm font-medium text-primary">{t("View all →", "Sab dekhein →")}</Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tools.slice(0, 8).filter((_, i) => i % 2 === 0 || i < 4).slice(0, 4).map((tool) => (
            <a key={tool.name} href={tool.url} target="_blank" rel="noopener noreferrer" className="rounded-2xl border bg-card p-5 transition hover:border-primary">
              <span className="text-xs text-muted-foreground">{tool.category}</span>
              <h3 className="mt-1 font-semibold">{tool.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{t(tool.desc, tool.descUr)}</p>
            </a>
          ))}
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-col items-center gap-5 rounded-3xl bg-brand p-10 text-center text-primary-foreground">
          <h2 className="text-3xl font-bold">{t("Get free AI tips every week", "Har hafte free AI tips paayein")}</h2>
          <p className="max-w-md opacity-90">{t("New tools, prompts and tutorials — no spam.", "Naye tools, prompts aur tutorials — koi spam nahi.")}</p>
          <div className="w-full max-w-md rounded-xl bg-background p-2 text-foreground"><Newsletter /></div>
        </div>
      </section>
    </>
  );
}
