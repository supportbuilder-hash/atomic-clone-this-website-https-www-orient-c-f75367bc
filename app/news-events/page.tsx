"use client";

import Image from "next/image";
import { Calendar, ArrowRight, MapPin, Bell } from 'lucide-react';
import { Reveal } from "@/components/Reveal";

interface NewsArticle {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
}

interface EventEntry {
  id: string;
  date: string;
  title: string;
  location: string;
  description: string;
}

const FEATURED_NEWS: NewsArticle = {
  id: "featured",
  date: "April 2026",
  title: "Orient Electronics launches new inverter AC lineup for 2026",
  excerpt:
    "Orient unveils its most energy-efficient inverter air conditioner range yet, featuring upgraded compressors, faster cooling cycles, and up to 65% lower electricity consumption compared to conventional units. The new lineup rolls out to showrooms across Karachi, Lahore, and Islamabad this month.",
  image: "https://picsum.photos/seed/orient-news-featured/900/600",
};

const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: "news-1",
    date: "March 2026",
    title: "Orient opens 20 new service centres nationwide",
    excerpt:
      "Expanding its after-sales network, Orient adds 20 new authorised service centres across tier-two cities, bringing total coverage to over 120 locations in Pakistan.",
    image: "https://picsum.photos/seed/orient-news-1/600/450",
  },
  {
    id: "news-2",
    date: "March 2026",
    title: "Orient wins Energy Efficiency Excellence Award 2026",
    excerpt:
      "Recognised by the Pakistan Energy Efficiency Council for its inverter technology lineup, Orient receives top honours for reducing household power consumption nationwide.",
    image: "https://picsum.photos/seed/orient-news-2/600/450",
  },
  {
    id: "news-3",
    date: "February 2026",
    title: "Orient launches CSR initiative for flood-affected communities",
    excerpt:
      "As part of its community outreach programme, Orient donates refrigerators and water dispensers to relief camps in southern Punjab and Sindh.",
    image: "https://picsum.photos/seed/orient-news-3/600/450",
  },
  {
    id: "news-4",
    date: "February 2026",
    title: "Orient expands retail footprint with 15 new flagship stores",
    excerpt:
      "New flagship showrooms open in Faisalabad, Multan, and Peshawar, offering customers hands-on product demonstrations and dedicated service desks.",
    image: "https://picsum.photos/seed/orient-news-4/600/450",
  },
  {
    id: "news-5",
    date: "January 2026",
    title: "Orient introduces smart LED TV series with built-in streaming",
    excerpt:
      "The new Orient Smart Vision series integrates popular streaming apps and voice remote control, marking the brand's entry into connected home entertainment.",
    image: "https://picsum.photos/seed/orient-news-5/600/450",
  },
  {
    id: "news-6",
    date: "January 2026",
    title: "Orient named Pakistan's most trusted appliance brand",
    excerpt:
      "For the fifth consecutive year, Orient Electronics tops the annual consumer trust survey, cited for reliability, service quality, and local manufacturing.",
    image: "https://picsum.photos/seed/orient-news-6/600/450",
  },
];

const EVENTS: EventEntry[] = [
  {
    id: "event-1",
    date: "May 10-12, 2026",
    title: "Orient at Expo Pakistan 2026",
    location: "Karachi Expo Centre, Karachi",
    description:
      "Visit the Orient pavilion to explore the full 2026 product range, including the new inverter AC series and smart LED TVs, with live demonstrations throughout the three-day expo.",
  },
  {
    id: "event-2",
    date: "May 24, 2026",
    title: "Inverter Technology Launch Event",
    location: "Pearl Continental, Lahore",
    description:
      "An exclusive evening showcasing Orient's next-generation inverter compressor technology, with media briefings and dealer network presentations.",
  },
  {
    id: "event-3",
    date: "June 6-8, 2026",
    title: "Ramzan Home Appliance Mega Sale",
    location: "Orient flagship stores, nationwide",
    description:
      "A three-day in-store promotion offering discounts on refrigerators, washing machines, and water dispensers at all Orient retail locations across Pakistan.",
  },
  {
    id: "event-4",
    date: "June 20, 2026",
    title: "Islamabad Service Centre Grand Opening",
    location: "Blue Area, Islamabad",
    description:
      "The ribbon-cutting ceremony for Orient's newest flagship service centre, featuring an expanded spare parts inventory and extended weekend hours.",
  },
  {
    id: "event-5",
    date: "July 15, 2026",
    title: "Dealer & Distributor Annual Conference",
    location: "Movenpick Hotel, Karachi",
    description:
      "Orient brings together its nationwide dealer network to unveil 2026-27 product roadmaps, sales incentives, and after-sales training programmes.",
  },
];

export default function NewsEventsPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      {/* NEWS HEADER */}
      <Reveal>
        <section className="relative overflow-hidden border-b border-[var(--border)] bg-[var(--card)] px-6 py-20 md:py-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 right-[-10%] h-80 w-80 rounded-full bg-[var(--primary)]/10 blur-3xl"
          />
          <div className="relative mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--primary)]">
              News &amp; Events
            </span>
            <h1 className="mt-6 text-balance text-4xl font-extrabold tracking-tight md:text-6xl">
              Stay updated with Orient Electronics
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-[var(--muted-foreground)] md:text-lg">
              Catch up on the latest company announcements, product launches, awards, and
              community initiatives, along with upcoming expos and in-store events happening
              across Pakistan.
            </p>
          </div>
        </section>
      </Reveal>

      {/* FEATURED NEWS */}
      <Reveal>
        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
              <Bell className="h-4 w-4 text-[var(--primary)]" aria-hidden="true" />
              <span>Featured Story</span>
            </div>
            <div className="grid overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-[0_1px_2px_rgba(0,0,0,0.04),0_20px_40px_-20px_rgba(15,23,42,0.18)] md:grid-cols-2">
              <div className="relative h-72 w-full overflow-hidden bg-[var(--background)] md:h-full">
                <Image
                  src={FEATURED_NEWS.image}
                  alt={FEATURED_NEWS.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12">
                <div className="flex items-center gap-2 text-sm font-medium text-[var(--muted-foreground)]">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  <span>{FEATURED_NEWS.date}</span>
                </div>
                <h2 className="mt-4 text-balance text-2xl font-extrabold leading-tight tracking-tight md:text-3xl">
                  {FEATURED_NEWS.title}
                </h2>
                <p className="mt-4 text-pretty leading-relaxed text-[var(--muted-foreground)]">
                  {FEATURED_NEWS.excerpt}
                </p>
                <a
                  href="#"
                  className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-bold text-[var(--primary)] transition-colors duration-300 ease-out hover:text-[var(--accent)]"
                >
                  Read More
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* NEWS GRID */}
      <Reveal>
        <section className="border-y border-[var(--border)] bg-[var(--card)] px-6 py-16 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <h2 className="text-balance text-3xl font-extrabold tracking-tight md:text-4xl">
                More from Orient
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-pretty text-base leading-relaxed text-[var(--muted-foreground)]">
                Product launches, awards, and community initiatives from across our national
                network.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {NEWS_ARTICLES.map((article) => (
                <article
                  key={article.id}
                  className="flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--background)] shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(15,23,42,0.12)] transition-transform duration-300 ease-out hover:-translate-y-1"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-[var(--card)]">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[var(--muted-foreground)]">
                      <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>{article.date}</span>
                    </div>
                    <h3 className="mt-3 text-balance text-lg font-extrabold leading-snug tracking-tight">
                      {article.title}
                    </h3>
                    <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-[var(--muted-foreground)]">
                      {article.excerpt}
                    </p>
                    <a
                      href="#"
                      className="mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-bold text-[var(--primary)] transition-colors duration-300 ease-out hover:text-[var(--accent)]"
                    >
                      Read More
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* EVENTS TIMELINE */}
      <Reveal>
        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="text-balance text-3xl font-extrabold tracking-tight md:text-4xl">
                Upcoming Events
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-pretty text-base leading-relaxed text-[var(--muted-foreground)]">
                Meet the Orient team at trade expos, product launches, and in-store promotions
                near you.
              </p>
            </div>
            <ol className="relative border-l-2 border-[var(--border)] pl-8">
              {EVENTS.map((event) => (
                <li key={event.id} className="relative pb-12 last:pb-0">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[2.3rem] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[var(--card)] bg-[var(--primary)] shadow-[0_0_0_4px_rgba(20,86,224,0.12)]"
                  />
                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(15,23,42,0.12)]">
                    <span className="inline-flex items-center rounded-full bg-[var(--accent)]/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[var(--accent)]">
                      {event.date}
                    </span>
                    <h3 className="mt-3 text-balance text-xl font-extrabold leading-snug tracking-tight">
                      {event.title}
                    </h3>
                    <div className="mt-2 flex items-center gap-1.5 text-sm font-medium text-[var(--muted-foreground)]">
                      <MapPin className="h-4 w-4 text-[var(--primary)]" aria-hidden="true" />
                      <span>{event.location}</span>
                    </div>
                    <p className="mt-3 text-pretty leading-relaxed text-[var(--muted-foreground)]">
                      {event.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
