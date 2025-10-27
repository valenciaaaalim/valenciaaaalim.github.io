import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"

const projects = {
  "ecommerce-platform": {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management and payment processing",
    longDescription:
      "A comprehensive e-commerce platform built for a mid-sized retail business. The platform features real-time inventory tracking, secure payment processing through Stripe, and an intuitive admin dashboard for managing products, orders, and customers.",
    image: "/modern-ecommerce-dashboard.png",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    category: "Full-Stack",
    year: "2024",
    client: "Retail Co.",
    duration: "3 months",
    role: "Lead Developer",
    challenge:
      "The client needed a scalable e-commerce solution that could handle high traffic during sales events while maintaining real-time inventory accuracy across multiple warehouses.",
    solution:
      "Implemented a microservices architecture with Redis caching for inventory management, integrated Stripe for secure payments, and built a responsive admin dashboard using Next.js and TypeScript.",
    results: [
      "40% increase in conversion rate",
      "99.9% uptime during peak sales",
      "50% reduction in inventory discrepancies",
      "Processed over $1M in transactions in first quarter",
    ],
    features: [
      "Real-time inventory synchronization",
      "Secure payment processing with Stripe",
      "Advanced product filtering and search",
      "Order tracking and management",
      "Customer account management",
      "Admin dashboard with analytics",
    ],
    links: {
      live: "https://example.com",
      github: "https://github.com",
    },
  },
  "saas-dashboard": {
    title: "SaaS Analytics Dashboard",
    description: "Real-time analytics platform with advanced data visualization and reporting",
    longDescription:
      "A powerful analytics dashboard for SaaS companies to track user behavior, monitor key metrics, and generate custom reports. Built with performance and scalability in mind.",
    image: "/analytics-dashboard.png",
    tags: ["React", "Node.js", "PostgreSQL", "D3.js", "WebSocket"],
    category: "Full-Stack",
    year: "2024",
    client: "TechStart Inc.",
    duration: "4 months",
    role: "Full-Stack Developer",
    challenge:
      "The client needed a real-time analytics platform that could process and visualize large datasets while providing an intuitive user experience.",
    solution:
      "Built a scalable backend with Node.js and PostgreSQL, implemented WebSocket connections for real-time updates, and created interactive visualizations using D3.js and React.",
    results: [
      "Processing 1M+ events per day",
      "Sub-second query response times",
      "95% user satisfaction rate",
      "Reduced reporting time by 70%",
    ],
    features: [
      "Real-time data visualization",
      "Custom report builder",
      "User behavior tracking",
      "Funnel analysis",
      "Cohort analysis",
      "Export to CSV/PDF",
    ],
    links: {
      live: "https://example.com",
    },
  },
  "mobile-fitness-app": {
    title: "Mobile Fitness App",
    description: "Cross-platform fitness tracking app with workout plans and progress monitoring",
    longDescription:
      "A comprehensive fitness tracking application that helps users achieve their health goals through personalized workout plans, nutrition tracking, and progress monitoring.",
    image: "/fitness-app-interface.png",
    tags: ["React Native", "Firebase", "Redux", "TypeScript"],
    category: "Mobile",
    year: "2023",
    client: "FitLife",
    duration: "5 months",
    role: "Mobile Developer",
    challenge:
      "Create a cross-platform mobile app that works seamlessly on both iOS and Android while providing offline functionality and real-time sync.",
    solution:
      "Developed using React Native for cross-platform compatibility, implemented Firebase for backend services and real-time sync, and used Redux for state management.",
    results: [
      "50K+ downloads in first 3 months",
      "4.8 star rating on app stores",
      "85% user retention rate",
      "Featured in App Store",
    ],
    features: [
      "Personalized workout plans",
      "Exercise library with videos",
      "Progress tracking and analytics",
      "Nutrition logging",
      "Social features and challenges",
      "Offline mode support",
    ],
    links: {
      live: "https://example.com",
    },
  },
  "ai-content-generator": {
    title: "AI Content Generator",
    description: "AI-powered content creation tool for marketing teams and content creators",
    longDescription:
      "An intelligent content generation platform that leverages AI to help marketing teams and content creators produce high-quality content faster and more efficiently.",
    image: "/ai-content-writing-interface.png",
    tags: ["Next.js", "OpenAI", "Tailwind CSS", "Supabase"],
    category: "AI/ML",
    year: "2024",
    client: "ContentPro",
    duration: "2 months",
    role: "Full-Stack Developer",
    challenge:
      "Build an AI-powered content generation tool that produces high-quality, contextually relevant content while maintaining brand voice consistency.",
    solution:
      "Integrated OpenAI's GPT models with custom prompts and fine-tuning, built a user-friendly interface with Next.js, and implemented content templates and brand voice profiles.",
    results: [
      "70% reduction in content creation time",
      "1000+ pieces of content generated",
      "92% user satisfaction",
      "Expanded to 5 languages",
    ],
    features: [
      "AI-powered content generation",
      "Multiple content types (blogs, social, ads)",
      "Brand voice customization",
      "SEO optimization suggestions",
      "Content calendar integration",
      "Multi-language support",
    ],
    links: {
      live: "https://example.com",
      github: "https://github.com",
    },
  },
  "portfolio-builder": {
    title: "Portfolio Builder",
    description: "No-code portfolio builder with customizable templates and drag-and-drop interface",
    longDescription:
      "A no-code platform that enables professionals to create stunning portfolio websites without any coding knowledge, featuring drag-and-drop functionality and professional templates.",
    image: "/website-builder-interface.jpg",
    tags: ["Vue.js", "Node.js", "MongoDB", "AWS S3"],
    category: "Full-Stack",
    year: "2023",
    client: "BuildIt",
    duration: "4 months",
    role: "Lead Developer",
    challenge:
      "Create an intuitive no-code platform that allows users to build professional portfolios without technical knowledge while maintaining design quality.",
    solution:
      "Developed a drag-and-drop interface using Vue.js, implemented a flexible template system, and built a robust backend with Node.js and MongoDB for data management.",
    results: [
      "10K+ portfolios created",
      "Average build time: 30 minutes",
      "88% completion rate",
      "Featured on Product Hunt",
    ],
    features: [
      "Drag-and-drop interface",
      "Professional templates",
      "Custom domain support",
      "SEO optimization",
      "Analytics integration",
      "Export to code",
    ],
    links: {
      live: "https://example.com",
    },
  },
  "task-management-tool": {
    title: "Task Management Tool",
    description: "Collaborative task management platform with real-time updates and team features",
    longDescription:
      "A collaborative task management platform designed for remote teams, featuring real-time updates, kanban boards, and advanced project tracking capabilities.",
    image: "/task-management-kanban.png",
    tags: ["React", "Express", "Socket.io", "Redis", "PostgreSQL"],
    category: "Full-Stack",
    year: "2023",
    client: "TeamFlow",
    duration: "3 months",
    role: "Full-Stack Developer",
    challenge:
      "Build a real-time collaborative platform that supports multiple teams and projects while maintaining performance and data consistency.",
    solution:
      "Implemented WebSocket connections using Socket.io for real-time updates, used Redis for caching and session management, and built a scalable REST API with Express.",
    results: [
      "500+ teams using the platform",
      "99.5% uptime",
      "30% increase in team productivity",
      "Average response time: 200ms",
    ],
    features: [
      "Real-time collaboration",
      "Kanban and list views",
      "Task dependencies",
      "Time tracking",
      "Team chat integration",
      "Custom workflows",
    ],
    links: {
      live: "https://example.com",
      github: "https://github.com",
    },
  },
}

export async function generateStaticParams() {
  return Object.keys(projects).map((id) => ({
    id: id,
  }))
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects[params.id as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-8">
        <Button asChild variant="ghost" className="gap-2">
          <Link href="/projects">
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>
        </Button>
      </div>

      {/* Hero Image */}
      <div className="container mx-auto px-4 mb-12">
        <div className="rounded-lg overflow-hidden border">
          <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-auto" />
        </div>
      </div>

      {/* Project Details */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">{project.longDescription}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">The Solution</h2>
              <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="grid md:grid-cols-2 gap-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Results</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.results.map((result, index) => (
                  <div key={index} className="p-4 rounded-lg border bg-card">
                    <p className="font-semibold">{result}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="p-6 rounded-lg border bg-card sticky top-8">
              <h3 className="font-semibold mb-4">Project Info</h3>
              <dl className="space-y-3">
                <div>
                  <dt className="text-sm text-muted-foreground">Client</dt>
                  <dd className="font-medium">{project.client}</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">Year</dt>
                  <dd className="font-medium">{project.year}</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">Duration</dt>
                  <dd className="font-medium">{project.duration}</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">Role</dt>
                  <dd className="font-medium">{project.role}</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground mb-2">Technologies</dt>
                  <dd className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 rounded-md bg-accent/10 text-accent text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>

              {/* Links */}
              <div className="mt-6 space-y-2">
                {project.links.live && (
                  <Button asChild className="w-full gap-2">
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" /> View Live Site
                    </a>
                  </Button>
                )}
                {project.links.github && (
                  <Button asChild variant="outline" className="w-full gap-2 bg-transparent">
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" /> View Code
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
