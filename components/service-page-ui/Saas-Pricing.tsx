"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Sparkles,
} from "lucide-react";

const plans = [
  {
    name: "Starter",
    badge: "For Early SaaS Brands",
    button: "I Need This",
    featured: false,
    accent: "cyan",
    description:
      "A clear starting point for your product",
    features: [
      "Messaging and narrative defined",
      "Script and storyboard included",
      "Product visuals with clean motion",
      "Final video ready for site and sales",
    ],
  },

  {
    name: "Growth",
    badge: "Most Popular Plan",
    button: "I Need This",
    featured: true,
    accent: "violet",
    description:
      "For launches and growth pushes",
    features: [
      "Product or feature launch videos",
      "Cutdowns for ads and social",
      "Landing page ready edits",
      "Structured for distribution",
    ],
  },

  {
    name: "Scale",
    badge: "Enterprise Scaling",
    button: "I Need This",
    featured: false,
    accent: "blue",
    description:
      "Ongoing production for growth teams.",
    features: [
      "Launch, product, and feature videos",
      "Cutdowns for ads and distribution",
      "Onboarding and education content",
      "Ongoing support with a dedicated team",
    ],
  },
];

const SaasPricing = () => {
  return (
    <section
      className="
        relative 
        
        py-28 text-white

        md:py-36
      "
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none transform-gpu will-change-transform">

  

  {/* MASSIVE CINEMATIC AURORA */}
  <div
    className="
      absolute left-1/2 top-[-35%]
      h-[1500px] w-[3200px]
      -translate-x-1/2

      md:h-[1900px]
      md:w-[4200px]
    "
    style={{
      background: `
        radial-gradient(
          ellipse at center,
          rgba(139,92,246,0.20) 0%,
          rgba(99,102,241,0.16) 16%,
          rgba(59,130,246,0.10) 32%,
          rgba(6,182,212,0.06) 46%,
          rgba(255,255,255,0.015) 58%,
          transparent 76%
        )
      `,
      filter: "blur(50px)",
      opacity: 0.9,
    }}
  />

  {/* TOP LIGHT FOG */}
  <div
    className="
      absolute left-1/2 top-[-10%]
      h-[900px] w-[1800px]
      -translate-x-1/2
    "
    style={{
      background: `
        radial-gradient(
          ellipse,
          rgba(255,255,255,0.05),
          rgba(139,92,246,0.035),
          rgba(59,130,246,0.015),
          transparent 72%
        )
      `,
      filter: "blur(50px)",
    }}
  />

  {/* LEFT ATMOSPHERIC LIGHT */}
  <div
    className="
      absolute left-[-18%] top-[18%]
      h-[900px] w-[900px]

      md:h-[1300px]
      md:w-[1300px]
    "
    style={{
      background: `
        radial-gradient(
          circle,
          rgba(6,182,212,0.12),
          rgba(59,130,246,0.06),
          rgba(255,255,255,0.015),
          transparent 72%
        )
      `,
      filter: "blur(50px)",
      opacity: 0.8,
    }}
  />

  {/* RIGHT ATMOSPHERIC LIGHT */}
  <div
    className="
      absolute right-[-18%] top-[6%]
      h-[1000px] w-[1000px]

      md:h-[1400px]
      md:w-[1400px]
    "
    style={{
      background: `
        radial-gradient(
          circle,
          rgba(168,85,247,0.13),
          rgba(99,102,241,0.06),
          rgba(255,255,255,0.012),
          transparent 72%
        )
      `,
      filter: "blur(50px)",
      opacity: 0.85,
    }}
  />

  {/* CENTER LIGHT DIFFUSION */}
  <div
    className="
      absolute left-1/2 top-[45%]
      h-[900px] w-[900px]
      -translate-x-1/2 -translate-y-1/2
    "
    style={{
      background: `
        radial-gradient(
          circle,
          rgba(255,255,255,0.025),
          rgba(255,255,255,0.008),
          transparent 72%
        )
      `,
      filter: "blur(50px)",
      opacity: 0.7,
    }}
  />

  {/* BOTTOM DEPTH LIGHT */}
  <div
    className="
      absolute bottom-[-30%] left-1/2
      h-[900px] w-[1800px]
      -translate-x-1/2
    "
    style={{
      background: `
        radial-gradient(
          ellipse,
          rgba(59,130,246,0.10),
          rgba(139,92,246,0.05),
          transparent 72%
        )
      `,
      filter: "blur(50px)",
      opacity: 0.7,
    }}
  />

  {/* VERTICAL LIGHT BEAM */}
  <div
    className="
      absolute left-1/2 top-0
      h-[850px] w-[1px]
      -translate-x-1/2
    "
    style={{
      background:
        "linear-gradient(to bottom, rgba(255,255,255,0.18), transparent)",
      boxShadow: "0 0 40px rgba(255,255,255,0.22)",
      opacity: 0.35,
    }}
  />

  {/* DIAGONAL CINEMATIC LIGHT */}
  <div
    className="
      absolute left-[-15%] top-[38%]
      h-[260px] w-[135%]
      rotate-[-8deg]
    "
    style={{
      background: `
        linear-gradient(
          to right,
          transparent,
          rgba(139,92,246,0.10),
          rgba(59,130,246,0.05),
          transparent
        )
      `,
      filter: "blur(50px)",
      opacity: 0.9,
    }}
  />

  {/* FLOATING GLASS FOG */}
  <div
    className="
      absolute left-[12%] top-[24%]
      h-[520px] w-[520px]
      rounded-full
    "
    style={{
      background: `
        radial-gradient(
          circle,
          rgba(255,255,255,0.018),
          rgba(255,255,255,0.008),
          transparent 72%
        )
      `,
      filter: "blur(50px)",
      mixBlendMode: "screen",
    }}
  />

  {/* FLOATING GLASS FOG */}
  <div
    className="
      absolute right-[10%] bottom-[10%]
      h-[420px] w-[420px]
      rounded-full
    "
    style={{
      background: `
        radial-gradient(
          circle,
          rgba(255,255,255,0.014),
          rgba(139,92,246,0.010),
          transparent 72%
        )
      `,
      filter: "blur(50px)",
      mixBlendMode: "screen",
    }}
  />

  {/* SUBTLE GRID */}
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

  {/* SOFT NOISE */}
  <div
    className="absolute inset-0 opacity-[0.12] mix-blend-soft-light"
    style={{
      backgroundImage:
        "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
    }}
  />

  {/* EXTRA PREMIUM GRAIN */}
  <div
    className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
    style={{
      backgroundImage:
        "url('https://www.transparenttextures.com/patterns/noise.png')",
    }}
  />

  

  

  
</div>

      {/* CONTENT */}
      <div className="relative z-20 mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >

          {/* LABEL */}
          <div
            className="
              mb-8 inline-flex items-center gap-3
              rounded-full
              border border-white/[0.08]
              bg-white/[0.03]
              px-5 py-3
              backdrop-blur-xl
            "
          >

            <div className="h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_16px_rgba(168,85,247,1)]" />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-white/70
              "
            >
              PRICING PLANS
            </span>
          </div>

          {/* TITLE */}
          <h2
            className="
              mx-auto max-w-6xl
              text-[3.2rem]
              font-semibold
              leading-[0.92]
              tracking-[-0.07em]

              sm:text-[5.5rem]

              lg:text-[7.4rem]
            "
          >
            Plans for SaaS
            <br />

            <span
              className="
                bg-gradient-to-b
                from-white
                via-blue-100
                to-violet-200
                bg-clip-text
                text-transparent
              "
            >
              Video production.
            </span>
          </h2>

          {/* TEXT */}
          <p
            className="
              mx-auto mt-8 max-w-2xl
              text-[15px]
              leading-[1.9]
              text-white/45

              sm:text-[17px]
            "
          >
            Premium SaaS video production systems
            designed to increase clarity, improve
            conversions, and scale paid growth.
          </p>
        </motion.div>

        {/* PLANS */}
        <div
          className="
            grid gap-8

            xl:grid-cols-3
          "
        >

          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className={`
                group relative overflow-hidden
                rounded-[42px]
                border
                bg-[#060606]
                backdrop-blur-3xl
                transition-all duration-700

                hover:-translate-y-2

                ${plan.featured
                  ? "border-violet-400/20"
                  : "border-white/[0.06]"
                }
              `}
            >

              {/* PREMIUM TOP LIGHT */}
              <div
                className="
                  absolute inset-x-0 top-0
                  h-[240px]
                  opacity-70
                "
                style={{
                  background: `
                    linear-gradient(
                      to bottom,
                      rgba(255,255,255,0.06),
                      transparent
                    )
                  `,
                }}
              />

              {/* SIDE LIGHT */}
              <div
                className="
                  absolute right-[-10%] top-[10%]
                  h-[300px] w-[300px]
                  rounded-full
                  opacity-0 transition-all duration-700

                  group-hover:opacity-100
                "
                style={{
                  background:
                    plan.accent === "violet"
                      ? "radial-gradient(circle, rgba(168,85,247,0.14), transparent 72%)"
                      : plan.accent === "cyan"
                        ? "radial-gradient(circle, rgba(6,182,212,0.12), transparent 72%)"
                        : "radial-gradient(circle, rgba(59,130,246,0.12), transparent 72%)",
                  filter: "blur(50px)",
                }}
              />

              {/* BIG BACKGROUND TEXT */}
              <div
                className="
                  pointer-events-none absolute
                  bottom-[-40px] right-[-10px]
                  text-[11rem]
                  font-semibold
                  leading-none
                  tracking-[-0.08em]
                  text-white/[0.02]
                "
              >
                SAAS
              </div>

              {/* INNER */}
              <div
                className="
                  relative z-10 flex h-full
                  flex-col
                  p-7

                  md:p-9
                "
              >

                {/* BADGE */}
                <div
                  className={`
                    inline-flex w-fit items-center gap-3
                    rounded-full
                    border px-4 py-2
                    backdrop-blur-xl

                    ${plan.featured
                      ? `
                          border-violet-400/20
                          bg-violet-500/10
                        `
                      : `
                          border-white/[0.08]
                          bg-white/[0.03]
                        `
                    }
                  `}
                >

                  <div
                    className={`
                      flex h-7 w-7
                      items-center justify-center
                      rounded-full

                      ${plan.accent === "violet"
                        ? "bg-violet-300 text-black"
                        : plan.accent === "cyan"
                          ? "bg-cyan-300 text-black"
                          : "bg-blue-300 text-black"
                      }
                    `}
                  >

                    <Sparkles className="h-4 w-4" />
                  </div>

                  <span
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-white/80
                    "
                  >
                    {plan.badge}
                  </span>
                </div>

                {/* TITLE */}
                <div className="mt-10">

                  <h3
                    className="
                      text-[3.5rem]
                      font-semibold
                      leading-[0.92]
                      tracking-[-0.08em]

                      md:text-[4.5rem]
                    "
                  >
                    {plan.name}
                  </h3>

                  <p
                    className="
                      mt-7 max-w-md
                      text-[15px]
                      leading-[1.9]
                      text-white/45
                    "
                  >
                    {plan.description}
                  </p>
                </div>

                {/* FEATURES */}
                <div
                  className="
                    relative mt-12
                    overflow-hidden
                    rounded-[30px]
                    border border-white/[0.06]
                    bg-white/[0.02]
                    p-5
                  "
                >

                  {/* HEADER */}
                  <div className="flex items-center gap-4">

                    <div
                      className="
                        flex h-12 w-12
                        items-center justify-center
                        rounded-[16px]
                        border border-white/[0.08]
                        bg-white/[0.03]
                      "
                    >

                      <Check className="h-5 w-5 text-white" />
                    </div>

                    <div>
                      <h4
                        className="
                          text-[1.1rem]
                          font-semibold
                          tracking-[-0.04em]
                        "
                      >
                        Included Features
                      </h4>

                      <p className="mt-1 text-sm text-white/40">
                        Everything required to scale.
                      </p>
                    </div>
                  </div>

                  {/* LIST */}
                  <div className="mt-8 space-y-4">

                    {plan.features.map((feature, i) => (
                      <div
                        key={i}
                        className="
                          flex items-center gap-4
                          rounded-[18px]
                          border border-white/[0.05]
                          bg-black/30
                          px-4 py-4
                          transition-all duration-500

                          hover:border-white/[0.10]
                          hover:bg-white/[0.03]
                        "
                      >

                        <div
                          className={`
                            flex h-8 w-8
                            items-center justify-center
                            rounded-full

                            ${plan.accent === "violet"
                              ? "bg-violet-400/10"
                              : plan.accent === "cyan"
                                ? "bg-cyan-400/10"
                                : "bg-blue-400/10"
                            }
                          `}
                        >

                          <Check
                            className={`
                              h-4 w-4

                              ${plan.accent === "violet"
                                ? "text-violet-200"
                                : plan.accent === "cyan"
                                  ? "text-cyan-200"
                                  : "text-blue-200"
                              }
                            `}
                          />
                        </div>

                        <p
                          className="
                            text-[14px]
                            leading-[1.7]
                            text-white/75
                          "
                        >
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* BUTTON */}
                <button
                  className={`
                    group/button relative mt-8
                    flex items-center justify-between
                    overflow-hidden rounded-[24px]
                    border px-6 py-5
                    transition-all duration-500

                    ${plan.featured
                      ? `
                          border-violet-400/20
                          bg-violet-500
                        `
                      : `
                          border-white/[0.08]
                          bg-white/[0.03]
                        `
                    }
                  `}
                >

                  {/* SHINE */}
                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-r
                      from-transparent
                      via-white/[0.08]
                      to-transparent
                      opacity-0 transition-all duration-700

                      group-hover/button:opacity-100
                    "
                  />

                  <span
                    className="
                      relative z-10
                      text-[13px]
                      font-semibold
                      uppercase
                      tracking-[0.20em]
                    "
                  >
                    {plan.button}
                  </span>

                  <div
                    className="
                      relative z-10 flex h-12 w-12
                      items-center justify-center
                      rounded-full
                      border border-white/10
                      bg-white/10
                      transition-all duration-500

                      group-hover/button:rotate-45
                    "
                  >

                    <ArrowRight className="h-4 w-4" />
                  </div>
                </button>
              </div>

              {/* EDGE */}
              <div
                className="
                  absolute inset-0 rounded-[42px]
                  border border-white/[0.03]
                "
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SaasPricing;