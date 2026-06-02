"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Check,
    Sparkles,
} from "lucide-react";

const plans = [
  {
    title: "Product Launch Video",
    description:
      "A high-impact launch video crafted to introduce your product, generate excitement, and drive conversions.",

    features: [
      "30–45 Sec Launch Video",
      "Scripting & Creative Direction",
      "Storyboarding",
      "Voiceover Included",
    ],

    badge: "Launch Package",
  },

  {
    title: "Product Explainer Video",
    description:
      "A detailed walkthrough designed to clearly communicate your product's value and functionality.",

    features: [
      "60 Sec Product Walkthrough",
      "Scripting & Creative Direction",
      "Storyboarding",
      "Voiceover Included",
    ],

    badge: "Explainer Package",
  },
];

const SaasPricing = () => {
    return (
        <section className="relative py-14 text-white sm:py-16 md:py-18 overflow-x-clip">

            {/* BACKGROUND */}
            <div className="absolute inset-0 pointer-events-none transform-gpu will-change-transform">

                {/* MAIN AURORA */}
                <div
                    className="absolute left-1/2 top-[-22%] h-[950px] w-[1800px] -translate-x-1/2"
                    style={{
                        background: `
 radial-gradient(
 ellipse at center,
 rgba(139,92,246,0.16) 0%,
 rgba(99,102,241,0.10) 18%,
 rgba(59,130,246,0.06) 34%,
 rgba(255,255,255,0.02) 50%,
 transparent 74%
 )
 `,
                        filter: "blur(90px)",
                    }}
                />
                <div
  className="absolute left-1/2 top-[25%] h-[900px] w-[900px] -translate-x-1/2 rounded-full"
  style={{
    background:
      "radial-gradient(circle, rgba(168,85,247,0.14), transparent 70%)",
    filter: "blur(150px)",
  }}
/>

<div
  className="absolute left-[10%] top-[35%] h-[600px] w-[600px] rounded-full"
  style={{
    background:
      "radial-gradient(circle, rgba(6,182,212,0.10), transparent 70%)",
    filter: "blur(120px)",
  }}
/>

<div
  className="absolute right-[8%] top-[10%] h-[700px] w-[700px] rounded-full"
  style={{
    background:
      "radial-gradient(circle, rgba(99,102,241,0.10), transparent 70%)",
    filter: "blur(140px)",
  }}
/>

                {/* LEFT LIGHT */}
                <div
                    className="absolute left-[-12%] top-[18%] h-[620px] w-[620px] rounded-full"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(6,182,212,0.10), transparent 72%)",
                        filter: "blur(90px)",
                    }}
                />

                {/* RIGHT LIGHT */}
                <div
                    className="absolute right-[-12%] top-[0%] h-[720px] w-[720px] rounded-full"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(168,85,247,0.12), transparent 72%)",
                        filter: "blur(90px)",
                    }}
                />

                {/* CENTER FOG */}
                <div
                    className="absolute left-1/2 top-[42%] h-[520px] w-[520px] -translate-x-1/2 rounded-full"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(255,255,255,0.03), transparent 72%)",
                        filter: "blur(90px)",
                    }}
                />

                {/* LIGHT STREAK */}
                <div
                    className="absolute left-[-10%] top-[42%] h-[180px] w-[120%] rotate-[-8deg]"
                    style={{
                        background: `
 linear-gradient(
 to right,
 transparent,
 rgba(139,92,246,0.10),
 rgba(59,130,246,0.05),
 transparent
 )
 `,
                        filter: "blur(90px)",
                    }}
                />

                {/* GRID */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
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

                {/* GRAIN */}
                <div
                    className="absolute inset-0 opacity-[0.10] mix-blend-soft-light"
                    style={{
                        backgroundImage:
                            "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
                    }}
                />

                {/* BOTTOM BLEND */}
                <div
                    className="absolute bottom-[-10%] left-0 h-[40%] w-full"
                    style={{
                        background:
                            "linear-gradient(to top, rgba(0,0,0,0.92), rgba(0,0,0,0.58), transparent)",
                        filter: "blur(20px)",
                    }}
                />
            </div>

            {/* CONTENT */}
            <div className="relative z-20 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">

                {/* HEADING */}
                <div className="mb-20 text-center">

  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-5 py-2 backdrop-blur-3xl">

    <div className="h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_20px_rgba(168,85,247,1)]"/>

    <span className="text-[10px] uppercase tracking-[0.35em] text-white/70">
      PRODUCT LAUNCH PACKAGE
    </span>

  </div>

  <h2 className="mt-8 text-5xl md:text-7xl font-semibold tracking-[-0.08em]">

    Launch With

    <span className="block bg-gradient-to-b from-white via-blue-100 to-violet-200 bg-clip-text text-transparent">
      Maximum Impact
    </span>

  </h2>

  <p className="mx-auto mt-8 max-w-2xl text-white/50 leading-8">
    Designed for startups, SaaS products and modern brands that want a launch video that actually converts.
  </p>

</div>

                {/* CARDS */}
                <div className="grid gap-6 lg:grid-cols-2">

  {plans.map((plan, index) => (

    <div
      key={index}
      className="group relative overflow-hidden rounded-[40px] border border-white/[0.08] bg-white/[0.03] backdrop-blur-[60px]"
    >

      {/* Aurora Glow */}
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background:
            index === 0
              ? `
              radial-gradient(
                circle at top right,
                rgba(168,85,247,0.14),
                transparent 50%
              ),
              radial-gradient(
                circle at bottom left,
                rgba(6,182,212,0.12),
                transparent 50%
              )
            `
              : `
              radial-gradient(
                circle at top left,
                rgba(99,102,241,0.14),
                transparent 50%
              ),
              radial-gradient(
                circle at bottom right,
                rgba(6,182,212,0.12),
                transparent 50%
              )
            `,
        }}
      />

      {/* Glass Reflection */}
      <div
        className="absolute top-0 left-0 h-[1px] w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)",
        }}
      />

      <div className="relative z-10 p-8 md:p-10">

        <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2">

          <Sparkles className="h-4 w-4 text-violet-200" />

          <span className="text-[10px] uppercase tracking-[0.2em]">
            {plan.badge}
          </span>

        </div>

        <h3 className="mt-8 text-3xl md:text-5xl font-semibold tracking-[-0.06em]">
          {plan.title}
        </h3>

        <p className="mt-5 text-white/55 leading-8">
          {plan.description}
        </p>

        <div className="mt-8 space-y-3">

          {plan.features.map((feature, i) => (

            <div
              key={i}
              className="flex items-center gap-4 rounded-[20px] border border-white/[0.06] bg-white/[0.02] p-4 transition-all duration-500 hover:border-violet-400/20 hover:bg-white/[0.04]"
            >

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-500/10">

                <Check className="h-4 w-4 text-violet-200" />

              </div>

              <span className="text-white/80">
                {feature}
              </span>

            </div>

          ))}

        </div>

        <button className="mt-8 w-full rounded-2xl bg-gradient-to-r from-violet-400 to-blue-400 py-5 font-semibold text-black transition-all duration-500 hover:scale-[1.02]">

          Book This Package

        </button>

      </div>

    </div>

  ))}

</div>
            </div>
        </section>
    );
};

export default SaasPricing;