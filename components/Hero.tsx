import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';
import React, { useEffect, useRef } from 'react'

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal
      gsap.fromTo(
        ".hero-reveal",
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.12,
          ease: "power4.out",
        }
      );

      // Orb movement
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

      // Rotating rings
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

      // Floating particles
      gsap.to(".particle", {
        y: -30,
        duration: 3,
        stagger: {
          each: 0.15,
          repeat: -1,
          yoyo: true,
        },
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden border-none outline-none bg-[#030303] text-white"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden border-none">

        {/* BASE */}
        <div className="absolute inset-0 bg-[#030303]" />

        {/* MAIN GREEN LIGHT */}
        <div
          className="orb-1 absolute left-[-20%] top-[10%] h-[1200px] w-[1200px] rounded-full bg-emerald-400/30"
          style={{
            filter: "blur(180px)",
          }}
        />

        {/* SECOND GREEN LIGHT */}
        <div
          className="orb-2 absolute right-[-15%] top-[5%] h-[1000px] w-[1000px] rounded-full bg-green-400/20"
          style={{
            filter: "blur(180px)",
          }}
        />

        {/* CENTER GLOW */}
        <div
          className="orb-3 absolute left-1/2 top-[45%] h-[700px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300/20"
          style={{
            filter: "blur(160px)",
          }}
        />

        {/* BOTTOM GLOW */}
        <div
          className="absolute bottom-[-25%] left-1/2 h-[500px] w-[1400px] -translate-x-1/2 rounded-full bg-emerald-500/20"
          style={{
            filter: "blur(180px)",
          }}
        />

        {/* LEFT STREAK */}
        <div
          className="absolute left-[-10%] top-[35%] h-[260px] w-[900px] rotate-[18deg] bg-emerald-300/10"
          style={{
            filter: "blur(120px)",
          }}
        />

        {/* RIGHT STREAK */}
        <div
          className="absolute right-[-10%] top-[20%] h-[260px] w-[800px] rotate-[-18deg] bg-green-300/10"
          style={{
            filter: "blur(120px)",
          }}
        />

        {/* EXTRA CENTER LIGHT */}
        <div
          className="absolute left-1/2 top-[50%] h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10"
          style={{
            filter: "blur(80px)",
          }}
        />

        {/* ATMOSPHERIC FOG */}
        <div
          className="absolute inset-0 bg-emerald-400/[0.03]"
          style={{
            filter: "blur(100px)",
          }}
        />

        {/* MASSIVE CENTER RING */}
        <div className="rotate-slow absolute left-1/2 top-[42%] h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]" />

        {/* SECOND RING */}
        <div className="rotate-reverse absolute left-1/2 top-[42%] h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400/[0.06]" />

        {/* LEFT WIREFRAME VISUAL */}
        <div className="absolute left-[4%] top-[24%] hidden xl:block">

          <div className="rotate-[-10deg] rounded-[40px] border border-white/10 bg-white/[0.02] p-4 backdrop-blur-3xl shadow-[0_0_120px_rgba(16,185,129,0.08)]">

            {/* TOPBAR */}
            <div className="mb-4 flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              <div className="h-2.5 w-2.5 rounded-full bg-white/30" />
              <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
            </div>

            {/* CONTENT */}
            <div className="grid w-[320px] gap-4">

              {/* TOP CARDS */}
              <div className="grid grid-cols-2 gap-3">
                <div className="h-20 rounded-[24px] border border-white/10 bg-white/[0.03]" />
                <div className="h-20 rounded-[24px] border border-emerald-400/20 bg-emerald-400/10" />
              </div>

              {/* MID */}
              <div className="space-y-3">
                <div className="h-10 rounded-2xl bg-white/[0.04]" />
                <div className="h-10 rounded-2xl bg-white/[0.04]" />
              </div>

              {/* BOTTOM */}
              <div className="h-[180px] rounded-[30px] border border-white/10 bg-black/30" />
            </div>
          </div>
        </div>

        {/* LEFT SIDE GLOW */}
        <div
          className="absolute left-[5%] top-[32%] hidden xl:block h-[500px] w-[500px] rounded-full bg-emerald-400/15"
          style={{
            filter: "blur(140px)",
          }}
        />

        {/* FLOATING VIDEO CARD */}
        <div className="absolute right-[5%] top-[16%] hidden xl:block">
          <div className="rotate-[10deg] rounded-[34px] border border-white/10 bg-black/30 p-3 backdrop-blur-3xl shadow-[0_0_100px_rgba(6,182,212,0.08)]">

            {/* THUMB */}
            <div className="relative overflow-hidden rounded-[24px] border border-white/10">
              <img
                src="https://img.youtube.com/vi/aTWZNrR025U/maxresdefault.jpg"
                className="h-[240px] w-[380px] object-cover grayscale"
                alt=""
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/30" />

              {/* PLAY */}
              <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-2xl">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            {/* BOTTOM */}
            <div className="mt-4 flex items-center justify-between px-2">
              <div>
                <div className="h-3 w-24 rounded-full bg-white/70" />
                <div className="mt-2 h-2 w-16 rounded-full bg-white/20" />
              </div>

              <div className="rounded-full bg-emerald-400/10 px-3 py-1 text-[10px] text-emerald-300">
                Editing
              </div>
            </div>
          </div>
        </div>

        {/* GLOW DOTS */}
        <div className="particle absolute left-[18%] top-[18%] h-3 w-3 rounded-full bg-emerald-300 shadow-[0_0_25px_rgba(52,211,153,0.8)]" />
        <div className="particle absolute right-[20%] top-[32%] h-2 w-2 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.9)]" />
        <div className="particle absolute left-[24%] bottom-[20%] h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.8)]" />
        <div className="particle absolute right-[16%] bottom-[18%] h-3 w-3 rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.7)]" />

        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
            backgroundSize: "90px 90px",
            maskImage:
              "radial-gradient(circle at center, black, transparent 85%)",
          }}
        />

        {/* NOISE */}
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-soft-light"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/noise.png')",
          }}
        />

        {/* FILM GRAIN */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage:
              "url('https://grainy-gradients.vercel.app/noise.svg')",
            backgroundSize: "220px",
          }}
        />

        {/* VIGNETTE - Modified to fade out at bottom for blending */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 40%, transparent 20%, rgba(0,0,0,0.8) 100%)",
            maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)"
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-20 mx-auto flex min-h-screen max-w-[1600px] flex-col items-center justify-start px-6 pt-28 text-center">

        {/* TOP TEXT */}
        <div className="hero-reveal mb-8">
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-emerald-300">
            SERVICE FOUNDERS & INFO ENTREPRENEURS!
          </span>
        </div>

        {/* HEADING */}
        <h1 className="hero-reveal max-w-5xl text-[2.8rem] font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-[76px]">
          We help B2B Brands and
          <br />
          Content Creators scale their
          <br />
          revenue through Organic Content
          <br />
          and Motion Ad Creatives
        </h1>

        {/* CTA */}
        <div className="hero-reveal mt-12">
          <button className="group flex items-center gap-3 rounded-full bg-white px-2 py-2 pr-8 text-black transition-all duration-500 hover:scale-[1.03]">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 transition-all duration-500 group-hover:bg-emerald-400">
              <ArrowRight className="h-5 w-5 stroke-[2.5px]" />
            </div>

            <span className="text-[15px] font-semibold tracking-tight">
              Book a Strategy Call
            </span>
          </button>
        </div>

        {/* VIDEO SECTION */}
        <div className="hero-reveal relative mt-24 w-full max-w-[1300px]">

          {/* OUTER GLOW */}
          <div className="absolute inset-[-40px] rounded-[50px] bg-emerald-500/20 blur-[100px]" />

          {/* GLASS FRAME */}
          <div className="relative overflow-hidden rounded-[42px] border border-emerald-500/20 bg-black/30 p-2 backdrop-blur-3xl">

            {/* INNER BORDER */}
            <div className="relative overflow-hidden rounded-[34px] border border-white/10">

              {/* THUMBNAIL */}
              <img
                src="https://img.youtube.com/vi/aTWZNrR025U/maxresdefault.jpg"
                alt="Video Thumbnail"
                className="h-full w-full object-cover grayscale"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-emerald-950/20 mix-blend-overlay" />

              {/* PLAY BUTTON */}
              <button
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/watch?v=aTWZNrR025U&list=RDaTWZNrR025U&start_radio=1",
                    "_blank"
                  )
                }
                className="group absolute left-1/2 top-1/2 flex h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 items-center justify-center"
              >

                {/* OUTER RING */}
                <div className="absolute inset-0 rounded-full border border-emerald-400/40 bg-emerald-500/10 backdrop-blur-3xl shadow-[0_0_80px_rgba(16,185,129,0.5)]" />

                {/* MIDDLE */}
                <div className="absolute inset-[18px] rounded-full bg-white/10 backdrop-blur-2xl" />

                {/* INNER */}
                <div className="relative z-20 flex h-[74px] w-[74px] items-center justify-center rounded-full bg-white shadow-[0_0_50px_rgba(255,255,255,0.7)] transition-all duration-500 group-hover:scale-110">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="black"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* SEAM BRIDGE */}
      <div className="absolute bottom-[-1px] left-0 h-[2px] w-full bg-[#030303] z-[50]" />
    </section>
  );
}

export default Hero