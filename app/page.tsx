"use client";

import Calendly from "@/components/Calendly";
import Faq from "@/components/faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ourprocess from "@/components/ourprocess";
import Pricing from "@/components/pricing";
import Testimonial from "@/components/testimonial";
import Workshowcase from "@/components/Workshowcase";

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonial />
      <Workshowcase />
      <Ourprocess />
      <Pricing />
      <Faq />
      <Calendly />
    </>
  );
}