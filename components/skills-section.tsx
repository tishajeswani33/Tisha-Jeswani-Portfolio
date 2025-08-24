"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Palette, Server } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "JavaScript", level: 70 },
      { name: "Python", level: 85 },
      { name: "Java", level: 0 },
      { name: "C++", level: 50 },
      { name: "TypeScript", level: 60 },
    ],
  },
  {
    title: "Web Development",
    icon: Palette,
    skills: [
      { name: "React", level: 70 },
      { name: "Next.js", level: 40 },
      { name: "HTML/CSS", level: 85 },
      { name: "Tailwind CSS", level: 10 },
      { name: "Node.js", level: 30 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "MongoDB", level: 40 },
      { name: "MySQL", level: 35 },
      { name: "SQL", level: 50 },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: Server,
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 40 },
      { name: "AWS", level: 10 },
      { name: "Linux", level: 0 },
      { name: "VS Code", level: 90 },
    ],
  },
]

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animateSkills, setAnimateSkills] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setTimeout(() => setAnimateSkills(true), 500)
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
    <section id="skills" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-montserrat mb-4">Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technical skills and proficiencies I've developed over the years
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className={`group relative overflow-hidden border-0 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />

              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300 group-hover:rotate-12 transform transition-transform">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="group-hover:text-primary transition-colors duration-300">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium group-hover:text-foreground transition-colors duration-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-2 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out relative overflow-hidden ${
                            animateSkills ? "skill-bar" : "w-0"
                          }`}
                          style={
                            {
                              "--skill-width": `${skill.level}%`,
                              animationDelay: `${categoryIndex * 200 + skillIndex * 100}ms`,
                            } as React.CSSProperties
                          }
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
