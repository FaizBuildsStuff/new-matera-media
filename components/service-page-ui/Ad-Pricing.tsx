"use client";

import React from "react";
import {
  Check,
  Sparkles,
  ArrowUpRight,
  BadgeDollarSign,
} from "lucide-react";

const features = [
  "10 High-Converting Ad Creatives",
  "Multiple Hook Variations",
  "Creative Strategy + Scripting",
  "Performance-Focused Editing",
  "Motion Graphics & Captions",
  "Thumbnail / Frame Design",
  "Fast Turnaround System",
  "1-on-1 Creative Direction",
];

const AdPricing = () => {
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

  

  {/* LEFT MASSIVE GRAINY GLOW */}
  <div
    className="
      absolute left-[-18%] top-[10%]
      h-[900px] w-[900px]
      rounded-full
    "
    style={{
      background: `
        radial-gradient(
          circle,
          rgba(190,242,100,0.20) 0%,
          rgba(132,204,22,0.10) 28%,
          rgba(16,185,129,0.06) 48%,
          transparent 72%
        )
      `,
      filter: "blur(50px)",
      opacity: 0.95,
    }}
  />

  {/* RIGHT MASSIVE GRAINY GLOW */}
  <div
    className="
      absolute right-[-18%] top-[0%]
      h-[1000px] w-[1000px]
      rounded-full
    "
    style={{
      background: `
        radial-gradient(
          circle,
          rgba(16,185,129,0.18) 0%,
          rgba(190,242,100,0.08) 32%,
          rgba(255,255,255,0.03) 48%,
          transparent 74%
        )
      `,
      filter: "blur(50px)",
      opacity: 0.9,
    }}
  />

  {/* CENTER ATMOSPHERE */}
  <div
    className="
      absolute left-1/2 top-[18%]
      h-[700px] w-[1400px]
      -translate-x-1/2
    "
    style={{
      background: `
        radial-gradient(
          ellipse,
          rgba(255,255,255,0.04),
          rgba(190,242,100,0.04),
          transparent 72%
        )
      `,
      filter: "blur(50px)",
    }}
  />

  {/* LEFT LIGHT BEAM */}
  <div
    className="
      absolute left-[10%] top-0
      h-full w-px
    "
    style={{
      background:
        "linear-gradient(to bottom, transparent, rgba(190,242,100,0.18), transparent)",
      boxShadow: "0 0 40px rgba(190,242,100,0.18)",
    }}
  />

  {/* RIGHT LIGHT BEAM */}
  <div
    className="
      absolute right-[10%] top-0
      h-full w-px
    "
    style={{
      background:
        "linear-gradient(to bottom, transparent, rgba(16,185,129,0.18), transparent)",
      boxShadow: "0 0 40px rgba(16,185,129,0.18)",
    }}
  />

  {/* FLOATING LIGHT */}
  <div
    className="
      absolute left-[12%] top-[22%]
      h-3 w-3 rounded-full
      bg-lime-300
      shadow-[0_0_30px_rgba(190,242,100,1)]
    "
  />

  <div
    className="
      absolute right-[14%] top-[34%]
      h-2.5 w-2.5 rounded-full
      bg-emerald-300
      shadow-[0_0_30px_rgba(16,185,129,1)]
    "
  />

  <div
    className="
      absolute left-[20%] bottom-[16%]
      h-2.5 w-2.5 rounded-full
      bg-white
      shadow-[0_0_25px_rgba(255,255,255,0.8)]
    "
  />

  {/* HUGE ORB */}
  <div
    className="
      absolute left-1/2 top-[45%]
      h-[1000px] w-[1000px]
      -translate-x-1/2 -translate-y-1/2
      rounded-full
      border border-white/[0.03]
    "
  />

  {/* SECOND ORB */}
  <div
    className="
      absolute left-1/2 top-[45%]
      h-[700px] w-[700px]
      -translate-x-1/2 -translate-y-1/2
      rounded-full
      border border-lime-300/[0.04]
    "
  />

  {/* PREMIUM GRID */}
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

  {/* GRAIN TEXTURE */}
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

  {/* CINEMATIC NOISE */}
  <div
    className="absolute inset-0 opacity-[0.05] mix-blend-soft-light"
    style={{
      backgroundImage:
        "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
    }}
  />

  
</div>

      {/* CONTENT */}
      <div className="relative z-20 mx-auto max-w-[1650px] px-5 sm:px-8 lg:px-10">

        {/* TOP */}
        <div className="mb-20 text-center">

          {/* LABEL */}
          <div
            className="
              mb-6 inline-flex items-center gap-2
              rounded-full
              border border-lime-300/10
              bg-lime-300/5
              px-4 py-2
              backdrop-blur-xl
            "
          >

            <div className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_20px_rgba(190,242,100,1)]" />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-lime-200
              "
            >
              PRICING PLAN
            </span>
          </div>

          {/* HEADING */}
          <h2
            className="
              mx-auto max-w-5xl
              text-[2.8rem]
              font-semibold
              leading-[1]
              tracking-[-0.055em]

              sm:text-[4.8rem]

              lg:text-[6rem]
            "
          >
            One System.
            <br />
            Built To Scale.
          </h2>

          {/* TEXT */}
          <p
            className="
              mx-auto mt-7 max-w-3xl
              text-[15px]
              leading-[1.9]
              text-white/45

              sm:text-[17px]
            "
          >
            A premium creative production system designed for brands
            that want high-performing ad creatives and scalable paid growth.
          </p>
        </div>

        {/* PRICING CARD */}
        <div className="relative mx-auto max-w-[1200px]">

          {/* MASSIVE GLOW */}
          <div
            className="
              absolute left-1/2 top-1/2
              h-[500px] w-[900px]
              -translate-x-1/2 -translate-y-1/2
            "
            style={{
              background: `
                radial-gradient(
                  ellipse,
                  rgba(190,242,100,0.18),
                  rgba(132,204,22,0.08),
                  transparent 72%
                )
              `,
              filter: "blur(50px)",
            }}
          />

          <div
            className="
              relative overflow-hidden
              rounded-[42px]
              border border-white/[0.06]
              bg-white/[0.03]
              backdrop-blur-3xl
            "
          >

            {/* TOP LIGHT */}
            <div
              className="
                absolute inset-x-0 top-0
                h-[300px]
              "
              style={{
                background: `
                  linear-gradient(
                    to bottom,
                    rgba(190,242,100,0.12),
                    transparent
                  )
                `,
              }}
            />

            {/* HUGE BG TEXT */}
            <div
              className="
                absolute left-1/2 top-1/2
                -translate-x-1/2 -translate-y-1/2
                text-[180px]
                font-black
                tracking-[-0.1em]
                text-white/[0.02]
                select-none

                md:text-[260px]
              "
            >
              SCALE
            </div>

            <div
              className="
                relative z-20
                grid gap-12
                p-8

                lg:grid-cols-[0.95fr_1.05fr]
                lg:p-14
              "
            >

              {/* LEFT */}
              <div>

                {/* PLAN BADGE */}
                <div
                  className="
                    inline-flex items-center gap-3
                    rounded-full
                    border border-lime-300/10
                    bg-lime-300/5
                    px-5 py-3
                    backdrop-blur-xl
                  "
                >

                  <div
                    className="
                      flex h-10 w-10
                      items-center justify-center
                      rounded-full
                      bg-lime-300
                      shadow-[0_0_30px_rgba(190,242,100,0.45)]
                    "
                  >
                    <Sparkles className="h-5 w-5 text-black" />
                  </div>

                  <span
                    className="
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                      text-lime-100
                    "
                  >
                    Most Popular Plan
                  </span>
                </div>

                {/* TITLE */}
                <h3
                  className="
                    mt-10
                    text-[3rem]
                    font-semibold
                    leading-[0.92]
                    tracking-[-0.07em]

                    sm:text-[5rem]
                  "
                >
                  Ad Creative
                  <br />
                  System.
                </h3>

                {/* DESC */}
                <p
                  className="
                    mt-7 max-w-xl
                    text-[15px]
                    leading-[1.9]
                    text-white/45

                    sm:text-[17px]
                  "
                >
                  Built for brands that need
                  scroll-stopping creatives, strong hooks,
                  and performance-focused editing designed
                  to scale revenue.
                </p>

                {/* PRICE */}
                <div className="mt-12 flex items-end gap-4">

                  <h4
                    className="
                      text-[4rem]
                      font-semibold
                      leading-none
                      tracking-[-0.08em]

                      sm:text-[5.5rem]
                    "
                  >
                    $3.5k
                  </h4>

                  <span
                    className="
                      mb-3
                      text-lg
                      text-white/40
                    "
                  >
                    /month
                  </span>
                </div>

                {/* CTA */}
                <button
                  className="
                    group relative mt-12
                    flex items-center gap-4
                    overflow-hidden
                    rounded-full
                    border border-lime-300/10
                    bg-lime-300
                    px-7 py-4
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-black
                    transition-all duration-500

                    hover:scale-[1.02]
                  "
                >

                  <span className="relative z-10">
                    Book Strategy Call
                  </span>

                  <div
                    className="
                      relative z-10
                      flex h-10 w-10
                      items-center justify-center
                      rounded-full
                      bg-black text-lime-300
                    "
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </div>

                  {/* HOVER LIGHT */}
                  <div
                    className="
                      absolute inset-0 opacity-0
                      transition-all duration-500
                      group-hover:opacity-100
                    "
                    style={{
                      background: `
                        linear-gradient(
                          120deg,
                          rgba(255,255,255,0.16),
                          transparent
                        )
                      `,
                    }}
                  />
                </button>
              </div>

              {/* RIGHT */}
              <div
                className="
                  relative overflow-hidden
                  rounded-[34px]
                  border border-white/[0.06]
                  bg-black/30
                  p-7
                  backdrop-blur-3xl

                  md:p-10
                "
              >

                {/* CARD GLOW */}
                <div
                  className="
                    absolute right-[-20%] top-[-20%]
                    h-[320px] w-[320px]
                    rounded-full
                  "
                  style={{
                    background: `
                      radial-gradient(
                        circle,
                        rgba(190,242,100,0.16),
                        transparent 72%
                      )
                    `,
                    filter: "blur(50px)",
                  }}
                />

                {/* TITLE */}
                <div className="flex items-center gap-4">

                  <div
                    className="
                      flex h-14 w-14
                      items-center justify-center
                      rounded-2xl
                      border border-lime-300/10
                      bg-lime-300/10
                    "
                  >

                    <div
                      className="
                        absolute inset-0 rounded-2xl
                        bg-lime-300/10 blur-xl
                      "
                    />

                    <BadgeDollarSign className="relative z-10 h-7 w-7 text-lime-200" />
                  </div>

                  <div>

                    <h4
                      className="
                        text-[1.5rem]
                        font-semibold
                        tracking-[-0.04em]
                      "
                    >
                      Included Features
                    </h4>

                    <p className="mt-1 text-sm text-white/40">
                      Everything required to scale.
                    </p>
                  </div>
                </div>

                {/* FEATURES */}
                <div className="mt-10 space-y-4">

                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="
                        group flex items-start gap-4
                        rounded-2xl
                        border border-white/[0.04]
                        bg-white/[0.02]
                        p-4
                        transition-all duration-500

                        hover:border-lime-300/12
                        hover:bg-lime-300/[0.03]
                      "
                    >

                      {/* ICON */}
                      <div
                        className="
                          relative mt-0.5
                          flex h-9 w-9 shrink-0
                          items-center justify-center
                          rounded-full
                          bg-lime-300/10
                        "
                      >

                        <div
                          className="
                            absolute inset-0 rounded-full
                            bg-lime-300/10 blur-lg
                            opacity-0 transition-all duration-500
                            group-hover:opacity-100
                          "
                        />

                        <Check className="relative z-10 h-4 w-4 text-lime-200" />
                      </div>

                      <p
                        className="
                          text-[15px]
                          leading-[1.7]
                          text-white/75
                        "
                      >
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* EDGE LIGHT */}
            <div
              className="
                absolute inset-0 rounded-[42px]
                border border-white/[0.03]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdPricing;