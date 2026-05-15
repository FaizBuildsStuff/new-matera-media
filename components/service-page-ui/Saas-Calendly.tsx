"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Sparkles,
  Clock3,
} from "lucide-react";

const SaasCalendly = () => {
  return (
    <section id="calendly" className="
        relative 
        
        py-24 text-white

        md:py-32
      "
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none transform-gpu will-change-transform">

        

        {/* TOP ATMOSPHERE */}
        <div
          className="
            absolute left-1/2 top-[-30%]
            h-[1200px] w-[2600px]
            -translate-x-1/2
          "
          style={{
            background: `
              radial-gradient(
                ellipse at center,
                rgba(139,92,246,0.16) 0%,
                rgba(59,130,246,0.10) 28%,
                rgba(255,255,255,0.02) 48%,
                transparent 76%
              )
            `,
            filter: "blur(50px)",
          }}
        />

        {/* LEFT GLOW */}
        <div
          className="
            absolute left-[-10%] top-[20%]
            h-[700px] w-[700px]
          "
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.10), transparent 72%)",
            filter: "blur(50px)",
          }}
        />

        {/* RIGHT GLOW */}
        <div
          className="
            absolute right-[-10%] top-[8%]
            h-[700px] w-[700px]
          "
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.12), transparent 72%)",
            filter: "blur(50px)",
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

        {/* GRAIN */}
        <div
          className="absolute inset-0 opacity-[0.10] mix-blend-soft-light"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
          }}
        />

        
      </div>

      {/* CONTENT */}
      <div className="relative z-20 mx-auto max-w-7xl px-5 sm:px-8">

        {/* TOP */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >


          {/* HEADING */}
          <h2
            className="
              mx-auto max-w-5xl
              text-[3rem]
              font-semibold
              leading-[0.94]
              tracking-[-0.07em]

              sm:text-[5rem]

              lg:text-[6.5rem]
            "
          >
            Let’s Scale Your
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
              SaaS With Video.
            </span>
          </h2>

          {/* TEXT */}
          <p
            className="
              mx-auto mt-7 max-w-2xl
              text-[15px]
              leading-[1.9]
              text-white/45

              sm:text-[17px]
            "
          >
            Book a premium strategy call and let’s
            build a SaaS video system designed to
            improve conversions, clarity, and growth.
          </p>
        </motion.div>

        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          viewport={{ once: true }}
          className="
            relative overflow-hidden
            rounded-[36px]
            border border-white/[0.06]
            bg-white/[0.03]
            backdrop-blur-3xl
          "
        >

          {/* INNER LIGHT */}
          <div
            className="
              absolute left-1/2 top-0
              h-[280px] w-[500px]
              -translate-x-1/2
            "
            style={{
              background: `
                radial-gradient(
                  ellipse,
                  rgba(255,255,255,0.06),
                  transparent 72%
                )
              `,
              filter: "blur(60px)",
            }}
          />

          <div
            className="
              grid items-start gap-10
              p-5

              lg:grid-cols-[0.75fr_1.25fr]
              lg:p-7
            "
          >

            {/* LEFT */}
            <div>

              {/* MINI CARD */}
              <div
                className="
                  relative overflow-hidden
                  rounded-[28px]
                  border border-white/[0.06]
                  bg-black/30
                  p-6
                "
              >

                {/* GLOW */}
                <div
                  className="
                    absolute right-[-20%] top-[-20%]
                    h-[240px] w-[240px]
                  "
                  style={{
                    background: `
                      radial-gradient(
                        circle,
                        rgba(139,92,246,0.16),
                        transparent 72%
                      )
                    `,
                    filter: "blur(60px)",
                  }}
                />

                <div className="relative z-10">

                  {/* ICON */}
                  <div
                    className="
                      flex h-14 w-14
                      items-center justify-center
                      rounded-[18px]
                      border border-white/[0.08]
                      bg-white/[0.03]
                    "
                  >

                    <CalendarDays className="h-6 w-6 text-violet-200" />
                  </div>

                  {/* TITLE */}
                  <h3
                    className="
                      mt-6
                      text-[1.7rem]
                      font-semibold
                      tracking-[-0.05em]
                    "
                  >
                    Strategy Session
                  </h3>

                  {/* TEXT */}
                  <p
                    className="
                      mt-4
                      text-[14px]
                      leading-[1.9]
                      text-white/45
                    "
                  >
                    We’ll review your SaaS product,
                    growth goals, messaging, and
                    video opportunities.
                  </p>

                  {/* FEATURES */}
                  <div className="mt-8 space-y-4">

                    {/* ITEM */}
                    <div className="flex items-center gap-3">

                      <div
                        className="
                          flex h-10 w-10
                          items-center justify-center
                          rounded-full
                          border border-white/[0.08]
                          bg-white/[0.03]
                        "
                      >

                        <Clock3 className="h-4 w-4 text-cyan-200" />
                      </div>

                      <div>
                        <p className="text-sm font-medium">
                          30 Minute Call
                        </p>

                        <p className="mt-1 text-xs text-white/40">
                          Custom SaaS growth roadmap.
                        </p>
                      </div>
                    </div>

                    {/* ITEM */}
                    <div className="flex items-center gap-3">

                      <div
                        className="
                          flex h-10 w-10
                          items-center justify-center
                          rounded-full
                          border border-white/[0.08]
                          bg-white/[0.03]
                        "
                      >

                        <Sparkles className="h-4 w-4 text-violet-200" />
                      </div>

                      <div>
                        <p className="text-sm font-medium">
                          Creative Direction
                        </p>

                        <p className="mt-1 text-xs text-white/40">
                          Tailored SaaS video strategy.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* BUTTON */}
                  <button
                    className="
                      group/button relative mt-8
                      flex w-full items-center
                      justify-between overflow-hidden
                      rounded-[20px]
                      border border-violet-400/20
                      bg-violet-500 px-5 py-4
                      text-white
                      transition-all duration-500
                    "
                  >

                    {/* SHINE */}
                    <div
                      className="
                        absolute inset-0
                        bg-gradient-to-r
                        from-transparent
                        via-white/[0.08]
                        to-transparent
                        opacity-0 transition-all duration-700

                        group-hover/button:opacity-100
                      "
                    />

                    <span
                      className="
                        relative z-10
                        text-[12px]
                        font-semibold
                        uppercase
                        tracking-[0.20em]
                      "
                    >
                      Book Now
                    </span>

                    <div
                      className="
                        relative z-10 flex h-10 w-10
                        items-center justify-center
                        rounded-full
                        border border-white/10
                        bg-white/10
                        transition-all duration-500

                        group-hover/button:rotate-45
                      "
                    >

                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div
              className="
                overflow-hidden
                rounded-[30px]
                border border-white/[0.06]
                bg-black/40
              "
            >

              {/* TOP BAR */}
              <div
                className="
                  flex items-center justify-between
                  border-b border-white/[0.06]
                  bg-white/[0.02]
                  px-5 py-4
                "
              >

                <div className="flex items-center gap-2">

                  <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>

                <div
                  className="
                    inline-flex items-center gap-2
                    rounded-full
                    border border-white/[0.08]
                    bg-white/[0.03]
                    px-3 py-2
                  "
                >

                  <Sparkles className="h-3.5 w-3.5 text-violet-200" />

                  <span
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-white/70
                    "
                  >
                    Calendly
                  </span>
                </div>
              </div>

              {/* IFRAME */}
              <iframe
                src="https://calendly.com/m-faizurrehman-crypto/30min"
                width="100%"
                height="680"
                className="w-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SaasCalendly;