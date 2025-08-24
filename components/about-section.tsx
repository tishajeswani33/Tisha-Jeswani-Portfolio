"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Coffee, Code2, BookOpen } from "lucide-react"

const interests = [
  { icon: Code2, label: "Coding", description: "Building innovative solutions" },
  { icon: BookOpen, label: "Learning", description: "Exploring new technologies" },
  { icon: Coffee, label: "Coffee", description: "Fuel for late-night coding" },
  { icon: Heart, label: "Open Source", description: "Contributing to community" },
]

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-montserrat mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know me better - my journey, interests, and what drives me
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className={`transition-all duration-700 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <img
                  src="/Tisha port.jpg?height=320&width=320"
                  alt="Tisha - Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* About Content */}
          <div
            className={`space-y-6 transition-all duration-700 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold font-montserrat">Hello! I'm Tisha</h3>
              <p className="text-foreground/80 leading-relaxed">
                I'm a passionate B.Tech Computer Science Engineering student with a deep love for technology and
                innovation. My journey in computer science began with curiosity about how things work behind the scenes,
                and it has evolved into a passion for creating meaningful digital experiences.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                When I'm not coding, you'll find me exploring the latest tech trends, contributing to open-source
                projects, or learning new programming languages. I believe in the power of technology to solve
                real-world problems and make a positive impact on society.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                I'm always eager to take on new challenges and collaborate with like-minded individuals who share my
                passion for innovation and excellence.
              </p>
            </div>

            {/* Interests Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {interests.map((interest, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden border-0 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm p-4 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />

                  <CardContent className="p-0 relative z-10">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300 group-hover:rotate-12 transform transition-transform">
                        <interest.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm group-hover:text-primary transition-colors duration-300">
                          {interest.label}
                        </h4>
                        <p className="text-xs text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                          {interest.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
