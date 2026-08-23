import react, { useEffect, useState } from "react";
import { appApi } from "../features/ApplicationApi";
import heroImage from "../assets/hero.png";

function Contact() {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouse({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [sendMail, { isLoading }] = appApi.useSendMailMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendMail(formData).unwrap();
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message.");
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden bg-[#020617] text-white p-10"
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
      <div className="absolute left-[-150px] top-[-150px] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute bottom-[-150px] right-[-150px] h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-cyan-500/[0.05] blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 max-w-3xl">
          <div className="mb-5">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Get In Touch
            </p>
          </div>

          <h1 className="text-3xl font-black tracking-tight sm:text-5xl">
            Let's{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Talk.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Have a project idea or want to work together? Feel free to reach
            out.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Contact Information */}
          <div className="rounded-2xl border border-cyan-400/20 bg-slate-900/30 p-8 backdrop-blur-md">
            <div className="grid items-center gap-6 md:grid-cols-2">
              <div>
                <h2 className="mb-6 text-2xl font-semibold text-cyan-400">
                  Get In Touch
                </h2>

                <div className="space-y-5 text-slate-300">
                  <div>
                    <h3 className="font-medium text-cyan-400">Email</h3>
                    <p>kannan11071985@gmail.com</p>
                  </div>

                  <div>
                    <h3 className="font-medium text-cyan-400">Phone</h3>
                    <p>+91 973811897</p>
                  </div>

                  <div>
                    <h3 className="font-medium text-cyan-400">Location</h3>
                    <p>Chennai, Tamilnadu, India</p>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <a
                      href="https://www.linkedin.com/in/kannayira-moorthy-marimuthu-0146b0198"
                      className="rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2 transition hover:border-cyan-400/50 hover:bg-cyan-400 hover:text-slate-950"
                    >
                      LinkedIn
                    </a>

                    <a
                      href="https://github.com/kannan1107"
                      className="rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2 transition hover:border-cyan-400/50 hover:text-cyan-400"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <img
                  src={heroImage}
                  alt="Contact profile"
                  className="h-70 w-70 rounded-full object-cover  "
                />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-8 backdrop-blur-md">
            <h2 className="mb-6 text-2xl font-semibold text-cyan-400">
              Send Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-700 bg-slate-950/60 p-4 text-slate-200 outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-700 bg-slate-950/60 p-4 text-slate-200 outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20"
                required
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-700 bg-slate-950/60 p-4 text-slate-200 outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20"
                required
              />

              <button
                type="submit"
                disabled={isLoading}
                className="w-full rounded-lg bg-cyan-400 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:opacity-50"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        <a
          href="#footer"
          aria-label="Scroll to explore footer"
          className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-xs text-slate-500 transition hover:text-cyan-400"
        ></a>
      </div>
    </section>
  );
}

export default Contact;
