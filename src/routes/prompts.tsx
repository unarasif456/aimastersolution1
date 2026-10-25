/** Prompt Library — searchable, with one-click copy */
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";
import { seo, useSite } from "@/lib/site";
import { prompts } from "@/lib/data";
import { PageHero, SearchBox } from "@/components/site/Layout";

export const Route = createFileRoute("/prompts")({
  head: () => seo("Prompt Library — Ready-made AI Prompts | AI Master Solution", "Copy-ready AI prompts for writing, business, study, coding and design."),
  component: PromptsPage,
});

function PromptsPage() {
  const { t } = useSite();
  const [q, setQ] = useState("");
  const [copied, setCopied] = useState<string | null>(null);
  const list = prompts.filter((p) => (p.title + p.text + p.category).toLowerCase().includes(q.toLowerCase()));

  const copy = async (title: string, text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(title);
    toast.success(t("Prompt copied!", "Prompt copy ho gaya!"));
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <>
      <PageHero title={t("Prompt Library", "Prompt Library")} sub={t("Replace the [BRACKETS] with your details and paste into any AI tool.", "[BRACKETS] mein apni detail likhein aur kisi bhi AI tool mein paste karein.")} />
      <section className="mx-auto max-w-6xl px-4 py-10">
        <SearchBox value={q} onChange={setQ} placeholder={t("Search prompts…", "Prompts dhoondein…")} />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {list.map((p) => (
            <div key={p.title} className="flex flex-col rounded-2xl border bg-card p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-xs text-primary">{p.category}</span>
                  <h3 className="font-semibold">{p.title}</h3>
                </div>
                <button onClick={() => copy(p.title, p.text)} className="inline-flex shrink-0 items-center gap-1 rounded-lg bg-brand px-3 py-1.5 text-xs font-semibold text-primary-foreground">
                  {copied === p.title ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  {copied === p.title ? t("Copied", "Copied") : t("Copy", "Copy")}
                </button>
              </div>
              <p className="mt-3 whitespace-pre-line rounded-lg bg-muted p-3 font-mono text-xs leading-relaxed text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
