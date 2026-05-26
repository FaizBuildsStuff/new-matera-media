"use client";

import React from "react";
import {
 Sparkles,
 PenTool,
 Video,
 ArrowRight,
} from "lucide-react";

const steps = [
 {
 number: "01",
 title: "We Understand Your Content",
 description:
 "We get to know your niche, your voice, and what actually works for your audience so nothing feels random.",
 icon: Sparkles,
 },
 {
 number: "02",
 title: "We Plan Everything Upfront",
 description:
 "You get a clear content plan with ideas, hooks, and direction so you’re never stuck thinking what to post.",
 icon: PenTool,
 },
 {
 number: "03",
 title: "You Record, We Handle The Rest",
 description:
 "We turn your raw clips into polished content, post it across platforms, and keep things moving consistently.",
 icon: Video,
 },
];

const YtHowitworks = () => {
 return (
 <section className="relative py-14 text-white sm:py-16 md:py-18">

 {/* BACKGROUND */}
 <div className="absolute inset-0 pointer-events-none transform-gpu will-change-transform">

 {/* MASSIVE RED GLOW */}
 <div
 className="absolute left-1/2 top-[-35%] h-[900px] w-[1700px] -translate-x-1/2"
 style={{
 background: `
 radial-gradient(
 ellipse at center,
 rgba(255,0,76,0.12) 0%,
 rgba(255,40,40,0.06) 24%,
 rgba(255,255,255,0.02) 48%,
 transparent 72%
 )
 `,
 filter: "blur(90px)",
 }}
 />

 {/* LEFT GLOW */}
 <div
 className="absolute left-[-10%] top-[18%] h-[520px] w-[520px] rounded-full"
 style={{
 background:
 "radial-gradient(circle, rgba(255,0,76,0.08), transparent 72%)",
 filter: "blur(90px)",
 }}
 />

 {/* RIGHT GLOW */}
 <div
 className="absolute right-[-10%] top-[8%] h-[620px] w-[620px] rounded-full"
 style={{
 background:
 "radial-gradient(circle, rgba(255,40,40,0.06), transparent 72%)",
 filter: "blur(90px)",
 }}
 />

 {/* CENTER LIGHT */}
 <div
 className="absolute left-1/2 top-[28%] h-[420px] w-[850px] -translate-x-1/2"
 style={{
 background: `
 radial-gradient(
 ellipse,
 rgba(255,255,255,0.04),
 rgba(255,0,76,0.025),
 transparent 72%
 )
 `,
 filter: "blur(90px)",
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
 className="absolute inset-0 opacity-[0.10]"
 style={{
 backgroundImage:
 "radial-gradient(rgba(255,255,255,0.04) 0.8px, transparent 0.8px)",
 backgroundSize: "4px 4px",
 mixBlendMode: "soft-light",
 }}
 />

 {/* BOTTOM BLEND */}
 <div
 className="absolute bottom-[-10%] left-0 h-[40%] w-full"
 style={{
 background:
 "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.58), transparent)",
 filter: "blur(20px)",
 }}
 />
 </div>

 {/* CONTENT */}
 <div className="relative z-20 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">

 {/* TOP */}
 <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

 {/* LEFT */}
 <div>

 {/* LABEL */}
 <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-400/10 bg-red-500/5 px-4 py-2 backdrop-blur-xl">

 <div className="h-2 w-2 rounded-full bg-red-400 shadow-[0_0_18px_rgba(255,0,76,1)]" />

 <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-red-100">
 HOW IT WORKS
 </span>
 </div>

 {/* HEADING */}
 <h2 className="max-w-4xl text-[2.1rem] font-semibold leading-[1] tracking-[-0.05em] sm:text-[2.8rem] lg:text-[3.4rem]">
 You Get On Camera.
 <br />

 <span className="bg-gradient-to-b from-white to-red-200 bg-clip-text text-transparent">
 We Handle The Rest.
 </span>
 </h2>
 </div>

 {/* RIGHT TEXT */}
 <p className="max-w-sm text-[14px] leading-[1.8] text-white/45 sm:text-[15px]">
 We simplify the entire content workflow so you can focus on
 recording while we handle strategy, editing, posting, and scaling.
 </p>
 </div>

 {/* STEPS */}
 <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">

 {steps.map((step, index) => {
 const Icon = step.icon;

 return (
 <div
 key={index}
 className="group relative overflow-hidden rounded-[28px] border border-white/[0.03] bg-white/[0.025] p-6 backdrop-blur-2xl transition-all duration-700 hover:-translate-y-1.5 hover:border-red-400/12"
 >

 {/* GLOW */}
 <div
 className="absolute inset-0 opacity-0 transition-all duration-700 group-hover:opacity-100"
 style={{
 background:
 "radial-gradient(circle at top, rgba(255,0,76,0.10), transparent 72%)",
 }}
 />

 {/* SHINE */}
 <div
 className="absolute left-[-40%] top-[-20%] h-[240px] w-[120px] rotate-[24deg] opacity-0 transition-all duration-1000 group-hover:left-[120%] group-hover:opacity-100"
 style={{
 background:
 "linear-gradient(to right, transparent, rgba(255,255,255,0.10), transparent)",
 filter: "blur(18px)",
 }}
 />

 {/* TOP */}
 <div className="relative z-10 flex items-start justify-between">

 {/* ICON */}
 <div className="relative flex h-10 w-10 items-center justify-center rounded-[18px] border border-red-400/10 bg-red-500/5">

 {/* INNER GLOW */}
 <div className="absolute inset-0 rounded-[18px] bg-red-500/10 blur-xl" />

 <Icon className="relative z-10 h-5 w-5 text-red-300" />
 </div>

 {/* NUMBER */}
 <span className="text-[2rem] font-semibold leading-none tracking-[-0.08em] text-white/[0.05]">
 {step.number}
 </span>
 </div>

 {/* CONTENT */}
 <div className="relative z-10 mt-7">

 {/* TITLE */}
 <h3 className="text-[1.35rem] font-semibold leading-[1.15] tracking-[-0.04em]">
 {step.title}
 </h3>

 {/* DESCRIPTION */}
 <p className="mt-4 text-[13px] leading-[1.75] text-white/45">
 {step.description}
 </p>

 {/* BOTTOM */}
 <div className="mt-7 flex items-center justify-between">

 <div className="inline-flex items-center gap-2 rounded-full border border-red-400/10 bg-red-500/5 px-3 py-1.5">

 <div className="h-1.5 w-1.5 rounded-full bg-red-400 shadow-[0_0_10px_rgba(255,0,76,1)]" />

 <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-red-100">
 Content System
 </span>
 </div>

 <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.03] bg-white/[0.03] transition-all duration-500 group-hover:bg-red-500">

 <ArrowRight className="h-4 w-4" />
 </button>
 </div>
 </div>

 {/* EDGE LIGHT */}
 <div className="absolute inset-0 rounded-[28px] border border-white/[0.03]" />
 </div>
 );
 })}
 </div>
 </div>
 </section>
 );
};

export default YtHowitworks;