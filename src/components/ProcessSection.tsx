
"use client";

import { motion } from "motion/react";
import {
  SectionLabel,
  AmberDot,
  ConstructionLine,
} from "@/components/DraftingElements";
import {
  fadeUp,
  fadeIn,
  staggerChildren,
  VIEWPORT_ONCE,
} from "@/lib/animations";

const STAGES = [
  {
    number: "01",
    title: "Understand",
    subtitle: "Start with the problem",
    description:
      "Before thinking about the solution, I try to understand the problem. What are we trying to solve, who is it for, and what would make the result genuinely useful?",
    details: [
      "Problem understanding",
      "Requirements gathering",
      "Breaking down ideas",
      "Defining priorities",
    ],
  },
  {
    number: "02",
    title: "Explore",
    subtitle: "Find a way forward",
    description:
      "There is rarely just one way to build something. I explore possible approaches, learn what I need, and choose tools and technologies that make sense for the problem.",
    details: [
      "Exploring solutions",
      "Technology selection",
      "Planning architecture",
      "Learning as needed",
    ],
  },
  {
    number: "03",
    title: "Build",
    subtitle: "Turn ideas into reality",
    description:
      "This is where ideas take shape. I build incrementally, connect the pieces, experiment with different approaches, and work through challenges as they come up.",
    details: [
      "Frontend development",
      "Backend development",
      "API integration",
      "Problem solving",
    ],
  },
  {
    number: "04",
    title: "Improve",
    subtitle: "Make it work better",
    description:
      "Getting something working is only part of the job. I test, debug, refine the experience, and look for opportunities to make the solution more reliable and maintainable.",
    details: [
      "Testing and debugging",
      "Handling edge cases",
      "Performance refinement",
      "Continuous learning",
    ],
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="relative overflow-hidden py-24 md:py-36"
      style={{ backgroundColor: "#2A2A2A" }}
    >
      {/* Subtle gradient separator at top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(192,192,192,0.1), transparent)",
        }}
      />

      {/* Large background number */}
      <div
        className="absolute top-12 right-8 md:right-16 select-none pointer-events-none"
        aria-hidden="true"
      >
        <span
          className="font-mono text-[10rem] md:text-[14rem] font-light leading-none"
          style={{ color: "rgba(192,192,192,0.025)" }}
        >
          05
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section header */}
        <motion.div
          className="mb-16 md:mb-24"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          <motion.div variants={fadeIn}>
            <SectionLabel number="04" label="My Process" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mt-6 text-3xl md:text-5xl xl:text-6xl font-light leading-tight"
            style={{ color: "#C0C0C0", letterSpacing: "-0.02em" }}
          >
            How I work.
          </motion.h2>
        </motion.div>

        {/* Process stages */}
        <div className="relative">
          {/* Vertical connector line — desktop only */}
          <div
            className="absolute left-[2.25rem] top-8 bottom-8 w-px hidden md:block"
            style={{
              background:
                "linear-gradient(180deg, rgba(213,133,31,0.3) 0%, rgba(213,133,31,0.1) 100%)",
            }}
          />

          <motion.div
            className="space-y-12 md:space-y-0"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
          >
            {STAGES.map((stage) => (
              <motion.div
                key={stage.number}
                variants={fadeUp}
                className="relative grid grid-cols-1 md:grid-cols-[5rem_1fr] gap-6 md:gap-10 md:pb-16 last:pb-0"
              >
                {/* Stage number */}
                <div className="flex md:flex-col items-center gap-4 md:gap-0 md:items-center">
                  <div
                    className="relative z-10 flex items-center justify-center w-9 h-9 rounded-full flex-shrink-0 transition-colors duration-300"
                    style={{
                      border: "1px solid rgba(213,133,31,0.5)",
                      backgroundColor: "#2A2A2A",
                    }}
                  >
                    <span
                      className="font-mono text-xs"
                      style={{ color: "#D5851F" }}
                    >
                      {stage.number}
                    </span>
                  </div>
                </div>

                {/* Stage content */}
                <div className="flex flex-col gap-5">
                  {/* Title and subtitle */}
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3
                        className="text-xl md:text-2xl font-light"
                        style={{
                          color: "#C0C0C0",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {stage.title}
                      </h3>
                    </div>

                    <p
                      className="font-mono text-xs tracking-widest"
                      style={{
                        color: "#D5851F",
                        opacity: 0.7,
                        letterSpacing: "0.15em",
                      }}
                    >
                      {stage.subtitle}
                    </p>
                  </div>

                  {/* Annotation divider */}
                  <div className="flex items-center gap-3">
                    <ConstructionLine length={24} opacity={0.2} />
                    <AmberDot size={3} />
                  </div>

                  {/* Description */}
                  <p
                    className="text-sm md:text-base leading-relaxed max-w-lg"
                    style={{ color: "#A0A0A0" }}
                  >
                    {stage.description}
                  </p>

                  {/* Detail tags */}
                  <div className="flex flex-wrap gap-2">
                    {stage.details.map((detail) => (
                      <span
                        key={detail}
                        className="font-mono text-xs px-3 py-1"
                        style={{
                          color: "#8A8A8A",
                          border: "1px solid rgba(192,192,192,0.08)",
                          letterSpacing: "0.08em",
                        }}
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
