"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: "banking-dispute",
    title: "Banking Dispute Resolution",
    description: "AI-powered fund transfer dispute feature reducing CSR costs by 20% ($4M/yr at DBS Bank)",
    longDescription:
      "Designed and developed a banking app feature that handles and digitalizes fund transfer dispute issues with Google API and generative AI, using React JS, HTML, CSS, JSON, and Cucumber. This feature was selected by DBS to implement into their digital banking app.",
    image: "/banking-app-interface.png",
    tags: ["UX", "React", "AI", "Frontend"],
    category: "UX",
    year: "2023",
    company: "DBS Bank Ltd.",
    duration: "3 months",
    role: "Frontend Developer",
    challenge:
      "DBS needed to reduce customer service representative costs while improving the dispute resolution process for fund transfers. The existing process was manual, time-consuming, and costly.",
    solution:
      "Integrated Google API and generative AI to automate dispute handling, created an intuitive interface for customers to submit and track disputes, and built the feature using React JS with comprehensive testing using Cucumber.",
    results: [
      "20% reduction in CSR costs ($4M annually in Singapore)",
      "Faster dispute resolution time",
      "Improved customer satisfaction",
      "Selected for implementation in DBS digital banking app",
    ],
    features: [
      "AI-powered dispute analysis",
      "Automated document processing",
      "Real-time status tracking",
      "Integration with existing banking systems",
      "Comprehensive testing coverage",
    ],
  },
  {
    id: "app-ux",
    title: "Syzl App Redesign",
    description: "Complete UI/UX overhaul boosting customer conversion by 49% through strategic design thinking",
    longDescription:
      "Led the complete UI/UX redesign of the Syzl app, conducting user interviews and implementing strategic design thinking to identify and fix key issues. Also spearheaded a 1-day rebranding and developed an agnostic design system.",
    image: "/mobile-app-interface.png",
    tags: ["UX", "Design System", "User Research"],
    category: "UX",
    year: "2024",
    company: "Syzl Inc.",
    duration: "11 months",
    role: "UIUX Designer and AI Researcher",
    challenge:
      "The Syzl app had low customer conversion rates and needed a complete redesign to improve user experience and drive business growth.",
    solution:
      "Conducted extensive user interviews to understand pain points, implemented strategic design thinking methodologies, created an agnostic design system for consistency, and led a rapid 1-day rebranding effort.",
    results: [
      "49% increase in customer conversion",
      "Saved $2,000 through efficient rebranding",
      "Saved $2,500 annually by building custom project management system",
      "Improved user satisfaction scores",
    ],
    features: [
      "User-centered design approach",
      "Comprehensive design system",
      "Streamlined user workflows",
      "AI-based research integration",
      "Custom project management tools",
    ],
  },
  {
    id: "laser-cal",
    title: "Precision Laser Calibration",
    description: "Automated calibration pipeline achieving 100% precision across 67 interactive laser modules",
    longDescription:
      "Automated a precision laser pointing calibration pipeline using Grasshopper and Rhino, achieving 100% pointing accuracy across 67 interactive laser modules at the ArtScience Museum's Future World exhibit.",
    image: "/laser-calibration-system.jpg",
    tags: ["Systems", "Grasshopper", "Rhino", "3D"],
    category: "Systems",
    year: "2025",
    company: "SPACElogic Pte. Ltd.",
    duration: "4 months",
    role: "Exhibit Engineer",
    challenge:
      "The ArtScience Museum's Future World exhibit required precise calibration of 67 interactive laser modules. Manual calibration was time-consuming and prone to errors.",
    solution:
      "Developed an automated calibration pipeline using Grasshopper and Rhino, implementing algorithms for precision laser pointing and creating a streamlined workflow for calibration.",
    results: [
      "100% pointing accuracy across all 67 modules",
      "Significant reduction in calibration time",
      "Improved exhibit reliability",
      "Successful deployment at ArtScience Museum",
    ],
    features: [
      "Automated calibration algorithms",
      "Grasshopper and Rhino integration",
      "Real-time accuracy verification",
      "Scalable to multiple modules",
      "Comprehensive documentation",
    ],
  },
  {
    id: "trash-management",
    title: "3D Trash Management Simulator",
    description: "GAML-based simulator optimizing cleaning routes, reducing travel distance by 50%",
    longDescription:
      "Devised and engineered a 3D simulator trash management tool using GAML (Java-based domain-specific language) to optimize cleaning routes based on dynamic trash infill, preventing bin overflows and reducing cleaner travel distance.",
    image: "/3d-simulation-interface.jpg",
    tags: ["AI", "GAML", "Systems", "3D"],
    category: "AI",
    year: "2025",
    company: "Vidacity Pte. Ltd.",
    duration: "3 months",
    role: "Software and UX Engineer",
    challenge:
      "Cleaning routes were inefficient, leading to bin overflows and excessive travel distance for cleaning staff. A data-driven solution was needed to optimize operations.",
    solution:
      "Built a 3D simulator using GAML to model trash accumulation patterns, developed algorithms to optimize cleaning routes dynamically, and created visualizations to help operations teams make informed decisions.",
    results: [
      "50% reduction in cleaner travel distance",
      "Prevention of bin overflows",
      "Improved operational efficiency",
      "Data-driven route optimization",
    ],
    features: [
      "3D simulation environment",
      "Dynamic route optimization",
      "Real-time trash infill tracking",
      "Predictive analytics",
      "Visual route planning",
    ],
  },
  {
    id: "photo-booth",
    title: "Renaissance Photo Booth",
    description: "Interactive photo booth using diffusion models for instant Renaissance-style transformations",
    longDescription:
      "Built an interactive photo booth that performs instant image-to-image transformation of portraits into Renaissance style paintings using diffusion models, then prints them out. The booth garnered over 80 customers per day at SUTD Open House.",
    image: "/ai-photo-booth.jpg",
    tags: ["AI", "Frontend", "UX"],
    category: "AI",
    year: "2025",
    company: "SUTD Open House",
    duration: "1 month",
    role: "Software and UX Engineer",
    challenge:
      "Create an engaging, interactive experience for SUTD Open House that showcases AI capabilities while providing instant gratification to visitors.",
    solution:
      "Implemented diffusion models for image-to-image transformation, designed an intuitive user interface for photo capture, integrated with printing hardware for instant physical outputs, and optimized for speed to handle high visitor volume.",
    results: [
      "80+ customers per day",
      "Instant Renaissance-style transformations",
      "High visitor engagement",
      "Successful showcase of AI capabilities",
    ],
    features: [
      "Real-time image transformation",
      "Diffusion model integration",
      "Instant photo printing",
      "User-friendly interface",
      "High-throughput processing",
    ],
  },
  {
    id: "neptinium",
    title: "Neptinium Race Car Design",
    description:
      "AI-assisted race car design with EV hot swap and active aero, showcased at Singapore Design Week 2024",
    longDescription:
      "Designed Neptinium, a race car shell with EV hot swap and active aero features using CAD, generative design, and Arduino. The project was showcased to MOE Chan Chun Sing and selected for Singapore Design Week 2024. Also established an AI Design Thinking Framework that optimized the iterative design process by 12.5x.",
    image: "/futuristic-race-car-design.jpg",
    tags: ["Design", "CAD", "AI", "3D"],
    category: "Systems",
    year: "2023",
    company: "SUTD",
    duration: "3 months",
    role: "Product Designer",
    challenge:
      "Design an innovative race car that incorporates cutting-edge EV technology and active aerodynamics while demonstrating the potential of AI-assisted design processes.",
    solution:
      "Utilized CAD software and generative design algorithms to create the Neptinium race car shell, integrated Arduino for active aero control, developed an AI Design Thinking Framework to accelerate the design process, and published comprehensive documentation.",
    results: [
      "Showcased to MOE Chan Chun Sing",
      "Selected for Singapore Design Week 2024",
      "12.5x optimization in iterative design process",
      "Published Neptinium Design Book to NLB",
      "Received sponsorships from SUTD, Figma, Tensquare, DBCS",
    ],
    features: [
      "EV hot swap capability",
      "Active aerodynamics system",
      "AI-assisted generative design",
      "Arduino integration",
      "Comprehensive design documentation",
    ],
  },
]

const categories = ["All", "UX", "AI", "Frontend", "Systems"]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Projects</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A collection of work showcasing cross-disciplinary impact in design, AI, frontend engineering, and systems.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-16">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="neon-focus"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="space-y-24">
          {filteredProjects.map((project, index) => (
            <article key={project.id} className="scroll-mt-20">
              {/* Project Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3 text-sm text-muted-foreground">
                  <span className="px-3 py-1 rounded-full bg-accent-1/10 text-accent-1 border border-accent-1/20">
                    {project.category}
                  </span>
                  <span>{project.year}</span>
                  <span>•</span>
                  <span>{project.company}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{project.title}</h2>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">{project.description}</p>
              </div>

              {/* Project Image */}
              <div className="mb-8 rounded-2xl overflow-hidden glass-card">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Project Details Grid */}
              <div className="grid lg:grid-cols-3 gap-8 mb-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <h3 className="text-xl font-display font-semibold mb-3">Overview</h3>
                    <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-display font-semibold mb-3">The Challenge</h3>
                    <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-display font-semibold mb-3">The Solution</h3>
                    <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-display font-semibold mb-3">Key Features</h3>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-accent-1 mt-1 text-lg">✓</span>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  <div className="p-6 rounded-xl glass-card">
                    <h3 className="font-display font-semibold mb-4">Project Info</h3>
                    <dl className="space-y-3">
                      <div>
                        <dt className="text-sm text-muted-foreground">Company</dt>
                        <dd className="font-medium">{project.company}</dd>
                      </div>
                      <div>
                        <dt className="text-sm text-muted-foreground">Role</dt>
                        <dd className="font-medium">{project.role}</dd>
                      </div>
                      <div>
                        <dt className="text-sm text-muted-foreground">Year</dt>
                        <dd className="font-medium">{project.year}</dd>
                      </div>
                      <div>
                        <dt className="text-sm text-muted-foreground">Duration</dt>
                        <dd className="font-medium">{project.duration}</dd>
                      </div>
                    </dl>
                  </div>

                  <div className="p-6 rounded-xl glass-card">
                    <h3 className="font-display font-semibold mb-4">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-md bg-accent-2/10 text-accent-2 text-sm font-medium border border-accent-2/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div>
                <h3 className="text-xl font-display font-semibold mb-4">Impact & Results</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.results.map((result, idx) => (
                    <div key={idx} className="p-4 rounded-xl glass-card border-l-4 border-accent-1">
                      <p className="font-medium">{result}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              {index < filteredProjects.length - 1 && <div className="mt-24 border-t border-border/50" />}
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
