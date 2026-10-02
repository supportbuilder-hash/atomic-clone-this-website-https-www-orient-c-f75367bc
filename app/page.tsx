"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowRight, Check, Star, ArrowUpDown, ShieldCheck as ShieldCheckFallback } from 'lucide-react';
import { Reveal } from "@/components/Reveal";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const BRAND = { fullName: "Orient Electronics" } as const;

// lucide-react doesn't export "ShieldCheck" in the allowed icon list for this
// build, so alias Info-like usage is avoided; use Check instead everywhere.
void ShieldCheckFallback;

interface RangeItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

interface ComparisonItem {
  label: string;
  watt: string;
  bill: string;
}

interface ReviewItem {
  quote: string;
  name: string;
  location: string;
}

interface NewsItemData {
  date: string;
  title: string;
  excerpt: string;
  image: string;
}

interface FeaturedItem {
  badge: string;
  series: string;
  name: string;
  image: string;
}

interface StatItem {
  value: string;
  label: string;
}

export default function HomePage() {
  const t = useTranslations();

  const rangeItems = (
    Array.isArray(t.raw("products.items")) ? t.raw("products.items") : []
  ) as RangeItem[];

  const comparisonItems = (
    Array.isArray(t.raw("comparison.items")) ? t.raw("comparison.items") : []
  ) as ComparisonItem[];

  const compareCategories = (
    Array.isArray(t.raw("compare.categories")) ? t.raw("compare.categories") : []
  ) as string[];

  const reviews = (
    Array.isArray(t.raw("trust.reviews")) ? t.raw("trust.reviews") : []
  ) as ReviewItem[];

  const certifications = (
    Array.isArray(t.raw("trust.certifications")) ? t.raw("trust.certifications") : []
  ) as string[];

  const partners = (
    Array.isArray(t.raw("partners.items")) ? t.raw("partners.items") : []
  ) as string[];

  const qualityStats = (
    Array.isArray(t.raw("quality.stats")) ? t.raw("quality.stats") : []
  ) as StatItem[];

  const newsItems = (
    Array.isArray(t.raw("news.items")) ? t.raw("news.items") : []
  ) as NewsItemData[];

  const featuredItems = (
    Array.isArray(t.raw("featured.items")) ? t.raw("featured.items") : []
  ) as FeaturedItem[];

  return (
    <main className="bg-white text-[#13223a]">
      {/* HERO */}
      <Reveal>
        <section id="hero" className="relative isolate h-[600px] w-full overflow-hidden sm:h-[640px]">
          <Image
            src="https://picsum.photos/seed/5616291147bb/800/600"
            alt="Orient smart TV mounted in a modern living room"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1526]/90 via-[#0b1526]/55 to-transparent" />
          <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 sm:px-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="max-w-xl"
            >
              <motion.h1
                variants={fadeInUp}
                className="text-pretty text-5xl font-extrabold uppercase leading-[1.05] tracking-tight text-white sm:text-6xl"
              >
                {t("hero.titleLine1")}
                <br />
                {t("hero.titleLine2")}
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="mt-5 max-w-md text-pretty text-base leading-relaxed text-white/80 sm:text-lg"
              >
                {t("hero.subtitle")}
              </motion.p>
              <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-md bg-[#c89b4d] px-7 py-3 text-sm font-bold uppercase tracking-wide text-[#13223a] shadow-[0_8px_24px_-8px_rgba(200,155,77,0.6)] transition-all duration-300 ease-out hover:bg-[#d9ad63] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c89b4d]"
                >
                  {t("hero.ctaPrimary")}
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-md border border-white/40 px-7 py-3 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 ease-out hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {t("hero.ctaSecondary")}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </Reveal>

      {/* PRODUCT RANGE */}
      <Reveal>
        <section id="products" className="mx-auto max-w-7xl px-6 py-24 sm:px-10 md:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c89b4d]">
              {t("products.eyebrow")}
            </p>
            <h2 className="mt-3 text-pretty text-4xl font-extrabold uppercase tracking-tight sm:text-5xl">
              {t("products.heading")}
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-[#5a6a82]">
              {t("products.subtitle")}
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rangeItems.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.08}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(0,0,0,0.06),0_20px_40px_-12px_rgba(0,0,0,0.2)]">
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-5 pb-3 pt-10">
                      <span className="h-1 w-6 bg-[#c89b4d]" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-[#5a6a82]">
                      {item.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags?.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="rounded-full bg-[#f2f4f8] px-3 py-1 text-xs font-medium text-[#5a6a82]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href="/products"
                      className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-bold text-[#1b3a68] transition-colors duration-300 ease-out hover:text-[#c89b4d]"
                    >
                      {t("products.exploreLabel")}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      </Reveal>

      {/* INVERTER VS CONVENTIONAL */}
      <Reveal>
        <section id="comparison" className="bg-[#f4f6f9] py-24 md:py-32">
          <div className="mx-auto max-w-5xl px-6 text-center sm:px-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c89b4d]">
              {t("comparison.eyebrow")}
            </p>
            <h2 className="mt-3 text-pretty text-4xl font-extrabold uppercase tracking-tight sm:text-5xl">
              {t("comparison.heading")}
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-[#5a6a82]">
              {t("comparison.subtitle")}
            </p>

            <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 overflow-hidden rounded-2xl shadow-[0_1px_2px_rgba(0,0,0,0.04),0_20px_50px_-15px_rgba(0,0,0,0.25)] sm:grid-cols-2">
              {comparisonItems.map((item, i) => (
                <div
                  key={item.label}
                  className={
                    i === 0
                      ? "flex flex-col items-center justify-center gap-3 bg-[#c0433f] px-8 py-16 text-white"
                      : "flex flex-col items-center justify-center gap-3 bg-[#1b3a68] px-8 py-16 text-white"
                  }
                >
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                    {item.label}
                  </span>
                  {i === 1 && (
                    <span className="text-xs font-semibold text-white/60">
                      {t("comparison.asLowAs")}
                    </span>
                  )}
                  <span className="text-4xl font-extrabold tracking-tight">{item.watt}</span>
                  <span className="text-sm text-white/75">{item.bill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* COMPARE CTA */}
      <Reveal>
        <section id="compare" className="bg-[#0f1f38] py-24 text-white md:py-32">
          <div className="mx-auto max-w-4xl px-6 text-center sm:px-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white/80">
              <ArrowUpDown className="h-3.5 w-3.5" aria-hidden="true" />
              {t("compare.badge")}
            </span>
            <h2 className="mt-6 text-pretty text-4xl font-extrabold uppercase tracking-tight sm:text-5xl">
              {t("compare.headingLine1")}{" "}
              <span className="text-[#c89b4d]">{t("compare.headingLine2")}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-white/70">
              {t("compare.subtitle")}
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {compareCategories.map((cat, i) => (
                <span
                  key={i}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/85"
                >
                  {cat}
                </span>
              ))}
            </div>

            <Link
              href="/products"
              className="mt-10 inline-flex items-center gap-2 rounded-md bg-[#c89b4d] px-8 py-3 text-sm font-bold uppercase tracking-wide text-[#13223a] transition-all duration-300 ease-out hover:bg-[#d9ad63]"
            >
              {t("compare.ctaLabel")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </Reveal>

      {/* WARRANTY STRIP */}
      <Reveal>
        <section className="border-y border-black/5 bg-white py-10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row sm:px-10">
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-bold">{t("warranty.title")}</h3>
              <p className="mt-1 text-sm text-[#5a6a82]">{t("warranty.subtitle")}</p>
            </div>
            <Link
              href="/support"
              className="inline-flex items-center gap-2 rounded-md border border-[#1b3a68] px-6 py-2.5 text-sm font-bold text-[#1b3a68] transition-all duration-300 ease-out hover:bg-[#1b3a68] hover:text-white"
            >
              {t("warranty.ctaLabel")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </Reveal>

      {/* TRUST: REVIEWS + CERTIFICATIONS */}
      <Reveal>
        <section id="trust" className="mx-auto max-w-7xl px-6 py-24 sm:px-10 md:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c89b4d]">
              {t("trust.eyebrow")}
            </p>
            <h2 className="mt-3 text-pretty text-4xl font-extrabold uppercase tracking-tight sm:text-5xl">
              {t("trust.heading")}
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-black/5 bg-white p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.12)]">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#5a6a82]">
                {t("trust.reviewsHeading")}
              </h3>
              <div className="mt-5 divide-y divide-black/5">
                {reviews.map((review, i) => (
                  <div key={i} className="py-5 first:pt-0 last:pb-0">
                    <div className="flex gap-0.5 text-[#c89b4d]">
                      {[0, 1, 2, 3, 4].map((star) => (
                        <Star key={star} className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                      ))}
                    </div>
                    <p className="mt-3 text-pretty text-sm leading-relaxed text-[#2b3b55]">
                      &ldquo;{review.quote}&rdquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-[#13223a]">
                      {review.name}
                      <span className="font-normal text-[#5a6a82]"> &middot; {review.location}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-black/5 bg-[#f4f6f9] p-8">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#5a6a82]">
                {t("trust.certHeading")}
              </h3>
              <ul className="mt-5 flex flex-col gap-4">
                {certifications.map((cert, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-[#13223a]">
                    <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[#1b3a68] text-white">
                      <Check className="h-4 w-4" aria-hidden="true" />
                    </span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#5a6a82]">
              {t("partners.eyebrow")}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-10">
              {partners.map((partner, i) => (
                <span
                  key={i}
                  className="text-xl font-extrabold uppercase tracking-tight text-[#13223a]/70"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* QUALITY / STATS */}
      <Reveal>
        <section id="about" className="bg-[#0f1f38] py-24 text-white md:py-32">
          <div className="mx-auto max-w-4xl px-6 text-center sm:px-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c89b4d]">
              {t("quality.eyebrow")}
            </p>
            <h2 className="mt-3 text-pretty text-4xl font-extrabold uppercase tracking-tight sm:text-5xl">
              {t("quality.heading")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-white/70">
              {t("quality.subtitle")}
            </p>

            <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {qualityStats.map((stat, i) => (
                <div key={i}>
                  <div className="text-4xl font-extrabold text-[#c89b4d] sm:text-5xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm uppercase tracking-wide text-white/70">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* NEWS */}
      <Reveal>
        <section id="blog" className="mx-auto max-w-7xl px-6 py-24 sm:px-10 md:py-32">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c89b4d]">
                {t("news.eyebrow")}
              </p>
              <h2 className="mt-3 text-pretty text-3xl font-extrabold tracking-tight sm:text-4xl">
                {t("news.heading")}
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1b3a68] transition-colors duration-300 ease-out hover:text-[#c89b4d]"
            >
              {t("news.viewAllLabel")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {newsItems.map((item, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out hover:-translate-y-1">
                  <div className="relative h-36 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <span className="text-xs font-semibold uppercase tracking-wide text-[#c89b4d]">
                      {item.date}
                    </span>
                    <h3 className="mt-2 text-pretty text-sm font-bold leading-snug text-[#13223a]">
                      {item.title}
                    </h3>
                    <p className="mt-2 flex-1 text-xs leading-relaxed text-[#5a6a82]">
                      {item.excerpt}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      </Reveal>

      {/* FEATURED THIS WEEK */}
      <Reveal>
        <section id="featured" className="bg-[#f4f6f9] py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <h2 className="text-pretty text-3xl font-extrabold tracking-tight sm:text-4xl">
              {t("featured.heading")}
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {featuredItems.map((item, i) => (
                <Reveal key={i} delay={i * 0.07}>
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out hover:-translate-y-1">
                    <span className="w-fit rounded-full bg-[#eef1f6] px-3 py-1 text-xs font-semibold text-[#5a6a82]">
                      {item.badge}
                    </span>
                    <div className="relative mt-4 h-32 w-full">
                      <Image src={item.image} alt={item.name} fill className="object-contain" />
                    </div>
                    <span className="mt-4 text-xs font-bold uppercase tracking-wide text-[#c89b4d]">
                      {item.series}
                    </span>
                    <h3 className="mt-1 text-sm font-bold text-[#13223a]">{item.name}</h3>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <span className="sr-only">{BRAND.fullName}</span>
    </main>
  );
}