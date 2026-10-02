import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import LocaleProvider from "@/components/LocaleProvider";
import LanguageToggle from "@/components/LanguageToggle";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  formatDetection: { telephone: false, date: false, email: false, address: false },
  title: "Orient Electronics Pakistan | Home Appliances, Redefined",
  description:
    "Orient Electronics brings energy-efficient air conditioners, refrigerators, LED TVs, washing machines and microwave ovens to homes across Pakistan.",
  openGraph: {
    title: "Orient Electronics Pakistan",
    description:
      "Technologically advanced home appliances for a finer lifestyle. Serving Pakistani homes since 1957.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body
        className="bg-[var(--background)] text-[var(--foreground)] antialiased"
        style={{ fontFamily: "var(--font-sans, Inter, sans-serif)" }}
      >
        <LocaleProvider>
          <LanguageToggle />
          <Navbar />
          {children}
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}