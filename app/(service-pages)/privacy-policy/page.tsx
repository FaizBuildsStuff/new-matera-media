"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  LockKeyhole,
  Database,
  Mail,
  ArrowRight,
} from "lucide-react";

const sections = [
  {
    title: "1. Information we collect",
    content:
      "Contact details such as your name, email, company, and messages sent through forms or scheduling tools. We also collect basic usage analytics, browser/device information, and cookies to improve website performance.",
  },

  {
    title: "2. How we use your information",
    content:
      "We use your information to respond to inquiries, schedule calls, deliver requested services, improve user experience, and comply with legal or security obligations.",
  },

  {
    title: "3. Sharing your information",
    content:
      "We never sell your personal data. Information may only be shared with trusted providers such as hosting, analytics, or scheduling platforms required to operate our services.",
  },

  {
    title: "4. Third-party services",
    content:
      "Our website may include embedded services such as Calendly or external platforms. Their privacy practices are governed by their own privacy policies.",
  },

  {
    title: "5. Data retention",
    content:
      "We retain information only for as long as necessary to provide services, fulfill legal obligations, or maintain operational records.",
  },

  {
    title: "6. Security",
    content:
      "We apply reasonable technical safeguards to protect your information, although no online transmission or storage method is completely secure.",
  },

  {
    title: "7. Your choices",
    content:
      "You may request access, correction, or deletion of your data where applicable. Cookies can also be disabled through your browser settings.",
  },
];

const page = () => {
  return (
    <main className="relative overflow-hidden bg-black text-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        {/* BASE */}
        <div className="absolute inset-0 bg-[#020302]" />

        {/* MASSIVE TOP GREEN ATMOSPHERE */}
        <div
          className="
            absolute left-1/2 top-[-35%]
            h-[1600px] w-[3600px]
            -translate-x-1/2
          "
          style={{
            background: `
              radial-gradient(
                ellipse at center,
                rgba(163,230,53,0.16) 0%,
                rgba(74,222,128,0.10) 18%,
                rgba(34,197,94,0.06) 34%,
                rgba(255,255,255,0.015) 48%,
                transparent 76%
              )
            `,
            filter: "blur(220px)",
          }}
        />

        {/* LEFT GLOW */}
        <div
          className="
            absolute left-[-18%] top-[18%]
            h-[1000px] w-[1000px]
          "
          style={{
            background: `
              radial-gradient(
                circle,
                rgba(34,197,94,0.14),
                rgba(16,185,129,0.06),
                transparent 72%
              )
            `,
            filter: "blur(220px)",
          }}
        />

        {/* RIGHT GLOW */}
        <div
          className="
            absolute right-[-15%] top-[8%]
            h-[1100px] w-[1100px]
          "
          style={{
            background: `
              radial-gradient(
                circle,
                rgba(163,230,53,0.14),
                rgba(34,197,94,0.06),
                transparent 72%
              )
            `,
            filter: "blur(240px)",
          }}
        />

        {/* CENTER LIGHT */}
        <div
          className="
            absolute left-1/2 top-[30%]
            h-[800px] w-[1200px]
            -translate-x-1/2
          "
          style={{
            background: `
              radial-gradient(
                ellipse,
                rgba(255,255,255,0.03),
                rgba(163,230,53,0.03),
                transparent 72%
              )
            `,
            filter: "blur(140px)",
          }}
        />

        {/* CINEMATIC LIGHT */}
        <div
          className="
            absolute left-[-10%] top-[42%]
            h-[260px] w-[130%]
            rotate-[-8deg]
          "
          style={{
            background: `
              linear-gradient(
                to right,
                transparent,
                rgba(163,230,53,0.08),
                rgba(255,255,255,0.03),
                transparent
              )
            `,
            filter: "blur(90px)",
          }}
        />

        {/* GLASS FOG */}
        <div
          className="
            absolute right-[10%] top-[18%]
            hidden h-[320px] w-[320px]
            rounded-full
            border border-white/[0.04]
            bg-white/[0.02]
            backdrop-blur-3xl

            lg:block
          "
        />

        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "90px 90px",
            maskImage:
              "radial-gradient(circle at center, black, transparent 82%)",
          }}
        />

        {/* NOISE */}
        <div
          className="absolute inset-0 opacity-[0.11] mix-blend-soft-light"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
          }}
        />

        {/* EXTRA GRAIN */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/noise.png')",
          }}
        />

        {/* VIGNETTE */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(
                ellipse at center,
                transparent 38%,
                rgba(0,0,0,0.38) 78%,
                rgba(0,0,0,0.98) 100%
              )
            `,
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-20 mx-auto max-w-7xl px-5 sm:px-8">

        {/* HERO */}
        <section className="pt-32 pb-24 text-center md:pt-40">

          {/* LABEL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              mb-8 inline-flex items-center gap-3
              rounded-full
              border border-lime-400/10
              bg-lime-400/[0.05]
              px-5 py-3
              backdrop-blur-xl
            "
          >

            <div className="relative flex h-2 w-2">

              <div className="absolute inset-0 animate-ping rounded-full bg-lime-300" />

              <div className="relative h-2 w-2 rounded-full bg-lime-300" />
            </div>

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-lime-100/80
              "
            >
              PRIVACY PROTOCOL
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              mx-auto max-w-6xl

              text-[3.3rem]
              font-semibold
              leading-[0.94]
              tracking-[-0.055em]

              sm:text-[5.5rem]

              lg:text-[7.5rem]
            "
          >
            Your Privacy
            <br />

            <span className="relative inline-block">

              {/* GLOW */}
              <span
                className="
                  absolute inset-0
                  bg-gradient-to-r
                  from-lime-300
                  via-white
                  to-green-300
                  opacity-20 blur-3xl
                "
              />

              <span
                className="
                  relative bg-gradient-to-b
                  from-white
                  via-lime-100
                  to-green-300
                  bg-clip-text
                  text-transparent
                "
              >
                Matters To Us.
              </span>
            </span>
          </motion.h1>

          {/* TEXT */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.15,
            }}
            className="
              mx-auto mt-8 max-w-2xl
              text-[15px]
              leading-[2]
              text-white/45

              sm:text-[18px]
            "
          >
            This Privacy Policy explains how
            Matera Media collects, uses,
            and protects your information
            across our services and platforms.
          </motion.p>

          {/* UPDATED */}
          <div
            className="
              mt-10 inline-flex items-center gap-3
              rounded-full
              border border-white/[0.08]
              bg-white/[0.03]
              px-5 py-3
            "
          >

            <div className="h-2 w-2 rounded-full bg-lime-300" />

            <span className="text-sm text-white/55">
              Revised — April 7, 2026
            </span>
          </div>
        </section>

        {/* TOP SECURITY CARDS */}
        <section
          className="
            grid gap-5 pb-20

            md:grid-cols-3
          "
        >

          {[
            {
              title: "Encrypted Data",
              icon: LockKeyhole,
              text: "We apply technical safeguards and secure systems to protect sensitive information.",
            },

            {
              title: "No Data Selling",
              icon: Database,
              text: "Your information is never sold or shared for advertising purposes.",
            },

            {
              title: "Transparency First",
              icon: ShieldCheck,
              text: "We believe in privacy, clarity, and responsible data handling.",
            },
          ].map((card, i) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.05,
                }}
                viewport={{ once: true }}
                className="
                  group relative overflow-hidden
                  rounded-[34px]
                  border border-white/[0.06]
                  bg-gradient-to-b
                  from-white/[0.04]
                  to-white/[0.015]
                  p-8
                  backdrop-blur-3xl
                "
              >

                {/* GLOW */}
                <div
                  className="
                    absolute inset-0 opacity-0
                    transition-all duration-700

                    group-hover:opacity-100
                  "
                  style={{
                    background: `
                      radial-gradient(
                        circle at top right,
                        rgba(163,230,53,0.14),
                        transparent 72%
                      )
                    `,
                  }}
                />

                <div className="relative z-10">

                  <div
                    className="
                      flex h-14 w-14
                      items-center justify-center
                      rounded-[18px]
                      border border-white/[0.08]
                      bg-white/[0.03]
                    "
                  >

                    <Icon className="h-6 w-6 text-lime-200" />
                  </div>

                  <h3
                    className="
                      mt-7
                      text-[1.45rem]
                      font-semibold
                      tracking-[-0.04em]
                    "
                  >
                    {card.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      text-[14px]
                      leading-[1.9]
                      text-white/45
                    "
                  >
                    {card.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </section>

        {/* POLICY SECTIONS */}
        <section className="pb-28">

          <div className="space-y-6">

            {sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.04,
                }}
                viewport={{ once: true }}
                className="
                  group relative overflow-hidden
                  rounded-[36px]
                  border border-white/[0.06]
                  bg-gradient-to-b
                  from-white/[0.04]
                  to-white/[0.015]
                  p-8
                  backdrop-blur-3xl

                  md:p-10
                "
              >

                {/* HOVER GLOW */}
                <div
                  className="
                    absolute inset-0 opacity-0
                    transition-all duration-700

                    group-hover:opacity-100
                  "
                  style={{
                    background: `
                      radial-gradient(
                        circle at right,
                        rgba(163,230,53,0.10),
                        transparent 72%
                      )
                    `,
                  }}
                />

                {/* BIG NUMBER */}
                <div
                  className="
                    pointer-events-none absolute
                    right-6 top-2
                    text-[8rem]
                    font-semibold
                    leading-none
                    tracking-[-0.08em]
                    text-white/[0.02]
                  "
                >
                  0{i + 1}
                </div>

                <div className="relative z-10">

                  <h3
                    className="
                      text-[1.8rem]
                      font-semibold
                      tracking-[-0.05em]
                    "
                  >
                    {section.title}
                  </h3>

                  <p
                    className="
                      mt-5 max-w-4xl
                      text-[15px]
                      leading-[2]
                      text-white/45

                      sm:text-[16px]
                    "
                  >
                    {section.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CONTACT SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: true }}
            className="
              relative mt-20 overflow-hidden
              rounded-[42px]
              border border-white/[0.06]
              bg-gradient-to-b
              from-white/[0.04]
              to-white/[0.015]
              px-6 py-16 text-center
              backdrop-blur-3xl

              md:px-10
            "
          >

            {/* MASSIVE GLOW */}
            <div
              className="
                absolute left-1/2 top-0
                h-[500px] w-[900px]
                -translate-x-1/2
              "
              style={{
                background: `
                  radial-gradient(
                    ellipse,
                    rgba(163,230,53,0.12),
                    transparent 72%
                  )
                `,
                filter: "blur(90px)",
              }}
            />

            <div className="relative z-10">

              <h3
                className="
                  text-[2.3rem]
                  font-semibold
                  tracking-[-0.05em]

                  md:text-[3.6rem]
                "
              >
                Contact Information
              </h3>

              <p
                className="
                  mx-auto mt-5 max-w-2xl
                  text-[15px]
                  leading-[1.9]
                  text-white/45
                "
              >
                Questions about privacy or data handling?
                Reach out directly to Matera Media.
              </p>

              {/* EMAIL CARD */}
              <div
                className="
                  group mx-auto mt-10 flex
                  w-fit items-center gap-4
                  overflow-hidden rounded-full
                  border border-white/[0.08]
                  bg-white/[0.03]
                  px-6 py-5
                  backdrop-blur-2xl
                "
              >

                <div
                  className="
                    flex h-12 w-12
                    items-center justify-center
                    rounded-full
                    border border-white/[0.08]
                    bg-white/[0.03]
                  "
                >

                  <Mail className="h-5 w-5 text-lime-200" />
                </div>

                <div className="text-left">

                  <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                    Email Matera Media
                  </p>

                  <a
                    href="mailto:materamedia@gmail.com"
                    className="
                      mt-1 block
                      text-[1rem]
                      font-medium
                      text-white
                    "
                  >
                    materamedia@gmail.com
                  </a>
                </div>

                <div
                  className="
                    flex h-11 w-11
                    items-center justify-center
                    rounded-full
                    bg-lime-300 text-black
                    transition-all duration-500

                    group-hover:rotate-45
                  "
                >

                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
};

export default page;