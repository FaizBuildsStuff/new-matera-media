"use client";

import React, { useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CircleIcon,
  Play,
  Sparkles,
} from "lucide-react";

const reels = [
  {
    title: "How We Pulled 3M Organic Views",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    views: "3.1M",
  },
  {
    title: "Turning YouTube Into A Client Machine",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    views: "1.8M",
  },
  {
    title: "Our Viral Hook Strategy",
    image:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?q=80&w=1200&auto=format&fit=crop",
    views: "4.4M",
  },
  {
    title: "How We Scale Personal Brands",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    views: "2.7M",
  },
];

const YtPortfolio = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -420 : 420,
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

        

        {/* MASSIVE RED GLOW */}
        <div
          className="
            absolute left-1/2 top-[-30%]
            h-[1200px] w-[2200px]
            -translate-x-1/2
          "
          style={{
            background: `
              radial-gradient(
                ellipse at center,
                rgba(255,0,76,0.18) 0%,
                rgba(255,40,40,0.08) 24%,
                rgba(255,255,255,0.03) 48%,
                transparent 72%
              )
            `,
            filter: "blur(50px)",
          }}
        />

        {/* LEFT GLOW */}
        <div
          className="
            absolute left-[-15%] top-[10%]
            h-[800px] w-[800px]
            rounded-full
          "
          style={{
            background:
              "radial-gradient(circle, rgba(255,0,76,0.14), transparent 72%)",
            filter: "blur(50px)",
          }}
        />

        {/* RIGHT GLOW */}
        <div
          className="
            absolute right-[-15%] top-[20%]
            h-[900px] w-[900px]
            rounded-full
          "
          style={{
            background:
              "radial-gradient(circle, rgba(255,40,40,0.12), transparent 72%)",
            filter: "blur(50px)",
          }}
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

        {/* GRAIN */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `
              radial-gradient(rgba(255,255,255,0.045) 0.8px, transparent 0.8px)
            `,
            backgroundSize: "4px 4px",
            mixBlendMode: "soft-light",
          }}
        />

        
      </div>

      {/* CONTENT */}
      <div className="relative z-20 mx-auto max-w-[1700px] px-5 sm:px-8 lg:px-10">

        {/* TOP */}
        <div
          className="
            mb-16 flex flex-col gap-8

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
                  text-red-100
                "
              >
                YOUTUBE REELS
              </span>
            </div>

            {/* HEADING */}
            <h2
              className="
                max-w-5xl
                text-[2.8rem]
                font-semibold
                leading-[1]
                tracking-[-0.05em]

                sm:text-[5rem]

                lg:text-[6rem]
              "
            >
              Our Work
              <br />

              
            </h2>

            {/* TEXT */}
            <p
              className="
                mt-7 max-w-2xl
                text-[15px]
                leading-[1.9]
                text-white/45

                sm:text-[17px]
              "
            >
              Industry-leading production.
            </p>
          </div>

          {/* CONTROLS */}
          <div className="flex items-center gap-4">

            <button
              onClick={() => scroll("left")}
              className="
                group relative flex h-16 w-16
                items-center justify-center
                overflow-hidden rounded-full
                border border-white/[0.06]
                bg-white/[0.03]
                backdrop-blur-3xl
                transition-all duration-500

                hover:border-red-400/20
              "
            >
              <ArrowLeft className="relative z-10 h-6 w-6" />
            </button>

            <button
              onClick={() => scroll("right")}
              className="
                group relative flex h-16 w-16
                items-center justify-center
                overflow-hidden rounded-full
                bg-red-500
                transition-all duration-500

                hover:scale-[1.04]
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
                    "linear-gradient(120deg, rgba(255,255,255,0.2), transparent)",
                }}
              />

              <ArrowRight className="relative z-10 h-6 w-6" />
            </button>
          </div>
        </div>

        {/* REELS SLIDER */}
        <div
          ref={sliderRef}
          className="
            flex gap-7 overflow-x-auto
            scroll-smooth pb-6

            [&::-webkit-scrollbar]:hidden
          "
        >

          {reels.map((reel, index) => (
            <div
              key={index}
              className="
                group relative shrink-0

                w-[280px]

                md:w-[340px]
              "
            >

              {/* GLOW */}
              <div
                className="
                  absolute inset-0 rounded-[42px]
                  opacity-0 blur-3xl
                  transition-all duration-700

                  group-hover:opacity-100
                "
                style={{
                  background: `
                    radial-gradient(
                      circle,
                      rgba(255,0,76,0.22),
                      transparent 72%
                    )
                  `,
                }}
              />

              {/* CARD */}
              <div
                className="
                  relative overflow-hidden
                  rounded-[42px]
                  border border-white/[0.06]
                  bg-white/[0.03]
                  backdrop-blur-3xl
                  transition-all duration-700

                  group-hover:-translate-y-3
                  group-hover:border-red-400/20
                "
              >

                {/* SHINE */}
                <div
                  className="
                    absolute left-[-30%] top-[-20%]
                    h-[300px] w-[180px]
                    rotate-[25deg]
                    opacity-0
                    transition-all duration-1000

                    group-hover:left-[120%]
                    group-hover:opacity-100
                  "
                  style={{
                    background:
                      "linear-gradient(to right, transparent, rgba(255,255,255,0.16), transparent)",
                    filter: "blur(20px)",
                  }}
                />

                {/* IMAGE */}
                <div className="relative overflow-hidden">

                  <img
                    src={reel.image}
                    alt={reel.title}
                    className="
                      h-[520px] w-full object-cover
                      transition-all duration-700

                      group-hover:scale-[1.05]
                    "
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-black/20" />

                  {/* TOP */}
                  <div
                    className="
                      absolute left-5 top-5 right-5
                      flex items-center justify-between
                    "
                  >

                    {/* INSTAGRAM */}
                    <div
                      className="
                        flex items-center gap-2
                        rounded-full
                        border border-white/[0.08]
                        bg-black/40
                        px-4 py-2
                        backdrop-blur-xl
                      "
                    >

                      <CircleIcon className="h-4 w-4 text-red-300" />

                      <span
                        className="
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.16em]
                        "
                      >
                        Reel
                      </span>
                    </div>

                    {/* VIEWS */}
                    <div
                      className="
                        rounded-full
                        border border-white/[0.08]
                        bg-black/40
                        px-4 py-2
                        text-[11px]
                        font-semibold
                        backdrop-blur-xl
                      "
                    >
                      {reel.views}
                    </div>
                  </div>

                  {/* PLAY */}
                  <button
                    className="
                      group/play absolute left-1/2 top-1/2
                      flex h-[120px] w-[120px]
                      -translate-x-1/2 -translate-y-1/2
                      items-center justify-center
                    "
                  >

                    {/* OUTER */}
                    <div
                      className="
                        absolute inset-0 rounded-full
                        border border-red-400/20
                        bg-red-500/10
                        backdrop-blur-3xl
                        shadow-[0_0_80px_rgba(255,0,76,0.35)]
                      "
                    />

                    {/* INNER */}
                    <div
                      className="
                        relative z-10
                        flex h-[68px] w-[68px]
                        items-center justify-center
                        rounded-full
                        bg-white
                        transition-all duration-500

                        group-hover/play:scale-110
                      "
                    >
                      <Play className="ml-1 h-6 w-6 fill-black text-black" />
                    </div>
                  </button>

                  
                </div>

                {/* CONTENT */}
                <div className="relative p-6">

                  {/* VIRAL BADGE */}
                  <div
                    className="
                      mb-4 inline-flex items-center gap-2
                      rounded-full
                      border border-red-400/10
                      bg-red-500/5
                      px-4 py-2
                    "
                  >

                    <Sparkles className="h-4 w-4 text-red-300" />

                    <span
                      className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        text-red-100
                      "
                    >
                      Viral Hook
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3
                    className="
                      text-[1.5rem]
                      font-semibold
                      leading-[1.15]
                      tracking-[-0.04em]
                    "
                  >
                    {reel.title}
                  </h3>
                </div>

                {/* EDGE LIGHT */}
                <div
                  className="
                    absolute inset-0 rounded-[42px]
                    border border-white/[0.03]
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

export default YtPortfolio;