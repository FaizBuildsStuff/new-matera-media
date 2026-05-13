"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const faqItems = [
  {
    question: "What is your typical turnaround time?",
    answer:
      "Most projects are delivered within 5–14 days depending on complexity, revisions, and production requirements.",
  },
  {
    question: "Do you offer revisions?",
    answer:
      "Yes. Every project includes revisions to ensure the final creative matches your brand vision and performance goals.",
  },
  {
    question: "How does the payment structure work?",
    answer:
      "We typically require a 50% deposit to commence work, with the remaining 50% due upon final delivery. We also offer milestone-based payment plans for larger projects.",
  },
  {
    question: "Can you help with strategy, not just production?",
    answer:
      "Absolutely. We help with creative strategy, scripting, positioning, hooks, ad angles, retention systems, and overall content direction.",
  },
  {
    question: "What assets do I need to provide?",
    answer:
      "Usually your branding, raw footage (if available), product details, references, and any important messaging you want highlighted.",
  },
];

const Faq = () => {
  const [active, setActive] = useState(2);

  return (
    <section className="relative overflow-hidden border-none outline-none bg-[#030303] px-6 py-32 text-white">

  {/* BACKGROUND */}
<div className="absolute inset-0 overflow-hidden">

  {/* BASE */}
  <div className="absolute inset-0 bg-[#030303]" />
  
  {/* TOP SHROUD */}
  <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#030303] to-transparent z-[45] pointer-events-none" />

  {/* MASSIVE CENTER ATMOSPHERE */}
  <div
    className="absolute left-1/2 top-[42%] h-[1200px] w-[1700px] -translate-x-1/2"
    style={{
      background: `
        radial-gradient(
          ellipse at center,
          rgba(16,185,129,0.11) 0%,
          rgba(52,211,153,0.06) 24%,
          rgba(45,212,191,0.05) 38%,
          rgba(255,255,255,0.015) 50%,
          transparent 72%
        )
      `,
      filter: "blur(160px)",
    }}
  />

  {/* TOP LIGHT */}
  <div
    className="absolute left-1/2 top-[-25%] h-[700px] w-[1400px] -translate-x-1/2"
    style={{
      background:
        "radial-gradient(ellipse, rgba(255,255,255,0.07), transparent 72%)",
      filter: "blur(120px)",
    }}
  />

  {/* LEFT GLOW */}
  <div
    className="absolute left-[-10%] top-[20%] h-[700px] w-[700px]"
    style={{
      background:
        "radial-gradient(circle, rgba(52,211,153,0.09), transparent 70%)",
      filter: "blur(140px)",
    }}
  />

  {/* RIGHT GLOW */}
  <div
    className="absolute right-[-10%] top-[28%] h-[800px] w-[800px]"
    style={{
      background:
        "radial-gradient(circle, rgba(45,212,191,0.08), transparent 72%)",
      filter: "blur(150px)",
    }}
  />

  {/* HUGE LOGO GLOW */}
  <div className="absolute left-1/2 top-[52%] -translate-x-1/2 -translate-y-1/2">

    {/* MAIN GLOW */}
    <div
      className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        background:
          "radial-gradient(circle, rgba(52,211,153,0.20), rgba(255,255,255,0.04), transparent 72%)",
        filter: "blur(90px)",
      }}
    />

    {/* SECOND GLOW */}
    <div
      className="absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        background:
          "radial-gradient(circle, rgba(16,185,129,0.10), transparent 72%)",
        filter: "blur(120px)",
      }}
    />

    {/* HUGE LOGO VISUAL */}
<div className="absolute left-1/2 top-[52%] -translate-x-1/2 -translate-y-1/2">

  {/* MAIN GLOW */}
  <div
    className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/20"
    style={{
      filter: "blur(90px)",
    }}
  />

  {/* SECOND GLOW */}
  <div
    className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-300/10"
    style={{
      filter: "blur(120px)",
    }}
  />

  {/* LOGO */}
  <div className="relative z-10 flex items-center justify-center">

    <Image
      src="/Logo.png"
      alt="Logo"
      width={520}
      height={520}
      priority
      className="opacity-[0.16] blur-[1px] brightness-125 contrast-125 object-contain select-none pointer-events-none"
      style={{
        filter: "blur(1px) drop-shadow(0 0 40px rgba(52,211,153,0.22))",
      }}
    />
  </div>
</div>
  </div>

  {/* GLASS LIGHT RING */}
  <div className="absolute left-1/2 top-[52%] h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.03]" />

  {/* SECOND RING */}
  <div className="absolute left-1/2 top-[52%] h-[850px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400/[0.04]" />

  {/* LIGHT STREAK */}
  <div
    className="absolute left-1/2 top-[54%] h-px w-[60%] -translate-x-1/2"
    style={{
      background:
        "linear-gradient(to right, transparent, rgba(52,211,153,0.14), transparent)",
      boxShadow: "0 0 40px rgba(52,211,153,0.12)",
    }}
  />

  {/* FLOATING PARTICLES */}
  <div className="absolute left-[14%] top-[24%] h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_25px_rgba(52,211,153,0.9)]" />

  <div className="absolute right-[18%] top-[28%] h-2 w-2 rounded-full bg-teal-300 shadow-[0_0_25px_rgba(45,212,191,0.9)]" />

  <div className="absolute left-[22%] bottom-[18%] h-2 w-2 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.7)]" />

  <div className="absolute right-[20%] bottom-[22%] h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_30px_rgba(52,211,153,0.9)]" />

  {/* DOT GRID */}
  <div
    className="absolute inset-0 opacity-[0.018]"
    style={{
      backgroundImage:
        "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
      backgroundSize: "34px 34px",
      maskImage:
        "radial-gradient(circle at center, black, transparent 82%)",
    }}
  />

  {/* NOISE */}
  <div
    className="absolute inset-0 opacity-[0.035] mix-blend-soft-light"
    style={{
      backgroundImage:
        "url('https://www.transparenttextures.com/patterns/noise.png')",
    }}
  />

  {/* VIGNETTE */}
  <div
    className="absolute inset-0"
    style={{
      background:
        "radial-gradient(circle at center, transparent 35%, rgba(0,0,0,0.82) 100%)",
    }}
  />
</div>

  {/* CONTENT */}
  <div className="relative z-10 mx-auto max-w-4xl">

    {/* TOP */}
    <div className="mb-20 text-center">

      {/* LABEL */}
      <div className="mb-5 flex items-center justify-center gap-3">

        <div className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_20px_rgba(52,211,153,0.9)]" />

        <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-emerald-300">
          COMMON QUESTIONS
        </span>
      </div>

      {/* HEADING */}
      <h2 className="text-5xl font-semibold leading-[0.92] tracking-[-0.07em] text-white md:text-7xl">
        Answers to
        <br />
        Your Questions
      </h2>
    </div>

    {/* FAQ */}
    <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl">

      {/* INNER LIGHT */}
      <div
        className="absolute left-1/2 top-0 h-[240px] w-[500px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(circle, rgba(52,211,153,0.12), transparent 72%)",
          filter: "blur(70px)",
        }}
      />

      {/* SHINE */}
      <div
        className="absolute left-[-20%] top-0 h-px w-[140%] rotate-[8deg]"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(255,255,255,0.14), transparent)",
        }}
      />

      {/* ITEMS */}
      <div className="relative z-10 px-6 md:px-8">

        {faqItems.map((item, index) => {
          const isOpen = active === index;

          return (
            <div
              key={index}
              className="border-b border-white/8 last:border-none"
            >

              {/* BUTTON */}
              <button
                onClick={() =>
                  setActive(isOpen ? -1 : index)
                }
                className="group flex w-full items-center justify-between gap-6 py-7 text-left"
              >

                {/* QUESTION */}
                <h3
                  className={`text-[20px] font-medium tracking-[-0.04em] transition-all duration-300 ${
                    isOpen
                      ? "text-white"
                      : "text-white/75 group-hover:text-white"
                  }`}
                >
                  {item.question}
                </h3>

                {/* ICON */}
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                    isOpen
                      ? "border-emerald-400/20 bg-emerald-400/10"
                      : "border-white/10 bg-white/[0.03]"
                  }`}
                >

                  <ChevronDown
                    className={`h-5 w-5 transition-all duration-500 ${
                      isOpen
                        ? "rotate-180 text-emerald-300"
                        : "text-white/55"
                    }`}
                  />
                </div>
              </button>

              {/* ANSWER */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  isOpen
                    ? "max-h-[220px] pb-7 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >

                <p className="max-w-3xl text-[15px] leading-relaxed text-white/45">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* INNER BORDER */}
      <div className="pointer-events-none absolute inset-[1px] rounded-[35px] border border-white/[0.04]" />
    </div>
  </div>
</section>
  );
};

export default Faq;