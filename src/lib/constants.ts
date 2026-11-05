// Design system constants
export const COLORS = {
  charcoal: "#2A2A2A",
  silver: "#C0C0C0",
  amber: "#D5851F",
  silverLight: "#E8E8E8",
  silverDim: "#8A8A8A",
  charcoalLight: "#3A3A3A",
  charcoalMid: "#333333",
} as const;

export const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
] as const;

export const SECTIONS = {
  hero: "hero",
  about: "about",
  skills: "skills",
  work: "work",
  process: "process",
  beyond: "beyond",
  contact: "contact",
} as const;

