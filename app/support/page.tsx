"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Bell, Mail, Info, Search, ChevronDown, Clock, Circle, Check, Star, Activity } from 'lucide-react';
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";
import { fadeInUp, staggerContainer } from "@/lib/motion";
interface ServiceCenter {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
}

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface ContactChannel {
  id: string;
  title: string;
  detail: string;
  action: string;
  href: string;
  icon: "phone" | "mail" | "chat" | "locate";
}

interface WarrantyBenefit {
  id: string;
  title: string;
  detail: string;
}

interface HeroStat {
  id: string;
  value: string;
  label: string;
}

const CONTACT_ICONS = {
  phone: Bell,
  mail: Mail,
  chat: Info,
  locate: Search,
} as const;

const HERO_STAT_ICONS = [Clock, Activity, Star] as const;

const SERVICE_CENTERS: ServiceCenter[] = [
  {
    id: "karachi",
    name: "Orient Service Centre - Karachi",
    address: "Shahrah-e-Faisal, Block 6, PECHS, Karachi",
    phone: "021-111-674-368",
    hours: "Mon - Sat, 09:00 AM - 06:00 PM",
  },
  {
    id: "lahore",
    name: "Orient Service Centre - Lahore",
    address: "Main Boulevard, Gulberg III, Lahore",
    phone: "042-111-674-368",
    hours: "Mon - Sat, 09:00 AM - 06:00 PM",
  },
  {
    id: "islamabad",
    name: "Orient Service Centre - Islamabad",
    address: "Blue Area, Jinnah Avenue, Islamabad",
    phone: "051-111-674-368",
    hours: "Mon - Sat, 09:00 AM - 06:00 PM",
  },
  {
    id: "faisalabad",
    name: "Orient Service Centre - Faisalabad",
    address: "Susan Road, Madina Town, Faisalabad",
    phone: "041-111-674-368",
    hours: "Mon - Sat, 09:00 AM - 05:30 PM",
  },
  {
    id: "multan",
    name: "Orient Service Centre - Multan",
    address: "Bosan Road, Gulgasht Colony, Multan",
    phone: "061-111-674-368",
    hours: "Mon - Sat, 09:00 AM - 05:30 PM",
  },
  {
    id: "peshawar",
    name: "Orient Service Centre - Peshawar",
    address: "University Road, Peshawar Cantt, Peshawar",
    phone: "091-111-674-368",
    hours: "Mon - Sat, 09:00 AM - 05:30 PM",
  },
];

const CITY_FILTERS = ["All", ...SERVICE_CENTERS.map((c) => c.name.split("- ")[1] ?? c.name)] as const;

export default function SupportPage() {
  const t = useTranslations();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeCity, setActiveCity] = useState<string>("All");

  const faqItems = (
    Array.isArray(t.raw("faq.items")) ? t.raw("faq.items") : []
  ) as FaqItem[];

  const contactChannels = (
    Array.isArray(t.raw("contactChannels.items")) ? t.raw("contactChannels.items") : []
  ) as ContactChannel[];

  const warrantyBenefits = (
    Array.isArray(t.raw("warrantyInfo.benefits")) ? t.raw("warrantyInfo.benefits") : []
  ) as WarrantyBenefit[];

  const heroStats = (
    Array.isArray(t.raw("supportHero.stats")) ? t.raw("supportHero.stats") : []
  ) as HeroStat[];

  const filteredCenters = useMemo(() => {
    if (activeCity === "All") return SERVICE_CENTERS;
    return SERVICE_CENTERS.filter((c) => c.name.includes(activeCity));
  }, [activeCity]);

  return (
    <main className="bg-white">
      {/* Support header */}
      <Reveal>
        <section className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white md:py-32">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-amber-500/10 blur-3xl"
          />
          <div className="mx-auto max-w-6xl">
            <span className="inline-block rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-amber-400">
              {t("supportHero.badge")}
            </span>
            <h1 className="mt-6 max-w-2xl text-balance text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
              {t("supportHero.title")}
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/70 md:text-lg">
              {t("supportHero.subtitle")}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#service-locator"
                className="rounded-full bg-amber-400 px-7 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 ease-out hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
              >
                {t("supportHero.ctaPrimary")}
              </Link>
              <span className="text-sm text-white/60">
                {t("supportHero.helplineLabel")}{" "}
                <span className="font-semibold text-white">{t("supportHero.helplineValue")}</span>
              </span>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-6 border-t border-white/10 pt-10 sm:grid-cols-3">
              {heroStats.map((stat, i) => {
                const Icon = HERO_STAT_ICONS[i % HERO_STAT_ICONS.length]!;
                return (
                  <div key={stat.id} className="flex items-center gap-3">
                    <Icon className="h-5 w-5 flex-shrink-0 text-amber-400" aria-hidden="true" />
                    <div>
                      <div className="text-2xl font-bold tracking-tight">{stat.value}</div>
                      <div className="text-xs text-white/60">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Contact channels */}
      <Reveal>
        <section className="px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 max-w-xl">
              <span className="text-xs font-semibold tracking-[0.2em] text-amber-600">
                {t("contactChannels.eyebrow")}
              </span>
              <h2 className="mt-3 text-balance text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
                {t("contactChannels.title")}
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-slate-600">
                {t("contactChannels.subtitle")}
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
            >
              {contactChannels.map((channel) => {
                const Icon = CONTACT_ICONS[channel.icon] ?? Info;
                return (
                  <motion.div
                    key={channel.id}
                    variants={fadeInUp}
                    whileHover={{ y: -4 }}
                    className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out"
                  >
                    <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-amber-400">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-base font-bold text-slate-900">{channel.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                      {channel.detail}
                    </p>
                    <Link
                      href={channel.href}
                      className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-amber-600 transition-colors hover:text-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
                    >
                      {channel.action}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      </Reveal>

      {/* Service locator */}
      <Reveal>
        <section id="service-locator" className="bg-slate-50 px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-xl">
              <span className="text-xs font-semibold tracking-[0.2em] text-amber-600">
                {t("serviceLocator.eyebrow")}
              </span>
              <h2 className="mt-3 text-balance text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
                {t("serviceLocator.title")}
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-slate-600">
                {t("serviceLocator.subtitle")}
              </p>
            </div>

            <div className="mb-10 flex flex-wrap gap-2">
              {CITY_FILTERS.map((city) => (
                <button
                  key={city}
                  type="button"
                  onClick={() => setActiveCity(city)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-semibold transition-colors duration-200",
                    activeCity === city
                      ? "border-amber-400 bg-amber-400 text-slate-950"
                      : "border-slate-200 bg-white text-slate-600 hover:border-amber-300"
                  )}
                >
                  {city}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCenters.map((center) => (
                <div
                  key={center.id}
                  className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.08)]"
                >
                  <h3 className="text-base font-bold text-slate-900">{center.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{center.address}</p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
                    <Circle className="h-2 w-2 fill-amber-400 text-amber-400" aria-hidden="true" />
                    <span>{center.phone}</span>
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-sm text-slate-500">
                    <Clock className="h-4 w-4" aria-hidden="true" />
                    <span>{center.hours}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* FAQ */}
      <Reveal>
        <section className="px-6 py-20 md:py-28">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center">
              <span className="text-xs font-semibold tracking-[0.2em] text-amber-600">
                {t("faq.eyebrow")}
              </span>
              <h2 className="mt-3 text-balance text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
                {t("faq.title")}
              </h2>
            </div>

            <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
              {faqItems.map((item, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={item.id}>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="text-sm font-semibold text-slate-900">{item.question}</span>
                      <ChevronDown
                        className={cn("h-5 w-5 flex-shrink-0 text-slate-400 transition-transform duration-200", isOpen ? "rotate-180" : "")}
                        aria-hidden="true"
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 text-sm leading-relaxed text-slate-600">{item.answer}</div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Warranty info */}
      <Reveal>
        <section className="bg-slate-50 px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-xl">
              <span className="text-xs font-semibold tracking-[0.2em] text-amber-600">
                {t("warrantyInfo.eyebrow")}
              </span>
              <h2 className="mt-3 text-balance text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
                {t("warrantyInfo.title")}
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-slate-600">
                {t("warrantyInfo.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {warrantyBenefits.map((benefit) => (
                <div
                  key={benefit.id}
                  className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.08)]"
                >
                  <Check className="h-5 w-5 text-amber-500" aria-hidden="true" />
                  <h3 className="mt-4 text-base font-bold text-slate-900">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{benefit.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
