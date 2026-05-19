"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ArrowUpRight, Clock3, Video } from "lucide-react";

const Calendly = () => {
  const glow1Ref = useRef<HTMLDivElement>(null);
  const glow2Ref = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (
      hasAnimated.current ||
      !glow1Ref.current ||
      !glow2Ref.current ||
      !ringRef.current ||
      !cardRef.current ||
      !logoRef.current
    )
      return;

    hasAnimated.current = true;

    const ctx = gsap.context(() => {
      gsap.to(glow1Ref.current, { y: -40, x: 30, duration: 8, repeat: -1, yoyo: true, ease: "power1.inOut" });
      gsap.to(glow2Ref.current, { y: 50, x: -20, duration: 10, repeat: -1, yoyo: true, ease: "power1.inOut" });
      gsap.to(ringRef.current, { rotate: 360, duration: 40, repeat: -1, ease: "none" });
      gsap.to(cardRef.current, { y: -12, duration: 4, repeat: -1, yoyo: true, ease: "power1.inOut" });
      gsap.to(logoRef.current, { scale: 1.04, opacity: 0.16, duration: 6, repeat: -1, yoyo: true, ease: "power1.inOut" });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="calendly" className="relative px-6 py-24 sm:py-32 lg:py-40 text-white" aria-labelledby="calendly-heading">
      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none transform-gpu" aria-hidden="true">
        <div
          ref={glow1Ref}
          className="absolute left-1/2 top-[38%] h-[800px] w-[1200px] sm:h-[1300px] sm:w-[1800px] -translate-x-1/2"
          style={{
            background: "radial-gradient(ellipse at center, rgba(16,185,129,0.14) 0%, rgba(52,211,153,0.08) 20%, rgba(45,212,191,0.06) 34%, rgba(255,255,255,0.015) 48%, transparent 72%)",
            filter: "blur(120px)",
            willChange: "transform",
          }}
        />
        <div
          ref={glow2Ref}
          className="absolute left-1/2 top-[52%] h-[600px] w-[900px] sm:h-[900px] sm:w-[1300px] -translate-x-1/2"
          style={{
            background: "radial-gradient(ellipse, rgba(255,255,255,0.04), rgba(16,185,129,0.05), transparent 72%)",
            filter: "blur(90px)",
            willChange: "transform",
          }}
        />
        <div
          ref={logoRef}
          className="absolute left-1/2 top-[52%] -translate-x-1/2 -translate-y-1/2"
        >
          <Image
            src="/Logo.png"
            alt=""
            width={700}
            height={700}
            className="w-[400px] sm:w-[700px] opacity-[0.12] object-contain pointer-events-none select-none"
            style={{ filter: "blur(2px) drop-shadow(0 0 80px rgba(52,211,153,0.28))" }}
            aria-hidden="true"
          />
        </div>
        <div
          ref={ringRef}
          className="absolute left-1/2 top-[52%] h-[800px] w-[800px] sm:h-[1200px] sm:w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.03]"
          style={{ willChange: "transform" }}
        />
        <div className="absolute left-1/2 top-[52%] h-[600px] w-[600px] sm:h-[850px] sm:w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400/[0.04]" />
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: "120px 120px",
            maskImage: "radial-gradient(circle at center, black, transparent 82%)",
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 sm:mb-24 text-center">
          <h2 id="calendly-heading" className="mx-auto max-w-5xl text-4xl sm:text-5xl lg:text-7xl font-semibold leading-[1.1] sm:leading-[0.92] tracking-[-0.07em] text-white">
            Let&rsquo;s Get You
            <br />
            More Qualified Leads
          </h2>
          <p className="mx-auto mt-6 sm:mt-7 max-w-2xl text-base sm:text-lg leading-relaxed text-white/45">
            Schedule a free strategy call and let&rsquo;s build a content system
            designed to scale your brand organically.
          </p>
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div
            className="absolute inset-x-[8%] bottom-[-40px] h-[140px] rounded-full bg-emerald-400/20"
            style={{ filter: "blur(50px)" }}
            aria-hidden="true"
          />
          <div
            ref={cardRef}
            className="relative overflow-hidden rounded-[32px] sm:rounded-[42px] border border-white/10 bg-white/[0.05] shadow-[0_0_120px_rgba(16,185,129,0.08)] backdrop-blur-[40px]"
          >
            <div
              className="absolute left-1/2 top-0 h-[260px] w-[700px] -translate-x-1/2"
              style={{ background: "radial-gradient(circle, rgba(52,211,153,0.14), transparent 72%)", filter: "blur(50px)" }}
              aria-hidden="true"
            />
            <div className="relative z-10 grid lg:grid-cols-[0.9fr_1.1fr]">
              {/* LEFT INFO */}
              <div className="border-b border-white/[0.08] p-8 sm:p-10 lg:border-b-0 lg:border-r">
                <div className="mb-8">
                  <div className="text-xs sm:text-sm uppercase tracking-[0.28em] text-emerald-300">
                    Strategy Session
                  </div>
                  <h3 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-[-0.06em] text-white">
                    30 Minute Meeting
                  </h3>
                </div>
                <div className="space-y-4 sm:space-y-5">
                  <div className="flex items-center gap-4 text-white/55 text-sm sm:text-base">
                    <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] shrink-0">
                      <Clock3 className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-300" aria-hidden="true" />
                    </div>
                    <span>30 Minute Strategy Session</span>
                  </div>
                  <div className="flex items-center gap-4 text-white/55 text-sm sm:text-base">
                    <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] shrink-0">
                      <Video className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-300" aria-hidden="true" />
                    </div>
                    <span>Google Meet link provided automatically.</span>
                  </div>
                </div>
                <div className="mt-10 sm:mt-14">
                  <a
                    href="https://calendly.com/m-faizurrehman-crypto/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white px-6 sm:px-7 py-3.5 sm:py-4 text-xs sm:text-sm font-medium text-black transition-all duration-500 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                    aria-label="Book a 30 minute strategy call via Calendly"
                  >
                    Book Strategy Call
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* RIGHT — CALENDLY IFRAME */}
              <div className="relative overflow-hidden p-3 sm:p-4 md:p-6">
                <div className="overflow-hidden rounded-[24px] sm:rounded-[30px] border border-white/10 bg-white">
                  <iframe
                    src="https://calendly.com/m-faizurrehman-crypto/30min?primary_color=10b981&background_color=05180D&text_color=ffffff&hide_landing_page_details=1&hide_gdpr_banner=1"
                    width="100%"
                    height="700"
                    className="min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] w-full"
                    title="Book a strategy call with Matera Media"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-[1px] rounded-[31px] sm:rounded-[41px] border border-white/[0.04]" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calendly;
