import type { Metadata } from "next";
import { Suspense } from "react";
import SaasHero from '@/components/service-page-ui/Saas-Hero'
import SaasPortfolio from '@/components/service-page-ui/Saas-Portfolio'
import SaasResults from '@/components/service-page-ui/Saas-Results'
import SaasProcess from '@/components/service-page-ui/Saas-Process'
import SaasPricing from '@/components/service-page-ui/Saas-Pricing'
import SaasCalendly from '@/components/service-page-ui/Saas-Calendly'

export const metadata: Metadata = {
  title: "SaaS Videos | Product & Explainer Video Production",
  description: "Launch videos, explainer videos, and product demos built for SaaS companies. Scripted, storyboarded, and produced to convert.",
  keywords: "SaaS video production, product launch video, explainer video, SaaS marketing, demo video",
  openGraph: {
    title: "SaaS Videos | Product & Explainer Video Production",
    description: "Launch videos, explainer videos, and product demos built for SaaS companies. Scripted, storyboarded, and produced to convert.",
    url: "https://materamedia.com/saas-videos",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS Videos | Product & Explainer Video Production",
    description: "Launch videos, explainer videos, and product demos built for SaaS companies. Scripted, storyboarded, and produced to convert.",
  },
  alternates: {
    canonical: "https://materamedia.com/saas-videos",
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
      <SaasHero />
      <SaasPortfolio />
      <SaasResults />
      <SaasProcess />
      <SaasPricing />
      <SaasCalendly />
    </>
  );
}
