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
    <section className="relative border-none outline-none px-6 py-24 sm:py-32 lg:py-40 text-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none transform-gpu will-change-transform">

        {/* MASSIVE CENTER ATMOSPHERE */}
        <div
          className="absolute left-1/2 top-[42%] h-[800px] w-[1200px] sm:h-[1200px] sm:w-[1700px] -translate-x-1/2"
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
            filter: "blur(100px) sm:blur(160px)",
          }}
        />

        {/* TOP LIGHT */}
        <div
          className="absolute left-1/2 top-[-25%] h-[500px] w-[1000px] sm:h-[700px] sm:w-[1400px] -translate-x-1/2"
          style={{
            background:
              "radial-gradient(ellipse, rgba(255,255,255,0.07), transparent 72%)",
            filter: "blur(80px) sm:blur(120px)",
          }}
        />

        {/* LEFT GLOW */}
        <div
          className="absolute left-[-15%] sm:left-[-10%] top-[20%] h-[400px] w-[400px] sm:h-[700px] sm:w-[700px]"
          style={{
            background:
              "radial-gradient(circle, rgba(52,211,153,0.09), transparent 70%)",
            filter: "blur(100px) sm:blur(140px)",
          }}
        />

        {/* RIGHT GLOW */}
        <div
          className="absolute right-[-15%] sm:right-[-10%] top-[28%] h-[500px] w-[500px] sm:h-[800px] sm:w-[800px]"
          style={{
            background:
              "radial-gradient(circle, rgba(45,212,191,0.08), transparent 72%)",
            filter: "blur(110px) sm:blur(150px)",
          }}
        />

        {/* HUGE LOGO GLOW VISUAL */}
        <div className="absolute left-1/2 top-[52%] -translate-x-1/2 -translate-y-1/2">

          {/* MAIN GLOW */}
          <div
            className="absolute left-1/2 top-1/2 h-[350px] w-[350px] sm:h-[520px] sm:w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(52,211,153,0.20), rgba(255,255,255,0.04), transparent 72%)",
              filter: "blur(60px) sm:blur(90px)",
            }}
          />

          {/* SECOND GLOW */}
          <div
            className="absolute left-1/2 top-1/2 h-[500px] w-[500px] sm:h-[760px] sm:w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(16,185,129,0.10), transparent 72%)",
              filter: "blur(90px) sm:blur(120px)",
            }}
          />

          {/* LOGO VISUAL */}
          <div className="relative z-10 flex items-center justify-center">

            <Image
              src="/Logo.png"
              alt="Logo"
              width={520}
              height={520}
              priority
              className="w-[300px] sm:w-[520px] opacity-[0.16] blur-[1px] brightness-125 contrast-125 object-contain select-none pointer-events-none"
              style={{
                filter: "blur(1px) drop-shadow(0 0 40px rgba(52,211,153,0.22))",
              }}
            />
          </div>
        </div>

        {/* GLASS LIGHT RING */}
        <div className="absolute left-1/2 top-[52%] h-[800px] w-[800px] sm:h-[1200px] sm:w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.03]" />

        {/* SECOND RING */}
        <div className="absolute left-1/2 top-[52%] h-[600px] w-[600px] sm:h-[850px] sm:w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400/[0.04]" />

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
        <div className="absolute left-[14%] top-[24%] h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-emerald-300 shadow-[0_0_25px_rgba(52,211,153,0.9)]" />

        <div className="absolute right-[18%] top-[28%] h-2 w-2 rounded-full bg-teal-300 shadow-[0_0_25px_rgba(45,212,191,0.9)]" />

        {/* NOISE */}
        <div
          className="absolute inset-0 opacity-[0.035] mix-blend-soft-light"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/noise.png')",
          }}
        />

        
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-4xl">

        {/* TOP */}
        <div className="mb-12 sm:mb-20 text-center">

          {/* LABEL */}
          <div className="mb-5 flex items-center justify-center gap-3">

            <div className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_20px_rgba(52,211,153,0.9)]" />

            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.35em] text-emerald-300">
              COMMON QUESTIONS
            </span>
          </div>

          {/* HEADING */}
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-semibold leading-[1.1] sm:leading-[0.92] tracking-[-0.07em] text-white">
            Answers to
            <br />
            Your Questions
          </h2>
        </div>

        {/* FAQ */}
        <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl">

          {/* INNER LIGHT */}
          <div
            className="absolute left-1/2 top-0 h-[240px] w-[500px] -translate-x-1/2"
            style={{
              background:
                "radial-gradient(circle, rgba(52,211,153,0.12), transparent 72%)",
              filter: "blur(50px)",
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
          <div className="relative z-10 px-5 sm:px-8">

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
                    className="group flex w-full items-center justify-between gap-6 py-5 sm:py-7 text-left"
                  >

                    {/* QUESTION */}
                    <h3
                      className={`text-base sm:text-[20px] font-medium tracking-[-0.04em] transition-all duration-300 ${isOpen
                          ? "text-white"
                          : "text-white/75 group-hover:text-white"
                        }`}
                    >
                      {item.question}
                    </h3>

                    {/* ICON */}
                    <div
                      className={`flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${isOpen
                          ? "border-emerald-400/20 bg-emerald-400/10"
                          : "border-white/10 bg-white/[0.03]"
                        }`}
                    >

                      <ChevronDown
                        className={`h-4 w-4 sm:h-5 sm:w-5 transition-all duration-500 ${isOpen
                            ? "rotate-180 text-emerald-300"
                            : "text-white/55"
                          }`}
                      />
                    </div>
                  </button>

                  {/* ANSWER */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${isOpen
                        ? "max-h-[300px] pb-5 sm:pb-7 opacity-100"
                        : "max-h-0 opacity-0"
                      }`}
                  >

                    <p className="max-w-3xl text-xs sm:text-[15px] leading-relaxed text-white/45">
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