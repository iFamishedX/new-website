import { GlassCard, GlassButton } from "ifamished-ui"

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
      "Optimized for speed and low memory usage"
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
                {p.website && (
                  <GlassButton href={p.website} size="sm" variant="primary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M12 3a9 9 0 100 18 9 9 0 000-18zm0 0c2.5 2.5 4 5.5 4 9s-1.5 6.5-4 9m0-18c-2.5 2.5-4 5.5-4 9s1.5 6.5 4 9m-7-9h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Website
                  </GlassButton>
                )}

                {p.modrinth && (
                  <GlassButton href={p.modrinth} size="sm" variant="primary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M4 4h16v16H4z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M8 8h8v8H8z" fill="currentColor"/>
                    </svg>
                    Modrinth
                  </GlassButton>
                )}

                {p.pypi && (
                  <GlassButton href={p.pypi} size="sm" variant="primary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2c-2 0-3 .5-3 2v4h6V4c0-1.5-1-2-3-2zM9 8H5c-1.5 0-2 1-2 3v2c0 2 1 3 3 3h3v-8zm6 0h4c1.5 0 2 1 2 3v2c0 2-1 3-3 3h-3v-8z" fill="currentColor"/>
                    </svg>
                    PyPI
                  </GlassButton>
                )}

                {p.github && (
                  <GlassButton href={p.github} size="sm" variant="primary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.31 6.84 9.66.5.1.68-.22.68-.48v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.12-1.52-1.12-1.52-.92-.65.07-.64.07-.64 1.02.07 1.56 1.07 1.56 1.07.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0112 6.8c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.95-2.34 4.82-4.57 5.07.36.32.68.94.68 1.9v2.82c0 .26.18.58.69.48A10.3 10.3 0 0022 12.26C22 6.58 17.52 2 12 2z"
                        fill="currentColor"
                      />
                    </svg>
                    GitHub
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
