"use client";

import React from "react";
import {
 ArrowRight,
 CalendarDays,
 Clock3,
 Video,
} from "lucide-react";

const YtCalendly = () => {
 return (
 <section
 id="calendly"
 className="relative py-14 text-white sm:py-16 md:py-18 overflow-x-clip"
 >

 {/* BACKGROUND */}
 <div className="absolute inset-0 pointer-events-none transform-gpu will-change-transform">

 {/* MASSIVE RED ATMOSPHERE */}
 <div
 className="absolute left-1/2 top-[-30%] h-[950px] w-[1800px] -translate-x-1/2"
 style={{
 background: `
 radial-gradient(
 ellipse at center,
 rgba(255,0,76,0.18) 0%,
 rgba(255,30,60,0.10) 18%,
 rgba(255,60,60,0.05) 36%,
 rgba(255,255,255,0.02) 50%,
 transparent 74%
 )
 `,
 filter: "blur(90px)",
 }}
 />

 {/* SECOND LAYER */}
 <div
 className="absolute left-1/2 top-[4%] h-[620px] w-[1200px] -translate-x-1/2"
 style={{
 background: `
 radial-gradient(
 ellipse,
 rgba(255,0,76,0.10),
 rgba(255,40,40,0.04),
 transparent 72%
 )
 `,
 filter: "blur(90px)",
 }}
 />

 {/* LEFT CLOUD */}
 <div
 className="absolute left-[-12%] top-[18%] h-[620px] w-[620px] rounded-full"
 style={{
 background:
 "radial-gradient(circle, rgba(255,0,76,0.08), transparent 72%)",
 filter: "blur(90px)",
 }}
 />

 {/* RIGHT CLOUD */}
 <div
 className="absolute right-[-10%] top-[0%] h-[700px] w-[700px] rounded-full"
 style={{
 background:
 "radial-gradient(circle, rgba(255,50,50,0.08), transparent 72%)",
 filter: "blur(90px)",
 }}
 />

 {/* RED LIGHT WAVE */}
 <div
 className="absolute left-[-5%] top-[34%] h-[180px] w-[120%] rotate-[-6deg]"
 style={{
 background: `
 linear-gradient(
 to right,
 transparent,
 rgba(255,0,76,0.12),
 rgba(255,40,40,0.08),
 transparent
 )
 `,
 filter: "blur(60px)",
 }}
 />

 {/* CENTER LIGHT */}
 <div
 className="absolute left-1/2 top-[28%] h-[240px] w-[620px] -translate-x-1/2"
 style={{
 background: `
 radial-gradient(
 ellipse,
 rgba(255,255,255,0.08),
 rgba(255,255,255,0.03),
 transparent 72%
 )
 `,
 filter: "blur(90px)",
 }}
 />

 {/* ORBIT */}
 <div className="absolute left-[-4%] bottom-[-10%] h-[340px] w-[340px] rounded-full border border-red-400/[0.04]" />

 {/* PARTICLES */}
 <div className="absolute left-[16%] top-[68%] h-2 w-2 rounded-full bg-red-300 shadow-[0_0_20px_rgba(255,0,76,0.9)]" />

 <div className="absolute right-[18%] top-[28%] h-2.5 w-2.5 rounded-full bg-red-200 shadow-[0_0_24px_rgba(255,60,60,0.9)]" />

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

 {/* MAIN CARD */}
 <div className="relative overflow-hidden rounded-[32px] border border-white/[0.03] bg-white/[0.025] backdrop-blur-2xl">

 {/* TOP LIGHT */}
 <div
 className="absolute left-1/2 top-0 h-[180px] w-[480px] -translate-x-1/2"
 style={{
 background:
 "radial-gradient(ellipse, rgba(190,242,100,0.12), transparent 72%)",
 filter: "blur(90px)",
 }}
 />

 {/* INNER GLOW */}
 <div
 className="absolute inset-0"
 style={{
 background:
 "radial-gradient(circle at top, rgba(190,242,100,0.06), transparent 72%)",
 }}
 />

 <div className="relative z-10 grid lg:grid-cols-[0.82fr_1.18fr]">

 {/* LEFT SIDE */}
 <div className="relative overflow-hidden p-6 md:p-8 lg:border-b-0 lg:border-r lg:border-white/[0.03]">

 {/* BIG GLOW */}
 <div
 className="absolute left-[-10%] top-[20%] h-[260px] w-[260px] rounded-full"
 style={{
 background:
 "radial-gradient(circle, rgba(190,242,100,0.10), transparent 72%)",
 filter: "blur(90px)",
 }}
 />

 {/* LABEL */}
 <div className="relative z-10 mb-5 inline-flex items-center gap-2 rounded-full border border-lime-300/10 bg-lime-300/5 px-4 py-2">

 <div className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_16px_rgba(190,242,100,1)]" />

 <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-lime-100">
 BOOK A CALL
 </span>
 </div>

 {/* HEADING */}
 <h2 className="relative z-10 max-w-md text-[2.1rem] font-semibold leading-[0.95] tracking-[-0.05em] sm:text-[2.8rem] lg:text-[3rem]">
 Let’s Connect
 <br />

 <span className="bg-gradient-to-b from-white to-lime-200 bg-clip-text text-transparent">
 And Talk.
 </span>
 </h2>

 {/* TEXT */}
 <p className="relative z-10 mt-5 max-w-sm text-[13px] leading-[1.75] text-white/45">
 Schedule a strategy session and let’s break down your content,
 your offer, and how we can scale your YouTube presence.
 </p>

 {/* INFO */}
 <div className="relative z-10 mt-8 space-y-3">

 {/* ITEM */}
 <div className="flex items-center gap-3 rounded-[20px] border border-white/[0.04] bg-white/[0.02] p-4">

 <div className="flex h-10 w-10 items-center justify-center rounded-[14px] border border-lime-300/10 bg-lime-300/5">

 <Clock3 className="h-4 w-4 text-lime-200" />
 </div>

 <div>
 <h4 className="text-[14px] font-medium">
 30 Minute Strategy Call
 </h4>

 <p className="mt-1 text-[12px] text-white/45">
 Personalized growth roadmap.
 </p>
 </div>
 </div>

 {/* ITEM */}
 <div className="flex items-center gap-3 rounded-[20px] border border-white/[0.04] bg-white/[0.02] p-4">

 <div className="flex h-10 w-10 items-center justify-center rounded-[14px] border border-lime-300/10 bg-lime-300/5">

 <Video className="h-4 w-4 text-lime-200" />
 </div>

 <div>
 <h4 className="text-[14px] font-medium">
 Google Meet Session
 </h4>

 <p className="mt-1 text-[12px] text-white/45">
 Fully remote & easy onboarding.
 </p>
 </div>
 </div>
 </div>
 </div>

 {/* RIGHT SIDE */}
 <div className="relative p-3 md:p-5">

 {/* CALENDLY WRAP */}
 <div className="relative overflow-hidden rounded-[24px] border border-white/[0.03] bg-black/30 backdrop-blur-2xl">

 {/* CALENDLY GLOW */}
 <div
 className="absolute inset-0"
 style={{
 background:
 "radial-gradient(circle at top, rgba(190,242,100,0.06), transparent 72%)",
 }}
 />

 {/* TOP BAR */}
 <div className="relative z-10 flex items-center justify-between px-5 py-4">

 <div className="flex items-center gap-3">

 <div className="flex h-9 w-9 items-center justify-center rounded-full bg-lime-300 text-black">

 <CalendarDays className="h-4 w-4" />
 </div>

 <div>
 <h4 className="text-[14px] font-medium">
 Free Strategy Session
 </h4>

 <p className="text-[12px] text-white/45">
 Calendly Booking
 </p>
 </div>
 </div>

 <div className="rounded-full border border-lime-300/10 bg-lime-300/5 px-3 py-1.5">

 <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-lime-100">
 LIVE
 </span>
 </div>
 </div>

 {/* CALENDLY */}
 <div className="relative z-10 h-[620px] w-full">

 <iframe
 src="https://calendly.com/m-faizurrehman-crypto/30min"
 width="100%"
 height="100%"
 frameBorder="0"
 className="rounded-b-[24px]"
 />
 </div>
 </div>

 {/* FLOAT BUTTON */}
 <button className="group absolute bottom-7 right-7 hidden items-center gap-3 rounded-full border border-lime-300/10 bg-lime-300 px-5 py-3 transition-all duration-500 hover:scale-[1.02] md:flex">

 <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-black">
 Start Scaling
 </span>

 <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-all duration-500 group-hover:rotate-45">

 <ArrowRight className="h-4 w-4" />
 </div>
 </button>
 </div>
 </div>

 {/* EDGE LIGHT */}
 <div className="absolute inset-0 rounded-[32px] border border-white/[0.03]" />
 </div>
 </div>
 </section>
 );
};

export default YtCalendly;