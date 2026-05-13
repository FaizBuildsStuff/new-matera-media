"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import {
    ArrowUpRight,
    Clock3,
    Video,
    Sparkles,
} from "lucide-react";

const Calendly = () => {
    const glow1Ref = useRef(null);
    const glow2Ref = useRef(null);
    const ringRef = useRef(null);
    const cardRef = useRef(null);
    const logoRef = useRef(null);

    useEffect(() => {
        if (
            !glow1Ref.current ||
            !glow2Ref.current ||
            !ringRef.current ||
            !cardRef.current ||
            !logoRef.current
        )
            return;

        gsap.to(glow1Ref.current, {
            y: -40,
            x: 30,
            duration: 8,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });

        gsap.to(glow2Ref.current, {
            y: 50,
            x: -20,
            duration: 10,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });

        gsap.to(ringRef.current, {
            rotate: 360,
            duration: 40,
            repeat: -1,
            ease: "none",
        });

        gsap.to(cardRef.current, {
            y: -12,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });

        gsap.to(logoRef.current, {
            scale: 1.04,
            opacity: 0.16,
            duration: 6,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });
    }, []);

    return (
        <section className="relative overflow-hidden bg-[#040404] px-6 py-36 text-white">

            {/* BACKGROUND */}
            <div className="absolute inset-0 overflow-hidden">

                {/* BASE */}
                <div className="absolute inset-0 bg-[#040404]" />

                {/* GIANT ATMOSPHERIC CORE */}
                <div
                    ref={glow1Ref}
                    className="absolute left-1/2 top-[38%] h-[1300px] w-[1800px] -translate-x-1/2"
                    style={{
                        background: `
              radial-gradient(
                ellipse at center,
                rgba(16,185,129,0.14) 0%,
                rgba(52,211,153,0.08) 20%,
                rgba(45,212,191,0.06) 34%,
                rgba(255,255,255,0.015) 48%,
                transparent 72%
              )
            `,
                        filter: "blur(170px)",
                    }}
                />

                {/* SECONDARY ATMOSPHERE */}
                <div
                    ref={glow2Ref}
                    className="absolute left-1/2 top-[52%] h-[900px] w-[1300px] -translate-x-1/2"
                    style={{
                        background: `
              radial-gradient(
                ellipse,
                rgba(255,255,255,0.04),
                rgba(16,185,129,0.05),
                transparent 72%
              )
            `,
                        filter: "blur(120px)",
                    }}
                />

                {/* TOP LIGHT */}
                <div
                    className="absolute left-1/2 top-[-25%] h-[700px] w-[1400px] -translate-x-1/2"
                    style={{
                        background:
                            "radial-gradient(ellipse, rgba(255,255,255,0.08), transparent 72%)",
                        filter: "blur(120px)",
                    }}
                />

                {/* HUGE LOGO */}
                <div
                    ref={logoRef}
                    className="absolute left-1/2 top-[52%] -translate-x-1/2 -translate-y-1/2"
                >
                    <Image
                        src="/Logo.png"
                        alt="Logo"
                        width={700}
                        height={700}
                        priority
                        className="
              opacity-[0.12]
              blur-[2px]
              brightness-125
              contrast-125
              object-contain
              pointer-events-none
              select-none
            "
                        style={{
                            filter:
                                "blur(2px) drop-shadow(0 0 80px rgba(52,211,153,0.28))",
                        }}
                    />
                </div>

                {/* ROTATING RING */}
                <div
                    ref={ringRef}
                    className="absolute left-1/2 top-[52%] h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.03]"
                />

                {/* SECOND RING */}
                <div className="absolute left-1/2 top-[52%] h-[850px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400/[0.04]" />

                {/* LIGHT STREAK */}
                <div
                    className="absolute left-1/2 top-[56%] h-px w-[60%] -translate-x-1/2"
                    style={{
                        background:
                            "linear-gradient(to right, transparent, rgba(52,211,153,0.14), transparent)",
                        boxShadow: "0 0 40px rgba(52,211,153,0.15)",
                    }}
                />

                {/* LEFT GLOW */}
                <div
                    className="absolute left-[-12%] top-[20%] h-[700px] w-[700px]"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(52,211,153,0.09), transparent 70%)",
                        filter: "blur(150px)",
                    }}
                />

                {/* RIGHT GLOW */}
                <div
                    className="absolute right-[-10%] top-[24%] h-[800px] w-[800px]"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(45,212,191,0.08), transparent 72%)",
                        filter: "blur(150px)",
                    }}
                />

                {/* FLOATING PARTICLES */}
                <div className="absolute left-[14%] top-[22%] h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_30px_rgba(52,211,153,0.9)]" />

                <div className="absolute right-[18%] top-[30%] h-2 w-2 rounded-full bg-teal-300 shadow-[0_0_30px_rgba(45,212,191,0.9)]" />

                <div className="absolute left-[22%] bottom-[18%] h-2 w-2 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.7)]" />

                {/* GRID */}
                <div
                    className="absolute inset-0 opacity-[0.018]"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
                        backgroundSize: "120px 120px",
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
                            "radial-gradient(circle at center, transparent 35%, rgba(0,0,0,0.84) 100%)",
                    }}
                />
            </div>

            {/* CONTENT */}
            <div className="relative z-10 mx-auto max-w-7xl">

                {/* TOP */}
                <div className="mb-24 text-center">


                    {/* HEADING */}
                    <h2 className="mx-auto max-w-5xl text-5xl font-semibold leading-[0.92] tracking-[-0.07em] text-white md:text-7xl">
                        Let’s Get You
                        <br />
                        More Qualified Leads
                    </h2>

                    {/* TEXT */}
                    <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/45">
                        Schedule a free strategy call and let’s build a content system
                        designed to scale your brand organically.
                    </p>
                </div>

                {/* CALENDLY WRAPPER */}
                <div className="relative mx-auto max-w-6xl">

                    {/* OUTER GLOW */}
                    <div
                        className="absolute inset-x-[8%] bottom-[-40px] h-[140px] rounded-full bg-emerald-400/20"
                        style={{
                            filter: "blur(70px)",
                        }}
                    />

                    {/* MAIN CARD */}
                    <div
                        ref={cardRef}
                        className="
              relative
              overflow-hidden
              rounded-[42px]
              border
              border-white/10
              bg-white/[0.05]
              shadow-[0_0_120px_rgba(16,185,129,0.08)]
              backdrop-blur-[40px]
            "
                    >

                        {/* INNER LIGHT */}
                        <div
                            className="absolute left-1/2 top-0 h-[260px] w-[700px] -translate-x-1/2"
                            style={{
                                background:
                                    "radial-gradient(circle, rgba(52,211,153,0.14), transparent 72%)",
                                filter: "blur(80px)",
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

                        {/* CONTENT */}
                        <div className="relative z-10 grid lg:grid-cols-[0.9fr_1.1fr]">

                            {/* LEFT */}
                            <div className="border-b border-white/8 p-10 lg:border-b-0 lg:border-r">

                                {/* LABEL */}
                                <div className="mb-8">

                                    <div className="text-sm uppercase tracking-[0.28em] text-emerald-300">
                                        Strategy Session
                                    </div>

                                    <h3 className="mt-4 text-5xl font-semibold tracking-[-0.06em] text-white">
                                        30 Minute
                                        <br />
                                        Meeting
                                    </h3>
                                </div>

                                {/* INFO */}
                                <div className="space-y-5">

                                    <div className="flex items-center gap-4 text-white/55">

                                        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">

                                            <Clock3 className="h-5 w-5 text-emerald-300" />
                                        </div>

                                        <span>30 Minute Strategy Session</span>
                                    </div>

                                    <div className="flex items-center gap-4 text-white/55">

                                        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">

                                            <Video className="h-5 w-5 text-emerald-300" />
                                        </div>

                                        <span>
                                            Google Meet link will be provided automatically.
                                        </span>
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="mt-14">

                                    <a
                                        href="https://calendly.com/m-faizurrehman-crypto/30min"
                                        target="_blank"
                                        className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white px-7 py-4 text-sm font-medium text-black transition-all duration-500 hover:scale-[1.03]"
                                    >

                                        Book Strategy Call

                                        <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </a>
                                </div>
                            </div>

                            {/* RIGHT */}
                            <div className="relative overflow-hidden p-4 md:p-6">

                                {/* FRAME */}
                                <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white">

                                    <iframe
                                        src="https://calendly.com/m-faizurrehman-crypto/30min?primary_color=10b981&background_color=05180D&text_color=ffffff&hide_landing_page_details=1&hide_gdpr_banner=1"
                                        width="100%"
                                        height="700"
                                        className="min-h-[700px] w-full"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* INNER BORDER */}
                        <div className="pointer-events-none absolute inset-[1px] rounded-[41px] border border-white/[0.04]" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Calendly;