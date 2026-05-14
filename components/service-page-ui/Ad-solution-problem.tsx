"use client";

import React from "react";
import {
  ShieldAlert,
  TrendingDown,
  BrainCircuit,
  Check,
  Sparkles,
  Orbit,
} from "lucide-react";

const problems = [
  {
    title: "Creative Fatigue Kills Performance",
    desc: "Most ads die because the creative system behind them isn't designed for iteration and retention.",
    icon: TrendingDown,
  },
  {
    title: "Weak Hooks = Burned Budget",
    desc: "If the first seconds fail to stop the scroll, CAC spikes and campaigns collapse fast.",
    icon: ShieldAlert,
  },
  {
    title: "No Scalable Creative Framework",
    desc: "Random editing and inconsistent messaging create unstable results and weak ROAS.",
    icon: BrainCircuit,
  },
];

const solutions = [
  {
    title: "Hook-First Creative Engineering",
    desc: "We build high-retention openings engineered specifically for paid social performance.",
    icon: Sparkles,
  },
  {
    title: "Performance Editing System",
    desc: "Every scene, subtitle, pacing cut, and transition is optimized for conversion psychology.",
    icon: Orbit,
  },
  {
    title: "Fast Iteration & Testing Loops",
    desc: "Winning creatives are scaled aggressively while weak angles are removed instantly.",
    icon: Check,
  },
];

const Adsolutionproblem = () => {
  return (
    <section
      className="
        relative overflow-hidden
        bg-[#020202]
        py-24 text-white

        md:py-32
      "
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        {/* BASE */}
        <div className="absolute inset-0 bg-[#020202]" />

        {/* MASSIVE CENTER AURORA */}
        <div
          className="
            absolute left-1/2 top-[10%]
            h-[1000px] w-[1800px]
            -translate-x-1/2
          "
          style={{
            background: `
              radial-gradient(
                ellipse at center,
                rgba(16,185,129,0.18) 0%,
                rgba(34,197,94,0.10) 22%,
                rgba(59,130,246,0.06) 42%,
                rgba(168,85,247,0.04) 58%,
                transparent 78%
              )
            `,
            filter: "blur(140px)",
          }}
        />

        {/* LEFT RED ATMOSPHERE */}
        <div
          className="
            absolute left-[-8%] top-[30%]
            h-[500px] w-[500px]
            rounded-full
          "
          style={{
            background:
              "radial-gradient(circle, rgba(239,68,68,0.16), transparent 72%)",
            filter: "blur(150px)",
          }}
        />

        {/* RIGHT GREEN ATMOSPHERE */}
        <div
          className="
            absolute right-[-8%] top-[18%]
            h-[650px] w-[650px]
            rounded-full
          "
          style={{
            background:
              "radial-gradient(circle, rgba(16,185,129,0.16), transparent 72%)",
            filter: "blur(160px)",
          }}
        />

        {/* CENTER LIGHT */}
        <div
          className="
            absolute left-1/2 top-[30%]
            h-[400px] w-[900px]
            -translate-x-1/2
          "
          style={{
            background: `
              radial-gradient(
                ellipse,
                rgba(255,255,255,0.05),
                rgba(255,255,255,0.02),
                transparent 72%
              )
            `,
            filter: "blur(100px)",
          }}
        />

        {/* LIGHT LINES */}
        <div
          className="
            absolute left-[12%] top-0
            h-full w-px
          "
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(255,255,255,0.12), transparent)",
          }}
        />

        <div
          className="
            absolute right-[12%] top-0
            h-full w-px
          "
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(255,255,255,0.10), transparent)",
          }}
        />

        {/* GLASS ORBS */}
        <div
          className="
            absolute left-[8%] top-[18%]
            h-40 w-40 rounded-full
            border border-white/[0.04]
            bg-white/[0.02]
            backdrop-blur-3xl
          "
        />

        <div
          className="
            absolute right-[10%] bottom-[12%]
            h-52 w-52 rounded-full
            border border-white/[0.04]
            bg-white/[0.02]
            backdrop-blur-3xl
          "
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

        {/* PREMIUM GRAIN */}
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage: `
              radial-gradient(rgba(255,255,255,0.045) 0.8px, transparent 0.8px)
            `,
            backgroundSize: "4px 4px",
            mixBlendMode: "soft-light",
          }}
        />

        {/* VIGNETTE */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(
                ellipse at center,
                transparent 35%,
                rgba(0,0,0,0.24) 72%,
                rgba(0,0,0,0.82) 100%
              )
            `,
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-20 mx-auto max-w-[1650px] px-5 sm:px-8 lg:px-10">

        {/* HEADING */}
        <div className="mb-20 text-center">

          <div
            className="
              mb-5 inline-flex items-center gap-2
              rounded-full
              border border-white/[0.08]
              bg-white/[0.03]
              px-4 py-2
              backdrop-blur-2xl
            "
          >
            <div className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_20px_rgba(52,211,153,1)]" />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-white/70
              "
            >
              PERFORMANCE SYSTEM
            </span>
          </div>

          <h2
            className="
              mx-auto max-w-5xl
              text-[2.8rem]
              font-semibold
              leading-[0.94]
              tracking-[-0.07em]

              sm:text-[4.7rem]

              lg:text-[6rem]
            "
          >
            Most Brands Don’t
            <br />
            Need Better Media Buying.
          </h2>

          <p
            className="
              mx-auto mt-6 max-w-3xl
              text-[15px]
              leading-[1.9]
              text-white/45

              sm:text-[17px]
            "
          >
            They need a creative system engineered for retention,
            iteration, and scalable paid performance.
          </p>
        </div>

        {/* GRID */}
        <div
          className="
            grid gap-8

            lg:grid-cols-2
          "
        >

          {/* PROBLEMS SIDE */}
          <div
            className="
              relative overflow-hidden
              rounded-[42px]
              border border-red-500/10
              bg-white/[0.025]
              p-7
              backdrop-blur-3xl

              md:p-10
            "
          >

            {/* RED LIGHT */}
            <div
              className="
                absolute left-[-10%] top-[-10%]
                h-[280px] w-[280px]
                rounded-full
              "
              style={{
                background:
                  "radial-gradient(circle, rgba(239,68,68,0.18), transparent 72%)",
                filter: "blur(110px)",
              }}
            />

            {/* GIANT BG TEXT */}
            <div
              className="
                absolute inset-0
                flex items-center justify-center
                text-[180px]
                font-black
                tracking-[-0.1em]
                text-red-500/[0.03]
                select-none
              "
            >
              FAIL
            </div>

            <div className="relative z-10">

              {/* LABEL */}
              <div
                className="
                  mb-6 inline-flex items-center gap-2
                  rounded-full
                  border border-red-400/15
                  bg-red-400/5
                  px-4 py-2
                "
              >
                <div className="h-2 w-2 rounded-full bg-red-400 shadow-[0_0_18px_rgba(248,113,113,1)]" />

                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.28em]
                    text-red-200
                  "
                >
                  THE PROBLEM
                </span>
              </div>

              {/* TITLE */}
              <h3
                className="
                  mb-10
                  text-[2.2rem]
                  font-semibold
                  leading-[0.98]
                  tracking-[-0.06em]

                  sm:text-[3.4rem]
                "
              >
                Why Most
                <br />
                Creatives Fail
              </h3>

              {/* CARDS */}
              <div className="space-y-5">

                {problems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="
                        group relative overflow-hidden
                        rounded-[28px]
                        border border-white/[0.06]
                        bg-black/30
                        p-6
                        backdrop-blur-3xl
                        transition-all duration-500

                        hover:border-red-400/20
                        hover:bg-red-500/[0.03]
                      "
                    >

                      {/* CARD LIGHT */}
                      <div
                        className="
                          absolute inset-0 opacity-0
                          transition-all duration-500
                          group-hover:opacity-100
                        "
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(239,68,68,0.08), transparent 45%)",
                        }}
                      />

                      <div className="relative z-10 flex gap-5">

                        {/* ICON */}
                        <div
                          className="
                            relative flex h-14 w-14 shrink-0
                            items-center justify-center
                            rounded-2xl
                            border border-red-400/10
                            bg-red-500/10
                          "
                        >

                          <div
                            className="
                              absolute inset-0 rounded-2xl
                              bg-red-400/10 blur-xl
                            "
                          />

                          <Icon className="relative z-10 h-6 w-6 text-red-200 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110" />
                        </div>

                        {/* TEXT */}
                        <div>

                          <h4
                            className="
                              text-[1.15rem]
                              font-semibold
                              tracking-[-0.03em]
                            "
                          >
                            {item.title}
                          </h4>

                          <p
                            className="
                              mt-2 text-sm
                              leading-[1.85]
                              text-white/45
                            "
                          >
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* SOLUTION SIDE */}
          <div
            className="
              relative overflow-hidden
              rounded-[42px]
              border border-emerald-400/10
              bg-white/[0.025]
              p-7
              backdrop-blur-3xl

              md:p-10
            "
          >

            {/* GREEN LIGHT */}
            <div
              className="
                absolute right-[-10%] top-[-10%]
                h-[320px] w-[320px]
                rounded-full
              "
              style={{
                background:
                  "radial-gradient(circle, rgba(16,185,129,0.18), transparent 72%)",
                filter: "blur(120px)",
              }}
            />

            {/* BG TEXT */}
            <div
              className="
                absolute inset-0
                flex items-center justify-center
                text-[180px]
                font-black
                tracking-[-0.1em]
                text-emerald-400/[0.03]
                select-none
              "
            >
              SCALE
            </div>

            <div className="relative z-10">

              {/* LABEL */}
              <div
                className="
                  mb-6 inline-flex items-center gap-2
                  rounded-full
                  border border-emerald-300/15
                  bg-emerald-300/5
                  px-4 py-2
                "
              >
                <div className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(52,211,153,1)]" />

                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.28em]
                    text-emerald-200
                  "
                >
                  THE SOLUTION
                </span>
              </div>

              {/* TITLE */}
              <h3
                className="
                  mb-10
                  text-[2.2rem]
                  font-semibold
                  leading-[0.98]
                  tracking-[-0.06em]

                  sm:text-[3.4rem]
                "
              >
                How We Build
                <br />
                Winning Ads
              </h3>

              {/* CARDS */}
              <div className="space-y-5">

                {solutions.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="
                        group relative overflow-hidden
                        rounded-[28px]
                        border border-white/[0.06]
                        bg-black/30
                        p-6
                        backdrop-blur-3xl
                        transition-all duration-500

                        hover:border-emerald-300/20
                        hover:bg-emerald-500/[0.03]
                      "
                    >

                      {/* LIGHT */}
                      <div
                        className="
                          absolute inset-0 opacity-0
                          transition-all duration-500
                          group-hover:opacity-100
                        "
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(16,185,129,0.08), transparent 45%)",
                        }}
                      />

                      <div className="relative z-10 flex gap-5">

                        {/* ICON */}
                        <div
                          className="
                            relative flex h-14 w-14 shrink-0
                            items-center justify-center
                            rounded-2xl
                            border border-emerald-300/10
                            bg-emerald-400/10
                          "
                        >

                          <div
                            className="
                              absolute inset-0 rounded-2xl
                              bg-emerald-400/10 blur-xl
                            "
                          />

                          <Icon className="relative z-10 h-6 w-6 text-emerald-200 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110" />
                        </div>

                        {/* TEXT */}
                        <div>

                          <h4
                            className="
                              text-[1.15rem]
                              font-semibold
                              tracking-[-0.03em]
                            "
                          >
                            {item.title}
                          </h4>

                          <p
                            className="
                              mt-2 text-sm
                              leading-[1.85]
                              text-white/45
                            "
                          >
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Adsolutionproblem;