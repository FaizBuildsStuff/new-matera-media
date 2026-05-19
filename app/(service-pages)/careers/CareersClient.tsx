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
        links: 'https://materamedia.notion.site/Video-Editor-2faab7440f4e80b3adcceb73c7b35db3'
    },

    {
        title: "Motion Designer",
        tags: ["AFTER EFFECTS", "REMOTE"],
        icon: Layers3,
        links: 'https://materamedia.notion.site/Motion-Designer-2fbab7440f4e807985b3dffa1aa2137a'
    },

    {
        title: "Thumbnail Designer",
        tags: ["PHOTOSHOP", "YOUTUBE"],
        icon: PenTool,
        links: 'https://materamedia.notion.site/Thumbnail-Designer-2fdab7440f4e80c698eccae19af3b014'
    },

    {
        title: "Scriptwriter",
        tags: ["COPYWRITING", "REMOTE"],
        icon: Sparkles,
        links: 'https://materamedia.notion.site/Script-Writer-2fdab7440f4e805b9880f4533c1adc68'
    },

    {
        title: "Sales Closer",
        tags: ["HIGH TICKET", "REMOTE"],
        icon: Users,
        links: 'https://materamedia.notion.site/Sales-Closer-2fdab7440f4e80b18834c286938c1f44'
    },

    {
        title: "HR",
        tags: ["HIGH TICKET", "REMOTE"],
        icon: Users,
        links: 'https://materamedia.notion.site/HR-2fdab7440f4e809fb4fcf6a72a0e1326'
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
                    className="
            absolute left-1/2 top-[-25%]
            h-[1400px] w-[3200px]
            -translate-x-1/2
          "
                    style={{
                        background: `
              radial-gradient(
                ellipse at center,
                rgba(74,222,128,0.12) 0%,
                rgba(16,185,129,0.08) 22%,
                rgba(255,255,255,0.02) 46%,
                transparent 74%
              )
            `,
                        filter: "blur(220px)",
                    }}
                />

                {/* LEFT GLOW */}
                <div
                    className="
            absolute left-[-15%] top-[20%]
            h-[900px] w-[900px]
          "
                    style={{
                        background:
                            "radial-gradient(circle, rgba(16,185,129,0.10), transparent 72%)",
                        filter: "blur(200px)",
                    }}
                />

                {/* RIGHT GLOW */}
                <div
                    className="
            absolute right-[-10%] top-[10%]
            h-[800px] w-[800px]
          "
                    style={{
                        background:
                            "radial-gradient(circle, rgba(34,197,94,0.08), transparent 72%)",
                        filter: "blur(220px)",
                    }}
                />

                {/* GRID */}
                <div
                    className="absolute inset-0 opacity-[0.025]"
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

                {/* VIGNETTE */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: `
              radial-gradient(
                ellipse at center,
                transparent 38%,
                rgba(0,0,0,0.35) 78%,
                rgba(0,0,0,0.96) 100%
              )
            `,
                    }}
                />
            </div>

            {/* CONTENT */}
            <div className="relative z-20 mx-auto max-w-7xl px-5 sm:px-8">

                {/* HERO */}
                <section className="relative pt-32 pb-24 md:pt-40">

                    {/* HERO GLOW */}
                    <div
                        className="
      absolute left-1/2 top-[8%]
      h-[700px] w-[1200px]
      -translate-x-1/2
    "
                        style={{
                            background: `
        radial-gradient(
          ellipse,
          rgba(74,222,128,0.16),
          rgba(16,185,129,0.06),
          transparent 72%
        )
      `,
                            filter: "blur(120px)",
                        }}
                    />

                    {/* FLOATING GLASS */}
                    <div
                        className="
      absolute right-[10%] top-[10%]
      hidden h-[240px] w-[240px]
      rounded-full border border-white/[0.04]
      bg-white/[0.02]
      backdrop-blur-3xl

      lg:block
    "
                    />

                    <div className="relative z-10 text-center">

                        {/* LABEL */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="
        mb-8 inline-flex items-center gap-3
        rounded-full
        border border-green-400/10
        bg-green-400/[0.05]
        px-5 py-3
        backdrop-blur-xl
      "
                        >

                            <div className="relative flex h-2 w-2">

                                <div className="absolute inset-0 animate-ping rounded-full bg-green-300" />

                                <div className="relative h-2 w-2 rounded-full bg-green-300" />
                            </div>

                            <span
                                className="
          text-[10px]
          font-semibold
          uppercase
          tracking-[0.24em]
          text-green-100/80
        "
                            >
                                WE ARE HIRING
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

        text-[3.5rem]
        font-semibold
        leading-[0.94]
        tracking-[-0.06em]

        sm:text-[5.5rem]

        lg:text-[8rem]
      "
                        >
                            Build The Career
                            <br />

                            <span className="relative inline-block">

                                {/* TEXT GLOW */}
                                <span
                                    className="
            absolute inset-0
            bg-gradient-to-r
            from-green-300
            via-white
            to-green-300
            opacity-20 blur-3xl
          "
                                />

                                <span
                                    className="
            relative bg-gradient-to-b
            from-white
            via-green-100
            to-green-300
            bg-clip-text
            text-transparent
          "
                                >
                                    You’re Proud Of.
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
        mx-auto mt-10 max-w-2xl
        text-[15px]
        leading-[2]
        text-white/45

        sm:text-[18px]
      "
                        >
                            Join a high-performance creative agency
                            building premium content systems, visual
                            experiences, and campaigns viewed by millions.
                        </motion.p>
                    </div>
                </section>

                {/* OPEN ROLES */}
                <section className="pb-24">

                    {/* TITLE */}
                    <div className="mb-10 flex items-center justify-between">

                        <div className="flex items-center gap-3">

                            <div className="h-2 w-2 rounded-full bg-green-300" />

                            <p
                                className="
                  text-[12px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-white/60
                "
                            >
                                Open Positions
                            </p>
                        </div>

                        <div
                            className="
                rounded-full
                border border-white/[0.08]
                bg-white/[0.03]
                px-4 py-2
              "
                        >

                            <span className="text-xs text-white/50">
                                {roles.length} Roles
                            </span>
                        </div>
                    </div>

                    {/* ROLES */}
                    <div className="space-y-5">

                        {roles.map((role, i) => {
                            const Icon = role.icon;

                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 60 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.9,
                                        delay: i * 0.05,
                                    }}
                                    viewport={{ once: true }}
                                    className="
                    group relative overflow-hidden
                    rounded-[34px]
                    border border-white/[0.06]
                    bg-white/[0.03]
                    p-6
                    transition-all duration-500

                    hover:border-green-400/15
                    hover:bg-white/[0.04]

                    md:p-8
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
                          circle at right,
                          rgba(74,222,128,0.12),
                          transparent 72%
                        )
                      `,
                                        }}
                                    />

                                    <div
                                        className="
                       relative z-10 flex flex-col gap-8

                       md:flex-row
                       md:items-center
                       md:justify-between
                     "
                                    >

                                        {/* LEFT */}
                                        <div>

                                            {/* TAGS */}
                                            <div className="mb-5 flex flex-wrap gap-2">

                                                {role.tags.map((tag, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="
                               rounded-full
                               border border-white/[0.08]
                               bg-white/[0.03]
                               px-3 py-2
                             "
                                                    >

                                                        <span
                                                            className="
                                text-[10px]
                                font-semibold
                                uppercase
                                tracking-[0.16em]
                                text-white/60
                              "
                                                        >
                                                            {tag}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* TITLE */}
                                            <div className="flex items-center gap-4">

                                                <div
                                                    className="
                             flex h-14 w-14
                             items-center justify-center
                             rounded-[18px]
                             border border-white/[0.08]
                             bg-white/[0.03]
                           "
                                                >

                                                    <Icon className="h-6 w-6 text-green-200" />
                                                </div>

                                                <h3
                                                    className="
                             text-[2rem]
                             font-semibold
                             tracking-[-0.05em]
                           "
                                                >
                                                    {role.title}
                                                </h3>
                                            </div>
                                        </div>

                                        {/* RIGHT */}
                                        <Link
                                            href={role.links}
                                            target="_blank"
                                            className="
    group/button relative flex
    items-center gap-5
    self-start overflow-hidden
    rounded-full

    border border-green-400/15
    bg-green-500/[0.08]

    px-6 py-5

    backdrop-blur-2xl
    transition-all duration-500

    hover:border-green-300/30
    hover:bg-green-400
    hover:text-black
    hover:shadow-[0_0_40px_rgba(74,222,128,0.25)]
  "
                                        >

                                            {/* SHINE */}
                                            <div
                                                className="
       absolute inset-0
       bg-gradient-to-r
       from-transparent
       via-white/[0.14]
       to-transparent

       opacity-0
       transition-all duration-700

       group-hover/button:opacity-100
     "
                                            />

                                            <span
                                                className="
       relative z-10
       text-[11px]
       font-semibold
       uppercase
       tracking-[0.20em]
     "
                                            >
                                                Apply Now
                                            </span>

                                            <div
                                                className="
       relative z-10 flex
       h-11 w-11
       items-center justify-center
       rounded-full

       border border-white/10
       bg-white/10

       transition-all duration-500

       group-hover/button:rotate-45
       group-hover/button:bg-black
       group-hover/button:text-white
     "
                                            >

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
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                        }}
                        viewport={{ once: true }}
                        className="
              relative mt-20 overflow-hidden
              rounded-[40px]
              border border-white/[0.06]
              bg-white/[0.03]
              px-6 py-16 text-center

              md:px-10
            "
                    >

                        {/* GLOW */}
                        <div
                            className="
                absolute left-1/2 top-0
                h-[400px] w-[700px]
                -translate-x-1/2
              "
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

                            <h3
                                className="
                  text-[2rem]
                  font-semibold
                  tracking-[-0.05em]

                  md:text-[3rem]
                "
                            >
                                Don’t See Your Role?
                            </h3>

                            <p
                                className="
                  mx-auto mt-5 max-w-xl
                  text-[15px]
                  leading-[1.9]
                  text-white/45
                "
                            >
                                We’re always looking for talented
                                creatives, editors, strategists,
                                and operators to join our team.
                            </p>

                            <button
                                className="
                  group/button relative mt-10
                  inline-flex items-center gap-4
                  overflow-hidden rounded-full
                  border border-white/[0.08]
                  bg-white px-7 py-5
                  text-black
                  transition-all duration-500
                "
                            >

                                <span
                                    className="
                    text-[12px]
                    font-semibold
                    uppercase
                    tracking-[0.20em]
                  "
                                >
                                    <a href="https://materamedia.notion.site/2faab7440f4e80a4a05fd95c009a25d7?v=2faab7440f4e80ea89ff000c37ef4e5b&source=copy_link">See Open Roles</a>
                                </span>

                                <div
                                    className="
                    flex h-10 w-10
                    items-center justify-center
                    rounded-full
                    bg-black text-white
                    transition-all duration-500

                    group-hover/button:rotate-45
                  "
                                >

                                    <ArrowRight className="h-4 w-4" />
                                </div>
                            </button>
                        </div>
                    </motion.div>
                </section>
            </div>
        </main>
    );
};

export default CareersClient;
