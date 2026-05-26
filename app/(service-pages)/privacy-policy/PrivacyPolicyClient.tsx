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

const PrivacyPolicyClient = () => {
  return (
    <main className="relative overflow-hidden bg-black text-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        {/* BASE */}
        <div className="absolute inset-0 bg-[#020302]" />

        {/* MAIN ATMOSPHERE */}
        <div
          className="absolute left-1/2 top-[-22%] h-[1100px] w-[2200px] -translate-x-1/2"
          style={{
            background: `
              radial-gradient(
                ellipse at center,
                rgba(163,230,53,0.14) 0%,
                rgba(74,222,128,0.08) 20%,
                rgba(34,197,94,0.05) 38%,
                rgba(255,255,255,0.015) 50%,
                transparent 74%
              )
            `,
            filter: "blur(140px)",
          }}
        />

        {/* LEFT GLOW */}
        <div
          className="absolute left-[-12%] top-[18%] h-[620px] w-[620px]"
          style={{
            background:
              "radial-gradient(circle, rgba(34,197,94,0.10), transparent 72%)",
            filter: "blur(150px)",
          }}
        />

        {/* RIGHT GLOW */}
        <div
          className="absolute right-[-10%] top-[8%] h-[700px] w-[700px]"
          style={{
            background:
              "radial-gradient(circle, rgba(163,230,53,0.10), transparent 72%)",
            filter: "blur(170px)",
          }}
        />

        {/* LIGHT STREAK */}
        <div
          className="absolute left-[-10%] top-[40%] h-[180px] w-[120%] rotate-[-8deg]"
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
            filter: "blur(60px)",
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
            backgroundSize: "90px 90px",
            maskImage:
              "radial-gradient(circle at center, black, transparent 82%)",
          }}
        />

        {/* GRAIN */}
        <div
          className="absolute inset-0 opacity-[0.10] mix-blend-soft-light"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
          }}
        />

        {/* BOTTOM BLEND */}
        <div
          className="absolute bottom-[-10%] left-0 h-[40%] w-full"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.92), rgba(0,0,0,0.58), transparent)",
            filter: "blur(20px)",
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-20 mx-auto max-w-[1350px] px-5 sm:px-8 lg:px-10">

        {/* HERO */}
        <section className="pt-28 pb-16 text-center md:pt-34 md:pb-20">

          {/* LABEL */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime-400/10 bg-lime-400/[0.05] px-4 py-2 backdrop-blur-xl"
          >

            <div className="relative flex h-2 w-2">

              <div className="absolute inset-0 animate-ping rounded-full bg-lime-300" />

              <div className="relative h-2 w-2 rounded-full bg-lime-300" />
            </div>

            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-lime-100/80">
              PRIVACY PROTOCOL
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mx-auto max-w-5xl text-[2.5rem] font-semibold leading-[0.95] tracking-[-0.055em] sm:text-[4.2rem] lg:text-[5.8rem]"
          >
            Your Privacy
            <br />

            <span className="relative inline-block">

              {/* GLOW */}
              <span className="absolute inset-0 bg-gradient-to-r from-lime-300 via-white to-green-300 opacity-20 blur-3xl" />

              <span className="relative bg-gradient-to-b from-white via-lime-100 to-green-300 bg-clip-text text-transparent">
                Matters To Us.
              </span>
            </span>
          </motion.h1>

          {/* TEXT */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.15,
            }}
            className="mx-auto mt-6 max-w-2xl text-[14px] leading-[1.9] text-white/45 sm:text-[16px]"
          >
            This Privacy Policy explains how Matera Media collects,
            uses, and protects your information across our services
            and platforms.
          </motion.p>

          {/* UPDATED */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2.5">

            <div className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_14px_rgba(163,230,53,1)]" />

            <span className="text-[12px] text-white/55">
              Revised — April 7, 2026
            </span>
          </div>
        </section>

        {/* TOP CARDS */}
        <section className="grid gap-4 pb-16 md:grid-cols-3">

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
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.05,
                }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[28px] border border-white/[0.05] bg-white/[0.025] p-5 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-lime-400/15"
              >

                {/* GLOW */}
                <div
                  className="absolute inset-0 opacity-0 transition-all duration-700 group-hover:opacity-100"
                  style={{
                    background: `
                      radial-gradient(
                        circle at top right,
                        rgba(163,230,53,0.12),
                        transparent 72%
                      )
                    `,
                  }}
                />

                <div className="relative z-10">

                  {/* ICON */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-[16px] border border-white/[0.08] bg-white/[0.03]">

                    <Icon className="h-5 w-5 text-lime-200" />
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-5 text-[1.2rem] font-semibold tracking-[-0.04em]">
                    {card.title}
                  </h3>

                  {/* TEXT */}
                  <p className="mt-3 text-[13px] leading-[1.8] text-white/45">
                    {card.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </section>

        {/* POLICY */}
        <section className="pb-20">

          <div className="space-y-4">

            {sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.04,
                }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[30px] border border-white/[0.05] bg-white/[0.025] p-5 backdrop-blur-2xl transition-all duration-500 hover:border-lime-400/12 md:p-6"
              >

                {/* GLOW */}
                <div
                  className="absolute inset-0 opacity-0 transition-all duration-700 group-hover:opacity-100"
                  style={{
                    background: `
                      radial-gradient(
                        circle at right,
                        rgba(163,230,53,0.08),
                        transparent 72%
                      )
                    `,
                  }}
                />

                {/* NUMBER */}
                <div className="pointer-events-none absolute right-5 top-2 text-[5rem] font-semibold leading-none tracking-[-0.08em] text-white/[0.02]">
                  0{i + 1}
                </div>

                <div className="relative z-10">

                  {/* TITLE */}
                  <h3 className="text-[1.3rem] font-semibold tracking-[-0.04em] sm:text-[1.5rem]">
                    {section.title}
                  </h3>

                  {/* TEXT */}
                  <p className="mt-4 max-w-4xl text-[13px] leading-[1.9] text-white/45 sm:text-[14px]">
                    {section.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
            }}
            viewport={{ once: true }}
            className="relative mt-14 overflow-hidden rounded-[34px] border border-white/[0.05] bg-white/[0.025] px-6 py-14 text-center backdrop-blur-2xl md:px-10"
          >

            {/* GLOW */}
            <div
              className="absolute left-1/2 top-0 h-[320px] w-[620px] -translate-x-1/2"
              style={{
                background: `
                  radial-gradient(
                    ellipse,
                    rgba(163,230,53,0.10),
                    transparent 72%
                  )
                `,
                filter: "blur(80px)",
              }}
            />

            <div className="relative z-10">

              {/* TITLE */}
              <h3 className="text-[1.8rem] font-semibold tracking-[-0.05em] md:text-[2.5rem]">
                Contact Information
              </h3>

              {/* TEXT */}
              <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-[1.9] text-white/45">
                Questions about privacy or data handling?
                Reach out directly to Matera Media.
              </p>

              {/* EMAIL CARD */}
              <div className="group mx-auto mt-8 flex w-fit items-center gap-4 overflow-hidden rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-4 backdrop-blur-2xl">

                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03]">

                  <Mail className="h-4 w-4 text-lime-200" />
                </div>

                <div className="text-left">

                  <p className="text-[10px] uppercase tracking-[0.18em] text-white/40">
                    Email Matera Media
                  </p>

                  <a
                    href="mailto:materamedia@gmail.com"
                    className="mt-1 block text-[14px] font-medium text-white"
                  >
                    materamedia@gmail.com
                  </a>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-lime-300 text-black transition-all duration-500 group-hover:rotate-45">

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

export default PrivacyPolicyClient;