import type { Metadata } from "next";
import { Suspense } from "react";
import YtHero from '@/components/service-page-ui/Yt-Hero'
import YtHowitworks from '@/components/service-page-ui/Yt-Howitworks'
import YtPortfolio from '@/components/service-page-ui/Yt-Portfolio'
import YtResults from '@/components/service-page-ui/Yt-Results'
import YtTestimonials from '@/components/service-page-ui/YtTestimonials'
import YtPricing from '@/components/service-page-ui/Yt-Pricing'
import YtCalendly from '@/components/service-page-ui/YtCalendly'

export const metadata: Metadata = {
  title: "YouTube Growth | Organic Content Production",
  description: "Grow your YouTube channel and build organic authority. We handle scripting, production, SEO, and thumbnails — 4 premium videos per month.",
  keywords: "YouTube growth agency, organic content production, B2B YouTube, video SEO, content marketing",
  openGraph: {
    title: "YouTube Growth | Organic Content Production",
    description: "Grow your YouTube channel and build organic authority. We handle scripting, production, SEO, and thumbnails — 4 premium videos per month.",
    url: "https://materamedia.com/organic-content-youtube",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Growth | Organic Content Production",
    description: "Grow your YouTube channel and build organic authority. We handle scripting, production, SEO, and thumbnails — 4 premium videos per month.",
  },
  alternates: {
    canonical: "https://materamedia.com/organic-content-youtube",
  },
};

const SectionFallback = () => (
  <div className="w-full py-32 flex items-center justify-center">
    <div className="w-8 h-8 rounded-full border-2 border-emerald-400/30 border-t-emerald-400 animate-spin" />
  </div>
);

export default function Page() {
  return (
    <>
      <YtHero />
      <YtHowitworks />
      <YtPortfolio />
      <YtResults />
      <YtTestimonials />
      <YtPricing />
      <YtCalendly />
    </>
  );
}
