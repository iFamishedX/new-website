import Navbar from "ifamished-ui/Navbar"
import Footer from "ifamished-ui/Footer"

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
]

const socials = [
  { label: "GitHub", href: "https://github.com/iFamishedX" },
  { label: "Modrinth", href: "https://modrinth.com/user/iFamished" },
  { label: "Discord", href: "https://discord.com/users/iFamished" },
]

export default function App() {
  return (
    <>
      <Navbar
        brand="iFamished"
        brandDotColor="#22d3ee"
        navItems={navItems}
      />

      <div className="container">
        {/* routes */}
      </div>

      <Footer
        brand="iFamished"
        socials={socials}
        footerNote={`© ${new Date().getFullYear()} iFamished. All rights reserved.`}
      />
    </>
  )
}
