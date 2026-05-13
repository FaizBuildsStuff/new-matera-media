"use client";

import React from "react";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    title: "Youtube Growth",
    description:
      "Designed to grow your YouTube presence with cinematic long-form content systems.",
    features: [
      "4 Premium Long-Form Videos per Month",
      "Scripting & Creative Direction",
      "YouTube SEO Optimization",
      "4 Thumbnails (3 Variations Each)",
      "Monthly Performance Reports",
    ],
    popular: false,
  },
  {
    title: "Winner Ad Creatives",
    description:
      "High-converting motion ad creatives engineered to stop the scroll and scale your CAC.",
    features: [
      "10 Motion Ad Creatives",
      "Multiple Hook Variations",
      "Winning Scripts + Creative Direction",
      "Performance Tracking",
      "Voiceover Included",
    ],
    popular: true,
  },
  {
    title: "Product Launch Video",
    description:
      "Premium launch visuals designed to make your product feel world-class.",
    features: [
      "30–45 Sec Launch Video",
      "Scripting & Creative Direction",
      "Storyboarding",
      "Voiceover Included",
      "Interactive Product Tours",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section className="relative overflow-hidden border-none outline-none bg-[#030303] px-6 py-40 text-white">

      {/* BACKGROUND */}
<div className="absolute inset-0 overflow-hidden">

  {/* BASE */}
  <div className="absolute inset-0 bg-[#030303]" />
  
  {/* TOP SHROUD */}
  <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#030303] to-transparent z-[45] pointer-events-none" />

  {/* MASSIVE TOP LIGHT */}
  <div
    className="absolute left-1/2 top-[-20%] h-[900px] w-[1800px] -translate-x-1/2"
    style={{
      background: `
        radial-gradient(
          ellipse,
          rgba(255,255,255,0.08),
          rgba(16,185,129,0.05),
          transparent 72%
        )
      `,
      filter: "blur(120px)",
    }}
  />

  {/* CENTER EMERALD FIELD */}
  <div
    className="absolute left-1/2 top-[42%] h-[1200px] w-[1600px] -translate-x-1/2 -translate-y-1/2"
    style={{
      background: `
        radial-gradient(
          ellipse,
          rgba(16,185,129,0.12) 0%,
          rgba(45,212,191,0.06) 28%,
          rgba(255,255,255,0.015) 42%,
          transparent 72%
        )
      `,
      filter: "blur(160px)",
    }}
  />

  {/* LEFT SCULPTURE */}
  <div
    className="absolute left-[-8%] top-[12%] h-[700px] w-[420px] rotate-[-24deg] rounded-[120px]"
    style={{
      background:
        "linear-gradient(to bottom, rgba(255,255,255,0.05), rgba(255,255,255,0.01))",
      border: "1px solid rgba(255,255,255,0.06)",
      backdropFilter: "blur(10px)",
      boxShadow: "0 0 120px rgba(52,211,153,0.08)",
    }}
  />

  {/* RIGHT SCULPTURE */}
  <div
    className="absolute right-[-6%] top-[18%] h-[760px] w-[460px] rotate-[22deg] rounded-[140px]"
    style={{
      background:
        "linear-gradient(to bottom, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
      border: "1px solid rgba(255,255,255,0.05)",
      backdropFilter: "blur(12px)",
      boxShadow: "0 0 120px rgba(45,212,191,0.08)",
    }}
  />

  {/* CENTER GLOW DISC */}
  <div
    className="absolute left-1/2 top-[52%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full"
    style={{
      background:
        "radial-gradient(circle, rgba(255,255,255,0.06), transparent 72%)",
      filter: "blur(80px)",
    }}
  />

  {/* HUGE SOFT RING */}
  <div className="absolute left-1/2 top-[50%] h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.03]" />

  {/* SECOND RING */}
  <div className="absolute left-1/2 top-[50%] h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400/[0.04]" />

  {/* LIGHT STREAK */}
  <div
    className="absolute left-1/2 top-[30%] h-[1px] w-[70%] -translate-x-1/2"
    style={{
      background:
        "linear-gradient(to right, transparent, rgba(255,255,255,0.12), transparent)",
      boxShadow: "0 0 40px rgba(255,255,255,0.08)",
    }}
  />

  {/* SECOND LIGHT STREAK */}
  <div
    className="absolute left-1/2 top-[68%] h-[1px] w-[60%] -translate-x-1/2"
    style={{
      background:
        "linear-gradient(to right, transparent, rgba(52,211,153,0.14), transparent)",
      boxShadow: "0 0 40px rgba(52,211,153,0.1)",
    }}
  />

  {/* LEFT LIGHT CLOUD */}
  <div
    className="absolute left-[-15%] top-[20%] h-[800px] w-[800px]"
    style={{
      background:
        "radial-gradient(circle, rgba(52,211,153,0.08), transparent 72%)",
      filter: "blur(160px)",
    }}
  />

  {/* RIGHT LIGHT CLOUD */}
  <div
    className="absolute right-[-10%] top-[22%] h-[900px] w-[900px]"
    style={{
      background:
        "radial-gradient(circle, rgba(45,212,191,0.08), transparent 72%)",
      filter: "blur(170px)",
    }}
  />

  {/* FLOATING LIGHT DOTS */}
  <div className="absolute left-[16%] top-[22%] h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_30px_rgba(52,211,153,0.9)]" />

  <div className="absolute right-[18%] top-[28%] h-2 w-2 rounded-full bg-teal-300 shadow-[0_0_30px_rgba(45,212,191,0.9)]" />

  <div className="absolute left-[24%] bottom-[18%] h-2 w-2 rounded-full bg-white shadow-[0_0_25px_rgba(255,255,255,0.8)]" />

  <div className="absolute right-[22%] bottom-[20%] h-3 w-3 rounded-full bg-emerald-300 shadow-[0_0_30px_rgba(52,211,153,0.9)]" />

  {/* SOFT GRID - Size/Opacity matched with Hero */}
  <div
    className="absolute inset-0 opacity-[0.03]"
    style={{
      backgroundImage: `
        linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
      `,
      backgroundSize: "90px 90px",
      maskImage:
        "radial-gradient(circle at center, black, transparent 82%)",
    }}
  />

  {/* NOISE */}
  <div
    className="absolute inset-0 opacity-[0.035] mix-blend-soft-light"
    style={{
      backgroundImage:
        "url('https://www.transparenttextures.com/patterns/noise.png')",
    }}
  />

  {/* VIGNETTE - Blended for continuity */}
  <div
    className="absolute inset-0"
    style={{
      background:
        "radial-gradient(circle at center, transparent 35%, rgba(0,0,0,0.82) 100%)",
      maskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent 100%)"
    }}
  />
  
  {/* BOTTOM SHROUD */}
  <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#030303] to-transparent z-[45] pointer-events-none" />
</div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* TOP */}
        <div className="mb-24 text-center">

          {/* LABEL */}
          <div className="mb-5 flex items-center justify-center gap-3">

            <div className="flex h-9 w-9 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10">
              <Sparkles className="h-4 w-4 text-emerald-300" />
            </div>

            <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-emerald-300">
              POPULAR PLANS
            </span>
          </div>

          {/* HEADING */}
          <h2 className="mx-auto max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-white md:text-7xl">
            Premium Creative
            <br />
            Growth Systems.
          </h2>

          {/* SUBTEXT */}
          <p className="mx-auto mt-8 max-w-2xl text-[17px] leading-relaxed text-white/45">
            Every plan is engineered to combine cinematic storytelling,
            performance-focused strategy, and world-class execution.
          </p>
        </div>

        {/* PLANS */}
        <div className="grid gap-8 xl:grid-cols-3">

          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-[42px] border backdrop-blur-3xl transition-all duration-700 ${
                plan.popular
                  ? "border-emerald-400/30 bg-white/[0.05] xl:-translate-y-5"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >

              {/* POPULAR BADGE */}
              {plan.popular && (
                <div className="absolute left-1/2 top-0 z-30 -translate-x-1/2">

                  <div className="rounded-b-2xl border border-t-0 border-emerald-400/20 bg-emerald-400 px-8 py-3 shadow-[0_0_60px_rgba(52,211,153,0.6)]">

                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-black">
                      Most Demanded
                    </span>
                  </div>
                </div>
              )}

              {/* SHINING LIGHT */}
              <div
                className={`absolute left-1/2 top-[20%] h-[320px] w-[320px] -translate-x-1/2 rounded-full opacity-0 transition-opacity duration-700 group-hover:opacity-100 ${
                  plan.popular
                    ? "bg-emerald-400/20"
                    : "bg-white/[0.06]"
                }`}
                style={{
                  filter: "blur(100px)",
                }}
              />

              {/* TOP SHINE */}
              <div
                className="absolute left-[-20%] top-0 h-[1px] w-[140%] rotate-[8deg] bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />

              {/* CONTENT */}
              <div className="relative z-10 p-10 pt-14">

                {/* TITLE */}
                <h3 className="text-4xl font-semibold leading-[1] tracking-[-0.06em] text-white">
                  {plan.title}
                </h3>

                {/* DESC */}
                <p className="mt-6 text-[15px] leading-relaxed text-white/45">
                  {plan.description}
                </p>

                {/* FEATURES */}
                <div className="mt-12 space-y-5">

                  {plan.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4"
                    >

                      {/* ICON */}
                      <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/10">

                        <Check className="h-3.5 w-3.5 text-emerald-300" />
                      </div>

                      {/* TEXT */}
                      <span className="text-[15px] leading-relaxed text-white/60">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* BUTTON */}
                <button
                  className={`group/button relative mt-14 flex h-[62px] w-full items-center justify-center overflow-hidden rounded-full border text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-500 ${
                    plan.popular
                      ? "border-white bg-white text-black hover:scale-[1.02]"
                      : "border-white/10 bg-white/[0.03] text-white hover:border-emerald-400/20 hover:bg-white/[0.05]"
                  }`}
                >

                  {/* BUTTON GLOW */}
                  <div
                    className="absolute inset-[-20%] rounded-full opacity-0 transition-opacity duration-700 group-hover/button:opacity-100"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(52,211,153,0.18), transparent 70%)",
                      filter: "blur(40px)",
                    }}
                  />

                  <span className="relative z-10">
                    I Need This
                  </span>
                </button>
              </div>

              {/* INNER BORDER */}
              <div className="pointer-events-none absolute inset-[1px] rounded-[41px] border border-white/[0.04]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;