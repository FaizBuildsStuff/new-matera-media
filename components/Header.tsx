"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import gsap from "gsap";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      ".header-float",
      {
        y: -80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
      }
    );

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed left-0 top-0 z-[999] w-full px-4 pt-5 md:px-8">

        {/* FLOATING NAV */}
        <div
          className={`
            header-float
            mx-auto flex max-w-7xl items-center justify-between
            rounded-full border
            px-4 py-3 md:px-6
            transition-all duration-500
            ${scrolled
              ? "border-white/10 bg-black/45 shadow-[0_0_80px_rgba(0,0,0,0.45)] backdrop-blur-3xl"
              : "border-white/[0.08] bg-white/[0.03] backdrop-blur-2xl"
            }
          `}
        >

          {/* LEFT */}
          <div className="flex items-center gap-10">

            {/* LOGO */}
            <a
              href="/"
              className="group relative flex items-center gap-3"
            >

              {/* GLOW */}
              <div
                className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/20 opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-100"
              />

              <Image
                src="/Logo.png"
                alt="Logo"
                width={34}
                height={34}
                priority
                className="relative z-10 object-contain"
              />

              <span className="hidden text-sm font-semibold tracking-[-0.04em] text-white md:block">
                Matera Media
              </span>
            </a>

            {/* NAV */}
            <nav className="hidden items-center gap-8 lg:flex">


              <a
                href="/ad-creatives"
                className="group relative text-[13px] font-medium text-white/50 transition-all duration-300 hover:text-white"
              >
                Ad-creative

                <span className="absolute -bottom-2 left-0 h-px w-0 bg-emerald-300 transition-all duration-500 group-hover:w-full" />
              </a>

              <a
                href="/organic-content-youtube"
                className="group relative text-[13px] font-medium text-white/50 transition-all duration-300 hover:text-white"
              >
                Youtube

                <span className="absolute -bottom-2 left-0 h-px w-0 bg-emerald-300 transition-all duration-500 group-hover:w-full" />
              </a>

              <a
                href="#"
                className="group relative text-[13px] font-medium text-white/50 transition-all duration-300 hover:text-white"
              >
                Process

                <span className="absolute -bottom-2 left-0 h-px w-0 bg-emerald-300 transition-all duration-500 group-hover:w-full" />
              </a>

              <a
                href="#"
                className="group relative text-[13px] font-medium text-white/50 transition-all duration-300 hover:text-white"
              >
                Pricing

                <span className="absolute -bottom-2 left-0 h-px w-0 bg-emerald-300 transition-all duration-500 group-hover:w-full" />
              </a>
            </nav>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3">

            {/* CTA */}
            <a
              href="#"
              className="
                group hidden items-center gap-3
                rounded-full border border-white/10
                bg-white px-5 py-3
                text-[13px] font-medium text-black
                transition-all duration-500
                hover:scale-[1.03]
                md:flex
              "
            >

              Book Call

              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="
                flex h-12 w-12 items-center justify-center
                rounded-full border border-white/10
                bg-white/[0.03]
                text-white backdrop-blur-2xl
                lg:hidden
              "
            >
              {mobileMenu ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`
            overflow-hidden transition-all duration-500 lg:hidden
            ${mobileMenu
              ? "pointer-events-auto mt-4 max-h-[500px] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
            }
          `}
        >

          <div
            className="
              rounded-[30px]
              border border-white/10
              bg-black/45
              p-5
              backdrop-blur-3xl
            "
          >

            <nav className="flex flex-col">

              <a
                href="#"
                className="border-b border-white/5 py-4 text-sm text-white/70 transition-all duration-300 hover:text-white"
              >
                Home
              </a>

              <a
                href="#"
                className="border-b border-white/5 py-4 text-sm text-white/70 transition-all duration-300 hover:text-white"
              >
                Services
              </a>

              <a
                href="#"
                className="border-b border-white/5 py-4 text-sm text-white/70 transition-all duration-300 hover:text-white"
              >
                Work
              </a>

              <a
                href="#"
                className="border-b border-white/5 py-4 text-sm text-white/70 transition-all duration-300 hover:text-white"
              >
                Process
              </a>

              <a
                href="#"
                className="py-4 text-sm text-white/70 transition-all duration-300 hover:text-white"
              >
                Pricing
              </a>
            </nav>

            {/* MOBILE CTA */}
            <a
              href="#"
              className="
                mt-6 flex items-center justify-center gap-3
                rounded-full bg-white py-4
                text-sm font-medium text-black
              "
            >

              Book Strategy Call

              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;