/** Free AI consultation / services */
import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { seo, useSite } from "@/lib/site";
import { PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/services")({
  head: () => seo("AI Consultation & Services — AI Master Solution", "Free AI consultation, team training and custom AI setup for businesses and individuals."),
  component: ServicesPage,
});

function ServicesPage() {
  const { t } = useSite();
  const plans = [
    { name: t("Free Consultation", "Free Mashwara"), price: t("Free", "Free"), items: [t("30-min call", "30 minute call"), t("Tool suggestions", "Tools ki salah"), t("Starter prompt pack", "Starter prompt pack")] },
    { name: t("Team Training", "Team Training"), price: t("Custom", "Custom"), items: [t("Live workshop", "Live workshop"), t("Custom prompt library", "Apni prompt library"), t("30-day support", "30 din support")], featured: true },
    { name: t("AI Setup", "AI Setup"), price: t("Custom", "Custom"), items: [t("Workflow automation", "Kaam ki automation"), t("Chatbot for website", "Website chatbot"), t("Ongoing help", "Musalsal madad")] },
  ];
  return (
    <>
      <PageHero title={t("AI Services", "AI Services")} sub={t("Personal help to bring AI into your work or business.", "Apne kaam ya business mein AI laane ke liye zaati madad.")} />
      <section className="mx-auto grid max-w-6xl gap-5 px-4 py-10 md:grid-cols-3">
        {plans.map((p) => (
          <div key={p.name} className={`flex flex-col rounded-2xl border bg-card p-6 ${p.featured ? "border-primary shadow-glow" : ""}`}>
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p className="mt-2 text-3xl font-bold text-gradient">{p.price}</p>
            <ul className="mt-5 flex-1 space-y-2 text-sm">
              {p.items.map((i) => <li key={i} className="flex gap-2"><Check className="h-4 w-4 text-primary" />{i}</li>)}
            </ul>
            <Link to="/contact" className="mt-6 rounded-lg bg-brand py-2.5 text-center font-semibold text-primary-foreground">{t("Book now", "Abhi book karein")}</Link>
          </div>
        ))}
      </section>
    </>
  );
}
