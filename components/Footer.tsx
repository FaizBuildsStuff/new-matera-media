"use client";

import React from "react";
import Image from "next/image";
import { Mail } from 'lucide-react';

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YoutubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="relative border-none outline-none px-6 pb-10 pt-16 sm:pt-24 text-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none transform-gpu will-change-transform">

        {/* HUGE TYPOGRAPHY */}
        <div className="pointer-events-none absolute bottom-[-5%] sm:bottom-[-8%] left-1/2 -translate-x-1/2 whitespace-nowrap text-[22vw] sm:text-[18vw] font-black uppercase leading-none tracking-[-0.08em] text-white/2.5">
          MATERA
        </div>

        {/* CENTER GLOW */}
        <div
          className="absolute left-1/2 top-[35%] h-[500px] w-[1000px] sm:h-[700px] sm:w-[1400px] -translate-x-1/2"
          style={{
            background: `
              radial-gradient(
                ellipse at center,
                rgba(16,185,129,0.12) 0%,
                rgba(52,211,153,0.06) 24%,
                rgba(45,212,191,0.04) 40%,
                transparent 72%
              )
            `,
            filter: "blur(100px) sm:blur(140px)",
          }}
        />

        {/* LEFT GLOW */}
        <div
          className="absolute left-[-15%] sm:left-[-10%] top-[10%] h-[350px] w-[350px] sm:h-[500px] sm:w-[500px]"
          style={{
            background:
              "radial-gradient(circle, rgba(52,211,153,0.10), transparent 72%)",
            filter: "blur(100px) sm:blur(120px)",
          }}
        />

        {/* RIGHT GLOW */}
        <div
          className="absolute right-[-15%] sm:right-[-10%] top-[18%] h-[400px] w-[400px] sm:h-[600px] sm:w-[600px]"
          style={{
            background:
              "radial-gradient(circle, rgba(45,212,191,0.08), transparent 72%)",
            filter: "blur(110px) sm:blur(130px)",
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
            backgroundSize: "120px 120px",
            maskImage:
              "radial-gradient(circle at center, black, transparent 85%)",
          }}
        />

        {/* NOISE */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-soft-light"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/noise.png')",
          }}
        />

        
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* TOP */}
        <div className="flex flex-col items-center">

          {/* LOGO */}
          <div className="mb-10 sm:mb-12">
            <Image
              src="/Logo.png"
              alt="Matera Media"
              width={48}
              height={48}
              priority
              className="opacity-95 sm:w-[54px] sm:h-[54px]"
            />
          </div>

          {/* NAV */}
          <nav
            className="
    flex flex-wrap items-center justify-center

    gap-x-7 gap-y-4
    sm:gap-x-10

    rounded-full
    border border-white/[0.06]

    bg-white/[0.02]

    px-5 py-4
    sm:px-7

    backdrop-blur-2xl
  "
          >

            {[
              {
                name: "Home",
                href: "/",
              },

              {
                name: "Ad-Creative",
                href: "/ad-creatives",
              },

              {
                name: "Youtube",
                href: "/organic-content-youtube",
              },

              {
                name: "SaaS Videos",
                href: "/saas-videos",
              },

              {
                name: "Careers",
                href: "/careers",
              },

              {
                name: "Privacy",
                href: "/privacy-policy",
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="
        group relative

        text-[10px]
        font-semibold
        uppercase

        tracking-[0.18em]

        text-white/38
        transition-all duration-300

        hover:text-white

        sm:text-[11px]
        sm:tracking-[0.24em]
      "
              >

                {item.name}

                {/* UNDERLINE */}
                <span
                  className="
          absolute -bottom-2 left-0
          h-px w-0

          bg-gradient-to-r
          from-lime-300
          to-green-400

          transition-all duration-500

          group-hover:w-full
        "
                />
              </a>
            ))}
          </nav>

          {/* SOCIALS */}
          <div className="mt-12 sm:mt-14 flex flex-wrap items-center justify-center gap-4 sm:gap-5">

            {/* Twitter/X */}
            <a
              href="#"
              className="
                group relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center
                overflow-hidden rounded-full border border-white/10
                bg-white/3 backdrop-blur-3xl
                transition-all duration-500
                hover:border-emerald-400/30
                hover:bg-emerald-400/10
              "
            >
              <div className="relative z-10 text-white/55 transition-all duration-500 group-hover:text-emerald-300 scale-90 sm:scale-100">
                <TwitterIcon />
              </div>
            </a>

            {/* Linkedin */}
            <a
              href="#"
              className="
                group relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center
                overflow-hidden rounded-full border border-white/10
                bg-white/3 backdrop-blur-3xl
                transition-all duration-500
                hover:border-emerald-400/30
                hover:bg-emerald-400/10
              "
            >
              <div className="relative z-10 text-white/55 transition-all duration-500 group-hover:text-emerald-300 scale-90 sm:scale-100">
                <LinkedinIcon />
              </div>
            </a>

            {/* Instagram */}
            <a
              href="#"
              className="
                group relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center
                overflow-hidden rounded-full border border-white/10
                bg-white/3 backdrop-blur-3xl
                transition-all duration-500
                hover:border-emerald-400/30
                hover:bg-emerald-400/10
              "
            >
              <div className="relative z-10 text-white/55 transition-all duration-500 group-hover:text-emerald-300 scale-90 sm:scale-100">
                <InstagramIcon />
              </div>
            </a>

            {/* Youtube */}
            <a
              href="#"
              className="
                group relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center
                overflow-hidden rounded-full border border-white/10
                bg-white/3 backdrop-blur-3xl
                transition-all duration-500
                hover:border-emerald-400/30
                hover:bg-emerald-400/10
              "
            >
              <div className="relative z-10 text-white/55 transition-all duration-500 group-hover:text-emerald-300 scale-90 sm:scale-100">
                <YoutubeIcon />
              </div>
            </a>

            {/* Mail */}
            <a
              href="#"
              className="
                group relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center
                overflow-hidden rounded-full border border-white/10
                bg-white/3 backdrop-blur-3xl
                transition-all duration-500
                hover:border-emerald-400/30
                hover:bg-emerald-400/10
              "
            >
              <Mail className="relative z-10 h-4 w-4 sm:h-5 sm:w-5 text-white/55 transition-all duration-500 group-hover:text-emerald-300" />
            </a>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-16 sm:mt-24 border-t border-white/5 pt-8">

          <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">

            {/* LEFT */}
            <div>
              <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
                © 2026 Matera Media
              </div>
              <div className="mt-1 text-[9px] sm:text-[11px] uppercase tracking-[0.22em] text-white/20">
                Engineered for Attention & Revenue
              </div>
            </div>

            {/* RIGHT */}
            <a
              href="#"
              className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-white/30 transition-all duration-300 hover:text-emerald-300"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;