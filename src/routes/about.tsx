/** About Us */
import { createFileRoute } from "@tanstack/react-router";
import { seo, useSite } from "@/lib/site";
import { PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/about")({
  head: () => seo("About Us — AI Master Solution", "Our mission: make AI simple and useful for everyone, in English and Roman Urdu."),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useSite();
  const values = [
    [t("Simple language", "Asaan zubaan"), t("No jargon. Every guide is written for real people.", "Koi mushkil alfaaz nahi. Har guide aam logon ke liye.")],
    [t("Practical first", "Amli faida pehle"), t("Learn what helps you today at work or study.", "Woh seekhein jo aaj kaam ya parhai mein madad kare.")],
    [t("Honest reviews", "Imandaar reviews"), t("We test tools before we recommend them.", "Hum tools test kar ke hi recommend karte hain.")],
  ];
  return (
    <>
      <PageHero title={t("About Us", "Hamare Baare Mein")} sub={t("AI Master Solution helps beginners and professionals use AI with confidence.", "AI Master Solution beginners aur professionals ko AI aitmaad se istemal karna sikhata hai.")} />
      <section className="mx-auto max-w-4xl px-4 py-10">
        <p className="text-lg text-muted-foreground">
          {t("We believe AI should be for everyone — not only tech experts. Our free guides, tool directory and prompt library help you save time and grow your skills.", "Hamara yaqeen hai ke AI sab ke liye hai — sirf tech experts ke liye nahi. Hamari free guides, tool directory aur prompt library aap ka waqt bachati hain aur skills barhati hain.")}
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {values.map(([h, d]) => (
            <div key={h} className="rounded-2xl border bg-card p-6">
              <h3 className="font-semibold text-gradient">{h}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
