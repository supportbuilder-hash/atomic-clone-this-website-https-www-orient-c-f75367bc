"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Globe as Facebook, MessageCircle as Twitter, Briefcase as Linkedin, Clock, Info } from 'lucide-react';
import { useTranslations } from "next-intl";
import {
  footerProductLinks,
  footerCompanyLinks,
  footerSupportLinks,
  socialLinks,
  HELPLINE_NUMBER,
  HELPLINE_HOURS,
  BRAND_SHORT,
} from "@/lib/data";

const socialIcons: Record<string, typeof Facebook> = {
  facebook: Facebook,
  twitter: Twitter,
  linkedin: Linkedin,
};

export default function Footer() {
  const t = useTranslations();
  const footerT = t.raw("footer") as Record<string, string>;
  const pathname = usePathname();

  const resolveHref = (href: string) =>
    href.startsWith("#") ? (pathname === "/" ? href : `/${href}`) : href;

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#") && pathname === "/") {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="border-t border-[var(--border)] bg-[var(--foreground)] text-[var(--background)]"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] text-sm font-extrabold text-white">
                O
              </span>
              <span
                className="text-lg font-extrabold tracking-tight text-white"
                style={{ fontFamily: "var(--font-sans, 'Plus Jakarta Sans', sans-serif)" }}
              >
                {BRAND_SHORT} ELECTRONICS
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              {footerT.tagline ??
                "Technologically advanced home appliances for a finer lifestyle."}
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.key] ?? Facebook;
                return (
                  <a
                    key={social.key}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={footerT[social.key] ?? social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors duration-300 ease-out hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-white">
              {footerT.productsHeading ?? "Products"}
            </h2>
            <ul className="mt-4 space-y-3">
              {footerProductLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={resolveHref(link.href)}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className="text-sm text-white/70 transition-colors duration-300 ease-out hover:text-[var(--accent)]"
                  >
                    {footerT[link.key] ?? link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-white">
              {footerT.companyHeading ?? "Company"}
            </h2>
            <ul className="mt-4 space-y-3">
              {footerCompanyLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={resolveHref(link.href)}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className="text-sm text-white/70 transition-colors duration-300 ease-out hover:text-[var(--accent)]"
                  >
                    {footerT[link.key] ?? link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-white">
              {footerT.supportHeading ?? "Support"}
            </h2>
            <ul className="mt-4 space-y-3">
              {footerSupportLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={resolveHref(link.href)}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className="text-sm text-white/70 transition-colors duration-300 ease-out hover:text-[var(--accent)]"
                  >
                    {footerT[link.key] ?? link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-white/10 pt-5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-white/50">
                <Info className="h-3.5 w-3.5" aria-hidden="true" />
                {footerT.helplineLabel ?? "Helpline"}
              </div>
              <p className="mt-2 text-xl font-extrabold text-[var(--accent)]">
                {HELPLINE_NUMBER}
              </p>
              <div className="mt-1 flex items-center gap-1.5 text-xs text-white/60">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{footerT.hoursLabel ?? HELPLINE_HOURS}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>
            {footerT.copyrightText ??
              "© 2026 Orient Electronics Pakistan. All rights reserved."}
          </p>
        </div>
      </div>
    </motion.footer>
  );
}