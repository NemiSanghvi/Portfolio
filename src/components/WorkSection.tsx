
"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { assetPath } from "@/lib/paths";

import {
  SectionLabel,
  AmberDot,
  ConstructionLine,
} from "@/components/DraftingElements";

import {
  fadeUp,
  fadeIn,
  staggerChildren,
  scaleIn,
  VIEWPORT_ONCE,
} from "@/lib/animations";

interface Project {
  number: string;
  name: string;
  description: string;
  stack: string[];
  category: string;
  image: string;
  href: string;
  imageAlt: string;
}

const PROJECTS: Project[] = [
  {
    number: "01",
    name: "Movie Mania",
    description:
      "A movie-themed web application built with React and Tailwind CSS. It explores a visually engaging way to present movie-related content through a responsive frontend experience.",
    stack: ["React", "Tailwind CSS"],
    category: "Frontend Application",
    image: assetPath("/images/movie-mania.png"),
    href: "https://movie-mania-lake-omega.vercel.app/",
    imageAlt: "Movie Mania application interface",
  },
  {
    number: "02",
    name: "Flash Learn",
    description:
      "An interactive flashcard learning application with a React frontend and a backend powered by Node.js, Express, and MongoDB Atlas. The project includes user authentication and full-stack application functionality.",
    stack: ["React", "Node.js", "Express.js", "MongoDB Atlas"],
    category: "Full-Stack Application",
    image: assetPath("/images/flash-learn.png"),
    href: "https://flashlearn-gamma.vercel.app/",
    imageAlt: "Flash Learn application interface",
  },
  {
    number: "03",
    name: "Task Board",
    description:
      "A task management application built with React. Users can create tasks with descriptions and priority levels, mark them as complete, and delete them. The interface uses changing icons and colours to make task status easy to understand.",
    stack: ["React", "JavaScript"],
    category: "Task Management",
    image: assetPath("/images/task-board.png"),
    href: "https://task-board-sand.vercel.app/",
    imageAlt: "Task Board application interface",
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
      {/* Project image */}
      <motion.a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${project.name} live project`}
        variants={scaleIn}
        className="relative aspect-[2/1] rounded-sm overflow-hidden group block"
        style={{
          backgroundColor: "#303030",
          border: "1px solid rgba(192,192,192,0.12)",
        }}
      >
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />

        <div
          className="absolute inset-0 pointer-events-none transition-colors duration-300 group-hover:bg-amber-500/[0.05]"
        />

        <span
          className="absolute top-4 left-4 font-mono text-5xl md:text-6xl font-light select-none"
          style={{ color: "rgba(192,192,192,0.35)" }}
        >
          {project.number}
        </span>

        <span
          className="absolute bottom-4 right-4 font-mono text-[9px] tracking-widest uppercase px-2 py-1"
          style={{
            color: "#C0C0C0",
            border: "1px solid rgba(192,192,192,0.2)",
            backgroundColor: "rgba(42,42,42,0.85)",
          }}
        >
          {project.category}
        </span>
      </motion.a>

      {/* Project details */}
      <motion.div variants={fadeUp}>
        <div className="flex items-start gap-4 mb-6">
          <span
            className="font-mono text-xs tracking-widest pt-1"
            style={{ color: "#D5851F" }}
          >
            {project.number}
          </span>

          <h3
            className="text-2xl md:text-3xl xl:text-4xl font-light leading-tight"
            style={{ color: "#C0C0C0", letterSpacing: "-0.02em" }}
          >
            {project.name}.
          </h3>
        </div>

        <div className="flex items-center gap-3 mb-5">
          <ConstructionLine length={32} opacity={0.2} />
          <AmberDot size={4} />
        </div>

        <p
          className="text-sm md:text-base leading-relaxed mb-6"
          style={{ color: "#A0A0A0" }}
        >
          {project.description}
        </p>

        {/* Technology stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs px-2.5 py-1"
              style={{
                color: "#C0C0C0",
                border: "1px solid rgba(192,192,192,0.18)",
                letterSpacing: "0.04em",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Live project link */}
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-sm font-mono tracking-wider"
          style={{ color: "#C0C0C0", letterSpacing: "0.1em" }}
        >
          <span className="border-b border-transparent group-hover:border-amber-500 transition-colors duration-300">
            View Live Project
          </span>

          <span
            className="transition-transform duration-200 group-hover:translate-x-1"
            style={{ color: "#D5851F" }}
          >
            →
          </span>
        </a>
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
      {/* Top separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(213,133,31,0.2), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section heading */}
        <motion.div
          className="mb-16 md:mb-24"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          <motion.div variants={fadeIn}>
            <SectionLabel number="03" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mt-6 text-3xl md:text-5xl xl:text-6xl font-light leading-tight"
            style={{ color: "#C0C0C0", letterSpacing: "-0.02em" }}
          >
            Things I&rsquo;ve built.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-xl text-sm md:text-base leading-relaxed"
            style={{ color: "#A0A0A0" }}
          >
            A collection of ideas turned into working applications.
            Each project has been an opportunity to experiment, solve
            problems, and learn something new along the way.
          </motion.p>
        </motion.div>

        {/* Projects */}
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

          <a
            href="https://github.com/NemiSanghvi"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-widest transition-colors hover:text-[#D5851F]"
            style={{ color: "#A0A0A0", letterSpacing: "0.2em" }}
          >
            MORE ON GITHUB ↗
          </a>

          <ConstructionLine length={48} opacity={0.2} />
        </motion.div>
      </div>
    </section>
  );
}
