"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, ExternalLink, Calendar, FileText } from "lucide-react"

const certifications = [
  {
    title: "IBM Data Science Tools",
    issuer: "IBM Skills Builds",
    date: "22/08/2025",
    credentialId: "IBM-DS0105-En",
    skills: ["R", "Python", "MySQL"],
    type: "link" as "link" | "pdf",
    link: "https://students.yourlearning.ibm.com/certificate/share/49a74a04fcewogICJsZWFybmVyQ05VTSIgOiAiMzQwMjk5MlJFRyIsCiAgIm9iamVjdFR5cGUiIDogIkFDVElWSVRZIiwKICAib2JqZWN0SWQiIDogIlNOLUNPVVJTRS1WMTpDT0dOSVRJVkVDTEFTUytEUzAxMDVFTitWMyIKfQd0f9cd34f0-10",
  },
  {
    title: "Describe Azure storage services",
    issuer: "Microsoft",
    date: "14/02/2025",
    credentialId: "",
    skills: ["Data Analysis", "SQL", "Tableau", "R"],
    type: "pdf" as "link" | "pdf",
    link: "/Certificates/azure storage services.pdf",
  },
  {
    title: " Responsible generative AI",
    issuer: "Microsoft",
    date: "20/01/2025",
    credentialId: "",
    skills: ["LLMS", "OCR Tools", "Ml", "SQL"],
    type: "pdf" as "link" | "pdf",
    link: "/Certificates/responsible generative ai.pdf",
  },
  {
    title: "Fundamentals of Generative AI",
    issuer: "Microsoft",
    date: "20/01/2025",
    credentialId: "",
    skills: ["Machine Learning", "Python", "TensorFlow", "Neural Networks"],
    type: "pdf" as "link" | "pdf",
    link: "/Certificates/fundamentals of generative ai.pdf",
  },
]

export default function CertificationsSection() {
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

  const handleCertificateView = (cert: (typeof certifications)[0]) => {
    if (cert.type === "pdf") {
      window.open(cert.link, "_blank")
    } else {
      window.open(cert.link, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <section id="certifications" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-montserrat mb-4">Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and courses that validate my expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className={`transition-all duration-700 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 hover:scale-[1.02] group relative overflow-hidden border-2 hover:border-primary/30 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <CardHeader className="relative z-10">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <Award className="h-6 w-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                        {cert.title}
                      </CardTitle>
                      <p className="text-primary font-medium text-sm group-hover:text-primary/80 transition-colors duration-300">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCertificateView(cert)}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 flex items-center space-x-1"
                    aria-label={cert.type === "pdf" ? "View PDF certificate" : "View certificate"}
                  >
                    {cert.type === "pdf" ? <FileText className="h-4 w-4" /> : <ExternalLink className="h-4 w-4" />}
                  </button>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="flex items-center space-x-1 text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{cert.date}</span>
                  {cert.credentialId && (
                    <>
                      <span className="mx-2">•</span>
                      <span className="text-xs">ID: {cert.credentialId}</span>
                    </>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="text-xs group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300"
                      style={{ animationDelay: `${idx * 50}ms` }}
                    >
                      {skill}
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
