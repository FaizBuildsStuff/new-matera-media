"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const faqItems = [
  {
    question: "What is your typical turnaround time?",
    answer:
      "Our standard turnaround for most projects is 2-4 weeks, depending on complexity. For expedited deliveries, we offer rush options upon request.",
  },
  {
    question: "Do you offer revisions?",
    answer:
      "Absolutely. We include 3 rounds of revisions in our standard packages to ensure the final output aligns perfectly with your vision.",
  },
  {
    question: "How does the payment structure work?",
    answer:
      "We typically require a 50% deposit to commence work, with the remaining 50% due upon final delivery. We also offer milestone-based payment plans for larger projects.",
  },
  {
    question: "Can you help with strategy, not just production?",
    answer:
      "Yes. Strategy is at the core of what we do. We don't just make things look good; we ensure they perform by aligning creative with your business goals.",
  },
  {
    question: "What assets do I need to provide?",
    answer:
      "It depends on the project. Generally, we'll need your brand guidelines, logo files, and any specific footage or copy you want included. We can handle the rest.",
  },
];

const Faq = () => {
  const [active, setActive] = useState(2);

  return (
    <section className="relative border-none outline-none px-6 py-20 sm:py-24 lg:py-28 text-white">

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
              width={380}
              height={380}
              priority
              className="w-[180px] sm:w-[320px] opacity-[0.16] blur-[1px] brightness-125 contrast-125 object-contain select-none pointer-events-none"
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
        <div className="mb-10 sm:mb-14 text-center">

          {/* LABEL */}
          <div className="mb-5 flex items-center justify-center gap-3">

            <div className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_20px_rgba(52,211,153,0.9)]" />

            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.35em] text-emerald-300">
              COMMON QUESTIONS
            </span>
          </div>

          {/* HEADING */}
          <h2 className="text-[2.2rem] sm:text-[3rem] lg:text-[4rem] font-semibold leading-[1] tracking-[-0.05em] text-white">
            Answers to
            <br />
            Your Questions
          </h2>
        </div>

        {/* FAQ */}
        <div className="relative overflow-hidden rounded-[24px] sm:rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl">

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
          <div className="relative z-10 px-4 sm:px-6">

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
                    className="group flex w-full items-center justify-between gap-4 py-4 sm:py-5 text-left"
                  >

                    {/* QUESTION */}
                    <h3
                      className={`text-[15px] sm:text-[17px] font-medium tracking-[-0.03em] transition-all duration-300 ${isOpen
                        ? "text-white"
                        : "text-white/75 group-hover:text-white"
                        }`}
                    >
                      {item.question}
                    </h3>

                    {/* ICON */}
                    <div
                      className={`flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${isOpen
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

                    <p className="max-w-2xl text-[13px] sm:text-[14px] leading-relaxed text-white/50">
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