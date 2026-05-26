"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  BriefcaseBusiness,
  Video,
  PenTool,
  Layers3,
  Users,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

const perks = [
  {
    title: "Remote Freedom",
    text: "Work from anywhere with a flexible remote-first environment.",
    icon: BriefcaseBusiness,
  },

  {
    title: "A-Player Team",
    text: "Collaborate with high-performing creatives and operators.",
    icon: Sparkles,
  },

  {
    title: "Long-Term Growth",
    text: "Build your career with real opportunities to scale.",
    icon: ShieldCheck,
  },
];

const roles = [
  {
    title: "Video Editor",
    tags: ["REMOTE", "FULL TIME"],
    icon: Video,
    links:
      "https://materamedia.notion.site/Video-Editor-2faab7440f4e80b3adcceb73c7b35db3",
  },

  {
    title: "Motion Designer",
    tags: ["AFTER EFFECTS", "REMOTE"],
    icon: Layers3,
    links:
      "https://materamedia.notion.site/Motion-Designer-2fbab7440f4e807985b3dffa1aa2137a",
  },

  {
    title: "Thumbnail Designer",
    tags: ["PHOTOSHOP", "YOUTUBE"],
    icon: PenTool,
    links:
      "https://materamedia.notion.site/Thumbnail-Designer-2fdab7440f4e80c698eccae19af3b014",
  },

  {
    title: "Scriptwriter",
    tags: ["COPYWRITING", "REMOTE"],
    icon: Sparkles,
    links:
      "https://materamedia.notion.site/Script-Writer-2fdab7440f4e805b9880f4533c1adc68",
  },

  {
    title: "Sales Closer",
    tags: ["HIGH TICKET", "REMOTE"],
    icon: Users,
    links:
      "https://materamedia.notion.site/Sales-Closer-2fdab7440f4e80b18834c286938c1f44",
  },

  {
    title: "HR",
    tags: ["HIGH TICKET", "REMOTE"],
    icon: Users,
    links:
      "https://materamedia.notion.site/HR-2fdab7440f4e809fb4fcf6a72a0e1326",
  },
];

const CareersClient = () => {
  return (
    <main className="relative overflow-hidden bg-black text-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        {/* BASE */}
        <div className="absolute inset-0 bg-[#020202]" />

        {/* MAIN GREEN ATMOSPHERE */}
        <div
          className="absolute left-1/2 top-[-22%] h-[1100px] w-[2200px] -translate-x-1/2"
          style={{
            background: `
              radial-gradient(
                ellipse at center,
                rgba(74,222,128,0.14) 0%,
                rgba(16,185,129,0.08) 20%,
                rgba(255,255,255,0.02) 46%,
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
              "radial-gradient(circle, rgba(16,185,129,0.10), transparent 72%)",
            filter: "blur(140px)",
          }}
        />

        {/* RIGHT GLOW */}
        <div
          className="absolute right-[-10%] top-[10%] h-[620px] w-[620px]"
          style={{
            background:
              "radial-gradient(circle, rgba(34,197,94,0.08), transparent 72%)",
            filter: "blur(160px)",
          }}
        />

        {/* LIGHT STREAK */}
        <div
          className="absolute left-[-10%] top-[38%] h-[180px] w-[120%] rotate-[-8deg]"
          style={{
            background: `
              linear-gradient(
                to right,
                transparent,
                rgba(74,222,128,0.10),
                rgba(16,185,129,0.05),
                transparent
              )
            `,
            filter: "blur(50px)",
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
          className="absolute inset-0 opacity-[0.08] mix-blend-soft-light"
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
      <div className="relative z-20 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">

        {/* HERO */}
        <section className="relative pt-28 pb-16 md:pt-34 md:pb-20">

          {/* HERO GLOW */}
          <div
            className="absolute left-1/2 top-[8%] h-[520px] w-[920px] -translate-x-1/2"
            style={{
              background: `
                radial-gradient(
                  ellipse,
                  rgba(74,222,128,0.14),
                  rgba(16,185,129,0.05),
                  transparent 72%
                )
              `,
              filter: "blur(120px)",
            }}
          />

          <div className="relative z-10 text-center">

            {/* LABEL */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-400/10 bg-green-400/[0.05] px-4 py-2 backdrop-blur-xl"
            >

              <div className="relative flex h-2 w-2">

                <div className="absolute inset-0 animate-ping rounded-full bg-green-300" />

                <div className="relative h-2 w-2 rounded-full bg-green-300" />
              </div>

              <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-green-100/80">
                WE ARE HIRING
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
              className="mx-auto max-w-5xl text-[2.5rem] font-semibold leading-[0.95] tracking-[-0.06em] sm:text-[4.4rem] lg:text-[6rem]"
            >
              Build The Career
              <br />

              <span className="relative inline-block">

                {/* GLOW */}
                <span className="absolute inset-0 bg-gradient-to-r from-green-300 via-white to-green-300 opacity-20 blur-3xl" />

                <span className="relative bg-gradient-to-b from-white via-green-100 to-green-300 bg-clip-text text-transparent">
                  You’re Proud Of.
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
              Join a high-performance creative agency building premium
              content systems, visual experiences, and campaigns viewed
              by millions.
            </motion.p>
          </div>
        </section>

        {/* PERKS */}
        <section className="pb-14">

          <div className="grid gap-4 md:grid-cols-3">

            {perks.map((perk, index) => {
              const Icon = perk.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-[28px] border border-white/[0.05] bg-white/[0.025] p-5 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-green-400/15"
                >

                  {/* GLOW */}
                  <div
                    className="absolute inset-0 opacity-0 transition-all duration-700 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(circle at top, rgba(74,222,128,0.10), transparent 72%)",
                    }}
                  />

                  {/* ICON */}
                  <div className="relative z-10 mb-5 flex h-12 w-12 items-center justify-center rounded-[18px] border border-green-400/10 bg-green-400/[0.06]">

                    <Icon className="h-5 w-5 text-green-200" />
                  </div>

                  {/* TITLE */}
                  <h3 className="relative z-10 text-[1.3rem] font-semibold tracking-[-0.04em]">
                    {perk.title}
                  </h3>

                  {/* TEXT */}
                  <p className="relative z-10 mt-3 text-[13px] leading-[1.8] text-white/45">
                    {perk.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* OPEN ROLES */}
        <section className="pb-20">

          {/* TOP */}
          <div className="mb-8 flex items-center justify-between">

            <div className="flex items-center gap-3">

              <div className="h-2 w-2 rounded-full bg-green-300 shadow-[0_0_14px_rgba(74,222,128,1)]" />

              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
                Open Positions
              </p>
            </div>

            <div className="rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2">

              <span className="text-[11px] text-white/50">
                {roles.length} Roles
              </span>
            </div>
          </div>

          {/* ROLES */}
          <div className="space-y-4">

            {roles.map((role, i) => {
              const Icon = role.icon;

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
                  className="group relative overflow-hidden rounded-[28px] border border-white/[0.05] bg-white/[0.025] p-5 transition-all duration-500 hover:border-green-400/15 hover:bg-white/[0.03] md:p-6"
                >

                  {/* GLOW */}
                  <div
                    className="absolute inset-0 opacity-0 transition-all duration-700 group-hover:opacity-100"
                    style={{
                      background: `
                        radial-gradient(
                          circle at right,
                          rgba(74,222,128,0.10),
                          transparent 72%
                        )
                      `,
                    }}
                  />

                  <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                    {/* LEFT */}
                    <div>

                      {/* TAGS */}
                      <div className="mb-4 flex flex-wrap gap-2">

                        {role.tags.map((tag, idx) => (
                          <div
                            key={idx}
                            className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5"
                          >

                            <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/60">
                              {tag}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* TITLE */}
                      <div className="flex items-center gap-4">

                        <div className="flex h-12 w-12 items-center justify-center rounded-[16px] border border-white/[0.08] bg-white/[0.03]">

                          <Icon className="h-5 w-5 text-green-200" />
                        </div>

                        <h3 className="text-[1.6rem] font-semibold tracking-[-0.05em] sm:text-[1.9rem]">
                          {role.title}
                        </h3>
                      </div>
                    </div>

                    {/* BUTTON */}
                    <Link
                      href={role.links}
                      target="_blank"
                      className="group/button relative flex items-center gap-4 self-start overflow-hidden rounded-full border border-green-400/15 bg-green-500/[0.08] px-5 py-4 backdrop-blur-2xl transition-all duration-500 hover:border-green-300/30 hover:bg-green-400 hover:text-black hover:shadow-[0_0_40px_rgba(74,222,128,0.25)]"
                    >

                      {/* SHINE */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.14] to-transparent opacity-0 transition-all duration-700 group-hover/button:opacity-100" />

                      <span className="relative z-10 text-[10px] font-semibold uppercase tracking-[0.18em]">
                        Apply Now
                      </span>

                      <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 transition-all duration-500 group-hover/button:rotate-45 group-hover/button:bg-black group-hover/button:text-white">

                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
            }}
            viewport={{ once: true }}
            className="relative mt-14 overflow-hidden rounded-[34px] border border-white/[0.05] bg-white/[0.025] px-6 py-14 text-center md:px-10"
          >

            {/* GLOW */}
            <div
              className="absolute left-1/2 top-0 h-[320px] w-[620px] -translate-x-1/2"
              style={{
                background: `
                  radial-gradient(
                    ellipse,
                    rgba(74,222,128,0.10),
                    transparent 72%
                  )
                `,
                filter: "blur(80px)",
              }}
            />

            <div className="relative z-10">

              {/* TITLE */}
              <h3 className="text-[1.8rem] font-semibold tracking-[-0.05em] md:text-[2.6rem]">
                Don’t See Your Role?
              </h3>

              {/* TEXT */}
              <p className="mx-auto mt-4 max-w-xl text-[14px] leading-[1.9] text-white/45">
                We’re always looking for talented creatives,
                editors, strategists, and operators to join
                our growing team.
              </p>

              {/* BUTTON */}
              <a
                href="https://materamedia.notion.site/2faab7440f4e80a4a05fd95c009a25d7?v=2faab7440f4e80ea89ff000c37ef4e5b&source=copy_link"
                target="_blank"
                className="group/button relative mt-8 inline-flex items-center gap-4 overflow-hidden rounded-full border border-white/[0.08] bg-white px-6 py-4 text-black transition-all duration-500 hover:scale-[1.02]"
              >

                <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">
                  See Open Roles
                </span>

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white transition-all duration-500 group-hover/button:rotate-45">

                  <ArrowRight className="h-4 w-4" />
                </div>
              </a>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
};

export default CareersClient;