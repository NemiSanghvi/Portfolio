"use client";

import { motion } from "motion/react";
import { SectionLabel, AmberDot, MeasurementRule, ConstructionLine } from "@/components/DraftingElements";
import { fadeUp, fadeIn, staggerChildren, VIEWPORT_ONCE } from "@/lib/animations";
import SwipeButton from "@/components/animata/button/swipe-button";
import { assetPath } from "@/lib/paths";


interface Skill {
  name: string;
  note?: string;
}

interface SkillCategory {
  id: string;
  label: string;
  skills: Skill[];
}


const TOOLKIT: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "React", note: "primary" },
      { name: "Next.js", note: "primary" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Motion / Framer Motion" },
      { name: "HTML & CSS" },
      { name: "CSS & SVG Animation" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "Node.js", note: "primary" },
      { name: "Express.js" },
      { name: "Ruby on Rails" },
      { name: "REST APIs" },
      { name: "Authentication & RBAC" },
      { name: "Background Jobs & Scheduling" },
    ],
  },
  {
    id: "languages",
    label: "Languages",
    skills: [
      { name: "JavaScript", note: "primary" },
      { name: "TypeScript", note: "primary" },
      { name: "Ruby" },
      { name: "Python", note: "learning" },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    skills: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "MongoDB" },
    ],
  },
  {
    id: "tools",
    label: "Tools & Workflow",
    skills: [
      { name: "Git & GitHub" },
      { name: "React Native" },
      { name: "Electron.js" },
      { name: "VS Code" },
      { name: "Figma" },
      { name: "Vercel" },
      { name: "Linux" },
    ],
  },
];


export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-24 md:py-36"
      style={{ backgroundColor: "#2A2A2A" }}
    >
      {/* Top separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(213,133,31,0.3), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section header */}
        <motion.div
          className="mb-16 flex flex-col md:flex-row md:items-center justify-between gap-6"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          <div>
            <motion.div variants={fadeIn}>
              <SectionLabel number="02" label="My Toolkit" />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="mt-6 text-3xl md:text-4xl xl:text-5xl font-light leading-tight"
              style={{ color: "#C0C0C0", letterSpacing: "-0.02em" }}
            >
              The instruments
              <br />
              <span style={{ color: "#6A6A6A" }}>I reach for.</span>
            </motion.h2>
          </div>

          <motion.div
            variants={fadeUp}
            className="self-start md:self-center flex-shrink-0"
          >
            <SwipeButton
              firstText="Download Resume"
              secondText="Download Resume"
              href={assetPath("/Nemi_Sanghvi_Resume.pdf")}
              download="Nemi_Sanghvi_Resume.pdf"
              className="border border-[#D5851F]/40 hover:border-[#D5851F] rounded-sm transition-colors duration-300"
              firstClass="bg-[#242424] text-[#C0C0C0] px-5 py-2.5 text-sm font-sans font-medium flex items-center justify-center"
              secondClass="bg-[#D5851F] text-[#2A2A2A] px-5 py-2.5 text-sm font-sans font-medium flex items-center justify-center"
            />
          </motion.div>
        </motion.div>

        {/* Toolkit grid — each category is a "card" styled like a labelled diagram */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          {TOOLKIT.map((category, ci) => (
            <motion.div
              key={category.id}
              variants={fadeUp}
              className="relative group"
            >
              {/* Card body */}
              <div
                className="relative p-6 md:p-7 h-full transition-all duration-300"
                style={{
                  border: "1px solid rgba(192,192,192,0.12)",
                  backgroundColor: "rgba(42,42,42,0.6)",
                }}
              >
                {/* Top-left corner tick */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l" style={{ borderColor: "rgba(213,133,31,0.4)" }} />
                {/* Bottom-right corner tick */}
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r" style={{ borderColor: "rgba(213,133,31,0.4)" }} />

                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  {/* Small index */}
                  <span
                    className="font-mono text-[10px] tracking-widest"
                    style={{ color: "#D5851F", opacity: 0.7 }}
                  >
                    {String(ci + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 h-px" style={{ backgroundColor: "rgba(192,192,192,0.1)" }} />
                  <span
                    className="font-mono text-xs tracking-widest uppercase"
                    style={{ color: "#7A7A7A", letterSpacing: "0.18em" }}
                  >
                    {category.label}
                  </span>
                </div>

                {/* Skills list */}
                <ul className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <li key={skill.name} className="flex items-center gap-3">
                      <AmberDot
                        size={skill.note === "primary" ? 5 : 3}
                      />
                      <span
                        className="text-sm leading-none"
                        style={{
                          color:
                            skill.note === "primary"
                              ? "#C0C0C0"
                              : "#7A7A7A",
                        }}
                      >
                        {skill.name}
                      </span>
                      {skill.note && skill.note !== "primary" && (
                        <span
                          className="font-mono text-[9px] tracking-widest ml-auto"
                          style={{ color: "#5c5c5c" }}
                        >
                          [{skill.note}]
                        </span>
                      )}
                    </li>
                  ))}
                </ul>

                {/* Measurement rule at bottom of card */}
                <div className="mt-6">
                  <MeasurementRule
                    width={80}
                    color="#C0C0C0"
                    opacity={0.12}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom annotation */}
        <motion.div
          className="mt-12 flex items-center gap-4"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          <ConstructionLine length={40} opacity={0.5} />
         <span
  className="font-mono text-[10px] tracking-widest"
  style={{ color: "#8A8A8A", letterSpacing: "0.2em" }}
>
            Continuously evolving — last updated 2026
          </span>
        </motion.div>
      </div>
    </section>
  );
}

