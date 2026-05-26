"use client";

import React from "react";
import {
  ArrowRight,
  Check,
  Sparkles,
  PlayCircle,
} from "lucide-react";

const features = [
  "4 Premium Long-Form Videos per Month",
  "Scripting & Creative Direction",
  "YouTube SEO Optimization",
  "4 Thumbnails (3 Variations Each)",
  "Monthly Performance Reports",
];

const YtPricing = () => {
  return (
    <section className="relative overflow-hidden py-14 text-white sm:py-16 md:py-18">

      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none transform-gpu will-change-transform">

        {/* MASSIVE RED ATMOSPHERE */}
        <div
          className="absolute left-1/2 top-[-30%] h-[950px] w-[1800px] -translate-x-1/2"
          style={{
            background: `
              radial-gradient(
                ellipse at center,
                rgba(255,0,76,0.14) 0%,
                rgba(255,40,40,0.07) 20%,
                rgba(255,255,255,0.02) 44%,
                transparent 74%
              )
            `,
            filter: "blur(50px)",
          }}
        />

        {/* LEFT GLOW */}
        <div
          className="absolute left-[-12%] top-[12%] h-[620px] w-[620px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,0,76,0.08), transparent 72%)",
            filter: "blur(50px)",
          }}
        />

        {/* RIGHT GLOW */}
        <div
          className="absolute right-[-10%] top-[0%] h-[720px] w-[720px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,40,40,0.08), transparent 72%)",
            filter: "blur(50px)",
          }}
        />

        {/* LIGHT CORE */}
        <div
          className="absolute left-1/2 top-[30%] h-[280px] w-[700px] -translate-x-1/2"
          style={{
            background: `
              radial-gradient(
                ellipse,
                rgba(255,255,255,0.06),
                rgba(255,0,76,0.03),
                transparent 72%
              )
            `,
            filter: "blur(50px)",
          }}
        />

        {/* LIGHT STREAK */}
        <div
          className="absolute left-[-10%] top-[45%] h-[180px] w-[760px] rotate-[18deg]"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(255,0,76,0.06), transparent)",
            filter: "blur(50px)",
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
      <div className="relative z-20 mx-auto max-w-[1350px] px-5 sm:px-8 lg:px-10">

        {/* TOP */}
        <div className="mb-12 text-center">

          {/* LABEL */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-400/10 bg-red-500/5 px-4 py-2 backdrop-blur-xl">

            <div className="h-2 w-2 rounded-full bg-red-400 shadow-[0_0_18px_rgba(255,0,76,1)]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-red-100">
              INVESTMENT
            </span>
          </div>

          {/* HEADING */}
          <h2 className="mx-auto max-w-4xl text-[2.1rem] font-semibold leading-[1] tracking-[-0.05em] sm:text-[2.8rem] lg:text-[3.4rem]">
            Plans For
            <br />

            <span className="bg-gradient-to-b from-white to-red-200 bg-clip-text text-transparent">
              Youtube Growth
            </span>
          </h2>

          {/* TEXT */}
          <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-[1.8] text-white/45 sm:text-[15px]">
            This plan is designed to grow your YouTube presence,
            build authority, and generate consistent inbound
            opportunities every month.
          </p>
        </div>

        {/* CARD */}
        <div className="group relative mx-auto max-w-[820px] overflow-hidden rounded-[32px] border border-white/[0.03] bg-white/[0.025] backdrop-blur-2xl transition-all duration-700 hover:border-red-400/12">

          {/* CARD GLOW */}
          <div
            className="absolute inset-0 opacity-0 transition-all duration-700 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(circle at top, rgba(255,0,76,0.10), transparent 72%)",
            }}
          />

          {/* TOP LIGHT */}
          <div
            className="absolute left-1/2 top-0 h-[160px] w-[420px] -translate-x-1/2"
            style={{
              background:
                "radial-gradient(ellipse, rgba(255,255,255,0.06), transparent 72%)",
              filter: "blur(50px)",
            }}
          />

          {/* SHINE */}
          <div
            className="absolute left-[-30%] top-[-20%] h-[320px] w-[120px] rotate-[24deg] opacity-0 transition-all duration-1000 group-hover:left-[120%] group-hover:opacity-100"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(255,255,255,0.10), transparent)",
              filter: "blur(20px)",
            }}
          />

          <div className="relative z-10 grid lg:grid-cols-[0.88fr_1.12fr]">

            {/* LEFT */}
            <div className="relative overflow-hidden border-b border-white/[0.03] p-6 md:p-8 lg:border-b-0 lg:border-r lg:border-white/[0.03]">

              {/* ICON */}
              <div className="relative mb-7 flex h-11 w-11 items-center justify-center rounded-[20px] border border-red-400/10 bg-red-500/5">

                <div className="absolute inset-0 rounded-[20px] bg-red-500/10 blur-xl" />

                <PlayCircle className="relative z-10 h-6 w-6 text-red-300" />
              </div>

              {/* PLAN */}
              <div className="inline-flex items-center gap-2 rounded-full border border-red-400/10 bg-red-500/5 px-3 py-1.5">

                <Sparkles className="h-3.5 w-3.5 text-red-300" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-red-100">
                  Growth System
                </span>
              </div>

              {/* TITLE */}
              <h3 className="mt-5 text-[2.2rem] font-semibold leading-[0.95] tracking-[-0.05em] sm:text-[2.6rem]">
                YouTube
                <br />
                Growth
              </h3>

              {/* DESC */}
              <p className="mt-4 max-w-sm text-[13px] leading-[1.75] text-white/45">
                Premium long-form content designed to increase authority,
                grow reach, and convert viewers into qualified clients.
              </p>
            </div>

            {/* RIGHT */}
            <div className="p-6 md:p-8">

              {/* FEATURES */}
              <div className="space-y-3">

                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group/item flex items-start gap-3 rounded-[20px] border border-white/[0.04] bg-white/[0.02] p-4 transition-all duration-500 hover:border-red-400/10 hover:bg-red-500/[0.03]"
                  >

                    {/* ICON */}
                    <div className="relative mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-red-400/10 bg-red-500/5">

                      <div className="absolute inset-0 rounded-full bg-red-500/10 blur-lg" />

                      <Check className="relative z-10 h-4 w-4 text-red-300" />
                    </div>

                    {/* TEXT */}
                    <p className="text-[13px] leading-[1.7] text-white/85">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              {/* BUTTON */}
              <button className="group/button mt-7 flex w-full items-center justify-between rounded-full border border-red-400/10 bg-red-500 px-5 py-4 transition-all duration-500 hover:scale-[1.01]">

                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                  I Need This
                </span>

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition-all duration-500 group-hover/button:rotate-45">

                  <ArrowRight className="h-4 w-4" />
                </div>
              </button>
            </div>
          </div>

          {/* EDGE LIGHT */}
          <div className="absolute inset-0 rounded-[32px] border border-white/[0.03]" />
        </div>
      </div>
    </section>
  );
};

export default YtPricing;