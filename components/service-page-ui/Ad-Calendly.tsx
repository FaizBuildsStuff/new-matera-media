"use client";

import React from "react";
import {
 ArrowUpRight,
 Sparkles,
 CalendarDays,
 Clock3,
 Video,
} from "lucide-react";

const AdCalendly = () => {
 return (
 <section
 id="calendly"
 className="relative px-6 py-16 text-white sm:py-20 lg:py-24 overflow-x-clip"
 >
 {/* BACKGROUND */}
 <div className="absolute inset-0 pointer-events-none">

 {/* TOP AURORA */}
 <div
 className="absolute left-1/2 top-[-32%] h-[900px] w-[1600px] -translate-x-1/2"
 style={{
 background: `
 conic-gradient(
 from 180deg at 50% 50%,
 rgba(190,242,100,0.14),
 rgba(132,204,22,0.06),
 rgba(16,185,129,0.04),
 rgba(255,255,255,0.02),
 rgba(190,242,100,0.14)
 )
 `,
 filter: "blur(100px)",
 opacity: 0.25,
 }}
 />

 {/* LEFT GLOW */}
 <div
 className="absolute left-[-14%] top-[12%] h-[700px] w-[700px] rounded-full"
 style={{
 background:
 "radial-gradient(circle, rgba(190,242,100,0.14), transparent 72%)",
 filter: "blur(90px)",
 }}
 />

 {/* RIGHT GLOW */}
 <div
 className="absolute right-[-14%] top-[5%] h-[760px] w-[760px] rounded-full"
 style={{
 background:
 "radial-gradient(circle, rgba(16,185,129,0.12), transparent 72%)",
 filter: "blur(90px)",
 }}
 />

 {/* CENTER LIGHT */}
 <div
 className="absolute left-1/2 top-[22%] h-[500px] w-[1000px] -translate-x-1/2"
 style={{
 background:
 "radial-gradient(ellipse, rgba(255,255,255,0.05), rgba(190,242,100,0.03), transparent 72%)",
 filter: "blur(90px)",
 }}
 />

 {/* BOTTOM DARK BLEND */}
 <div
 className="absolute bottom-[-12%] left-0 h-[40%] w-full"
 style={{
 background:
 "linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.72), transparent)",
 filter: "blur(20px)",
 }}
 />

 {/* LIGHT BEAMS */}
 <div
 className="absolute left-[12%] top-0 h-[80%] w-px opacity-40"
 style={{
 background:
 "linear-gradient(to bottom, transparent, rgba(190,242,100,0.18), transparent)",
 }}
 />

 <div
 className="absolute right-[12%] top-0 h-[80%] w-px opacity-30"
 style={{
 background:
 "linear-gradient(to bottom, transparent, rgba(16,185,129,0.18), transparent)",
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
 className="absolute inset-0 opacity-[0.12]"
 style={{
 backgroundImage:
 "radial-gradient(rgba(255,255,255,0.04) 0.8px, transparent 0.8px)",
 backgroundSize: "4px 4px",
 mixBlendMode: "soft-light",
 }}
 />
 </div>

 {/* CONTENT */}
 <div className="relative z-20 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">

 {/* TOP */}
 <div className="mb-12 text-center">

 {/* LABEL */}
 <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-lime-300/10 bg-lime-300/5 px-3 py-1.5 backdrop-blur-xl">

 <div className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_18px_rgba(190,242,100,1)]" />

 <span className="text-[9px] font-semibold uppercase tracking-[0.26em] text-lime-200">
 BOOK A CALL
 </span>
 </div>

 {/* HEADING */}
 <h2 className="mx-auto max-w-4xl text-[2.1rem] font-semibold leading-[0.98] tracking-[-0.05em] sm:text-[3rem] lg:text-[4rem]">
 Get Yourself
 <br />
 Winner Creatives.
 </h2>

 {/* TEXT */}
 <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-[1.8] text-white/45 sm:text-[15px]">
 Book a free call today.
 </p>
 </div>

 {/* MAIN GRID */}
 <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">

 {/* LEFT */}
 <div className="relative overflow-hidden rounded-[28px] border border-white/[0.03] bg-white/[0.025] p-6 backdrop-blur-2xl md:p-7">

 {/* CARD GLOW */}
 <div
 className="absolute right-[-20%] top-[-20%] h-[240px] w-[240px] rounded-full"
 style={{
 background:
 "radial-gradient(circle, rgba(190,242,100,0.14), transparent 72%)",
 filter: "blur(90px)",
 }}
 />

 {/* ICON */}
 <div className="relative flex h-11 w-11 items-center justify-center rounded-[18px] border border-lime-300/10 bg-lime-300/10">

 <div className="absolute inset-0 rounded-[18px] bg-lime-300/10 blur-xl" />

 <Sparkles className="relative z-10 h-5 w-5 text-lime-200" />
 </div>

 {/* TITLE */}
 <h3 className="mt-6 text-[2rem] font-semibold leading-[0.95] tracking-[-0.05em] sm:text-[2.7rem]">
 Free Strategy
 <br />
 Consultation.
 </h3>

 {/* DESC */}
 <p className="mt-4 max-w-md text-[14px] leading-[1.8] text-white/45">
 We’ll audit your current ad creatives and show you how we’d improve performance.
 </p>

 {/* FEATURES */}
 <div className="mt-8 space-y-3">

 {[
 {
 icon: CalendarDays,
 title: "Flexible Scheduling",
 text: "Choose a time that works best for your team.",
 },
 {
 icon: Clock3,
 title: "30 Minute Deep Dive",
 text: "Focused strategy session around scaling your ads.",
 },
 {
 icon: Video,
 title: "Zoom Consultation",
 text: "Discuss your growth goals live with us.",
 },
 ].map((item, i) => {
 const Icon = item.icon;

 return (
 <div
 key={i}
 className="flex items-start gap-3 rounded-[20px] border border-white/[0.05] bg-black/20 p-4"
 >

 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-lime-300/10">

 <Icon className="h-5 w-5 text-lime-200" />
 </div>

 <div>
 <h4 className="text-[15px] font-semibold">
 {item.title}
 </h4>

 <p className="mt-1 text-[13px] leading-[1.7] text-white/45">
 {item.text}
 </p>
 </div>
 </div>
 );
 })}
 </div>

 {/* CTA */}
 <a
 href="https://calendly.com/m-faizurrehman-crypto/30min"
 target="_blank"
 rel="noopener noreferrer"
 className="group relative mt-8 inline-flex items-center gap-3 overflow-hidden rounded-full border border-lime-300/10 bg-lime-300 px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-black transition-all duration-500 hover:scale-[1.02]"
 >

 <span className="relative z-10">
 Book Now
 </span>

 <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black text-lime-300">

 <ArrowUpRight className="h-4 w-4" />
 </div>
 </a>
 </div>

 {/* CALENDLY */}
<div className="group relative overflow-hidden rounded-[30px] border border-white/[0.04] bg-white/[0.02] backdrop-blur-2xl">

 {/* TOP LIGHT */}
 <div
 className="absolute inset-x-0 top-0 h-[120px]"
 style={{
 background:
 "linear-gradient(to bottom, rgba(190,242,100,0.08), transparent)",
 }}
 />

 {/* ATMOSPHERE */}
 <div
 className="absolute right-[-10%] top-[-10%] h-[220px] w-[220px] rounded-full"
 style={{
 background:
 "radial-gradient(circle, rgba(190,242,100,0.14), transparent 72%)",
 filter: "blur(60px)",
 }}
 />

 {/* INNER WRAPPER */}
 <div className="relative z-20 p-2">

 {/* CALENDLY FRAME */}
 <div className="overflow-hidden rounded-[24px] border border-white/[0.04] bg-black/25">

 <iframe
 src="https://calendly.com/m-faizurrehman-crypto/30min"
 width="100%"
 height="760"
 frameBorder="0"
 className="w-full"
 />
 </div>
 </div>

 {/* EDGE LIGHT */}
 <div className="pointer-events-none absolute inset-0 rounded-[30px] border border-white/[0.03]" />
</div>
 </div>
 </div>
 </section>
 );
};
export default AdCalendly;