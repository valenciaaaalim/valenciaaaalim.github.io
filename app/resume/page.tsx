"use client"

import { Button } from "@/components/ui/button"
import { Download, Printer } from "lucide-react"

export default function ResumePage() {
  const handlePrint = () => {
    window.print()
  }

  const handleDownload = () => {
    // In a real application, this would download a PDF version
    window.print()
  }

  return (
    <div className="min-h-screen">
      {/* Print Actions - Hidden in print */}
      <div className="print:hidden sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Resume</h1>
            <div className="flex gap-2">
              <Button onClick={handlePrint} variant="outline" className="gap-2 bg-transparent neon-focus">
                <Printer className="w-4 h-4" /> Print
              </Button>
              <Button onClick={handleDownload} className="gap-2 neon-focus">
                <Download className="w-4 h-4" /> Download PDF
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Content */}
      <div className="container mx-auto px-4 py-12 print:py-0">
        <div className="max-w-4xl mx-auto bg-background print:bg-white">
          {/* Header */}
          <header className="mb-8 print:mb-6">
            <h1 className="text-4xl font-display font-bold mb-2 print:text-3xl">Valencia Arlin Halim</h1>
            <p className="text-xl text-muted-foreground mb-4 print:text-base print:text-gray-600">
              Design × AI × Engineering
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground print:text-gray-600 print:gap-3">
              <span>valenciaarlin.halim@gmail.com</span>
              <span>•</span>
              <span>linkedin.com/in/valenciaarlinhalim</span>
              <span>•</span>
              <span>Singapore</span>
            </div>
          </header>

          {/* Summary */}
          <section className="mb-8 print:mb-6">
            <h2 className="text-2xl font-display font-bold mb-3 print:text-xl print:border-b print:border-gray-300 print:pb-1">
              Professional Summary
            </h2>
            <p className="text-muted-foreground leading-relaxed print:text-gray-700 print:text-sm">
              Designer and engineer with ~1 year professional UI/UX experience and cross-disciplinary skills in frontend
              development, ML prototyping, and rapid physical prototyping. Proven track record of delivering measurable
              impact: 20% CSR cost reduction ($4M/yr), +49% conversion, 100% precision across complex systems. Seeking
              full-time roles in UI/UX Design, Product Design, Frontend UI Engineering, or Design Engineering.
            </p>
          </section>

          {/* Skills */}
          <section className="mb-8 print:mb-6">
            <h2 className="text-2xl font-display font-bold mb-3 print:text-xl print:border-b print:border-gray-300 print:pb-1">
              Skills
            </h2>
            <div className="space-y-2 print:text-sm">
              <p>
                <span className="font-semibold">Design:</span> Figma, Webflow, Wireframes, Mockups, User story flows,
                AutoCAD, Rhino, Grasshopper
              </p>
              <p>
                <span className="font-semibold">Software:</span> Python, Cucumber, HTML, JSON, CSS, React, JavaScript,
                Ruby, GAMA
              </p>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-8 print:mb-6">
            <h2 className="text-2xl font-display font-bold mb-4 print:text-xl print:border-b print:border-gray-300 print:pb-1">
              Professional Experience
            </h2>
            <div className="space-y-6 print:space-y-4">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-display font-semibold print:text-base">Exhibit Engineer</h3>
                    <p className="text-accent-1 font-medium print:text-gray-900">SPACElogic Pte. Ltd., Singapore</p>
                  </div>
                  <span className="text-sm text-muted-foreground print:text-gray-600">May 2025 - Aug 2025</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground print:text-gray-700 print:text-sm">
                  <li>
                    Automated a precision laser pointing calibration pipeline using Grasshopper and Rhino, achieving
                    100% pointing accuracy across 67 interactive laser modules at the ArtScience Museum's Future World
                    exhibit.
                  </li>
                  <li>
                    Managed and engineered a $6000 project of a misting cubicle installation for the Singapore Art
                    Museum's How to Dream Worlds exhibition with artist Masuri Mazlan, delivering 100% operational
                    uptime throughout the 3-month showcase.
                  </li>
                  <li>
                    Initiated and implemented a Notion sprint board to centralise project tracking, improving team
                    coordination, task visibility for 6 engineers, and overall delivery efficiency by 50%.
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-display font-semibold print:text-base">Software and UX Engineer</h3>
                    <p className="text-accent-1 font-medium print:text-gray-900">Vidacity Pte. Ltd., Singapore</p>
                  </div>
                  <span className="text-sm text-muted-foreground print:text-gray-600">Feb 2025 - Apr 2025</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground print:text-gray-700 print:text-sm">
                  <li>
                    Devised and engineered a 3D simulator trash management tool using GAML (Java-based domain-specific
                    language) to optimise cleaning routes based on dynamic trash infill, preventing bin overflows,
                    reducing cleaner travel distance by 50%.
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-display font-semibold print:text-base">
                      UIUX Designer and AI Researcher
                    </h3>
                    <p className="text-accent-1 font-medium print:text-gray-900">Syzl Inc., Toronto, Canada</p>
                  </div>
                  <span className="text-sm text-muted-foreground print:text-gray-600">Aug 2023 - Jul 2024</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground print:text-gray-700 print:text-sm">
                  <li>
                    Headed the app UI/UX and boosted customer conversion by 49% through strategic design thinking and
                    user interviews, integrating key fixes and features in screen workflows.
                  </li>
                  <li>
                    Spearheaded a 1-day rebranding, developed an agnostic design system and launched AI-based research,
                    saving $2,000.
                  </li>
                  <li>
                    Founded a custom project management system, saving $2,500 annually by eliminating paid external
                    tools, and led the maintenance and migration of project management.
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-display font-semibold print:text-base">Frontend Developer</h3>
                    <p className="text-accent-1 font-medium print:text-gray-900">DBS Bank Ltd.</p>
                  </div>
                  <span className="text-sm text-muted-foreground print:text-gray-600">May 2023 - Aug 2023</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground print:text-gray-700 print:text-sm">
                  <li>
                    Designed and developed a banking app feature that handles and digitalises fund transfer dispute
                    issues with Google API and generative AI, using React JS, HTML, CSS, JSON, Cucumber.
                  </li>
                  <li>
                    Accomplished the reduction of CSR costs by 20%, amounting to $4 million in Singapore annually, and
                    selected by DBS to implement these new features into their digital banking app.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-8 print:mb-6 print:break-inside-avoid">
            <h2 className="text-2xl font-display font-bold mb-4 print:text-xl print:border-b print:border-gray-300 print:pb-1">
              Education
            </h2>
            <div className="space-y-4 print:space-y-3">
              <div>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="text-lg font-display font-semibold print:text-base">
                      Master of Science in Technology Entrepreneurship
                    </h3>
                    <p className="text-accent-1 font-medium print:text-gray-900">
                      Singapore University of Technology and Design
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground print:text-gray-600">Sep 2021 - Apr 2026</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="text-lg font-display font-semibold print:text-base">
                      Bachelor of Science in Design and Artificial Intelligence (Honors)
                    </h3>
                    <p className="text-accent-1 font-medium print:text-gray-900">
                      Singapore University of Technology and Design
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground print:text-gray-600">Sep 2021 - Apr 2026</span>
                </div>
                <p className="text-sm text-muted-foreground print:text-gray-700">
                  Enterprise Track · Minor in Computer Science
                </p>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="print:break-inside-avoid">
            <h2 className="text-2xl font-display font-bold mb-4 print:text-xl print:border-b print:border-gray-300 print:pb-1">
              Certifications
            </h2>
            <ul className="space-y-2 print:space-y-1">
              <li className="text-sm">
                <span className="font-semibold">Google Cloud Certified Professional Machine Learning Engineer</span>
                <span className="text-muted-foreground print:text-gray-600"> - Jun 2025</span>
              </li>
              <li className="text-sm">
                <span className="font-semibold">AI for Industries Course</span>
                <span className="text-muted-foreground print:text-gray-600"> - AI Singapore, Aug 2022</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
