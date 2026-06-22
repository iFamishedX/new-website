import { GlassCard, GlassButton, usePageTitle } from "ifamished-ui"

const overview = [
  {
    icon: "</>",
    title: "Development Work",
    text: "Multiloader tooling spanning Fabric, Paper, Purpur, Quilt, and NeoForge — built for reliability.",
  },
  {
    icon: "⛏",
    title: "Minecraft Projects",
    text: "Mods, datapacks, client enhancements, and OptiFine alternatives.",
  },
  {
    icon: "⧉",
    title: "Server Infrastructure",
    text: "Automation, performance tuning, and open-source tooling powering SMP backends.",
  },
  {
    icon: "✦",
    title: "Community Involvement",
    text: "Semi-anarchy servers, PvP servers, open-source releases, and innovative projects to the wider scene.",
  },
]

export default function Home() {
  usePageTitle("iFamished | Home")

  return (
    <div className="page">
      <section className="section">
        <GlassCard variant="hero" className="hero fade-in-up">
          <h1 className="hero-name">
            <span className="gradient-text">iFamished</span>
          </h1>
          <p className="hero-subtitle">
            Developer, creator, and builder of modern Minecraft tools and infrastructure
          </p>
          <div className="hero-actions">
            <GlassButton to="/about" variant="primary">About</GlassButton>
            <GlassButton to="/projects">Projects</GlassButton>
            <GlassButton to="/contact" variant="ghost">Contact</GlassButton>
          </div>
        </GlassCard>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Overview</h2>
          <p>A snapshot of what I build across the Minecraft ecosystem and beyond.</p>
        </div>

        <div className="overview-grid stagger">
          {overview.map((item) => (
            <GlassCard key={item.title} className="overview-card">
              <span className="overview-icon" aria-hidden="true">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  )
}
