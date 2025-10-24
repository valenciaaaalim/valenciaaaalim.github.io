import Link from "next/link"
import { ArrowRight, Download, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  const metrics = [
    { value: "20% CSR cost reduction", label: "~$4M/yr at DBS Bank", slug: "banking-dispute" },
    { value: "+49% conversion", label: "App UX redesign at Syzl", slug: "app-ux" },
    { value: "100% precision", label: "67 laser modules at ArtScience Museum", slug: "laser-cal" },
  ]

  const rolesTargeting = ["UI/UX Designer", "Product Designer", "Frontend UI Engineer", "Design Engineer"]

  const capabilities = ["UI/UX", "Front-end UI (React)", "ML prototyping", "Rapid prototyping / 3D printing"]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl">
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 text-balance leading-tight">
            <span className="gradient-text">Design × AI × Engineering</span>
          </h1>

          <p className="text-2xl md:text-3xl text-foreground mb-8 leading-relaxed text-pretty max-w-3xl font-medium">
            I prototype, design, and ship interfaces and systems.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button asChild size="lg" className="gap-2 neon-focus">
              <Link href="/projects">
                View Projects <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 neon-focus bg-transparent">
              <Link href="/resume">
                <Download className="w-4 h-4" /> Download Resume
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="neon-focus">
              <Link href="/contact">Contact</Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://linkedin.com/in/valenciaarlinhalim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent-1 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:valenciaarlin.halim@gmail.com"
              className="text-muted-foreground hover:text-accent-1 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-12">
        <div className="max-w-4xl">
          <p className="text-sm text-muted-foreground mb-3 font-medium">Roles I'm targeting:</p>
          <div className="flex flex-wrap gap-2">
            {rolesTargeting.map((role) => (
              <span
                key={role}
                className="px-4 py-2 rounded-full glass-card text-sm font-medium border border-accent-1/20 hover:border-accent-1/40 transition-colors"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="border-y border-border/40">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-2xl font-display font-bold mb-8 max-w-4xl">Impact Highlights</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl">
            {metrics.map((metric, index) => (
              <Link
                key={index}
                href={`/projects/${metric.slug}`}
                className="glass-card rounded-2xl p-6 hover:neon-glow transition-all group"
              >
                <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2 group-hover:scale-105 transition-transform">
                  {metric.value}
                </div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl">
          <h2 className="text-2xl font-display font-bold mb-6">Capabilities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {capabilities.map((capability) => (
              <div key={capability} className="glass-card rounded-2xl p-4 text-center">
                <p className="text-sm font-medium">{capability}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex items-center justify-between mb-12 max-w-6xl">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">Featured Work</h2>
            <p className="text-muted-foreground">Recent projects showcasing cross-disciplinary impact</p>
          </div>
          <Button asChild variant="ghost" className="gap-2 neon-focus">
            <Link href="/projects">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl">
          {/* Project Card 1 */}
          <Link
            href="/projects/banking-dispute"
            className="group block rounded-2xl glass-card overflow-hidden hover:neon-glow transition-all"
          >
            <div className="aspect-video bg-gradient-to-br from-accent-1/20 to-accent-2/20 flex items-center justify-center">
              <span className="text-muted-foreground">DBS Banking Dispute Feature</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-accent-1 transition-colors">
                Banking Dispute Resolution
              </h3>
              <p className="text-muted-foreground mb-4">
                AI-powered fund transfer dispute feature reducing CSR costs by 20% ($4M/yr)
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 rounded-md bg-accent-1/10 text-accent-1 text-xs font-medium border border-accent-1/20">
                  UX
                </span>
                <span className="px-2 py-1 rounded-md bg-accent-2/10 text-accent-2 text-xs font-medium border border-accent-2/20">
                  React
                </span>
                <span className="px-2 py-1 rounded-md bg-warn/10 text-warn text-xs font-medium border border-warn/20">
                  AI
                </span>
              </div>
            </div>
          </Link>

          {/* Project Card 2 */}
          <Link
            href="/projects/laser-cal"
            className="group block rounded-2xl glass-card overflow-hidden hover:neon-glow transition-all"
          >
            <div className="aspect-video bg-gradient-to-br from-accent-2/20 to-accent-1/20 flex items-center justify-center">
              <span className="text-muted-foreground">Laser Calibration System</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-accent-1 transition-colors">
                Precision Laser Calibration
              </h3>
              <p className="text-muted-foreground mb-4">
                Automated calibration pipeline achieving 100% precision across 67 interactive modules
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 rounded-md bg-accent-1/10 text-accent-1 text-xs font-medium border border-accent-1/20">
                  Systems
                </span>
                <span className="px-2 py-1 rounded-md bg-accent-2/10 text-accent-2 text-xs font-medium border border-accent-2/20">
                  Grasshopper
                </span>
                <span className="px-2 py-1 rounded-md bg-warn/10 text-warn text-xs font-medium border border-warn/20">
                  3D
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}
