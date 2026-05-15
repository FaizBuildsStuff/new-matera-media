"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import gsap from "gsap";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrolledRef = React.useRef(false);

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
      const isScrolled = window.scrollY > 30;
      if (isScrolled !== scrolledRef.current) {
        scrolledRef.current = isScrolled;
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed left-0 top-0 z-999 w-full px-4 pt-5 md:px-8">

        {/* FLOATING NAV */}
        <div
          className={`
            header-float
            mx-auto flex max-w-7xl items-center justify-between
            rounded-full border
            px-4 py-3 md:px-6
            transition-[background,border,box-shadow,backdrop-filter] duration-500
            transform-gpu will-change-transform
            ${scrolled
              ? "border-white/10 bg-black/45 shadow-[0_0_80px_rgba(0,0,0,0.45)] backdrop-blur-3xl"
              : "border-white/8 bg-white/3 backdrop-blur-2xl"
            }
          `}
        >

          {/* LEFT */}
          <div className="flex items-center">

            {/* LOGO */}
            <Link
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
            </Link>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-7">

            {/* NAV */}
            <nav className="hidden items-center gap-7 lg:flex">

              {[
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
                <Link
                  key={i}
                  href={item.href}
                  className="
          group relative

          text-[13px]
          font-medium

          text-white/45
          transition-all duration-300

          hover:text-white
        "
                >

                  {item.name}

                  {/* UNDERLINE */}
                  <span
                    className="
            absolute -bottom-2 left-0
            h-px w-0

            bg-linear-to-r
            from-lime-300
            to-green-400

            transition-all duration-500

            group-hover:w-full
          "
                  />
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <Link
              href="#calendly"
              className="
      group hidden items-center gap-3
      overflow-hidden

      rounded-full
      border border-white/10

      bg-white px-5 py-3

      text-[13px]
      font-medium
      text-black

      transition-all duration-500

      hover:scale-[1.03]
      hover:shadow-[0_0_40px_rgba(255,255,255,0.12)]

      md:flex
    "
            >

              {/* SHINE */}
              <div
                className="
        absolute inset-0
        bg-linear-to-r
        from-transparent
        via-black/4
        to-transparent

        opacity-0
        transition-all duration-700

        group-hover:opacity-100
      "
              />

              <span className="relative z-10">
                Book Call
              </span>

              <ArrowUpRight
                className="
        relative z-10 h-4 w-4
        transition-transform duration-500

        group-hover:translate-x-1
        group-hover:-translate-y-1
      "
              />
            </Link>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="
      flex h-12 w-12 items-center justify-center
      rounded-full border border-white/10

      bg-white/3
      text-white

      backdrop-blur-2xl

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
              ? "pointer-events-auto mt-4 max-h-[700px] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
            }
  `}
        >

          <div
            className="
      relative overflow-hidden

      rounded-[28px]
      border border-white/10

      bg-black/45
      p-5

      backdrop-blur-3xl
    "
          >

            {/* TOP GLOW */}
            <div
              className="
        pointer-events-none absolute
        left-1/2 top-0
        h-[220px] w-[420px]
        -translate-x-1/2
      "
              style={{
                background: `
          radial-gradient(
            ellipse,
            rgba(163,230,53,0.08),
            transparent 72%
          )
        `,
                filter: "blur(60px)",
              }}
            />

            {/* GRAIN */}
            <div
              className="
        absolute inset-0
        opacity-[0.08]
        mix-blend-soft-light
      "
              style={{
                backgroundImage:
                  "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
              }}
            />

            <div className="relative z-10">

              {/* MOBILE LINKS */}
              <nav className="flex flex-col gap-2">

                {[
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
                    name: "Privacy Policy",
                    href: "/privacy-policy",
                  },
                ].map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    onClick={() => setMobileMenu(false)}
                    className="
              group relative overflow-hidden

              rounded-2xl
              border border-white/[0.06]

              bg-white/3
              px-5 py-4

              transition-all duration-500

              hover:bg-white/[0.05]
            "
                  >

                    {/* HOVER GLOW */}
                    <div
                      className="
                absolute inset-0
                opacity-0 transition-all duration-500

                group-hover:opacity-100
              "
                      style={{
                        background: `
                  radial-gradient(
                    circle at left,
                    rgba(163,230,53,0.10),
                    transparent 72%
                  )
                `,
                      }}
                    />

                    <div className="relative z-10 flex items-center justify-between">

                      <span
                        className="
                  text-[13px]
                  font-medium
                  tracking-[-0.02em]

                  text-white/70
                  transition-all duration-300

                  group-hover:text-white
                "
                      >
                        {item.name}
                      </span>

                      <ArrowUpRight
                        className="
                  h-4 w-4
                  text-white/30
                  transition-all duration-500

                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                  group-hover:text-lime-300
                "
                      />
                    </div>
                  </Link>
                ))}
              </nav>

              {/* MOBILE CTA */}
              <Link
                href="#calendly"
                onClick={() => setMobileMenu(false)}
                className="
          group relative mt-5
          flex items-center justify-between
          overflow-hidden

          rounded-2xl

          border border-lime-400/15
          bg-gradient-to-r
          from-lime-300
          to-green-500

          px-5 py-4

          transition-all duration-500
        "
              >

                {/* SHINE */}
                <div
                  className="
            absolute inset-0
            bg-linear-to-r
            from-transparent
            via-white/20
            to-transparent
          "
                />

                <span
                  className="
            relative z-10
            text-[13px]
            font-semibold
            tracking-[-0.02em]

            text-black
          "
                >
                  Book Strategy Call
                </span>

                <div
                  className="
            relative z-10 flex
            h-10 w-10
            items-center justify-center

            rounded-full
            bg-black
            text-white
          "
                >

                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;