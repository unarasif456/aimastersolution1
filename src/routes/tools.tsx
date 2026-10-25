/** AI Tools Directory with category filter + search */
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { seo, useSite } from "@/lib/site";
import { toolCategories, tools } from "@/lib/data";
import { PageHero, SearchBox } from "@/components/site/Layout";

export const Route = createFileRoute("/tools")({
  head: () => seo("AI Tools Directory — AI Master Solution", "Best AI tools for writing, images, video, coding, business and education, with descriptions and links."),
  component: ToolsPage,
});

function ToolsPage() {
  const { t } = useSite();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("All");
  const list = tools.filter(
    (x) => (cat === "All" || x.category === cat) && (x.name + x.desc + x.descUr).toLowerCase().includes(q.toLowerCase()),
  );

  return (
    <>
      <PageHero title={t("AI Tools Directory", "AI Tools Directory")} sub={t("Hand-picked tools for every kind of work.", "Har kaam ke liye chune hue tools.")} />
      <section className="mx-auto max-w-6xl px-4 py-10">
        <SearchBox value={q} onChange={setQ} placeholder={t("Search tools…", "Tools dhoondein…")} />
        <div className="mt-4 flex flex-wrap gap-2">
          {["All", ...toolCategories].map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`rounded-full border px-4 py-1.5 text-sm transition ${cat === c ? "bg-brand text-primary-foreground border-transparent" : "hover:bg-muted"}`}>
              {c}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((tool) => (
            <div key={tool.name} className="flex flex-col rounded-2xl border bg-card p-5">
              <div className="flex items-center justify-between text-xs">
                <span className="rounded-full bg-accent px-2 py-0.5 text-accent-foreground">{tool.category}</span>
                <span className="text-muted-foreground">{tool.free ? t("Free plan", "Free plan") : t("Paid", "Paid")}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold">{tool.name}</h3>
              <p className="mt-1 flex-1 text-sm text-muted-foreground">{t(tool.desc, tool.descUr)}</p>
              <a href={tool.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                {t("Visit tool", "Tool kholein")} <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
          {list.length === 0 && <p className="text-muted-foreground">{t("No tools found.", "Koi tool nahi mila.")}</p>}
        </div>
      </section>
    </>
  );
}
