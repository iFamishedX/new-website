import GlassCard from "../components/GlassCard"
import GlassButton from "../components/GlassButton"

const projects = [
  {
    name: "HungerBridge",
    description:
      "A lightweight multiloader HTTP bridge for Minecraft servers. Provides secure run, log, and ping endpoints for automation, dashboards, and remote control.",
    stack: ["Fabric", "Paper", "Purpur", "Quilt", "Folia"],
    features: [
      "Secure /run, /log, /ping endpoints",
      "Zero-noise, automation-focused design",
      "Ideal for dashboards and remote server tooling",
    ],
    github: "https://github.com/iFamishedX/HungerBridge",
    modrinth: "https://modrinth.com/project/hungerbridge",
  },
  {
    name: "HungerLib",
    description:
      "A Python library mainly for interacting with Minecraft servers. Clients for command execution, log streaming, and server status polling.",
    stack: ["Python", "Library", "API"],
    features: [
      "Command execution and log streaming",
      "Pterodactyl Panel integration",
      "Clean API and codebase, ideal for automation and scripting",
      "Server status polling",
      "Lightweight and easy to integrate",
    ],
    github: "https://github.com/iFamishedX/HungerLib",
    pypi: "https://pypi.org/project/hungerlib/",
  },
  {
    name: "MapRes",
    description:
      "A fast, modern string mapping Python library designed with scalability in mind.",
    stack: ["Python", "Utility"],
    features: [
      "Optimized for speed and low memory usage",
    ],
    github: "https://github.com/iFamishedX/mapres",
    pypi: "https://pypi.org/project/mapres/",
  },
  {
    name: "OptiFine for Fabric",
    description:
      "A modern OptiFine alternative built natively for Fabric. Provides performance boosts, visual enhancements, and shader support where applicable.",
    stack: ["Fabric", "Performance", "Shaders"],
    features: [
      "Performance enhancements",
      "Visual improvements",
      "Shader support (where applicable)",
    ],
    github: "https://github.com/iFamishedX/optifine-for-fabric",
    modrinth: "https://modrinth.com/project/optifine-for-fabric",
  },
  {
    name: "The Hunger SMP",
    description:
      "A semi-anarchy Minecraft server focused on performance and minimal rules. Powered by custom tooling including HungerBridge and HungerLib.",
    stack: ["SMP", "Semi-Anarchy", "Performance"],
    features: [
      "Minimal rules, high freedom",
      "Performance-tuned server environment",
      "Custom backend tooling",
    ],
    website: "https://hungersmp.com/",
    modrinth: "https://modrinth.com/server/the-hunger-smp",
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

                {p.modrinth && (
                  <GlassButton href={p.modrinth} size="sm" variant="primary">
                    Modrinth
                  </GlassButton>
                )}

                {p.pypi && (
                  <GlassButton href={p.pypi} size="sm" variant="primary">
                    PyPI
                  </GlassButton>
                )}

                {p.website && (
                  <GlassButton href={p.website} size="sm" variant="primary">
                    Website
                  </GlassButton>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  )
}
