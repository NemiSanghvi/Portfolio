"use client";

import { motion } from "motion/react";
import { SectionLabel, AmberDot, ConstructionLine } from "@/components/DraftingElements";
import { fadeUp, fadeIn, staggerChildren, VIEWPORT_ONCE } from "@/lib/animations";

const STAGES = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Understand the problem",
    description:
      "Ask questions before touching a keyboard. What is the goal? Who will use this? What does success look like? Good engineering starts with sharp thinking.",
    details: ["User research", "Problem framing", "Competitive analysis", "Requirements mapping"],
    svgPath: "M 10 40 C 40 10, 80 10, 100 40 C 120 70, 90 90, 60 70 C 30 50, 20 70, 10 40 Z",
  },
  {
    number: "02",
    title: "Design",
    subtitle: "Plan the experience",
    description:
      "Sketch the structure before writing any code. Think in components, flows and visual hierarchy. Constraint leads to clarity.",
    details: ["Wireframing", "Component architecture", "Accessibility planning", "Responsive strategy"],
    svgPath: "M 10 10 L 90 10 L 100 90 L 0 90 Z",
  },
  {
    number: "03",
    title: "Develop",
    subtitle: "Build the solution",
    description:
      "Write code that communicates intent. Prioritise maintainability alongside functionality. Build in layers, test as you go.",
    details: ["Component development", "State management", "API integration", "Performance tuning"],
    svgPath: "M 50 5 L 95 90 L 5 90 Z",
  },
  {
    number: "04",
    title: "Refine",
    subtitle: "Test and improve",
    description:
      "Ship, then listen. Gather feedback, measure what matters, and make meaningful iterations. The best work is never truly finished.",
    details: ["Cross-browser testing", "Lighthouse audit", "User feedback", "Continuous improvement"],
    svgPath: "M 50 5 L 95 50 L 50 95 L 5 50 Z",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="relative overflow-hidden py-24 md:py-36"
      style={{ backgroundColor: "#252525" }}
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

        {/* Process stages — connected with construction lines */}
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
                {/* Stage number with circle — on the vertical line */}
                <div className="flex md:flex-col items-center gap-4 md:gap-0 md:items-center">
                  <div
                    className="relative z-10 flex items-center justify-center w-9 h-9 rounded-full flex-shrink-0 transition-colors duration-300"
                    style={{
                      border: "1px solid rgba(213,133,31,0.5)",
                      backgroundColor: "#252525",
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
                  {/* Title row */}
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3
                        className="text-xl md:text-2xl font-light"
                        style={{ color: "#C0C0C0", letterSpacing: "-0.01em" }}
                      >
                        {stage.title}
                      </h3>
                    </div>
                    <p
                      className="font-mono text-xs tracking-widest"
                      style={{ color: "#D5851F", opacity: 0.7, letterSpacing: "0.15em" }}
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
                    style={{ color: "#7A7A7A" }}
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
                          color: "#5A5A5A",
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

