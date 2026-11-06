
"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { AmberDot, ConstructionLine } from "@/components/DraftingElements";
import {
  fadeUp,
  fadeIn,
  staggerChildren,
  VIEWPORT_ONCE,
} from "@/lib/animations";

const BounceCards = dynamic(() => import("./BounceCards"), {
  ssr: false,
});

/**
 * Personal photograph collection for the BounceCards showcase.
 * Replace these temporary URLs with your own photographs whenever ready.
 */
export const FUN_PHOTOGRAPHS = [
  {
    src: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80",
    alt: "Live music concert with stage lights and audience",
  },
  {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    alt: "Modern fitness gym with workout equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    alt: "Mountain landscape surrounded by nature",
  },
  {
    src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    alt: "Food spread with a variety of dishes",
  },
  {
    src: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=800&q=80",
    alt: "Gaming setup with monitor and gaming equipment",
  },
  {
  src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
  alt: "Camera and photography"
}
];

interface BounceConfig {
  containerWidth: number;
  containerHeight: number;
  cardSize: number;
  spread: number;
  rotation: number;
  arc: number;
  pushDistance: number;
  borderWidth: number;
  radius: number;
}

const DESKTOP_CONFIG: BounceConfig = {
  containerWidth: 500,
  containerHeight: 320,
  cardSize: 210,
  spread: 150,
  rotation: 11,
  arc: -28,
  pushDistance: 60,
  borderWidth: 9,
  radius: 25,
};

const TABLET_CONFIG: BounceConfig = {
  containerWidth: 420,
  containerHeight: 270,
  cardSize: 160,
  spread: 90,
  rotation: 10,
  arc: -22,
  pushDistance: 40,
  borderWidth: 7,
  radius: 20,
};

const MOBILE_CONFIG: BounceConfig = {
  containerWidth: 280,
  containerHeight: 210,
  cardSize: 110,
  spread: 38,
  rotation: 8,
  arc: -12,
  pushDistance: 18,
  borderWidth: 4,
  radius: 14,
};

function getBounceConfig(width: number): BounceConfig {
  if (width < 640) return MOBILE_CONFIG;
  if (width < 1024) return TABLET_CONFIG;
  return DESKTOP_CONFIG;
}

function useResponsiveBounceConfig(): BounceConfig {
  const [config, setConfig] = useState<BounceConfig>(DESKTOP_CONFIG);

  useEffect(() => {
    function handleResize() {
      setConfig(getBounceConfig(window.innerWidth));
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return config;
}

// Five personal interests
const INTERESTS = [
  {
    id: "music",
    label: "Music",
    note: "Always in the background",
    body: "From everyday playlists to live performances, music has a way of making ordinary moments feel a little more memorable.",
  },
  {
    id: "fitness",
    label: "Fitness",
    note: "Making time to move",
    body: "Staying active, challenging myself, and making fitness a part of the routine. It's a good way to reset outside the screen.",
  },
  {
    id: "travel",
    label: "Travel",
    note: "A change of scenery",
    body: "Exploring new places, taking in different landscapes, and finding inspiration in everything from mountains to beaches.",
  },
  {
    id: "food",
    label: "Food",
    note: "Always up for something new",
    body: "Discovering good food, trying new flavours, and exploring cafes. Sometimes finding a great place is part of the experience.",
  },
  {
    id: "gaming",
    label: "Gaming",
    note: "A different kind of escape",
    body: "Stepping into different worlds, taking on challenges, and enjoying the stories and experiences that games have to offer.",
  },
  {
  id: "photography",
  label: "Photography",
  note: "Finding beauty in the details",
  body: "Capturing places, little details, and moments worth remembering. It's another way to explore the world and look at familiar things differently.",
},
];

export default function BeyondSection() {
  const bounceConfig = useResponsiveBounceConfig();

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
          <motion.h2
            variants={fadeUp}
            className="mt-6 text-3xl md:text-5xl xl:text-6xl font-light leading-tight"
            style={{ color: "#C0C0C0", letterSpacing: "-0.02em" }}
          >
            The rest of
            <br />
            <span style={{ color: "#6A6A6A" }}>
              the{" "}
              <em
                className="not-italic"
                style={{ color: "#D5851F", fontStyle: "italic" }}
              >
                picture.
              </em>
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-lg text-sm md:text-base leading-relaxed"
            style={{ color: "#5A5A5A" }}
          >
            There's more to me than the things I build. Music, fitness,
            travel, food, and gaming are some of the things that make
            life interesting outside the screen.
          </motion.p>
        </motion.div>

        {/* Personal photograph showcase — BounceCards */}
        <motion.div
          className="relative flex flex-col items-center justify-center mb-20 overflow-visible"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          {/* Subtle drafting caption */}
        

          <div
            className="relative w-full flex justify-center items-center py-4 overflow-visible"
            style={{ minHeight: `${bounceConfig.containerHeight}px` }}
          >
            <BounceCards
              images={FUN_PHOTOGRAPHS}
              containerWidth={bounceConfig.containerWidth}
              containerHeight={bounceConfig.containerHeight}
              cardSize={bounceConfig.cardSize}
              spread={bounceConfig.spread}
              rotation={bounceConfig.rotation}
              arc={bounceConfig.arc}
              pushDistance={bounceConfig.pushDistance}
              hoverScale={1.04}
              bounciness={0.35}
              animationDelay={0.5}
              animationStagger={0.05}
              borderWidth={bounceConfig.borderWidth}
              borderColor="#D5851F"
              radius={bounceConfig.radius}
              shadow
              enableHover
            />
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
                  style={{
                    color: "#D5851F",
                    opacity: 0.8,
                    letterSpacing: "0.18em",
                  }}
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

              
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
