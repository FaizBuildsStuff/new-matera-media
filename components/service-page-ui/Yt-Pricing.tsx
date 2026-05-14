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
        <div className="absolute inset-0 bg-[#020202]" />

        {/* MASSIVE RED ATMOSPHERE */}
        <div
          className="
            absolute left-1/2 top-[-25%]
            h-[1300px] w-[2600px]
            -translate-x-1/2
          "
          style={{
            background: `
              radial-gradient(
                ellipse at center,
                rgba(255,0,76,0.18) 0%,
                rgba(255,40,40,0.10) 20%,
                rgba(255,255,255,0.03) 44%,
                transparent 74%
              )
            `,
            filter: "blur(180px)",
          }}
        />

        {/* LEFT GLOW */}
        <div
          className="
            absolute left-[-12%] top-[12%]
            h-[900px] w-[900px]
            rounded-full
          "
          style={{
            background:
              "radial-gradient(circle, rgba(255,0,76,0.12), transparent 72%)",
            filter: "blur(180px)",
          }}
        />

        {/* RIGHT GLOW */}
        <div
          className="
            absolute right-[-10%] top-[0%]
            h-[1000px] w-[1000px]
            rounded-full
          "
          style={{
            background:
              "radial-gradient(circle, rgba(255,40,40,0.12), transparent 72%)",
            filter: "blur(200px)",
          }}
        />

        {/* LIGHT CORE */}
        <div
          className="
            absolute left-1/2 top-[30%]
            h-[420px] w-[900px]
            -translate-x-1/2
          "
          style={{
            background: `
              radial-gradient(
                ellipse,
                rgba(255,255,255,0.08),
                rgba(255,0,76,0.04),
                transparent 72%
              )
            `,
            filter: "blur(90px)",
          }}
        />

        {/* LIGHT STREAK */}
        <div
          className="
            absolute left-[-10%] top-[45%]
            h-[260px] w-[1000px]
            rotate-[18deg]
          "
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(255,0,76,0.10), transparent)",
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
          className="absolute inset-0 opacity-[0.12] mix-blend-soft-light"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
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
                rgba(0,0,0,0.92) 100%
              )
            `,
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-20 mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">

        {/* TOP */}
        <div className="mb-20 text-center">

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

            <div className="h-2.5 w-2.5 rounded-full bg-red-400 shadow-[0_0_18px_rgba(255,0,76,1)]" />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.26em]
                text-red-100
              "
            >
              INVESTMENT
            </span>
          </div>

          {/* HEADING */}
          <h2
            className="
              mx-auto max-w-5xl
              text-[3rem]
              font-semibold
              leading-[1]
              tracking-[-0.05em]

              sm:text-[5rem]

              lg:text-[6rem]
            "
          >
            Plans For
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
              Consistent Publishing.
            </span>
          </h2>

          {/* TEXT */}
          <p
            className="
              mx-auto mt-8 max-w-2xl
              text-[15px]
              leading-[1.9]
              text-white/45

              sm:text-[17px]
            "
          >
            This plan is designed to grow your YouTube
            presence, build authority, and generate
            consistent inbound opportunities every month.
          </p>
        </div>

        {/* CARD */}
        <div
          className="
            group relative mx-auto
            max-w-[950px]
            overflow-hidden
            rounded-[48px]
            border border-white/[0.06]
            bg-white/[0.03]
            backdrop-blur-3xl
            transition-all duration-700

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

          {/* TOP LIGHT */}
          <div
            className="
              absolute left-1/2 top-0
              h-[220px] w-[600px]
              -translate-x-1/2
            "
            style={{
              background: `
                radial-gradient(
                  ellipse,
                  rgba(255,255,255,0.08),
                  transparent 72%
                )
              `,
              filter: "blur(70px)",
            }}
          />

          {/* SHINE */}
          <div
            className="
              absolute left-[-30%] top-[-20%]
              h-[420px] w-[180px]
              rotate-[24deg]
              opacity-0
              transition-all duration-1000

              group-hover:left-[120%]
              group-hover:opacity-100
            "
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(255,255,255,0.16), transparent)",
              filter: "blur(20px)",
            }}
          />

          <div
            className="
              relative z-10
              grid gap-0

              lg:grid-cols-[0.9fr_1.1fr]
            "
          >

            {/* LEFT */}
            <div
              className="
                relative overflow-hidden
                border-b border-white/[0.06]
                p-8

                md:p-12

                lg:border-b-0
                lg:border-r
                lg:border-white/[0.06]
              "
            >

              {/* ICON */}
              <div
                className="
                  relative mb-10 flex h-20 w-20
                  items-center justify-center
                  rounded-[28px]
                  border border-red-400/10
                  bg-red-500/5
                "
              >

                <div
                  className="
                    absolute inset-0 rounded-[28px]
                    bg-red-500/10 blur-2xl
                  "
                />

                <PlayCircle className="relative z-10 h-10 w-10 text-red-300" />
              </div>

              {/* PLAN */}
              <div
                className="
                  inline-flex items-center gap-2
                  rounded-full
                  border border-red-400/10
                  bg-red-500/5
                  px-4 py-2
                "
              >

                <Sparkles className="h-4 w-4 text-red-300" />

                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-red-100
                  "
                >
                  Growth System
                </span>
              </div>

              {/* TITLE */}
              <h3
                className="
                  mt-7
                  text-[3rem]
                  font-semibold
                  leading-[0.95]
                  tracking-[-0.06em]

                  md:text-[4rem]
                "
              >
                YouTube
                <br />
                Growth
              </h3>

              {/* DESC */}
              <p
                className="
                  mt-6 max-w-md
                  text-[15px]
                  leading-[1.9]
                  text-white/45
                "
              >
                Premium long-form content designed
                to increase authority, grow reach,
                and convert viewers into qualified clients.
              </p>
            </div>

            {/* RIGHT */}
            <div className="p-8 md:p-12">

              {/* FEATURES */}
              <div className="space-y-5">

                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="
                      group/item flex items-start gap-4
                      rounded-[24px]
                      border border-white/[0.05]
                      bg-white/[0.02]
                      p-5
                      transition-all duration-500

                      hover:border-red-400/12
                      hover:bg-red-500/[0.03]
                    "
                  >

                    {/* ICON */}
                    <div
                      className="
                        relative mt-0.5 flex h-11 w-11
                        shrink-0 items-center justify-center
                        rounded-full
                        border border-red-400/10
                        bg-red-500/5
                      "
                    >

                      <div
                        className="
                          absolute inset-0 rounded-full
                          bg-red-500/10 blur-lg
                        "
                      />

                      <Check className="relative z-10 h-5 w-5 text-red-300" />
                    </div>

                    {/* TEXT */}
                    <p
                      className="
                        text-[15px]
                        leading-[1.7]
                        text-white/85
                      "
                    >
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              {/* BUTTON */}
              <button
                className="
                  group/button mt-10
                  flex w-full items-center
                  justify-between
                  rounded-full
                  border border-red-400/10
                  bg-red-500
                  px-7 py-5
                  transition-all duration-500

                  hover:scale-[1.02]
                "
              >

                <span
                  className="
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-white
                  "
                >
                  I Need This
                </span>

                <div
                  className="
                    flex h-11 w-11
                    items-center justify-center
                    rounded-full
                    bg-white text-black
                    transition-all duration-500

                    group-hover/button:rotate-45
                  "
                >
                  <ArrowRight className="h-5 w-5" />
                </div>
              </button>
            </div>
          </div>

          {/* EDGE LIGHT */}
          <div
            className="
              absolute inset-0 rounded-[48px]
              border border-white/[0.03]
            "
          />
        </div>
      </div>
    </section>
  );
};

export default YtPricing;