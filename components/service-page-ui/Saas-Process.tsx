"use client";

import React from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Understand your product",
    desc: "We study your product, users, and where people lose attention or get confused.",
  },
  {
    number: "02",
    title: "Make the message clear",
    desc: "We simplify your positioning so users instantly understand the value.",
  },
  {
    number: "03",
    title: "Create the videos",
    desc: "We turn your product into premium visuals that feel clean, modern, and easy to follow.",
  },
  {
    number: "04",
    title: "Improve what works",
    desc: "We optimize based on performance so your videos keep converting better over time.",
  },
];

const SaasProcess = () => {
  const { scrollYProgress } = useScroll();

  const lineHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    <section className="relative overflow-hidden py-14 text-white sm:py-16 md:py-18">

      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none transform-gpu will-change-transform">

        {/* MAIN ATMOSPHERE */}
        <div
          className="absolute left-1/2 top-[-18%] h-[950px] w-[1800px] -translate-x-1/2"
          style={{
            background: `
              radial-gradient(
                ellipse at center,
                rgba(139,92,246,0.18) 0%,
                rgba(59,130,246,0.10) 20%,
                rgba(6,182,212,0.06) 40%,
                rgba(255,255,255,0.02) 54%,
                transparent 76%
              )
            `,
            filter: "blur(50px)",
          }}
        />

        {/* LEFT GLOW */}
        <div
          className="absolute left-[-10%] top-[18%] h-[620px] w-[620px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.10), transparent 72%)",
            filter: "blur(50px)",
          }}
        />

        {/* RIGHT GLOW */}
        <div
          className="absolute right-[-10%] top-[0%] h-[700px] w-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.12), transparent 72%)",
            filter: "blur(50px)",
          }}
        />

        {/* CENTER CYAN GLOW */}
        <div
          className="absolute left-1/2 top-[45%] h-[420px] w-[420px] -translate-x-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.08), transparent 72%)",
            filter: "blur(50px)",
          }}
        />

        {/* LIGHT STREAK */}
        <div
          className="absolute left-[-10%] top-[40%] h-[180px] w-[120%] rotate-[-8deg]"
          style={{
            background: `
              linear-gradient(
                to right,
                transparent,
                rgba(139,92,246,0.12),
                rgba(59,130,246,0.06),
                transparent
              )
            `,
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
      <div className="relative z-20 mx-auto max-w-[1350px] px-5 sm:px-8 lg:px-10">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >

          {/* LABEL */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-400/10 bg-white/[0.03] px-4 py-2 backdrop-blur-xl">

            <div className="h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_14px_rgba(168,85,247,1)]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/75">
              OUR PROCESS
            </span>
          </div>

          {/* TITLE */}
          <h2 className="mx-auto max-w-4xl text-[2.1rem] font-semibold leading-[1] tracking-[-0.05em] sm:text-[2.8rem] lg:text-[3.4rem]">
            The Workflow
          </h2>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative mx-auto max-w-4xl">

          {/* STATIC LINE */}
          <div className="absolute left-[18px] top-0 h-full w-px bg-white/[0.08] md:left-1/2 md:-translate-x-1/2" />

          {/* ANIMATED LINE */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[18px] top-0 w-[2px] md:left-1/2 md:-translate-x-1/2"
          >

            <div className="h-full w-full bg-gradient-to-b from-violet-400 via-blue-400 to-cyan-300 shadow-[0_0_20px_rgba(139,92,246,0.8)]" />
          </motion.div>

          {/* STEPS */}
          <div className="space-y-14">

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true, amount: 0.4 }}
                className={`relative flex ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >

                {/* DOT */}
                <div className="absolute left-[18px] top-3 z-20 h-4 w-4 -translate-x-1/2 rounded-full border border-white/20 bg-black md:left-1/2">

                  <div className="absolute inset-0 rounded-full bg-violet-400 blur-md" />

                  <div className="relative h-full w-full rounded-full bg-gradient-to-br from-violet-300 to-blue-300" />
                </div>

                {/* CARD */}
                <div className="group relative ml-10 max-w-lg md:ml-0 md:w-[43%]">

                  {/* CARD GLOW */}
                  <div
                    className="absolute inset-0 rounded-[28px] opacity-0 blur-3xl transition-all duration-700 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(139,92,246,0.16), transparent 72%)",
                    }}
                  />

                  {/* CARD */}
                  <div className="relative overflow-hidden rounded-[28px] border border-white/[0.03] bg-white/[0.025] p-5 backdrop-blur-2xl transition-all duration-700 hover:-translate-y-1 hover:border-violet-400/12">

                    {/* INNER LIGHT */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "radial-gradient(circle at top, rgba(139,92,246,0.08), transparent 72%)",
                      }}
                    />

                    {/* NUMBER */}
                    <span className="relative z-10 text-[10px] font-semibold uppercase tracking-[0.22em] text-violet-200">
                      Step {step.number}
                    </span>

                    {/* TITLE */}
                    <h3 className="relative z-10 mt-4 text-[1.5rem] font-semibold leading-[1.05] tracking-[-0.05em] sm:text-[1.8rem]">
                      {step.title}
                    </h3>

                    {/* TEXT */}
                    <p className="relative z-10 mt-4 text-[13px] leading-[1.8] text-white/45 sm:text-[14px]">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaasProcess;