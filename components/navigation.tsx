"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Github, Linkedin, Mail, Twitter, Download } from "lucide-react"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Certifications", href: "#certifications" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

const socialLinks = [
  { icon: Github, href: "https://github.com/tishajeswani33", label: "GitHub" },
  { icon: Linkedin, href: "www.linkedin.com/in/tisha-jeswani", label: "LinkedIn" },
  { icon: Mail, href: "mailto:tishajeswani9@gmail.com", label: "Email" },
]

const handleResumeDownload = () => {
  const link = document.createElement("a")
  link.href = "/TishaJeswani_InternshalaResume.pdf"
  link.download = "Tisha_Resume.pdf"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold font-montserrat text-primary">Tisha Jeswani </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <Button
              onClick={handleResumeDownload}
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent"
            >
              <Download className="h-4 w-4 mr-2" />
              Resume
            </Button>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : "_self"}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:rotate-12 transform"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-3 py-2">
              <Button
                onClick={handleResumeDownload}
                variant="outline"
                size="sm"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 w-full mb-3 bg-transparent"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Resume
              </Button>
            </div>
            <div className="flex items-center space-x-4 px-3 py-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : "_self"}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 transform"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
