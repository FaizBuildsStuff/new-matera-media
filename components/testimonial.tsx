"use client";

import React from "react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Head of Growth @Flow",
    text: "Honestly, I was skeptical at first, but Matera completely changed how we approach ad creatives. The results were immediate and the quality felt leagues ahead of anything we previously outsourced.",
  },
  {
    name: "Alexandra Foster",
    role: "Founder @Aura",
    text: "Their team didn’t just create content — they built a visual identity around our brand. Every frame felt intentional, cinematic, and designed to convert.",
  },
  {
    name: "David Park",
    role: "Creative Lead @Studio",
    text: "Finally found a creative partner that understands both storytelling and performance marketing. They’ve become part of our internal team at this point.",
  },
  {
    name: "Elena Rodriguez",
    role: "Creator",
    text: "The editing quality is unreal. Everything feels premium, modern, and crafted with insane attention to detail.",
  },
  {
    name: "Marcus Webb",
    role: "CMO @Enterprise",
    text: "Our CAC dropped significantly after switching to Matera’s creative systems. Their work isn’t just visually impressive — it performs.",
  },
  {
    name: "Sebastian G.",
    role: "Entrepreneur",
    text: "Every launch we’ve done with them has exceeded expectations. The visuals, pacing, editing, and strategy all feel world-class.",
  },
];

const Testimonial = () => {
  return (
    <section className="relative border-none outline-none px-6 py-36 text-white" aria-label="Client testimonials">

      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none transform-gpu will-change-transform border-none">

        {/* MASSIVE SMOOTH AURORA */}
        <div
          className="absolute left-1/2 top-[38%] h-[1200px] w-[1800px] -translate-x-1/2 -translate-y-1/2"
          style={{
            background: `
        radial-gradient(circle at center,
        rgba(16,185,129,0.14) 0%,
        rgba(52,211,153,0.08) 22%,
        rgba(45,212,191,0.06) 38%,
        transparent 72%)
      `,
            filter: "blur(50px)",
          }}
        />

        {/* LEFT AMBIENT */}
        <div
          className="absolute left-[-15%] top-[10%] h-[700px] w-[700px] rounded-full bg-emerald-400/10"
          style={{
            filter: "blur(50px)",
          }}
        />

        {/* RIGHT AMBIENT */}
        <div
          className="absolute right-[-10%] top-[15%] h-[700px] w-[700px] rounded-full bg-teal-300/10"
          style={{
            filter: "blur(50px)",
          }}
        />

        {/* CENTER LIGHT */}
        <div
          className="absolute left-1/2 top-[45%] h-[550px] w-[900px] -translate-x-1/2 -translate-y-1/2"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.06), transparent 72%)",
            filter: "blur(50px)",
          }}
        />

        {/* BOTTOM ATMOSPHERE */}
        <div
          className="absolute bottom-[-20%] left-1/2 h-[500px] w-[1400px] -translate-x-1/2 rounded-full bg-emerald-400/8"
          style={{
            filter: "blur(50px)",
          }}
        />

        {/* GIANT GLASS ORB */}
        <div className="absolute left-1/2 top-[42%] h-[950px] w-[950px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.03] bg-white/[0.01] backdrop-blur-[2px]" />

        {/* TOP BLENDING GLOW */}
        <div
          className="absolute left-1/2 top-0 h-[500px] w-full -translate-x-1/2 bg-emerald-500/10"
          style={{
            filter: "blur(50px)",
            borderRadius: "0 0 100% 100%"
          }}
        />

        {/* SECOND ORB */}
        <div className="absolute left-1/2 top-[42%] h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400/[0.05]" />


        {/* LIGHT BEAM LEFT */}
        <div
          className="absolute left-[10%] top-[25%] h-[500px] w-[1px] bg-emerald-300/20"
          style={{
            boxShadow: "0 0 40px rgba(52,211,153,0.5)",
          }}
        />

        {/* LIGHT BEAM RIGHT */}
        <div
          className="absolute right-[12%] top-[18%] h-[600px] w-[1px] bg-teal-300/20"
          style={{
            boxShadow: "0 0 40px rgba(94,234,212,0.4)",
          }}
        />

        {/* FLOATING DOTS */}
        <div className="absolute left-[18%] top-[22%] h-3 w-3 rounded-full bg-emerald-300 shadow-[0_0_30px_rgba(52,211,153,0.9)]" />

        <div className="absolute right-[20%] top-[34%] h-2.5 w-2.5 rounded-full bg-teal-300 shadow-[0_0_25px_rgba(94,234,212,0.9)]" />

        <div className="absolute left-[24%] bottom-[18%] h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.8)]" />

        <div className="absolute right-[16%] bottom-[15%] h-3 w-3 rounded-full bg-emerald-300 shadow-[0_0_30px_rgba(52,211,153,0.9)]" />

        {/* SOFT GRID - Size and opacity matched with Hero */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
        linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
      `,
            backgroundSize: "90px 90px",
            maskImage:
              "radial-gradient(circle at center, black, transparent 82%)",
          }}
        />

        {/* NOISE - Opacity matched with Hero */}
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-soft-light"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/noise.png')",
          }}
        />

        
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* TOP */}
        <div className="mb-24 text-center">

          <div className="mb-5">
            <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-emerald-300">
              CLIENT SUCCESS
            </span>
          </div>

          <h2 className="text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
            Trusted by Brands & Creators
          </h2>

          <p className="mt-5 text-sm font-medium uppercase tracking-[0.25em] text-white/25">
            And there's a good reason why.
          </p>
        </div>

        {/* TESTIMONIAL GRID */}
        <div className="relative z-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {testimonials.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-black/30 p-8 backdrop-blur-3xl transition-all duration-500 hover:-translate-y-2 hover:border-emerald-400/20"
            >

              {/* HOVER GLOW */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">

                <div
                  className="absolute inset-[-20%] rounded-full bg-emerald-400/10"
                  style={{
                    filter: "blur(50px)",
                  }}
                />
              </div>

              {/* TOP */}
              <div className="relative z-10 flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sm font-semibold">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-emerald-300">
                    {item.role}
                  </p>
                </div>
              </div>

              {/* STARS */}
              <div className="relative z-10 mt-6 flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div
                    key={index}
                    className="h-2.5 w-2.5 rounded-full bg-emerald-300"
                  />
                ))}
              </div>

              {/* TEXT */}
              <p className="relative z-10 mt-7 text-[15px] leading-relaxed text-white/65">
                {item.text}
              </p>

              {/* BORDER */}
              <div className="absolute inset-0 rounded-[36px] border border-white/[0.03]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;