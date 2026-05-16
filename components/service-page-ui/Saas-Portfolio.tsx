"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  Play,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const projects = [
  {
    title: "AI CRM Platform",
    category: "Product Explainer",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "SaaS Analytics",
    category: "Motion Ad Creative",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Startup Automation",
    category: "Paid Ad Video",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Growth Dashboard",
    category: "UI Showcase",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
];

const SaasPortfolio = () => {
  return (
    <section
      className="
        relative 
        
        py-24 text-white

        md:py-32
      "
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none transform-gpu will-change-transform">

        

        {/* MASSIVE PURPLE ATMOSPHERE */}
        <div
          className="
            absolute left-1/2 top-[-22%]
            h-[1200px] w-[2400px]
            -translate-x-1/2
          "
          style={{
            background: `
              radial-gradient(
                ellipse at center,
                rgba(139,92,246,0.18) 0%,
                rgba(59,130,246,0.10) 24%,
                rgba(255,255,255,0.03) 48%,
                transparent 72%
              )
            `,
            filter: "blur(50px)",
          }}
        />

        {/* LEFT GLOW */}
        <div
          className="
            absolute left-[-10%] top-[20%]
            h-[900px] w-[900px]
            rounded-full
          "
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.10), transparent 72%)",
            filter: "blur(50px)",
          }}
        />

        {/* RIGHT GLOW */}
        <div
          className="
            absolute right-[-10%] top-[5%]
            h-[900px] w-[900px]
            rounded-full
          "
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.12), transparent 72%)",
            filter: "blur(50px)",
          }}
        />

        {/* LIGHT BEAM */}
        <div
          className="
            absolute left-[-5%] top-[42%]
            h-[220px] w-[120%]
            rotate-[-8deg]
          "
          style={{
            background: `
              linear-gradient(
                to right,
                transparent,
                rgba(139,92,246,0.16),
                rgba(59,130,246,0.08),
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
          className="absolute inset-0 opacity-[0.12] mix-blend-soft-light"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
          }}
        />

        
      </div>

      {/* CONTENT */}
      <div className="relative z-20 mx-auto max-w-[1650px] px-5 sm:px-8 lg:px-10">

        {/* TOP */}
        <div
          className="
            mb-16 flex flex-col gap-10

            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >

          {/* LEFT */}
          <div>

            {/* LABEL */}
            <div
              className="
                mb-6 inline-flex items-center gap-3
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
                  tracking-[0.24em]
                  text-white/75
                "
              >
                OUR WORK
              </span>
            </div>

            {/* HEADING */}
            <h2
              className="
                max-w-5xl
                text-[3rem]
                font-semibold
                leading-[0.95]
                tracking-[-0.05em]

                sm:text-[5rem]

                lg:text-[6rem]
              "
            >
              Our Work
              <br />

              
            </h2>

            {/* TEXT */}
            <p
              className="
                mt-7 max-w-2xl
                text-[15px]
                leading-[1.9]
                text-white/45

                sm:text-[17px]
              "
            >
              Industry-leading production.
            </p>
          </div>

          {/* CONTROLS */}
          <div className="flex items-center gap-4">

            <button
              className="
                flex h-16 w-16
                items-center justify-center
                rounded-full
                border border-white/[0.08]
                bg-white/[0.03]
                backdrop-blur-xl
                transition-all duration-500

                hover:border-violet-400/20
                hover:bg-violet-500/10
              "
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              className="
                flex h-16 w-16
                items-center justify-center
                rounded-full
                border border-white/[0.08]
                bg-white/[0.03]
                backdrop-blur-xl
                transition-all duration-500

                hover:border-blue-400/20
                hover:bg-blue-500/10
              "
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* PORTFOLIO */}
        <div
          className="
            grid gap-6

            md:grid-cols-2

            xl:grid-cols-4
          "
        >

          {projects.map((project, index) => (
            <div
              key={index}
              className="
                group relative overflow-hidden
                rounded-[34px]
                border border-white/[0.06]
                bg-white/[0.03]
                backdrop-blur-3xl
                transition-all duration-700

                hover:-translate-y-3
                hover:border-violet-400/15
              "
            >

              {/* IMAGE */}
              <div
                className="
                  relative aspect-[0.72]
                  overflow-hidden
                "
              >

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="
                    object-cover
                    transition-all duration-1000

                    group-hover:scale-110
                  "
                />

                {/* DARK OVERLAY */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-black via-black/20 to-transparent
                  "
                />

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
                        circle at top,
                        rgba(139,92,246,0.22),
                        transparent 72%
                      )
                    `,
                  }}
                />

                {/* TOP BADGE */}
                <div
                  className="
                    absolute left-5 top-5
                    rounded-full
                    border border-white/[0.08]
                    bg-black/40
                    px-4 py-2
                    backdrop-blur-xl
                  "
                >

                  <span
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-white/80
                    "
                  >
                    {project.category}
                  </span>
                </div>

                {/* PLAY BUTTON */}
                <div
                  className="
                    absolute left-1/2 top-1/2
                    flex h-20 w-20
                    -translate-x-1/2 -translate-y-1/2
                    items-center justify-center
                    rounded-full
                    border border-white/[0.08]
                    bg-white/[0.06]
                    backdrop-blur-2xl
                    transition-all duration-500

                    group-hover:scale-110
                  "
                >

                  <div
                    className="
                      absolute inset-0 rounded-full
                      bg-violet-500/20 blur-2xl
                    "
                  />

                  <Play className="relative z-10 ml-1 h-7 w-7 fill-white text-white" />
                </div>

                {/* BOTTOM CONTENT */}
                <div
                  className="
                    absolute bottom-0 left-0
                    w-full p-6
                  "
                >

                  <div
                    className="
                      flex items-end
                      justify-between gap-5
                    "
                  >

                    <div>
                      <h3
                        className="
                          text-[1.7rem]
                          font-semibold
                          leading-[1]
                          tracking-[-0.04em]
                        "
                      >
                        {project.title}
                      </h3>

                      <p
                        className="
                          mt-3
                          text-sm
                          text-white/55
                        "
                      >
                        Premium SaaS Creative
                      </p>
                    </div>

                    {/* ARROW */}
                    <div
                      className="
                        flex h-12 w-12
                        shrink-0
                        items-center justify-center
                        rounded-full
                        border border-white/[0.08]
                        bg-white/[0.05]
                        transition-all duration-500

                        group-hover:rotate-45
                        group-hover:bg-violet-500
                      "
                    >
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* EDGE LIGHT */}
              <div
                className="
                  absolute inset-0 rounded-[34px]
                  border border-white/[0.03]
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SaasPortfolio;