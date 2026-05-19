"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import gsap from "gsap";

const navLinks = [
  { name: "Ad Creatives", href: "/ad-creatives" },
  { name: "YouTube", href: "/organic-content-youtube" },
  { name: "SaaS Videos", href: "/saas-videos" },
  { name: "Careers", href: "/careers" },
  { name: "Privacy", href: "/privacy-policy" },
];

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const hasAnimated = useRef(false);

  const closeMobileMenu = useCallback(() => setMobileMenu(false), []);
  const toggleMobileMenu = useCallback(() => setMobileMenu((v) => !v), []);

  useEffect(() => {
    if (!hasAnimated.current) {
      hasAnimated.current = true;
      gsap.fromTo(
        ".header-float",
        { y: -80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
      );
    }

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 30);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileMenu(false);
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="fixed left-0 top-0 z-[999] w-full px-4 pt-5 md:px-8" role="banner">
        {/* FLOATING NAV */}
        <nav
          className={`header-float mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 md:px-6 transition-[background,border,box-shadow,backdrop-filter] duration-500 transform-gpu will-change-transform ${
            scrolled
              ? "border-white/10 bg-black/45 shadow-[0_0_80px_rgba(0,0,0,0.45)] backdrop-blur-3xl"
              : "border-white/[0.08] bg-white/[0.03] backdrop-blur-2xl"
          }`}
          aria-label="Main navigation"
        >
          {/* LOGO */}
          <Link href="/" className="group relative flex items-center gap-3" aria-label="Matera Media — home">
            <div
              className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/20 opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-100"
              aria-hidden="true"
            />
            <Image
              src="/Logo.png"
              alt="Matera Media logo"
              width={34}
              height={34}
              priority
              className="relative z-10 object-contain"
            />
            <span className="hidden text-sm font-semibold tracking-[-0.04em] text-white md:block">
              Matera Media
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="flex items-center gap-7">
            <ul className="hidden items-center gap-7 lg:flex" role="list">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group relative text-[13px] font-medium text-white/45 transition-all duration-300 hover:text-white focus-visible:text-white focus:outline-none"
                  >
                    {item.name}
                    <span
                      className="absolute -bottom-2 left-0 h-px w-0 bg-gradient-to-r from-lime-300 to-green-400 transition-all duration-500 group-hover:w-full"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              href="#calendly"
              className="group hidden items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white px-5 py-3 text-[13px] font-medium text-black transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(255,255,255,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 md:flex"
              aria-label="Book a strategy call"
            >
              <span className="relative z-10">Book Call</span>
              <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
            </Link>

            {/* MOBILE TOGGLE */}
            <button
              onClick={toggleMobileMenu}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white backdrop-blur-2xl lg:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              aria-label={mobileMenu ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenu}
              aria-controls="mobile-menu"
            >
              {mobileMenu ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </nav>

        {/* MOBILE MENU */}
        <div
          id="mobile-menu"
          className={`overflow-hidden transition-all duration-500 lg:hidden ${
            mobileMenu ? "pointer-events-auto mt-4 max-h-[700px] opacity-100" : "pointer-events-none max-h-0 opacity-0"
          }`}
          aria-hidden={!mobileMenu}
        >
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black/45 p-5 backdrop-blur-3xl">
            <div
              className="pointer-events-none absolute left-1/2 top-0 h-[220px] w-[420px] -translate-x-1/2"
              style={{
                background: "radial-gradient(ellipse, rgba(163,230,53,0.08), transparent 72%)",
                filter: "blur(60px)",
              }}
              aria-hidden="true"
            />
            <nav className="relative z-10 flex flex-col gap-2" aria-label="Mobile navigation">
              <ul role="list" className="flex flex-col gap-2">
                {navLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="group relative flex items-center justify-between overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] px-5 py-4 transition-all duration-500 hover:bg-white/[0.05] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                    >
                      <span className="relative z-10 text-[13px] font-medium tracking-[-0.02em] text-white/70 transition-all duration-300 group-hover:text-white">
                        {item.name}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-white/30 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-lime-300" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                href="#calendly"
                onClick={closeMobileMenu}
                className="group relative mt-3 flex items-center justify-between overflow-hidden rounded-2xl border border-lime-400/15 bg-gradient-to-r from-lime-300 to-green-500 px-5 py-4 transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Book a strategy call"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" aria-hidden="true" />
                <span className="relative z-10 text-[13px] font-semibold tracking-[-0.02em] text-black">
                  Book Strategy Call
                </span>
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </div>
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
