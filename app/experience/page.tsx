"use client"

import Image from "next/image"
import { useState } from "react"

export default function ExperiencePage() {
  const professionalExperience = [
    {
      role: "Exhibit Engineer",
      org: "SPACElogic Pte. Ltd.",
      location: "Singapore",
      dates: "May 2025 - Aug 2025",
      images: ["/laser-calibration-system.jpg", "/museum-exhibit-installation.jpg"],
      bullets: [
        "Automated a precision laser pointing calibration pipeline using Grasshopper and Rhino, achieving 100% pointing accuracy across 67 interactive laser modules at the ArtScience Museum's Future World exhibit.",
        "Managed and engineered a $6000 project of a misting cubicle installation for the Singapore Art Museum's How to Dream Worlds exhibition with artist Masuri Mazlan, delivering 100% operational uptime throughout the 3-month showcase.",
        "Initiated and implemented a Notion sprint board to centralise project tracking, improving team coordination, task visibility for 6 engineers, and overall delivery efficiency by 50%.",
      ],
    },
    {
      role: "Software and UX Engineer",
      org: "Vidacity Pte. Ltd.",
      location: "Singapore",
      dates: "Feb 2025 - Apr 2025",
      images: ["/3d-simulation-interface.jpg", "/3d-trash-management-simulation.jpg"],
      bullets: [
        "Devised and engineered a 3D simulator trash management tool using GAML (Java-based domain-specific language) to optimise cleaning routes based on dynamic trash infill, preventing bin overflows, reducing cleaner travel distance by 50%.",
      ],
    },
    {
      role: "UI/UX Designer and AI Researcher",
      org: "Syzl Inc.",
      location: "Toronto, Canada",
      dates: "Aug 2023 - Jul 2024",
      images: ["/mobile-app-interface.png", "/app-design-system.jpg"],
      bullets: [
        "Headed the app UI/UX and boosted customer conversion by 49% through strategic design thinking and user interviews, integrating key fixes and features in screen workflows.",
        "Spearheaded a 1-day rebranding, developed an agnostic design system and launched AI-based research, saving $2,000.",
        "Founded a custom project management system, saving $2,500 annually by eliminating paid external tools, and led the maintenance and migration of project management.",
      ],
    },
    {
      role: "Frontend Developer",
      org: "DBS Bank Ltd.",
      location: "Singapore",
      dates: "May 2023 - Aug 2023",
      images: ["/banking-app-interface.png", "/banking-app-interface.png"],
      bullets: [
        "Designed and developed a banking app feature that handles and digitalises fund transfer dispute issues with Google API and generative AI, using React JS, HTML, CSS, JSON, Cucumber.",
        "Accomplished the reduction of CSR costs by 20%, amounting to $4 million in Singapore annually, and selected by DBS to implement these new features into their digital banking app.",
      ],
    },
  ]

  const [hoveredImage, setHoveredImage] = useState<{ jobIndex: number; imageIndex: number } | null>(null)

  return (
    <div className="min-h-screen bg-[#0b0b10]">
      <section className="container max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 py-20">
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 gradient-text">Experience</h1>
          <p className="text-xl md:text-2xl text-[#e7e7ea]/70 leading-relaxed max-w-3xl">
            A journey through design, AI, and engineering—building impactful solutions across diverse industries.
          </p>
        </div>

        <div className="space-y-24">
          {professionalExperience.map((job, jobIndex) => (
            <div key={jobIndex} className="grid md:grid-cols-2 gap-8 items-start">
              <div className="relative h-full">
                <div className="grid grid-cols-2 gap-3 h-full">
                  {job.images.map((image, imageIndex) => (
                    <div
                      key={imageIndex}
                      className={`relative rounded-xl overflow-hidden glass-card border border-[var(--accent-magenta)]/20 transition-all duration-300 cursor-pointer ${
                        hoveredImage?.jobIndex === jobIndex && hoveredImage?.imageIndex === imageIndex
                          ? "scale-150 z-20 shadow-[0_0_40px_rgba(255,61,240,0.5)]"
                          : "hover:border-[var(--accent-magenta)]/60"
                      }`}
                      style={{
                        aspectRatio: "4/3",
                      }}
                      onMouseEnter={() => setHoveredImage({ jobIndex, imageIndex })}
                      onMouseLeave={() => setHoveredImage(null)}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${job.role} at ${job.org} - Image ${imageIndex + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="h-full">
                <div className="glass-card rounded-2xl p-8 border-l-4 border-[var(--accent-blue)] h-full">
                  <div className="mb-6">
                    <h2 className="text-3xl font-display font-bold text-[#e7e7ea] mb-2">{job.role}</h2>
                    <p className="text-xl text-[var(--accent-blue)] font-semibold mb-1">{job.org}</p>
                    <div className="flex items-center gap-3 text-sm text-[#e7e7ea]/60">
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>{job.dates}</span>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {job.bullets.map((bullet, bulletIdx) => (
                      <li key={bulletIdx} className="text-[#e7e7ea]/80 leading-relaxed flex items-start gap-3">
                        <span className="text-[var(--accent-magenta)] mt-1.5 text-lg">→</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
