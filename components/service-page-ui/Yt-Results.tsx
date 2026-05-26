"use client";

import React from "react";
import {
  ArrowUpRight,
  Eye,
  TrendingUp,
  Users,
  Play,
} from "lucide-react";

const results = [
  {
    title: "Personal Brand Growth",
    stats: "4.8M Views",
    growth: "+312%",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1400&auto=format&fit=crop",
    description:
      "Built a content funnel that turned organic YouTube traffic into booked consulting calls every week.",
  },
  {
    title: "B2B SaaS Funnel",
    stats: "120+ Calls",
    growth: "+210%",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop",
    description:
      "Scaled a B2B SaaS creator channel using long-form content, paid retargeting, and short-form clips.",
  },
  {
    title: "Coaching Creator",
    stats: "2.1M Reach",
    growth: "+180%",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1400&auto=format&fit=crop",
    description:
      "Turned a small coaching audience into a high-ticket acquisition machine with consistent publishing.",
  },
];

const metrics = [
  {
    value: "45M+",
    label: "Organic Views Generated",
    icon: Eye,
  },
  {
    value: "280+",
    label: "Qualified Calls Booked",
    icon: Users,
  },
  {
    value: "12+",
    label: "Channels Scaled",
    icon: TrendingUp,
  },
];

const YtResults = () => {
  return (
    <section className="relative overflow-hidden py-14 text-white sm:py-16 md:py-18">

      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none transform-gpu will-change-transform">

        {/* MASSIVE CENTER ATMOSPHERE */}
        <div
          className="absolute left-1/2 top-[-28%] h-[950px] w-[1800px] -translate-x-1/2"
          style={{
            background: `
              radial-gradient(
                ellipse at center,
                rgba(255,0,76,0.14) 0%,
                rgba(255,40,40,0.06) 22%,
                rgba(255,255,255,0.02) 42%,
                transparent 72%
              )
            `,
            filter: "blur(50px)",
          }}
        />

        {/* LEFT GLOW */}
        <div
          className="absolute left-[-10%] top-[18%] h-[620px] w-[620px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,0,76,0.08), transparent 72%)",
            filter: "blur(50px)",
          }}
        />

        {/* RIGHT GLOW */}
        <div
          className="absolute right-[-12%] top-[0%] h-[700px] w-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,40,40,0.08), transparent 72%)",
            filter: "blur(50px)",
          }}
        />

        {/* LIGHT STREAK */}
        <div
          className="absolute left-[-10%] top-[40%] h-[180px] w-[700px] rotate-[18deg]"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(255,0,76,0.08), transparent)",
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
          className="absolute inset-0 opacity-[0.10]"
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
              "linear-gradient(to top, rgba(0,0,0,0.92), rgba(0,0,0,0.58), transparent)",
            filter: "blur(20px)",
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-20 mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-10">

        {/* TOP */}
        <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

          {/* LEFT */}
          <div>

            {/* LABEL */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-400/10 bg-red-500/5 px-4 py-2 backdrop-blur-xl">

              <div className="h-2 w-2 rounded-full bg-red-400 shadow-[0_0_18px_rgba(255,0,76,1)]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-red-100">
                RESULTS & CASE STUDIES
              </span>
            </div>

            {/* HEADING */}
            <h2 className="max-w-4xl text-[2.1rem] font-semibold leading-[1] tracking-[-0.05em] sm:text-[2.8rem] lg:text-[3.4rem]">
              Real Growth.
              <br />

              <span className="bg-gradient-to-b from-white to-red-200 bg-clip-text text-transparent">
                Real Revenue Systems.
              </span>
            </h2>
          </div>

          {/* RIGHT TEXT */}
          <p className="max-w-sm text-[14px] leading-[1.8] text-white/45 sm:text-[15px]">
            We build systems that generate attention, trust, and inbound clients consistently.
          </p>
        </div>

        {/* METRICS */}
        <div className="mb-10 grid gap-4 md:grid-cols-3">

          {metrics.map((metric, index) => {
            const Icon = metric.icon;

            return (
              <div
                key={index}
                className="relative overflow-hidden rounded-[24px] border border-white/[0.03] bg-white/[0.025] p-5 backdrop-blur-2xl"
              >

                {/* GLOW */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at top, rgba(255,0,76,0.08), transparent 72%)",
                  }}
                />

                <div className="relative z-10 flex items-start justify-between">

                  <div>

                    <h3 className="text-[2.2rem] font-semibold leading-none tracking-[-0.06em]">
                      {metric.value}
                    </h3>

                    <p className="mt-3 text-[13px] text-white/45">
                      {metric.label}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-[16px] border border-red-400/10 bg-red-500/5">

                    <Icon className="h-5 w-5 text-red-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* RESULTS GRID */}
        <div className="grid gap-5 xl:grid-cols-3">

          {results.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[30px] border border-white/[0.03] bg-white/[0.025] backdrop-blur-2xl transition-all duration-700 hover:-translate-y-1.5 hover:border-red-400/12"
            >

              {/* CARD GLOW */}
              <div
                className="absolute inset-0 opacity-0 transition-all duration-700 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at top, rgba(255,0,76,0.10), transparent 72%)",
                }}
              />

              {/* IMAGE */}
              <div className="relative overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[280px] w-full object-cover transition-all duration-700 group-hover:scale-[1.04]"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/25" />

                {/* TOP */}
                <div className="absolute left-4 right-4 top-4 flex items-center justify-between">

                  {/* BADGE */}
                  <div className="rounded-full border border-white/[0.08] bg-black/40 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] backdrop-blur-xl">
                    Case Study
                  </div>

                  {/* PLAY */}
                  <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-black/40 backdrop-blur-xl">

                    <Play className="ml-0.5 h-4 w-4 fill-white text-white" />
                  </button>
                </div>

                {/* RESULT TAG */}
                <div className="absolute bottom-4 left-4 rounded-full border border-red-400/10 bg-red-500/10 px-3 py-1.5 backdrop-blur-xl">

                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-red-100">
                    {item.growth} Growth
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="relative p-5">

                {/* STATS */}
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-400/10 bg-red-500/5 px-3 py-1.5">

                  <div className="h-1.5 w-1.5 rounded-full bg-red-400 shadow-[0_0_10px_rgba(255,0,76,1)]" />

                  <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-red-100">
                    {item.stats}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="text-[1.35rem] font-semibold leading-[1.1] tracking-[-0.04em]">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-4 text-[13px] leading-[1.75] text-white/45">
                  {item.description}
                </p>

                {/* BUTTON */}
                <button className="group/button mt-6 inline-flex items-center gap-3 rounded-full border border-white/[0.03] bg-white/[0.03] px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] transition-all duration-500 hover:border-red-400/15 hover:bg-red-500/5">

                  <span>
                    View Breakdown
                  </span>

                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black transition-all duration-500 group-hover/button:bg-red-500 group-hover/button:text-white">

                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </button>
              </div>

              {/* EDGE LIGHT */}
              <div className="absolute inset-0 rounded-[30px] border border-white/[0.03]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YtResults;