import Image from "next/image"

export default function AboutPage() {
  const skills = {
    Design: ["Figma", "Webflow", "Wireframes", "Mockups", "User story flows", "UI/UX Principles"],
    Frontend: ["React", "Next.js", "TypeScript", "HTML", "CSS", "JavaScript", "Tailwind CSS"],
    "AI & ML": ["Python", "Machine Learning", "Sentiment Analysis", "Diffusion Models", "AI SDK"],
    "Systems & 3D": ["AutoCAD", "Rhino", "Grasshopper", "GAMA", "3D Printing", "Rapid Prototyping"],
    Tools: ["Git", "Cucumber", "JSON", "Ruby", "Notion"],
  }

  const education = [
    {
      degree: "Master of Science in Technology Entrepreneurship",
      school: "Singapore University of Technology and Design",
      location: "Singapore",
      period: "Sep 2021 - Apr 2026",
      description: null,
    },
    {
      degree: "Bachelor of Science in Design and Artificial Intelligence (Honors), Enterprise Track",
      school: "Singapore University of Technology and Design",
      location: "Singapore",
      period: "Sep 2021 - Apr 2026",
      description: "Minor in Computer Science · Undergraduate Teaching Assistant for Design Thinking and Innovation",
    },
    {
      degree: "Overseas Study Exchange Program",
      school: "Zhejiang University, School of Management",
      location: "China",
      period: "Sep 2024 - Jan 2025",
      description: "Senior Scholar",
    },
    {
      degree: "NUS Overseas Colleges Toronto-Waterloo",
      school: "National University of Singapore",
      location: "Singapore",
      period: "Aug 2023 - Jul 2024",
      description: "Awarded the NUS Venture Initiation Program Grant of $10,000",
    },
    {
      degree: "Overseas Work-Study Exchange Program",
      school: "University of Toronto, Rotman School of Management",
      location: "Canada",
      period: "Aug 2023 - May 2024",
      description: "Entrepreneurship and Business",
    },
  ]

  const certifications = [
    "Google Cloud Certified Professional Machine Learning Engineer (Jun 2025)",
    "AI for Industries Course, AI Singapore (Aug 2022)",
  ]

  const hobbies = [
    { image: "/classic-photography-camera.png", label: "Photography" },
    { image: "/travel-adventure.png", label: "Travel" },
    { image: "/technology-gadgets.jpg", label: "Tech" },
    { image: "/reading-books.jpg", label: "Reading" },
    { image: "/digital-art-tablet.png", label: "Digital Art" },
    { image: "/cozy-coffee-cafe.png", label: "Coffee" },
    { image: "/music-headphones.jpg", label: "Music" },
    { image: "/hiking-nature.png", label: "Hiking" },
    { image: "/design-sketching.jpg", label: "Sketching" },
    { image: "/cultural-exploration.jpg", label: "Culture" },
  ]

  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">About Me</h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground leading-relaxed mb-4">
                I'm Valencia Arlin Halim, a designer and engineer working at the intersection of design, AI, and systems
                thinking. My work spans UI/UX design, frontend development, machine learning prototyping, and rapid
                physical prototyping.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed mb-4">
                I believe in learning fast, shipping quality work, and creating measurable impact. Whether it's reducing
                operational costs by millions, boosting conversion rates, or achieving precision in complex systems, I
                focus on outcomes that matter.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Currently pursuing my Master's in Technology Entrepreneurship at SUTD, I'm passionate about building
                interfaces and systems that solve real problems. I'm looking for full-time opportunities where I can
                apply my cross-disciplinary skills to create meaningful products.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold mb-8">Skills & Technologies</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="glass-card rounded-2xl p-6">
                  <h3 className="text-lg font-display font-semibold mb-4 text-accent-1">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-md border border-border/50 bg-muted/30 text-sm font-medium hover:border-accent-1/40 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold mb-8">Education</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="glass-card rounded-2xl p-6 border-l-4 border-accent-2">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="text-lg font-display font-semibold mb-1">{edu.degree}</h3>
                      <p className="text-accent-2 font-medium">
                        {edu.school} · {edu.location}
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground mt-1 md:mt-0">{edu.period}</span>
                  </div>
                  {edu.description && <p className="text-muted-foreground text-sm mt-2">{edu.description}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold mb-8">Certifications</h2>
            <div className="glass-card rounded-2xl p-6">
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="text-muted-foreground flex gap-3">
                    <span className="text-accent-1">•</span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-display font-bold mb-8">Hobbies & Interests</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {hobbies.map((hobby, index) => (
                <div key={index} className="flip-card aspect-square">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <div className="relative w-full h-full rounded-lg overflow-hidden border border-border/50">
                        <Image
                          src={hobby.image || "/placeholder.svg"}
                          alt={hobby.label}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="flip-card-back">
                      <div className="w-full h-full rounded-lg overflow-hidden border border-accent-1/60 bg-gradient-to-br from-[var(--accent-magenta)]/20 to-[var(--accent-blue)]/20 backdrop-blur-sm flex items-center justify-center p-4">
                        <span className="text-base font-semibold text-foreground text-center">{hobby.label}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
