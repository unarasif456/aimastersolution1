/** Blog — AI news and tips */
import { createFileRoute } from "@tanstack/react-router";
import { seo, useSite } from "@/lib/site";
import { posts } from "@/lib/data";
import { PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/blog")({
  head: () => seo("Blog — AI News & Tips | AI Master Solution", "Latest AI news, tool reviews and practical tips for students, freelancers and businesses."),
  component: BlogPage,
});

function BlogPage() {
  const { t, lang } = useSite();
  return (
    <>
      <PageHero title="Blog" sub={t("AI news, tips and real-world ideas.", "AI khabrein, tips aur kaam ke ideas.")} />
      <section className="mx-auto grid max-w-6xl gap-5 px-4 py-10 md:grid-cols-2">
        {posts.map((p) => (
          <article key={p.slug} className="group rounded-2xl border bg-card p-6 transition hover:border-primary">
            <div className="flex gap-3 text-xs text-muted-foreground">
              <span className="text-primary">{p.tag}</span><span>{p.date}</span>
            </div>
            <h2 className="mt-2 text-xl font-bold group-hover:text-primary">{lang === "en" ? p.title : p.titleUr}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{lang === "en" ? p.excerpt : p.excerptUr}</p>
          </article>
        ))}
      </section>
    </>
  );
}
