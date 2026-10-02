"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Check, Plus, X, ArrowRight, Sparkles, Phone } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";

interface ProductItem {
  id: string;
  name: string;
  series: string;
  category: string;
  image: string;
  specs: string[];
}

const MAX_COMPARE = 3;

export default function ProductsPage() {
  const t = useTranslations();

  const rawProducts = t.raw("productsPage.products");
  const PRODUCTS = (Array.isArray(rawProducts) ? rawProducts : []) as ProductItem[];

  const rawCategories = t.raw("productsPage.categories");
  const CATEGORY_LIST = (Array.isArray(rawCategories) ? rawCategories : []) as string[];

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const filteredProducts = useMemo(
    () =>
      activeCategory === "all"
        ? PRODUCTS
        : PRODUCTS.filter((p) => p.category === activeCategory),
    [PRODUCTS, activeCategory],
  );

  const selectedProducts = useMemo(
    () =>
      selectedIds
        .map((id) => PRODUCTS.find((p) => p.id === id))
        .filter((p): p is ProductItem => Boolean(p)),
    [PRODUCTS, selectedIds],
  );

  function toggleCompare(id: string) {
    setSelectedIds((prev) => {
      if (prev.includes(id)) return prev.filter((p) => p !== id);
      if (prev.length >= MAX_COMPARE) return prev;
      return [...prev, id];
    });
  }

  const featured = PRODUCTS[0];

  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      {/* Hero */}
      <Reveal>
        <section className="relative overflow-hidden border-b border-black/5 bg-[var(--background)] px-6 py-20 md:py-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 right-[-10%] h-80 w-80 rounded-full bg-[var(--accent)]/15 blur-3xl"
          />
          <div className="relative mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--accent)]">
              {t("productsPage.hero.eyebrow")}
            </span>
            <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight md:text-6xl">
              {t("productsPage.hero.title")}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-[var(--muted-foreground)] md:text-lg">
              {t("productsPage.hero.description")}
            </p>
          </div>
        </section>
      </Reveal>

      {/* Filter + Grid */}
      <Reveal>
        <section id="catalog" className="px-6 py-20 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              <button
                type="button"
                onClick={() => setActiveCategory("all")}
                className={cn(
                  "rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 ease-out",
                  activeCategory === "all"
                    ? "border-[var(--accent)] bg-[var(--accent)] text-white shadow-[0_8px_24px_-8px_var(--accent)]"
                    : "border-black/10 bg-[var(--card)] text-[var(--muted-foreground)] hover:border-[var(--accent)]/40 hover:text-[var(--foreground)]",
                )}
              >
                {t("productsPage.filter.all")}
              </button>
              {CATEGORY_LIST.map((cat, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 ease-out",
                    activeCategory === cat
                      ? "border-[var(--accent)] bg-[var(--accent)] text-white shadow-[0_8px_24px_-8px_var(--accent)]"
                      : "border-black/10 bg-[var(--card)] text-[var(--muted-foreground)] hover:border-[var(--accent)]/40 hover:text-[var(--foreground)]",
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product, i) => {
                const isSelected = selectedIds.includes(product.id);
                return (
                  <Reveal key={product.id} delay={i * 0.06}>
                    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-[var(--card)] shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(0,0,0,0.06),0_16px_32px_-10px_rgba(0,0,0,0.18)]">
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/5">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                        <span className="absolute left-3 top-3 rounded-full bg-[var(--background)]/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[var(--foreground)] ring-1 ring-black/5">
                          {product.series}
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col gap-4 p-5">
                        <div>
                          <p className="text-xs font-medium uppercase tracking-wide text-[var(--accent)]">
                            {product.category}
                          </p>
                          <h3 className="mt-1 text-lg font-semibold tracking-tight">{product.name}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {product.specs.slice(0, 4).map((spec, si) => (
                            <span
                              key={si}
                              className="rounded-full bg-black/5 px-2.5 py-1 text-xs text-[var(--muted-foreground)]"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                        <button
                          type="button"
                          onClick={() => toggleCompare(product.id)}
                          disabled={!isSelected && selectedIds.length >= MAX_COMPARE}
                          aria-pressed={isSelected}
                          className={cn(
                            "mt-auto inline-flex items-center justify-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-40",
                            isSelected
                              ? "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)]"
                              : "border-black/10 text-[var(--foreground)] hover:border-[var(--accent)]/50",
                          )}
                        >
                          {isSelected ? (
                            <>
                              <Check className="h-4 w-4" aria-hidden="true" />
                              {t("productsPage.comparison.removeButton")}
                            </>
                          ) : (
                            <>
                              <Plus className="h-4 w-4" aria-hidden="true" />
                              {t("productsPage.comparison.addButton")}
                            </>
                          )}
                        </button>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Comparison tool */}
      <Reveal>
        <section className="border-y border-black/5 bg-black/[0.03] px-6 py-20 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
                {t("productsPage.comparison.title")}
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-[var(--muted-foreground)]">
                {t("productsPage.comparison.description")}
              </p>
            </div>

            {selectedProducts.length === 0 ? (
              <div className="mx-auto mt-10 max-w-md rounded-2xl border border-dashed border-black/15 bg-[var(--card)] px-6 py-10 text-center">
                <p className="text-sm text-[var(--muted-foreground)]">
                  {t("productsPage.comparison.emptyState")}
                </p>
                <Link
                  href="#catalog"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)] transition-colors duration-300 hover:text-[var(--accent)]/80"
                >
                  {t("productsPage.comparison.selectPrompt")}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            ) : (
              <div className="mt-10 overflow-x-auto rounded-2xl border border-black/5 bg-[var(--card)] shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.12)]">
                <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-black/5">
                      <th scope="col" className="w-40 px-5 py-4 text-xs font-semibold uppercase tracking-wide text-[var(--muted-foreground)]">
                        {t("productsPage.comparison.categoryLabel")}
                      </th>
                      {selectedProducts.map((p) => (
                        <th key={p.id} scope="col" className="px-5 py-4">
                          <div className="flex items-center justify-between gap-3">
                            <span className="font-semibold tracking-tight">{p.name}</span>
                            <button
                              type="button"
                              aria-label={`${t("productsPage.comparison.removeButton")} ${p.name}`}
                              onClick={() => toggleCompare(p.id)}
                              className="rounded-full p-1 text-[var(--muted-foreground)] transition-colors duration-300 hover:bg-black/5 hover:text-[var(--foreground)]"
                            >
                              <X className="h-4 w-4" aria-hidden="true" />
                            </button>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-black/5">
                      <th scope="row" className="px-5 py-4 text-xs font-medium uppercase tracking-wide text-[var(--muted-foreground)]">
                        {t("productsPage.comparison.seriesHeader")}
                      </th>
                      {selectedProducts.map((p) => (
                        <td key={p.id} className="px-5 py-4 text-[var(--foreground)]">
                          {p.series}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b border-black/5">
                      <th scope="row" className="px-5 py-4 text-xs font-medium uppercase tracking-wide text-[var(--muted-foreground)]">
                        {t("productsPage.comparison.categoryHeader")}
                      </th>
                      {selectedProducts.map((p) => (
                        <td key={p.id} className="px-5 py-4 text-[var(--foreground)]">
                          {p.category}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <th scope="row" className="px-5 py-4 align-top text-xs font-medium uppercase tracking-wide text-[var(--muted-foreground)]">
                        {t("productsPage.comparison.specsHeader")}
                      </th>
                      {selectedProducts.map((p) => (
                        <td key={p.id} className="px-5 py-4 align-top">
                          <ul className="space-y-1.5">
                            {p.specs.map((spec, si) => (
                              <li key={si} className="flex items-start gap-1.5 text-[var(--foreground)]">
                                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--accent)]" aria-hidden="true" />
                                <span>{spec}</span>
                              </li>
                            ))}
                          </ul>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>
      </Reveal>

      {/* Featured series */}
      {featured ? (
        <Reveal>
          <section className="px-6 py-20 md:py-28">
            <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className="order-2 lg:order-1">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--accent)]">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                  {t("productsPage.featured.eyebrow")}
                </span>
                <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight md:text-4xl">
                  {t("productsPage.featured.title")}
                </h2>
                <p className="mt-4 text-pretty leading-relaxed text-[var(--muted-foreground)]">
                  {t("productsPage.featured.description")}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {featured.specs.map((spec, si) => (
                    <li key={si} className="flex items-start gap-2 text-sm text-[var(--foreground)]">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" aria-hidden="true" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#catalog"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_var(--accent)] transition-all duration-300 ease-out hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                >
                  {t("productsPage.featured.cta")}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
              <div className="order-1 overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_24px_48px_-16px_rgba(0,0,0,0.2)] lg:order-2">
                <img
                  src={featured.image}
                  alt={featured.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </section>
        </Reveal>
      ) : null}

      {/* CTA contact */}
      <Reveal>
        <section className="px-6 pb-24">
          <div className="mx-auto max-w-5xl rounded-3xl border border-black/5 bg-[var(--foreground)] px-8 py-16 text-center text-[var(--background)] shadow-[0_1px_2px_rgba(0,0,0,0.04),0_24px_48px_-16px_rgba(0,0,0,0.25)] md:px-16">
            <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
              {t("productsPage.cta.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-[var(--background)]/75">
              {t("productsPage.cta.description")}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/support"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_var(--accent)] transition-all duration-300 ease-out hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              >
                {t("productsPage.cta.primary")}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href="tel:0800-674368"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--background)]/25 px-6 py-3 text-sm font-semibold text-[var(--background)] transition-all duration-300 ease-out hover:border-[var(--background)]/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--background)]"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {t("productsPage.cta.secondary")}
              </a>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}