"use client";

import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useCallback } from "react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationsStarted = useRef(false);

  const handlePlayClick = useCallback(() => {
    window.open(
      "https://www.youtube.com/watch?v=aTWZNrR025U",
      "_blank",
      "noopener,noreferrer"
    );
  }, []);

  const handleBookCall = useCallback(() => {
    const el = document.getElementById("calendly");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (animationsStarted.current) return;
    animationsStarted.current = true;

    const ctx = gsap.context(() => {
      // Hero content reveal
      gsap.fromTo(
        ".hero-reveal",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.12,
          ease: "power4.out",
        }
      );

      // Slow orb ambient movement — use will-change via transform3d
      gsap.to(".orb-1", {
        x: 80,
        y: 40,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".orb-2", {
        x: -70,
        y: -30,
        duration: 11,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".orb-3", {
        scale: 1.15,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Rings — rotate on GPU
      gsap.to(".rotate-slow", {
        rotate: 360,
        duration: 40,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".rotate-reverse", {
        rotate: -360,
        duration: 50,
        repeat: -1,
        ease: "none",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen text-white pb-20"
      aria-label="Hero section"
    >
      {/* BACKGROUND — pointer-events-none, transform-gpu for compositor layer */}
      <div className="absolute inset-0 pointer-events-none transform-gpu" aria-hidden="true">
        {/* Main green orb */}
        <div
          className="orb-1 absolute left-[-35%] top-[5%] h-[700px] w-[700px] rounded-full bg-emerald-400/30
            sm:h-[900px] sm:w-[900px] lg:left-[-20%] lg:top-[10%] lg:h-[1200px] lg:w-[1200px]"
          style={{ filter: "blur(50px)", willChange: "transform" }}
        />
        <div
          className="orb-2 absolute right-[-35%] top-[0%] h-[650px] w-[650px] rounded-full bg-green-400/20
            sm:h-[850px] sm:w-[850px] lg:right-[-15%] lg:top-[5%] lg:h-[1000px] lg:w-[1000px]"
          style={{ filter: "blur(50px)", willChange: "transform" }}
        />
        <div
          className="orb-3 absolute left-1/2 top-[42%] h-[400px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300/20
            sm:h-[600px] sm:w-[700px] lg:h-[700px] lg:w-[900px]"
          style={{ filter: "blur(50px)", willChange: "transform" }}
        />
        <div
          className="absolute bottom-[-20%] left-1/2 h-[350px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-500/20
            sm:h-[420px] sm:w-[1100px] lg:h-[500px] lg:w-[1400px]"
          style={{ filter: "blur(50px)" }}
        />
        {/* Rings */}
        <div
          className="rotate-slow absolute left-1/2 top-[42%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]
            sm:h-[650px] sm:w-[650px] lg:h-[900px] lg:w-[900px]"
          style={{ willChange: "transform" }}
        />
        <div
          className="rotate-reverse absolute left-1/2 top-[42%] h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400/[0.06]
            sm:h-[500px] sm:w-[500px] lg:h-[700px] lg:w-[700px]"
          style={{ willChange: "transform" }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: "90px 90px",
            maskImage: "radial-gradient(circle at center, black, transparent 85%)",
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-20 mx-auto flex min-h-screen max-w-[1600px] flex-col items-center justify-start px-4 pt-28 text-center sm:px-6 lg:px-8">
        {/* Label */}
        <div className="hero-reveal mb-6 sm:mb-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-emerald-300 sm:text-[11px] sm:tracking-[0.3em]">
            Service Founders &amp; Info Entrepreneurs
          </span>
        </div>

        {/* H1 */}
        <h1 className="hero-reveal max-w-6xl text-[2.2rem] font-semibold leading-[0.94] tracking-[-0.06em] text-white sm:text-[3.4rem] md:text-[4.4rem] lg:text-[76px]">
          We help B2B Brands and{" "}
          <br className="hidden sm:block" />
          Content Creators scale their{" "}
          <br className="hidden sm:block" />
          revenue through Organic Content{" "}
          <br className="hidden sm:block" />
          and Motion Ad Creatives
        </h1>

        {/* CTA */}
        <div className="hero-reveal mt-10 sm:mt-12">
          <button
            onClick={handleBookCall}
            aria-label="Book a strategy call"
            className="group flex items-center gap-3 rounded-full bg-white px-2 py-2 pr-5 text-black transition-all duration-500 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 sm:pr-8"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500 transition-all duration-500 group-hover:bg-emerald-400 sm:h-12 sm:w-12">
              <ArrowRight className="h-5 w-5 stroke-[2.5px]" aria-hidden="true" />
            </div>
            <span className="text-[14px] font-semibold tracking-tight sm:text-[15px]">
              Book a Strategy Call
            </span>
          </button>
        </div>

        {/* VIDEO */}
        <div className="hero-reveal relative mt-16 w-full max-w-[1300px] sm:mt-20 lg:mt-24">
          <div className="absolute inset-[-40px] rounded-[50px] bg-emerald-500/20 blur-[100px]" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[24px] border border-emerald-500/20 bg-black/30 p-1.5 backdrop-blur-3xl sm:rounded-[32px] sm:p-2 lg:rounded-[42px]">
            <div className="relative overflow-hidden rounded-[20px] border border-white/10 sm:rounded-[28px] lg:rounded-[34px]">
              {/* Use next/image with priority for LCP */}
              <Image
                src="https://img.youtube.com/vi/aTWZNrR025U/maxresdefault.jpg"
                alt="Matera Media showreel preview — click to watch"
                width={1280}
                height={720}
                priority
                className="h-full w-full object-cover grayscale aspect-video"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1300px"
              />
              <div className="absolute inset-0 bg-emerald-950/20 mix-blend-overlay" aria-hidden="true" />
              <button
                onClick={handlePlayClick}
                aria-label="Watch Matera Media showreel on YouTube"
                className="group absolute left-1/2 top-1/2 flex h-[95px] w-[95px] -translate-x-1/2 -translate-y-1/2 items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:h-[120px] sm:w-[120px] lg:h-[150px] lg:w-[150px]"
              >
                <div className="absolute inset-0 rounded-full border border-emerald-400/40 bg-emerald-500/10 backdrop-blur-3xl shadow-[0_0_80px_rgba(16,185,129,0.5)]" aria-hidden="true" />
                <div className="absolute inset-[12px] rounded-full bg-white/10 backdrop-blur-2xl sm:inset-[15px] lg:inset-[18px]" aria-hidden="true" />
                <div className="relative z-20 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white shadow-[0_0_50px_rgba(255,255,255,0.7)] transition-all duration-500 group-hover:scale-110 sm:h-[64px] sm:w-[64px] lg:h-[74px] lg:w-[74px]">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="black" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
