"use client";

import { motion } from "motion/react";
import { SectionLabel, AmberDot, ConstructionLine } from "@/components/DraftingElements";
import { fadeUp, fadeIn, staggerChildren, scaleIn, VIEWPORT_ONCE } from "@/lib/animations";

// Placeholder interest cards — each with a different visual treatment
const INTERESTS = [
  {
    id: "photography",
    label: "Photography",
    note: "Capturing light & texture",
    body: "[PLACEHOLDER] Finding geometry in everyday scenes. Street photography with a preference for long shadows and quiet moments.",
    accent: "Analogue & Digital",
    size: "large",
  },
  {
    id: "music",
    label: "Music",
    note: "Listening & occasionally playing",
    body: "[PLACEHOLDER] Everything from ambient soundscapes to jazz. Music as background texture for deep work.",
    accent: "Ambient · Jazz",
    size: "small",
  },
  {
    id: "reading",
    label: "Reading",
    note: "Non-fiction & good prose",
    body: "[PLACEHOLDER] Books on design, psychology, systems thinking and the occasional novel that refuses to let go.",
    accent: "Design · Systems · Fiction",
    size: "small",
  },
  {
    id: "building",
    label: "Building Things",
    note: "Hardware & side projects",
    body: "[PLACEHOLDER] The satisfaction of making something physical. Tinkering with electronics, 3D printing and understanding how things work mechanically.",
    accent: "Electronics · Hardware",
    size: "medium",
  },
  {
    id: "coffee",
    label: "Coffee",
    note: "A ritual, not a habit",
    body: "[PLACEHOLDER] Manual brewing as a meditative practice. Obsessive about grind size, water temperature and the smell of a fresh bag.",
    accent: "Pour-over · Espresso",
    size: "medium",
  },
];

// Scrapbook-style photo placeholder
function PhotoPlaceholder({
  label,
  rotate = 0,
  width = 200,
  height = 160,
}: {
  label: string;
  rotate?: number;
  width?: number;
  height?: number;
}) {
  return (
    <div
      className="relative flex-shrink-0"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div
        className="relative flex items-center justify-center"
        style={{
          width,
          height,
          backgroundColor: "#333",
          border: "1px solid rgba(192,192,192,0.12)",
          boxShadow: "4px 6px 20px rgba(0,0,0,0.4)",
        }}
      >
        {/* Photo placeholder pattern */}
        <div className="text-center">
          <svg
            width="36"
            height="28"
            viewBox="0 0 36 28"
            fill="none"
            className="mx-auto mb-2 opacity-25"
          >
            <rect width="36" height="28" stroke="#C0C0C0" strokeWidth="0.5" />
            <circle cx="9" cy="9" r="5" stroke="#C0C0C0" strokeWidth="0.5" />
            <path
              d="M 0 18 L 12 12 L 22 20 L 28 15 L 36 22 L 36 28 L 0 28 Z"
              fill="rgba(192,192,192,0.1)"
            />
          </svg>
          <p
            className="font-mono text-[9px] tracking-wider"
            style={{ color: "#4A4A4A" }}
          >
            {label}
          </p>
        </div>
      </div>
      {/* "Tape" strip at top */}
      <div
        className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-3"
        style={{ backgroundColor: "rgba(213,133,31,0.2)", opacity: 0.8 }}
      />
    </div>
  );
}

export default function BeyondSection() {
  return (
    <section
      id="beyond"
      className="relative overflow-hidden py-24 md:py-36"
      style={{ backgroundColor: "#2A2A2A" }}
    >
      {/* Top separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(213,133,31,0.2), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section header */}
        <motion.div
          className="mb-16"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          <motion.div variants={fadeIn}>
            <SectionLabel number="06" label="Fun Beyond Work" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-6 text-3xl md:text-5xl xl:text-6xl font-light leading-tight"
            style={{ color: "#C0C0C0", letterSpacing: "-0.02em" }}
          >
            The rest of
            <br />
            <span style={{ color: "#6A6A6A" }}>
              the{" "}
              <em className="not-italic" style={{ color: "#D5851F", fontStyle: "italic" }}>
                picture.
              </em>
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-lg text-sm md:text-base leading-relaxed"
            style={{ color: "#5A5A5A" }}
          >
            [PLACEHOLDER] A developer is more than their stack. These are some of the things that
            fill the hours outside of screens — and quietly inform how I approach my work.
          </motion.p>
        </motion.div>

        {/* Scrapboard / collage-style photo row */}
        <motion.div
          className="relative flex items-end gap-6 mb-16 overflow-x-auto pb-4 hide-scrollbar"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          <motion.div variants={scaleIn}>
            <PhotoPlaceholder label="[Photo]" rotate={-2} width={220} height={170} />
          </motion.div>
          <motion.div variants={scaleIn}>
            <PhotoPlaceholder label="[Photo]" rotate={1.5} width={160} height={130} />
          </motion.div>
          <motion.div variants={scaleIn}>
            <PhotoPlaceholder label="[Photo]" rotate={-1} width={240} height={190} />
          </motion.div>
          <motion.div variants={scaleIn}>
            <PhotoPlaceholder label="[Photo]" rotate={2} width={160} height={130} />
          </motion.div>

          {/* Annotation aside the photos */}
          <div
            className="flex-shrink-0 hidden md:flex flex-col justify-center ml-6"
            aria-hidden="true"
          >
            <div
              className="font-mono text-xs leading-loose"
              style={{ color: "#4A4A4A", writingMode: "vertical-rl" }}
            >
              [Replace with actual photos]
            </div>
          </div>
        </motion.div>

        {/* Interest cards — editorial mixed grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          {INTERESTS.map((interest, i) => (
            <motion.div
              key={interest.id}
              variants={fadeUp}
              className={`relative p-6 ${
                i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
              style={{
                border: "1px solid rgba(192,192,192,0.1)",
                backgroundColor: "rgba(255,255,255,0.02)",
              }}
              whileHover={{
                backgroundColor: "rgba(255,255,255,0.04)",
                transition: { duration: 0.3 },
              }}
            >
              {/* Corner tick */}
              <div
                className="absolute top-0 right-0 w-4 h-4 border-t border-r"
                style={{ borderColor: "rgba(213,133,31,0.25)" }}
              />

              {/* Interest header */}
              <div className="flex items-center gap-2 mb-1">
                <AmberDot size={4} />
                <span
                  className="font-mono text-xs tracking-widest uppercase"
                  style={{ color: "#D5851F", opacity: 0.8, letterSpacing: "0.18em" }}
                >
                  {interest.label}
                </span>
              </div>

              <p
                className="font-mono text-[10px] mb-4 tracking-wider"
                style={{ color: "#4A4A4A" }}
              >
                {interest.note}
              </p>

              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "#6A6A6A" }}
              >
                {interest.body}
              </p>

              <div className="flex items-center gap-2">
                <ConstructionLine length={20} opacity={0.2} />
                <span
                  className="font-mono text-[9px] tracking-widest"
                  style={{ color: "#3A3A3A" }}
                >
                  {interest.accent}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing note */}
        <motion.p
          className="mt-12 font-mono text-xs text-center"
          style={{ color: "#3A3A3A", letterSpacing: "0.1em" }}
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          [PLACEHOLDER — This section will be personalised with Nemi&rsquo;s actual content]
        </motion.p>
      </div>
    </section>
  );
}

