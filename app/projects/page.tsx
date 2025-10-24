"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: "banking-dispute",
    title: "Banking Dispute Resolution",
    description: "AI-powered fund transfer dispute feature reducing CSR costs by 20% ($4M/yr at DBS Bank)",
    image: "/banking-app-interface.png",
    tags: ["UX", "React", "AI", "Frontend"],
    category: "UX",
    year: "2023",
  },
  {
    id: "app-ux",
    title: "Syzl App Redesign",
    description: "Complete UI/UX overhaul boosting customer conversion by 49% through strategic design thinking",
    image: "/mobile-app-interface.png",
    tags: ["UX", "Design System", "User Research"],
    category: "UX",
    year: "2024",
  },
  {
    id: "laser-cal",
    title: "Precision Laser Calibration",
    description: "Automated calibration pipeline achieving 100% precision across 67 interactive laser modules",
    image: "/laser-calibration-system.jpg",
    tags: ["Systems", "Grasshopper", "Rhino", "3D"],
    category: "Systems",
    year: "2025",
  },
  {
    id: "trash-management",
    title: "3D Trash Management Simulator",
    description: "GAML-based simulator optimizing cleaning routes, reducing travel distance by 50%",
    image: "/3d-simulation-interface.jpg",
    tags: ["AI", "GAML", "Systems", "3D"],
    category: "AI",
    year: "2025",
  },
  {
    id: "photo-booth",
    title: "Renaissance Photo Booth",
    description: "Interactive photo booth using diffusion models for instant Renaissance-style transformations",
    image: "/ai-photo-booth.jpg",
    tags: ["AI", "Frontend", "UX"],
    category: "AI",
    year: "2025",
  },
  {
    id: "neptinium",
    title: "Neptinium Race Car Design",
    description:
      "AI-assisted race car design with EV hot swap and active aero, showcased at Singapore Design Week 2024",
    image: "/futuristic-race-car-design.jpg",
    tags: ["Design", "CAD", "AI", "3D"],
    category: "Systems",
    year: "2023",
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

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-12">
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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group block rounded-2xl glass-card overflow-hidden hover:neon-glow transition-all"
            >
              <div className="aspect-video overflow-hidden bg-gradient-to-br from-accent-1/20 to-accent-2/20">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
                  <span>{project.category}</span>
                  <span>•</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-accent-1 transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-md bg-accent-1/10 text-accent-1 text-xs font-medium border border-accent-1/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
