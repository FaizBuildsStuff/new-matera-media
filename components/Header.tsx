"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },

  {
    name: "Ad Creative",
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
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full overflow-x-clip">

      {/* HEADER */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={`fixed left-1/2 top-4 z-[9999] w-[94%] max-w-[1280px] -translate-x-1/2 transition-all duration-500 ${
          isScrolled ? "top-3" : "top-5"
        }`}
      >

        {/* CONTAINER */}
        <div
          className={`relative overflow-hidden rounded-full border transition-all duration-500 ${
            isScrolled
              ? "border-white/[0.08] bg-black/70 shadow-[0_10px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
              : "border-white/[0.06] bg-black/45 backdrop-blur-xl"
          }`}
        >

          {/* BACKGROUND GLOW */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(
                  circle at top,
                  rgba(255,255,255,0.05),
                  transparent 72%
                )
              `,
            }}
          />

          {/* GREEN GLOW */}
          <div
            className="absolute left-1/2 top-[-120px] h-[220px] w-[220px] -translate-x-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(163,230,53,0.12), transparent 72%)",
              filter: "blur(50px)",
            }}
          />

          {/* CONTENT */}
          <div className="relative z-20 flex h-[68px] items-center justify-between px-4 sm:px-6">

            {/* LEFT */}
            <Link
              href="/"
              className="group flex items-center gap-3"
            >

              {/* LOGO */}
              <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-white/[0.08] bg-white/[0.03]">

                {/* GLOW */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(163,230,53,0.12), transparent 72%)",
                  }}
                />

                <Image
                  src="/Logo.png"
                  alt="Logo"
                  width={34}
                  height={34}
                  className="relative z-10 object-contain"
                />
              </div>

              {/* TEXT */}
              <div className="hidden sm:block">

                <h3 className="text-[15px] font-semibold tracking-[-0.04em] text-white">
                  Matera Media
                </h3>

                <p className="text-[11px] text-white/40">
                  Premium Creative Agency
                </p>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden items-center gap-2 lg:flex">

              {navLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="group relative overflow-hidden rounded-full px-5 py-3 transition-all duration-500 hover:bg-white/[0.04]"
                >

                  {/* HOVER GLOW */}
                  <div
                    className="absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(255,255,255,0.06), transparent 72%)",
                    }}
                  />

                  <span className="relative z-10 text-[11px] font-medium uppercase tracking-[0.16em] text-white/70 transition-all duration-500 group-hover:text-white">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-3">

              {/* CTA */}
              <a
                href="#calendly"
                className="group relative hidden overflow-hidden rounded-full border border-lime-300/10 bg-lime-300 px-5 py-3 text-black transition-all duration-500 hover:scale-[1.02] md:flex"
              >

                {/* SHINE */}
                <div
                  className="absolute top-[-20%] h-[180px] w-[100px] rotate-[24deg] bg-white/40 blur-2xl transition-all duration-1000 left-[-120px] group-hover:left-[110%]"
                />

                <div className="relative z-10 flex items-center gap-3">

                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">
                    Book Meeting
                  </span>

                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-all duration-500 group-hover:rotate-45">

                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </a>

              {/* MOBILE BUTTON */}
              <button
                onClick={() => setMobileMenu(!mobileMenu)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-white transition-all duration-500 hover:bg-white/[0.06] lg:hidden"
              >

                {mobileMenu ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.35,
            }}
            className="fixed inset-x-0 top-[96px] z-[9998] mx-auto w-[94%] max-w-[1280px] lg:hidden"
          >

            <div className="relative overflow-hidden rounded-[30px] border border-white/[0.08] bg-black/80 p-4 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-3xl">

              {/* BG GLOW */}
              <div
                className="absolute inset-0"
                style={{
                  background: `
                    radial-gradient(
                      circle at top,
                      rgba(163,230,53,0.08),
                      transparent 72%
                    )
                  `,
                }}
              />

              {/* LINKS */}
              <div className="relative z-10 flex flex-col gap-2">

                {navLinks.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    onClick={() => setMobileMenu(false)}
                    className="group flex items-center justify-between rounded-[18px] border border-white/[0.05] bg-white/[0.03] px-5 py-4 transition-all duration-500 hover:border-lime-300/10 hover:bg-lime-300/[0.05]"
                  >

                    <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/75">
                      {link.name}
                    </span>

                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.05] transition-all duration-500 group-hover:rotate-45 group-hover:bg-lime-300 group-hover:text-black">

                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </Link>
                ))}

                {/* MOBILE CTA */}
                <a
                  href="#calendly"
                  onClick={() => setMobileMenu(false)}
                  className="group mt-2 flex items-center justify-between rounded-[20px] bg-lime-300 px-5 py-4 text-black"
                >

                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">
                    Book Meeting
                  </span>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white transition-all duration-500 group-hover:rotate-45">

                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;