"use client";

import React from "react";
import {
  ArrowUpRight,
  Circle,
  Play,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const floatingCards = [
  {
    title: "Qualified Calls",
    value: "20+ / Month",
    icon: TrendingUp,
    position: "top-[14%] left-[5%] md:left-[8%]",
  },
  {
    title: "Organic Reach",
    value: "4.2M Views",
    icon: Circle,
    position: "bottom-[18%] left-[4%] md:left-[10%]",
  },
  {
    title: "Revenue Engine",
    value: "Automated",
    icon: Sparkles,
    position: "top-[18%] right-[5%] md:right-[8%]",
  },
];

const YtHero = () => {
  return (
    <section className="relative overflow-hidden pt-28 text-white md:pt-36">

      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none transform-gpu will-change-transform">

        {/* MASSIVE RED ATMOSPHERE */}
        <div
          className="absolute left-1/2 top-[-30%] h-[900px] w-[1700px] -translate-x-1/2"
          style={{
            background: `
              radial-gradient(
                ellipse at center,
                rgba(255,0,55,0.20) 0%,
                rgba(255,40,40,0.10) 20%,
                rgba(255,90,90,0.05) 38%,
                rgba(255,255,255,0.02) 52%,
                transparent 72%
              )
            `,
            filter: "blur(50px)",
          }}
        />

        {/* LEFT GLOW */}
        <div
          className="absolute left-[-12%] top-[12%] h-[650px] w-[650px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,0,76,0.16), rgba(255,0,55,0.05), transparent 72%)",
            filter: "blur(50px)",
          }}
        />

        {/* RIGHT GLOW */}
        <div
          className="absolute right-[-12%] top-[2%] h-[720px] w-[720px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,40,40,0.14), rgba(255,0,76,0.05), transparent 72%)",
            filter: "blur(50px)",
          }}
        />

        {/* CENTER LIGHT */}
        <div
          className="absolute left-1/2 top-[18%] h-[500px] w-[1100px] -translate-x-1/2"
          style={{
            background: `
              radial-gradient(
                ellipse,
                rgba(255,255,255,0.05),
                rgba(255,40,40,0.03),
                transparent 72%
              )
            `,
            filter: "blur(50px)",
          }}
        />

        {/* LIGHT RINGS */}
        <div className="absolute left-1/2 top-[38%] h-[850px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.025]" />

        <div className="absolute left-1/2 top-[38%] h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-400/[0.04]" />

        {/* LIGHT BEAMS */}
        <div
          className="absolute left-[10%] top-0 h-[82%] w-px opacity-40"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(255,0,76,0.16), transparent)",
            boxShadow: "0 0 30px rgba(255,0,76,0.18)",
          }}
        />

        <div
          className="absolute right-[10%] top-0 h-[82%] w-px opacity-30"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(255,40,40,0.16), transparent)",
            boxShadow: "0 0 30px rgba(255,40,40,0.18)",
          }}
        />

        {/* PARTICLES */}
        <div className="absolute left-[14%] top-[24%] h-2.5 w-2.5 rounded-full bg-red-400 shadow-[0_0_30px_rgba(255,0,76,1)]" />

        <div className="absolute right-[16%] top-[32%] h-2 w-2 rounded-full bg-red-300 shadow-[0_0_30px_rgba(255,40,40,1)]" />

        <div className="absolute left-[20%] bottom-[18%] h-2 w-2 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)]" />

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

        {/* GRAIN */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.04) 0.8px, transparent 0.8px)",
            backgroundSize: "4px 4px",
            mixBlendMode: "soft-light",
          }}
        />

        {/* BOTTOM BLEND */}
        <div
          className="absolute bottom-[-10%] left-0 h-[40%] w-full"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.92), rgba(0,0,0,0.65), transparent)",
            filter: "blur(20px)",
          }}
        />
      </div>

      {/* FLOATING CARDS */}
      {floatingCards.map((card, index) => {
        const Icon = card.icon;

        return (
          <div
            key={index}
            className={`absolute z-20 hidden lg:block ${card.position}`}
          >

            <div className="group relative overflow-hidden rounded-[22px] border border-white/[0.05] bg-white/[0.025] px-5 py-4 backdrop-blur-2xl">

              {/* GLOW */}
              <div
                className="absolute inset-0 opacity-0 transition-all duration-700 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(255,0,76,0.12), transparent 72%)",
                }}
              />

              <div className="relative z-10 flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10">

                  <Icon className="h-5 w-5 text-red-300" />
                </div>

                <div>

                  <p className="text-[13px] text-white/45">
                    {card.title}
                  </p>

                  <h4 className="mt-1 text-[15px] font-semibold">
                    {card.value}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* CONTENT */}
      <div className="relative z-30 mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-10">

        <div className="flex min-h-[88vh] flex-col items-center justify-center text-center">

          {/* LABEL */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-400/10 bg-red-500/5 px-4 py-2 backdrop-blur-xl">

            <div className="h-2 w-2 rounded-full bg-red-400 shadow-[0_0_18px_rgba(255,0,76,1)]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-red-200">
              ORGANIC CONTENT / YOUTUBE
            </span>
          </div>

          {/* HEADING */}
          <h1 className="max-w-5xl text-[2.3rem] font-semibold leading-[1.02] tracking-[-0.045em] sm:text-[3.8rem] sm:leading-[1] lg:text-[5rem] lg:leading-[0.98]">
            Stop posting for views and
            <br />

            {/* SELECTED TEXT */}
            <span className="relative inline-flex items-center px-3 py-1.5 md:px-5 md:py-2">

              {/* GLOW */}
              <div className="absolute inset-0 rounded-[18px] bg-red-500/10 blur-2xl" />

              {/* SELECTION */}
              <div className="absolute inset-0 rounded-[18px] border border-red-400/30 bg-red-500/[0.03] backdrop-blur-xl">

                <div className="absolute -left-[3px] -top-[3px] h-[8px] w-[8px] rounded-[2px] bg-red-400 shadow-[0_0_14px_rgba(255,0,76,1)]" />

                <div className="absolute -right-[3px] -top-[3px] h-[8px] w-[8px] rounded-[2px] bg-red-400 shadow-[0_0_14px_rgba(255,0,76,1)]" />

                <div className="absolute -bottom-[3px] -left-[3px] h-[8px] w-[8px] rounded-[2px] bg-red-400 shadow-[0_0_14px_rgba(255,0,76,1)]" />

                <div className="absolute -bottom-[3px] -right-[3px] h-[8px] w-[8px] rounded-[2px] bg-red-400 shadow-[0_0_14px_rgba(255,0,76,1)]" />
              </div>

              {/* CURSOR */}
              <div className="absolute -right-5 -top-3 rotate-[-18deg]">

                <div className="relative flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur-xl">

                  <div className="absolute inset-0 rounded-full bg-red-500/10 blur-xl" />

                  <svg
                    viewBox="0 0 24 24"
                    fill="white"
                    className="relative z-10 h-3 w-3"
                  >
                    <path d="M5 3L19 12L13 13L15 21L12.5 22L10.5 14.5L5 18V3Z" />
                  </svg>
                </div>
              </div>

              {/* TEXT */}
              <span className="relative z-10 bg-gradient-to-b from-white via-red-100 to-red-300 bg-clip-text text-transparent">
                start building a
              </span>
            </span>

            <br />

            YouTube Revenue Engine
            <br />
            that fills your calendar on autopilot.
          </h1>

          {/* TEXT */}
          <p className="mx-auto mt-7 max-w-3xl text-[14px] leading-[1.8] text-white/50 sm:text-[16px]">
            We install a custom YouTube Organic + Paid funnel designed to turn
            cold viewers into high-ticket clients. Stop guessing with your
            content and start booking
            <span className="text-white"> 20+ qualified calls </span>
            every single month with a proven system.
          </p>

          {/* BUTTON */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <button className="group relative overflow-hidden rounded-full border border-red-400/10 bg-red-500 px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-white transition-all duration-500 hover:scale-[1.02]">

              <div
                className="absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(120deg, rgba(255,255,255,0.18), transparent)",
                }}
              />

              <div className="relative z-10 flex items-center gap-3">

                <span>BOOK A FREE CALL</span>

                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-red-500">

                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </button>
          </div>

          {/* VIDEO */}
          <div className="relative mt-16 w-full max-w-[980px]">

            {/* OUTER GLOW */}
            <div
              className="absolute inset-[-30px] rounded-[40px]"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,0,76,0.16), transparent 72%)",
                filter: "blur(50px)",
              }}
            />

            {/* FRAME */}
            <div className="relative overflow-hidden rounded-[28px] border border-white/[0.05] bg-white/[0.025] p-2.5 backdrop-blur-2xl">

              <div className="relative overflow-hidden rounded-[22px] border border-white/[0.04]">

                {/* IMAGE */}
                <img
                  src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?q=80&w=1600&auto=format&fit=crop"
                  alt="YouTube"
                  className="h-[240px] w-full object-cover md:h-[520px]"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/35" />

                {/* PLAY */}
                <button className="group absolute left-1/2 top-1/2 flex h-[100px] w-[100px] -translate-x-1/2 -translate-y-1/2 items-center justify-center">

                  {/* RING */}
                  <div className="absolute inset-0 rounded-full border border-red-400/20 bg-red-500/10 backdrop-blur-3xl" />

                  {/* MIDDLE */}
                  <div className="absolute inset-[14px] rounded-full bg-white/10" />

                  {/* INNER */}
                  <div className="relative z-10 flex h-[58px] w-[58px] items-center justify-center rounded-full bg-white transition-all duration-500 group-hover:scale-110">

                    <Play className="ml-1 h-5 w-5 fill-black text-black" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YtHero;