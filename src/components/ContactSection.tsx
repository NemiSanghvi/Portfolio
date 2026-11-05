"use client";

import { motion } from "motion/react";
import { SectionLabel, AmberDot, ConstructionLine, CornerBracket } from "@/components/DraftingElements";
import { fadeUp, fadeIn, staggerChildren, VIEWPORT_ONCE } from "@/lib/animations";

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    handle: "@[your-username]",
    href: "https://github.com/",
    note: "Code",
  },
  {
    label: "LinkedIn",
    handle: "Nemi Sanghvi",
    href: "https://linkedin.com/",
    note: "Professional",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 md:py-36"
      style={{ backgroundColor: "#252525" }}
    >
      {/* Top separator — strong amber accent */}
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
          style={{ color: "rgba(192,192,192,0.025)", letterSpacing: "-0.05em" }}
        >
          Let&rsquo;s build.
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
          <SectionLabel number="07" label="Contact" />
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
            [PLACEHOLDER] Whether it&rsquo;s a project, an opportunity or just a conversation —
            I&rsquo;d love to hear from you. I&rsquo;m particularly interested in roles where
            design and engineering overlap.
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
            href="mailto:hello@[yourdomain].com"
            className="group inline-flex items-center gap-4 transition-colors duration-300"
          >
            {/* Label */}
            <span
              className="font-mono text-xs tracking-widest uppercase"
              style={{ color: "#5A5A5A", letterSpacing: "0.2em" }}
            >
              Email
            </span>
            <ConstructionLine length={32} opacity={0.25} />
            {/* Address */}
            <span
              className="text-xl md:text-2xl xl:text-3xl font-light transition-colors duration-300 group-hover:text-[#D5851F]"
              style={{ color: "#C0C0C0", letterSpacing: "-0.01em" }}
            >
              hello@[yourdomain].com
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
            &copy; {new Date().getFullYear()} Nemi Sanghvi. Built with Next.js &amp; Motion.
          </p>
          <div className="flex items-center gap-3">
            <ConstructionLine length={24} opacity={0.15} />
            <span
              className="font-mono text-[10px] tracking-widest"
              style={{ color: "#3A3A3A", letterSpacing: "0.15em" }}
            >
              Designed &amp; developed by Nemi Sanghvi.
            </span>
          </div>
        </motion.footer>
      </div>
    </section>
  );
}

