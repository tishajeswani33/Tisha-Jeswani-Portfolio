"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin, Star } from "lucide-react"

const educationData = [
  {
    degree: "Bachelor of Technology in Computer Science Engineering",
    institution: "Rungta International Skills University",
    location: "Bhilai , Chhattisgarh",
    duration: "2024 - 2028",
    cgpa: "8.5/10",
    highlights: ["Data Structures & Algorithms", "Machine Learning", "Web Development", "Database Systems"],
  },
  {
    degree: "Higher Secondary Education (12th)",
    institution: "D.A.V Public School",
    location: "Bhilai , Chhattisgarh",
    duration: "2022 - 2024",
    percentage: "70%",
    highlights: ["Mathematics", "Physics", "Chemistry",],
  },
]

export default function EducationSection() {
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
    <section id="education" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-montserrat mb-4">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and the foundation of my technical knowledge
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 bg-gradient-to-br from-card via-card to-card/80 border border-border/50 hover:border-primary/30 ${
                isVisible ? "animate-slide-in-left" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />

              <CardHeader className="relative z-10">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="relative p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300 group-hover:scale-110">
                      <GraduationCap className="h-7 w-7 text-primary group-hover:text-primary transition-colors duration-300" />
                      <div className="absolute inset-0 bg-primary/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold font-montserrat group-hover:text-primary transition-colors duration-300">
                        {edu.degree}
                      </CardTitle>
                      <p className="text-primary font-semibold text-base mt-1 group-hover:text-primary/80 transition-colors duration-300">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                  <div className="relative">
                    <Badge
                      variant="secondary"
                      className="text-sm font-bold bg-gradient-to-r from-primary/20 to-primary/10 text-primary border border-primary/20 group-hover:from-primary/30 group-hover:to-primary/20 group-hover:scale-105 transition-all duration-300"
                    >
                      <Star className="h-3 w-3 mr-1" />
                      {edu.cgpa || edu.percentage}
                    </Badge>
                    <div className="absolute inset-0 bg-primary/30 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center space-x-2 group-hover:text-foreground transition-colors duration-300">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="font-medium">{edu.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 group-hover:text-foreground transition-colors duration-300">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="font-medium">{edu.location}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {edu.highlights.map((highlight, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="text-xs font-medium px-3 py-1 border-primary/30 text-foreground/80 hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-105"
                      style={{
                        transitionDelay: `${idx * 50}ms`,
                        animationDelay: `${idx * 100}ms`,
                      }}
                    >
                      {highlight}
                    </Badge>
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
