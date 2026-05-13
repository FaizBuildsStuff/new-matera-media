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
    <section className="relative overflow-hidden border-none outline-none bg-[#030303] px-6 py-40 text-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        {/* BASE */}
        <div className="absolute inset-0 bg-[#030303]" />
        
        {/* TOP SHROUD */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#030303] to-transparent z-[45] pointer-events-none" />

        {/* MASSIVE CENTER AURORA */}
        <div
          className="absolute left-1/2 top-[40%] h-[1200px] w-[1800px] -translate-x-1/2 -translate-y-1/2"
          style={{
            background: `
              radial-gradient(
                circle,
                rgba(16,185,129,0.16) 0%,
                rgba(45,212,191,0.08) 28%,
                rgba(255,255,255,0.02) 48%,
                transparent 72%
              )
            `,
            filter: "blur(180px)",
          }}
        />

        {/* LEFT ATMOSPHERE */}
        <div
          className="absolute left-[-10%] top-[10%] h-[700px] w-[700px] rounded-full bg-emerald-400/10"
          style={{
            filter: "blur(180px)",
          }}
        />

        {/* RIGHT ATMOSPHERE */}
        <div
          className="absolute right-[-10%] top-[20%] h-[700px] w-[700px] rounded-full bg-teal-300/10"
          style={{
            filter: "blur(180px)",
          }}
        />

        {/* LIGHT BEAM */}
        <div
          className="absolute left-[18%] top-0 h-full w-[1px] bg-emerald-300/20"
          style={{
            boxShadow: "0 0 40px rgba(52,211,153,0.4)",
          }}
        />

        {/* LIGHT BEAM */}
        <div
          className="absolute right-[15%] top-0 h-full w-[1px] bg-teal-300/20"
          style={{
            boxShadow: "0 0 40px rgba(94,234,212,0.4)",
          }}
        />

        {/* HUGE ORB */}
        <div className="absolute left-1/2 top-[45%] h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.03]" />

        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.03]"
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

        {/* NOISE */}
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-soft-light"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/noise.png')",
          }}
        />

        {/* FLOATING DOTS */}
        <div className="absolute left-[15%] top-[22%] h-3 w-3 rounded-full bg-emerald-300 shadow-[0_0_30px_rgba(52,211,153,0.9)]" />

        <div className="absolute right-[18%] top-[32%] h-2.5 w-2.5 rounded-full bg-teal-300 shadow-[0_0_25px_rgba(94,234,212,0.8)]" />

        <div className="absolute left-[22%] bottom-[18%] h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_25px_rgba(255,255,255,0.8)]" />

        {/* VIGNETTE - Blended for continuity */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, transparent 35%, rgba(0,0,0,0.75) 100%)",
            maskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent 100%)"
          }}
        />
        
        {/* BOTTOM SHROUD */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#030303] to-transparent z-[45] pointer-events-none" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* TOP */}
        <div className="mb-24 flex flex-col gap-16 xl:flex-row">

          {/* LEFT */}
          <div className="xl:w-[340px]">

            {/* LABEL */}
            <div className="mb-6 flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10">
                <Sparkles className="h-5 w-5 text-emerald-300" />
              </div>

              <h2 className="text-5xl font-semibold tracking-[-0.06em] text-white">
                Portfolio
              </h2>
            </div>

            {/* SUBTEXT */}
            <p className="max-w-sm text-[17px] leading-relaxed text-white/45">
              Where content meets ROI. Cinematic visuals designed to stop the
              scroll and scale modern brands.
            </p>

            {/* FILTER */}
            <div className="mt-16">

              <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/25">
                Filter by category
              </p>

              <div className="space-y-3">

                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActive(category)}
                    className={`group relative flex w-full items-center justify-between overflow-hidden rounded-full border px-6 py-4 text-left text-sm font-medium transition-all duration-500 ${
                      active === category
                        ? "border-white/10 bg-white text-black shadow-[0_0_60px_rgba(255,255,255,0.12)]"
                        : "border-white/10 bg-white/[0.02] text-white/45 hover:border-emerald-400/20 hover:bg-white/[0.03]"
                    }`}
                  >
                    <span>{category}</span>

                    <ArrowUpRight
                      className={`h-4 w-4 transition-transform duration-500 ${
                        active === category
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
  <div className="relative overflow-hidden rounded-[48px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-3xl">

    {/* INNER ATMOSPHERE */}
    <div
      className="absolute left-1/2 top-[20%] h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-400/10"
      style={{
        filter: "blur(120px)",
      }}
    />

    {/* HEADER */}
    <div className="relative z-10 mb-6 flex items-center justify-between">

      {/* LEFT */}
      <div className="flex items-center gap-3">

        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-emerald-400" />
          <div className="h-3 w-3 rounded-full bg-white/30" />
          <div className="h-3 w-3 rounded-full bg-white/15" />
        </div>

        <div className="ml-4 text-[11px] uppercase tracking-[0.3em] text-white/35">
          Creative Showcase
        </div>
      </div>

      {/* RIGHT */}
      <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-emerald-300">
        Live Portfolio
      </div>
    </div>

    {/* MAIN LAYOUT */}
    <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">

      {/* FEATURED */}
      <div className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-black/40">

        {/* IMAGE */}
        <div className="relative h-[760px] overflow-hidden">

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
          <div className="absolute left-0 top-0 flex w-full items-center justify-between p-6">

            <div className="flex gap-2">

              <div className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-white/70 backdrop-blur-xl">
                {filtered[0]?.tag}
              </div>

              <div className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-white/70 backdrop-blur-xl">
                {filtered[0]?.duration}
              </div>
            </div>

            {/* LIVE BADGE */}
            <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 backdrop-blur-xl">

              <div className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(52,211,153,0.9)]" />

              <span className="text-[10px] uppercase tracking-[0.18em] text-emerald-300">
                Featured
              </span>
            </div>
          </div>

          {/* PLAY */}
          <div className="absolute left-1/2 top-1/2 flex h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 items-center justify-center">

            {/* OUTER */}
            <div className="absolute inset-0 rounded-full border border-white/10 bg-white/10 backdrop-blur-3xl" />

            {/* INNER */}
            <div className="relative z-20 flex h-[74px] w-[74px] items-center justify-center rounded-full bg-white transition-all duration-500 group-hover:scale-110">

              <svg width="24" height="24" viewBox="0 0 24 24" fill="black">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="absolute bottom-0 left-0 w-full p-8">

            <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-white/40">
              PERFORMANCE CREATIVE
            </p>

            <div className="flex items-end justify-between gap-8">

              <div>
                <h3 className="max-w-xl text-5xl font-semibold tracking-[-0.06em] text-white">
                  {filtered[0]?.title}
                </h3>

                <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-white/55">
                  Cinematic motion systems engineered for modern
                  performance brands and high-converting campaigns.
                </p>
              </div>

              <button className="group/button flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-2xl transition-all duration-500 hover:scale-110 hover:bg-white hover:text-black">

                <ArrowUpRight className="h-6 w-6 transition-transform duration-500 group-hover/button:rotate-45" />
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
            className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03]"
          >

            <div className="relative h-[240px] overflow-hidden">

              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 w-full p-5">

                <div className="mb-4 flex gap-2">

                  <div className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/70 backdrop-blur-xl">
                    {project.tag}
                  </div>

                  <div className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/70 backdrop-blur-xl">
                    {project.duration}
                  </div>
                </div>

                <div className="flex items-end justify-between gap-4">

                  <div>
                    <h4 className="text-2xl font-semibold tracking-[-0.05em] text-white">
                      {project.title}
                    </h4>

                    <p className="mt-2 text-sm text-white/45">
                      Creative engineered to stop the scroll.
                    </p>
                  </div>

                  <button className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-xl transition-all duration-500 hover:scale-110 hover:bg-white hover:text-black">

                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* ADD MORE */}
        <button className="group relative flex h-[240px] w-full items-center justify-center overflow-hidden rounded-[30px] border border-dashed border-white/10 bg-white/[0.02] transition-all duration-700 hover:border-emerald-400/20 hover:bg-white/[0.03]">

          {/* GLOW */}
          <div
            className="absolute inset-[-20%] rounded-full bg-emerald-400/0 opacity-0 transition-all duration-700 group-hover:bg-emerald-400/10 group-hover:opacity-100"
            style={{
              filter: "blur(120px)",
            }}
          />

          <div className="relative z-10 text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition-transform duration-500 group-hover:scale-110">

              <span className="text-3xl text-white/70">+</span>
            </div>

            <p className="mt-5 text-sm font-medium uppercase tracking-[0.25em] text-white/40">
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