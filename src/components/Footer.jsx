const socials = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "Modrinth", href: "https://modrinth.com/" },
  { label: "Discord", href: "https://discord.com/" },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <span className="footer-brand">
            <span className="gradient-text">iFamished</span>
          </span>
          <div className="footer-social">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} iFamished. Built with React + Router.
        </p>
      </div>
    </footer>
  )
}
