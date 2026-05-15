"use client";

import React from "react";
import {
  ArrowRight,
  Play,
  Sparkles,
  Layers3,
  Zap,
} from "lucide-react";

const SaasHero = () => {
  return (
    <section
      className="
        relative 
        
        px-5 pt-36 pb-24 text-white

        sm:px-8

        lg:px-10 lg:pt-44 lg:pb-32
      "
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none transform-gpu will-change-transform">

        

        {/* MASSIVE PURPLE/BLUE ATMOSPHERE */}
        <div
          className="
            absolute left-1/2 top-[-28%]
            h-[1400px] w-[2600px]
            -translate-x-1/2
          "
          style={{
            background: `
              radial-gradient(
                ellipse at center,
                rgba(139,92,246,0.24) 0%,
                rgba(59,130,246,0.16) 18%,
                rgba(168,85,247,0.10) 36%,
                rgba(255,255,255,0.03) 52%,
                transparent 76%
              )
            `,
            filter: "blur(50px)",
          }}
        />

        {/* LEFT BLUE CLOUD */}
        <div
          className="
            absolute left-[-12%] top-[8%]
            h-[1000px] w-[1000px]
            rounded-full
          "
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.14), transparent 72%)",
            filter: "blur(50px)",
          }}
        />

        {/* RIGHT PURPLE CLOUD */}
        <div
          className="
            absolute right-[-10%] top-[0%]
            h-[1000px] w-[1000px]
            rounded-full
          "
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.16), transparent 72%)",
            filter: "blur(50px)",
          }}
        />

        {/* CENTER LIGHT */}
        <div
          className="
            absolute left-1/2 top-[28%]
            h-[340px] w-[900px]
            -translate-x-1/2
          "
          style={{
            background: `
              radial-gradient(
                ellipse,
                rgba(255,255,255,0.12),
                rgba(255,255,255,0.04),
                transparent 72%
              )
            `,
            filter: "blur(50px)",
          }}
        />

        {/* LIGHT BEAM */}
        <div
          className="
            absolute left-[-8%] top-[40%]
            h-[240px] w-[120%]
            rotate-[-8deg]
          "
          style={{
            background: `
              linear-gradient(
                to right,
                transparent,
                rgba(139,92,246,0.20),
                rgba(59,130,246,0.12),
                transparent
              )
            `,
            filter: "blur(50px)",
          }}
        />

        {/* SECOND BEAM */}
        <div
          className="
            absolute right-[-10%] top-[26%]
            h-[220px] w-[1000px]
            rotate-[16deg]
          "
          style={{
            background: `
              linear-gradient(
                to right,
                transparent,
                rgba(255,255,255,0.08),
                transparent
              )
            `,
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

        {/* FLOATING PARTICLES */}
        <div className="absolute left-[18%] top-[28%] h-2.5 w-2.5 rounded-full bg-blue-300 shadow-[0_0_24px_rgba(59,130,246,0.9)]" />

        <div className="absolute right-[20%] top-[20%] h-3 w-3 rounded-full bg-violet-300 shadow-[0_0_28px_rgba(168,85,247,0.9)]" />

        <div className="absolute left-[24%] bottom-[20%] h-2 w-2 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.9)]" />

        {/* GRAIN */}
        <div
          className="absolute inset-0 opacity-[0.12] mix-blend-soft-light"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
          }}
        />

        
      </div>

      {/* CONTENT */}
      <div className="relative z-20 mx-auto max-w-[1550px]">

        {/* TOP LABEL */}
        <div className="mb-10 flex justify-center">

          <div
            className="
              inline-flex items-center gap-3
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
                tracking-[0.24em]
                text-white/75
              "
            >
              SAAS VIDEOS
            </span>
          </div>
        </div>

        {/* HERO */}
        <div className="text-center">

          {/* HEADING */}
<h1
  className="
    mx-auto max-w-[95%]
    text-center
    font-semibold
    text-white

    leading-[1.02]
    tracking-[-0.045em]

    text-[2.9rem]

    sm:max-w-5xl
    sm:text-[4.5rem]
    sm:leading-[1]

    md:text-[5.6rem]

    lg:max-w-7xl
    lg:text-[7.4rem]
    lg:leading-[0.96]
  "
>

  <span className="block">
    Turn Your SaaS Into
  </span>

  {/* GRADIENT TEXT */}
  <span
    className="
      relative my-3 inline-block

      sm:my-4
    "
  >

    {/* GLOW */}
    <span
      className="
        absolute inset-0
        bg-gradient-to-r
        from-violet-400
        via-blue-300
        to-violet-400
        opacity-25 blur-3xl
      "
    />

    <span
      className="
        relative
        bg-gradient-to-b
        from-white
        via-blue-100
        to-violet-200
        bg-clip-text
        text-transparent
      "
    >
      A Conversion Machine
    </span>
  </span>

  <span className="block">
    With Premium Video Ads.
  </span>
</h1>

          {/* TEXT */}
          <p
            className="
              mx-auto mt-10
              max-w-3xl
              text-[15px]
              leading-[1.9]
              text-white/45

              sm:text-[18px]
            "
          >
            We create high-converting SaaS videos
            designed to explain your product,
            increase retention, lower CAC,
            and turn cold traffic into paying users.
            From motion graphics to product storytelling —
            everything is built for conversions.
          </p>

          {/* BUTTONS */}
          <div
            className="
              mt-14 flex flex-col
              items-center justify-center
              gap-4

              sm:flex-row
            "
          >

            {/* PRIMARY */}
            <button
              className="
                group relative overflow-hidden
                rounded-full
                bg-white px-8 py-5
                text-black
                transition-all duration-500

                hover:scale-[1.03]
              "
            >

              {/* SHINE */}
              <div
                className="
                  absolute left-[-30%] top-[-20%]
                  h-[200px] w-[120px]
                  rotate-[24deg]
                  bg-white/40 blur-2xl
                  transition-all duration-1000

                  group-hover:left-[120%]
                "
              />

              <div className="relative z-10 flex items-center gap-4">

                <span
                  className="
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                  "
                >
                  Book A Free Call
                </span>

                <div
                  className="
                    flex h-10 w-10
                    items-center justify-center
                    rounded-full
                    bg-black text-white
                    transition-all duration-500

                    group-hover:rotate-45
                  "
                >
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </button>

            {/* SECONDARY */}
            <button
              className="
                group flex items-center gap-4
                rounded-full
                border border-white/[0.08]
                bg-white/[0.03]
                px-8 py-5
                backdrop-blur-xl
                transition-all duration-500

                hover:border-violet-400/20
                hover:bg-white/[0.05]
              "
            >

              <div
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-full
                  bg-violet-500/20
                  text-violet-200
                "
              >
                <Play className="ml-0.5 h-4 w-4 fill-current" />
              </div>

              <span
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                "
              >
                Watch Showreel
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaasHero;