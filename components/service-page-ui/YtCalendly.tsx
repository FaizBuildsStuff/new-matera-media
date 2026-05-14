"use client";

import React from "react";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Video,
} from "lucide-react";

const YtCalendly = () => {
  return (
    <section
      className="
        relative overflow-hidden
        bg-black
        py-24 text-white

        md:py-32
      "
    >

      {/* BACKGROUND */}
<div className="absolute inset-0 overflow-hidden">

  {/* BASE */}
  <div className="absolute inset-0 bg-[#020202]" />

  {/* MASSIVE RED ATMOSPHERE */}
  <div
    className="
      absolute left-1/2 top-[-24%]
      h-[1300px] w-[2600px]
      -translate-x-1/2
    "
    style={{
      background: `
        radial-gradient(
          ellipse at center,
          rgba(255,0,76,0.24) 0%,
          rgba(255,30,60,0.16) 18%,
          rgba(255,60,60,0.08) 36%,
          rgba(255,255,255,0.03) 50%,
          transparent 74%
        )
      `,
      filter: "blur(180px)",
    }}
  />

  {/* SECOND RED LAYER */}
  <div
    className="
      absolute left-1/2 top-[2%]
      h-[900px] w-[1800px]
      -translate-x-1/2
    "
    style={{
      background: `
        radial-gradient(
          ellipse,
          rgba(255,0,76,0.16),
          rgba(255,40,40,0.06),
          transparent 72%
        )
      `,
      filter: "blur(120px)",
    }}
  />

  {/* LEFT RED CLOUD */}
  <div
    className="
      absolute left-[-12%] top-[18%]
      h-[900px] w-[900px]
      rounded-full
    "
    style={{
      background:
        "radial-gradient(circle, rgba(255,0,76,0.14), transparent 72%)",
      filter: "blur(180px)",
    }}
  />

  {/* RIGHT RED CLOUD */}
  <div
    className="
      absolute right-[-10%] top-[0%]
      h-[1000px] w-[1000px]
      rounded-full
    "
    style={{
      background:
        "radial-gradient(circle, rgba(255,50,50,0.12), transparent 72%)",
      filter: "blur(200px)",
    }}
  />

  {/* RED LIGHT WAVE */}
  <div
    className="
      absolute left-[-5%] top-[34%]
      h-[260px] w-[120%]
      rotate-[-6deg]
    "
    style={{
      background: `
        linear-gradient(
          to right,
          transparent,
          rgba(255,0,76,0.24),
          rgba(255,40,40,0.14),
          transparent
        )
      `,
      filter: "blur(60px)",
    }}
  />

  {/* SECOND WAVE */}
  <div
    className="
      absolute left-[-10%] top-[46%]
      h-[180px] w-[120%]
      rotate-[4deg]
    "
    style={{
      background: `
        linear-gradient(
          to right,
          transparent,
          rgba(255,255,255,0.07),
          transparent
        )
      `,
      filter: "blur(70px)",
    }}
  />

  {/* LEFT ORBIT */}
  <div
    className="
      absolute left-[-8%] bottom-[-18%]
      h-[500px] w-[500px]
      rounded-full
      border border-red-400/[0.08]
    "
  />

  <div
    className="
      absolute left-[-2%] bottom-[-10%]
      h-[360px] w-[360px]
      rounded-full
      border border-red-300/[0.05]
    "
  />

  {/* CENTER WHITE LIGHT */}
  <div
    className="
      absolute left-1/2 top-[28%]
      h-[320px] w-[800px]
      -translate-x-1/2
    "
    style={{
      background: `
        radial-gradient(
          ellipse,
          rgba(255,255,255,0.10),
          rgba(255,255,255,0.04),
          transparent 72%
        )
      `,
      filter: "blur(80px)",
    }}
  />

  {/* FLOATING PARTICLES */}
  <div className="absolute left-[16%] top-[68%] h-2.5 w-2.5 rounded-full bg-red-300 shadow-[0_0_25px_rgba(255,0,76,0.9)]" />

  <div className="absolute right-[18%] top-[28%] h-3 w-3 rounded-full bg-red-200 shadow-[0_0_30px_rgba(255,60,60,0.9)]" />

  <div className="absolute left-[26%] top-[24%] h-2 w-2 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.8)]" />

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

  {/* PREMIUM GRAIN */}
  <div
    className="absolute inset-0 opacity-[0.12] mix-blend-soft-light"
    style={{
      backgroundImage:
        "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
    }}
  />

  {/* CINEMATIC VIGNETTE */}
  <div
    className="absolute inset-0"
    style={{
      background: `
        radial-gradient(
          ellipse at center,
          transparent 38%,
          rgba(0,0,0,0.28) 72%,
          rgba(0,0,0,0.94) 100%
        )
      `,
    }}
  />
</div>

      {/* CONTENT */}
      <div className="relative z-20 mx-auto max-w-[1650px] px-5 sm:px-8 lg:px-10">

        {/* MAIN CARD */}
        <div
          className="
            relative overflow-hidden
            rounded-[42px]
            border border-white/[0.06]
            bg-white/[0.03]
            backdrop-blur-3xl
          "
        >

          {/* TOP LIGHT */}
          <div
            className="
              absolute left-1/2 top-0
              h-[220px] w-[700px]
              -translate-x-1/2
            "
            style={{
              background: `
                radial-gradient(
                  ellipse,
                  rgba(190,242,100,0.16),
                  transparent 72%
                )
              `,
              filter: "blur(80px)",
            }}
          />

          {/* INNER GLOW */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(
                  circle at top,
                  rgba(190,242,100,0.10),
                  transparent 72%
                )
              `,
            }}
          />

          <div
            className="
              relative z-10
              grid gap-0

              lg:grid-cols-[0.9fr_1.1fr]
            "
          >

            {/* LEFT SIDE */}
            <div
              className="
                relative overflow-hidden
                border-b border-white/[0.06]
                p-8

                md:p-12

                lg:border-b-0
                lg:border-r
                lg:border-white/[0.06]
              "
            >

              {/* BIG GLOW */}
              <div
                className="
                  absolute left-[-10%] top-[20%]
                  h-[400px] w-[400px]
                  rounded-full
                "
                style={{
                  background:
                    "radial-gradient(circle, rgba(190,242,100,0.14), transparent 72%)",
                  filter: "blur(100px)",
                }}
              />

              {/* LABEL */}
              <div
                className="
                  relative z-10 mb-8 inline-flex
                  items-center gap-3
                  rounded-full
                  border border-lime-300/10
                  bg-lime-300/5
                  px-5 py-3
                "
              >

                <div className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_16px_rgba(190,242,100,1)]" />

                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.24em]
                    text-lime-100
                  "
                >
                  BOOK A CALL
                </span>
              </div>

              {/* HEADING */}
              <h2
                className="
                  relative z-10
                  max-w-lg
                  text-[3rem]
                  font-semibold
                  leading-[0.95]
                  tracking-[-0.06em]

                  sm:text-[5rem]

                  lg:text-[5.5rem]
                "
              >
                Let’s Connect
                <br />

                <span
                  className="
                    bg-gradient-to-b
                    from-white
                    to-lime-200
                    bg-clip-text
                    text-transparent
                  "
                >
                  And Talk.
                </span>
              </h2>

              {/* TEXT */}
              <p
                className="
                  relative z-10 mt-8
                  max-w-md
                  text-[15px]
                  leading-[1.9]
                  text-white/45
                "
              >
                Schedule a strategy session and let’s
                break down your current content,
                your offer, and how we can scale
                your YouTube presence.
              </p>

              {/* INFO */}
              <div className="relative z-10 mt-12 space-y-5">

                {/* ITEM */}
                <div
                  className="
                    flex items-center gap-4
                    rounded-[22px]
                    border border-white/[0.05]
                    bg-white/[0.03]
                    p-5
                  "
                >

                  <div
                    className="
                      flex h-14 w-14
                      items-center justify-center
                      rounded-[18px]
                      border border-lime-300/10
                      bg-lime-300/5
                    "
                  >
                    <Clock3 className="h-6 w-6 text-lime-200" />
                  </div>

                  <div>
                    <h4 className="font-medium">
                      30 Minute Strategy Call
                    </h4>

                    <p className="mt-1 text-sm text-white/45">
                      Personalized growth roadmap.
                    </p>
                  </div>
                </div>

                {/* ITEM */}
                <div
                  className="
                    flex items-center gap-4
                    rounded-[22px]
                    border border-white/[0.05]
                    bg-white/[0.03]
                    p-5
                  "
                >

                  <div
                    className="
                      flex h-14 w-14
                      items-center justify-center
                      rounded-[18px]
                      border border-lime-300/10
                      bg-lime-300/5
                    "
                  >
                    <Video className="h-6 w-6 text-lime-200" />
                  </div>

                  <div>
                    <h4 className="font-medium">
                      Google Meet Session
                    </h4>

                    <p className="mt-1 text-sm text-white/45">
                      Fully remote & easy onboarding.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative p-4 md:p-8">

              {/* CALENDLY WRAP */}
              <div
                className="
                  relative overflow-hidden
                  rounded-[32px]
                  border border-white/[0.06]
                  bg-black/30
                  backdrop-blur-3xl
                "
              >

                {/* CALENDLY GLOW */}
                <div
                  className="
                    absolute inset-0
                  "
                  style={{
                    background: `
                      radial-gradient(
                        circle at top,
                        rgba(190,242,100,0.08),
                        transparent 72%
                      )
                    `,
                  }}
                />

                {/* TOP BAR */}
                <div
                  className="
                    relative z-10 flex items-center
                    justify-between
                    border-b border-white/[0.06]
                    px-6 py-5
                  "
                >

                  <div className="flex items-center gap-3">

                    <div
                      className="
                        flex h-11 w-11
                        items-center justify-center
                        rounded-full
                        bg-lime-300 text-black
                      "
                    >
                      <CalendarDays className="h-5 w-5" />
                    </div>

                    <div>
                      <h4 className="font-medium">
                        Free Strategy Session
                      </h4>

                      <p className="text-sm text-white/45">
                        Calendly Booking
                      </p>
                    </div>
                  </div>

                  <div
                    className="
                      rounded-full
                      border border-lime-300/10
                      bg-lime-300/5
                      px-4 py-2
                    "
                  >
                    <span
                      className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-lime-100
                      "
                    >
                      LIVE
                    </span>
                  </div>
                </div>

                {/* CALENDLY */}
                <div className="relative z-10 h-[700px] w-full">

                  <iframe
                    src="https://calendly.com/m-faizurrehman-crypto/30min"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    className="rounded-b-[32px]"
                  />
                </div>
              </div>

              {/* FLOAT BUTTON */}
              <button
                className="
                  group absolute bottom-10 right-10
                  hidden items-center gap-3
                  rounded-full
                  border border-lime-300/10
                  bg-lime-300 px-6 py-4
                  transition-all duration-500

                  hover:scale-[1.03]

                  md:flex
                "
              >

                <span
                  className="
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-black
                  "
                >
                  Start Scaling
                </span>

                <div
                  className="
                    flex h-9 w-9
                    items-center justify-center
                    rounded-full
                    bg-black text-white
                    transition-all duration-500

                    group-hover:rotate-45
                  "
                >
                  <ArrowRight className="h-4 w-4" />
                </div>
              </button>
            </div>
          </div>

          {/* EDGE LIGHT */}
          <div
            className="
              absolute inset-0 rounded-[42px]
              border border-white/[0.03]
            "
          />
        </div>
      </div>
    </section>
  );
};

export default YtCalendly;