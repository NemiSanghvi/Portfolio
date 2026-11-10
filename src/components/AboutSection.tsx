"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { assetPath } from "@/lib/paths";

import {
  SectionLabel,
  CornerBracket,
  AmberDot,
  ConstructionLine,
  CrossMark,
} from "@/components/DraftingElements";

import {
  fadeUp,
  fadeIn,
  staggerChildren,
  slideInRight,
  portraitHover,
  portraitOverlay,
  VIEWPORT_ONCE,
} from "@/lib/animations";

const highlights = [
  {
    label: "What drives me",
    value:
      "The best part of building something is seeing it make a difference in someone's day. I enjoy turning ideas into useful, real-world applications.",
  },
  {
    label: "My way of learning",
    value:
      "I'm a hands-on learner. I learn by building, breaking things, figuring out why they broke, and finding a better way to make them work.",
  },
  {
    label: "How I approach things",
    value:
      "I adapt, explore different approaches, and enjoy finding solutions when things don't go as planned.",
  },
  {
    label: "Beyond the screen",
    value:
      "Outside development you will find me travelling, discovering new places, and experiencing different perspectives.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 md:py-36"
      style={{ backgroundColor: "#2A2A2A" }}
    >
      {/* Top separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(192,192,192,0.15), transparent)",
        }}
      />

      {/* Background grid */}
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

      {/* Corner decorations */}
      <div className="absolute top-8 right-8 hidden md:block">
        <CornerBracket size={32} flip opacity={0.2} />
      </div>

      <div
        className="absolute bottom-8 left-8 hidden md:block"
        style={{ transform: "rotate(180deg)" }}
      >
        <CornerBracket size={32} opacity={0.2} />
      </div>

      {/* Registration marks */}
      <div className="absolute top-20 left-24 hidden lg:block">
        <CrossMark size={20} opacity={0.15} />
      </div>

      <div className="absolute bottom-20 right-24 hidden lg:block">
        <CrossMark size={20} opacity={0.15} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
        {/* Section label */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="mb-14"
        >
          <SectionLabel number="01" label="About Me" />
        </motion.div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left column */}
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
          >
            {/* Headline */}
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl xl:text-6xl font-light leading-[1.1] mb-8"
              style={{
                color: "#C0C0C0",
                letterSpacing: "-0.02em",
              }}
            >
              I build with
              <br />
              <em
                className="not-italic"
                style={{
                  color: "#D5851F",
                  fontStyle: "italic",
                }}
              >
                precise
              </em>{" "}
              execution.
            </motion.h2>

            {/* Construction line */}
            <motion.div
              variants={fadeIn}
              className="mb-8 flex items-center gap-4"
            >
              <ConstructionLine length={48} opacity={0.25} />
              <AmberDot size={5} />
              <ConstructionLine length={24} opacity={0.15} />
            </motion.div>

            {/* Introduction */}
            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg leading-relaxed mb-6"
              style={{ color: "#8A8A8A" }}
            >
              I&apos;m a Full Stack developer who enjoys working at the
              intersection of engineering and design. I&apos;m someone who&apos;s been
              curious about technology for as long as I can remember. What
              started as an early interest eventually led me to Computer Science
              and into the world of Full Stack development. I enjoy building
              applications from the ground up, especially when there&apos;s a real
              problem to solve and an idea to bring to life.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg leading-relaxed"
              style={{ color: "#6A6A6A" }}
            >
              I have a bit of a problem: the more I learn, the more I want to
              learn. Every new concept opens up ten more. But that&apos;s the fun of it —
              there&apos;s always something new to explore, break, understand, and
              build.
            </motion.p>
          </motion.div>

          {/* Right column */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="flex flex-col gap-8"
          >
            <div className="w-full max-w-xs mx-auto lg:mx-0">
              {/* Portrait */}
              <motion.div
                className="relative group"
                initial="rest"
                whileHover="hover"
                whileFocus="hover"
              >
                <div className="relative aspect-[4/5] rounded-sm overflow-hidden bg-[#222]">
                  {/* Animated image */}
                  <motion.div
                    className="absolute inset-0"
                    variants={portraitHover}
                  >
                    <Image
                      src={assetPath("/images/image.png")}
                      alt="Nemi Sanghvi"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 320px"
                      className="object-cover"
                    />
                  </motion.div>

                  {/* Image overlay */}
                  <motion.div
                    variants={portraitOverlay}
                    className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/30 via-transparent to-transparent"
                  />
                </div>

                {/* Top corner bracket */}
                <div className="absolute -top-2 -left-2 pointer-events-none z-10">
                  <CornerBracket size={16} opacity={0.6} color="#D5851F" />
                </div>

                {/* Bottom corner bracket */}
                <div
                  className="absolute -bottom-2 -right-2 pointer-events-none z-10"
                  style={{ transform: "rotate(180deg)" }}
                >
                  <CornerBracket size={16} opacity={0.6} color="#D5851F" />
                </div>
              </motion.div>

              {/* Portrait label */}
              <p
                className="mt-5 pt-2 font-mono text-xs text-center tracking-widest"
                style={{
                  color: "#6A6A6A",
                  letterSpacing: "0.15em",
                }}
              >
                Nemi Sanghvi
              </p>
            </div>
          </motion.div>
        </div>

        {/* Highlights grid */}
        <motion.div
          className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 gap-px"
          style={{
            border: "1px solid rgba(192,192,192,0.08)",
          }}
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              className="group p-6 md:p-8 transition-colors duration-500"
              style={{
                borderRight:
                  i % 2 === 0 ? "1px solid rgba(192,192,192,0.08)" : "none",
                borderBottom:
                  i < highlights.length - 2
                    ? "1px solid rgba(192,192,192,0.08)"
                    : "none",
              }}
              whileHover={{
                backgroundColor: "rgba(192,192,192,0.03)",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <AmberDot size={4} />

                <span
                  className="font-mono text-xs tracking-widest uppercase"
                  style={{
                    color: "#D5851F",
                    letterSpacing: "0.2em",
                  }}
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
