"use client";

import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState, useEffect } from "react";
import { NAV_ITEMS } from "@/lib/constants";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 60);
  });

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: "-30% 0px -60% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10"
        style={{ height: "64px" }}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Frosted glass background that appears on scroll */}
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundColor: scrolled ? "rgba(42,42,42,0.88)" : "rgba(42,42,42,0)",
            backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
            borderBottom: scrolled
              ? "1px solid rgba(192,192,192,0.1)"
              : "1px solid rgba(192,192,192,0)",
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Wordmark */}
        <button
          onClick={() => handleNav("#hero")}
          className="relative z-10 flex items-center gap-2 group"
          aria-label="Go to top"
        >
          {/* Small amber accent line */}
        </button>

        {/* Desktop nav links */}
        <ul className="relative z-10 hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => handleNav(item.href)}
                className="relative text-xs font-mono tracking-widest uppercase group transition-colors duration-200"
                style={{
                  color:
                    activeSection === item.href.replace("#", "")
                      ? "#D5851F"
                      : "#8A8A8A",
                  letterSpacing: "0.18em",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#C0C0C0")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color =
                    activeSection === item.href.replace("#", "")
                      ? "#D5851F"
                      : "#8A8A8A")
                }
              >
                {item.label}
                {/* Underline accent */}
                <span
                  className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: "#D5851F" }}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="relative z-10 md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            className="block h-px w-5 origin-center"
            style={{ backgroundColor: "#C0C0C0" }}
            animate={menuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block h-px w-5 origin-center"
            style={{ backgroundColor: "#C0C0C0" }}
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block h-px w-5 origin-center"
            style={{ backgroundColor: "#C0C0C0" }}
            animate={menuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
        </button>
      </motion.nav>

      {/* Mobile drawer */}
      <motion.div
        className="fixed inset-0 z-40 md:hidden flex flex-col justify-center items-center"
        style={{ backgroundColor: "rgba(42,42,42,0.98)" }}
        initial={{ opacity: 0, pointerEvents: "none" }}
        animate={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.3 }}
      >
        <ul className="flex flex-col items-center gap-8">
          {NAV_ITEMS.map((item, i) => (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, y: 20 }}
              animate={
                menuOpen
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{ delay: i * 0.06, duration: 0.4 }}
            >
              <button
                onClick={() => handleNav(item.href)}
                className="text-2xl font-mono tracking-widest uppercase"
                style={{ color: "#C0C0C0", letterSpacing: "0.15em" }}
              >
                {item.label}
              </button>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </>
  );
}

