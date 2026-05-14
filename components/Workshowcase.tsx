"use client";

import React, { useState } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";

const categories = [
    "Ad Creatives",
    "Organic Content / YouTube",
    "SaaS Videos",
];

const projects = [
    {
        title: "Meta UGC Ad",
        tag: "UGC",
        duration: "15s",
        category: "Ad Creatives",
        image:
            "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "TikTok Performance",
        tag: "HOOK",
        duration: "6s",
        category: "Ad Creatives",
        image:
            "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "Creator Funnel",
        tag: "YT",
        duration: "12m",
        category: "Organic Content / YouTube",
        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "SaaS Explainer",
        tag: "SAAS",
        duration: "45s",
        category: "SaaS Videos",
        image:
            "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
    },
];

const Workshowcase = () => {
    const [active, setActive] = useState("Ad Creatives");

    const filtered = projects.filter(
        (project) => project.category === active
    );

    return (
        <section className="relative overflow-hidden border-none outline-none bg-[#030303] px-6 py-24 sm:py-32 lg:py-40 text-white">

            {/* BACKGROUND */}
            <div className="absolute inset-0 overflow-hidden">

                {/* BASE */}
                <div className="absolute inset-0 bg-[#030303]" />

                {/* TOP FADE */}
                <div
                    className="absolute inset-x-0 top-0 z-[40] h-40"
                    style={{
                        background:
                            "linear-gradient(to bottom, #030303, transparent)",
                    }}
                />

                {/* MASSIVE ATMOSPHERIC CORE */}
                <div
                    className="absolute left-1/2 top-[42%] h-[1000px] w-[1600px] sm:h-[1500px] sm:w-[2200px] -translate-x-1/2 -translate-y-1/2"
                    style={{
                        background: `
        radial-gradient(
          ellipse at center,
          rgba(16,185,129,0.18) 0%,
          rgba(52,211,153,0.10) 16%,
          rgba(45,212,191,0.06) 30%,
          rgba(255,255,255,0.018) 46%,
          transparent 72%
        )
      `,
                        filter: "blur(120px) sm:blur(200px)",
                        opacity: 0.95,
                    }}
                />

                {/* SECONDARY LIGHT FIELD */}
                <div
                    className="absolute left-1/2 top-[52%] h-[600px] w-[900px] sm:h-[900px] sm:w-[1400px] -translate-x-1/2 -translate-y-1/2"
                    style={{
                        background: `
        radial-gradient(
          ellipse,
          rgba(255,255,255,0.05),
          rgba(16,185,129,0.04),
          transparent 72%
        )
      `,
                        filter: "blur(90px) sm:blur(120px)",
                    }}
                />

                {/* LEFT AURORA */}
                <div
                    className="absolute left-[-18%] top-[5%] h-[600px] w-[600px] sm:h-[900px] sm:w-[900px]"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(52,211,153,0.12), transparent 72%)",
                        filter: "blur(120px) sm:blur(180px)",
                    }}
                />

                {/* RIGHT AURORA */}
                <div
                    className="absolute right-[-18%] top-[10%] h-[700px] w-[700px] sm:h-[1000px] sm:w-[1000px]"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(45,212,191,0.10), transparent 72%)",
                        filter: "blur(130px) sm:blur(190px)",
                    }}
                />

                {/* CENTER ENERGY DISC */}
                <div
                    className="absolute left-1/2 top-[48%] h-[340px] w-[340px] sm:h-[540px] sm:w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(255,255,255,0.08), transparent 72%)",
                        filter: "blur(50px) sm:blur(80px)",
                    }}
                />

                {/* OUTER RING */}
                <div className="absolute left-1/2 top-[48%] h-[800px] w-[800px] sm:h-[1200px] sm:w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.025]" />

                {/* INNER RING */}
                <div className="absolute left-1/2 top-[48%] h-[600px] w-[600px] sm:h-[860px] sm:w-[860px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400/[0.04]" />

                {/* HORIZONTAL LIGHT */}
                <div
                    className="absolute left-1/2 top-[52%] h-px w-[70%] -translate-x-1/2"
                    style={{
                        background:
                            "linear-gradient(to right, transparent, rgba(52,211,153,0.18), transparent)",
                        boxShadow: "0 0 40px rgba(52,211,153,0.14)",
                    }}
                />

                {/* VERTICAL BEAM */}
                <div
                    className="absolute left-1/2 top-[-10%] h-[120%] w-px -translate-x-1/2"
                    style={{
                        background:
                            "linear-gradient(to bottom, transparent, rgba(255,255,255,0.10), transparent)",
                        opacity: 0.5,
                    }}
                />

                {/* SIDE LASER */}
                <div
                    className="absolute left-[16%] top-0 h-full w-px"
                    style={{
                        background:
                            "linear-gradient(to bottom, transparent, rgba(52,211,153,0.24), transparent)",
                        boxShadow: "0 0 40px rgba(52,211,153,0.22)",
                    }}
                />

                {/* SIDE LASER */}
                <div
                    className="absolute right-[16%] top-0 h-full w-px"
                    style={{
                        background:
                            "linear-gradient(to bottom, transparent, rgba(45,212,191,0.22), transparent)",
                        boxShadow: "0 0 40px rgba(45,212,191,0.18)",
                    }}
                />

                {/* FLOATING LIGHTS */}
                <div className="absolute left-[12%] top-[22%] h-3 w-3 rounded-full bg-emerald-300 shadow-[0_0_35px_rgba(52,211,153,1)]" />

                <div className="absolute right-[18%] top-[30%] h-2.5 w-2.5 rounded-full bg-teal-300 shadow-[0_0_35px_rgba(45,212,191,1)]" />

                <div className="absolute left-[24%] bottom-[18%] h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.9)]" />

                <div className="absolute right-[24%] bottom-[22%] h-2 w-2 rounded-full bg-emerald-200 shadow-[0_0_30px_rgba(255,255,255,0.8)]" />

                {/* PREMIUM GRID */}
                <div
                    className="absolute inset-0 opacity-[0.018]"
                    style={{
                        backgroundImage: `
        linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
      `,
                        backgroundSize: "110px 110px",
                        maskImage:
                            "radial-gradient(circle at center, black, transparent 82%)",
                    }}
                />

                {/* MICRO NOISE */}
                <div
                    className="absolute inset-0 opacity-[0.035] mix-blend-soft-light"
                    style={{
                        backgroundImage:
                            "url('https://www.transparenttextures.com/patterns/noise.png')",
                    }}
                />

                {/* CINEMATIC VIGNETTE */}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "radial-gradient(circle at center, transparent 34%, rgba(0,0,0,0.84) 100%)",
                    }}
                />

                {/* BOTTOM FADE */}
                <div
                    className="absolute inset-x-0 bottom-0 z-[40] h-40"
                    style={{
                        background:
                            "linear-gradient(to top, #030303, transparent)",
                    }}
                />
            </div>

            {/* CONTENT */}
            <div className="relative z-10 mx-auto max-w-7xl">

                {/* TOP */}
                <div className="mb-16 sm:mb-24 flex flex-col gap-10 sm:gap-16 lg:flex-row">

                    {/* LEFT */}
                    <div className="lg:w-[340px]">

                        {/* LABEL */}
                        <div className="mb-6 flex items-center gap-3">

                            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10">
                                <Sparkles className="h-5 w-5 text-emerald-300" />
                            </div>

                            <h2 className="text-4xl sm:text-5xl font-semibold tracking-[-0.06em] text-white">
                                Portfolio
                            </h2>
                        </div>

                        {/* SUBTEXT */}
                        <p className="max-w-sm text-[16px] sm:text-[17px] leading-relaxed text-white/45">
                            Where content meets ROI. Cinematic visuals designed to stop the
                            scroll and scale modern brands.
                        </p>

                        {/* FILTER */}
                        <div className="mt-10 sm:mt-16">

                            <p className="mb-6 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.35em] text-white/25">
                                Filter by category
                            </p>

                            <div className="flex flex-wrap gap-2 lg:flex-col lg:space-y-3">

                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setActive(category)}
                                        className={`group relative flex items-center justify-between overflow-hidden rounded-full border px-5 py-3 sm:px-6 sm:py-4 text-left text-xs sm:text-sm font-medium transition-all duration-500 ${active === category
                                            ? "border-white/10 bg-white text-black shadow-[0_0_60px_rgba(255,255,255,0.12)]"
                                            : "border-white/10 bg-white/[0.02] text-white/45 hover:border-emerald-400/20 hover:bg-white/[0.03]"
                                            }`}
                                    >
                                        <span>{category}</span>

                                        <ArrowUpRight
                                            className={`h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-500 ml-3 ${active === category
                                                ? "rotate-45"
                                                : "group-hover:rotate-45"
                                                }`}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="relative flex-1">

                        {/* MAIN CONTAINER */}
                        <div className="relative overflow-hidden rounded-[32px] sm:rounded-[48px] border border-white/10 bg-white/[0.03] p-3 sm:p-5 backdrop-blur-3xl">

                            {/* INNER ATMOSPHERE */}
                            <div
                                className="absolute left-1/2 top-[20%] h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-400/10"
                                style={{
                                    filter: "blur(120px)",
                                }}
                            />

                            {/* HEADER */}
                            <div className="relative z-10 mb-6 flex items-center justify-between flex-wrap gap-4">

                                {/* LEFT */}
                                <div className="flex items-center gap-3">

                                    <div className="flex gap-2">
                                        <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-emerald-400" />
                                        <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-white/30" />
                                        <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-white/15" />
                                    </div>

                                    <div className="ml-2 sm:ml-4 text-[9px] sm:text-[11px] uppercase tracking-[0.3em] text-white/35">
                                        Creative Showcase
                                    </div>
                                </div>

                                {/* RIGHT */}
                                <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 sm:px-4 sm:py-2 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-emerald-300">
                                    Live Portfolio
                                </div>
                            </div>

                            {/* MAIN LAYOUT */}
                            <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">

                                {/* FEATURED */}
                                <div className="group relative overflow-hidden rounded-[24px] sm:rounded-[36px] border border-white/10 bg-black/40">

                                    {/* IMAGE */}
                                    <div className="relative h-[400px] sm:h-[600px] lg:h-[760px] overflow-hidden">

                                        <img
                                            src={filtered[0]?.image}
                                            alt={filtered[0]?.title}
                                            className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.06]"
                                        />

                                        {/* OVERLAY */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                                        {/* CINEMATIC LIGHT */}
                                        <div
                                            className="absolute bottom-[-15%] left-1/2 h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-400/20 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                                            style={{
                                                filter: "blur(120px)",
                                            }}
                                        />

                                        {/* TOP */}
                                        <div className="absolute left-0 top-0 flex w-full items-center justify-between p-4 sm:p-6">

                                            <div className="flex gap-2">

                                                <div className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 sm:px-4 sm:py-2 text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-white/70 backdrop-blur-xl">
                                                    {filtered[0]?.tag}
                                                </div>

                                                <div className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 sm:px-4 sm:py-2 text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-white/70 backdrop-blur-xl">
                                                    {filtered[0]?.duration}
                                                </div>
                                            </div>

                                            {/* LIVE BADGE */}
                                            <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 sm:px-4 sm:py-2 backdrop-blur-xl">

                                                <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(52,211,153,0.9)]" />

                                                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-emerald-300">
                                                    Featured
                                                </span>
                                            </div>
                                        </div>

                                        {/* PLAY */}
                                        <div className="absolute left-1/2 top-1/2 flex h-[100px] w-[100px] sm:h-[150px] sm:w-[150px] -translate-x-1/2 -translate-y-1/2 items-center justify-center">

                                            {/* OUTER */}
                                            <div className="absolute inset-0 rounded-full border border-white/10 bg-white/10 backdrop-blur-3xl" />

                                            {/* INNER */}
                                            <div className="relative z-20 flex h-[50px] w-[50px] sm:h-[74px] sm:w-[74px] items-center justify-center rounded-full bg-white transition-all duration-500 group-hover:scale-110">

                                                <svg width="20" height="20" className="sm:w-[24px] sm:h-[24px]" viewBox="0 0 24 24" fill="black">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* BOTTOM */}
                                        <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8">

                                            <p className="mb-2 sm:mb-4 text-[9px] sm:text-[11px] uppercase tracking-[0.3em] text-white/40">
                                                PERFORMANCE CREATIVE
                                            </p>

                                            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-8">

                                                <div>
                                                    <h3 className="max-w-xl text-3xl sm:text-5xl font-semibold tracking-[-0.06em] text-white">
                                                        {filtered[0]?.title}
                                                    </h3>

                                                    <p className="mt-3 sm:mt-4 max-w-lg text-sm sm:text-[15px] leading-relaxed text-white/55">
                                                        Cinematic motion systems engineered for modern
                                                        performance brands and high-converting campaigns.
                                                    </p>
                                                </div>

                                                <button className="group/button self-start sm:self-auto flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-2xl transition-all duration-500 hover:scale-110 hover:bg-white hover:text-black">

                                                    <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-500 group-hover/button:rotate-45" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* RIGHT STACK */}
                                <div className="space-y-5">

                                    {filtered.slice(1).map((project, index) => (
                                        <div
                                            key={index}
                                            className="group relative overflow-hidden rounded-[24px] sm:rounded-[30px] border border-white/10 bg-white/[0.03]"
                                        >

                                            <div className="relative h-[200px] sm:h-[240px] overflow-hidden">

                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                />

                                                {/* OVERLAY */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                                                {/* CONTENT */}
                                                <div className="absolute bottom-0 left-0 w-full p-4 sm:p-5">

                                                    <div className="mb-3 sm:mb-4 flex gap-2">

                                                        <div className="rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-white/70 backdrop-blur-xl">
                                                            {project.tag}
                                                        </div>

                                                        <div className="rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-white/70 backdrop-blur-xl">
                                                            {project.duration}
                                                        </div>
                                                    </div>

                                                    <div className="flex items-end justify-between gap-4">

                                                        <div>
                                                            <h4 className="text-xl sm:text-2xl font-semibold tracking-[-0.05em] text-white">
                                                                {project.title}
                                                            </h4>

                                                            <p className="mt-1.5 text-xs sm:text-sm text-white/45">
                                                                Creative engineered to stop the scroll.
                                                            </p>
                                                        </div>

                                                        <button className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-xl transition-all duration-500 hover:scale-110 hover:bg-white hover:text-black">

                                                            <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    {/* ADD MORE */}
                                    <button className="group relative flex h-[200px] sm:h-[240px] w-full items-center justify-center overflow-hidden rounded-[24px] sm:rounded-[30px] border border-dashed border-white/10 bg-white/[0.02] transition-all duration-700 hover:border-emerald-400/20 hover:bg-white/[0.03]">

                                        {/* GLOW */}
                                        <div
                                            className="absolute inset-[-20%] rounded-full bg-emerald-400/0 opacity-0 transition-all duration-700 group-hover:bg-emerald-400/10 group-hover:opacity-100"
                                            style={{
                                                filter: "blur(120px)",
                                            }}
                                        />

                                        <div className="relative z-10 text-center">

                                            <div className="mx-auto flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition-transform duration-500 group-hover:scale-110">

                                                <span className="text-2xl sm:text-3xl text-white/70">+</span>
                                            </div>

                                            <p className="mt-4 sm:mt-5 text-[10px] sm:text-sm font-medium uppercase tracking-[0.25em] text-white/40">
                                                More Case Studies
                                            </p>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Workshowcase;