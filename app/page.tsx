import Link from "next/link"
import { ArrowRight, Mail, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HomePage() {
  const metrics = [
    { value: "20% CSR cost reduction", label: "~$4M/yr", slug: "banking-dispute" },
    { value: "+49% conversion", label: "App UX redesign", slug: "app-ux" },
    { value: "100% precision", label: "67 laser modules", slug: "laser-cal" },
  ]

  const multiDisciplinaryRoles = ["UI/UX Designer", "Product Designer", "Frontend UI Engineer", "Design Engineer"]

  const skillsets = [
    {
      title: "UI/UX",
      details: ["User flows & IA", "Wireframes & prototypes", "Design systems", "Usability testing"],
    },
    {
      title: "Frontend (React)",
      details: ["Next.js + Tailwind", "TypeScript", "A11y standards", "Performance optimization"],
    },
    {
      title: "ML Prototyping",
      details: ["Model integration", "Data pipelines", "UX + AI loops", "Python & TensorFlow"],
    },
    {
      title: "3D & CAD",
      details: ["Rhino & Grasshopper", "3D printing", "Parametric design", "Rapid iteration"],
    },
    {
      title: "Leadership",
      details: ["Team coordination", "Sprint planning", "Stakeholder management", "Mentoring"],
    },
    {
      title: "Project Management",
      details: ["Agile workflows", "Resource allocation", "Timeline planning", "Risk mitigation"],
    },
    {
      title: "Agile Framework",
      details: ["Scrum ceremonies", "Sprint retrospectives", "Backlog grooming", "Continuous delivery"],
    },
    {
      title: "Entrepreneurial Spirit",
      details: ["Problem solving", "Innovation mindset", "Resource optimization", "Strategic thinking"],
    },
  ]

  const recentRoles = [
    {
      role: "Exhibit Engineer",
      org: "SPACElogic",
      period: "May 2025 - Aug 2025",
      bullets: [
        "Automated laser calibration pipeline achieving 100% pointing accuracy across 67 modules",
        "Managed $6000 misting cubicle installation with 100% operational uptime",
      ],
    },
    {
      role: "Software and UX Engineer",
      org: "Vidacity",
      period: "Feb 2025 - Apr 2025",
      bullets: [
        "Engineered 3D trash management simulator reducing cleaner travel distance by 50%",
        "Optimised cleaning routes based on dynamic trash infill to prevent bin overflows",
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[80vh] flex items-center animated-gradient-bg floating-particles noise-bg overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-[var(--accent-magenta)] to-[var(--accent-blue)] rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="container max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 py-20 md:py-32 relative z-10">
          <div className="max-w-4xl">
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-6 text-balance leading-[0.95] tracking-tight">
              <span className="gradient-text">Design × AI × Engineering</span>
            </h1>

            <p className="text-2xl md:text-3xl lg:text-4xl text-[#e7e7ea] mb-12 leading-relaxed text-pretty max-w-3xl font-medium">
              I prototype, design, and ship interfaces, products and systems.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button
                asChild
                size="lg"
                className="gap-2 neon-focus btn-vibrant-magenta border-0 text-white font-semibold"
              >
                <Link href="/projects">
                  View Projects <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" className="gap-2 neon-focus btn-outline-vibrant font-semibold">
                <Link href="/experience">Experience</Link>
              </Button>
            </div>

            <div className="flex gap-4">
              <a
                href="mailto:valenciaarlin.halim@gmail.com"
                className="flex items-center gap-2 text-[#e7e7ea]/70 hover:text-[var(--accent-blue)] transition-all hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(61,184,255,0.5)]"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm">Email</span>
              </a>
              <a
                href="https://linkedin.com/in/valenciaarlinhalim"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#e7e7ea]/70 hover:text-[var(--accent-magenta)] transition-all hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(255,61,240,0.5)]"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="https://github.com/valenciaaaalim"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#e7e7ea]/70 hover:text-[var(--accent-amber)] transition-all hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(255,179,0,0.5)]"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 py-12 -mt-24 relative z-20">
        <div className="max-w-4xl">
          <p className="text-sm text-[#e7e7ea]/70 mb-3 font-medium">My multi-disciplinary roles:</p>
          <div className="flex flex-wrap gap-2">
            {multiDisciplinaryRoles.map((role) => (
              <span
                key={role}
                className="px-4 py-2 rounded-full glass-card text-sm font-medium border border-[var(--accent-magenta)]/20 pill-hover cursor-default"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative bg-[#0b0b10]">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-[#e7e7ea]">Impact Highlights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {metrics.map((metric, index) => (
              <Link
                key={index}
                href={`/projects/${metric.slug}`}
                className="glass-card rounded-2xl p-8 hover:neon-glow transition-all group card-tilt"
              >
                <div className="text-4xl md:text-5xl font-display font-bold gradient-text mb-3 group-hover:scale-105 transition-transform">
                  {metric.value}
                </div>
                <div className="text-sm text-[#e7e7ea]/80">{metric.label}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-blue py-20 relative">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-2 text-[#e7e7ea]">Selected Work</h2>
              <p className="text-[#e7e7ea]/70">Recent projects showcasing cross-disciplinary impact</p>
            </div>
            <Button
              asChild
              variant="outline"
              className="gap-2 neon-focus btn-outline-vibrant font-semibold bg-transparent"
            >
              <Link href="/projects">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              href="/projects/banking-dispute"
              className="group block rounded-2xl glass-card overflow-hidden hover:neon-glow transition-all lg:col-span-2 card-tilt"
            >
              <div className="aspect-video relative">
                <Image
                  src="/banking-app-interface.png"
                  alt="DBS Banking Dispute Feature"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3 text-sm text-[#e7e7ea]/60">
                  <span>Frontend Developer</span>
                  <span>•</span>
                  <span>2023</span>
                  <span>•</span>
                  <span className="text-[var(--accent-amber)]">20% cost reduction</span>
                </div>
                <h3 className="text-2xl font-display font-semibold mb-2 group-hover:text-[var(--accent-magenta)] transition-colors text-[#e7e7ea]">
                  Banking Dispute Resolution
                </h3>
                <p className="text-[#e7e7ea]/70 mb-4">
                  AI-powered fund transfer dispute feature reducing CSR costs by 20% ($4M/yr)
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 rounded-md bg-[var(--accent-magenta)]/10 text-[var(--accent-magenta)] text-xs font-medium border border-[var(--accent-magenta)]/20">
                    UX
                  </span>
                  <span className="px-2 py-1 rounded-md bg-[var(--accent-blue)]/10 text-[var(--accent-blue)] text-xs font-medium border border-[var(--accent-blue)]/20">
                    React
                  </span>
                  <span className="px-2 py-1 rounded-md bg-[var(--accent-amber)]/10 text-[var(--accent-amber)] text-xs font-medium border border-[var(--accent-amber)]/20">
                    AI
                  </span>
                </div>
              </div>
            </Link>

            <Link
              href="/projects/laser-cal"
              className="group block rounded-2xl glass-card overflow-hidden hover:neon-glow transition-all card-tilt"
            >
              <div className="aspect-square relative">
                <Image
                  src="/laser-calibration-system.jpg"
                  alt="Laser Calibration System"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3 text-sm text-[#e7e7ea]/60">
                  <span>Exhibit Engineer</span>
                  <span>•</span>
                  <span>2025</span>
                </div>
                <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-[var(--accent-magenta)] transition-colors text-[#e7e7ea]">
                  Precision Laser Calibration
                </h3>
                <p className="text-[#e7e7ea]/70 mb-4 text-sm">100% precision across 67 interactive modules</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 rounded-md bg-[var(--accent-magenta)]/10 text-[var(--accent-magenta)] text-xs font-medium border border-[var(--accent-magenta)]/20">
                    Systems
                  </span>
                  <span className="px-2 py-1 rounded-md bg-[var(--accent-blue)]/10 text-[var(--accent-blue)] text-xs font-medium border border-[var(--accent-blue)]/20">
                    Grasshopper
                  </span>
                </div>
              </div>
            </Link>

            <Link
              href="/projects/app-ux"
              className="group block rounded-2xl glass-card overflow-hidden hover:neon-glow transition-all card-tilt"
            >
              <div className="aspect-square relative">
                <Image src="/mobile-app-interface.png" alt="App UX Redesign" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3 text-sm text-[#e7e7ea]/60">
                  <span>UIUX Designer</span>
                  <span>•</span>
                  <span>2024</span>
                </div>
                <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-[var(--accent-magenta)] transition-colors text-[#e7e7ea]">
                  App UX Redesign
                </h3>
                <p className="text-[#e7e7ea]/70 mb-4 text-sm">+49% conversion through strategic design</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 rounded-md bg-[var(--accent-magenta)]/10 text-[var(--accent-magenta)] text-xs font-medium border border-[var(--accent-magenta)]/20">
                    UX
                  </span>
                  <span className="px-2 py-1 rounded-md bg-[var(--accent-blue)]/10 text-[var(--accent-blue)] text-xs font-medium border border-[var(--accent-blue)]/20">
                    Figma
                  </span>
                </div>
              </div>
            </Link>

            <Link
              href="/projects/trash-sim"
              className="group block rounded-2xl glass-card overflow-hidden hover:neon-glow transition-all lg:col-span-2 card-tilt"
            >
              <div className="aspect-video relative">
                <Image
                  src="/3d-simulation-interface.jpg"
                  alt="3D Trash Management Simulator"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3 text-sm text-[#e7e7ea]/60">
                  <span>Software Engineer</span>
                  <span>•</span>
                  <span>2025</span>
                  <span>•</span>
                  <span className="text-[var(--accent-amber)]">50% distance reduction</span>
                </div>
                <h3 className="text-2xl font-display font-semibold mb-2 group-hover:text-[var(--accent-magenta)] transition-colors text-[#e7e7ea]">
                  3D Trash Management Simulator
                </h3>
                <p className="text-[#e7e7ea]/70 mb-4">Optimised cleaning routes reducing travel distance by 50%</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 rounded-md bg-[var(--accent-magenta)]/10 text-[var(--accent-magenta)] text-xs font-medium border border-[var(--accent-magenta)]/20">
                    3D
                  </span>
                  <span className="px-2 py-1 rounded-md bg-[var(--accent-blue)]/10 text-[var(--accent-blue)] text-xs font-medium border border-[var(--accent-blue)]/20">
                    GAML
                  </span>
                  <span className="px-2 py-1 rounded-md bg-[var(--accent-amber)]/10 text-[var(--accent-amber)] text-xs font-medium border border-[var(--accent-amber)]/20">
                    Simulation
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 relative bg-[#0f1419]">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-[#e7e7ea]">Skillsets</h2>
          <div className="flex flex-wrap gap-3">
            {skillsets.map((skill) => (
              <div
                key={skill.title}
                className="group relative px-5 py-3 rounded-full glass-card border border-[var(--accent-magenta)]/20 hover:border-[var(--accent-magenta)]/60 transition-all cursor-pointer hover:scale-105 hover:shadow-[0_0_20px_rgba(255,61,240,0.3)]"
              >
                <span className="text-sm font-semibold text-[#e7e7ea] group-hover:text-[var(--accent-magenta)] transition-colors">
                  {skill.title}
                </span>
                <div className="absolute top-full left-0 mt-2 w-64 p-4 rounded-xl glass-card border border-[var(--accent-magenta)]/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10 shadow-xl">
                  <ul className="space-y-2">
                    {skill.details.map((detail, idx) => (
                      <li key={idx} className="text-xs text-[#e7e7ea]/80 flex items-start gap-2">
                        <span className="text-[var(--accent-magenta)] mt-0.5">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark py-20 relative -mt-12">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#e7e7ea]">Recent Experience</h2>
            <Button
              asChild
              variant="ghost"
              className="gap-2 neon-focus text-[var(--accent-magenta)] hover:text-white hover:bg-[var(--accent-magenta)] transition-all font-semibold"
            >
              <Link href="/experience">
                See full timeline <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="space-y-6">
            {recentRoles.map((role, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-8 border-l-4 border-[var(--accent-blue)]">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-display font-semibold text-[#e7e7ea]">{role.role}</h3>
                    <p className="text-[var(--accent-blue)]">{role.org}</p>
                  </div>
                  <p className="text-sm text-[#e7e7ea]/60 mt-2 md:mt-0">{role.period}</p>
                </div>
                <ul className="space-y-2">
                  {role.bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="text-sm text-[#e7e7ea]/80 flex items-start gap-3">
                      <span className="text-[var(--accent-magenta)] mt-1">→</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/professional-portrait-of-valencia-halim-in-modern-.jpg"
            alt="Valencia Halim"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b10]/90 via-[#0b0b10]/80 to-[#0b0b10]/95 noise-bg" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0b0b10_100%)]" />
        </div>

        <div className="container max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 py-20 md:py-32 relative z-10">
          <div className="max-w-4xl">
            <blockquote className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-balance leading-[1.05] tracking-tight">
              <span className="gradient-text">
                "I thrive on learning, embrace every challenge, and deliver excellence through relentless dedication."
              </span>
            </blockquote>
            <p className="text-xl md:text-2xl text-[#e7e7ea]/70 mt-8 font-medium">
              Every project is an opportunity to push boundaries and create meaningful impact.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
