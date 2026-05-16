"use client";

import React from "react";

const steps = [
  {
    phase: "PHASE 01",
    title: "Strategy & Concept",
    desc: "We Study your Brand and Offering then we build Winning Scripts and Creative Direction around it.",
  },
  {
    phase: "PHASE 02",
    title: "Production & Design",
    desc: "Then we go into Full Production on those with Winning Scripts and Creative Direction.",
  },
  {
    phase: "PHASE 03",
    title: "Launch & Optimization",
    desc: "Finally, we Launch it all and Tweak things based on the Results to make it Perform even better.",
  },
];

const Ourprocess = () => {
  return (
    <section className="relative border-none outline-none px-6 py-40 text-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none transform-gpu will-change-transform">

        {/* MASSIVE SMOOTH AURORA */}
        <div
          className="absolute left-1/2 top-[35%] h-[1400px] w-[1900px] -translate-x-1/2"
          style={{
            background: `
              radial-gradient(
                circle,
                rgba(16,185,129,0.14) 0%,
                rgba(45,212,191,0.08) 28%,
                rgba(52,211,153,0.05) 42%,
                transparent 72%
              )
            `,
            filter: "blur(50px)",
          }}
        />

        {/* LEFT EMERALD LIGHT */}
        <div
          className="absolute left-[-15%] top-[5%] h-[800px] w-[800px] rounded-full bg-emerald-400/10"
          style={{
            filter: "blur(50px)",
          }}
        />

        {/* RIGHT TEAL LIGHT */}
        <div
          className="absolute right-[-10%] top-[15%] h-[800px] w-[800px] rounded-full bg-teal-300/10"
          style={{
            filter: "blur(50px)",
          }}
        />

        {/* CENTER GLOW */}
        <div
          className="absolute left-1/2 top-[50%] h-[500px] w-[1000px] -translate-x-1/2 rounded-full bg-white/[0.03]"
          style={{
            filter: "blur(50px)",
          }}
        />

        {/* VERTICAL BEAMS */}
        <div
          className="absolute left-[18%] top-0 h-full w-[1px] bg-emerald-300/10"
          style={{
            boxShadow: "0 0 40px rgba(52,211,153,0.3)",
          }}
        />

        <div
          className="absolute right-[18%] top-0 h-full w-[1px] bg-teal-300/10"
          style={{
            boxShadow: "0 0 40px rgba(94,234,212,0.3)",
          }}
        />

        {/* MASSIVE BLURRED ORB */}
        <div className="absolute left-1/2 top-[50%] h-[1100px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.03]" />

        {/* GRID - Size/Opacity matched with Hero */}
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

        {/* FLOATING DOTS */}
        <div className="absolute left-[15%] top-[22%] h-3 w-3 rounded-full bg-emerald-300 shadow-[0_0_25px_rgba(52,211,153,0.9)]" />

        <div className="absolute right-[18%] top-[32%] h-2.5 w-2.5 rounded-full bg-teal-300 shadow-[0_0_25px_rgba(94,234,212,0.8)]" />

        <div className="absolute left-[22%] bottom-[18%] h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_25px_rgba(255,255,255,0.7)]" />

        {/* NOISE */}
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-soft-light"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/noise.png')",
          }}
        />

        

      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* TOP */}
        <div className="mb-36 text-center">

          {/* LABEL */}
          <div className="mb-5">
            <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-emerald-300">
              OUR PROCESS
            </span>
          </div>

          {/* HEADING */}
          <h2 className="mx-auto max-w-5xl text-5xl font-semibold leading-[0.92] tracking-[-0.06em] text-white md:text-7xl">
            From Concept
            <br />
            to Reality.
          </h2>

        </div>

        {/* TIMELINE */}
        <div className="relative mx-auto max-w-6xl">

          {/* CENTER LINE */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 lg:block">

            {/* LINE */}
            <div className="absolute inset-0 bg-white/10" />

            {/* GLOW */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-400/40 to-transparent blur-[1px]" />
          </div>

          {/* STEPS */}
          <div className="space-y-36">

            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative grid items-center gap-20 lg:grid-cols-2 ${
                  index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >

                {/* TEXT */}
                <div
                  className={`${
                    index % 2 === 0
                      ? "lg:pr-28 lg:text-right"
                      : "lg:pl-28"
                  }`}
                >

                  {/* PHASE */}
                  <div className="mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-emerald-300">
                      {step.phase}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-4xl font-semibold tracking-[-0.06em] text-white md:text-5xl">
                    {step.title}
                  </h3>

                  {/* DESC */}
                  <p className="mt-8 text-[17px] leading-relaxed text-white/45">
                    {step.desc}
                  </p>
                </div>

                {/* CENTER NODE */}
                <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">

                  {/* OUTER GLOW */}
                  <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/10 blur-[50px]" />

                  {/* MIDDLE */}
                  <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400/20 bg-emerald-400/10 backdrop-blur-2xl" />

                  {/* INNER */}
                  <div className="relative h-3 w-3 rounded-full bg-emerald-300 shadow-[0_0_25px_rgba(52,211,153,0.9)]" />
                </div>

                {/* EMPTY */}
                <div />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourprocess;