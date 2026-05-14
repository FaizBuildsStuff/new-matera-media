"use client";

import React from "react";
import {
    Orbit,
    Play,
    TrendingUp,
} from "lucide-react";

const stats = [
    {
        value: "1,500+",
        title: "High-Converting Ad Creatives",
        desc: "Performance-driven creatives engineered for Meta, TikTok & YouTube ads.",
        icon: Orbit,
        image:
            "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop",
    },
    {
        value: "120M+",
        title: "Views Generated Across Campaigns",
        desc: "Helping brands scale attention through scroll-stopping content systems.",
        icon: Play,
        image:
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
    },
    {
        value: "4.8x",
        title: "Average ROAS Achieved",
        desc: "Built through strong hooks, retention-focused editing & rapid testing.",
        icon: TrendingUp,
        image:
            "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
    },
];

const AdResults = () => {
    return (
        <section
            className="
        relative overflow-hidden
        bg-black
        py-20 text-white

        md:py-28
      "
        >

            {/* BACKGROUND */}
            <div className="absolute inset-0 overflow-hidden">

                {/* BASE */}
                <div className="absolute inset-0 bg-black" />

                {/* TOP GREEN GLOW */}
                <div
                    className="
            absolute left-1/2 top-[-35%]
            h-[900px] w-[1800px]
            -translate-x-1/2
          "
                    style={{
                        background: `
              radial-gradient(
                ellipse at center,
                rgba(190,242,100,0.28) 0%,
                rgba(132,204,22,0.12) 28%,
                rgba(65,95,12,0.04) 52%,
                transparent 74%
              )
            `,
                        filter: "blur(120px)",
                    }}
                />

                {/* SOFT GRID */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
            `,
                        backgroundSize: "90px 90px",
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

                {/* BOTTOM FADE */}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(to bottom, transparent 55%, rgba(0,0,0,0.9) 100%)",
                    }}
                />
            </div>

            {/* CONTENT */}
            <div className="relative z-20 mx-auto max-w-[1650px] px-5 sm:px-8 lg:px-10">

                {/* TOP */}
                <div
                    className="
            mb-14 flex flex-col gap-8

            lg:flex-row
            lg:items-start
            lg:justify-between
          "
                >

                    {/* LEFT */}
                    <div className="max-w-4xl">

                        <h2
                            className="
                max-w-4xl
                text-[2.3rem]
                font-semibold
                leading-[1]
                tracking-[-0.06em]

                sm:text-[4rem]

                lg:text-[5rem]
              "
                        >
                            Over 7 Years Of Expertise In
                            <br />

                            <span className="relative inline-flex items-center gap-4">

                                Ad Creative

                                {/* CENTER ICON */}
                                <span
                                    className="
                    relative flex h-14 w-14
                    items-center justify-center
                    rounded-full
                    border border-lime-300/20
                    bg-lime-300
                    shadow-[0_0_50px_rgba(190,242,100,0.35)]
                  "
                                >

                                    <div
                                        className="
                      absolute inset-0 rounded-full
                      border border-lime-200/30
                    "
                                    />

                                    <Orbit className="h-6 w-6 text-black" />
                                </span>

                                Marketing
                            </span>
                        </h2>
                    </div>

                    {/* RIGHT */}
                    <div className="max-w-md">

                        <p
                            className="
                text-[15px]
                leading-[1.9]
                text-white/70

                sm:text-[17px]
              "
                        >
                            Active campaigns across multiple industries,
                            helping brands scale revenue through
                            high-performing ad creatives and paid social systems.
                        </p>
                    </div>
                </div>

                {/* FLOATING LABEL */}
                <div
                    className="
            relative z-30
            mb-[-22px]
            ml-0 w-fit

            md:ml-8
          "
                >

                    <div
                        className="
              flex items-center overflow-hidden
              rounded-full
              border border-white/[0.08]
              bg-[#0a0a0a]
              backdrop-blur-3xl
            "
                    >

                        <div
                            className="
                px-7 py-4
                text-sm
                font-medium
                text-white/80
              "
                        >
                            Performance Results
                        </div>

                        <div
                            className="
                flex h-[58px] w-[58px]
                items-center justify-center
                border-l border-white/[0.06]
                bg-lime-300/10
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
                                <Orbit className="h-5 w-5 text-black" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* CARDS */}
                <div
                    className="
            grid gap-6

            md:grid-cols-2
            xl:grid-cols-3
          "
                >

                    {stats.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="
                  group relative overflow-hidden
                  rounded-[30px]
                  border border-white/[0.06]
                  bg-[#080808]
                  px-8 pb-10 pt-7
                  transition-all duration-500

                  hover:border-lime-300/15
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
                        rgba(190,242,100,0.12),
                        transparent 70%
                      )
                    `,
                                    }}
                                />

                                {/* RINGS */}
                                <div
                                    className="
                    absolute right-[-70px] top-[-70px]
                    h-[220px] w-[220px]
                    rounded-full
                    border border-white/[0.04]
                  "
                                />

                                <div
                                    className="
                    absolute right-[-10px] top-[-10px]
                    h-[120px] w-[120px]
                    rounded-full
                    border border-white/[0.04]
                  "
                                />

                                {/* ICON */}
                                <div
                                    className="
                    relative z-10
                    mb-16 flex h-14 w-14
                    items-center justify-center
                    rounded-full
                    border border-lime-300/10
                    bg-lime-300/10
                  "
                                >

                                    <div
                                        className="
                      absolute inset-0 rounded-full
                      bg-lime-300/10 blur-xl
                    "
                                    />

                                    <Icon className="relative z-10 h-6 w-6 text-lime-200" />
                                </div>

                                {/* VALUE */}
                                <h3
                                    className="
                    relative z-10
                    text-[3.4rem]
                    font-semibold
                    leading-none
                    tracking-[-0.08em]

                    sm:text-[4.4rem]
                  "
                                >
                                    {item.value}
                                </h3>

                                {/* TITLE */}
                                <p
                                    className="
                    relative z-10
                    mt-7
                    text-[1.2rem]
                    font-medium
                    tracking-[-0.03em]
                    text-white/90
                  "
                                >
                                    {item.title}
                                </p>

                                {/* EDGE LIGHT */}
                                <div
                                    className="
                    absolute inset-0 rounded-[30px]
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

export default AdResults;