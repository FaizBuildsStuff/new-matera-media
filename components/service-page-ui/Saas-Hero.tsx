"use client";

import React from "react";
import {
  ArrowRight,
  Layers3,
  Sparkles,
  Zap,
} from "lucide-react";

const SaasHero = () => {
  return (
    <section className="relative overflow-hidden px-5 pt-28 pb-20 text-white sm:px-8 md:pt-32 lg:px-10 lg:pt-40 lg:pb-24">

      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none transform-gpu will-change-transform">

        {/* MASSIVE PURPLE/BLUE ATMOSPHERE */}
        <div
          className="absolute left-1/2 top-[-28%] h-[1000px] w-[1800px] -translate-x-1/2"
          style={{
            background: `
              radial-gradient(
                ellipse at center,
                rgba(139,92,246,0.18) 0%,
                rgba(59,130,246,0.12) 18%,
                rgba(168,85,247,0.06) 36%,
                rgba(255,255,255,0.02) 52%,
                transparent 76%
              )
            `,
            filter: "blur(50px)",
          }}
        />

        {/* LEFT BLUE CLOUD */}
        <div
          className="absolute left-[-12%] top-[8%] h-[620px] w-[620px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.10), transparent 72%)",
            filter: "blur(50px)",
          }}
        />

        {/* RIGHT PURPLE CLOUD */}
        <div
          className="absolute right-[-10%] top-[0%] h-[700px] w-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.12), transparent 72%)",
            filter: "blur(50px)",
          }}
        />

        {/* CENTER LIGHT */}
        <div
          className="absolute left-1/2 top-[28%] h-[260px] w-[700px] -translate-x-1/2"
          style={{
            background: `
              radial-gradient(
                ellipse,
                rgba(255,255,255,0.08),
                rgba(255,255,255,0.03),
                transparent 72%
              )
            `,
            filter: "blur(50px)",
          }}
        />

        {/* LIGHT BEAM */}
        <div
          className="absolute left-[-8%] top-[40%] h-[160px] w-[120%] rotate-[-8deg]"
          style={{
            background: `
              linear-gradient(
                to right,
                transparent,
                rgba(139,92,246,0.12),
                rgba(59,130,246,0.08),
                transparent
              )
            `,
            filter: "blur(50px)",
          }}
        />

        {/* SECOND BEAM */}
        <div
          className="absolute right-[-10%] top-[26%] h-[160px] w-[800px] rotate-[16deg]"
          style={{
            background: `
              linear-gradient(
                to right,
                transparent,
                rgba(255,255,255,0.05),
                transparent
              )
            `,
            filter: "blur(50px)",
          }}
        />

        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.022]"
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

        {/* FLOATING PARTICLES */}
        <div className="absolute left-[18%] top-[28%] h-2 w-2 rounded-full bg-blue-300 shadow-[0_0_20px_rgba(59,130,246,0.9)]" />

        <div className="absolute right-[20%] top-[20%] h-2.5 w-2.5 rounded-full bg-violet-300 shadow-[0_0_24px_rgba(168,85,247,0.9)]" />

        <div className="absolute left-[24%] bottom-[20%] h-2 w-2 rounded-full bg-white shadow-[0_0_16px_rgba(255,255,255,0.9)]" />

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
      <div className="relative z-20 mx-auto max-w-[1450px]">

        {/* TOP LABEL */}
        <div className="mb-8 flex justify-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/10 bg-white/[0.03] px-4 py-2 backdrop-blur-xl">

            <div className="h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_16px_rgba(168,85,247,1)]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/75">
              SAAS VIDEOS
            </span>
          </div>
        </div>

        {/* HERO */}
        <div className="text-center">


          {/* HEADING */}
          <h1 className="mx-auto max-w-[96%] text-center font-semibold leading-[1.02] tracking-[-0.045em] text-[2.2rem] sm:max-w-5xl sm:text-[3.4rem] sm:leading-[1] md:text-[4.4rem] lg:max-w-6xl lg:text-[5.2rem] lg:leading-[0.96]">

            <span className="block">
              Stop over-explaining your
            </span>

            {/* GRADIENT TEXT */}
            <span className="relative my-2 inline-block sm:my-3">

              {/* GLOW */}
              <span className="absolute inset-0 bg-gradient-to-r from-violet-400 via-blue-300 to-violet-400 opacity-20 blur-3xl" />

              <span className="relative bg-gradient-to-b from-white via-blue-100 to-violet-200 bg-clip-text text-transparent">
                Product and start turning it
              </span>
            </span>

            <span className="block">
              into videos people instantly
              <br className="hidden sm:block" />
              understand and want to buy.
            </span>
          </h1>

          {/* TEXT */}
          <p className="mx-auto mt-7 max-w-2xl text-[14px] leading-[1.8] text-white/45 sm:text-[16px]">
            We create SaaS videos that break down complex features into clear
            value so users understand faster, trust more, and convert better.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            {/* PRIMARY */}
            <button className="group relative overflow-hidden rounded-full bg-white px-6 py-4 text-black transition-all duration-500 hover:scale-[1.02]">

              {/* SHINE */}
              <div
                className="absolute left-[-30%] top-[-20%] h-[180px] w-[100px] rotate-[24deg] bg-white/40 blur-2xl transition-all duration-1000 group-hover:left-[120%]"
              />

              <div className="relative z-10 flex items-center gap-3">

                <span className="text-[10px] font-semibold uppercase tracking-[0.16em]">
                  Book A Free Call
                </span>

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white transition-all duration-500 group-hover:rotate-45">

                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaasHero;