function Fooder() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden bg-[#020617] px-6 py-8 text-white"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <a href="#intro" className="text-xl font-bold tracking-tight">
          <span className="text-cyan-400">&lt;</span>
          Kannan
          <span className="text-cyan-400"> /&gt;</span>
        </a>

        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Kannayira Moorthy M. All rights reserved.
        </p>

        <div className="flex gap-5 text-sm text-slate-500">
          <a href="#intro" className="transition hover:text-cyan-400">
            Intro
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
          <a href="#intro" className="transition hover:text-cyan-400">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Fooder;
