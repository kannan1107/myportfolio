import { useEffect, useState } from "react";

const skillGroups = [
  {
    number: "01",
    title: "Backend",
    accent: "text-cyan-400",
    border: "border-cyan-400/20",
    glow: "bg-cyan-400",
    skills: [
      "Express.js",
      "Node.js",
      "JWT",
      "Nodemailer",
      "Multer",
      "Authentication",
    ],
  },
  {
    number: "02",
    title: "Databases",
    accent: "text-emerald-400",
    border: "border-emerald-400/20",
    glow: "bg-emerald-400",
    skills: ["MongoDB", "MySQL", "Database Design", "CRUD Operations"],
  },
  {
    number: "03",
    title: "Frontend",
    accent: "text-blue-400",
    border: "border-blue-400/20",
    glow: "bg-blue-400",
    skills: [
      "React.js",
      "Redux",
      "Tailwind CSS",
      "Bootstrap CSS",
      "Responsive UI",
    ],
  },
  {
    number: "04",
    title: "AI Tools",
    accent: "text-violet-400",
    border: "border-violet-400/20",
    glow: "bg-violet-400",
    skills: ["ChatGPT", "Claude", "AI-assisted Development", "Prompting"],
  },
];

function Skills() {
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
      id="skills"
      className="relative min-h-screen overflow-hidden
      bg-[#020617] px-6 py-24 text-white lg:px-8"
    >
      {/* =========================================
          MOUSE FOLLOWING LIGHT
      ========================================== */}

      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(
            600px circle at ${mouse.x}% ${mouse.y}%,
            rgba(34, 211, 238, 0.10),
            transparent 70%
          )`,
        }}
      />

      {/* Small Cursor Point */}

      <div
        className="pointer-events-none fixed z-50 h-2.5 w-2.5
        -translate-x-1/2 -translate-y-1/2 rounded-full
        bg-cyan-400 shadow-[0_0_20px_6px_rgba(34,211,238,0.3)]
        transition-all duration-75"
        style={{
          left: `${mouse.x}%`,
          top: `${mouse.y}%`,
        }}
      />

      {/* =========================================
          BACKGROUND GRID
      ========================================== */}

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

      {/* =========================================
          BACKGROUND GLOW
      ========================================== */}

      <div
        className="pointer-events-none absolute -left-40
        top-20 h-[400px] w-[400px] rounded-full
        bg-cyan-500/[0.06] blur-[130px]"
      />

      <div
        className="pointer-events-none absolute -right-40
        bottom-20 h-[400px] w-[400px] rounded-full
        bg-violet-500/[0.06] blur-[130px]"
      />

      {/* =========================================
          CONTENT
      ========================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}

        <div className="mb-16 max-w-3xl">
          <div className="mb-5">
            <p
              className="text-xs font-semibold uppercase
              tracking-[0.3em] text-cyan-400"
            >
              Technical Expertise
            </p>
          </div>

          <h2
            className="text-3xl font-black tracking-tight
            text-white sm:text-5xl"
          >
            Skills &{" "}
            <span
              className="bg-gradient-to-r from-cyan-400
              via-blue-400 to-violet-400 bg-clip-text
              text-transparent"
            >
              Tools.
            </span>
          </h2>

          <p
            className="mt-6 max-w-2xl text-base leading-8
            text-slate-400 sm:text-lg"
          >
            Technologies I use to design, develop and deploy modern full-stack
            web applications with clean, scalable and maintainable code.
          </p>
        </div>

        {/* =========================================
            SKILL CARDS
        ========================================== */}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className={`
                group relative overflow-hidden rounded-2xl
                border ${group.border}
                bg-slate-900/30
                p-7
                backdrop-blur-md
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
                  ${group.glow}
                  opacity-0 blur-[80px]
                  transition-all duration-500
                  group-hover:opacity-20
                `}
              />

              {/* Number */}

              <div
                className="relative mb-12 flex
                items-center justify-between"
              >
                <span
                  className={`font-mono text-sm
                  font-semibold ${group.accent}`}
                >
                  /{group.number}
                </span>

                <span
                  className="h-1.5 w-1.5 rounded-full bg-slate-700
                  transition-all duration-500 group-hover:bg-cyan-400"
                />
              </div>

              {/* Title */}

              <h3
                className={`relative mb-7 text-2xl
                font-bold ${group.accent}`}
              >
                {group.title}
              </h3>

              {/* Skills */}

              <ul className="relative space-y-4">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3
                    text-sm text-slate-400
                    transition-all duration-300
                    hover:translate-x-1
                    hover:text-white"
                  >
                    <span
                      className={`h-1.5 w-1.5 shrink-0
                      rounded-full bg-current
                      ${group.accent}`}
                    />

                    {skill}
                  </li>
                ))}
              </ul>

              {/* Bottom Accent */}

              <div
                className={`absolute bottom-0 left-0
                h-[2px] w-0 ${group.glow}
                transition-all duration-500
                group-hover:w-full`}
              />
            </article>
          ))}
        </div>

        {/* =========================================
            CORE STACK
        ========================================== */}

        <div
          className="relative mt-8 overflow-hidden
          rounded-2xl border border-slate-800
          bg-slate-900/30 p-7
          backdrop-blur-md"
        >
          {/* Subtle Glow */}

          <div
            className="absolute right-0 top-0 h-32 w-32
            rounded-full bg-cyan-400/5 blur-3xl"
          />

          <div
            className="relative flex flex-col gap-6
            md:flex-row md:items-center
            md:justify-between"
          >
            <div>
              <p
                className="text-xs font-semibold uppercase
                tracking-[0.25em] text-slate-500"
              >
                Core Stack
              </p>

              <h3
                className="mt-2 text-2xl font-bold
                text-white"
              >
                MERN Stack Developer
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {["MongoDB", "Express.js", "React.js", "Node.js"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border
                  border-slate-700
                  bg-slate-950/70
                  px-5 py-2.5
                  text-sm font-medium
                  text-slate-400
                  transition-all duration-300
                  hover:border-cyan-400/40
                  hover:bg-cyan-400/5
                  hover:text-cyan-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <a
          href="#projects"
          aria-label="Scroll to explore projects"
          className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-xs text-slate-500 transition hover:text-cyan-400"
        >
          <span className="animate-pulse">SCROLL TO EXPLORE</span>
          <span className="text-lg leading-none text-cyan-400">↓</span>
        </a>
      </div>
    </section>
  );
}

export default Skills;
