export type NavLink = {
  label: string;
  href: string;
  key: string;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/", key: "home" },
  { label: "About Us", href: "/about", key: "about" },
  { label: "Blog", href: "/blog", key: "blog" },
  { label: "Products", href: "/products", key: "products" },
  { label: "Customer Support", href: "/support", key: "support" },
  { label: "Warranty Registration", href: "/warranty-registration", key: "warrantyRegistration" },
  { label: "News & Events", href: "/news-events", key: "newsEvents" },
  { label: "Privacy Policy", href: "/privacy-policy", key: "privacyPolicy" },
  { label: "Terms of Service", href: "/terms-of-service", key: "termsOfService" },
];

export const BRAND_NAME = "Orient Electronics";
export const BRAND_SHORT = "ORIENT";
export const BRAND_TAGLINE =
  "Technologically advanced home appliances for a finer lifestyle.";
export const HELPLINE_NUMBER = "111-786-000";
export const HELPLINE_HOURS = "08:00 AM to 05:00 PM, Monday to Saturday";

export type FooterLink = {
  label: string;
  href: string;
  key: string;
};

export const socialLinks: FooterLink[] = [
  { label: "Facebook", href: "https://facebook.com", key: "facebook" },
  { label: "Twitter", href: "https://twitter.com", key: "twitter" },
  { label: "LinkedIn", href: "https://linkedin.com", key: "linkedin" },
];

export const footerProductLinks: FooterLink[] = [
  {
    label: "Air Conditioners",
    href: "/products?category=air-conditioners",
    key: "airConditioners",
  },
  {
    label: "Refrigerators",
    href: "/products?category=refrigerators",
    key: "refrigerators",
  },
  {
    label: "Water Dispensers",
    href: "/products?category=water-dispensers",
    key: "waterDispensers",
  },
  { label: "LED TVs", href: "/products?category=led-tvs", key: "ledTvs" },
  {
    label: "Washing Machines",
    href: "/products?category=washing-machines",
    key: "washingMachines",
  },
  {
    label: "Microwave Ovens",
    href: "/products?category=microwave-ovens",
    key: "microwaveOvens",
  },
];

export const footerCompanyLinks: FooterLink[] = [
  { label: "About Us", href: "/about", key: "aboutUs" },
  { label: "Blog", href: "/blog", key: "blog" },
  { label: "Products", href: "/products", key: "productsLink" },
];

export const footerSupportLinks: FooterLink[] = [
  { label: "Customer Support", href: "/support", key: "customerSupport" },
  {
    label: "Warranty Information",
    href: "/support#warranty-info",
    key: "warrantyInfo",
  },
  { label: "FAQs", href: "/support#faq-accordion", key: "faqs" },
  { label: "Contact Us", href: "/support#contact-channels", key: "contactUs" },
];
