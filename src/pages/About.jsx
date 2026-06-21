import { GlassCard } from "ifamished-ui"

const timeline = [
  { year: "Started", title: "Minecraft Modding", text: "Began building client-side enhancements, performance patches, and QoL mods for Fabric-based environments." },
  { year: "Growth", title: "Plugin Development", text: "Expanded into server-side tooling with lightweight multiloader bridges, command APIs, and backend utilities." },
  { year: "Scaling", title: "Server Infrastructure", text: "Designed automation pipelines, remote execution endpoints, and monitoring tools for SMP and production servers." },
  { year: "Automation", title: "Cloudflare Automation", text: "Built edge automation, DNS routing systems, and proxy workflows to keep infrastructure fast, secure, and resilient." },
  { year: "Today", title: "Open-Source Release", text: "Maintaining HungerBridge, HungerLib, MapRes, and supporting community-driven SMP hosting and tooling." },
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
            <p>I build tooling across the Minecraft ecosystem — from client-side enhancements to server plugins and full backend infrastructure...</p>
            <p>Recent work includes HungerBridge and HungerLib...</p>
            <p>On the infrastructure side, I manage Cloudflare-based automation...</p>
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
