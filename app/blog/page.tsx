"use client";

import { useMemo, useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { Calendar, ArrowRight, Mail, Sparkles, Check } from 'lucide-react';
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

interface BlogPost {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
}

export default function BlogPage() {
  const t = useTranslations();

  const posts = (Array.isArray(t.raw("blogPage.posts")) ? t.raw("blogPage.posts") : []) as BlogPost[];
  const featuredRaw = t.raw("blogPage.featured");
  const featured = featuredRaw && typeof featuredRaw === "object" ? (featuredRaw as BlogPost) : undefined;

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(posts.map((p) => p.category)))],
    [posts],
  );
  const [active, setActive] = useState<string>("All");
  const filtered = useMemo(
    () => (active === "All" ? posts : posts.filter((p) => p.category === active)),
    [active, posts],
  );

  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <main className="bg-white">
      {/* Header */}
      <Reveal>
        <section className="border-b border-slate-200 bg-slate-50 px-6 py-20 md:py-28">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
              {t("blogPage.eyebrow")}
            </p>
            <h1 className="mt-4 text-balance text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              {t("blogPage.heading")}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-slate-600 md:text-lg">
              {t("blogPage.subheading")}
            </p>
          </div>
        </section>
      </Reveal>

      {/* Featured post */}
      {featured && (
        <Reveal delay={0.05}>
          <section className="px-6 py-16 md:py-20">
            <div className="mx-auto max-w-6xl">
              <div className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                <Sparkles className="h-4 w-4 text-amber-500" aria-hidden="true" />
                <span>{t("blogPage.featuredLabel")}</span>
              </div>
              <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04),0_20px_40px_-20px_rgba(15,23,42,0.18)] md:grid-cols-2">
                <div className="relative h-64 overflow-hidden bg-slate-100 md:h-full">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-amber-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-900">
                    {featured.category}
                  </span>
                </div>
                <div className="flex flex-col justify-center p-8 md:p-10">
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                    <Calendar className="h-4 w-4" aria-hidden="true" />
                    <span>{featured.date}</span>
                  </div>
                  <h2 className="mt-4 text-balance text-2xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-3xl">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-pretty leading-relaxed text-slate-600">
                    {featured.excerpt}
                  </p>
                  <div className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-bold text-amber-600">
                    <span>{t("blogPage.readStory")}</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>
      )}

      {/* Post grid with category filters */}
      <Reveal delay={0.1}>
        <section className="border-t border-slate-200 bg-slate-50 px-6 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
                {t("blogPage.moreHeading")}
              </h2>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActive(cat)}
                    className={cn(
                      "rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors duration-300",
                      active === cat
                        ? "border-amber-500 bg-amber-500 text-slate-900"
                        : "border-slate-200 bg-white text-slate-600 hover:border-amber-300 hover:text-amber-700",
                    )}
                  >
                    {cat === "All" ? t("blogPage.filterAll") : cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((post, i) => (
                <Reveal key={post.id} delay={i * 0.06}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(15,23,42,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(0,0,0,0.06),0_20px_36px_-16px_rgba(15,23,42,0.22)]">
                    <div className="relative h-48 overflow-hidden bg-slate-100">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-700 shadow-sm">
                        {post.category}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                        <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>{post.date}</span>
                      </div>
                      <h3 className="mt-3 text-lg font-bold leading-snug tracking-tight text-slate-900">
                        {post.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-bold text-amber-600">
                        <span>{t("blogPage.readMore")}</span>
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="mt-12 text-center text-slate-500">{t("blogPage.emptyState")}</p>
            )}
          </div>
        </section>
      </Reveal>

      {/* Newsletter signup */}
      <Reveal delay={0.05}>
        <section className="bg-slate-900 px-6 py-20 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/15">
              <Mail className="h-5 w-5 text-amber-400" aria-hidden="true" />
            </div>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
              {t("blogPage.newsletterEyebrow")}
            </p>
            <h2 className="mt-3 text-balance text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl">
              {t("blogPage.newsletterHeading")}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-white/70">
              {t("blogPage.newsletterSubheading")}
            </p>

            {subscribed ? (
              <div className="mx-auto mt-8 flex w-fit items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-3 text-sm font-semibold text-amber-300">
                <Check className="h-4 w-4" aria-hidden="true" />
                <span>{t("blogPage.newsletterSuccess")}</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  {t("blogPage.newsletterPlaceholder")}
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("blogPage.newsletterPlaceholder")}
                  className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/40 outline-none ring-amber-400/50 transition-all duration-300 focus-visible:ring-2"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-slate-900 transition-all duration-300 hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                >
                  {t("blogPage.newsletterButton")}
                </button>
              </form>
            )}
            <p className="mt-4 text-xs text-white/40">{t("blogPage.newsletterDisclaimer")}</p>
          </div>
        </section>
      </Reveal>
    </main>
  );
}