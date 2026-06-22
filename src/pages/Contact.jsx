import { GlassCard, GlassButton } from "ifamished-ui"

const contactLinks = [
  {
    label: "Discord",
    href: "https://discord.com/users/iFamished",
    description: "DM me directly or ping me in shared servers.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.317 4.369a19.91 19.91 0 0 0-4.885-1.515.07.07 0 0 0-.073.035 13.2 13.2 0 0 0-.608 1.25 18.27 18.27 0 0 0-5.4 0 12.64 12.64 0 0 0-.617-1.25.07.07 0 0 0-.073-.035 19.9 19.9 0 0 0-4.885 1.515.064.064 0 0 0-.03.025C2.02 9.04 1.37 13.58 1.662 18.063a.08.08 0 0 0 .03.056 19.96 19.96 0 0 0 5.993 3.03.07.07 0 0 0 .076-.025c.462-.63.874-1.295 1.226-1.994a.07.07 0 0 0-.038-.098 13.1 13.1 0 0 1-1.872-.878.07.07 0 0 1-.007-.116c.126-.094.252-.19.372-.287a.07.07 0 0 1 .073-.01c3.927 1.793 8.18 1.793 12.062 0a.07.07 0 0 1 .074.009c.12.098.246.194.373.288a.07.07 0 0 1-.006.116 12.3 12.3 0 0 1-1.873.878.07.07 0 0 0-.037.099c.36.698.773 1.362 1.225 1.993a.07.07 0 0 0 .076.025 19.9 19.9 0 0 0 6.002-3.03.07.07 0 0 0 .03-.055c.5-6.43-.838-10.946-3.548-13.67a.06.06 0 0 0-.03-.026ZM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.419 0 1.334-.955 2.419-2.157 2.419Zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.419 0 1.334-.947 2.419-2.157 2.419Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:contact@ifamished.dev",
    description: "For longer thoughts, proposals, or anything that needs detail.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4 4h16a2 2 0 0 1 2 2v1l-10 6L2 7V6a2 2 0 0 1 2-2Zm18 5.236v8.764a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.236l10 6 10-6Z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/iFamishedX",
    description: "Source code, experiments, and the guts behind most of my projects.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.31 6.84 9.66.5.1.68-.22.68-.48v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.12-1.52-1.12-1.52-.92-.65.07-.64.07-.64 1.02.07 1.56 1.07 1.56 1.07.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.8c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.95-2.34 4.82-4.57 5.07.36.32.68.94.68 1.9v2.82c0 .26.18.58.69.48A10.3 10.3 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
      </svg>
    ),
  },
  {
    label: "Modrinth",
    href: "https://modrinth.com/user/iFamished",
    description: "Minecraft mods, server tooling, and releases built for real servers.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.252.004a11.78 11.768 0 0 0-8.92 3.73a11 11 0 0 0-2.17 3.11a11.37 11.359 0 0 0-1.16 5.169c0 1.42.17 2.5.6 3.77c.24.759.77 1.899 1.17 2.529a12.3 12.298 0 0 0 8.85 5.639c.44.05 2.54.07 2.76.02c.2-.04.22.1-.26-1.7l-.36-1.37l-1.01-.06a8.5 8.489 0 0 1-5.18-1.8a5.3 5.3 0 0 1-1.3-1.26c0-.05.34-.28.74-.5a37.572 37.545 0 0 1 2.88-1.629c.03 0 .5.45 1.06.98l1 .97l2.07-.43l2.06-.43l1.47-1.47c.8-.8 1.48-1.5 1.48-1.52c0-.09-.42-1.63-.46-1.7c-.04-.06-.2-.03-1.02.18c-.53.13-1.2.3-1.45.4l-.48.15l-.53.53l-.53.53l-.93.1l-.93.07l-.52-.5a2.7 2.7 0 0 1-.96-1.7l-.13-.6l.43-.57c.68-.9.68-.9 1.46-1.1c.4-.1.65-.2.83-.33c.13-.099.65-.579 1.14-1.069l.9-.9l-.7-.7l-.7-.7l-1.95.54c-1.07.3-1.96.53-1.97.53c-.03 0-2.23 2.48-2.63 2.97l-.29.35l.28 1.03c.16.56.3 1.16.31 1.34l.03.3l-.34.23c-.37.23-2.22 1.3-2.84 1.63c-.36.2-.37.2-.44.1c-.08-.1-.23-.6-.32-1.03c-.18-.86-.17-2.75.02-3.73a8.84 8.84 0 0 1 7.9-6.93c.43-.03.77-.08.78-.1c.06-.17.5-2.999.47-3.039c-.01-.02-.1-.02-.2-.03Zm3.68.67c-.2 0-.3.1-.37.38c-.06.23-.46 2.42-.46 2.52c0 .04.1.11.22.16a8.51 8.499 0 0 1 2.99 2a8.38 8.379 0 0 1 2.16 3.449a6.9 6.9 0 0 1 .4 2.8c0 1.07 0 1.27-.1 1.73a9.4 9.4 0 0 1-1.76 3.769c-.32.4-.98 1.06-1.37 1.38c-.38.32-1.54 1.1-1.7 1.14c-.1.03-.1.06-.07.26c.03.18.64 2.56.7 2.78l.06.06a12.07 12.058 0 0 0 7.27-9.4c.13-.77.13-2.58 0-3.4a11.96 11.948 0 0 0-5.73-8.578c-.7-.42-2.05-1.06-2.25-1.06Z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@iFamished",
    description: "Videos, showcases, and anything that benefits from a screen recording.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M21.8 8.001a2.75 2.75 0 0 0-1.93-1.947C18.23 5.5 12 5.5 12 5.5s-6.23 0-7.87.554A2.75 2.75 0 0 0 2.2 8.001C1.65 9.65 1.65 12 1.65 12s0 2.35.55 3.999a2.75 2.75 0 0 0 1.93 1.947C5.77 18.5 12 18.5 12 18.5s6.23 0 7.87-.554a2.75 2.75 0 0 0 1.93-1.947C22.35 14.35 22.35 12 22.35 12s0-2.35-.55-3.999ZM10.5 14.75v-5.5L15 12l-4.5 2.75Z" />
      </svg>
    ),
  },
  {
    label: "ifamished.com",
    href: "https://ifamished.com",
    description: "Main site and entry point into everything else I’m building.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3a9 9 0 100 18 9 9 0 000-18zm0 0c2.5 2.5 4 5.5 4 9s-1.5 6.5-4 9m0-18c-2.5 2.5-4 5.5-4 9s1.5 6.5 4 9m-7-9h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "optifineforfabric.com",
    href: "https://optifineforfabric.com",
    description: "Home of OptiFine for Fabric — performance, visuals, and shaders.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M9 15.5 11.5 9 15 15.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="11.5" cy="9" r="0.9" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "hungersmp.com",
    href: "https://hungersmp.com",
    description: "The Hunger SMP — semi‑anarchy, performance‑tuned, backed by custom tooling.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M7 13h4M7 10h6M7 16h3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <div className="page">
      <div className="page-header fade-in-up">
        <h1>Contact</h1>
        <p>Find me across the web — wherever you prefer to reach out.</p>
      </div>

      <section className="section">
        <div
          className="contact-socials"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "var(--space-3)",
            marginTop: "var(--space-3)",
          }}
        >
          {contactLinks.map((link, index) => (
            <GlassCard
              key={link.label}
              className="contact-card fade-in-up"
              style={{
                maxWidth: 320,
                flex: "1 1 260px",
                textAlign: "left",
                animationDelay: `${index * 0.06}s`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-2)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--space-2)",
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "999px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background:
                        "radial-gradient(circle at top, rgba(34,211,238,0.25), transparent 70%)",
                    }}
                  >
                    {link.icon}
                  </div>
                  <div>
                    <h3
                      style={{
                        margin: 0,
                        fontSize: "0.98rem",
                      }}
                    >
                      {link.label}
                    </h3>
                    <p
                      className="text-muted"
                      style={{
                        margin: 0,
                        fontSize: "0.8rem",
                      }}
                    >
                      {link.description}
                    </p>
                  </div>
                </div>

                <GlassButton
                  href={link.href}
                  variant="primary"
                  size="sm"
                  block
                  style={{
                    transformOrigin: "center",
                    transition:
                      "transform 0.25s var(--ease), box-shadow 0.25s var(--ease)",
                  }}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </GlassButton>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  )
}
