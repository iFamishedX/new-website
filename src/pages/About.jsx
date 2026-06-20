import GlassCard from "../components/GlassCard"

const timeline = [
  {
    year: "Started",
    title: "Minecraft Modding",
    text: "Began crafting client-side mods and performance patches for Fabric-based setups.",
  },
  {
    year: "Growth",
    title: "Plugin Development",
    text: "Moved into server-side tooling with lightweight multiloader bridges and command APIs.",
  },
  {
    year: "Scaling",
    title: "Server Infrastructure",
    text: "Designed automation pipelines and remote-control endpoints for SMP backends.",
  },
  {
    year: "Automation",
    title: "Cloudflare Automation",
    text: "Wired up edge automation, DNS routing, and proxy tooling to keep infra fast and secure.",
  },
  {
    year: "Today",
    title: "Open-Source Release",
    text: "Shipping HungerBridge, HungerLib, and MapRes alongside community SMP hosting.",
  },
]

export default function About() {
  return (
    <div className="page">
      <div className="page-header fade-in-up">
        <h1>About</h1>
        <p>The story, the skills, and the milestones behind the work.</p>
      </div>

      <section className="section">
        <GlassCard variant="profile" className="fade-in-up">
          <div className="profile-avatar" aria-hidden="true">iF</div>
          <h2 className="profile-name">iFamished</h2>
          <p className="profile-tagline">Developer · Creator · Minecraft builder</p>
          <div className="profile-bio">
            <p>
              I build Minecraft tooling that spans client enhancements, plugin
              development, and full server infrastructure. My work focuses on the
              multiloader ecosystem — Fabric, Paper, Purpur, Quilt, and NeoForge —
              with an emphasis on performance, stability, and clean automation.
            </p>
            <p>
              Recent focus has been on Minecraft modding and plugin development
              through projects like HungerBridge and HungerLib, building async
              tooling that turns remote server control into a first-class API.
            </p>
            <p>
              On the infrastructure side, I run Cloudflare automation for edge
              routing and proxy management, keeping servers fast, observable,
              and resilient under load.
            </p>
          </div>
        </GlassCard>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Skills & Milestones</h2>
          <p>How the toolkit came together over time.</p>
        </div>
        <div className="timeline stagger">
          {timeline.map((item) => (
            <div key={item.title} className="timeline-item">
              <span className="timeline-meta">{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
