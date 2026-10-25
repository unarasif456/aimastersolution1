/** Header (nav, language + theme switch) and Footer (newsletter) shared by all pages */
import { Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Menu, Moon, Sparkles, Sun, X } from "lucide-react";
import { toast } from "sonner";
import { useSite } from "@/lib/site";

const nav = [
  { to: "/tools", en: "AI Tools", ur: "AI Tools" },
  { to: "/learn", en: "Learn AI", ur: "AI Seekhein" },
  { to: "/prompts", en: "Prompts", ur: "Prompts" },
  { to: "/blog", en: "Blog", ur: "Blog" },
  { to: "/services", en: "Services", ur: "Services" },
  { to: "/about", en: "About", ur: "Hamare Baare" },
  { to: "/contact", en: "Contact", ur: "Rabta" },
] as const;

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-primary-foreground shadow-glow">
        <Sparkles className="h-4 w-4" />
      </span>
      <span>AI Master <span className="text-gradient">Solution</span></span>
    </Link>
  );
}

export function SiteHeader() {
  const { t, lang, setLang, theme, toggleTheme } = useSite();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="rounded-md px-3 py-2 text-sm text-muted-foreground transition hover:text-foreground" activeProps={{ className: "text-foreground font-medium" }}>
              {t(n.en, n.ur)}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <button onClick={() => setLang(lang === "en" ? "ur" : "en")} className="rounded-md border px-2.5 py-1.5 text-xs font-semibold" aria-label="Switch language">
            {lang === "en" ? "Roman Urdu" : "English"}
          </button>
          <button onClick={toggleTheme} className="rounded-md p-2 hover:bg-muted" aria-label="Toggle theme">
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button onClick={() => setOpen(!open)} className="rounded-md p-2 hover:bg-muted lg:hidden" aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t px-4 py-3 lg:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block rounded-md px-3 py-2.5 text-sm hover:bg-muted">
              {t(n.en, n.ur)}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Newsletter() {
  const { t } = useSite();
  const [email, setEmail] = useState("");
  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) return toast.error(t("Please enter a valid email", "Sahi email likhein"));
    toast.success(t("Subscribed! Check your inbox.", "Shukriya! Aap subscribe ho gaye."));
    setEmail("");
  };
  return (
    <form onSubmit={submit} className="flex w-full max-w-md gap-2">
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="you@email.com" className="h-11 flex-1 rounded-lg border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring" />
      <button className="h-11 rounded-lg bg-brand px-4 text-sm font-semibold text-primary-foreground">{t("Subscribe", "Subscribe")}</button>
    </form>
  );
}

export function SiteFooter() {
  const { t } = useSite();
  return (
    <footer className="mt-24 border-t">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2">
        <div className="space-y-3">
          <Logo />
          <p className="max-w-sm text-sm text-muted-foreground">
            {t("Learn to use AI the right way — for work, study and business.", "AI ka sahi istemal seekhein — kaam, parhai aur business ke liye.")}
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="font-semibold">{t("Weekly AI tips in your inbox", "Har hafte AI tips apne inbox mein")}</h3>
          <Newsletter />
        </div>
      </div>
      <div className="border-t py-5 text-center text-xs text-muted-foreground">© 2026 AI Master Solution</div>
    </footer>
  );
}

/** Standard page heading block */
export function PageHero({ title, sub }: { title: string; sub: string }) {
  return (
    <section className="relative overflow-hidden border-b bg-glow">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <h1 className="text-4xl font-bold md:text-5xl">{title}</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">{sub}</p>
      </div>
    </section>
  );
}

export function SearchBox({ value, onChange, placeholder }: { value: string; onChange: (v: string) => void; placeholder: string }) {
  return (
    <input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="h-12 w-full rounded-xl border bg-card px-4 text-sm outline-none focus:ring-2 focus:ring-ring" />
  );
}
