"use client";

import Link from "next/link";
import { Reveal } from "@/components/Reveal";

interface TocItem {
  id: string;
  label: string;
}

const TOC: TocItem[] = [
  { id: "acceptance", label: "Acceptance of Terms" },
  { id: "use-of-website", label: "Use of the Website" },
  { id: "product-information", label: "Product Information & Pricing" },
  { id: "orders-payments", label: "Orders & Payments" },
  { id: "warranty-returns", label: "Warranty & Returns" },
  { id: "intellectual-property", label: "Intellectual Property" },
  { id: "user-conduct", label: "User Conduct" },
  { id: "limitation-of-liability", label: "Limitation of Liability" },
  { id: "governing-law", label: "Governing Law" },
  { id: "changes-to-terms", label: "Changes to Terms" },
  { id: "contact-us", label: "Contact Us" },
];

export default function TermsOfServicePage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      {/* HERO */}
      <Reveal>
        <section className="relative overflow-hidden border-b border-[var(--border)] bg-[var(--card)] px-6 py-20 md:py-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 right-[-10%] h-80 w-80 rounded-full bg-[var(--primary)]/10 blur-3xl"
          />
          <div className="relative mx-auto max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--primary)]">
              Legal
            </span>
            <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-[var(--foreground)] md:text-6xl">
              Terms of Service
            </h1>
            <p className="mt-4 text-sm font-medium text-[var(--muted-foreground)]">
              Last updated: January 2026
            </p>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-[var(--muted-foreground)] md:text-lg">
              These Terms of Service govern your access to and use of the Orient
              Electronics Pakistan website, as well as your purchase and use of
              Orient-branded home appliances and related services. By browsing
              this site, creating an account, or placing an order, you agree to
              be bound by the terms set out below.
            </p>
          </div>
        </section>
      </Reveal>

      {/* FORMATTED CONTENT */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-[260px_1fr]">
          {/* Table of contents */}
          <Reveal>
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
                On this page
              </h2>
              <nav aria-label="Table of contents" className="mt-4">
                <ul className="space-y-2.5 border-l border-[var(--border)] pl-4">
                  {TOC.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="text-sm leading-snug text-[var(--muted-foreground)] transition-colors duration-300 ease-out hover:text-[var(--primary)]"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
          </Reveal>

          {/* Content */}
          <Reveal delay={0.05}>
            <article className="space-y-12 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.12)] md:p-12">
              <section id="acceptance" className="scroll-mt-28">
                <h2 className="text-xl font-bold tracking-tight text-[var(--foreground)] md:text-2xl">
                  1. Acceptance of Terms
                </h2>
                <p className="mt-4 leading-relaxed text-[var(--muted-foreground)]">
                  By accessing or using the Orient Electronics Pakistan website
                  (orient.com.pk) or any of its associated services, you confirm
                  that you have read, understood, and agree to be legally bound
                  by these Terms of Service and our Privacy Policy. If you do not
                  agree with any part of these terms, please discontinue use of
                  the website immediately. These terms apply to all visitors,
                  registered customers, and anyone who purchases or registers
                  Orient products through our channels.
                </p>
              </section>

              <section id="use-of-website" className="scroll-mt-28">
                <h2 className="text-xl font-bold tracking-tight text-[var(--foreground)] md:text-2xl">
                  2. Use of the Website
                </h2>
                <p className="mt-4 leading-relaxed text-[var(--muted-foreground)]">
                  This website is provided for the purpose of browsing Orient
                  product information, locating authorised dealers and service
                  centres, registering product warranties, and engaging with our
                  customer support team. You agree to use the site only for
                  lawful purposes and in a manner that does not infringe the
                  rights of, or restrict or inhibit the use and enjoyment of the
                  site by, any third party.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-[var(--muted-foreground)]">
                  <li>You must be at least 18 years old to create an account or place an order.</li>
                  <li>You are responsible for maintaining the confidentiality of any login credentials.</li>
                  <li>You agree not to attempt unauthorised access to any part of the website or its systems.</li>
                </ul>
              </section>

              <section id="product-information" className="scroll-mt-28">
                <h2 className="text-xl font-bold tracking-tight text-[var(--foreground)] md:text-2xl">
                  3. Product Information & Pricing
                </h2>
                <p className="mt-4 leading-relaxed text-[var(--muted-foreground)]">
                  We make every effort to ensure that product descriptions,
                  specifications, images, and pricing displayed on this website
                  are accurate and up to date. However, Orient Electronics
                  reserves the right to correct errors, update prices, and
                  revise product availability at any time without prior notice.
                  Prices listed are in Pakistani Rupees (PKR) and are subject to
                  applicable taxes and levies unless stated otherwise.
                </p>
                <p className="mt-4 leading-relaxed text-[var(--muted-foreground)]">
                  Product images are for illustrative purposes and may vary
                  slightly from the actual item due to manufacturing updates or
                  display settings on your device.
                </p>
              </section>

              <section id="orders-payments" className="scroll-mt-28">
                <h2 className="text-xl font-bold tracking-tight text-[var(--foreground)] md:text-2xl">
                  4. Orders & Payments
                </h2>
                <p className="mt-4 leading-relaxed text-[var(--muted-foreground)]">
                  When you place an order through an authorised Orient dealer or
                  our website, you are making an offer to purchase a product
                  subject to these terms. Orders are confirmed only once
                  payment has been received and verified. We accept bank
                  transfer, major debit and credit cards, and cash on delivery
                  through select partners, depending on your location.
                </p>
                <p className="mt-4 leading-relaxed text-[var(--muted-foreground)]">
                  Orient Electronics reserves the right to refuse or cancel any
                  order at its discretion, including in cases of suspected
                  fraud, pricing errors, or stock unavailability. In such
                  cases, any payment already made will be refunded in full.
                </p>
              </section>

              <section id="warranty-returns" className="scroll-mt-28">
                <h2 className="text-xl font-bold tracking-tight text-[var(--foreground)] md:text-2xl">
                  5. Warranty & Returns
                </h2>
                <p className="mt-4 leading-relaxed text-[var(--muted-foreground)]">
                  All genuine Orient appliances purchased from authorised
                  dealers are covered by our standard manufacturer warranty,
                  the terms of which are printed on your warranty card and
                  confirmed upon registration. Register your product promptly
                  to activate full warranty coverage and simplify future
                  service claims.
                </p>
                <p className="mt-4 leading-relaxed text-[var(--muted-foreground)]">
                  To register your product or check the status of an existing
                  claim, visit our{" "}
                  <Link
                    href="/warranty-registration"
                    className="font-semibold text-[var(--primary)] underline-offset-2 hover:underline"
                  >
                    Warranty Registration
                  </Link>{" "}
                  page. For repairs, replacement parts, or general product
                  support, our{" "}
                  <Link
                    href="/support"
                    className="font-semibold text-[var(--primary)] underline-offset-2 hover:underline"
                  >
                    Customer Support
                  </Link>{" "}
                  team and nationwide service centres are ready to help. Returns
                  and exchanges are handled by the dealer of purchase and are
                  subject to the dealer's return policy and product condition
                  at the time of inspection.
                </p>
              </section>

              <section id="intellectual-property" className="scroll-mt-28">
                <h2 className="text-xl font-bold tracking-tight text-[var(--foreground)] md:text-2xl">
                  6. Intellectual Property
                </h2>
                <p className="mt-4 leading-relaxed text-[var(--muted-foreground)]">
                  All content on this website, including the Orient name, logo,
                  product designs, text, graphics, and software, is the
                  property of Orient Electronics Pakistan or its licensors and
                  is protected under applicable copyright and trademark laws.
                  You may not reproduce, distribute, or create derivative works
                  from any part of this website without our prior written
                  consent.
                </p>
              </section>

              <section id="user-conduct" className="scroll-mt-28">
                <h2 className="text-xl font-bold tracking-tight text-[var(--foreground)] md:text-2xl">
                  7. User Conduct
                </h2>
                <p className="mt-4 leading-relaxed text-[var(--muted-foreground)]">
                  When using this website, you agree not to engage in any of
                  the following:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-[var(--muted-foreground)]">
                  <li>Posting false, misleading, or fraudulent product reviews or warranty claims.</li>
                  <li>Uploading viruses, malicious code, or attempting to disrupt site functionality.</li>
                  <li>Scraping, copying, or republishing website content for commercial purposes.</li>
                  <li>Impersonating Orient Electronics staff, dealers, or other customers.</li>
                </ul>
              </section>

              <section id="limitation-of-liability" className="scroll-mt-28">
                <h2 className="text-xl font-bold tracking-tight text-[var(--foreground)] md:text-2xl">
                  8. Limitation of Liability
                </h2>
                <p className="mt-4 leading-relaxed text-[var(--muted-foreground)]">
                  Orient Electronics Pakistan shall not be liable for any
                  indirect, incidental, or consequential damages arising from
                  your use of this website or our products, except where such
                  liability cannot be excluded under applicable Pakistani law.
                  Our total liability in connection with any order shall not
                  exceed the amount paid for the product giving rise to the
                  claim. Nothing in these terms limits your statutory rights
                  as a consumer.
                </p>
              </section>

              <section id="governing-law" className="scroll-mt-28">
                <h2 className="text-xl font-bold tracking-tight text-[var(--foreground)] md:text-2xl">
                  9. Governing Law
                </h2>
                <p className="mt-4 leading-relaxed text-[var(--muted-foreground)]">
                  These Terms of Service are governed by and construed in
                  accordance with the laws of the Islamic Republic of Pakistan.
                  Any disputes arising out of or relating to these terms or
                  your use of the website shall be subject to the exclusive
                  jurisdiction of the courts of Karachi, Pakistan.
                </p>
              </section>

              <section id="changes-to-terms" className="scroll-mt-28">
                <h2 className="text-xl font-bold tracking-tight text-[var(--foreground)] md:text-2xl">
                  10. Changes to Terms
                </h2>
                <p className="mt-4 leading-relaxed text-[var(--muted-foreground)]">
                  We may update these Terms of Service from time to time to
                  reflect changes in our business practices or legal
                  requirements. Any revisions will be posted on this page with
                  an updated "Last updated" date. Continued use of the website
                  after changes are posted constitutes your acceptance of the
                  revised terms.
                </p>
              </section>

              <section id="contact-us" className="scroll-mt-28">
                <h2 className="text-xl font-bold tracking-tight text-[var(--foreground)] md:text-2xl">
                  11. Contact Us
                </h2>
                <p className="mt-4 leading-relaxed text-[var(--muted-foreground)]">
                  If you have any questions about these Terms of Service,
                  please reach out to our{" "}
                  <Link
                    href="/support"
                    className="font-semibold text-[var(--primary)] underline-offset-2 hover:underline"
                  >
                    Customer Support
                  </Link>{" "}
                  team. We're happy to clarify any part of these terms before
                  you make a purchase or register a product.
                </p>
              </section>
            </article>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
