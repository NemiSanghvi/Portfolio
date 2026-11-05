
import type { Variants } from "motion/react";

const CUSTOM_EASE = [0.22, 1, 0.36, 1] as [
  number,
  number,
  number,
  number
];

// Fade and slide upward
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: CUSTOM_EASE,
    },
  },
};

// Simple fade
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Standard stagger
export const staggerChildren: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Slower stagger
export const staggerChildrenSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Slide from left
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: CUSTOM_EASE,
    },
  },
};

// Slide from right
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: CUSTOM_EASE,
    },
  },
};

// Scale entrance
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: CUSTOM_EASE,
    },
  },
};

// Portrait hover
export const portraitHover: Variants = {
  rest: {
    scale: 1,
    filter: "brightness(1)",
  },
  hover: {
    scale: 1.06,
    filter: "brightness(1.08)",
    transition: {
      duration: 1.1,
      ease: CUSTOM_EASE,
    },
  },
};

// Portrait overlay
export const portraitOverlay: Variants = {
  rest: {
    opacity: 0.55,
  },
  hover: {
    opacity: 0.2,
    transition: {
      duration: 0.8,
      ease: CUSTOM_EASE,
    },
  },
};

// Standard viewport options
export const VIEWPORT_ONCE = {
  once: true,
  margin: "-10% 0px",
} as const;
