"use client";

import React from "react";
import {
  Sparkles,
  Target,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

const process = [
  {
    number: "01",
    title: "Study & Creative Direction",
    desc: "We review your brand, the form you fill, and your assets, then build the creative direction and scripts that hit.",
  },
  {
    number: "02",
    title: "Full Production",
    desc: "We handle Editing and Motion Designing plus we produce multiple Hooks ready for testing.",
  },
  {
    number: "03",
    title: "Review & Approval",
    desc: "Our Head of Content Quality checks every Produced AD, then you review and give feedback to lock in the final creatives.",
  },
  {
    number: "04",
    title: "Launch & Optimize",
    desc: "We launch the ads, test hooks and variations, track CTR, ROAS, CAC, and keep refining until results are solid.",
  },
];

const AdProcess = () => {
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

        

        {/* HUGE GREEN ATMOSPHERE */}
        <div
          className="
            absolute right-[-10%] top-[-10%]
            h-[900px] w-[900px]
            rounded-full
          "
          style={{
            background: `
              radial-gradient(
                circle,
                rgba(190,242,100,0.18) 0%,
                rgba(132,204,22,0.08) 38%,
                transparent 72%
              )
            `,
            filter: "blur(50px)",
          }}
        />

        {/* LEFT LIGHT */}
        <div
          className="
            absolute left-[-10%] top-[20%]
            h-[700px] w-[700px]
            rounded-full
          "
          style={{
            background: `
              radial-gradient(
                circle,
                rgba(16,185,129,0.10),
                transparent 72%
              )
            `,
            filter: "blur(50px)",
          }}
        />

        {/* LIGHT GRID */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "90px 90px",
          }}
        />

        {/* PREMIUM GRAIN */}
        <div
          className="absolute inset-0 opacity-[0.13]"
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
      <div className="relative z-20 mx-auto max-w-[1650px] px-5 sm:px-8 lg:px-10">

        <div
          className="
            grid items-center gap-16

            lg:grid-cols-[0.95fr_1.05fr]
          "
        >

          {/* LEFT */}
          <div>

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
                OUR PROCESS
              </span>
            </div>

            {/* HEADING */}
<h2
  className="
    max-w-3xl
    text-[2.8rem]
    font-semibold
    leading-[1.02]
    tracking-[-0.045em]

    sm:text-[4.6rem]
    sm:leading-[1]

    lg:text-[5.5rem]
    lg:leading-[0.98]
  "
>
  Performance-Driven
  <br />
  Creative System.
</h2>

            {/* TEXT */}
            <p
              className="
                mt-7 max-w-2xl
                text-[15px]
                leading-[1.9]
                text-white/45

                sm:text-[17px]
              "
            >
              Every creative is engineered with a strategic framework
              focused on retention, conversion psychology, and scalable
              paid social performance.
            </p>

            {/* STEPS */}
            <div className="mt-16 space-y-10">

              {process.map((item, index) => (
                <div
                  key={index}
                  className="
                    group flex gap-5
                  "
                >

                  {/* NUMBER */}
                  <div
                    className="
                      relative flex h-14 w-14 shrink-0
                      items-center justify-center
                      rounded-2xl
                      border border-lime-300/10
                      bg-lime-300/5
                      backdrop-blur-3xl
                    "
                  >

                    <div
                      className="
                        absolute inset-0 rounded-2xl
                        bg-lime-300/10 blur-xl
                        opacity-0 transition-all duration-500
                        group-hover:opacity-100
                      "
                    />

                    <span
                      className="
                        relative z-10
                        text-[1rem]
                        font-semibold
                        text-lime-200
                      "
                    >
                      {item.number}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div>

                    <h3
                      className="
                        text-[1.7rem]
                        font-semibold
                        tracking-[-0.04em]
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-3 max-w-xl
                        text-[15px]
                        leading-[1.9]
                        text-white/45
                      "
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT VISUAL */}
<div
  className="
    relative flex items-center justify-center
    py-10
    min-h-[760px]
  "
>

  {/* MASSIVE ATMOSPHERE */}
  <div
    className="
      absolute left-1/2 top-1/2
      h-[900px] w-[900px]
      -translate-x-1/2 -translate-y-1/2
      rounded-full
    "
    style={{
      background: `
        radial-gradient(
          circle,
          rgba(190,242,100,0.22) 0%,
          rgba(132,204,22,0.10) 28%,
          rgba(101,163,13,0.05) 48%,
          transparent 72%
        )
      `,
      filter: "blur(50px)",
    }}
  />

  {/* HUGE OUTER RING */}
  <div
    className="
      absolute left-1/2 top-1/2
      h-[680px] w-[680px]
      -translate-x-1/2 -translate-y-1/2
      rounded-full
      border border-lime-300/[0.05]
    "
  />

  {/* SECOND RING */}
  <div
    className="
      absolute left-1/2 top-1/2
      h-[520px] w-[520px]
      -translate-x-1/2 -translate-y-1/2
      rounded-full
      border border-white/[0.04]
    "
  />

  {/* THIRD RING */}
  <div
    className="
      absolute left-1/2 top-1/2
      h-[360px] w-[360px]
      -translate-x-1/2 -translate-y-1/2
      rounded-full
      border border-lime-300/[0.05]
    "
  />

  {/* CENTER CORE */}
  <div
    className="
      absolute left-1/2 top-1/2 z-30
      flex h-[170px] w-[170px]
      -translate-x-1/2 -translate-y-1/2
      items-center justify-center
      rounded-full
      border border-lime-300/20
      bg-[#0d0d0d]
      backdrop-blur-3xl
      shadow-[0_0_120px_rgba(190,242,100,0.18)]
    "
  >

    {/* INNER GLOW */}
    <div
      className="
        absolute inset-0 rounded-full
        bg-lime-300/10 blur-3xl
      "
    />

    {/* CORE DISC */}
    <div
      className="
        relative flex h-28 w-28
        items-center justify-center
        rounded-full
        bg-lime-300
        shadow-[0_0_60px_rgba(190,242,100,0.45)]
      "
    >

      <div
        className="
          absolute inset-0 rounded-full
          bg-lime-300 blur-2xl opacity-50
        "
      />

      <Sparkles className="relative z-10 h-10 w-10 text-black" />
    </div>
  </div>

  {/* MAIN ROTATION SYSTEM */}
  <div
    className="
      absolute left-1/2 top-1/2
      h-[520px] w-[520px]
      -translate-x-1/2 -translate-y-1/2
      animate-[spin_24s_linear_infinite]
    "
  >

    {/* DISC 1 */}
    <div
      className="
        absolute left-1/2 top-0
        h-[140px] w-[140px]
        -translate-x-1/2
        rounded-full
        border border-lime-300/10
        bg-[#0b0b0b]
        backdrop-blur-3xl
        shadow-[0_0_80px_rgba(190,242,100,0.14)]
      "
    >

      <div
        className="
          absolute inset-0 rounded-full
          bg-lime-300/10 blur-2xl
        "
      />

      <div className="flex h-full items-center justify-center">
        <Target className="h-12 w-12 text-lime-200" />
      </div>
    </div>

    {/* DISC 2 */}
    <div
      className="
        absolute bottom-0 left-1/2
        h-[160px] w-[160px]
        -translate-x-1/2
        rounded-full
        border border-lime-300/10
        bg-[#0b0b0b]
        backdrop-blur-3xl
        shadow-[0_0_90px_rgba(190,242,100,0.16)]
      "
    >

      <div
        className="
          absolute inset-0 rounded-full
          bg-lime-300/10 blur-2xl
        "
      />

      <div className="flex h-full items-center justify-center">
        <BarChart3 className="h-14 w-14 text-lime-200" />
      </div>
    </div>

    {/* DISC 3 */}
    <div
      className="
        absolute left-0 top-1/2
        h-[120px] w-[120px]
        -translate-y-1/2
        rounded-full
        border border-lime-300/10
        bg-[#0b0b0b]
        backdrop-blur-3xl
        shadow-[0_0_70px_rgba(190,242,100,0.14)]
      "
    >

      <div
        className="
          absolute inset-0 rounded-full
          bg-lime-300/10 blur-2xl
        "
      />

      <div className="flex h-full items-center justify-center">
        <ShieldCheck className="h-10 w-10 text-lime-200" />
      </div>
    </div>

    {/* DISC 4 */}
    <div
      className="
        absolute right-0 top-1/2
        h-[120px] w-[120px]
        -translate-y-1/2
        rounded-full
        border border-lime-300/10
        bg-[#0b0b0b]
        backdrop-blur-3xl
        shadow-[0_0_70px_rgba(190,242,100,0.14)]
      "
    >

      <div
        className="
          absolute inset-0 rounded-full
          bg-lime-300/10 blur-2xl
        "
      />

      <div className="flex h-full items-center justify-center">
        <Sparkles className="h-10 w-10 text-lime-200" />
      </div>
    </div>
  </div>

  {/* SECOND ROTATION */}
  <div
    className="
      absolute left-1/2 top-1/2
      h-[760px] w-[760px]
      -translate-x-1/2 -translate-y-1/2
      animate-[spin_40s_linear_infinite_reverse]
    "
  >

    {/* SMALL NODE */}
    <div
      className="
        absolute left-1/2 top-0
        h-7 w-7
        -translate-x-1/2
        rounded-full
        bg-lime-300
        shadow-[0_0_40px_rgba(190,242,100,0.9)]
      "
    />

    <div
      className="
        absolute bottom-0 left-1/2
        h-5 w-5
        -translate-x-1/2
        rounded-full
        bg-lime-300/80
        shadow-[0_0_30px_rgba(190,242,100,0.8)]
      "
    />

    <div
      className="
        absolute left-0 top-1/2
        h-6 w-6
        -translate-y-1/2
        rounded-full
        bg-lime-300/70
        shadow-[0_0_30px_rgba(190,242,100,0.8)]
      "
    />

    <div
      className="
        absolute right-0 top-1/2
        h-6 w-6
        -translate-y-1/2
        rounded-full
        bg-lime-300/70
        shadow-[0_0_30px_rgba(190,242,100,0.8)]
      "
    />
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default AdProcess;