import GlassCard from "../components/GlassCard"
import GlassButton from "../components/GlassButton"

const projects = [
  {
    name: "HungerBridge",
    description:
      "Lightweight multiloader HTTP bridge for Minecraft servers. Secure run, log, and ping endpoints built for automation, dashboards, and remote control.",
    stack: ["Fabric", "Paper", "Purpur", "Quilt"],
    features: [
      "Secure /run, /log, /ping endpoints",
      "Built for automation, dashboards, remote control",
    ],
    github: "https://github.com/",
    modrinth: "https://modrinth.com/",
  },
  {
    name: "HungerLib",
    description:
      "Python library for interacting with HungerBridge. Async and sync clients for command execution, log streaming, and status polling.",
    stack: ["Python", "Async", "Sync"],
    features: [
      "Async + sync clients",
      "Command execution, log streaming, status polling",
    ],
    github: "https://github.com/",
    modrinth: "https://modrinth.com/",
  },
  {
    name: "MapRes",
    description:
      "Fast Minecraft world map renderer. High-resolution output with custom palettes, optimized for SMPs and world archives.",
    stack: ["Renderer", "High-Res", "Custom Palettes"],
    features: [
      "High-resolution output",
      "Custom palettes",
      "Optimized for SMPs and archives",
    ],
    github: "https://github.com/",
    modrinth: "https://modrinth.com/",
  },
  {
    name: "OptiFine for Fabric",
    description:
      "Modern OptiFine alternative for Fabric. Performance improvements, visual enhancements, and shader support where applicable.",
    stack: ["Fabric", "Performance", "Shaders"],
    features: [
      "Performance improvements",
      "Visual enhancements",
      "Shader support (where applicable)",
    ],
    github: "https://github.com/",
    modrinth: "https://modrinth.com/",
  },
  {
    name: "OptiFine for NeoForge",
    description:
      "NeoForge-compatible version. Modpack-friendly with a focus on stability and performance.",
    stack: ["NeoForge", "Modpack", "Stability"],
    features: [
      "Modpack-friendly",
      "Stability + performance focus",
    ],
    github: "https://github.com/",
    modrinth: "https://modrinth.com/",
  },
  {
    name: "New Moon",
    description:
      "Lightweight client-side enhancement mod. UI improvements, visual polish, and quality-of-life features.",
    stack: ["Client", "UI", "QoL"],
    features: [
      "UI improvements",
      "Visual polish",
      "QoL features",
    ],
    github: "https://github.com/",
    modrinth: "https://modrinth.com/",
  },
  {
    name: "Raven Client",
    description:
      "Custom client project with PvP-oriented enhancements. Clean UI, optimized rendering, and a lightweight footprint.",
    stack: ["Client", "PvP", "Lightweight"],
    features: [
      "Clean UI",
      "Optimized rendering",
      "Lightweight",
    ],
    github: "https://github.com/",
    modrinth: "https://modrinth.com/",
  },
  {
    name: "The Hunger SMP",
    description:
      "Semi-anarchy Minecraft server. Minimal rules, performance-tuned, powered by HungerBridge and HungerLib.",
    stack: ["SMP", "Semi-Anarchy", "Performance"],
    features: [
      "Minimal rules",
      "Performance-tuned",
      "Powered by HungerBridge + HungerLib",
    ],
    github: "https://github.com/",
    modrinth: "https://modrinth.com/",
  },
]

export default function Projects() {
  return (
    <div className="page">
      <div className="page-header fade-in-up">
        <h1>Projects</h1>
        <p>Tools, mods, and infrastructure across the Minecraft ecosystem.</p>
      </div>

      <section className="section">
        <div className="projects-grid stagger">
          {projects.map((p) => (
            <GlassCard key={p.name} className="project-card">
              <h3 className="project-title">{p.name}</h3>
              <p className="project-desc">{p.description}</p>

              <div className="project-stack">
                {p.stack.map((t) => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>

              <ul className="project-list">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <div className="project-links">
                <GlassButton href={p.github} size="sm" target="_blank" rel="noopener noreferrer">
                  GitHub
                </GlassButton>
                <GlassButton href={p.modrinth} size="sm" variant="primary">
                  Modrinth
                </GlassButton>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  )
}
