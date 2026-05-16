"use client";

import React, { useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Play,
} from "lucide-react";

const reels = [
  {
    title: "Skincare UGC",
    stats: "4.8x ROAS",
    thumb:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Fitness Ad",
    stats: "32% Lower CAC",
    thumb:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "SaaS Creative",
    stats: "7.1% CTR",
    thumb:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "TikTok Product Ad",
    stats: "6.3x ROAS",
    thumb:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
  },
];

const Adportfolio = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: dir === "left" ? -430 : 430,
      behavior: "smooth",
    });
  };

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

        

        {/* MASSIVE GREEN ATMOSPHERE */}
        <div
          className="
            absolute left-1/2 top-[-25%]
            h-[900px] w-[1600px]
            -translate-x-1/2

            md:h-[1200px]
            md:w-[2600px]
          "
          style={{
            background: `
              radial-gradient(
                ellipse at center,
                rgba(190,242,100,0.40) 0%,
                rgba(163,230,53,0.26) 22%,
                rgba(132,204,22,0.16) 42%,
                rgba(101,163,13,0.08) 58%,
                transparent 78%
              )
            `,
            filter: "blur(50px)",
            opacity: 0.95,
          }}
        />

        {/* CENTER FOCUS */}
        <div
          className="
            absolute left-1/2 top-[18%]
            h-[500px] w-[900px]
            -translate-x-1/2
          "
          style={{
            background: `
              radial-gradient(
                ellipse,
                rgba(255,255,255,0.08),
                rgba(217,249,157,0.06),
                rgba(190,242,100,0.03),
                transparent 72%
              )
            `,
            filter: "blur(50px)",
          }}
        />

        {/* LEFT GLOW */}
        <div
          className="
            absolute left-[-10%] top-[30%]
            h-[600px] w-[600px]
            rounded-full bg-lime-300/12
          "
          style={{
            filter: "blur(50px)",
          }}
        />

        {/* RIGHT GLOW */}
        <div
          className="
            absolute right-[-10%] top-[15%]
            h-[700px] w-[700px]
            rounded-full bg-green-300/10
          "
          style={{
            filter: "blur(50px)",
          }}
        />

        {/* GLASS PANEL */}
        <div
          className="
            absolute left-1/2 top-[50%]
            h-[75%] w-[96%]
            -translate-x-1/2
            rounded-[50px]
            border border-white/[0.04]
            bg-white/[0.015]
            backdrop-blur-[2px]
          "
        />

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

        {/* CINEMATIC GRAIN */}
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage: `
              radial-gradient(rgba(255,255,255,0.045) 0.8px, transparent 0.8px)
            `,
            backgroundSize: "4px 4px",
            mixBlendMode: "soft-light",
          }}
        />

        {/* LIGHT LINES */}
        <div
          className="
            absolute left-[12%] top-0
            h-full w-px
          "
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(190,242,100,0.16), transparent)",
          }}
        />

        <div
          className="
            absolute right-[12%] top-0
            h-full w-px
          "
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(190,242,100,0.12), transparent)",
          }}
        />

        
      </div>

      {/* CONTENT */}
      <div className="relative z-20 mx-auto max-w-[1700px] px-5 sm:px-8 lg:px-10">

        {/* TOP */}
        <div
          className="
            mb-16 flex flex-col gap-10

            md:flex-row
            md:items-end
            md:justify-between
          "
        >

          {/* LEFT */}
          <div>

            {/* HEADING */}
            <h2
              className="
                text-[2.8rem]
                font-semibold
                leading-[0.95]
                tracking-[-0.07em]

                sm:text-[4.5rem]

                lg:text-[5.6rem]
              "
            >
              Our Work
            </h2>

            {/* DESC */}
            <p
              className="
                mt-5
                max-w-2xl
                text-[15px]
                leading-[1.9]
                text-white/45

                sm:text-[17px]
              "
            >
              These Creatives Lowered CAC's and lifted ROAS
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex items-center gap-3">

            <button
              onClick={() => scroll("left")}
              className="
                group relative overflow-hidden
                flex h-16 w-16 items-center justify-center
                rounded-full
                border border-white/[0.08]
                bg-white/[0.03]
                backdrop-blur-3xl
                transition-all duration-500
                hover:border-lime-300/30
              "
            >

              <div
                className="
                  absolute inset-0 opacity-0
                  transition-all duration-500
                  group-hover:opacity-100
                "
                style={{
                  background:
                    "radial-gradient(circle, rgba(190,242,100,0.18), transparent 70%)",
                }}
              />

              <ArrowLeft className="relative z-10 h-5 w-5" />
            </button>

            <button
              onClick={() => scroll("right")}
              className="
                group relative overflow-hidden
                flex h-16 w-16 items-center justify-center
                rounded-full
                border border-white/[0.08]
                bg-white/[0.03]
                backdrop-blur-3xl
                transition-all duration-500
                hover:border-lime-300/30
              "
            >

              <div
                className="
                  absolute inset-0 opacity-0
                  transition-all duration-500
                  group-hover:opacity-100
                "
                style={{
                  background:
                    "radial-gradient(circle, rgba(190,242,100,0.18), transparent 70%)",
                }}
              />

              <ArrowRight className="relative z-10 h-5 w-5" />
            </button>
          </div>
        </div>

        {/* REELS */}
        <div
          ref={scrollRef}
          className="
            flex gap-7 overflow-x-auto
            pb-6
            scrollbar-none
          "
        >

          {reels.map((item, index) => (
            <div
              key={index}
              className="
                group relative shrink-0
                overflow-hidden
                rounded-[38px]
                border border-white/[0.08]
                bg-white/[0.03]
                backdrop-blur-3xl

                w-[320px]
                sm:w-[360px]
                md:w-[390px]
              "
            >

              {/* HOVER LIGHT */}
              <div
                className="
                  absolute inset-0 z-10
                  opacity-0 transition-all duration-700
                  group-hover:opacity-100
                "
                style={{
                  background: `
                    linear-gradient(
                      180deg,
                      rgba(190,242,100,0.14),
                      transparent 28%
                    )
                  `,
                }}
              />

              {/* VIDEO */}
              <div className="relative aspect-[9/16] overflow-hidden">

                <img
                  src={item.thumb}
                  alt={item.title}
                  className="
                    h-full w-full object-cover
                    transition-all duration-700
                    group-hover:scale-[1.06]
                  "
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/25" />

                {/* TOP BADGE */}
                <div
                  className="
                    absolute left-5 top-5 z-20
                    rounded-full
                    border border-white/10
                    bg-black/30
                    px-3 py-2
                    text-[11px]
                    font-medium
                    text-white
                    backdrop-blur-xl
                  "
                >
                  {item.stats}
                </div>

                {/* PLAY BUTTON */}
                <div
                  className="
                    absolute left-1/2 top-1/2 z-20
                    flex h-28 w-28
                    -translate-x-1/2 -translate-y-1/2
                    items-center justify-center
                    rounded-full
                    border border-white/15
                    bg-white/10
                    backdrop-blur-3xl
                    transition-all duration-500
                    group-hover:scale-110
                  "
                >

                  <div
                    className="
                      flex h-16 w-16
                      items-center justify-center
                      rounded-full
                      bg-white
                      shadow-[0_0_35px_rgba(255,255,255,0.4)]
                    "
                  >
                    <Play
                      className="ml-1 h-5 w-5 fill-black text-black"
                    />
                  </div>
                </div>

                {/* BOTTOM */}
                <div
                  className="
                    absolute inset-x-0 bottom-0 z-20
                    bg-gradient-to-t
                    from-black
                    via-black/70
                    to-transparent
                    p-7
                  "
                >

                  <div
                    className="
                      mb-3 inline-flex items-center gap-2
                      rounded-full
                      border border-white/10
                      bg-white/[0.03]
                      px-3 py-1.5
                      text-[10px]
                      uppercase tracking-[0.22em]
                      text-white/60
                      backdrop-blur-xl
                    "
                  >
                    Meta Ads
                  </div>

                  <h3
                    className="
                      text-[1.5rem]
                      font-semibold
                      tracking-[-0.05em]
                    "
                  >
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-white/50">
                    Performance Creative
                  </p>
                </div>

                {/* EDGE LIGHT */}
                <div
                  className="
                    absolute inset-0 rounded-[38px]
                    border border-white/10
                  "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Adportfolio;