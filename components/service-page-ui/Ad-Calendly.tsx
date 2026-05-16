"use client";

import React from "react";
import {
    ArrowUpRight,
    Sparkles,
    CalendarDays,
    Clock3,
    Video,
} from "lucide-react";

const AdCalendly = () => {
    return (
        <section id="calendly" className="
        relative 
        
        py-24 text-white

        md:py-32
      "
        >

            {/* BACKGROUND */}
            <div className="absolute inset-0 pointer-events-none transform-gpu will-change-transform">



                {/* MASSIVE TOP AURORA */}
                <div
                    className="
      absolute left-1/2 top-[-35%]
      h-[1200px] w-[2200px]
      -translate-x-1/2
    "
                    style={{
                        background: `
        conic-gradient(
          from 180deg at 50% 50%,
          rgba(190,242,100,0.18),
          rgba(132,204,22,0.08),
          rgba(16,185,129,0.06),
          rgba(255,255,255,0.03),
          rgba(190,242,100,0.18)
        )
      `,
                        filter: "blur(50px)",
                        opacity: 0.9,
                    }}
                />

                {/* LEFT HUGE GLOW */}
                <div
                    className="
      absolute left-[-18%] top-[10%]
      h-[1000px] w-[1000px]
      rounded-full
    "
                    style={{
                        background: `
        radial-gradient(
          circle,
          rgba(190,242,100,0.22) 0%,
          rgba(132,204,22,0.10) 30%,
          rgba(16,185,129,0.04) 48%,
          transparent 72%
        )
      `,
                        filter: "blur(50px)",
                    }}
                />

                {/* RIGHT HUGE GLOW */}
                <div
                    className="
      absolute right-[-20%] top-[0%]
      h-[1100px] w-[1100px]
      rounded-full
    "
                    style={{
                        background: `
        radial-gradient(
          circle,
          rgba(16,185,129,0.18) 0%,
          rgba(190,242,100,0.08) 34%,
          rgba(255,255,255,0.03) 52%,
          transparent 74%
        )
      `,
                        filter: "blur(50px)",
                    }}
                />

                {/* CENTER FOCUS LIGHT */}
                <div
                    className="
      absolute left-1/2 top-[22%]
      h-[700px] w-[1500px]
      -translate-x-1/2
    "
                    style={{
                        background: `
        radial-gradient(
          ellipse,
          rgba(255,255,255,0.06),
          rgba(190,242,100,0.04),
          transparent 72%
        )
      `,
                        filter: "blur(50px)",
                    }}
                />

                {/* LARGE FLOATING ORB */}
                <div
                    className="
      absolute left-[8%] top-[24%]
      h-[500px] w-[500px]
      rounded-full
    "
                    style={{
                        background: `
        radial-gradient(
          circle,
          rgba(190,242,100,0.10),
          transparent 72%
        )
      `,
                        filter: "blur(50px)",
                    }}
                />

                {/* SECOND FLOATING ORB */}
                <div
                    className="
      absolute right-[8%] bottom-[10%]
      h-[600px] w-[600px]
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

                {/* PREMIUM LIGHT RINGS */}
                <div
                    className="
      absolute left-1/2 top-[40%]
      h-[1200px] w-[1200px]
      -translate-x-1/2 -translate-y-1/2
      rounded-full
      border border-white/[0.03]
    "
                />

                <div
                    className="
      absolute left-1/2 top-[40%]
      h-[850px] w-[850px]
      -translate-x-1/2 -translate-y-1/2
      rounded-full
      border border-lime-300/[0.04]
    "
                />

                {/* LIGHT BEAM LEFT */}
                <div
                    className="
      absolute left-[12%] top-0
      h-full w-px
    "
                    style={{
                        background:
                            "linear-gradient(to bottom, transparent, rgba(190,242,100,0.18), transparent)",
                        boxShadow: "0 0 40px rgba(190,242,100,0.22)",
                    }}
                />

                {/* LIGHT BEAM RIGHT */}
                <div
                    className="
      absolute right-[12%] top-0
      h-full w-px
    "
                    style={{
                        background:
                            "linear-gradient(to bottom, transparent, rgba(16,185,129,0.18), transparent)",
                        boxShadow: "0 0 40px rgba(16,185,129,0.22)",
                    }}
                />

                {/* FLOATING PARTICLES */}
                <div className="absolute left-[15%] top-[22%] h-3 w-3 rounded-full bg-lime-300 shadow-[0_0_35px_rgba(190,242,100,1)]" />

                <div className="absolute right-[18%] top-[30%] h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_35px_rgba(16,185,129,1)]" />

                <div className="absolute left-[22%] bottom-[18%] h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.8)]" />

                <div className="absolute right-[20%] bottom-[20%] h-3 w-3 rounded-full bg-lime-300 shadow-[0_0_35px_rgba(190,242,100,1)]" />

                {/* DIAGONAL LIGHT STREAK */}
                <div
                    className="
      absolute left-[-10%] top-[35%]
      h-[240px] w-[900px]
      rotate-[18deg]
    "
                    style={{
                        background:
                            "linear-gradient(to right, transparent, rgba(190,242,100,0.10), transparent)",
                        filter: "blur(50px)",
                    }}
                />

                {/* SECOND STREAK */}
                <div
                    className="
      absolute right-[-10%] top-[20%]
      h-[240px] w-[900px]
      rotate-[-18deg]
    "
                    style={{
                        background:
                            "linear-gradient(to right, transparent, rgba(16,185,129,0.08), transparent)",
                        filter: "blur(50px)",
                    }}
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

                {/* FILM NOISE */}
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
                            BOOK A CALL
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
                        Get Yourself
                        <br />
                        Winner Creatives.
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
                        Book a free call today.
                    </p>
                </div>

                {/* MAIN GRID */}
                <div
                    className="
            grid gap-8

            lg:grid-cols-[0.85fr_1.15fr]
          "
                >

                    {/* LEFT INFO */}
                    <div
                        className="
              relative overflow-hidden
              rounded-[40px]
              border border-white/[0.06]
              bg-white/[0.03]
              p-8
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

                        {/* ICON */}
                        <div
                            className="
                relative flex h-20 w-20
                items-center justify-center
                rounded-[26px]
                border border-lime-300/10
                bg-lime-300/10
              "
                        >

                            <div
                                className="
                  absolute inset-0 rounded-[26px]
                  bg-lime-300/10 blur-2xl
                "
                            />

                            <Sparkles className="relative z-10 h-9 w-9 text-lime-200" />
                        </div>

                        {/* TITLE */}
                        <h3
                            className="
                mt-10
                text-[2.4rem]
                font-semibold
                leading-[0.95]
                tracking-[-0.06em]

                sm:text-[3.4rem]
              "
                        >
                            Free Strategy
                            <br />
                            Consultation.
                        </h3>

                        {/* DESC */}
                        <p
                            className="
                mt-6
                max-w-lg
                text-[15px]
                leading-[1.9]
                text-white/45

                sm:text-[17px]
              "
                        >
                            We’ll audit your current ad creatives,
                            identify weak points in your funnel,
                            and show you how we’d improve performance.
                        </p>

                        {/* FEATURES */}
                        <div className="mt-12 space-y-5">

                            {/* ITEM */}
                            <div
                                className="
                  flex items-start gap-4
                  rounded-[24px]
                  border border-white/[0.05]
                  bg-black/25
                  p-5
                "
                            >

                                <div
                                    className="
                    flex h-12 w-12 shrink-0
                    items-center justify-center
                    rounded-2xl
                    bg-lime-300/10
                  "
                                >
                                    <CalendarDays className="h-6 w-6 text-lime-200" />
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold">
                                        Flexible Scheduling
                                    </h4>

                                    <p className="mt-2 text-sm leading-[1.8] text-white/45">
                                        Choose a time that works best for your team.
                                    </p>
                                </div>
                            </div>

                            {/* ITEM */}
                            <div
                                className="
                  flex items-start gap-4
                  rounded-[24px]
                  border border-white/[0.05]
                  bg-black/25
                  p-5
                "
                            >

                                <div
                                    className="
                    flex h-12 w-12 shrink-0
                    items-center justify-center
                    rounded-2xl
                    bg-lime-300/10
                  "
                                >
                                    <Clock3 className="h-6 w-6 text-lime-200" />
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold">
                                        30 Minute Deep Dive
                                    </h4>

                                    <p className="mt-2 text-sm leading-[1.8] text-white/45">
                                        Focused strategy session around scaling your ads.
                                    </p>
                                </div>
                            </div>

                            {/* ITEM */}
                            <div
                                className="
                  flex items-start gap-4
                  rounded-[24px]
                  border border-white/[0.05]
                  bg-black/25
                  p-5
                "
                            >

                                <div
                                    className="
                    flex h-12 w-12 shrink-0
                    items-center justify-center
                    rounded-2xl
                    bg-lime-300/10
                  "
                                >
                                    <Video className="h-6 w-6 text-lime-200" />
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold">
                                        Zoom Consultation
                                    </h4>

                                    <p className="mt-2 text-sm leading-[1.8] text-white/45">
                                        Meet directly and discuss your growth goals live.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <a
                            href="https://calendly.com/m-faizurrehman-crypto/30min"
                            target="_blank"
                            className="
                group relative mt-12 inline-flex
                items-center gap-4
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
                                Book Now
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
                        </a>
                    </div>

                    {/* CALENDLY */}
                    <div
                        className="
              relative overflow-hidden
              rounded-[40px]
              border border-white/[0.06]
              bg-white/[0.03]
              backdrop-blur-3xl
            "
                    >

                        {/* TOP LIGHT */}
                        <div
                            className="
                absolute inset-x-0 top-0
                h-[250px]
              "
                            style={{
                                background: `
                  linear-gradient(
                    to bottom,
                    rgba(190,242,100,0.10),
                    transparent
                  )
                `,
                            }}
                        />

                        {/* GLOW */}
                        <div
                            className="
                absolute right-[-10%] top-[-10%]
                h-[320px] w-[320px]
                rounded-full
              "
                            style={{
                                background: `
                  radial-gradient(
                    circle,
                    rgba(190,242,100,0.14),
                    transparent 72%
                  )
                `,
                                filter: "blur(50px)",
                            }}
                        />

                        {/* FRAME */}
                        <div className="relative z-20 p-3">

                            <div
                                className="
                  overflow-hidden
                  rounded-[30px]
                  border border-white/[0.06]
                  bg-black/30
                "
                            >

                                <iframe
                                    src="https://calendly.com/m-faizurrehman-crypto/30min"
                                    width="100%"
                                    height="850"
                                    frameBorder="0"
                                    className="min-h-[850px] w-full"
                                />
                            </div>
                        </div>

                        {/* EDGE LIGHT */}
                        <div
                            className="
                absolute inset-0 rounded-[40px]
                border border-white/[0.03]
              "
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdCalendly;