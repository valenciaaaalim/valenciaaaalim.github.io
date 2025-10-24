import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

export default function ExperiencePage() {
  const professionalExperience = [
    {
      role: "Exhibit Engineer",
      org: "SPACElogic Pte. Ltd.",
      location: "Singapore",
      dates: "May 2025 - Aug 2025",
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
      bullets: [
        "Devised and engineered a 3D simulator trash management tool using GAML (Java-based domain-specific language) to optimise cleaning routes based on dynamic trash infill, preventing bin overflows, reducing cleaner travel distance by 50%.",
      ],
    },
    {
      role: "UI/UX Designer and AI Researcher",
      org: "Syzl Inc.",
      location: "Toronto, Canada",
      dates: "Aug 2023 - Jul 2024",
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
      bullets: [
        "Designed and developed a banking app feature that handles and digitalises fund transfer dispute issues with Google API and generative AI, using React JS, HTML, CSS, JSON, Cucumber.",
        "Accomplished the reduction of CSR costs by 20%, amounting to $4 million in Singapore annually, and selected by DBS to implement these new features into their digital banking app.",
      ],
    },
  ]

  const projectsAndLabs = [
    {
      title: "SUTD Open House Photo Booth",
      role: "Software and UX Engineer",
      dates: "Feb 2025",
      description:
        "Built an interactive photo booth that does instant image-to-image transformation of portraits into Renaissance style paintings using diffusion models, then printed out, garnering over 80 customers a day.",
      link: null,
    },
    {
      title: "Traffic Accident Machine Learning",
      role: "AI Engineer",
      dates: "Nov 2024",
      description:
        "Created a model that identifies traffic accidents from tweets in Indonesian, with 0.83 accuracy and 0.84 precision.",
      link: null,
    },
    {
      title: "AI × Humans in Car Design (Neptinium)",
      role: "Product Designer",
      dates: "Feb 2023 - Apr 2023",
      description:
        "Designed Neptinium, a race car shell with EV hot swap and active aero features using CAD, generative design and Arduino, which was showcased to MOE Chan Chun Sing and selected for Singapore Design Week 2024. Established an AI Design Thinking Framework that optimized the iterative design process by 12.5x and published Neptinium Design Book to NLB.",
      link: null,
    },
    {
      title: "Sentiment Analysis Using Machine Learning",
      role: "AI Engineer",
      dates: "Jan 2023 - Apr 2023",
      description:
        "Developed an ML model and web-scraping algorithm to conduct sentiment analysis and identify areas of improvement for a Dyson AM07 fan, handling all real time data from Youtube transcripts, comments, Shopee and Amazon reviews.",
      link: null,
    },
  ]

  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Experience</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Professional roles and notable projects showcasing cross-disciplinary impact in design, AI, and
              engineering.
            </p>
          </div>

          {/* Professional Experience */}
          <div className="mb-20">
            <h2 className="text-3xl font-display font-bold mb-8">Professional</h2>
            <div className="space-y-12">
              {professionalExperience.map((job, index) => (
                <div key={index} className="glass-card rounded-2xl p-6 border-l-4 border-accent-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-display font-semibold mb-1">{job.role}</h3>
                      <p className="text-accent-1 font-medium">
                        {job.org} · {job.location}
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground mt-1 md:mt-0">{job.dates}</span>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {job.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="text-muted-foreground leading-relaxed flex gap-3">
                        <span className="text-accent-1 mt-1.5">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects & Labs */}
          <div>
            <h2 className="text-3xl font-display font-bold mb-8">Projects & Labs</h2>
            <div className="space-y-8">
              {projectsAndLabs.map((project, index) => (
                <div key={index} className="glass-card rounded-2xl p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-display font-semibold mb-1">{project.title}</h3>
                      <p className="text-accent-2 font-medium text-sm">{project.role}</p>
                    </div>
                    <div className="flex items-center gap-3 mt-2 md:mt-0">
                      <span className="text-sm text-muted-foreground">{project.dates}</span>
                      {project.link && (
                        <Button asChild variant="ghost" size="sm" className="gap-1">
                          <Link href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-3 h-3" />
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mt-3">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
