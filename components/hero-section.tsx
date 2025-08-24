"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Download } from "lucide-react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`order-2 lg:order-1 transition-all duration-1000 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img
                  src="/Tisha pic-circle.png"
                  alt="Tisha - B.Tech CSE Student"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-lg rotate-12 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent/20 rounded-full animate-bounce"></div>
              <div className="absolute top-1/2 -left-8 w-8 h-8 bg-primary/30 rounded-md rotate-45 animate-pulse delay-300"></div>
            </div>
          </div>

          <div
            className={`order-1 lg:order-2 text-center lg:text-left transition-all duration-1000 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-montserrat mb-6">
              Hi, I'm <span className="text-primary">Tisha</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-6">
              B.Tech Computer Science Engineering Student
            </p>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Passionate about creating innovative solutions through code. Exploring the realms of software development,
              machine learning, and emerging technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button size="lg" className="text-lg px-8 py-3" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent" asChild>
                <a href="/TishaJeswani_InternshalaResume.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#education" className="text-muted-foreground hover:text-primary transition-colors">
            <ChevronDown className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  )
}
