"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Check, Star, Clock, Search, Bell, ShieldCheck, Wrench, Package, Zap, MapPin } from 'lucide-react';
import { Reveal } from "@/components/Reveal";

interface WarrantyFormState {
  fullName: string;
  email: string;
  phone: string;
  category: string;
  modelNumber: string;
  serialNumber: string;
  purchaseDate: string;
  retailer: string;
}

const INITIAL_FORM: WarrantyFormState = {
  fullName: "",
  email: "",
  phone: "",
  category: "Air Conditioners",
  modelNumber: "",
  serialNumber: "",
  purchaseDate: "",
  retailer: "",
};

const PRODUCT_CATEGORIES = [
  "Air Conditioners",
  "Refrigerators",
  "Water Dispensers",
  "LED TVs",
  "Washing Machines",
  "Microwave Ovens",
];

const HERO_STATS = [
  { id: "warranty", icon: ShieldCheck, value: "2 Years", label: "Standard warranty coverage" },
  { id: "centres", icon: MapPin, value: "100+", label: "Service centres nationwide" },
  { id: "response", icon: Clock, value: "48 hrs", label: "Average technician response" },
];

interface WarrantyBenefit {
  id: string;
  icon: typeof Check;
  title: string;
  description: string;
}

const WARRANTY_BENEFITS: WarrantyBenefit[] = [
  {
    id: "free-repairs",
    icon: Wrench,
    title: "Free Repairs",
    description:
      "Labour and parts for manufacturing defects are covered at no cost for the full warranty period.",
  },
  {
    id: "genuine-parts",
    icon: Package,
    title: "Genuine Parts Guarantee",
    description:
      "Every repair uses original Orient components, protecting the performance and lifespan of your appliance.",
  },
  {
    id: "service-network",
    icon: MapPin,
    title: "Nationwide Service Network",
    description:
      "Access over 100 authorised service centres across Pakistan, from Karachi to Peshawar.",
  },
  {
    id: "priority-response",
    icon: Zap,
    title: "Priority Technician Response",
    description:
      "Registered products are fast-tracked for technician visits, with most requests actioned within 48 hours.",
  },
  {
    id: "extended-coverage",
    icon: Star,
    title: "Extended Coverage Options",
    description:
      "Upgrade select air conditioner compressors and refrigerator compressors to coverage of up to five years.",
  },
  {
    id: "online-claims",
    icon: Check,
    title: "Easy Online Claims",
    description:
      "File and track warranty claims online, with status updates sent directly to your registered email.",
  },
];

const REFERENCE_PREFIX = "WR-";
const REFERENCE_DIGIT_COUNT = 1000000;

function generateReferenceNumber(): string {
  const randomDigits = Math.floor(Math.random() * REFERENCE_DIGIT_COUNT)
    .toString()
    .padStart(6, "0");
  return `${REFERENCE_PREFIX}${randomDigits}`;
}

export default function WarrantyRegistrationPage() {
  const [formData, setFormData] = useState<WarrantyFormState>(INITIAL_FORM);
  const [referenceNumber, setReferenceNumber] = useState<string | null>(null);

  const [claimQuery, setClaimQuery] = useState("");
  const [claimResult, setClaimResult] = useState<{
    status: string;
    registeredOn: string;
    coverageEnds: string;
  } | null>(null);

  function updateField<K extends keyof WarrantyFormState>(
    field: K,
    value: WarrantyFormState[K],
  ) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const reference = generateReferenceNumber();
    setReferenceNumber(reference);
  }

  function handleRegisterAnother() {
    setReferenceNumber(null);
    setFormData(INITIAL_FORM);
  }

  function handleCheckStatus(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!claimQuery.trim()) return;
    setClaimResult({
      status: "Active",
      registeredOn: "14 March 2024",
      coverageEnds: "13 March 2026",
    });
  }

  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      {/* HERO */}
      <Reveal>
        <section className="relative overflow-hidden border-b border-[var(--border)] bg-[var(--background)] px-6 py-20 md:py-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 right-[-10%] h-80 w-80 rounded-full bg-[var(--accent)]/15 blur-3xl"
          />
          <div className="relative mx-auto max-w-5xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--accent)]">
              WARRANTY
            </span>
            <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight md:text-6xl">
              Register your Orient appliance warranty
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-[var(--muted-foreground)] md:text-lg">
              Secure genuine repairs, priority technician visits, and nationwide service coverage by
              registering your product within 30 days of purchase.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {HERO_STATS.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.id}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--card)] px-5 py-6 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.12)]"
                  >
                    <Icon className="mx-auto h-6 w-6 text-[var(--primary)]" aria-hidden="true" />
                    <p className="mt-3 text-xl font-bold tracking-tight text-[var(--foreground)]">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-[var(--muted-foreground)]">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </Reveal>

      {/* REGISTRATION FORM */}
      <Reveal>
        <section id="registration-form" className="px-6 py-20 md:py-24">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
                STEP ONE
              </p>
              <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
                Register your product details
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-pretty leading-relaxed text-[var(--muted-foreground)]">
                Fill in your purchase information below. Keep your invoice and serial number handy for a
                quicker registration.
              </p>
            </div>

            <div className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.12)] sm:p-10">
              {referenceNumber ? (
                <div className="flex flex-col items-center py-6 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent)]/10 text-[var(--accent)]">
                    <Check className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-2xl font-bold tracking-tight text-[var(--foreground)]">
                    Registration successful
                  </h3>
                  <p className="mt-3 max-w-md text-pretty leading-relaxed text-[var(--muted-foreground)]">
                    Your appliance has been registered under reference number
                  </p>
                  <p className="mt-3 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-5 py-2 text-lg font-bold tracking-wide text-[var(--accent)]">
                    {referenceNumber}
                  </p>
                  <p className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-[var(--muted-foreground)]">
                    A confirmation has been sent to {formData.email || "your email address"}. Keep this
                    reference number for future warranty claims.
                  </p>
                  <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleRegisterAnother}
                      className="rounded-full border border-[var(--border)] bg-[var(--card)] px-6 py-2.5 text-sm font-semibold text-[var(--foreground)] transition-all duration-300 ease-out hover:border-[var(--primary)]/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
                    >
                      Register another product
                    </button>
                    <Link
                      href="/support"
                      className="rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] px-6 py-2.5 text-sm font-bold text-white shadow-[0_8px_24px_-8px_rgba(20,86,224,0.4)] transition-transform duration-300 ease-out hover:scale-[1.03]"
                    >
                      Visit Customer Support
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <label htmlFor="fullName" className="text-sm font-semibold text-[var(--foreground)]">
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      required
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => updateField("fullName", e.target.value)}
                      placeholder="e.g. Ayesha Khan"
                      className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-2.5 text-sm text-[var(--foreground)] outline-none transition-colors duration-300 ease-out focus:border-[var(--primary)]"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="email" className="text-sm font-semibold text-[var(--foreground)]">
                      Email Address
                    </label>
                    <input
                      id="email"
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="you@example.com"
                      className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-2.5 text-sm text-[var(--foreground)] outline-none transition-colors duration-300 ease-out focus:border-[var(--primary)]"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="phone" className="text-sm font-semibold text-[var(--foreground)]">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      placeholder="03XX-XXXXXXX"
                      className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-2.5 text-sm text-[var(--foreground)] outline-none transition-colors duration-300 ease-out focus:border-[var(--primary)]"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="category" className="text-sm font-semibold text-[var(--foreground)]">
                      Product Category
                    </label>
                    <select
                      id="category"
                      value={formData.category}
                      onChange={(e) => updateField("category", e.target.value)}
                      className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-2.5 text-sm text-[var(--foreground)] outline-none transition-colors duration-300 ease-out focus:border-[var(--primary)]"
                    >
                      {PRODUCT_CATEGORIES.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="modelNumber" className="text-sm font-semibold text-[var(--foreground)]">
                      Model Number
                    </label>
                    <input
                      id="modelNumber"
                      required
                      type="text"
                      value={formData.modelNumber}
                      onChange={(e) => updateField("modelNumber", e.target.value)}
                      placeholder="e.g. OSV-18HTFC"
                      className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-2.5 text-sm text-[var(--foreground)] outline-none transition-colors duration-300 ease-out focus:border-[var(--primary)]"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="serialNumber" className="text-sm font-semibold text-[var(--foreground)]">
                      Serial Number
                    </label>
                    <input
                      id="serialNumber"
                      required
                      type="text"
                      value={formData.serialNumber}
                      onChange={(e) => updateField("serialNumber", e.target.value)}
                      placeholder="Found on the appliance rating plate"
                      className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-2.5 text-sm text-[var(--foreground)] outline-none transition-colors duration-300 ease-out focus:border-[var(--primary)]"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="purchaseDate" className="text-sm font-semibold text-[var(--foreground)]">
                      Purchase Date
                    </label>
                    <input
                      id="purchaseDate"
                      required
                      type="date"
                      value={formData.purchaseDate}
                      onChange={(e) => updateField("purchaseDate", e.target.value)}
                      className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-2.5 text-sm text-[var(--foreground)] outline-none transition-colors duration-300 ease-out focus:border-[var(--primary)]"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="retailer" className="text-sm font-semibold text-[var(--foreground)]">
                      Retailer / Store Name
                    </label>
                    <input
                      id="retailer"
                      required
                      type="text"
                      value={formData.retailer}
                      onChange={(e) => updateField("retailer", e.target.value)}
                      placeholder="e.g. Al-Fatah Electronics"
                      className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-2.5 text-sm text-[var(--foreground)] outline-none transition-colors duration-300 ease-out focus:border-[var(--primary)]"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="invoice" className="text-sm font-semibold text-[var(--foreground)]">
                      Purchase Invoice
                    </label>
                    <input
                      id="invoice"
                      type="file"
                      accept="image/*,.pdf"
                      className="mt-2 w-full rounded-xl border border-dashed border-[var(--border)] bg-[var(--background)] px-4 py-2.5 text-sm text-[var(--muted-foreground)] outline-none transition-colors duration-300 ease-out file:mr-4 file:rounded-full file:border-0 file:bg-[var(--primary)]/10 file:px-4 file:py-1.5 file:text-sm file:font-semibold file:text-[var(--primary)] focus:border-[var(--primary)]"
                    />
                    <p className="mt-1.5 text-xs text-[var(--muted-foreground)]">
                      Upload a photo or PDF of your original purchase receipt (max 5MB).
                    </p>
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="w-full rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] px-6 py-3 text-sm font-bold text-white shadow-[0_8px_24px_-8px_rgba(20,86,224,0.4)] transition-transform duration-300 ease-out hover:scale-[1.01] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
                    >
                      Submit Registration
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </Reveal>

      {/* CLAIM STATUS CHECKER */}
      <Reveal>
        <section id="claim-status" className="border-y border-[var(--border)] bg-[var(--card)] px-6 py-20 md:py-24">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
                CHECK STATUS
              </p>
              <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
                Already registered? Check your claim status
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-pretty leading-relaxed text-[var(--muted-foreground)]">
                Enter your warranty reference number or product serial number to view your current
                coverage status.
              </p>
            </div>

            <form
              onSubmit={handleCheckStatus}
              className="mt-8 flex flex-col gap-3 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-3 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.12)] sm:flex-row"
            >
              <div className="relative flex-1">
                <Search
                  className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted-foreground)]"
                  aria-hidden="true"
                />
                <input
                  type="text"
                  required
                  value={claimQuery}
                  onChange={(e) => setClaimQuery(e.target.value)}
                  placeholder="Warranty reference number or serial number"
                  className="w-full rounded-xl border border-transparent bg-[var(--card)] py-3 pl-11 pr-4 text-sm text-[var(--foreground)] outline-none transition-colors duration-300 ease-out focus:border-[var(--primary)]"
                />
              </div>
              <button
                type="submit"
                className="rounded-xl bg-[var(--primary)] px-6 py-3 text-sm font-bold text-white transition-transform duration-300 ease-out hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
              >
                Check Status
              </button>
            </form>

            {claimResult && (
              <div className="mt-6 rounded-2xl border border-[var(--accent)]/30 bg-[var(--accent)]/5 p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)]/15 text-[var(--accent)]">
                    <Bell className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-bold tracking-tight text-[var(--foreground)]">
                    Coverage details for {claimQuery}
                  </h3>
                </div>
                <dl className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-3">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--muted-foreground)]">
                      Status
                    </dt>
                    <dd className="mt-1 text-base font-bold text-[var(--accent)]">{claimResult.status}</dd>
                  </div>
                  <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-3">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--muted-foreground)]">
                      Registered On
                    </dt>
                    <dd className="mt-1 text-base font-bold text-[var(--foreground)]">
                      {claimResult.registeredOn}
                    </dd>
                  </div>
                  <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-3">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--muted-foreground)]">
                      Coverage Ends
                    </dt>
                    <dd className="mt-1 text-base font-bold text-[var(--foreground)]">
                      {claimResult.coverageEnds}
                    </dd>
                  </div>
                </dl>
              </div>
            )}
          </div>
        </section>
      </Reveal>

      {/* WARRANTY BENEFITS */}
      <Reveal>
        <section className="px-6 py-20 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
                WHY REGISTER
              </p>
              <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
                Benefits of registering your warranty
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-pretty leading-relaxed text-[var(--muted-foreground)]">
                Registered products enjoy faster, smoother support across our entire service network.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {WARRANTY_BENEFITS.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={benefit.id}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(0,0,0,0.04),0_16px_32px_-12px_rgba(0,0,0,0.18)]"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 text-base font-bold tracking-tight text-[var(--foreground)]">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-center">
              <p className="text-sm text-[var(--muted-foreground)]">
                Need help with an existing repair or service request?
              </p>
              <Link
                href="/support"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-2 text-sm font-semibold text-[var(--foreground)] transition-all duration-300 ease-out hover:border-[var(--primary)]/40 hover:text-[var(--primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
              >
                Visit Customer Support
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-2 text-sm font-semibold text-[var(--foreground)] transition-all duration-300 ease-out hover:border-[var(--primary)]/40 hover:text-[var(--primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
              >
                Browse Products
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
