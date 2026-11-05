"use client";

import { Quintessential } from "next/font/google";
import { motion } from "motion/react";
import { CornerBracket } from "@/components/DraftingElements";

const quintessential = Quintessential({
  weight: "400",
  subsets: ["latin"],
});

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] w-full flex-col items-center justify-center px-4 overflow-hidden"
      style={{
        backgroundImage: "url('/images/drafting-board.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#2A2A2A",
      }}
    >
      {/* Subtle vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(42,42,42,0) 35%, rgba(42,42,42,0.6) 100%)",
        }}
      />

      {/* Top-left corner bracket decoration */}
      <motion.div
        className="absolute top-20 left-6 md:left-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <CornerBracket size={24} opacity={0.2} />
      </motion.div>

      {/* Bottom-right corner bracket decoration */}
      <motion.div
        className="absolute bottom-6 right-6 md:right-10 pointer-events-none"
        style={{ transform: "rotate(180deg)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <CornerBracket size={24} opacity={0.2} />
      </motion.div>

      {/* Central hero content */}
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-6xl px-10 py-12">
        {/* Introductory tagline above the name */}
        <motion.p
          className="font-mono text-md md:text-sm tracking-[0.25em] md:tracking-[0.35em] uppercase select-none mb-40 md:mb-8"
          style={{ color: "#8A8A8A" }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Full Stack Developer 
        </motion.p>

        {/* Hero name with amber underline */}
        <motion.h1
          className={`${quintessential.className} select-none w-full text-center leading-none tracking-normal`}
          style={{
            color: "#C0C0C0",
            transform: "rotate(-2deg)",
            fontSize: "clamp(3.2rem, 11vw, 9.5rem)",
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="relative inline-block whitespace-nowrap pb-4 md:pb-6">
            Nemi Sanghvi
            {/* Two amber crayon-style underline strokes */}
            <svg
              aria-hidden="true"
              viewBox="0 0 600 44"
              fill="#D5851F"
              className="absolute left-0 w-full overflow-visible pointer-events-none"
              style={{ top: "88%", height: "auto" }}
            >
              <path d="M0 24 C 120 10, 320 6, 572 13 C 590 14, 596 22, 574 24 C 420 20, 220 20, 0 24 Z" />
              <path d="M96 28 C 88 28, 84 32, 96 33 C 200 31, 330 32, 480 35 C 350 28, 220 26, 96 28 Z" />
            </svg>
          </span>
        </motion.h1>
      </div>

      {/* Subtle animated scroll indicator — pinned to bottom */}
      <motion.div
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none z-10"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <span
          className="font-mono text-[10px] tracking-widest uppercase"
          style={{ color: "#5A5A5A", letterSpacing: "0.22em" }}
        >
          Scroll
        </span>
        <motion.div
          className="flex flex-col items-center gap-0.5"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <span
            className="block w-px"
            style={{ height: 24, backgroundColor: "#D5851F", opacity: 0.6 }}
          />
          <svg width="8" height="5" viewBox="0 0 8 5" fill="none" aria-hidden="true">
            <path d="M0 0 L4 5 L8 0" stroke="#D5851F" strokeWidth="1" strokeOpacity="0.6" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
