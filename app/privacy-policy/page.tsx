"use client";

import Link from "next/link";
import { Reveal } from "@/components/Reveal";

interface TocItem {
  id: string;
  label: string;
}

const TOC_ITEMS: TocItem[] = [
  { id: "information-we-collect", label: "Information We Collect" },
  { id: "how-we-use-your-information", label: "How We Use Your Information" },
  { id: "cookies-tracking", label: "Cookies & Tracking Technologies" },
  { id: "data-sharing", label: "Data Sharing & Third Parties" },
  { id: "data-security", label: "Data Security" },
  { id: "your-rights", label: "Your Rights & Choices" },
  { id: "childrens-privacy", label: "Children's Privacy" },
  { id: "changes-to-policy", label: "Changes to This Policy" },
  { id: "contact-us", label: "Contact Us" },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      {/* HERO */}
      <Reveal>
        <section className="relative overflow-hidden border-b border-[var(--border)] bg-[var(--background)] px-6 py-20 md:py-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 right-[-10%] h-80 w-80 rounded-full bg-[var(--primary)]/10 blur-3xl"
          />
          <div className="relative mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--accent)]">
              Legal
            </span>
            <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight md:text-6xl">
              Privacy Policy
            </h1>
            <p className="mx-auto mt-4 text-sm font-medium text-[var(--muted-foreground)]">
              Last updated: January 2026
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-[var(--muted-foreground)] md:text-lg">
              Orient Electronics Pakistan is committed to protecting the privacy and security of every
              customer who shops with us, registers a product, or visits our service centres. This
              policy explains what information we collect, how we use it, and the choices you have.
            </p>
          </div>
        </section>
      </Reveal>

      {/* FORMATTED POLICY CONTENT */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[260px_1fr]">
          {/* TOC */}
          <Reveal className="lg:sticky lg:top-24 lg:h-fit">
            <nav
              aria-label="Table of contents"
              className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.12)] lg:sticky lg:top-24"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
                On this page
              </p>
              <ul className="mt-4 space-y-3">
                {TOC_ITEMS.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-sm font-medium text-[var(--muted-foreground)] transition-colors duration-300 ease-out hover:text-[var(--primary)]"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </Reveal>

          {/* Content */}
          <Reveal delay={0.05}>
            <div className="space-y-14">
              <section id="information-we-collect" className="scroll-mt-24 border-b border-[var(--border)] pb-10">
                <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)] md:text-3xl">
                  Information We Collect
                </h2>
                <p className="mt-4 leading-relaxed text-[var(--muted-foreground)]">
                  When you shop with Orient Electronics, register a product warranty, or contact our
                  customer support team, we may collect the following categories of information:
                </p>
                <ul className="mt-4 space-y-2 text-[var(--muted-foreground)]">
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    <span>
                      <strong className="text-[var(--foreground)]">Personal details</strong> such as your
                      full name, CNIC number (where required for warranty claims), and date of birth.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    <span>
                      <strong className="text-[var(--foreground)]">Contact information</strong> including your
                      phone number, email address, and home or billing address.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    <span>
                      <strong className="text-[var(--foreground)]">Purchase and warranty data</strong>
                      such as the appliance model, serial number, retailer name, and date of purchase
                      submitted during warranty registration.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    <span>
                      <strong className="text-[var(--foreground)]">Device and usage data</strong> including
                      your IP address, browser type, pages visited, and approximate location when you use
                      orient.com.pk, collected automatically through standard web logs.
                    </span>
                  </li>
                </ul>
              </section>

              <section id="how-we-use-your-information" className="scroll-mt-24 border-b border-[var(--border)] pb-10">
                <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)] md:text-3xl">
                  How We Use Your Information
                </h2>
                <p className="mt-4 leading-relaxed text-[var(--muted-foreground)]">
                  We use the information collected to operate, maintain, and improve our products and
                  services, including to:
                </p>
                <ul className="mt-4 space-y-2 text-[var(--muted-foreground)]">
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    Process warranty registrations and verify eligibility for repair or replacement claims.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    Schedule service visits and dispatch technicians through our authorised service centre
                    network across Pakistan.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    Send order confirmations, delivery updates, and important product safety notices.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    Respond to customer support enquiries submitted by phone, email, or live chat.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    Analyse website usage to improve navigation, product listings, and overall customer
                    experience.
                  </li>
                </ul>
              </section>

              <section id="cookies-tracking" className="scroll-mt-24 border-b border-[var(--border)] pb-10">
                <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)] md:text-3xl">
                  Cookies & Tracking Technologies
                </h2>
                <p className="mt-4 leading-relaxed text-[var(--muted-foreground)]">
                  orient.com.pk uses cookies and similar tracking technologies to remember your
                  preferences, keep you signed in, and understand how visitors use our site. Cookies
                  fall into three broad categories:
                </p>
                <ul className="mt-4 space-y-2 text-[var(--muted-foreground)]">
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    <span>
                      <strong className="text-[var(--foreground)]">Essential cookies</strong> required for
                      core site functionality such as the product comparison tool and warranty forms.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    <span>
                      <strong className="text-[var(--foreground)]">Analytics cookies</strong> that help us
                      measure traffic and identify which product pages are most useful to customers.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    <span>
                      <strong className="text-[var(--foreground)]">Preference cookies</strong> that remember
                      your language and region selection across visits.
                    </span>
                  </li>
                </ul>
                <p className="mt-4 leading-relaxed text-[var(--muted-foreground)]">
                  You can control or disable cookies through your browser settings at any time, though
                  some parts of the site may not function correctly without them.
                </p>
              </section>

              <section id="data-sharing" className="scroll-mt-24 border-b border-[var(--border)] pb-10">
                <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)] md:text-3xl">
                  Data Sharing & Third Parties
                </h2>
                <p className="mt-4 leading-relaxed text-[var(--muted-foreground)]">
                  Orient Electronics does not sell your personal information. We share data only in the
                  following limited circumstances:
                </p>
                <ul className="mt-4 space-y-2 text-[var(--muted-foreground)]">
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    With authorised service centres and logistics partners to fulfil repairs, installations,
                    and deliveries.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    With payment processors and banks to securely complete online transactions.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    With regulatory or government authorities when required by Pakistani law.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    With trusted technology vendors who help us operate our website and customer support
                    systems, bound by confidentiality obligations.
                  </li>
                </ul>
              </section>

              <section id="data-security" className="scroll-mt-24 border-b border-[var(--border)] pb-10">
                <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)] md:text-3xl">
                  Data Security
                </h2>
                <p className="mt-4 leading-relaxed text-[var(--muted-foreground)]">
                  We maintain administrative, technical, and physical safeguards designed to protect
                  your personal information from unauthorised access, alteration, disclosure, or
                  destruction. Warranty and account data is stored on access-controlled systems, and
                  payment details are processed through PCI-compliant partners. While we work hard to
                  protect your information, no method of transmission over the internet is completely
                  secure, and we encourage customers to use strong passwords and avoid sharing warranty
                  or order details over unverified channels.
                </p>
              </section>

              <section id="your-rights" className="scroll-mt-24 border-b border-[var(--border)] pb-10">
                <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)] md:text-3xl">
                  Your Rights & Choices
                </h2>
                <p className="mt-4 leading-relaxed text-[var(--muted-foreground)]">
                  You have the right to request access to the personal information we hold about you,
                  ask us to correct inaccurate details, or request deletion of your data where it is no
                  longer needed for warranty or legal purposes. You may also opt out of marketing
                  communications at any time by using the unsubscribe link in our emails or by
                  contacting our support team directly. We will respond to verified requests within a
                  reasonable timeframe in accordance with applicable Pakistani law.
                </p>
              </section>

              <section id="childrens-privacy" className="scroll-mt-24 border-b border-[var(--border)] pb-10">
                <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)] md:text-3xl">
                  Children&apos;s Privacy
                </h2>
                <p className="mt-4 leading-relaxed text-[var(--muted-foreground)]">
                  Our website and products are intended for use by adults purchasing home appliances for
                  their households. We do not knowingly collect personal information from children
                  under the age of 13. If we become aware that a child has provided us with personal
                  data without parental consent, we will take reasonable steps to delete that
                  information promptly.
                </p>
              </section>

              <section id="changes-to-policy" className="scroll-mt-24 border-b border-[var(--border)] pb-10">
                <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)] md:text-3xl">
                  Changes to This Policy
                </h2>
                <p className="mt-4 leading-relaxed text-[var(--muted-foreground)]">
                  We may update this Privacy Policy from time to time to reflect changes in our
                  practices, technologies, or legal requirements. When we make material changes, we
                  will revise the &quot;Last updated&quot; date at the top of this page and, where
                  appropriate, notify you through our website or by email. We encourage you to review
                  this page periodically.
                </p>
              </section>

              <section id="contact-us" className="scroll-mt-24">
                <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)] md:text-3xl">
                  Contact Us
                </h2>
                <p className="mt-4 leading-relaxed text-[var(--muted-foreground)]">
                  If you have questions about this Privacy Policy or how we handle your information,
                  please reach out to our customer support team:
                </p>
                <div className="mt-5 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.12)]">
                  <p className="text-sm text-[var(--muted-foreground)]">
                    <strong className="text-[var(--foreground)]">Email:</strong>{" "}
                    <a href="mailto:support@orient.com.pk" className="text-[var(--primary)] hover:underline">
                      support@orient.com.pk
                    </a>
                  </p>
                  <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                    <strong className="text-[var(--foreground)]">Phone:</strong> 111-786-000 (08:00 AM to
                    05:00 PM, Monday to Saturday)
                  </p>
                  <Link
                    href="/support"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] transition-colors duration-300 ease-out hover:text-[var(--accent)]"
                  >
                    Visit Customer Support
                  </Link>
                </div>
              </section>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
