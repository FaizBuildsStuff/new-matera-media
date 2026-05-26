"use client";

import React from "react";
import { motion } from "framer-motion";
import {
 ArrowRight,
 Check,
 Sparkles,
} from "lucide-react";

const plans = [
 {
 name: "Starter",
 badge: "For Early SaaS Brands",
 button: "I Need This",
 featured: false,
 accent: "cyan",
 description:
 "A clear starting point for your product.",
 features: [
 "Messaging and narrative defined",
 "Script and storyboard included",
 "Product visuals with clean motion",
 "Final video ready for site and sales",
 ],
 },

 {
 name: "Growth",
 badge: "Most Popular",
 button: "I Need This",
 featured: true,
 accent: "violet",
 description:
 "For launches and growth pushes.",
 features: [
 "Product or feature launch videos",
 "Cutdowns for ads and social",
 "Landing page ready edits",
 "Structured for distribution",
 ],
 },

 {
 name: "Scale",
 badge: "Enterprise Scaling",
 button: "I Need This",
 featured: false,
 accent: "blue",
 description:
 "Ongoing production for scaling teams.",
 features: [
 "Launch, product, and feature videos",
 "Cutdowns for ads and distribution",
 "Onboarding and education content",
 "Dedicated creative support",
 ],
 },
];

const SaasPricing = () => {
 return (
 <section className="relative py-14 text-white sm:py-16 md:py-18">

 {/* BACKGROUND */}
 <div className="absolute inset-0 pointer-events-none transform-gpu will-change-transform">

 {/* MAIN AURORA */}
 <div
 className="absolute left-1/2 top-[-22%] h-[950px] w-[1800px] -translate-x-1/2"
 style={{
 background: `
 radial-gradient(
 ellipse at center,
 rgba(139,92,246,0.16) 0%,
 rgba(99,102,241,0.10) 18%,
 rgba(59,130,246,0.06) 34%,
 rgba(255,255,255,0.02) 50%,
 transparent 74%
 )
 `,
 filter: "blur(90px)",
 }}
 />

 {/* LEFT LIGHT */}
 <div
 className="absolute left-[-12%] top-[18%] h-[620px] w-[620px] rounded-full"
 style={{
 background:
 "radial-gradient(circle, rgba(6,182,212,0.10), transparent 72%)",
 filter: "blur(90px)",
 }}
 />

 {/* RIGHT LIGHT */}
 <div
 className="absolute right-[-12%] top-[0%] h-[720px] w-[720px] rounded-full"
 style={{
 background:
 "radial-gradient(circle, rgba(168,85,247,0.12), transparent 72%)",
 filter: "blur(90px)",
 }}
 />

 {/* CENTER FOG */}
 <div
 className="absolute left-1/2 top-[42%] h-[520px] w-[520px] -translate-x-1/2 rounded-full"
 style={{
 background:
 "radial-gradient(circle, rgba(255,255,255,0.03), transparent 72%)",
 filter: "blur(90px)",
 }}
 />

 {/* LIGHT STREAK */}
 <div
 className="absolute left-[-10%] top-[42%] h-[180px] w-[120%] rotate-[-8deg]"
 style={{
 background: `
 linear-gradient(
 to right,
 transparent,
 rgba(139,92,246,0.10),
 rgba(59,130,246,0.05),
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
 <div className="relative z-20 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">

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
 <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 backdrop-blur-xl">

 <div className="h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_16px_rgba(168,85,247,1)]" />

 <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/70">
 PRICING PLANS
 </span>
 </div>

 {/* TITLE */}
 <h2 className="mx-auto max-w-4xl text-[2.1rem] font-semibold leading-[1] tracking-[-0.05em] sm:text-[2.8rem] lg:text-[3.4rem]">
 Plans for SaaS
 <br />

 <span className="bg-gradient-to-b from-white via-blue-100 to-violet-200 bg-clip-text text-transparent">
 Video Production.
 </span>
 </h2>

 {/* TEXT */}
 <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-[1.8] text-white/45 sm:text-[15px]">
 Premium SaaS video systems designed to increase clarity,
 improve conversions, and scale paid growth.
 </p>
 </motion.div>

 {/* CARDS */}
 <div className="grid gap-5 xl:grid-cols-3">

 {plans.map((plan, index) => (
 <motion.div
 key={index}
 initial={{ opacity: 0, y: 60 }}
 whileInView={{ opacity: 1, y: 0 }}
 transition={{
 duration: 0.8,
 delay: index * 0.08,
 }}
 viewport={{ once: true }}
 className={`group relative overflow-hidden rounded-[32px] border bg-[#070707]/90 backdrop-blur-2xl transition-all duration-700 hover:-translate-y-1.5 ${
 plan.featured
 ? "border-violet-400/18"
 : "border-white/[0.05]"
 }`}
 >

 {/* TOP LIGHT */}
 <div
 className="absolute inset-x-0 top-0 h-[160px]"
 style={{
 background:
 "linear-gradient(to bottom, rgba(255,255,255,0.05), transparent)",
 }}
 />

 {/* HOVER GLOW */}
 <div
 className="absolute right-[-10%] top-[10%] h-[240px] w-[240px] rounded-full opacity-0 transition-all duration-700 group-hover:opacity-100"
 style={{
 background:
 plan.accent === "violet"
 ? "radial-gradient(circle, rgba(168,85,247,0.12), transparent 72%)"
 : plan.accent === "cyan"
 ? "radial-gradient(circle, rgba(6,182,212,0.10), transparent 72%)"
 : "radial-gradient(circle, rgba(59,130,246,0.10), transparent 72%)",
 filter: "blur(90px)",
 }}
 />

 {/* INNER */}
 <div className="relative z-10 flex h-full flex-col p-6 md:p-7">

 {/* BADGE */}
 <div
 className={`inline-flex w-fit items-center gap-2 rounded-full border px-3 py-2 backdrop-blur-xl ${
 plan.featured
 ? "border-violet-400/18 bg-violet-500/10"
 : "border-white/[0.08] bg-white/[0.03]"
 }`}
 >

 <div
 className={`flex h-6 w-6 items-center justify-center rounded-full ${
 plan.accent === "violet"
 ? "bg-violet-300 text-black"
 : plan.accent === "cyan"
 ? "bg-cyan-300 text-black"
 : "bg-blue-300 text-black"
 }`}
 >

 <Sparkles className="h-3.5 w-3.5" />
 </div>

 <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/80">
 {plan.badge}
 </span>
 </div>

 {/* TITLE */}
 <div className="mt-7">

 <h3 className="text-[2.4rem] font-semibold leading-[0.95] tracking-[-0.06em] sm:text-[3rem]">
 {plan.name}
 </h3>

 <p className="mt-4 max-w-sm text-[13px] leading-[1.8] text-white/45">
 {plan.description}
 </p>
 </div>

 {/* FEATURES */}
 <div className="relative mt-8 overflow-hidden rounded-[24px] border border-white/[0.05] bg-white/[0.02] p-4">

 {/* HEADER */}
 <div className="flex items-center gap-3">

 <div className="flex h-10 w-10 items-center justify-center rounded-[14px] border border-white/[0.08] bg-white/[0.03]">

 <Check className="h-4 w-4 text-white" />
 </div>

 <div>

 <h4 className="text-[1rem] font-semibold tracking-[-0.03em]">
 Included Features
 </h4>

 <p className="mt-1 text-[12px] text-white/40">
 Everything required to scale.
 </p>
 </div>
 </div>

 {/* LIST */}
 <div className="mt-6 space-y-3">

 {plan.features.map((feature, i) => (
 <div
 key={i}
 className="flex items-center gap-3 rounded-[16px] border border-white/[0.05] bg-black/30 px-3 py-3 transition-all duration-500 hover:border-white/[0.10] hover:bg-white/[0.03]"
 >

 <div
 className={`flex h-7 w-7 items-center justify-center rounded-full ${
 plan.accent === "violet"
 ? "bg-violet-400/10"
 : plan.accent === "cyan"
 ? "bg-cyan-400/10"
 : "bg-blue-400/10"
 }`}
 >

 <Check
 className={`h-3.5 w-3.5 ${
 plan.accent === "violet"
 ? "text-violet-200"
 : plan.accent === "cyan"
 ? "text-cyan-200"
 : "text-blue-200"
 }`}
 />
 </div>

 <p className="text-[13px] leading-[1.7] text-white/75">
 {feature}
 </p>
 </div>
 ))}
 </div>
 </div>

 {/* BUTTON */}
 <button
 className={`group/button relative mt-6 flex items-center justify-between overflow-hidden rounded-[20px] border px-5 py-4 transition-all duration-500 ${
 plan.featured
 ? "border-violet-400/18 bg-violet-500"
 : "border-white/[0.08] bg-white/[0.03]"
 }`}
 >

 {/* SHINE */}
 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent opacity-0 transition-all duration-700 group-hover/button:opacity-100" />

 <span className="relative z-10 text-[11px] font-semibold uppercase tracking-[0.18em]">
 {plan.button}
 </span>

 <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 transition-all duration-500 group-hover/button:rotate-45">

 <ArrowRight className="h-4 w-4" />
 </div>
 </button>
 </div>

 {/* EDGE */}
 <div className="absolute inset-0 rounded-[32px] border border-white/[0.03]" />
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 );
};

export default SaasPricing;