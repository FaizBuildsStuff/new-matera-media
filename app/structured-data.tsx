// Structured data (JSON-LD) for rich search results
// Include this in layout.tsx <head> or per-page

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Matera Media",
  url: "https://materamedia.com",
  logo: "https://materamedia.com/Logo.png",
  description:
    "Matera Media helps B2B brands and content creators scale revenue through organic YouTube content and high-converting motion ad creatives.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    url: "https://calendly.com/m-faizurrehman-crypto/30min",
  },
  sameAs: [],
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "B2B Video Production & Ad Creatives",
  provider: {
    "@type": "Organization",
    name: "Matera Media",
  },
  serviceType: "Video Production",
  description:
    "Motion ad creatives, YouTube growth content, and SaaS explainer videos for B2B brands.",
  areaServed: "Worldwide",
};
