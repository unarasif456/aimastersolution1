/** Contact page with validated form (front-end only for now) */
import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { seo, useSite } from "@/lib/site";
import { PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/contact")({
  head: () => seo("Contact — AI Master Solution", "Get in touch with AI Master Solution for questions, partnerships or AI help."),
  component: ContactPage,
});

const field = "h-11 w-full rounded-lg border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring";

function ContactPage() {
  const { t } = useSite();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !/^\S+@\S+\.\S+$/.test(form.email) || form.message.trim().length < 10)
    { toast.error(t("Please fill all fields (message min 10 characters).", "Sab khane bharein (message kam az kam 10 huroof).")); return; }
    toast.success(t("Thanks! We'll reply soon.", "Shukriya! Hum jaldi jawab denge."));
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <PageHero title={t("Contact Us", "Hum Se Rabta Karein")} sub={t("Questions, feedback or partnership? Send us a message.", "Sawal, raaye ya partnership? Hamein message bhejein.")} />
      <section className="mx-auto max-w-xl px-4 py-10">
        <form onSubmit={submit} className="space-y-4 rounded-2xl border bg-card p-6">
          <input className={field} placeholder={t("Your name", "Aap ka naam")} maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input className={field} type="email" placeholder="Email" maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <textarea className={`${field} h-36 py-2`} placeholder={t("Your message", "Aap ka paigham")} maxLength={1000} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
          <button className="h-11 w-full rounded-lg bg-brand font-semibold text-primary-foreground">{t("Send message", "Paigham bhejein")}</button>
        </form>
      </section>
    </>
  );
}
