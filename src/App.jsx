import { useEffect, useState } from "react";
import "./App.css";
import Intro from "./pages/Intro";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Footer from "./component/Fooder";

const burstColors = ["#22d3ee", "#60a5fa", "#a78bfa", "#34d399", "#facc15"];

function LinkBurst() {
  const [bursts, setBursts] = useState([]);

  useEffect(() => {
    const handleLinkClick = (event) => {
      const link = event.target.closest("a");

      if (!link) return;

      const burst = {
        id: Date.now(),
        x: event.clientX,
        y: event.clientY,
      };

      setBursts((currentBursts) => [...currentBursts, burst]);
      window.setTimeout(() => {
        setBursts((currentBursts) =>
          currentBursts.filter((currentBurst) => currentBurst.id !== burst.id),
        );
      }, 500);

      const target = link.getAttribute("href");
      const isInternalLink = target?.startsWith("#");
      const isDownload = link.hasAttribute("download");
      const opensNewTab = link.target === "_blank";

      if (isDownload || opensNewTab || !target) return;

      if (!isInternalLink) {
        event.preventDefault();
        window.setTimeout(() => {
          window.location.href = target;
        }, 220);
        return;
      }

      const section = document.querySelector(target);

      if (!section) return;

      event.preventDefault();
      window.setTimeout(() => {
        section.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", target);
      }, 220);
    };

    document.addEventListener("click", handleLinkClick);

    return () => document.removeEventListener("click", handleLinkClick);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
      {bursts.map((burst) => (
        <div
          key={burst.id}
          className="link-burst"
          style={{ left: burst.x, top: burst.y }}
        >
          {burstColors.map((color, index) => (
            <span
              key={color}
              className="link-spark"
              style={{
                "--spark-color": color,
                "--spark-angle": `${index * 72}deg`,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <>
      <LinkBurst />
      {/* <Navbar /> */}
      <Intro />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
