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
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12.252.004a11.78 11.768 0 0 0-8.92 3.73a11 11 0 0 0-2.17 3.11a11.37 11.359 0 0 0-1.16 5.169c0 1.42.17 2.5.6 3.77c.24.759.77 1.899 1.17 2.529a12.3 12.298 0 0 0 8.85 5.639c.44.05 2.54.07 2.76.02c.2-.04.22.1-.26-1.7l-.36-1.37l-1.01-.06a8.5 8.489 0 0 1-5.18-1.8a5.3 5.3 0 0 1-1.3-1.26c0-.05.34-.28.74-.5a37.572 37.545 0 0 1 2.88-1.629c.03 0 .5.45 1.06.98l1 .97l2.07-.43l2.06-.43l1.47-1.47c.8-.8 1.48-1.5 1.48-1.52c0-.09-.42-1.63-.46-1.7c-.04-.06-.2-.03-1.02.18c-.53.13-1.2.3-1.45.4l-.48.15l-.53.53l-.53.53l-.93.1l-.93.07l-.52-.5a2.7 2.7 0 0 1-.96-1.7l-.13-.6l.43-.57c.68-.9.68-.9 1.46-1.1c.4-.1.65-.2.83-.33c.13-.099.65-.579 1.14-1.069l.9-.9l-.7-.7l-.7-.7l-1.95.54c-1.07.3-1.96.53-1.97.53c-.03 0-2.23 2.48-2.63 2.97l-.29.35l.28 1.03c.16.56.3 1.16.31 1.34l.03.3l-.34.23c-.37.23-2.22 1.3-2.84 1.63c-.36.2-.37.2-.44.1c-.08-.1-.23-.6-.32-1.03c-.18-.86-.17-2.75.02-3.73a8.84 8.84 0 0 1 7.9-6.93c.43-.03.77-.08.78-.1c.06-.17.5-2.999.47-3.039c-.01-.02-.1-.02-.2-.03Zm3.68.67c-.2 0-.3.1-.37.38c-.06.23-.46 2.42-.46 2.52c0 .04.1.11.22.16a8.51 8.499 0 0 1 2.99 2a8.38 8.379 0 0 1 2.16 3.449a6.9 6.9 0 0 1 .4 2.8c0 1.07 0 1.27-.1 1.73a9.4 9.4 0 0 1-1.76 3.769c-.32.4-.98 1.06-1.37 1.38c-.38.32-1.54 1.1-1.7 1.14c-.1.03-.1.06-.07.26c.03.18.64 2.56.7 2.78l.06.06a12.07 12.058 0 0 0 7.27-9.4c.13-.77.13-2.58 0-3.4a11.96 11.948 0 0 0-5.73-8.578c-.7-.42-2.05-1.06-2.25-1.06Z"/>
                    </svg>
                    Modrinth
                  </GlassButton>
                )}

                {p.pypi && (
                  <GlassButton href={p.pypi} size="sm" variant="primary">
                    <svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
                      <path d="M32 32h96v96H32zM128 128h96v96h-96z"/>
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
