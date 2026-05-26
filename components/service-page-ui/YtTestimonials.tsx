"use client";

import React from "react";

const testimonials = [
  {
    company: "GE Ventures",
    quote:
      "These guys are the real deal. Effective, efficient, and a pleasure to work with. Dan quickly understood our business and helped us articulate our offer through content that actually converts.",
    name: "Jordan Feder",
    role: "VC at GE Ventures",
  },
];

const YtTestimonials = () => {
  return (
    <section className="relative overflow-hidden py-14 text-white sm:py-16 md:py-18">

      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none transform-gpu will-change-transform">

        {/* MASSIVE TOP ATMOSPHERE */}
        <div
          className="absolute left-1/2 top-[-30%] h-[950px] w-[1800px] -translate-x-1/2"
          style={{
            background: `
              radial-gradient(
                ellipse at center,
                rgba(255,0,76,0.14) 0%,
                rgba(255,0,98,0.08) 18%,
                rgba(255,80,80,0.05) 34%,
                rgba(255,255,255,0.02) 48%,
                transparent 74%
              )
            `,
            filter: "blur(50px)",
            opacity: 0.9,
          }}
        />

        {/* SECONDARY CLOUD */}
        <div
          className="absolute left-1/2 top-[4%] h-[620px] w-[1200px] -translate-x-1/2"
          style={{
            background: `
              radial-gradient(
                ellipse,
                rgba(255,0,76,0.08),
                rgba(255,0,98,0.03),
                transparent 72%
              )
            `,
            filter: "blur(50px)",
          }}
        />

        {/* LEFT GLOW */}
        <div
          className="absolute left-[-12%] top-[20%] h-[620px] w-[620px] rounded-full"
          style={{
            background: `
              radial-gradient(
                circle,
                rgba(255,0,98,0.08),
                rgba(255,0,76,0.03),
                transparent 72%
              )
            `,
            filter: "blur(50px)",
          }}
        />

        {/* RIGHT GLOW */}
        <div
          className="absolute right-[-10%] top-[6%] h-[700px] w-[700px] rounded-full"
          style={{
            background: `
              radial-gradient(
                circle,
                rgba(255,60,60,0.08),
                rgba(255,0,76,0.03),
                transparent 72%
              )
            `,
            filter: "blur(50px)",
          }}
        />

        {/* CENTER LIGHT */}
        <div
          className="absolute left-1/2 top-[34%] h-[260px] w-[700px] -translate-x-1/2"
          style={{
            background: `
              radial-gradient(
                ellipse,
                rgba(255,255,255,0.08),
                rgba(255,255,255,0.03),
                transparent 72%
              )
            `,
            filter: "blur(50px)",
            opacity: 0.7,
          }}
        />

        {/* LIGHT STREAK */}
        <div
          className="absolute left-[-8%] top-[40%] h-[180px] w-[760px] rotate-[16deg]"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(255,0,76,0.06), transparent)",
            filter: "blur(50px)",
          }}
        />

        {/* ORBIT RINGS */}
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-400/[0.04]" />

        <div className="absolute left-1/2 top-1/2 h-[340px] w-[820px] -translate-x-1/2 -translate-y-1/2 rotate-[18deg] rounded-full border border-white/[0.03]" />

        {/* FLOATING PARTICLES */}
        <div className="absolute left-[16%] top-[68%] h-2 w-2 rounded-full bg-red-300 shadow-[0_0_20px_rgba(255,0,76,0.9)]" />

        <div className="absolute right-[18%] top-[28%] h-2.5 w-2.5 rounded-full bg-red-200 shadow-[0_0_24px_rgba(255,80,80,0.9)]" />

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

        {/* GRAIN */}
        <div
          className="absolute inset-0 opacity-[0.10] mix-blend-soft-light"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
          }}
        />

        {/* BOTTOM BLEND */}
        <div
          className="absolute bottom-[-10%] left-0 h-[40%] w-full"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.92), rgba(0,0,0,0.58), transparent)",
            filter: "blur(20px)",
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-20 mx-auto max-w-[1050px] px-5 text-center sm:px-8">

        {/* TOP */}
        <div className="mb-10">

          {/* LABEL */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-400/10 bg-red-500/5 px-4 py-2 backdrop-blur-xl">

            <div className="h-2 w-2 rounded-full bg-red-400 shadow-[0_0_14px_rgba(255,0,76,1)]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-red-100">
              TESTIMONIALS
            </span>
          </div>

          {/* HEADING */}
          <h2 className="text-[2.1rem] font-semibold leading-[1] tracking-[-0.05em] sm:text-[2.8rem] lg:text-[3.4rem]">
            What Our Clients
            <span className="ml-3 inline-block font-serif italic font-normal tracking-[-0.03em] text-red-100">
              Are Saying.
            </span>
          </h2>
        </div>

        {/* TESTIMONIAL CARD */}
        <div className="relative overflow-hidden rounded-[30px] border border-white/[0.03] bg-white/[0.025] px-6 py-10 backdrop-blur-2xl md:px-12 md:py-14">

          {/* INNER GLOW */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at top, rgba(255,0,76,0.08), transparent 72%)",
            }}
          />

          {/* COMPANY */}
          <div className="relative z-10 mb-8 text-[0.9rem] font-semibold uppercase tracking-[0.16em] text-white/95">
            {testimonials[0].company}
          </div>

          {/* QUOTE */}
          <blockquote className="relative z-10 mx-auto max-w-3xl text-[1.15rem] font-serif italic leading-[1.6] tracking-[-0.02em] text-white/88 sm:text-[1.45rem] lg:text-[1.8rem]">
            “{testimonials[0].quote}”
          </blockquote>

          {/* USER */}
          <div className="relative z-10 mt-10 flex flex-col items-center">

            {/* NAME */}
            <h4 className="text-[15px] font-semibold tracking-[-0.02em]">
              {testimonials[0].name}
            </h4>

            {/* ROLE */}
            <p className="mt-1 text-[13px] text-white/45">
              {testimonials[0].role}
            </p>
          </div>

          {/* EDGE LIGHT */}
          <div className="absolute inset-0 rounded-[30px] border border-white/[0.03]" />
        </div>
      </div>
    </section>
  );
};

export default YtTestimonials;