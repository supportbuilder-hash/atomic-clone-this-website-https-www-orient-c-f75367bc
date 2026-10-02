"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search } from 'lucide-react';
import { useTranslations } from "next-intl";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const t = useTranslations();
  const navT = t.raw("nav") as Record<string, string>;
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#") && pathname === "/") {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const resolveHref = (href: string) =>
    href.startsWith("#") ? (pathname === "/" ? href : `/${href}`) : href;

  const shopNowHref = resolveHref("#featured-products");

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--card)]/95 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2"
          aria-label="Orient Electronics home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] text-sm font-extrabold text-white shadow-[0_8px_24px_-8px_rgba(20,86,224,0.18)]">
            O
          </span>
          <span
            className="text-lg font-extrabold tracking-tight text-[var(--foreground)]"
            style={{ fontFamily: "var(--font-sans, 'Plus Jakarta Sans', sans-serif)" }}
          >
            RIENT
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => {
            const resolvedHref = resolveHref(link.href);
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.key}
                href={resolvedHref}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300 ease-out hover:text-[var(--primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] ${
                  isActive
                    ? "text-[var(--primary)]"
                    : "text-[var(--foreground)]"
                }`}
              >
                {navT[link.key] ?? link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-[var(--primary)]"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={shopNowHref}
            onClick={(e) => handleAnchorClick(e, "#featured-products")}
            className="hidden rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] px-5 py-2.5 text-sm font-bold text-white shadow-[0_8px_24px_-8px_rgba(20,86,224,0.18)] transition-transform duration-300 ease-out hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] sm:inline-flex"
          >
            {navT.shopNow ?? "Shop Now"}
          </Link>
          <button
            type="button"
            aria-label={navT.searchLabel ?? "Search"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted-foreground)] transition-colors duration-300 ease-out hover:border-[var(--primary)] hover:text-[var(--primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label={navT.menuLabel ?? "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--foreground)] transition-colors duration-300 ease-out hover:border-[var(--primary)] hover:text-[var(--primary)] lg:hidden"
          >
            {isOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden border-t border-[var(--border)] bg-[var(--card)] lg:hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-1 px-4 py-4 sm:px-6">
              {navLinks.map((link) => {
                const resolvedHref = resolveHref(link.href);
                return (
                  <Link
                    key={link.key}
                    href={resolvedHref}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className="rounded-lg px-3 py-2.5 text-sm font-semibold text-[var(--foreground)] transition-colors duration-300 ease-out hover:bg-[var(--background)] hover:text-[var(--primary)]"
                  >
                    {navT[link.key] ?? link.label}
                  </Link>
                );
              })}
              <Link
                href={shopNowHref}
                onClick={(e) => handleAnchorClick(e, "#featured-products")}
                className="mt-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] px-5 py-2.5 text-center text-sm font-bold text-white"
              >
                {navT.shopNow ?? "Shop Now"}
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}