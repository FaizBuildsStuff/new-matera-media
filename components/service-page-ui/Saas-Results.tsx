"use client";

import React from "react";
import {
    ArrowUpRight,
    TrendingUp,
    BarChart3,
    Sparkles,
    PlayCircle,
} from "lucide-react";

const results = [
    {
        title: "Lower CAC",
        value: "-38%",
        desc: "Reduced acquisition costs through better ad creatives and stronger product storytelling.",
        icon: TrendingUp,
        glow: "from-violet-500/30 via-blue-500/10 to-transparent",
    },
    {
        title: "Higher CTR",
        value: "+4.8x",
        desc: "Premium motion ads optimized for engagement and retention across paid campaigns.",
        icon: BarChart3,
        glow: "from-blue-500/30 via-cyan-500/10 to-transparent",
    },
    {
        title: "Better Conversions",
        value: "+42%",
        desc: "SaaS videos engineered to explain your product faster and convert cold audiences.",
        icon: Sparkles,
        glow: "from-fuchsia-500/30 via-violet-500/10 to-transparent",
    },
];

const SaasResults = () => {
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

                {/* MASSIVE TOP GLOW */}
                <div
                    className="
            absolute left-1/2 top-[-20%]
            h-[1300px] w-[2600px]
            -translate-x-1/2
          "
                    style={{
                        background: `
              radial-gradient(
                ellipse at center,
                rgba(139,92,246,0.20) 0%,
                rgba(59,130,246,0.12) 20%,
                rgba(255,255,255,0.03) 46%,
                transparent 72%
              )
            `,
                        filter: "blur(180px)",
                    }}
                />

                {/* LEFT CLOUD */}
                <div
                    className="
            absolute left-[-10%] top-[12%]
            h-[900px] w-[900px]
            rounded-full
          "
                    style={{
                        background:
                            "radial-gradient(circle, rgba(59,130,246,0.10), transparent 72%)",
                        filter: "blur(180px)",
                    }}
                />

                {/* RIGHT CLOUD */}
                <div
                    className="
            absolute right-[-10%] top-[0%]
            h-[1000px] w-[1000px]
            rounded-full
          "
                    style={{
                        background:
                            "radial-gradient(circle, rgba(168,85,247,0.12), transparent 72%)",
                        filter: "blur(220px)",
                    }}
                />

                {/* LIGHT STREAK */}
                <div
                    className="
            absolute left-[-5%] top-[40%]
            h-[240px] w-[120%]
            rotate-[-8deg]
          "
                    style={{
                        background: `
              linear-gradient(
                to right,
                transparent,
                rgba(139,92,246,0.16),
                rgba(59,130,246,0.08),
                transparent
              )
            `,
                        filter: "blur(70px)",
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

                {/* FLOATING PARTICLES */}
                <div className="absolute left-[18%] top-[28%] h-2.5 w-2.5 rounded-full bg-blue-300 shadow-[0_0_22px_rgba(59,130,246,1)]" />

                <div className="absolute right-[18%] top-[20%] h-3 w-3 rounded-full bg-violet-300 shadow-[0_0_24px_rgba(168,85,247,1)]" />

                <div className="absolute left-[28%] bottom-[18%] h-2 w-2 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.8)]" />

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
                transparent 38%,
                rgba(0,0,0,0.28) 74%,
                rgba(0,0,0,0.95) 100%
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
                border border-violet-400/10
                bg-white/[0.03]
                px-5 py-3
                backdrop-blur-xl
              "
                        >

                            <div className="h-2.5 w-2.5 rounded-full bg-violet-300 shadow-[0_0_18px_rgba(168,85,247,1)]" />

                            <span
                                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-white/75
                "
                            >
                                RESULTS
                            </span>
                        </div>

                        {/* HEADING */}
                        <h2
                            className="
                max-w-5xl
                text-[3rem]
                font-semibold
                leading-[0.94]
                tracking-[-0.05em]

                sm:text-[5rem]

                lg:text-[6rem]
              "
                        >
                            SaaS Videos That
                            <br />

                            <span
                                className="
                  bg-gradient-to-b
                  from-white
                  via-blue-100
                  to-violet-200
                  bg-clip-text
                  text-transparent
                "
                            >
                                Actually Perform.
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

              sm:text-[17px]
            "
                    >
                        Beautiful visuals are useless
                        without performance. Every SaaS
                        creative we build is optimized
                        for retention, engagement,
                        and conversions.
                    </p>
                </div>

                {/* MAIN GRID — 2×2 */}
                <div
                    className="
            grid gap-7

            md:grid-cols-2
          "
                >

                    {/* TOP-LEFT: VISUAL CARD */}
                    <div
                        className="
              group relative overflow-hidden
              rounded-[42px]
              border border-white/[0.06]
              bg-white/[0.03]
              p-7
              backdrop-blur-3xl
            "
                    >

                        {/* CARD GLOW */}
                        <div
                            className="
                absolute inset-0
              "
                            style={{
                                background: `
                  radial-gradient(
                    circle at top,
                    rgba(139,92,246,0.14),
                    transparent 72%
                  )
                `,
                            }}
                        />

                        {/* TOP BAR */}
                        <div
                            className="
                relative z-10 mb-8 flex
                items-center justify-between
              "
                        >

                            <div>
                                <p className="text-sm text-white/45">
                                    Campaign Performance
                                </p>

                                <h3
                                    className="
                    mt-2 text-[2.3rem]
                    font-semibold
                    tracking-[-0.05em]
                  "
                                >
                                    +287% Growth
                                </h3>
                            </div>

                            <button
                                className="
                  flex h-14 w-14
                  items-center justify-center
                  rounded-full
                  border border-white/[0.08]
                  bg-white/[0.03]
                  transition-all duration-500

                  hover:bg-violet-500
                  hover:border-violet-400/20
                "
                            >
                                <ArrowUpRight className="h-5 w-5" />
                            </button>
                        </div>

                        {/* GRAPH */}
                        <div
                            className="
                relative h-[320px]
                overflow-hidden
                rounded-[34px]
                border border-white/[0.06]
                bg-black/30
              "
                        >

                            {/* GRID */}
                            <div
                                className="absolute inset-0 opacity-[0.04]"
                                style={{
                                    backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
                  `,
                                    backgroundSize: "60px 60px",
                                }}
                            />

                            {/* GRAPH LINE */}
                            <svg
                                className="absolute inset-0 h-full w-full"
                                viewBox="0 0 1000 400"
                                preserveAspectRatio="none"
                            >

                                {/* GLOW */}
                                <path
                                    d="M0 320 C 140 300, 180 250, 300 240 C 420 228, 520 140, 620 130 C 760 118, 820 40, 1000 20"
                                    fill="none"
                                    stroke="rgba(139,92,246,0.2)"
                                    strokeWidth="18"
                                    strokeLinecap="round"
                                />

                                {/* MAIN */}
                                <path
                                    d="M0 320 C 140 300, 180 250, 300 240 C 420 228, 520 140, 620 130 C 760 118, 820 40, 1000 20"
                                    fill="none"
                                    stroke="url(#paint0_linear)"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                />

                                <defs>
                                    <linearGradient
                                        id="paint0_linear"
                                        x1="0"
                                        y1="0"
                                        x2="1000"
                                        y2="0"
                                    >
                                        <stop stopColor="#3B82F6" />
                                        <stop offset="1" stopColor="#A855F7" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            {/* FLOATING CARD */}
                            <div
                                className="
                  absolute right-8 top-8
                  rounded-[26px]
                  border border-white/[0.08]
                  bg-black/50
                  p-5
                  backdrop-blur-2xl
                "
                            >

                                <p className="text-xs text-white/45">
                                    Avg. Watch Time
                                </p>

                                <h4
                                    className="
                    mt-2 text-[2rem]
                    font-semibold
                    tracking-[-0.05em]
                  "
                                >
                                    78%
                                </h4>

                                <div
                                    className="
                    mt-4 flex items-center gap-2
                  "
                                >

                                    <div className="h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_12px_rgba(168,85,247,1)]" />

                                    <span className="text-xs text-violet-100">
                                        Performance Increase
                                    </span>
                                </div>
                            </div>

                            {/* PLAY */}
                            <div
                                className="
                  absolute bottom-8 left-8
                  flex items-center gap-4
                "
                            >

                                <div
                                    className="
                    flex h-16 w-16
                    items-center justify-center
                    rounded-full
                    border border-white/[0.08]
                    bg-white/[0.04]
                    backdrop-blur-2xl
                  "
                                >

                                    <PlayCircle className="h-8 w-8 text-white" />
                                </div>

                                <div>
                                    <h4 className="font-medium">
                                        SaaS Ad Creative
                                    </h4>

                                    <p className="mt-1 text-sm text-white/45">
                                        High Retention Motion Video
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* TOP-RIGHT: CARD 1 */}
                        <div
                            className="
      group relative overflow-hidden
      rounded-[34px]
      border border-white/[0.06]
      bg-white/[0.03]
      p-6
      backdrop-blur-3xl
      transition-all duration-700

      hover:-translate-y-1

      md:p-7
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
            rgba(59,130,246,0.18),
            transparent 72%
          )
        `,
                                }}
                            />

                            {/* TOP */}
                            <div
                                className="relative z-10 flex items-start justify-between gap-6"
                            >

                                {/* LEFT */}
                                <div>

                                    <div
                                        className="
            mb-5 flex h-16 w-16
            items-center justify-center
            rounded-[22px]
            border border-blue-400/10
            bg-blue-500/10
          "
                                    >

                                        <TrendingUp className="h-7 w-7 text-blue-200" />
                                    </div>

                                    <h4
                                        className="
            text-[1.7rem]
            font-semibold
            tracking-[-0.05em]
          "
                                    >
                                        Lower CAC
                                    </h4>

                                    <p
                                        className="
            mt-4 max-w-md
            text-[15px]
            leading-[1.9]
            text-white/45
          "
                                    >
                                        Reduce acquisition costs through
                                        stronger SaaS storytelling and
                                        better ad retention.
                                    </p>
                                </div>

                                {/* VALUE */}
                                <div
                                    className="
          text-[3.5rem]
          font-semibold
          leading-none
          tracking-[-0.06em]

          md:text-[4.5rem]
        "
                                >
                                    -38%
                                </div>
                            </div>

                            {/* VISUAL */}
                            <div
                                className="
        relative mt-10
        h-[190px]
        overflow-hidden
        rounded-[28px]
        border border-white/[0.06]
        bg-black/40
      "
                            >

                                {/* GRID */}
                                <div
                                    className="absolute inset-0 opacity-[0.05]"
                                    style={{
                                        backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
                                        backgroundSize: "50px 50px",
                                    }}
                                />

                                {/* DECLINE GRAPH */}
                                <svg
                                    className="absolute inset-0 h-full w-full"
                                    viewBox="0 0 1000 300"
                                    preserveAspectRatio="none"
                                >

                                    {/* GLOW */}
                                    <path
                                        d="M0 60 C 120 90, 200 120, 320 130 C 450 150, 560 180, 700 210 C 820 240, 900 250, 1000 270"
                                        fill="none"
                                        stroke="rgba(59,130,246,0.16)"
                                        strokeWidth="18"
                                        strokeLinecap="round"
                                    />

                                    {/* LINE */}
                                    <path
                                        d="M0 60 C 120 90, 200 120, 320 130 C 450 150, 560 180, 700 210 C 820 240, 900 250, 1000 270"
                                        fill="none"
                                        stroke="#60A5FA"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                    />
                                </svg>

                                {/* FLOATING METRIC */}
                                <div
                                    className="
          absolute right-5 top-5
          rounded-[20px]
          border border-blue-400/10
          bg-blue-500/10
          px-5 py-4
          backdrop-blur-xl
        "
                                >

                                    <p className="text-xs text-white/45">
                                        Cost Per Acquisition
                                    </p>

                                    <h5
                                        className="
            mt-2 text-2xl
            font-semibold
            tracking-[-0.04em]
            text-blue-100
          "
                                    >
                                        $21
                                    </h5>
                                </div>
                            </div>
                        </div>

                        {/* CARD 2 */}
                        <div
                            className="
      group relative overflow-hidden
      rounded-[34px]
      border border-white/[0.06]
      bg-white/[0.03]
      p-6
      backdrop-blur-3xl
      transition-all duration-700

      hover:-translate-y-1

      md:p-7
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
            rgba(168,85,247,0.18),
            transparent 72%
          )
        `,
                                }}
                            />

                            {/* TOP */}
                            <div
                                className="
        relative z-10 flex
        flex-col gap-6

        sm:flex-row
        sm:items-start
        sm:justify-between
      "
                            >

                                {/* LEFT */}
                                <div>

                                    <div
                                        className="
            mb-5 flex h-16 w-16
            items-center justify-center
            rounded-[22px]
            border border-violet-400/10
            bg-violet-500/10
          "
                                    >

                                        <BarChart3 className="h-7 w-7 text-violet-200" />
                                    </div>

                                    <h4
                                        className="
            text-[1.7rem]
            font-semibold
            tracking-[-0.05em]
          "
                                    >
                                        Higher CTR
                                    </h4>

                                    <p
                                        className="
            mt-4 max-w-md
            text-[15px]
            leading-[1.9]
            text-white/45
          "
                                    >
                                        Premium motion creatives designed
                                        to stop the scroll and increase
                                        click-through performance.
                                    </p>
                                </div>

                                {/* VALUE */}
                                <div
                                    className="
          text-[3.5rem]
          font-semibold
          leading-none
          tracking-[-0.06em]

          md:text-[4.5rem]
        "
                                >
                                    +4.8x
                                </div>
                            </div>

                            {/* VISUAL */}
                            <div
                                className="
        relative mt-10
        flex h-[190px]
        items-end gap-4
        overflow-hidden
        rounded-[28px]
        border border-white/[0.06]
        bg-black/40
        px-6 pb-6
      "
                            >

                                {/* GLOW */}
                                <div
                                    className="
          absolute left-1/2 top-[20%]
          h-[180px] w-[400px]
          -translate-x-1/2
        "
                                    style={{
                                        background: `
            radial-gradient(
              ellipse,
              rgba(168,85,247,0.18),
              transparent 72%
            )
          `,
                                        filter: "blur(60px)",
                                    }}
                                />

                                {/* BARS */}
                                {[40, 80, 120, 160, 140, 180].map((height, i) => (
                                    <div
                                        key={i}
                                        className="
            relative flex-1
            rounded-full
            bg-gradient-to-t
            from-violet-500/40
            to-blue-300/90
          "
                                        style={{
                                            height: `${height}px`,
                                        }}
                                    >
                                        <div
                                            className="
              absolute inset-0 rounded-full
              bg-white/10 blur-xl
            "
                                        />
                                    </div>
                                ))}

                                {/* FLOATING LABEL */}
                                <div
                                    className="
          absolute left-6 top-6
          rounded-full
          border border-violet-400/10
          bg-violet-500/10
          px-4 py-2
          backdrop-blur-xl
        "
                                >

                                    <span
                                        className="
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.18em]
            text-violet-100
          "
                                    >
                                        Engagement Spike
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* CARD 3 */}
                        <div
                            className="
      group relative overflow-hidden
      rounded-[34px]
      border border-white/[0.06]
      bg-white/[0.03]
      p-6
      backdrop-blur-3xl
      transition-all duration-700

      hover:-translate-y-1

      md:p-7
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
            rgba(236,72,153,0.18),
            transparent 72%
          )
        `,
                                }}
                            />

                            {/* TOP */}
                            <div
                                className="
        relative z-10 flex
        flex-col gap-6

        sm:flex-row
        sm:items-start
        sm:justify-between
      "
                            >

                                {/* LEFT */}
                                <div>

                                    <div
                                        className="
            mb-5 flex h-16 w-16
            items-center justify-center
            rounded-[22px]
            border border-pink-400/10
            bg-pink-500/10
          "
                                    >

                                        <Sparkles className="h-7 w-7 text-pink-200" />
                                    </div>

                                    <h4
                                        className="
            text-[1.7rem]
            font-semibold
            tracking-[-0.05em]
          "
                                    >
                                        Better Conversions
                                    </h4>

                                    <p
                                        className="
            mt-4 max-w-md
            text-[15px]
            leading-[1.9]
            text-white/45
          "
                                    >
                                        Product videos crafted to explain
                                        your SaaS clearly and convert
                                        viewers into customers faster.
                                    </p>
                                </div>

                                {/* VALUE */}
                                <div
                                    className="
          text-[3.5rem]
          font-semibold
          leading-none
          tracking-[-0.06em]

          md:text-[4.5rem]
        "
                                >
                                    +42%
                                </div>
                            </div>

                            {/* VISUAL */}
                            <div
                                className="
        relative mt-10
        h-[190px]
        overflow-hidden
        rounded-[28px]
        border border-white/[0.06]
        bg-black/40
      "
                            >

                                {/* CENTER GLOW */}
                                <div
                                    className="
          absolute left-1/2 top-1/2
          h-[220px] w-[220px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
        "
                                    style={{
                                        background: `
            radial-gradient(
              circle,
              rgba(236,72,153,0.28),
              rgba(168,85,247,0.12),
              transparent 72%
            )
          `,
                                        filter: "blur(40px)",
                                    }}
                                />

                                {/* ORBITS */}
                                <div
                                    className="
          absolute left-1/2 top-1/2
          h-[180px] w-[180px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          border border-pink-400/[0.12]
        "
                                />

                                <div
                                    className="
          absolute left-1/2 top-1/2
          h-[120px] w-[120px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          border border-violet-300/[0.16]
        "
                                />

                                {/* CENTER */}
                                <div
                                    className="
          absolute left-1/2 top-1/2
          flex h-16 w-16
          -translate-x-1/2 -translate-y-1/2
          items-center justify-center
          rounded-full
          bg-white
          text-black
          shadow-[0_0_40px_rgba(255,255,255,0.4)]
        "
                                >

                                    <Sparkles className="h-7 w-7" />
                                </div>

                                {/* FLOATING DOTS */}
                                <div className="absolute left-[26%] top-[30%] h-3 w-3 rounded-full bg-pink-300 shadow-[0_0_18px_rgba(236,72,153,1)]" />

                                <div className="absolute right-[24%] top-[44%] h-2.5 w-2.5 rounded-full bg-violet-300 shadow-[0_0_16px_rgba(168,85,247,1)]" />

                                <div className="absolute left-[38%] bottom-[24%] h-2 w-2 rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,0.8)]" />
                            </div>
                        </div>
                </div>
            </div>
        </section>
    );
};

export default SaasResults;