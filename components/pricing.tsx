"use client";

import React from "react";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    title: "Youtube Growth",
    description:
      "This Plan is designed to Grow your Youtube and Deliver real results every month.",
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
      "HQ Motion Ad Creatives designed to stop the scroll and drop your CAC.",
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
      "A Launch Video designed for your Product or Feature release.",
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
    <section
      className="relative border-none outline-none px-6 py-20 sm:py-24 lg:py-28 text-white"
      aria-label="Pricing plans"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none transform-gpu will-change-transform">

        {/* MASSIVE TOP LIGHT */}
        <div
          className="absolute left-1/2 top-[-20%] h-[600px] w-[1200px] sm:h-[900px] sm:w-[1800px] -translate-x-1/2"
          style={{
            background: `
              radial-gradient(
                ellipse,
                rgba(255,255,255,0.08),
                rgba(16,185,129,0.05),
                transparent 72%
              )
            `,
            filter: "blur(80px)",
          }}
        />

        {/* CENTER EMERALD FIELD */}
        <div
          className="absolute left-1/2 top-[42%] h-[500px] w-[700px] sm:h-[800px] sm:w-[1100px] -translate-x-1/2 -translate-y-1/2"
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
            filter: "blur(100px)",
          }}
        />

        {/* LEFT SCULPTURE */}
        <div
          className="absolute left-[-18%] sm:left-[-10%] top-[10%] h-[500px] w-[300px] sm:h-[700px] sm:w-[420px] rotate-[-24deg] rounded-[999px] opacity-60"
          style={{
            background:
              "linear-gradient(to bottom, rgba(52,211,153,0.08), rgba(255,255,255,0.01))",
            filter: "blur(50px)",
            boxShadow: "0 0 120px rgba(52,211,153,0.12)",
          }}
        />

        {/* RIGHT SCULPTURE */}
        <div
          className="absolute right-[-16%] sm:right-[-8%] top-[16%] h-[550px] w-[320px] sm:h-[760px] sm:w-[460px] rotate-[22deg] rounded-[999px] opacity-60"
          style={{
            background:
              "linear-gradient(to bottom, rgba(45,212,191,0.08), rgba(255,255,255,0.01))",
            filter: "blur(55px)",
            boxShadow: "0 0 120px rgba(45,212,191,0.10)",
          }}
        />

        {/* CENTER GLOW */}
        <div
          className="absolute left-1/2 top-[52%] h-[350px] w-[350px] sm:h-[500px] sm:w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.06), transparent 72%)",
            filter: "blur(50px)",
          }}
        />

        {/* GRID */}
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
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-6xl">

        {/* TOP */}
        <div className="mb-12 sm:mb-14 text-center">

          <div className="mb-4 flex items-center justify-center gap-3">

            <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10">
              <Sparkles className="h-4 w-4 text-emerald-300" />
            </div>

            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-emerald-300">
              POPULAR PLANS
            </span>
          </div>

          <h2 className="mx-auto max-w-3xl text-[2.2rem] sm:text-[3rem] lg:text-[4rem] font-semibold leading-[1] tracking-[-0.05em] text-white">
            Pricing Plans
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-[14px] sm:text-[15px] leading-relaxed text-white/50">
            Flexible creative systems built for modern brands.
          </p>
        </div>

        {/* PLANS */}
        <div className="grid gap-5 xl:grid-cols-3">

          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative flex h-full flex-col overflow-hidden rounded-[28px] border backdrop-blur-2xl transition-all duration-500 ${plan.popular
                  ? "border-emerald-400/20 bg-white/[0.05]"
                  : "border-white/10 bg-white/[0.03]"
                }`}
            >



              {/* LIGHT */}
              <div
                className={`absolute left-1/2 top-[20%] h-[260px] w-[260px] -translate-x-1/2 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${plan.popular
                    ? "bg-emerald-400/15"
                    : "bg-white/[0.04]"
                  }`}
                style={{
                  filter: "blur(50px)",
                }}
              />

              {/* CONTENT */}
              <div className="relative z-10 flex h-full flex-col p-6 sm:p-7 pt-16">

                {/* TITLE */}
                <h3 className="text-[1.7rem] sm:text-[2.1rem] font-semibold leading-[1] tracking-[-0.05em] text-white">
                  {plan.title}
                </h3>

                {/* DESC */}
                <p className="mt-4 text-[14px] leading-relaxed text-white/50">
                  {plan.description}
                </p>

                {/* FEATURES */}
                <div className="mt-7 flex flex-1 flex-col gap-3">

                  {plan.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex min-h-[44px] items-start gap-3"
                    >

                      <div className="mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-400/10 shrink-0">

                        <Check className="h-2.5 w-2.5 text-emerald-300" />
                      </div>

                      <span className="text-[14px] leading-relaxed text-white/60">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* BUTTON */}
                <button
                  className={`group/button relative mt-8 flex h-[50px] sm:h-[54px] w-full items-center justify-center self-end items-center justify-center overflow-hidden rounded-full border text-[11px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${plan.popular
                      ? "border-white bg-white text-black hover:scale-[1.01]"
                      : "border-white/10 bg-white/[0.03] text-white hover:border-emerald-400/20 hover:bg-white/[0.05]"
                    }`}
                >

                  <div
                    className="absolute inset-[-20%] rounded-full opacity-0 transition-opacity duration-500 group-hover/button:opacity-100"
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
              <div className="pointer-events-none absolute inset-[1px] rounded-[27px] border border-white/[0.04]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;