"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Folder } from "lucide-react"

const projects = [
  {
    title: "Netflix Clone",
    description:"just a frontend clone of netflix website",
    image: "/Project Image/Screenshot 2025-08-24 234209.png?height=200&width=400",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
    liveLink: "https://kamalneet.netlify.app/",
    githubLink: "https://github.com/tishajeswani33/Netflix-clone",
    featured: true,
  },
  {
    title: "Flash Card Quiz App",
    description:
      "A real-time quiz application where users can create, share, and participate in quizzes with live score tracking and leaderboards.",
    image: "/Project Image/Screenshot 2025-08-24 234632.png?height=200&width=400",
    technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
    liveLink: "https://quiz-tisha.netlify.app/",
    githubLink: "https://github.com/tishajeswani33/Flashcard-quiz",
    featured: true,
  },
  {
    title: "Tic-Tac-Toe Game",
    description:
      "A classic Tic-Tac-Toe game built with React, featuring a clean UI, two-player mode, and an AI opponent with varying difficulty levels.",
    image: "/Project Image/TICtoe.png?height=200&width=400",
    technologies: ["React", "API Integration", "Chart.js", "CSS3"],
    liveLink: "https://github.com/tishajeswani33/Tic-Tac-Toe",
    githubLink: "https://github.com/tishajeswani33/Tic-Tac-Toe",
    featured: false,
  },
  {
    title: "Word Scramble Game ",
    description:
      "A fun and interactive word scramble game where players can test their vocabulary skills by unscrambling jumbled words within a time limit.",
    image: "/Project Image/Word.png?height=200&width=400",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    liveLink: "https://pro-scramble.netlify.app/",
    githubLink: "https://github.com/tishajeswani33/Scribbly",
    featured: false,
  },
]

export default function ProjectsSection() {
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
    <section id="projects" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-montserrat mb-4">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 hover:scale-[1.02] border-2 hover:border-primary/30 relative ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              } ${project.featured ? "md:col-span-2 lg:col-span-1" : ""}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <CardHeader className="relative z-20">
                <CardTitle className="flex items-center space-x-2 group-hover:text-primary transition-colors duration-300">
                  <Folder className="h-5 w-5 text-primary group-hover:rotate-12 transition-transform duration-300" />
                  <span>{project.title}</span>
                  {project.featured && (
                    <Badge
                      variant="secondary"
                      className="text-xs group-hover:bg-primary/20 transition-colors duration-300"
                    >
                      Featured
                    </Badge>
                  )}
                </CardTitle>
              </CardHeader>

              <CardContent className="relative z-20">
                <p className="text-muted-foreground mb-4 leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="text-xs bg-background/50 border-primary/20 text-foreground hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                      style={{ animationDelay: `${idx * 50}ms` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 mt-4">
                  <Button
                    size="sm"
                    className="flex-1 bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary text-foreground hover:text-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                    asChild
                  >
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View live demo of ${project.title}`}
                      className="flex items-center justify-center"
                      onClick={(e) => {
                        if (!project.liveLink || project.liveLink.includes("your-")) {
                          e.preventDefault()
                          alert("Live demo link not yet configured for this project.")
                        }
                      }}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>

                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 bg-transparent hover:bg-primary/10 border-primary/30 hover:border-primary text-foreground hover:text-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                    asChild
                  >
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View source code for ${project.title}`}
                      className="flex items-center justify-center"
                      onClick={(e) => {
                        if (!project.githubLink || project.githubLink.includes("yourusername")) {
                          e.preventDefault()
                          alert("GitHub repository link not yet configured for this project.")
                        }
                      }}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
