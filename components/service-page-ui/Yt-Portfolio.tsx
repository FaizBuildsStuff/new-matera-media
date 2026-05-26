"use client";

import React, { useRef } from "react";
import {
 ArrowLeft,
 ArrowRight,
 CircleIcon,
 Play,
 Sparkles,
} from "lucide-react";

const reels = [
 {
 title: "How We Pulled 3M Organic Views",
 image:
 "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
 views: "3.1M",
 },
 {
 title: "Turning YouTube Into A Client Machine",
 image:
 "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
 views: "1.8M",
 },
 {
 title: "Our Viral Hook Strategy",
 image:
 "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?q=80&w=1200&auto=format&fit=crop",
 views: "4.4M",
 },
 {
 title: "How We Scale Personal Brands",
 image:
 "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
 views: "2.7M",
 },
];

const YtPortfolio = () => {
 const sliderRef = useRef<HTMLDivElement>(null);

 const scroll = (direction: "left" | "right") => {
 if (!sliderRef.current) return;

 sliderRef.current.scrollBy({
 left: direction === "left" ? -360 : 360,
 behavior: "smooth",
 });
 };

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
 rgba(255,0,76,0.14) 0%,
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
 className="absolute left-[-12%] top-[10%] h-[560px] w-[560px] rounded-full"
 style={{
 background:
 "radial-gradient(circle, rgba(255,0,76,0.10), transparent 72%)",
 filter: "blur(90px)",
 }}
 />

 {/* RIGHT GLOW */}
 <div
 className="absolute right-[-12%] top-[20%] h-[620px] w-[620px] rounded-full"
 style={{
 background:
 "radial-gradient(circle, rgba(255,40,40,0.08), transparent 72%)",
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
 <div className="relative z-20 mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-10">

 {/* TOP */}
 <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

 {/* LEFT */}
 <div>

 {/* LABEL */}
 <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-400/10 bg-red-500/5 px-4 py-2 backdrop-blur-xl">

 <div className="h-2 w-2 rounded-full bg-red-400 shadow-[0_0_18px_rgba(255,0,76,1)]" />

 <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-red-100">
 YOUTUBE REELS
 </span>
 </div>

 {/* HEADING */}
 <h2 className="max-w-4xl text-[2.1rem] font-semibold leading-[1] tracking-[-0.05em] sm:text-[2.8rem] lg:text-[3.4rem]">
 Our Work
 </h2>

 {/* TEXT */}
 <p className="mt-4 max-w-xl text-[14px] leading-[1.8] text-white/45 sm:text-[15px]">
 Industry-leading production.
 </p>
 </div>

 {/* CONTROLS */}
 <div className="flex items-center gap-3">

 <button
 onClick={() => scroll("left")}
 className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/[0.03] bg-white/[0.03] backdrop-blur-2xl transition-all duration-500 hover:border-red-400/20"
 >
 <ArrowLeft className="relative z-10 h-4 w-4" />
 </button>

 <button
 onClick={() => scroll("right")}
 className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-red-500 transition-all duration-500 hover:scale-[1.03]"
 >

 <div
 className="absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100"
 style={{
 background:
 "linear-gradient(120deg, rgba(255,255,255,0.18), transparent)",
 }}
 />

 <ArrowRight className="relative z-10 h-4 w-4" />
 </button>
 </div>
 </div>

 {/* REELS SLIDER */}
 <div
 ref={sliderRef}
 className="flex gap-4 overflow-x-auto scroll-smooth pb-4 [&::-webkit-scrollbar]:hidden"
 >

 {reels.map((reel, index) => (
 <div
 key={index}
 className="group relative w-[250px] shrink-0 md:w-[300px]"
 >

 {/* GLOW */}
 <div
 className="absolute inset-0 rounded-[28px] opacity-0 blur-2xl transition-all duration-700 group-hover:opacity-100"
 style={{
 background:
 "radial-gradient(circle, rgba(255,0,76,0.18), transparent 72%)",
 }}
 />

 {/* CARD */}
 <div className="relative overflow-hidden rounded-[28px] border border-white/[0.03] bg-white/[0.025] backdrop-blur-2xl transition-all duration-700 group-hover:-translate-y-2 group-hover:border-red-400/15">

 {/* SHINE */}
 <div
 className="absolute left-[-30%] top-[-20%] h-[240px] w-[120px] rotate-[25deg] opacity-0 transition-all duration-1000 group-hover:left-[120%] group-hover:opacity-100"
 style={{
 background:
 "linear-gradient(to right, transparent, rgba(255,255,255,0.12), transparent)",
 filter: "blur(18px)",
 }}
 />

 {/* IMAGE */}
 <div className="relative overflow-hidden">

 <img
 src={reel.image}
 alt={reel.title}
 className="h-[420px] w-full object-cover transition-all duration-700 group-hover:scale-[1.04]"
 />

 {/* OVERLAY */}
 <div className="absolute inset-0 bg-black/25" />

 {/* TOP */}
 <div className="absolute left-4 right-4 top-4 flex items-center justify-between">

 {/* REEL */}
 <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-black/40 px-3 py-1.5 backdrop-blur-xl">

 <CircleIcon className="h-3.5 w-3.5 text-red-300" />

 <span className="text-[9px] font-semibold uppercase tracking-[0.14em]">
 Reel
 </span>
 </div>

 {/* VIEWS */}
 <div className="rounded-full border border-white/[0.08] bg-black/40 px-3 py-1.5 text-[10px] font-semibold backdrop-blur-xl">
 {reel.views}
 </div>
 </div>

 {/* PLAY */}
 <button className="group/play absolute left-1/2 top-1/2 flex h-[90px] w-[90px] -translate-x-1/2 -translate-y-1/2 items-center justify-center">

 {/* OUTER */}
 <div className="absolute inset-0 rounded-full border border-red-400/20 bg-red-500/10 backdrop-blur-2xl shadow-[0_0_60px_rgba(255,0,76,0.25)]" />

 {/* INNER */}
 <div className="relative z-10 flex h-[54px] w-[54px] items-center justify-center rounded-full bg-white transition-all duration-500 group-hover/play:scale-110">

 <Play className="ml-0.5 h-5 w-5 fill-black text-black" />
 </div>
 </button>
 </div>

 {/* CONTENT */}
 <div className="relative p-5">

 {/* BADGE */}
 <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-red-400/10 bg-red-500/5 px-3 py-1.5">

 <Sparkles className="h-3.5 w-3.5 text-red-300" />

 <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-red-100">
 Viral Hook
 </span>
 </div>

 {/* TITLE */}
 <h3 className="text-[1.15rem] font-semibold leading-[1.2] tracking-[-0.04em]">
 {reel.title}
 </h3>
 </div>

 {/* EDGE LIGHT */}
 <div className="absolute inset-0 rounded-[28px] border border-white/[0.03]" />
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
};

export default YtPortfolio;