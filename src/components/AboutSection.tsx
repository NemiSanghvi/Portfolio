"use client";

import { motion } from "motion/react";
import {
  SectionLabel,
  CornerBracket,
  AmberDot,
  ConstructionLine,
  CrossMark,
} from "@/components/DraftingElements";
import { fadeUp, fadeIn, staggerChildren, slideInRight, VIEWPORT_ONCE } from "@/lib/animations";

const highlights = [
  {
    label: "Philosophy",
    value: "Code that reads like good prose — clear, intentional, maintainable.",
  },
  {
    label: "Background",
    value:
      "Started with curiosity, stayed for the craft. Self-taught in the gaps between formal study.",
  },
  {
    label: "Approach",
    value:
      "Design-aware engineering. I care about how things look as much as how they work.",
  },
  {
    label: "Currently",
    value:
      "Open to interesting Full Stack and full-stack opportunities. Building my portfolio in public.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 md:py-36"
      style={{ backgroundColor: "#2A2A2A" }}
    >
      {/* Subtle horizontal rule at top — separating from hero */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(192,192,192,0.15), transparent)" }}
      />

      {/* Background grid annotation — very subtle */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(192,192,192,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(192,192,192,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Corner accent decorations */}
      <div className="absolute top-8 right-8 hidden md:block">
        <CornerBracket size={32} flip opacity={0.2} />
      </div>
      <div className="absolute bottom-8 left-8 hidden md:block" style={{ transform: "rotate(180deg)" }}>
        <CornerBracket size={32} opacity={0.2} />
      </div>

      {/* Cross registration marks */}
      <div className="absolute top-20 left-24 hidden lg:block">
        <CrossMark size={20} opacity={0.15} />
      </div>
      <div className="absolute bottom-20 right-24 hidden lg:block">
        <CrossMark size={20} opacity={0.15} />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section label */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="mb-14"
        >
          <SectionLabel number="02" label="About Me" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left column — headline and intro */}
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
          >
            {/* Large editorial headline */}
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl xl:text-6xl font-light leading-[1.1] mb-8"
              style={{ color: "#C0C0C0", letterSpacing: "-0.02em" }}
            >
              Ideas deserve
              <br />
              <em
                className="not-italic"
                style={{ color: "#D5851F", fontStyle: "italic" }}
              >
                precise
              </em>{" "}
              execution.
            </motion.h2>

            {/* Construction line connector */}
            <motion.div variants={fadeIn} className="mb-8 flex items-center gap-4">
              <ConstructionLine length={48} opacity={0.25} />
              <AmberDot size={5} />
              <ConstructionLine length={24} opacity={0.15} />
            </motion.div>

            {/* Intro paragraph */}
            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg leading-relaxed mb-6"
              style={{ color: "#8A8A8A" }}
            >
              [PLACEHOLDER] I&rsquo;m a Full Stack developer who enjoys working at the intersection of
              engineering and design. I turn ideas into functional, visually engaging digital
              experiences that feel as good to use as they look.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg leading-relaxed"
              style={{ color: "#6A6A6A" }}
            >
              [PLACEHOLDER] My process is deliberate — I sketch before I code, question before I
              build, and iterate until the details are right.
            </motion.p>
          </motion.div>

          {/* Right column — portrait placeholder + highlights */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="flex flex-col gap-8"
          >
            {/* Portrait placeholder */}
            <div className="relative w-full max-w-xs mx-auto lg:mx-0">
              <div
                className="relative aspect-[4/5] rounded-sm overflow-hidden"
                style={{
                  border: "1px solid rgba(192,192,192,0.15)",
                  backgroundColor: "#333",
                }}
              >
                {/* Placeholder pattern */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ color: "#5A5A5A" }}
                >
                  <div className="text-center">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      className="mx-auto mb-3 opacity-40"
                    >
                      <circle cx="24" cy="18" r="8" stroke="#C0C0C0" strokeWidth="1" />
                      <path
                        d="M6 44 C6 34 42 34 42 44"
                        stroke="#C0C0C0"
                        strokeWidth="1"
                        fill="none"
                      />
                    </svg>
                    <p className="font-mono text-xs tracking-wider" style={{ color: "#4A4A4A" }}>
                      Portrait
                      <br />
                      [Placeholder]
                    </p>
                  </div>
                </div>
              </div>
              {/* Corner brackets on portrait */}
              <div className="absolute -top-2 -left-2">
                <CornerBracket size={16} opacity={0.5} color="#D5851F" />
              </div>
              <div className="absolute -bottom-2 -right-2" style={{ transform: "rotate(180deg)" }}>
                <CornerBracket size={16} opacity={0.5} color="#D5851F" />
              </div>
              {/* Label below portrait */}
              <p
                className="mt-3 font-mono text-xs text-center tracking-widest"
                style={{ color: "#4A4A4A", letterSpacing: "0.15em" }}
              >
                Nemi Sanghvi — 2026
              </p>
            </div>
          </motion.div>
        </div>

        {/* Highlights grid */}
        <motion.div
          className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 gap-px"
          style={{ borderColor: "rgba(192,192,192,0.1)", border: "1px solid rgba(192,192,192,0.08)" }}
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              className="group p-6 md:p-8 transition-colors duration-300"
              style={{
                borderRight: i % 2 === 0 ? "1px solid rgba(192,192,192,0.08)" : "none",
                borderBottom:
                  i < highlights.length - 2
                    ? "1px solid rgba(192,192,192,0.08)"
                    : "none",
              }}
              whileHover={{ backgroundColor: "rgba(192,192,192,0.03)" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <AmberDot size={4} />
                <span
                  className="font-mono text-xs tracking-widest uppercase"
                  style={{ color: "#D5851F", letterSpacing: "0.2em" }}
                >
                  {item.label}
                </span>
              </div>
              <p
                className="text-sm md:text-base leading-relaxed"
                style={{ color: "#7A7A7A" }}
              >
                {item.value}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

