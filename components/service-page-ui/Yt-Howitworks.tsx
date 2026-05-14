"use client";

import React from "react";
import {
  Sparkles,
  PenTool,
  Video,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "We Understand Your Content",
    description:
      "We get to know your niche, your voice, and what actually works for your audience so nothing feels random.",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "We Plan Everything Upfront",
    description:
      "You get a clear content plan with ideas, hooks, and direction so you’re never stuck thinking what to post.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "You Record, We Handle The Rest",
    description:
      "We turn your raw clips into polished content, post it across platforms, and keep things moving consistently.",
    icon: Video,
  },
];

const YtHowitworks = () => {
  return (
    <section
      className="
        relative overflow-hidden
        bg-black
        py-24 text-white

        md:py-32
      "
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        {/* BASE */}
        <div className="absolute inset-0 bg-[#030303]" />

        {/* MASSIVE RED GLOW */}
        <div
          className="
            absolute left-1/2 top-[-30%]
            h-[1200px] w-[2200px]
            -translate-x-1/2
          "
          style={{
            background: `
              radial-gradient(
                ellipse at center,
                rgba(255,0,76,0.14) 0%,
                rgba(255,40,40,0.07) 24%,
                rgba(255,255,255,0.03) 48%,
                transparent 72%
              )
            `,
            filter: "blur(180px)",
          }}
        />

        {/* LEFT GLOW */}
        <div
          className="
            absolute left-[-10%] top-[15%]
            h-[700px] w-[700px]
            rounded-full
          "
          style={{
            background:
              "radial-gradient(circle, rgba(255,0,76,0.10), transparent 72%)",
            filter: "blur(160px)",
          }}
        />

        {/* RIGHT GLOW */}
        <div
          className="
            absolute right-[-10%] top-[5%]
            h-[800px] w-[800px]
            rounded-full
          "
          style={{
            background:
              "radial-gradient(circle, rgba(255,40,40,0.08), transparent 72%)",
            filter: "blur(180px)",
          }}
        />

        {/* CENTER LIGHT */}
        <div
          className="
            absolute left-1/2 top-[30%]
            h-[500px] w-[1000px]
            -translate-x-1/2
          "
          style={{
            background: `
              radial-gradient(
                ellipse,
                rgba(255,255,255,0.05),
                rgba(255,0,76,0.03),
                transparent 72%
              )
            `,
            filter: "blur(90px)",
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
          className="absolute inset-0 opacity-[0.12]"
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
                rgba(0,0,0,0.25) 72%,
                rgba(0,0,0,0.9) 100%
              )
            `,
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-20 mx-auto max-w-[1650px] px-5 sm:px-8 lg:px-10">

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
                HOW IT WORKS
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
              You Get On Camera.
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
                We Handle The Rest.
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
            We simplify the entire content workflow
            so you can focus on recording while we
            handle strategy, editing, posting, and scaling.
          </p>
        </div>

        {/* STEPS */}
        <div
          className="
            grid gap-7

            md:grid-cols-2

            xl:grid-cols-3
          "
        >

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="
                  group relative overflow-hidden
                  rounded-[38px]
                  border border-white/[0.06]
                  bg-white/[0.03]
                  p-8
                  backdrop-blur-3xl
                  transition-all duration-700

                  hover:-translate-y-2
                  hover:border-red-400/15
                "
              >

                {/* GLOW */}
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
                        rgba(255,0,76,0.12),
                        transparent 72%
                      )
                    `,
                  }}
                />

                {/* SHINE */}
                <div
                  className="
                    absolute left-[-40%] top-[-20%]
                    h-[320px] w-[180px]
                    rotate-[24deg]
                    opacity-0
                    transition-all duration-1000

                    group-hover:left-[120%]
                    group-hover:opacity-100
                  "
                  style={{
                    background:
                      "linear-gradient(to right, transparent, rgba(255,255,255,0.14), transparent)",
                    filter: "blur(20px)",
                  }}
                />

                {/* TOP */}
                <div className="relative z-10 flex items-start justify-between">

                  {/* ICON */}
                  <div
                    className="
                      relative flex h-16 w-16
                      items-center justify-center
                      rounded-[22px]
                      border border-red-400/10
                      bg-red-500/5
                    "
                  >

                    {/* INNER GLOW */}
                    <div
                      className="
                        absolute inset-0 rounded-[22px]
                        bg-red-500/10 blur-xl
                      "
                    />

                    <Icon className="relative z-10 h-7 w-7 text-red-300" />
                  </div>

                  {/* NUMBER */}
                  <span
                    className="
                      text-[4rem]
                      font-semibold
                      leading-none
                      tracking-[-0.08em]
                      text-white/[0.06]
                    "
                  >
                    {step.number}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="relative z-10 mt-10">

                  {/* TITLE */}
                  <h3
                    className="
                      text-[1.8rem]
                      font-semibold
                      leading-[1.1]
                      tracking-[-0.04em]
                    "
                  >
                    {step.title}
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
                    {step.description}
                  </p>

                  {/* BOTTOM */}
                  <div className="mt-10 flex items-center justify-between">

                    <div
                      className="
                        inline-flex items-center gap-2
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
                        Content System
                      </span>
                    </div>

                    <button
                      className="
                        flex h-12 w-12
                        items-center justify-center
                        rounded-full
                        border border-white/[0.06]
                        bg-white/[0.03]
                        transition-all duration-500

                        group-hover:bg-red-500
                      "
                    >
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* EDGE LIGHT */}
                <div
                  className="
                    absolute inset-0 rounded-[38px]
                    border border-white/[0.03]
                  "
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default YtHowitworks;