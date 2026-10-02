"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Sparkles, Heart, Check, Activity, Star, Settings, ArrowRight, Factory, Globe, Users } from 'lucide-react';
import { Reveal } from "@/components/Reveal";

const BRAND = {
  fullName: "Orient Electronics",
  since: "1957",
} as const;

// ---------------------------------------------------------------------------
// Inline icon mappings (positionally matched to the translation arrays below)
// ---------------------------------------------------------------------------
const VALUE_ICONS = [Sparkles, Heart, Check, Activity, Star];
const TEAM_ICONS = [Settings, Factory, Globe, Users];

type ValueItem = { title: string; description: string };
type StatItem = { value: string; label: string };
type PartnerItem = { name: string; description: string };
type TeamItem = { title: string; description: string };

export default function AboutPage() {
  const t = useTranslations();

  const stats = (
    Array.isArray(t.raw("aboutStory.stats")) ? t.raw("aboutStory.stats") : []
  ) as StatItem[];

  const values = (
    Array.isArray(t.raw("aboutValues.items")) ? t.raw("aboutValues.items") : []
  ) as ValueItem[];

  const partners = (
    Array.isArray(t.raw("aboutPartners.items")) ? t.raw("aboutPartners.items") : []
  ) as PartnerItem[];

  const teamHighlights = (
    Array.isArray(t.raw("aboutTeam.items")) ? t.raw("aboutTeam.items") : []
  ) as TeamItem[];

  return (
    <main className="bg-white text-slate-900">
      {/* HERO BANNER */}
      <Reveal>
        <section className="relative isolate flex min-h-[70vh] items-end overflow-hidden bg-slate-950">
          <Image
            src="https://picsum.photos/seed/e699313943fa/800/600"
            alt="A modern Pakistani living room furnished with Orient home appliances"
            fill
            priority
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20" />
          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-32 sm:px-10">
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-slate-300">
              <Link href="/" className="transition-colors hover:text-amber-400">
                {t("aboutHero.breadcrumbHome")}
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-amber-400">{t("aboutHero.breadcrumbCurrent")}</span>
            </nav>
            <span className="inline-block rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
              {t("aboutHero.eyebrow")}
            </span>
            <h1 className="mt-5 max-w-3xl text-balance text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-white sm:text-6xl">
              {t("aboutHero.title")}
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-slate-200 sm:text-lg">
              {t("aboutHero.subtitle")}
            </p>
            <div className="mt-8">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-md bg-amber-400 px-6 py-3 text-sm font-bold uppercase tracking-wide text-slate-950 shadow-[0_8px_24px_-8px_rgba(251,191,36,0.6)] transition-all duration-300 ease-out hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
              >
                {t("aboutHero.cta")}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      {/* COMPANY STORY */}
      <Reveal>
        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 md:py-28">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="relative order-2 aspect-[4/5] overflow-hidden rounded-2xl border border-black/5 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.12)] lg:order-1">
              <Image
                src="https://picsum.photos/seed/9da3782192ea/800/600"
                alt="Orient Electronics manufacturing facility production line"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500">
                {t("aboutStory.eyebrow")}
              </span>
              <h2 className="mt-3 text-balance text-3xl font-extrabold uppercase tracking-tight text-slate-950 sm:text-4xl">
                {t("aboutStory.title")}
              </h2>
              <div className="mt-6 space-y-4 text-pretty leading-relaxed text-slate-600">
                <p>{t("aboutStory.paragraph1")}</p>
                <p>{t("aboutStory.paragraph2")}</p>
                <p>{t("aboutStory.paragraph3")}</p>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-slate-200 pt-8">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <p className="text-2xl font-extrabold text-slate-950 sm:text-3xl">{stat.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-wide text-slate-500 sm:text-sm">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* MISSION & VALUES */}
      <Reveal>
        <section className="bg-slate-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500">
                {t("aboutValues.eyebrow")}
              </span>
              <h2 className="mt-3 text-balance text-3xl font-extrabold uppercase tracking-tight text-slate-950 sm:text-4xl">
                {t("aboutValues.title")}
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-slate-600">{t("aboutValues.subtitle")}</p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {values.map((value, i) => {
                const Icon = VALUE_ICONS[i % VALUE_ICONS.length]!;
                return (
                  <Reveal key={value.title} delay={i * 0.08} className={i === 0 ? "sm:col-span-2 lg:col-span-2" : ""}>
                    <div className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(0,0,0,0.06),0_16px_32px_-12px_rgba(0,0,0,0.18)]">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400/15 text-amber-500">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <h3 className="mt-5 text-lg font-bold text-slate-950">{value.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{value.description}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      </Reveal>

      {/* TECHNOLOGY PARTNERS */}
      <Reveal>
        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 md:py-28">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500">
              {t("aboutPartners.eyebrow")}
            </span>
            <h2 className="mt-3 text-balance text-3xl font-extrabold uppercase tracking-tight text-slate-950 sm:text-4xl">
              {t("aboutPartners.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-slate-600">
              {t("aboutPartners.subtitle")}
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((partner, i) => (
              <Reveal key={partner.name} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(0,0,0,0.06),0_16px_32px_-12px_rgba(0,0,0,0.18)]">
                  <h3 className="text-lg font-bold text-slate-950">{partner.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{partner.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </Reveal>

      {/* TEAM & EXPERTISE */}
      <Reveal>
        <section className="bg-slate-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500">
                {t("aboutTeam.eyebrow")}
              </span>
              <h2 className="mt-3 text-balance text-3xl font-extrabold uppercase tracking-tight text-slate-950 sm:text-4xl">
                {t("aboutTeam.title")}
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-slate-600">{t("aboutTeam.subtitle")}</p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {teamHighlights.map((item, i) => {
                const Icon = TEAM_ICONS[i % TEAM_ICONS.length]!;
                return (
                  <Reveal key={item.title} delay={i * 0.08}>
                    <div className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(0,0,0,0.06),0_16px_32px_-12px_rgba(0,0,0,0.18)]">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400/15 text-amber-500">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <h3 className="mt-5 text-lg font-bold text-slate-950">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
