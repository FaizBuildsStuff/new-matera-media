import type { Metadata } from "next";
import { Suspense } from "react";
import AdHero from '@/components/service-page-ui/Ad-hero'
import Adportfolio from '@/components/service-page-ui/Ad-portfolio'
import Adsolutionproblem from '@/components/service-page-ui/Ad-solution-problem'
import AdResults from '@/components/service-page-ui/Ad-results'
import AdProcess from '@/components/service-page-ui/Ad-Process'
import AdPricing from '@/components/service-page-ui/Ad-Pricing'
import AdCalendly from '@/components/service-page-ui/Ad-Calendly'

export const metadata: Metadata = {
  title: "Ad Creatives | Motion Ad Creative Production",
  description: "High-converting motion ad creatives designed to stop the scroll and reduce your CAC. UGC, hooks, and full funnel ad production for B2B brands.",
  keywords: "motion ad creatives, UGC ads, B2B ad production, video ad creatives, performance ads",
  openGraph: {
    title: "Ad Creatives | Motion Ad Creative Production",
    description: "High-converting motion ad creatives designed to stop the scroll and reduce your CAC. UGC, hooks, and full funnel ad production for B2B brands.",
    url: "https://materamedia.com/ad-creatives",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ad Creatives | Motion Ad Creative Production",
    description: "High-converting motion ad creatives designed to stop the scroll and reduce your CAC. UGC, hooks, and full funnel ad production for B2B brands.",
  },
  alternates: {
    canonical: "https://materamedia.com/ad-creatives",
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
      <AdHero />
      <Adportfolio />
      <Adsolutionproblem />
      <AdResults />
      <AdProcess />
      <AdPricing />
      <AdCalendly />
    </>
  );
}
