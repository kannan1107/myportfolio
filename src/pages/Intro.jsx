import React, { useEffect, useState } from "react";
import heroImage from "../assets/cartoon.png";
import resume from "../assets/KannayiraMoorthy.pdf";
import { FaGithub } from "react-icons/fa";

const Intro = () => {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

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
      id="intro"
      className="relative min-h-screen overflow-hidden bg-[#020617] text-white"
    >
      {/* Cursor Following Glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-all duration-300"
        style={{
          background: `radial-gradient(
            500px circle at ${mouse.x}% ${mouse.y}%,
            rgba(34,211,238,0.12),
            transparent 70%
          )`,
        }}
      />

      {/* Background Blurs */}
      <div className="absolute left-[-150px] top-[-150px] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute bottom-[-150px] right-[-150px] h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[120px]" />

      {/* Navbar */}
      <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-8">
        <a href="#intro" className="text-2xl font-bold tracking-tight">
          <span className="text-cyan-400">&lt;</span>
          Kannan
          <span className="text-cyan-400"> /&gt;</span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
          <a href="#intro" className="transition hover:text-cyan-400">
            My Intro
          </a>

          <a href="#skills" className="transition hover:text-cyan-400">
            Skills
          </a>

          <a href="#projects" className="transition hover:text-cyan-400">
            Projects
          </a>

          <a href="#contact" className="transition hover:text-cyan-400">
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="hidden rounded-full border border-cyan-400/30
          bg-cyan-400/5 px-5 py-2.5 text-sm font-medium
          text-cyan-400 transition hover:bg-cyan-400
          hover:text-slate-950 sm:block"
        >
          Let's Talk
        </a>
      </nav>

      {/* Hero */}
      <main
        className="relative z-10 mx-auto flex min-h-[calc(100vh-100px)]
        max-w-7xl items-center px-6 py-16 lg:px-8"
      >
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            {/* Availability */}
            <div
              className="mb-7 inline-flex items-center gap-2 rounded-full
              border border-emerald-400/20 bg-emerald-400/5
              px-4 py-2 text-sm text-emerald-400"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className="absolute inline-flex h-full w-full
                  animate-ping rounded-full bg-emerald-400 opacity-75"
                />

                <span
                  className="relative inline-flex h-2.5 w-2.5
                  rounded-full bg-emerald-400"
                />
              </span>
              Available for opportunities
            </div>

            {/* Small Heading */}
            <p className="mb-4 text-lg font-medium text-cyan-400">Hi, I'm</p>

            {/* Name */}
            <h1
              className="text-6xl font-black tracking-tight
              sm:text-7xl lg:text-5xl"
            >
              Kannayira Moorthy M<span className="text-cyan-400">.</span>
            </h1>

            {/* Role */}
            <h2
              className="mt-5 text-3xl font-bold leading-tight
              text-slate-200 sm:text-3xl"
            >
              MERN Stack{" "}
              <span
                className="bg-gradient-to-r from-cyan-400
                to-blue-500 bg-clip-text text-transparent"
              >
                Developer
              </span>
            </h2>

            {/* Description */}
            <p
              className="mt-6 max-w-xl text-base leading-8
              text-slate-400 "
            >
              I build modern, responsive and scalable web applications using
              React.js, Node.js, Express.js and MongoDB. Passionate about clean
              code, great user experiences and turning ideas into real-world
              applications.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group rounded-xl bg-cyan-400 px-7 py-3.5
                font-semibold text-slate-950 shadow-lg
                shadow-cyan-400/20 transition duration-300
                hover:-translate-y-1 hover:bg-cyan-300"
              >
                My Projects
                <span
                  className="ml-2 inline-block transition
                  group-hover:translate-x-1"
                >
                  →
                </span>
              </a>

              <a
                href={resume}
                download
                className="rounded-xl border border-slate-700
                bg-slate-900/50 px-7 py-3.5 font-semibold
                text-slate-200 backdrop-blur transition duration-300
                hover:-translate-y-1 hover:border-cyan-400/50
                hover:text-cyan-400"
              >
                Resume
              </a>

              <a
                href="https://github.com/kannan1107"
                target="_blank"
                className="rounded-xl border border-slate-700
                bg-slate-900/50 px-7 py-3.5 font-semibold
                text-slate-200 backdrop-blur transition duration-300
                hover:-translate-y-1 hover:border-cyan-400/50
                hover:text-cyan-400"
              >
                <FaGithub />
              </a>
            </div>

            {/* Tech Stack */}
            <div className="mt-10">
              <p
                className="mb-4 text-xs uppercase tracking-[0.25em]
                text-slate-600"
              >
                Tech Stack
              </p>

              <div className="flex flex-wrap gap-3">
                {["MongoDB", "Express.js", "React.js", "Node.js", "MYSQL"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-slate-800
                    bg-slate-900/60 px-3.5 py-2 text-sm
                    text-slate-400 transition hover:border-cyan-400/40
                    hover:text-cyan-400"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* RIGHT - HERO IMAGE */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Floating Glow */}
            <div
              className="absolute h-80 w-80 rounded-full
              bg-cyan-500/10 blur-3xl"
            />

            <div className="flex items-center gap-3">
              <img
                src={heroImage}
                alt="My avatar"
                className="h-140 w-140 rounded-full"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Scroll Indicator */}
      <a
        href="#skills"
        aria-label="Scroll to explore skills"
        className="absolute bottom-6 left-1/2 z-20
        flex -translate-x-1/2 flex-col items-center gap-2
        text-xs text-slate-500 transition hover:text-cyan-400"
      >
        <span className="animate-pulse">SCROLL TO EXPLORE</span>
        <span className="text-lg leading-none text-cyan-400">↓</span>
      </a>

      {/* Skills */}
    </section>
  );
};

export default Intro;
