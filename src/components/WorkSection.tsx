"use client";

import { motion } from "motion/react";
import { SectionLabel, AmberDot, ConstructionLine } from "@/components/DraftingElements";
import { fadeUp, fadeIn, staggerChildren, scaleIn, VIEWPORT_ONCE } from "@/lib/animations";

interface Project {
  number: string;
  name: string;
  description: string;
  stack: string[];
  category: string;
  href: string;
  sourceHref: string;
}

const PROJECTS: Project[] = [
  {
    number: "01",
    name: "[Project Alpha]",
    description:
      "[PLACEHOLDER] A full-stack web application built for real-time collaboration. Users can create, edit and share workspaces with live presence indicators.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Prisma"],
    category: "Full-Stack Web App",
    href: "#",
    sourceHref: "#",
  },
  {
    number: "02",
    name: "[Project Beta]",
    description:
      "[PLACEHOLDER] A component library and design system built from scratch. Documented with Storybook and fully accessible with keyboard navigation.",
    stack: ["React", "TypeScript", "Storybook", "CSS Modules"],
    category: "Design System",
    href: "#",
    sourceHref: "#",
  },
  {
    number: "03",
    name: "[Project Gamma]",
    description:
      "[PLACEHOLDER] A performance-focused marketing site with complex scroll-based animations. Achieved 95+ Lighthouse score across all metrics.",
    stack: ["Next.js", "Motion", "Tailwind CSS"],
    category: "Full Stack · Animation",
    href: "#",
    sourceHref: "#",
  },
  {
    number: "04",
    name: "[Project Delta]",
    description:
      "[PLACEHOLDER] A REST API with authentication, rate limiting and comprehensive test coverage. Deployed on a Linux VPS with Docker.",
    stack: ["Node.js", "Express", "PostgreSQL", "Docker"],
    category: "Backend · API",
    href: "#",
    sourceHref: "#",
  },
];

function ProjectCard({
  project,
  reversed,
}: {
  project: Project;
  reversed: boolean;
}) {
  return (
    <motion.article
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
        reversed ? "lg:[&>*:first-child]:order-2" : ""
      }`}
      variants={staggerChildren}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
    >
      {/* Image placeholder */}
      <motion.div
        variants={scaleIn}
        className="relative aspect-[16/10] rounded-sm overflow-hidden group"
        style={{
          backgroundColor: "#303030",
          border: "1px solid rgba(192,192,192,0.1)",
        }}
      >
        {/* Placeholder visual */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, #2A2A2A 0%, #353535 50%, #2A2A2A 100%)`,
          }}
        >
          {/* Drafting-board style wireframe placeholder */}
          <svg
            viewBox="0 0 320 200"
            fill="none"
            className="w-3/4 opacity-20"
            aria-hidden="true"
          >
            <rect x="10" y="10" width="300" height="180" stroke="#C0C0C0" strokeWidth="0.5" strokeDasharray="4 4" />
            <rect x="20" y="20" width="140" height="90" stroke="#C0C0C0" strokeWidth="0.5" />
            <rect x="175" y="20" width="135" height="40" stroke="#C0C0C0" strokeWidth="0.5" />
            <rect x="175" y="70" width="135" height="40" stroke="#C0C0C0" strokeWidth="0.5" />
            <rect x="20" y="125" width="290" height="20" stroke="#C0C0C0" strokeWidth="0.5" />
            <rect x="20" y="155" width="130" height="20" stroke="#C0C0C0" strokeWidth="0.5" />
            <line x1="10" y1="10" x2="310" y2="10" stroke="#D5851F" strokeWidth="0.75" />
          </svg>
        </div>

        {/* Project number overlay */}
        <div className="absolute top-4 left-4">
          <span
            className="font-mono text-5xl md:text-6xl font-light leading-none select-none"
            style={{ color: "rgba(192,192,192,0.07)" }}
          >
            {project.number}
          </span>
        </div>

        {/* Category tag */}
        <div className="absolute bottom-4 right-4">
          <span
            className="font-mono text-[9px] tracking-widest uppercase px-2 py-1"
            style={{
              color: "#7A7A7A",
              border: "1px solid rgba(192,192,192,0.15)",
              letterSpacing: "0.15em",
              backgroundColor: "rgba(42,42,42,0.6)",
            }}
          >
            {project.category}
          </span>
        </div>

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundColor: "rgba(213,133,31,0)" }}
          whileHover={{ backgroundColor: "rgba(213,133,31,0.05)" }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Project details */}
      <motion.div variants={reversed ? fadeUp : fadeUp}>
        {/* Number + title */}
        <div className="flex items-start gap-4 mb-6">
          <span
            className="font-mono text-xs tracking-widest pt-1"
            style={{ color: "#D5851F", opacity: 0.7 }}
          >
            {project.number}
          </span>
          <h3
            className="text-2xl md:text-3xl xl:text-4xl font-light leading-tight"
            style={{ color: "#C0C0C0", letterSpacing: "-0.02em" }}
          >
            {project.name}
          </h3>
        </div>

        {/* Decorative line */}
        <div className="flex items-center gap-3 mb-5">
          <ConstructionLine length={32} opacity={0.2} />
          <AmberDot size={4} />
        </div>

        {/* Description */}
        <p
          className="text-sm md:text-base leading-relaxed mb-6"
          style={{ color: "#7A7A7A" }}
        >
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs px-2.5 py-1"
              style={{
                color: "#8A8A8A",
                border: "1px solid rgba(192,192,192,0.12)",
                letterSpacing: "0.1em",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-6">
          <a
            href={project.href}
            className="group flex items-center gap-2 text-sm font-mono tracking-wider transition-colors duration-200"
            style={{ color: "#C0C0C0", letterSpacing: "0.12em" }}
          >
            <span>View Project</span>
            <span
              className="transition-transform duration-200 group-hover:translate-x-1"
              style={{ color: "#D5851F" }}
            >
              →
            </span>
          </a>
          <a
            href={project.sourceHref}
            className="text-sm font-mono tracking-wider"
            style={{ color: "#5A5A5A", letterSpacing: "0.12em" }}
          >
            Source
          </a>
        </div>
      </motion.div>
    </motion.article>
  );
}

export default function WorkSection() {
  return (
    <section
      id="work"
      className="relative overflow-hidden py-24 md:py-36"
      style={{ backgroundColor: "#2A2A2A" }}
    >
      {/* Top separator — amber accent */}
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
          className="mb-16 md:mb-24"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          <motion.div variants={fadeIn}>
            <SectionLabel number="03" label="Selected Work" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-6 text-3xl md:text-5xl xl:text-6xl font-light leading-tight"
            style={{ color: "#C0C0C0", letterSpacing: "-0.02em" }}
          >
            Things I&rsquo;ve built.
          </motion.h2>
        </motion.div>

        {/* Projects — alternating layouts */}
        <div className="space-y-24 md:space-y-32">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.number}
              project={project}
              reversed={i % 2 !== 0}
            />
          ))}
        </div>

        {/* Footer annotation */}
        <motion.div
          className="mt-20 flex items-center justify-center gap-4"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          <ConstructionLine length={48} opacity={0.2} />
          <span
            className="font-mono text-xs tracking-widest"
            style={{ color: "#4A4A4A", letterSpacing: "0.2em" }}
          >
            More on GitHub
          </span>
          <ConstructionLine length={48} opacity={0.2} />
        </motion.div>
      </div>
    </section>
  );
}

