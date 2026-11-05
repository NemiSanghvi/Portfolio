"use client";

import { motion } from "motion/react";
import {
  SectionLabel,
  AmberDot,
  ConstructionLine,
  CornerBracket,
} from "@/components/DraftingElements";
import {
  fadeUp,
  fadeIn,
  staggerChildren,
  VIEWPORT_ONCE,
} from "@/lib/animations";

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    handle: "Nemi Sanghvi",
    href: "https://linkedin.com/in/nemi-sanghvi-48778b2b0",
    note: "Professional",
  },
  {
    label: "GitHub",
    handle: "NemiSanghvi",
    href: "https://github.com/NemiSanghvi",
    note: "Code",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 md:py-36"
      style={{ backgroundColor: "#2A2A2A" }}
    >
      {/* Top separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(213,133,31,0.4), transparent)",
        }}
      />

      {/* Large background text */}
      <div
        className="absolute bottom-0 left-0 right-0 flex justify-center select-none pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-mono text-[8rem] md:text-[14rem] font-light leading-none"
          style={{
            color: "rgba(192,192,192,0.025)",
            letterSpacing: "-0.05em",
          }}
        >
          Let&apos;s Connect
        </span>
      </div>

      {/* Corner brackets */}
      <div className="absolute top-8 left-8 hidden md:block">
        <CornerBracket size={32} opacity={0.2} />
      </div>

      <div
        className="absolute top-8 right-8 hidden md:block"
        style={{ transform: "scaleX(-1)" }}
      >
        <CornerBracket size={32} opacity={0.2} />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section label */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="mb-14 md:mb-20"
        >
          <SectionLabel number="05" label="Contact Me" />
        </motion.div>

        {/* Main heading */}
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="mb-16 md:mb-20"
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-6xl xl:text-7xl font-light leading-[1.05] mb-6"
            style={{ color: "#C0C0C0", letterSpacing: "-0.03em" }}
          >
            Have something
            <br />
            in{" "}
            <em
              className="not-italic"
              style={{ color: "#D5851F", fontStyle: "italic" }}
            >
              mind?
            </em>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="max-w-lg text-base md:text-lg leading-relaxed"
            style={{ color: "#6A6A6A" }}
          >
            I&apos;m always up for a good conversation, an interesting
            challenge, or an idea worth exploring. Whether you have an
            opportunity in mind, want to collaborate, or simply want to talk
            tech, my inbox is open. I&apos;m currently exploring Full Stack
            Developer opportunities and would love to connect.
          </motion.p>
        </motion.div>

        {/* Email CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="mb-16"
        >
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=nemisanghvi009@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 transition-colors duration-300"
          >
            <span
              className="font-mono text-xl tracking-widest uppercase"
              style={{ color: "#5A5A5A", letterSpacing: "0.2em" }}
            >
              Email
            </span>

            <ConstructionLine length={20} opacity={0.25} />

            <span
              className="text-xl md:text-2xl xl:text-3xl font-light transition-colors duration-300 group-hover:text-[#D5851F]"
              style={{ color: "#C0C0C0", letterSpacing: "-0.01em" }}
            >
              nemisanghvi009@gmail.com
            </span>
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 sm:gap-12 mb-24"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          {SOCIAL_LINKS.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              variants={fadeUp}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4"
            >
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <AmberDot size={3} />
                  <span
                    className="font-mono text-xs tracking-widest uppercase"
                    style={{ color: "#5A5A5A", letterSpacing: "0.2em" }}
                  >
                    {link.label}
                  </span>
                </div>

                <span
                  className="text-sm font-light transition-colors duration-200 group-hover:text-[#C0C0C0]"
                  style={{ color: "#7A7A7A" }}
                >
                  {link.handle}
                </span>
              </div>

              <span
                className="text-lg transition-transform duration-200 group-hover:translate-x-1"
                style={{ color: "#D5851F" }}
                aria-hidden="true"
              >
                →
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.footer
          className="border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8"
          style={{ borderColor: "rgba(192,192,192,0.08)" }}
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          <p
            className="font-mono text-xs"
            style={{ color: "#3A3A3A", letterSpacing: "0.1em" }}
          >
            &copy; {new Date().getFullYear()} Nemi Sanghvi. Built with Next.js
            &amp; Motion.
          </p>

          <div className="flex items-center gap-3">
            <ConstructionLine length={24} opacity={0.15} />

            <span
              className="font-mono text-[10px] tracking-widest"
              style={{ color: "#3A3A3A", letterSpacing: "0.15em" }}
            >
              Made with curiosity &amp; a little too much coffee.
            </span>
          </div>
        </motion.footer>
      </div>
    </section>
  );
}
