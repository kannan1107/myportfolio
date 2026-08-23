import { useEffect, useState } from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import offices from "../assets/office.JPG";
import events from "../assets/event.JPG";
import loans from "../assets/loan.PNG";

const projects = [
  {
    number: "01",
    title: "Event Management",
    category: "Full Stack Application",
    description:
      "A complete event management platform designed to manage events, users, registrations and related activities through a modern web interface.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Redux",
    ],
    github: "https://github.com/kannan1107/user-event",
    live: "https://event-manag.netlify.app/login",
    accent: "cyan",
    image: events,
  },
  {
    number: "02",
    title: "Office Management",
    category: "Full Stack Application",
    description:
      "An office management system built to organize employees, manage office operations and simplify day-to-day administrative activities.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux",
      "JWT",
    ],
    github: "https://github.com/kannan1107/officeui",
    live: "https://officeui.onrender.com",
    accent: "blue",
    image: offices,
  },
  {
    number: "03",
    title: "Micro Finance",
    category: "Financial Management System",
    description:
      "A micro-finance management application for handling customers, financial records, transactions and day-to-day finance operations.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MYSQL",
      "JWT",
      "Redux",
    ],
    github: "https://github.com/kannan1107/financeUI",
    live: "https://financeui-wxwj.onrender.com",
    accent: "violet",
    image: loans,
  },
];

const accentStyles = {
  cyan: {
    text: "text-cyan-400",
    border: "border-cyan-400/20",
    glow: "bg-cyan-400",
  },
  blue: {
    text: "text-blue-400",
    border: "border-blue-400/20",
    glow: "bg-blue-400",
  },
  violet: {
    text: "text-violet-400",
    border: "border-violet-400/20",
    glow: "bg-violet-400",
  },
};

function Projects() {
  const [mouse, setMouse] = useState({
    x: 50,
    y: 50,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      id="projects"
      className="relative min-h-screen overflow-hidden bg-[#020617] text-white"
    >
      {/* Mouse Following Glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(
            500px circle at ${mouse.x}% ${mouse.y}%,
            rgba(34,211,238,0.12),
            transparent 70%
          )`,
        }}
      />

      {/* Background Grid */}
      {/* <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(148,163,184,0.6) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(148,163,184,0.6) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "60px 60px",
        }}
      /> */}
      <div className="absolute left-[-150px] top-[-150px] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-[-150px] right-[-150px] h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[120px]" />

      {/* Background Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0
        h-[400px] w-[700px] -translate-x-1/2
        rounded-full bg-cyan-500/[0.05] blur-[130px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* =========================================
            SECTION HEADER
        ========================================== */}

        <div className="mb-2 max-w-3xl">
          <div className="mb-2">
            <p
              className="text-xs font-semibold uppercase
              tracking-[0.3em] text-cyan-400"
            >
              Selected Work
            </p>
          </div>

          <div className="flex flex-col justify-between gap-6 md:flex-row">
            <div>
              <h2
                className="text-3xl font-black tracking-tight
                sm:text-5xl"
              >
                My{" "}
                <span
                  className="bg-gradient-to-r from-cyan-400
                  via-blue-400 to-violet-400 bg-clip-text
                  text-transparent"
                >
                  Projects.
                </span>
              </h2>

              <p
                className="mt-8 max-w-2xl text-base leading-8
                text-slate-400 sm:text-lg "
              >
                A selection of full-stack applications I've built to solve
                real-world problems and demonstrate my development skills.
              </p>
            </div>

            {/* Project Count */}
            <div
              className="flex h-fit shrink-0 items-center gap-3
              rounded-full border border-slate-800
              bg-slate-900/40 px-5 py-3"
            >
              <span className="text-2xl font-bold text-white">03</span>

              <span
                className="text-xs uppercase
                tracking-widest text-slate-500"
              >
                Projects
              </span>
            </div>
          </div>
        </div>

        {/* =========================================
            PROJECT CARDS
        ========================================== */}

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => {
            const style = accentStyles[project.accent];

            return (
              <article
                key={project.number}
                className={`
                  group relative flex flex-col overflow-hidden
                  rounded-2xl border ${style.border}
                  bg-slate-900/30
                  backdrop-blur-xl
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:bg-slate-900/50
                  hover:shadow-2xl
                `}
              >
                {/* Card Glow */}
                <div
                  className={`
                    absolute -right-20 -top-20
                    h-40 w-40 rounded-full
                    ${style.glow}
                    opacity-0 blur-[80px]
                    transition-all duration-500
                    group-hover:opacity-10
                  `}
                />

                {/* Project Preview */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover
                    transition-transform duration-500
                    group-hover:scale-105"
                  />

                  {/* Category */}
                  <div
                    className="absolute left-5 top-5
                    rounded-full border border-slate-700
                    bg-slate-950/80 px-3 py-1.5
                    text-[10px] uppercase tracking-widest
                    text-slate-400"
                  >
                    {project.category}
                  </div>

                  {/* Arrow */}
                  <div
                    className={`
                      absolute bottom-5 right-5
                      flex h-10 w-10 items-center
                      justify-center rounded-full
                      border border-slate-700
                      bg-slate-950/70
                      ${style.text}
                      transition-all duration-300
                      group-hover:-translate-y-1
                      group-hover:border-current
                    `}
                  >
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative flex flex-1 flex-col p-7">
                  {/* Number */}
                  <p
                    className={`mb-3 font-mono text-xs
                    ${style.text}`}
                  >
                    PROJECT / {project.number}
                  </p>

                  {/* Title */}
                  <h3
                    className="text-2xl font-bold
                    text-white"
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="mt-4 text-sm leading-7
                    text-slate-400"
                  >
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border
                        border-slate-800
                        bg-slate-950/70
                        px-3 py-1.5
                        text-xs font-medium
                        text-slate-400
                        transition-colors
                        hover:border-cyan-400/30
                        hover:text-cyan-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-8 flex gap-3 pt-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center
                      justify-center gap-2 rounded-xl
                      border border-slate-700
                      bg-slate-950/70 px-4 py-3
                      text-sm font-semibold text-slate-300
                      transition-all duration-300
                      hover:border-slate-500
                      hover:text-white"
                    >
                      <Github size={17} />
                      GitHub
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex flex-1 items-center
                      justify-center gap-2 rounded-xl
                      border ${style.border}
                      bg-white/[0.03] px-4 py-3
                      text-sm font-semibold ${style.text}
                      transition-all duration-300
                      hover:bg-white/[0.06]`}
                    >
                      <ExternalLink size={17} />
                      Live Demo
                    </a>
                  </div>
                </div>

                {/* Bottom Accent */}
                <div
                  className={`absolute bottom-0 left-0
                  h-[2px] w-0 ${style.glow}
                  transition-all duration-500
                  group-hover:w-full`}
                />
              </article>
            );
          })}
        </div>

        {/* =========================================
            BOTTOM CTA
        ========================================== */}

        <div
          className="mt-12 flex flex-col items-center
          justify-between gap-5 rounded-2xl
          border border-slate-800
          bg-slate-900/20 p-6 sm:flex-row"
        >
          <div>
            <p className="text-sm font-medium text-white">
              Want to see more of my work?
            </p>

            <p className="mt-1 text-sm text-slate-500">
              <a
                href="#contact"
                aria-label="Scroll to explore contact section"
                className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-xs text-slate-500 transition hover:text-cyan-400"
              >
                <span className="animate-pulse">SCROLL TO EXPLORE</span>
                <span className="text-lg leading-none text-cyan-400">↓</span>
              </a>
              Explore my repositories and development projects.
            </p>
          </div>

          <a
            href="https://github.com/kannan1107"
            target="_blank"
            rel="noopener "
            className="flex items-center gap-2 rounded-xl
            bg-white px-5 py-3 text-sm font-semibold
            text-slate-950 transition-all duration-300
            hover:-translate-y-1 hover:bg-cyan-400"
          >
            <Github size={17} />
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
