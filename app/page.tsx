import { Suspense, lazy } from "react";
import Hero from "@/components/Hero";
import Testimonial from "@/components/testimonial";

// Lazy-load below-fold components to reduce initial bundle & improve LCP
const Workshowcase = lazy(() => import("@/components/Workshowcase"));
const Ourprocess = lazy(() => import("@/components/ourprocess"));
const Pricing = lazy(() => import("@/components/pricing"));
const Faq = lazy(() => import("@/components/faq"));
const Calendly = lazy(() => import("@/components/Calendly"));

const SectionFallback = () => (
  <div className="w-full py-32 flex items-center justify-center">
    <div className="w-8 h-8 rounded-full border-2 border-emerald-400/30 border-t-emerald-400 animate-spin" />
  </div>
);

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonial />
      <Suspense fallback={<SectionFallback />}>
        <Workshowcase />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Ourprocess />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Pricing />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Faq />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Calendly />
      </Suspense>
    </>
  );
}
