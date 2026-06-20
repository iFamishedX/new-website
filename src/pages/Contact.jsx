import { useState } from "react"
import GlassCard from "../components/GlassCard"
import GlassButton from "../components/GlassButton"

const socials = [
  { label: "GitHub", href: "https://github.com/iFamishedX", emoji: "↗" },
  { label: "Modrinth", href: "https://modrinth.com/user/iFamished", emoji: "↗" },
  { label: "Discord", href: "https://discord.com/users/iFamished", emoji: "↗" },
]

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: "", email: "", message: "" })
  }

  return (
    <div className="page">
      <div className="page-header fade-in-up">
        <h1>Contact</h1>
        <p>Reach out for collaboration, feature requests, or project questions.</p>
      </div>

      <section className="section">
        <GlassCard variant="contact" className="fade-in-up">
          {submitted ? (
            <div style={{ textAlign: "center", padding: "16px 0" }}>
              <h3 style={{ marginBottom: "8px" }}>Thanks!</h3>
              <p className="text-muted">Your message has been recorded.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What's on your mind?"
                  required
                />
              </div>
              <GlassButton type="submit" variant="primary" block>
                Send message
              </GlassButton>
            </form>
          )}
        </GlassCard>

        <div className="contact-socials">
          {socials.map((s) => (
            <GlassButton key={s.label} href={s.href} variant="ghost" size="sm">
              {s.label} {s.emoji}
            </GlassButton>
          ))}
        </div>
      </section>
    </div>
  )
}
