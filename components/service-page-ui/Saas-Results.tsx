"use client";

import React from "react";
import {
 ArrowUpRight,
 TrendingUp,
 BarChart3,
 Sparkles,
 PlayCircle,
} from "lucide-react";

const SaasResults = () => {
 return (
 <section className="relative py-14 text-white sm:py-16 md:py-18">

 {/* BACKGROUND */}
 <div className="absolute inset-0 pointer-events-none transform-gpu will-change-transform">

 {/* MASSIVE TOP GLOW */}
 <div
 className="absolute left-1/2 top-[-20%] h-[950px] w-[1800px] -translate-x-1/2"
 style={{
 background: `
 radial-gradient(
 ellipse at center,
 rgba(139,92,246,0.16) 0%,
 rgba(59,130,246,0.08) 20%,
 rgba(255,255,255,0.02) 46%,
 transparent 72%
 )
 `,
 filter: "blur(90px)",
 }}
 />

 {/* LEFT CLOUD */}
 <div
 className="absolute left-[-10%] top-[12%] h-[620px] w-[620px] rounded-full"
 style={{
 background:
 "radial-gradient(circle, rgba(59,130,246,0.08), transparent 72%)",
 filter: "blur(90px)",
 }}
 />

 {/* RIGHT CLOUD */}
 <div
 className="absolute right-[-10%] top-[0%] h-[700px] w-[700px] rounded-full"
 style={{
 background:
 "radial-gradient(circle, rgba(168,85,247,0.10), transparent 72%)",
 filter: "blur(90px)",
 }}
 />

 {/* LIGHT STREAK */}
 <div
 className="absolute left-[-5%] top-[40%] h-[180px] w-[120%] rotate-[-8deg]"
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

 {/* FLOATING PARTICLES */}
 <div className="absolute left-[18%] top-[28%] h-2 w-2 rounded-full bg-blue-300 shadow-[0_0_18px_rgba(59,130,246,1)]" />

 <div className="absolute right-[18%] top-[20%] h-2.5 w-2.5 rounded-full bg-violet-300 shadow-[0_0_20px_rgba(168,85,247,1)]" />

 <div className="absolute left-[28%] bottom-[18%] h-2 w-2 rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,0.8)]" />

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
 <div className="relative z-20 mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-10">

 {/* TOP */}
 <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

 {/* LEFT */}
 <div>

 {/* LABEL */}
 <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-400/10 bg-white/[0.03] px-4 py-2 backdrop-blur-xl">

 <div className="h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_16px_rgba(168,85,247,1)]" />

 <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/75">
 RESULTS
 </span>
 </div>

 {/* HEADING */}
 <h2 className="max-w-4xl text-[2.1rem] font-semibold leading-[1] tracking-[-0.05em] sm:text-[2.8rem] lg:text-[3.4rem]">
 SaaS Videos That
 <br />

 <span className="bg-gradient-to-b from-white via-blue-100 to-violet-200 bg-clip-text text-transparent">
 Actually Perform.
 </span>
 </h2>
 </div>

 {/* RIGHT TEXT */}
 <p className="max-w-sm text-[14px] leading-[1.8] text-white/45 sm:text-[15px]">
 Beautiful visuals mean nothing without performance. Every SaaS
 creative is optimized for retention, engagement, and conversions.
 </p>
 </div>

 {/* MAIN GRID */}
 <div className="grid gap-4 md:grid-cols-2">

 {/* VISUAL CARD */}
 <div className="group relative overflow-hidden rounded-[30px] border border-white/[0.03] bg-white/[0.025] p-5 backdrop-blur-2xl">

 {/* CARD GLOW */}
 <div
 className="absolute inset-0"
 style={{
 background: `
 radial-gradient(
 circle at top,
 rgba(139,92,246,0.10),
 transparent 72%
 )
 `,
 }}
 />

 {/* TOP BAR */}
 <div className="relative z-10 mb-6 flex items-center justify-between">

 <div>

 <p className="text-[13px] text-white/45">
 Campaign Performance
 </p>

 <h3 className="mt-2 text-[2rem] font-semibold tracking-[-0.05em] sm:text-[2.4rem]">
 +287% Growth
 </h3>
 </div>

 <button className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] transition-all duration-500 hover:bg-violet-500 hover:border-violet-400/20">

 <ArrowUpRight className="h-4 w-4" />
 </button>
 </div>

 {/* GRAPH */}
 <div className="relative h-[260px] overflow-hidden rounded-[26px] border border-white/[0.03] bg-black/30">

 {/* GRID */}
 <div
 className="absolute inset-0 opacity-[0.04]"
 style={{
 backgroundImage: `
 linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
 linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
 `,
 backgroundSize: "60px 60px",
 }}
 />

 {/* GRAPH LINE */}
 <svg
 className="absolute inset-0 h-full w-full"
 viewBox="0 0 1000 400"
 preserveAspectRatio="none"
 >

 {/* GLOW */}
 <path
 d="M0 320 C 140 300, 180 250, 300 240 C 420 228, 520 140, 620 130 C 760 118, 820 40, 1000 20"
 fill="none"
 stroke="rgba(139,92,246,0.2)"
 strokeWidth="18"
 strokeLinecap="round"
 />

 {/* MAIN */}
 <path
 d="M0 320 C 140 300, 180 250, 300 240 C 420 228, 520 140, 620 130 C 760 118, 820 40, 1000 20"
 fill="none"
 stroke="url(#paint0_linear)"
 strokeWidth="4"
 strokeLinecap="round"
 />

 <defs>
 <linearGradient
 id="paint0_linear"
 x1="0"
 y1="0"
 x2="1000"
 y2="0"
 >
 <stop stopColor="#3B82F6" />
 <stop offset="1" stopColor="#A855F7" />
 </linearGradient>
 </defs>
 </svg>

 {/* FLOATING CARD */}
 <div className="absolute right-5 top-5 rounded-[20px] border border-white/[0.08] bg-black/20 p-4 backdrop-blur-2xl">

 <p className="text-[11px] text-white/45">
 Avg. Watch Time
 </p>

 <h4 className="mt-2 text-[1.7rem] font-semibold tracking-[-0.05em]">
 78%
 </h4>

 <div className="mt-3 flex items-center gap-2">

 <div className="h-1.5 w-1.5 rounded-full bg-violet-300 shadow-[0_0_10px_rgba(168,85,247,1)]" />

 <span className="text-[11px] text-violet-100">
 Performance Increase
 </span>
 </div>
 </div>

 {/* PLAY */}
 <div className="absolute bottom-5 left-5 flex items-center gap-3">

 <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] backdrop-blur-2xl">

 <PlayCircle className="h-6 w-6 text-white" />
 </div>

 <div>

 <h4 className="text-[14px] font-medium">
 SaaS Ad Creative
 </h4>

 <p className="mt-1 text-[12px] text-white/45">
 High Retention Motion Video
 </p>
 </div>
 </div>
 </div>
 </div>

 {/* RIGHT CARDS */}
 <div className="grid gap-4">

 {/* CARD 1 */}
 <div className="group relative overflow-hidden rounded-[28px] border border-white/[0.03] bg-white/[0.025] p-5 backdrop-blur-2xl transition-all duration-700 hover:-translate-y-1">

 {/* GLOW */}
 <div
 className="absolute inset-0 opacity-0 transition-all duration-700 group-hover:opacity-100"
 style={{
 background: `
 radial-gradient(
 circle at top,
 rgba(59,130,246,0.14),
 transparent 72%
 )
 `,
 }}
 />

 {/* TOP */}
 <div className="relative z-10 flex items-start justify-between gap-5">

 {/* LEFT */}
 <div>

 <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[18px] border border-blue-400/10 bg-blue-500/10">

 <TrendingUp className="h-5 w-5 text-blue-200" />
 </div>

 <h4 className="text-[1.3rem] font-semibold tracking-[-0.04em]">
 Lower CAC
 </h4>

 <p className="mt-3 max-w-md text-[13px] leading-[1.8] text-white/45">
 Reduce acquisition costs through stronger SaaS storytelling.
 </p>
 </div>

 {/* VALUE */}
 <div className="text-[2.2rem] font-semibold leading-none tracking-[-0.05em]">
 -38%
 </div>
 </div>

 {/* VISUAL */}
 <div className="relative mt-6 h-[150px] overflow-hidden rounded-[22px] border border-white/[0.03] bg-black/40">

 {/* GRID */}
 <div
 className="absolute inset-0 opacity-[0.05]"
 style={{
 backgroundImage: `
 linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
 linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
 `,
 backgroundSize: "50px 50px",
 }}
 />

 {/* DECLINE GRAPH */}
 <svg
 className="absolute inset-0 h-full w-full"
 viewBox="0 0 1000 300"
 preserveAspectRatio="none"
 >

 <path
 d="M0 60 C 120 90, 200 120, 320 130 C 450 150, 560 180, 700 210 C 820 240, 900 250, 1000 270"
 fill="none"
 stroke="rgba(59,130,246,0.16)"
 strokeWidth="18"
 strokeLinecap="round"
 />

 <path
 d="M0 60 C 120 90, 200 120, 320 130 C 450 150, 560 180, 700 210 C 820 240, 900 250, 1000 270"
 fill="none"
 stroke="#60A5FA"
 strokeWidth="4"
 strokeLinecap="round"
 />
 </svg>
 </div>
 </div>

 {/* BOTTOM GRID */}
 <div className="grid gap-4 sm:grid-cols-2">

 {/* CARD 2 */}
 <div className="group relative overflow-hidden rounded-[28px] border border-white/[0.03] bg-white/[0.025] p-5 backdrop-blur-2xl transition-all duration-700 hover:-translate-y-1">

 {/* GLOW */}
 <div
 className="absolute inset-0 opacity-0 transition-all duration-700 group-hover:opacity-100"
 style={{
 background: `
 radial-gradient(
 circle at top,
 rgba(168,85,247,0.16),
 transparent 72%
 )
 `,
 }}
 />

 {/* ICON */}
 <div className="relative z-10 mb-4 flex h-10 w-10 items-center justify-center rounded-[18px] border border-violet-400/10 bg-violet-500/10">

 <BarChart3 className="h-5 w-5 text-violet-200" />
 </div>

 {/* VALUE */}
 <div className="relative z-10 text-[2.2rem] font-semibold tracking-[-0.05em]">
 +4.8x
 </div>

 {/* TITLE */}
 <h4 className="relative z-10 mt-2 text-[1.2rem] font-semibold tracking-[-0.04em]">
 Higher CTR
 </h4>

 {/* TEXT */}
 <p className="relative z-10 mt-3 text-[13px] leading-[1.75] text-white/45">
 Motion creatives optimized for engagement and clicks.
 </p>

 {/* BARS */}
 <div className="relative mt-6 flex h-[120px] items-end gap-2 overflow-hidden rounded-[22px] border border-white/[0.03] bg-black/40 px-4 pb-4">

 {[40, 70, 90, 110, 95].map((height, i) => (
 <div
 key={i}
 className="relative flex-1 rounded-full bg-gradient-to-t from-violet-500/40 to-blue-300/90"
 style={{
 height: `${height}px`,
 }}
 >
 <div className="absolute inset-0 rounded-full bg-white/10 blur-xl" />
 </div>
 ))}
 </div>
 </div>

 {/* CARD 3 */}
 <div className="group relative overflow-hidden rounded-[28px] border border-white/[0.03] bg-white/[0.025] p-5 backdrop-blur-2xl transition-all duration-700 hover:-translate-y-1">

 {/* GLOW */}
 <div
 className="absolute inset-0 opacity-0 transition-all duration-700 group-hover:opacity-100"
 style={{
 background: `
 radial-gradient(
 circle at top,
 rgba(236,72,153,0.16),
 transparent 72%
 )
 `,
 }}
 />

 {/* ICON */}
 <div className="relative z-10 mb-4 flex h-10 w-10 items-center justify-center rounded-[18px] border border-pink-400/10 bg-pink-500/10">

 <Sparkles className="h-5 w-5 text-pink-200" />
 </div>

 {/* VALUE */}
 <div className="relative z-10 text-[2.2rem] font-semibold tracking-[-0.05em]">
 +42%
 </div>

 {/* TITLE */}
 <h4 className="relative z-10 mt-2 text-[1.2rem] font-semibold tracking-[-0.04em]">
 Better Conversions
 </h4>

 {/* TEXT */}
 <p className="relative z-10 mt-3 text-[13px] leading-[1.75] text-white/45">
 SaaS videos built to convert viewers into customers faster.
 </p>

 {/* VISUAL */}
 <div className="relative mt-6 h-[120px] overflow-hidden rounded-[22px] border border-white/[0.03] bg-black/40">

 {/* CENTER GLOW */}
 <div
 className="absolute left-1/2 top-1/2 h-[140px] w-[140px] -translate-x-1/2 -translate-y-1/2 rounded-full"
 style={{
 background: `
 radial-gradient(
 circle,
 rgba(236,72,153,0.22),
 rgba(168,85,247,0.10),
 transparent 72%
 )
 `,
 filter: "blur(30px)",
 }}
 />

 {/* ORBITS */}
 <div className="absolute left-1/2 top-1/2 h-[90px] w-[90px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-pink-400/[0.12]" />

 <div className="absolute left-1/2 top-1/2 h-[58px] w-[58px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-300/[0.16]" />

 {/* CENTER */}
 <div className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.4)]">

 <Sparkles className="h-4 w-4" />
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>
 );
};

export default SaasResults;