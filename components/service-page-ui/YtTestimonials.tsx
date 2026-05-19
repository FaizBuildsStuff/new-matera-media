"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

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
    <section
      className="
        relative 
        
        py-28 text-white

        md:py-36
      "
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none transform-gpu will-change-transform">

  

  {/* MASSIVE TOP ATMOSPHERE */}
  <div
    className="
      absolute left-1/2 top-[-28%]
      h-[1200px] w-[2400px]
      -translate-x-1/2

      md:h-[1600px]
      md:w-[3200px]
    "
    style={{
      background: `
        radial-gradient(
          ellipse at center,
          rgba(255,0,76,0.22) 0%,
          rgba(255,0,98,0.12) 18%,
          rgba(255,80,80,0.08) 34%,
          rgba(255,255,255,0.03) 48%,
          transparent 74%
        )
      `,
      filter: "blur(50px)",
      opacity: 0.95,
    }}
  />

  {/* SECONDARY RED CLOUD */}
  <div
    className="
      absolute left-1/2 top-[4%]
      h-[900px] w-[1600px]
      -translate-x-1/2
    "
    style={{
      background: `
        radial-gradient(
          ellipse,
          rgba(255,0,76,0.14),
          rgba(255,0,98,0.05),
          transparent 72%
        )
      `,
      filter: "blur(50px)",
    }}
  />

  {/* LEFT SIDE GLOW */}
  <div
    className="
      absolute left-[-12%] top-[18%]
      h-[900px] w-[900px]
      rounded-full
    "
    style={{
      background: `
        radial-gradient(
          circle,
          rgba(255,0,98,0.14),
          rgba(255,0,76,0.06),
          transparent 72%
        )
      `,
      filter: "blur(50px)",
    }}
  />

  {/* RIGHT SIDE GLOW */}
  <div
    className="
      absolute right-[-10%] top-[4%]
      h-[1000px] w-[1000px]
      rounded-full
    "
    style={{
      background: `
        radial-gradient(
          circle,
          rgba(255,60,60,0.12),
          rgba(255,0,76,0.04),
          transparent 72%
        )
      `,
      filter: "blur(50px)",
    }}
  />

  {/* CENTER WHITE LIGHT */}
  <div
    className="
      absolute left-1/2 top-[32%]
      h-[320px] w-[900px]
      -translate-x-1/2
    "
    style={{
      background: `
        radial-gradient(
          ellipse,
          rgba(255,255,255,0.10),
          rgba(255,255,255,0.04),
          transparent 72%
        )
      `,
      filter: "blur(50px)",
      opacity: 0.7,
    }}
  />

  {/* LIGHT STREAK */}
  <div
    className="
      absolute left-[-8%] top-[40%]
      h-[260px] w-[1100px]
      rotate-[16deg]
    "
    style={{
      background:
        "linear-gradient(to right, transparent, rgba(255,0,76,0.10), transparent)",
      filter: "blur(50px)",
    }}
  />

  {/* SECOND LIGHT STREAK */}
  <div
    className="
      absolute right-[-10%] top-[22%]
      h-[220px] w-[900px]
      rotate-[-18deg]
    "
    style={{
      background:
        "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)",
      filter: "blur(50px)",
    }}
  />

  {/* ORBIT RINGS */}
  <div
    className="
      absolute left-1/2 top-1/2
      h-[760px] w-[760px]
      -translate-x-1/2 -translate-y-1/2
      rounded-full
      border border-red-400/[0.06]
    "
  />

  <div
    className="
      absolute left-1/2 top-1/2
      h-[520px] w-[1100px]
      -translate-x-1/2 -translate-y-1/2
      rotate-[22deg]
      rounded-full
      border border-white/[0.04]
    "
  />

  <div
    className="
      absolute left-1/2 top-1/2
      h-[640px] w-[340px]
      -translate-x-1/2 -translate-y-1/2
      rotate-[-24deg]
      rounded-full
      border border-red-400/[0.05]
    "
  />

  {/* FLOATING PARTICLES */}
  <div className="absolute left-[16%] top-[68%] h-2.5 w-2.5 rounded-full bg-red-300 shadow-[0_0_25px_rgba(255,0,76,0.9)]" />

  <div className="absolute right-[18%] top-[28%] h-3 w-3 rounded-full bg-red-200 shadow-[0_0_30px_rgba(255,80,80,0.9)]" />

  <div className="absolute left-[26%] top-[24%] h-2 w-2 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.8)]" />

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

  {/* PREMIUM GRAIN */}
  <div
    className="absolute inset-0 opacity-[0.12] mix-blend-soft-light"
    style={{
      backgroundImage:
        "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
    }}
  />

  

  

  
</div>

      {/* CONTENT */}
      <div className="relative z-20 mx-auto max-w-[1200px] px-6 text-center">

        {/* TOP */}
        <div className="mb-16">

          {/* SMALL LABEL */}
          <div
            className="
              mb-6 inline-flex items-center gap-3
              rounded-full
              border border-red-400/10
              bg-red-500/5
              px-5 py-3
              backdrop-blur-xl
            "
          >

            <div className="h-2 w-2 rounded-full bg-red-400 shadow-[0_0_14px_rgba(255,0,76,1)]" />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.24em]
                text-red-100
              "
            >
              TESTIMONIALS
            </span>
          </div>

          {/* HEADING */}
          <h2
            className="
              text-[3rem]
              font-semibold
              leading-[1]
              tracking-[-0.05em]

              sm:text-[5rem]

              lg:text-[6rem]
            "
          >
            What Our Clients
            <span
              className="
                ml-4 inline-block
                font-serif italic
                font-normal
                tracking-[-0.03em]
                text-red-100
              "
            >
              Are Saying.
            </span>
          </h2>
        </div>

        {/* TESTIMONIAL CARD */}
        <div
          className="
            relative overflow-hidden
            rounded-[48px]
            border border-white/[0.06]
            bg-white/[0.03]
            px-8 py-14
            backdrop-blur-3xl

            md:px-20
            md:py-20
          "
        >

          {/* INNER GLOW */}
          <div
            className="
              absolute inset-0
            "
            style={{
              background: `
                radial-gradient(
                  circle at top,
                  rgba(255,0,76,0.10),
                  transparent 72%
                )
              `,
            }}
          />

          {/* COMPANY */}
          <div
            className="
              relative z-10 mb-12
              text-[1.1rem]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-white/95
            "
          >
            {testimonials[0].company}
          </div>

          {/* QUOTE */}
          <blockquote
            className="
              relative z-10 mx-auto
              max-w-4xl

              text-[1.5rem]
              font-serif
              italic
              leading-[1.45]
              tracking-[-0.03em]
              text-white/92

              sm:text-[2rem]

              lg:text-[2.5rem]
            "
          >
            “{testimonials[0].quote}”
          </blockquote>

          {/* USER */}
          <div
            className="
              relative z-10 mt-14
              flex flex-col items-center
            "
          >


            {/* NAME */}
            <h4
              className="
                mt-5
                text-[1rem]
                font-semibold
                tracking-[-0.03em]
              "
            >
              {testimonials[0].name}
            </h4>

            {/* ROLE */}
            <p
              className="
                mt-1
                text-sm
                text-white/45
              "
            >
              {testimonials[0].role}
            </p>
          </div>


          {/* EDGE LIGHT */}
          <div
            className="
              absolute inset-0 rounded-[48px]
              border border-white/[0.03]
            "
          />
        </div>
      </div>
    </section>
  );
};

export default YtTestimonials;