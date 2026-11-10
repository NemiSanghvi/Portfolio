"use client";

import { motion } from "motion/react";
import { CornerBracket } from "@/components/DraftingElements";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { assetPath } from "@/lib/paths";

const TechText = dynamic(() => import("./TechText"), { ssr: false });

/** Clamps fontSize to fit within the available viewport width at mount/resize. */
function useHeroFontSize() {
  const [fontSize, setFontSize] = useState(150);

  useEffect(() => {
    function update() {
      // 20vw, min 72px (legible at 320px), max 150px (original desktop size)
      const vw = window.innerWidth;
      setFontSize(Math.round(Math.min(150, Math.max(72, vw * 0.2))));
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return fontSize;
}

export default function HeroSection() {
  const fontSize = useHeroFontSize();

  return (
    <section
      id="hero"
      className="hero-section relative flex min-h-[100svh] w-full flex-col items-center justify-center px-4 overflow-hidden"
      style={{
        backgroundImage: `url('${assetPath("/images/drafting-board.png")}')`,
        ["--hero-bg" as string]: `url('${assetPath("/images/drafting-board.png")}')`,
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
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-6xl px-4 md:px-10 py-12">
        {/* Introductory tagline above the name */}
        <motion.p
          className="font-mono text-xs md:text-sm tracking-[0.25em] md:tracking-[0.35em] uppercase select-none mb-6 md:mb-8"
          style={{ color: "#8A8A8A" }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Full Stack Developer
        </motion.p>

        {/* Hero name with TechText animation */}
        <div
          className="w-full"
          style={{
            transform: "rotate(-2deg)",
            // Container height tracks the responsive font size with a small buffer
            height: `${fontSize + 24}px`,
            color: "#C0C0C0",
          }}
        >
          <TechText
            text="Nemi Sanghvi"
            fontWeight={600}
            fontSize={fontSize}
            color="#C0C0C0"
            accentColor="#D5851F"
            reveal="letter"
            dashLength={4}
            dashGap={2}
            specks={15}
            intro="metrics"
            introDuration={3}
            clickKick
            guides={false}
            style={undefined}
            sweep={true}
          />
        </div>
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
          <svg
            width="8"
            height="5"
            viewBox="0 0 8 5"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M0 0 L4 5 L8 0"
              stroke="#D5851F"
              strokeWidth="1"
              strokeOpacity="0.6"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
