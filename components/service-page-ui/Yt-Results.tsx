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
    <section
      className="
        relative 
        
        py-24 text-white

        md:py-32
      "
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none transform-gpu will-change-transform">

        

        {/* MASSIVE CENTER ATMOSPHERE */}
        <div
          className="
            absolute left-1/2 top-[-20%]
            h-[1400px] w-[2400px]
            -translate-x-1/2
          "
          style={{
            background: `
              radial-gradient(
                ellipse at center,
                rgba(255,0,76,0.18) 0%,
                rgba(255,40,40,0.08) 22%,
                rgba(255,255,255,0.03) 42%,
                transparent 72%
              )
            `,
            filter: "blur(50px)",
          }}
        />

        {/* LEFT GLOW */}
        <div
          className="
            absolute left-[-10%] top-[20%]
            h-[900px] w-[900px]
            rounded-full
          "
          style={{
            background:
              "radial-gradient(circle, rgba(255,0,76,0.12), transparent 72%)",
            filter: "blur(50px)",
          }}
        />

        {/* RIGHT GLOW */}
        <div
          className="
            absolute right-[-12%] top-[0%]
            h-[1000px] w-[1000px]
            rounded-full
          "
          style={{
            background:
              "radial-gradient(circle, rgba(255,40,40,0.10), transparent 72%)",
            filter: "blur(50px)",
          }}
        />

        {/* RED LIGHT STREAK */}
        <div
          className="
            absolute left-[-10%] top-[40%]
            h-[260px] w-[1000px]
            rotate-[18deg]
          "
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(255,0,76,0.10), transparent)",
            filter: "blur(50px)",
          }}
        />

        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.025]"
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
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: `
              radial-gradient(rgba(255,255,255,0.045) 0.8px, transparent 0.8px)
            `,
            backgroundSize: "4px 4px",
            mixBlendMode: "soft-light",
          }}
        />

        
      </div>

      {/* CONTENT */}
      <div className="relative z-20 mx-auto max-w-[1700px] px-5 sm:px-8 lg:px-10">

        {/* TOP */}
        <div
          className="
            mb-20 flex flex-col gap-10

            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >

          {/* LEFT */}
          <div>

            {/* LABEL */}
            <div
              className="
                mb-6 inline-flex items-center gap-3
                rounded-full
                border border-red-400/10
                bg-red-500/5
                px-5 py-3
                backdrop-blur-xl
              "
            >

              <div className="h-2.5 w-2.5 rounded-full bg-red-400 shadow-[0_0_20px_rgba(255,0,76,1)]" />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-red-100
                "
              >
                RESULTS & CASE STUDIES
              </span>
            </div>

            {/* HEADING */}
            <h2
              className="
                max-w-5xl
                text-[3rem]
                font-semibold
                leading-[1]
                tracking-[-0.05em]

                sm:text-[5rem]

                lg:text-[6rem]
              "
            >
              Real Growth.
              <br />

              <span
                className="
                  bg-gradient-to-b
                  from-white
                  to-red-200
                  bg-clip-text
                  text-transparent
                "
              >
                Real Revenue Systems.
              </span>
            </h2>
          </div>

          {/* RIGHT TEXT */}
          <p
            className="
              max-w-md
              text-[15px]
              leading-[1.9]
              text-white/45

              sm:text-[16px]
            "
          >
            We don’t just create content.
            We build systems that generate
            attention, trust, and inbound
            clients consistently.
          </p>
        </div>

        {/* METRICS */}
        <div
          className="
            mb-14 grid gap-6

            md:grid-cols-3
          "
        >

          {metrics.map((metric, index) => {
            const Icon = metric.icon;

            return (
              <div
                key={index}
                className="
                  relative overflow-hidden
                  rounded-[34px]
                  border border-white/[0.06]
                  bg-white/[0.03]
                  p-7
                  backdrop-blur-3xl
                "
              >

                {/* GLOW */}
                <div
                  className="
                    absolute inset-0
                  "
                  style={{
                    background: `
                      radial-gradient(
                        circle at top,
                        rgba(255,0,76,0.10),
                        transparent 72%
                      )
                    `,
                  }}
                />

                <div className="relative z-10 flex items-start justify-between">

                  <div>

                    <h3
                      className="
                        text-[3rem]
                        font-semibold
                        leading-none
                        tracking-[-0.06em]
                      "
                    >
                      {metric.value}
                    </h3>

                    <p
                      className="
                        mt-4
                        text-[15px]
                        text-white/45
                      "
                    >
                      {metric.label}
                    </p>
                  </div>

                  <div
                    className="
                      flex h-14 w-14
                      items-center justify-center
                      rounded-[20px]
                      border border-red-400/10
                      bg-red-500/5
                    "
                  >
                    <Icon className="h-6 w-6 text-red-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* RESULTS GRID */}
        <div
          className="
            grid gap-7

            xl:grid-cols-3
          "
        >

          {results.map((item, index) => (
            <div
              key={index}
              className="
                group relative overflow-hidden
                rounded-[42px]
                border border-white/[0.06]
                bg-white/[0.03]
                backdrop-blur-3xl
                transition-all duration-700

                hover:-translate-y-2
                hover:border-red-400/15
              "
            >

              {/* CARD GLOW */}
              <div
                className="
                  absolute inset-0 opacity-0
                  transition-all duration-700

                  group-hover:opacity-100
                "
                style={{
                  background: `
                    radial-gradient(
                      circle at top,
                      rgba(255,0,76,0.14),
                      transparent 72%
                    )
                  `,
                }}
              />

              {/* IMAGE */}
              <div className="relative overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    h-[340px] w-full object-cover
                    transition-all duration-700

                    group-hover:scale-[1.05]
                  "
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/20" />

                {/* TOP */}
                <div
                  className="
                    absolute left-5 top-5 right-5
                    flex items-center justify-between
                  "
                >

                  {/* BADGE */}
                  <div
                    className="
                      rounded-full
                      border border-white/[0.08]
                      bg-black/40
                      px-4 py-2
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      backdrop-blur-xl
                    "
                  >
                    Case Study
                  </div>

                  {/* PLAY */}
                  <button
                    className="
                      flex h-12 w-12
                      items-center justify-center
                      rounded-full
                      border border-white/[0.08]
                      bg-black/40
                      backdrop-blur-xl
                    "
                  >
                    <Play className="ml-0.5 h-5 w-5 fill-white text-white" />
                  </button>
                </div>

                

                {/* RESULT TAG */}
                <div
                  className="
                    absolute bottom-5 left-5
                    rounded-full
                    border border-red-400/10
                    bg-red-500/10
                    px-4 py-2
                    backdrop-blur-xl
                  "
                >

                  <span
                    className="
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-red-100
                    "
                  >
                    {item.growth} Growth
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="relative p-7">

                {/* STATS */}
                <div
                  className="
                    mb-5 inline-flex items-center gap-2
                    rounded-full
                    border border-red-400/10
                    bg-red-500/5
                    px-4 py-2
                  "
                >

                  <div className="h-2 w-2 rounded-full bg-red-400 shadow-[0_0_12px_rgba(255,0,76,1)]" />

                  <span
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-red-100
                    "
                  >
                    {item.stats}
                  </span>
                </div>

                {/* TITLE */}
                <h3
                  className="
                    text-[2rem]
                    font-semibold
                    leading-[1.05]
                    tracking-[-0.05em]
                  "
                >
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    mt-5
                    text-[15px]
                    leading-[1.9]
                    text-white/45
                  "
                >
                  {item.description}
                </p>

                {/* BUTTON */}
                <button
                  className="
                    group/button mt-8
                    inline-flex items-center gap-3
                    rounded-full
                    border border-white/[0.06]
                    bg-white/[0.03]
                    px-5 py-3
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    transition-all duration-500

                    hover:border-red-400/15
                    hover:bg-red-500/5
                  "
                >

                  <span>
                    View Breakdown
                  </span>

                  <div
                    className="
                      flex h-8 w-8
                      items-center justify-center
                      rounded-full
                      bg-white text-black
                      transition-all duration-500

                      group-hover/button:bg-red-500
                      group-hover/button:text-white
                    "
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </button>
              </div>

              {/* EDGE LIGHT */}
              <div
                className="
                  absolute inset-0 rounded-[42px]
                  border border-white/[0.03]
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YtResults;