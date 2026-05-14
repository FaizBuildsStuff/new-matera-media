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
        position:
            "top-[12%] left-[4%] md:left-[8%]",
    },
    {
        title: "Organic Reach",
        value: "4.2M Views",
        icon: Circle,
        position:
            "bottom-[16%] left-[2%] md:left-[10%]",
    },
    {
        title: "Revenue Engine",
        value: "Automated",
        icon: Sparkles,
        position:
            "top-[18%] right-[4%] md:right-[8%]",
    },
];

const YtHero = () => {
    return (
        <section
            className="
        relative overflow-hidden
        bg-black
        pt-36 text-white

        md:pt-44
      "
        >

            {/* BACKGROUND */}
            <div className="absolute inset-0 overflow-hidden">

                {/* BASE */}
                <div className="absolute inset-0 bg-[#020202]" />

                {/* MASSIVE RED YOUTUBE ATMOSPHERE */}
                <div
                    className="
            absolute left-1/2 top-[-28%]
            h-[1200px] w-[2200px]
            -translate-x-1/2
          "
                    style={{
                        background: `
              radial-gradient(
                ellipse at center,
                rgba(255,0,55,0.22) 0%,
                rgba(255,40,40,0.12) 20%,
                rgba(255,90,90,0.06) 38%,
                rgba(255,255,255,0.03) 52%,
                transparent 72%
              )
            `,
                        filter: "blur(180px)",
                    }}
                />

                {/* LEFT GLOW */}
                <div
                    className="
            absolute left-[-15%] top-[10%]
            h-[900px] w-[900px]
            rounded-full
          "
                    style={{
                        background: `
              radial-gradient(
                circle,
                rgba(255,0,76,0.18),
                rgba(255,0,55,0.06),
                transparent 72%
              )
            `,
                        filter: "blur(180px)",
                    }}
                />

                {/* RIGHT GLOW */}
                <div
                    className="
            absolute right-[-15%] top-[0%]
            h-[1000px] w-[1000px]
            rounded-full
          "
                    style={{
                        background: `
              radial-gradient(
                circle,
                rgba(255,40,40,0.16),
                rgba(255,0,76,0.06),
                transparent 72%
              )
            `,
                        filter: "blur(190px)",
                    }}
                />

                {/* CENTER LIGHT */}
                <div
                    className="
            absolute left-1/2 top-[18%]
            h-[700px] w-[1500px]
            -translate-x-1/2
          "
                    style={{
                        background: `
              radial-gradient(
                ellipse,
                rgba(255,255,255,0.06),
                rgba(255,40,40,0.04),
                transparent 72%
              )
            `,
                        filter: "blur(120px)",
                    }}
                />

                {/* LIGHT RINGS */}
                <div
                    className="
            absolute left-1/2 top-[36%]
            h-[1200px] w-[1200px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            border border-white/[0.03]
          "
                />

                <div
                    className="
            absolute left-1/2 top-[36%]
            h-[850px] w-[850px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            border border-red-400/[0.05]
          "
                />

                {/* LIGHT BEAMS */}
                <div
                    className="
            absolute left-[10%] top-0
            h-full w-px
          "
                    style={{
                        background:
                            "linear-gradient(to bottom, transparent, rgba(255,0,76,0.18), transparent)",
                        boxShadow: "0 0 40px rgba(255,0,76,0.25)",
                    }}
                />

                <div
                    className="
            absolute right-[10%] top-0
            h-full w-px
          "
                    style={{
                        background:
                            "linear-gradient(to bottom, transparent, rgba(255,40,40,0.18), transparent)",
                        boxShadow: "0 0 40px rgba(255,40,40,0.25)",
                    }}
                />

                {/* FLOATING PARTICLES */}
                <div className="absolute left-[14%] top-[24%] h-3 w-3 rounded-full bg-red-400 shadow-[0_0_35px_rgba(255,0,76,1)]" />

                <div className="absolute right-[16%] top-[32%] h-2.5 w-2.5 rounded-full bg-red-300 shadow-[0_0_35px_rgba(255,40,40,1)]" />

                <div className="absolute left-[20%] bottom-[18%] h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.8)]" />

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

                {/* FILM NOISE */}
                <div
                    className="absolute inset-0 opacity-[0.05] mix-blend-soft-light"
                    style={{
                        backgroundImage:
                            "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
                    }}
                />

                {/* BOTTOM BLEND */}
                <div
                    className="absolute bottom-0 left-0 h-[40%] w-full"
                    style={{
                        background: `
              linear-gradient(
                to bottom,
                rgba(0,0,0,0) 0%,
                rgba(0,0,0,0.4) 35%,
                rgba(0,0,0,0.82) 75%,
                #000 100%
              )
            `,
                    }}
                />
            </div>

            {/* FLOATING CARDS */}
            {floatingCards.map((card, index) => {
                const Icon = card.icon;

                return (
                    <div
                        key={index}
                        className={`
              absolute z-20 hidden
              lg:block
              ${card.position}
            `}
                    >

                        <div
                            className="
                group relative overflow-hidden
                rounded-[28px]
                border border-white/[0.06]
                bg-white/[0.03]
                px-6 py-5
                backdrop-blur-3xl
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
                      circle at center,
                      rgba(255,0,76,0.14),
                      transparent 72%
                    )
                  `,
                                }}
                            />

                            <div className="relative z-10 flex items-center gap-4">

                                <div
                                    className="
                    flex h-12 w-12
                    items-center justify-center
                    rounded-2xl
                    bg-red-500/10
                  "
                                >
                                    <Icon className="h-6 w-6 text-red-300" />
                                </div>

                                <div>

                                    <p className="text-sm text-white/45">
                                        {card.title}
                                    </p>

                                    <h4 className="mt-1 text-lg font-semibold">
                                        {card.value}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}

            {/* CONTENT */}
            <div className="relative z-30 mx-auto max-w-[1650px] px-5 sm:px-8 lg:px-10">

                <div
                    className="
            flex min-h-[92vh]
            flex-col items-center justify-center
            text-center
          "
                >

                    {/* LABEL */}
                    <div
                        className="
              mb-8 inline-flex items-center gap-3
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
                text-red-200
              "
                        >
                            ORGANIC CONTENT / YOUTUBE
                        </span>
                    </div>

                    {/* HEADING */}
                    <h1
                        className="
    max-w-7xl
    text-[3rem]
    font-semibold
    leading-[1.02]
    tracking-[-0.045em]

    sm:text-[5rem]
    sm:leading-[1]

    lg:text-[7rem]
    lg:leading-[0.97]
  "
                    >
                        Turn YouTube Into
                        <br />

                        {/* SELECTED TEXT EFFECT */}
                        <span
                            className="
      relative inline-flex items-center
      px-4 py-2

      md:px-7 md:py-3
    "
                        >

                            {/* GLOW */}
                            <div
                                className="
        absolute inset-0
        rounded-[22px]
        bg-red-500/10
        blur-2xl
      "
                            />

                            {/* SELECTION */}
                            <div
                                className="
        absolute inset-0
        rounded-[22px]
        border border-red-400/40
        bg-red-500/[0.03]
        backdrop-blur-xl
      "
                            >

                                <div className="absolute -left-[4px] -top-[4px] h-[10px] w-[10px] rounded-[2px] bg-red-400 shadow-[0_0_18px_rgba(255,0,76,1)]" />

                                <div className="absolute -right-[4px] -top-[4px] h-[10px] w-[10px] rounded-[2px] bg-red-400 shadow-[0_0_18px_rgba(255,0,76,1)]" />

                                <div className="absolute -bottom-[4px] -left-[4px] h-[10px] w-[10px] rounded-[2px] bg-red-400 shadow-[0_0_18px_rgba(255,0,76,1)]" />

                                <div className="absolute -bottom-[4px] -right-[4px] h-[10px] w-[10px] rounded-[2px] bg-red-400 shadow-[0_0_18px_rgba(255,0,76,1)]" />
                            </div>

                            {/* CURSOR */}
                            <div
                                className="
        absolute -right-7 -top-5
        rotate-[-18deg]
      "
                            >

                                <div
                                    className="
          relative flex h-9 w-9
          items-center justify-center
          rounded-full
          border border-white/10
          bg-black/40
          backdrop-blur-xl
        "
                                >

                                    <div
                                        className="
            absolute inset-0 rounded-full
            bg-red-500/10 blur-xl
          "
                                    />

                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="white"
                                        className="relative z-10 h-4 w-4"
                                    >
                                        <path d="M5 3L19 12L13 13L15 21L12.5 22L10.5 14.5L5 18V3Z" />
                                    </svg>
                                </div>
                            </div>

                            {/* TEXT */}
                            <span
                                className="
        relative z-10
        bg-gradient-to-b
        from-white
        via-red-100
        to-red-300
        bg-clip-text
        text-transparent
      "
                            >
                                A Client Machine
                            </span>
                        </span>

                        <br />

                        On Autopilot.
                    </h1>

                    {/* TEXT */}
                    <p
                        className="
              mx-auto mt-10 max-w-4xl
              text-[16px]
              leading-[1.9]
              text-white/50

              sm:text-[18px]
            "
                    >
                        We install a custom YouTube Organic + Paid funnel
                        designed to turn cold viewers into high-ticket clients.
                        Stop guessing with your content and start booking
                        <span className="text-white"> 20+ qualified calls </span>
                        every single month with a proven system.
                    </p>

                    {/* BUTTONS */}
                    <div
                        className="
              mt-14 flex flex-col gap-4

              sm:flex-row
            "
                    >

                        {/* PRIMARY */}
                        <button
                            className="
                group relative overflow-hidden
                rounded-full
                border border-red-400/10
                bg-red-500
                px-8 py-5
                text-sm
                font-semibold
                uppercase
                tracking-[0.16em]
                text-white
                transition-all duration-500

                hover:scale-[1.03]
              "
                        >

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
                      rgba(255,255,255,0.18),
                      transparent
                    )
                  `,
                                }}
                            />

                            <div className="relative z-10 flex items-center gap-4">

                                <span>
                                    Book Strategy Call
                                </span>

                                <div
                                    className="
                    flex h-10 w-10
                    items-center justify-center
                    rounded-full
                    bg-white text-red-500
                  "
                                >
                                    <ArrowUpRight className="h-5 w-5" />
                                </div>
                            </div>
                        </button>

                        {/* SECONDARY */}
                        <button
                            className="
                group relative overflow-hidden
                rounded-full
                border border-white/[0.08]
                bg-white/[0.03]
                px-8 py-5
                text-sm
                font-semibold
                uppercase
                tracking-[0.16em]
                text-white
                backdrop-blur-3xl
                transition-all duration-500

                hover:bg-white/[0.05]
              "
                        >

                            <div className="flex items-center gap-4">

                                <div
                                    className="
                    flex h-10 w-10
                    items-center justify-center
                    rounded-full
                    bg-white text-black
                  "
                                >
                                    <Play className="ml-0.5 h-4 w-4 fill-black text-black" />
                                </div>

                                <span>
                                    Watch Case Study
                                </span>
                            </div>
                        </button>
                    </div>

                    {/* VIDEO PREVIEW */}
                    <div
                        className="
              relative mt-24 w-full max-w-[1200px]
            "
                    >

                        {/* OUTER GLOW */}
                        <div
                            className="
                absolute inset-[-40px]
                rounded-[50px]
              "
                            style={{
                                background: `
                  radial-gradient(
                    circle,
                    rgba(255,0,76,0.20),
                    transparent 72%
                  )
                `,
                                filter: "blur(80px)",
                            }}
                        />

                        {/* FRAME */}
                        <div
                            className="
                relative overflow-hidden
                rounded-[40px]
                border border-white/[0.06]
                bg-white/[0.03]
                p-3
                backdrop-blur-3xl
              "
                        >

                            <div
                                className="
                  relative overflow-hidden
                  rounded-[30px]
                  border border-white/[0.05]
                "
                            >

                                {/* IMAGE */}
                                <img
                                    src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?q=80&w=1600&auto=format&fit=crop"
                                    alt="YouTube"
                                    className="
                    h-[260px] w-full object-cover

                    md:h-[620px]
                  "
                                />

                                {/* OVERLAY */}
                                <div className="absolute inset-0 bg-black/35" />

                                {/* PLAY */}
                                <button
                                    className="
                    group absolute left-1/2 top-1/2
                    flex h-[130px] w-[130px]
                    -translate-x-1/2 -translate-y-1/2
                    items-center justify-center
                  "
                                >

                                    {/* RING */}
                                    <div
                                        className="
                      absolute inset-0 rounded-full
                      border border-red-400/20
                      bg-red-500/10
                      backdrop-blur-3xl
                    "
                                    />

                                    {/* MIDDLE */}
                                    <div
                                        className="
                      absolute inset-[18px]
                      rounded-full
                      bg-white/10
                    "
                                    />

                                    {/* INNER */}
                                    <div
                                        className="
                      relative z-10
                      flex h-[72px] w-[72px]
                      items-center justify-center
                      rounded-full
                      bg-white
                      transition-all duration-500
                      group-hover:scale-110
                    "
                                    >
                                        <Play className="ml-1 h-7 w-7 fill-black text-black" />
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