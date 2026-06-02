"use client";

import React from "react";

const reviews = [
    {
        name: "Jordan Feder",
        role: "VC at GE Ventures",
        review:
            "Exceptional quality and communication. The team delivered beyond expectations and significantly improved our conversion rates.",
        rating: 5,
    },
    {
        name: "Sarah Mitchell",
        role: "Content Strategist",
        review:
            "Everything feels premium. The attention to detail and execution quality is remarkable.",
        rating: 5,
    },
    {
        name: "Michael Reed",
        role: "Startup Founder",
        review:
            "Fast delivery, incredible design work, and a smooth process from start to finish.",
        rating: 5,
    },
    {
        name: "Emily Carter",
        role: "Marketing Director",
        review:
            "Their creative direction elevated our brand and helped us stand out in a crowded market.",
        rating: 5,
    },
    {
        name: "David Wilson",
        role: "Agency Owner",
        review:
            "Professional, responsive, and consistently delivers outstanding results.",
        rating: 5,
    },
    {
        name: "Jessica Lee",
        role: "Ecommerce Founder",
        review:
            "One of the best investments we've made. The impact on our business was immediate.",
        rating: 5,
    },
];

const YtTestimonials = () => {
    return (
        <section className="relative py-14 text-white sm:py-16 md:py-18 overflow-x-clip">

            {/* BACKGROUND */}
            <div className="absolute inset-0 pointer-events-none transform-gpu will-change-transform">

                {/* MASSIVE TOP ATMOSPHERE */}
                <div
                    className="absolute left-1/2 top-[-30%] h-[950px] w-[1800px] -translate-x-1/2"
                    style={{
                        background: `
 radial-gradient(
 ellipse at center,
 rgba(255,0,76,0.14) 0%,
 rgba(255,0,98,0.08) 18%,
 rgba(255,80,80,0.05) 34%,
 rgba(255,255,255,0.02) 48%,
 transparent 74%
 )
 `,
                        filter: "blur(90px)",
                        opacity: 0.9,
                    }}
                />

                {/* SECONDARY CLOUD */}
                <div
                    className="absolute left-1/2 top-[4%] h-[620px] w-[1200px] -translate-x-1/2"
                    style={{
                        background: `
 radial-gradient(
 ellipse,
 rgba(255,0,76,0.08),
 rgba(255,0,98,0.03),
 transparent 72%
 )
 `,
                        filter: "blur(90px)",
                    }}
                />

                {/* LEFT GLOW */}
                <div
                    className="absolute left-[-12%] top-[20%] h-[620px] w-[620px] rounded-full"
                    style={{
                        background: `
 radial-gradient(
 circle,
 rgba(255,0,98,0.08),
 rgba(255,0,76,0.03),
 transparent 72%
 )
 `,
                        filter: "blur(90px)",
                    }}
                />

                {/* RIGHT GLOW */}
                <div
                    className="absolute right-[-10%] top-[6%] h-[700px] w-[700px] rounded-full"
                    style={{
                        background: `
 radial-gradient(
 circle,
 rgba(255,60,60,0.08),
 rgba(255,0,76,0.03),
 transparent 72%
 )
 `,
                        filter: "blur(90px)",
                    }}
                />

                {/* CENTER LIGHT */}
                <div
                    className="absolute left-1/2 top-[34%] h-[260px] w-[700px] -translate-x-1/2"
                    style={{
                        background: `
 radial-gradient(
 ellipse,
 rgba(255,255,255,0.08),
 rgba(255,255,255,0.03),
 transparent 72%
 )
 `,
                        filter: "blur(90px)",
                        opacity: 0.7,
                    }}
                />

                {/* LIGHT STREAK */}
                <div
                    className="absolute left-[-8%] top-[40%] h-[180px] w-[760px] rotate-[16deg]"
                    style={{
                        background:
                            "linear-gradient(to right, transparent, rgba(255,0,76,0.06), transparent)",
                        filter: "blur(90px)",
                    }}
                />

                {/* ORBIT RINGS */}
                <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-400/[0.04]" />

                <div className="absolute left-1/2 top-1/2 h-[340px] w-[820px] -translate-x-1/2 -translate-y-1/2 rotate-[18deg] rounded-full border border-white/[0.03]" />

                {/* FLOATING PARTICLES */}
                <div className="absolute left-[16%] top-[68%] h-2 w-2 rounded-full bg-red-300 shadow-[0_0_20px_rgba(255,0,76,0.9)]" />

                <div className="absolute right-[18%] top-[28%] h-2.5 w-2.5 rounded-full bg-red-200 shadow-[0_0_24px_rgba(255,80,80,0.9)]" />

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
            <div className="relative z-20 mx-auto max-w-[1050px] px-5 text-center sm:px-8">

                {/* TOP */}
                <div className="mb-10">

                    {/* LABEL */}
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-400/10 bg-red-500/5 px-4 py-2 backdrop-blur-xl">

                        <div className="h-2 w-2 rounded-full bg-red-400 shadow-[0_0_14px_rgba(255,0,76,1)]" />

                        <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-red-100">
                            REVIEWS
                        </span>
                    </div>

                    {/* HEADING */}
                    <h2 className="text-[2.2rem] font-semibold leading-[1] tracking-[-0.05em] sm:text-[3rem] lg:text-[4rem]">
                        Trusted By
                        <span className="ml-3 inline-block font-serif italic font-normal text-red-100">
                            Happy Clients.
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-sm text-white/55 sm:text-base">
                        Real feedback from creators, founders, and brands who trust us to
                        deliver exceptional results.
                    </p>
                </div>


                <div className="relative mb-10 overflow-hidden rounded-[36px] border border-white/[0.06] bg-white/[0.03] p-8 backdrop-blur-3xl lg:p-12">

                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "radial-gradient(circle at top, rgba(255,0,76,0.12), transparent 70%)",
                        }}
                    />

                    <div className="relative z-10">

                        <div className="mb-5 flex justify-center gap-1 text-xl text-red-300">
                            ★★★★★
                        </div>

                        <blockquote className="mx-auto max-w-4xl text-center font-serif text-xl italic leading-relaxed text-white/90 lg:text-3xl">
                            “Exceptional quality and communication. The team delivered beyond expectations and significantly improved our conversion rates.”
                        </blockquote>

                        <div className="mt-8 text-center">
                            <h4 className="font-semibold">
                                Jordan Feder
                            </h4>
                            <p className="mt-1 text-sm text-white/45">
                                VC at GE Ventures
                            </p>
                        </div>

                    </div>

                </div>

                {/* REVIEW GRID */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-[28px] border border-white/[0.05] bg-white/[0.03] p-6 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-red-400/20 hover:bg-white/[0.05]"
                        >

                            <div
                                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                style={{
                                    background:
                                        "radial-gradient(circle at top, rgba(255,0,76,0.08), transparent 70%)",
                                }}
                            />

                            <div className="relative z-10">

                                <div className="mb-5 flex gap-1">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <span
                                            key={i}
                                            className="text-lg text-red-300"
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>

                                <p className="mb-8 text-sm leading-7 text-white/75 sm:text-base">
                                    "{review.review}"
                                </p>

                                <div className="flex items-center gap-4">

                                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sm font-semibold">
                                        {review.name.charAt(0)}
                                    </div>

                                    <div>
                                        <h4 className="font-medium">
                                            {review.name}
                                        </h4>

                                        <p className="text-xs text-white/45">
                                            {review.role}
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>
                    ))}
                </div>

                <div className="mt-14 flex flex-wrap items-center justify-center gap-8 border-t border-white/[0.05] pt-8">

  <div>
    <span className="text-3xl font-semibold">4.9★</span>
    <p className="text-xs text-white/45">
      Average Rating
    </p>
  </div>

  <div>
    <span className="text-3xl font-semibold">120+</span>
    <p className="text-xs text-white/45">
      Verified Reviews
    </p>
  </div>

  <div>
    <span className="text-3xl font-semibold">98%</span>
    <p className="text-xs text-white/45">
      Satisfaction Rate
    </p>
  </div>

</div>
            </div>
        </section>
    );
};

export default YtTestimonials;