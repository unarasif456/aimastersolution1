/** Tutorials — step-by-step guides */
import { createFileRoute, Link } from "@tanstack/react-router";
import { seo, useSite } from "@/lib/site";
import { tutorials } from "@/lib/data";
import { PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/learn")({
  head: () => seo("Learn AI — Step-by-step Tutorials | AI Master Solution", "Beginner-friendly AI tutorials and prompt formulas in English and Roman Urdu."),
  component: LearnPage,
});

function LearnPage() {
  const { t, lang } = useSite();
  return (
    <>
      <PageHero title={t("Learn AI", "AI Seekhein")} sub={t("Simple step-by-step guides. Start with lesson 1.", "Asaan qadam ba qadam guides. Pehle sabaq se shuru karein.")} />
      <section className="mx-auto max-w-4xl space-y-6 px-4 py-10">
        {tutorials.map((tut, i) => (
          <article key={tut.title} className="rounded-2xl border bg-card p-6">
            <div className="flex items-center gap-3 text-xs">
              <span className="rounded-full bg-brand px-2.5 py-0.5 font-semibold text-primary-foreground">{t("Lesson", "Sabaq")} {i + 1}</span>
              <span className="text-muted-foreground">{tut.level}</span>
            </div>
            <h2 className="mt-3 text-2xl font-bold">{lang === "en" ? tut.title : tut.titleUr}</h2>
            <ol className="mt-4 space-y-3">
              {tut.steps.map((s, j) => (
                <li key={j} className="flex gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent text-sm font-semibold text-accent-foreground">{j + 1}</span>
                  <span className="pt-0.5 text-muted-foreground">{lang === "en" ? s.en : s.ur}</span>
                </li>
              ))}
            </ol>
          </article>
        ))}
        <p className="text-center text-sm text-muted-foreground">
          {t("Ready to practice? ", "Practice ke liye tayyar? ")}
          <Link to="/prompts" className="font-medium text-primary">{t("Open the Prompt Library →", "Prompt Library kholein →")}</Link>
        </p>
      </section>
    </>
  );
}
