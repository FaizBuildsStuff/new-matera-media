"use client";

import React from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Understand your product",
    desc: "We look at your product, your users, and where people get confused or drop off.",
  },
  {
    number: "02",
    title: "Make the message clear",
    desc: "We shape how your product is explained so people quickly understand the value.",
  },
  {
    number: "03",
    title: "Create the videos",
    desc: "We turn your product into clean, engaging videos that are easy to follow and watch.",
  },
  {
    number: "04",
    title: "Improve what works",
    desc: "We refine based on performance so your videos keep getting better over time.",
  },
];

const SaasProcess = () => {
  const { scrollYProgress } = useScroll();

  const lineHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    <section
      className="
        relative overflow-hidden
        bg-black
        py-28 text-white

        md:py-36
      "
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        {/* BASE */}
        <div className="absolute inset-0 bg-[#020202]" />

        {/* MAIN PURPLE/BLUE ATMOSPHERE */}
        <div
          className="
            absolute left-1/2 top-[-18%]
            h-[1400px] w-[2600px]
            -translate-x-1/2
          "
          style={{
            background: `
              radial-gradient(
                ellipse at center,
                rgba(139,92,246,0.22) 0%,
                rgba(59,130,246,0.14) 20%,
                rgba(6,182,212,0.10) 40%,
                rgba(255,255,255,0.03) 54%,
                transparent 76%
              )
            `,
            filter: "blur(180px)",
          }}
        />

        {/* LEFT GLOW */}
        <div
          className="
            absolute left-[-10%] top-[18%]
            h-[900px] w-[900px]
            rounded-full
          "
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.12), transparent 72%)",
            filter: "blur(180px)",
          }}
        />

        {/* RIGHT GLOW */}
        <div
          className="
            absolute right-[-10%] top-[0%]
            h-[1000px] w-[1000px]
            rounded-full
          "
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.14), transparent 72%)",
            filter: "blur(220px)",
          }}
        />

        {/* CENTER CYAN GLOW */}
        <div
          className="
            absolute left-1/2 top-[45%]
            h-[700px] w-[700px]
            -translate-x-1/2
            rounded-full
          "
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.10), transparent 72%)",
            filter: "blur(180px)",
          }}
        />

        {/* LIGHT STREAK */}
        <div
          className="
            absolute left-[-10%] top-[40%]
            h-[260px] w-[120%]
            rotate-[-8deg]
          "
          style={{
            background: `
              linear-gradient(
                to right,
                transparent,
                rgba(139,92,246,0.14),
                rgba(59,130,246,0.08),
                transparent
              )
            `,
            filter: "blur(70px)",
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
          className="absolute inset-0 opacity-[0.12] mix-blend-soft-light"
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
                rgba(0,0,0,0.28) 74%,
                rgba(0,0,0,0.95) 100%
              )
            `,
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-20 mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          viewport={{ once: true }}
          className="mb-28 text-center"
        >

          {/* LABEL */}
          <div
            className="
              mb-8 inline-flex items-center gap-3
              rounded-full
              border border-violet-400/10
              bg-white/[0.03]
              px-5 py-3
              backdrop-blur-xl
            "
          >

            <div className="h-2.5 w-2.5 rounded-full bg-violet-300 shadow-[0_0_18px_rgba(168,85,247,1)]" />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-white/75
              "
            >
              OUR PROCESS
            </span>
          </div>

          {/* TITLE */}
          <h2
            className="
              mx-auto max-w-6xl
              text-[3rem]
              font-semibold
              leading-[0.95]
              tracking-[-0.05em]

              sm:text-[5rem]

              lg:text-[7rem]
            "
          >
            Turning Complex SaaS
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
              Into Videos People Understand.
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
            A streamlined creative system designed
            to simplify your product, improve clarity,
            and convert viewers into customers.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative mx-auto max-w-5xl">

          {/* STATIC LINE */}
          <div
            className="
              absolute left-[22px] top-0
              h-full w-[1px]
              bg-white/[0.08]

              md:left-1/2
              md:-translate-x-1/2
            "
          />

          {/* ANIMATED LINE */}
          <motion.div
            style={{ height: lineHeight }}
            className="
              absolute left-[22px] top-0
              w-[2px]

              md:left-1/2
              md:-translate-x-1/2
            "
          >

            <div
              className="
                h-full w-full
                bg-gradient-to-b
                from-violet-400
                via-blue-400
                to-cyan-300
                shadow-[0_0_24px_rgba(139,92,246,0.8)]
              "
            />
          </motion.div>

          {/* STEPS */}
          <div className="space-y-24">

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true, amount: 0.4 }}
                className={`
                  relative flex

                  ${
                    index % 2 === 0
                      ? "md:justify-start"
                      : "md:justify-end"
                  }
                `}
              >

                {/* DOT */}
                <div
                  className="
                    absolute left-[22px] top-4
                    z-20 h-5 w-5
                    -translate-x-1/2
                    rounded-full
                    border border-white/20
                    bg-black

                    md:left-1/2
                  "
                >

                  <div
                    className="
                      absolute inset-0 rounded-full
                      bg-violet-400 blur-md
                    "
                  />

                  <div
                    className="
                      relative h-full w-full
                      rounded-full
                      bg-gradient-to-br
                      from-violet-300
                      to-blue-300
                    "
                  />
                </div>

                {/* CONTENT */}
                <div
                  className="
                    relative ml-14 max-w-xl

                    md:ml-0
                    md:w-[42%]
                  "
                >

                  {/* NUMBER */}
                  <span
                    className="
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.24em]
                      text-violet-200
                    "
                  >
                    Step {step.number}
                  </span>

                  {/* TITLE */}
                  <h3
                    className="
                      mt-5
                      text-[2rem]
                      font-semibold
                      leading-[1]
                      tracking-[-0.05em]

                      sm:text-[2.6rem]
                    "
                  >
                    {step.title}
                  </h3>

                  {/* TEXT */}
                  <p
                    className="
                      mt-6
                      text-[15px]
                      leading-[1.9]
                      text-white/45

                      sm:text-[16px]
                    "
                  >
                    {step.desc}
                  </p>

                  {/* FLOATING LIGHT */}
                  <div
                    className="
                      absolute -left-10 top-10
                      h-[140px] w-[140px]
                      rounded-full
                      opacity-0 blur-3xl
                      transition-all duration-700

                      group-hover:opacity-100
                    "
                    style={{
                      background:
                        "radial-gradient(circle, rgba(139,92,246,0.18), transparent 72%)",
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaasProcess;