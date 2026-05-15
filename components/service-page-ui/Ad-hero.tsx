"use client";

import React, { useEffect, useRef } from "react";
import { ArrowUpRight, MousePointer2 } from "lucide-react";
import gsap from "gsap";

const AdHero = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content reveal with scale and y
      gsap.fromTo(
        ".hero-reveal",
        { opacity: 0, y: 40, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.4,
          stagger: 0.12,
          ease: "expo.out",
          delay: 0.2
        }
      );

      // Selection box "drawing" effect
      gsap.fromTo(
        ".selection-box",
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1.5, ease: "power4.out", delay: 0.6 }
      );

      // Enhanced Floating tags with rotation
      gsap.to(".floating-tag", {
        y: 15,
        rotation: 4,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.6,
          from: "random"
        },
      });

      // Background glow breathing
      gsap.to(".main-glow", {
        scale: 1.1,
        opacity: 0.9,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Cursor movement (subtle "seeking" animation)
      gsap.to(".cursor-animate", {
        x: 4,
        y: -4,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.2
      });

      // Handle pulsing
      gsap.to(".handle", {
        scale: 1.3,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen   text-white selection:bg-lime-500/30">

      {/* BACKGROUND ARCHITECTURE */}
      <div className="absolute inset-0 pointer-events-none transform-gpu will-change-transform">
        {/* Main Vibrant Glow */}
        <div
          className="main-glow absolute left-1/2 top-[-15%] h-[1000px] w-[1800px] -translate-x-1/2 rounded-full"
          style={{
            background: "radial-gradient(circle, #84cc16 0%, #3f6212 45%, transparent 75%)",
            filter: "blur(50px)",
            opacity: 0.75,
          }}
        />

        {/* Linear Ambient Shade */}
        <div className="absolute inset-x-0 top-0 h-screen bg-gradient-to-b from-lime-500/10 to-transparent" />

        {/* Noise Texture */}
        <div
          className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
          style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/noise.png')" }}
        />

        {/* Black Grounding */}
        <div className="absolute bottom-0 left-0 h-[50%] w-full bg-gradient-to-t from-black via-black/95 to-transparent" />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-20 mx-auto flex min-h-screen max-w-[1400px] flex-col items-center justify-center px-6 pt-24 text-center">

        {/* HERO HEADING */}
        <div className="hero-reveal relative mb-10">
          <h1 className="text-[2.6rem] font-semibold leading-[1.05] tracking-[-0.06em] text-white sm:text-6xl md:text-7xl lg:text-[96px]">

            We Create{" "}

            <span className="selection-box relative inline-block px-6 py-2 mx-2">

              {/* SELECTION BOX ARTIFACT */}
              <div className="absolute inset-0 border-[1.5px] border-lime-400/90 bg-lime-400/5">

                {/* Corner Handles */}
                <div className="handle absolute -left-[4px] -top-[4px] h-[8px] w-[8px] bg-lime-400" />
                <div className="handle absolute -right-[4px] -top-[4px] h-[8px] w-[8px] bg-lime-400" />
                <div className="handle absolute -left-[4px] -bottom-[4px] h-[8px] w-[8px] bg-lime-400" />
                <div className="handle absolute -right-[4px] -bottom-[4px] h-[8px] w-[8px] bg-lime-400" />
              </div>

              High-Converting

              {/* MINI LABEL */}
              <div className="absolute -right-12 -top-5">
                <div className="relative rounded-full bg-lime-400 px-2.5 py-1 text-[10px] font-black text-black shadow-[0_0_20px_rgba(163,230,53,0.6)]">
                  ROAS

                  <div className="cursor-animate absolute -left-3.5 -top-3.5 rotate-[-20deg]">
                    <MousePointer2 className="h-5 w-5 fill-white text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
                  </div>
                </div>
              </div>
            </span>

            <br className="hidden md:block" />

            Ad Creatives That
            <br className="hidden md:block" />
            Scale Revenue Fast
          </h1>
        </div>

        {/* DESCRIPTION SUBTEXT */}
        <p className="mx-auto mt-8 max-w-3xl text-sm leading-[1.9] text-white/55 sm:text-base md:text-lg">
          We craft performance-driven ad creatives engineered
          to lower CAC, improve CTR, and generate consistent
          revenue growth across Meta, TikTok, YouTube, and paid social campaigns.
        </p>

        {/* CTA BUTTON */}
        <div className="hero-reveal mt-14">
          <button className="group flex items-center overflow-hidden rounded-full bg-white shadow-[0_0_40px_rgba(255,255,255,0.05)] transition-all duration-300 hover:scale-[1.04]">
            <span className="px-10 py-5 text-[16px] font-bold tracking-tight text-black">
              Contact us
            </span>
            <div className="flex h-[64px] w-[64px] items-center justify-center bg-lime-400 transition-all duration-300 group-hover:bg-lime-300">
              <ArrowUpRight className="h-7 w-7 text-black stroke-[3px]" />
            </div>
          </button>
        </div>

        {/* FLOATING INTERACTIVE TAGS */}
        {/* Influencer Tag */}
        <div className="floating-tag absolute left-[12%] bottom-[40%] hidden lg:block">
          <div className="relative rounded-full bg-lime-400 px-6 py-3 text-[14px] font-bold text-black shadow-[0_0_35px_rgba(163,230,53,0.4)]">
            Influencer
            <div className="cursor-animate absolute right-[-18px] top-[-18px] rotate-[15deg]">
              <MousePointer2 className="h-6 w-6 fill-white text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
            </div>
          </div>
        </div>

        {/* Marketing Tag */}
        <div className="floating-tag absolute right-[12%] bottom-[44%] hidden lg:block">
          <div className="relative rounded-full bg-lime-400 px-6 py-3 text-[14px] font-bold text-black shadow-[0_0_35px_rgba(163,230,53,0.4)]">
            Marketing
            <div className="cursor-animate absolute left-[-18px] top-[-18px] rotate-[-15deg]">
              <MousePointer2 className="h-6 w-6 fill-white text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
            </div>
          </div>
        </div>

        {/* CLIENT LOGO SECTION */}
        <div className="hero-reveal mt-36 w-full max-w-6xl">
          <h3 className="mb-14 text-[13px] font-bold tracking-[0.35em] text-white/25 uppercase">
            Our Clients
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-14 opacity-30 sm:gap-24 lg:gap-40">
            <div className="text-[2.6rem] font-black italic tracking-tighter sm:text-[3.2rem]">LEON</div>
            <div className="text-[2.6rem] font-bold tracking-tighter sm:text-[3.2rem]">twin</div>
            <div className="text-[2.6rem] font-black tracking-tighter sm:text-[3.2rem]">Slott</div>
            <div className="text-[2.6rem] font-bold tracking-tighter sm:text-[3.2rem]">BETONE</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AdHero;