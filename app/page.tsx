"use client"

import { useState } from "react"
import WorksGallery from "@/components/WorksGallery"
import AboutMe from "@/components/AboutMe"
import Skills from "@/components/Skills"
import ProjectModal from "@/components/ProjectModal"
import CaseStudyPage from "@/components/CaseStudyPage"
import type { Project } from "@/types/portfolio"
import Navbar from "@/components/Navbar"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import { ThemeProvider } from "@/components/ThemeProvider"
import ColorSchemeSelector from "@/components/ColorSchemeSelector"
import ThemedHeroSection from "@/components/ThemedHeroSection"
import LinkedInCaseStudy from "@/components/LinkedInCaseStudy"
import WellnestCaseStudy from "@/components/WellnestCaseStudy"
import KalmontCaseStudy from "@/components/KalmontCaseStudy"
import GranvilleIslandCaseStudy from "@/components/GranvilleIslandCaseStudy"

const projects: Project[] = [
  {
    id: 1,
    title: "LinkedIn User Study",
    description: "In-depth qualitative research to uncover user pain points and opportunities on LinkedIn's platform.",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    tags: ["User Research", "Data Analysis", "Usability Testing", "Thematic Analysis"],
    category: "research",
    problem:
      "LinkedIn users were experiencing difficulties with content discovery and professional networking efficiency. The goal was to identify specific pain points and propose evidence-based improvements to enhance user experience.",
    process: [
      "Literature Review",
      "User Interviews (n=12)",
      "Usability Testing",
      "Thematic Analysis",
      "Findings Synthesis",
      "Recommendations",
    ],
    role: "Lead UX Researcher - Conducted interviews, analyzed data, and presented findings to stakeholders.",
    outcome:
      "Identified 5 key pain points affecting 80% of users, leading to actionable recommendations that could improve user engagement by an estimated 35%.",
    learnings: [
      "Importance of diverse participant recruitment for comprehensive insights",
      "How to balance user needs with business objectives in research findings",
      "Effective techniques for conducting remote user interviews",
    ],
    fullDescription:
      "A comprehensive user research study examining LinkedIn's user experience through qualitative methods including user interviews and usability testing.",
    figmaLink: "https://figma.com/linkedin-study",
    pdfReport: "https://example.com/linkedin-report.pdf",
  },
  {
    id: 2,
    title: "Headspace App Redesign",
    description: "Rethinking the meditation experience with a focus on accessibility and modern UI principles.",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    tags: ["UX/UI Design", "Prototyping", "Accessibility", "User Flows"],
    category: "design",
    problem:
      "The existing Headspace app had accessibility issues and outdated visual design that didn't align with modern design principles. Users reported difficulty navigating meditation content and customizing their experience.",
    process: [
      "Competitive Analysis",
      "User Journey Mapping",
      "Wireframing",
      "Visual Design",
      "Prototyping",
      "Usability Testing",
    ],
    role: "UX/UI Designer - Led the complete redesign process from research to high-fidelity prototypes.",
    outcome:
      "Created a more accessible and visually appealing interface that improved task completion rates by 40% and received positive feedback from accessibility experts.",
    learnings: [
      "How to balance aesthetic appeal with accessibility requirements",
      "The importance of consistent design systems in mobile applications",
      "Effective prototyping techniques for testing complex user flows",
    ],
    fullDescription:
      "A complete redesign of the Headspace meditation app focusing on improved accessibility, modern visual design, and enhanced user experience.",
    figmaLink: "https://figma.com/headspace-redesign",
    liveDemo: "https://headspace-redesign.example.com",
  },
  {
    id: 3,
    title: "Wellnesstowork App Concept",
    description: "Ideation and design of a mobile application connecting workplace wellness with productivity.",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    tags: ["App Design", "User Stories", "Prototyping", "Concept Development"],
    category: "concept",
    problem:
      "Remote workers struggle to maintain work-life balance and wellness routines. There was a need for an integrated solution that promotes wellness while enhancing productivity in remote work environments.",
    process: ["Market Research", "User Personas", "Feature Ideation", "User Stories", "Wireframing", "Visual Design"],
    role: "Product Designer - Conceptualized the app from initial idea through high-fidelity designs and user flows.",
    outcome:
      "Developed a comprehensive app concept with 15+ core features, validated through user feedback sessions with 20+ remote workers.",
    learnings: [
      "How to validate app concepts before development",
      "The importance of understanding target audience pain points deeply",
      "Balancing feature richness with simplicity in mobile design",
    ],
    fullDescription:
      "A conceptual mobile application designed to help remote workers integrate wellness practices into their daily work routines.",
    figmaLink: "https://figma.com/wellnesstowork-concept",
  },
  {
    id: 4,
    title: "KALMONT Web Design & Development",
    description: "Full-stack web design and development for a modern business website with focus on user experience.",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    tags: ["React", "Tailwind CSS", "Web Design", "Frontend Development"],
    category: "development",
    problem:
      "KALMONT needed a modern, responsive website that would effectively communicate their brand values while providing an excellent user experience across all devices.",
    process: [
      "Client Requirements",
      "Design System",
      "Responsive Design",
      "React Development",
      "Performance Optimization",
      "Testing & Launch",
    ],
    role: "Full-Stack Designer & Developer - Handled complete project from initial design concepts to final deployment.",
    outcome:
      "Delivered a high-performance website with 95+ Lighthouse scores, resulting in 60% increase in user engagement and 40% improvement in conversion rates.",
    learnings: [
      "How to balance client requirements with best UX practices",
      "Advanced React patterns for scalable web applications",
      "Performance optimization techniques for modern web development",
    ],
    fullDescription:
      "A complete web design and development project showcasing modern frontend technologies and user-centered design principles.",
    liveDemo: "https://kalmont.example.com",
    githubRepo: "https://github.com/mishagholami/kalmont-website",
  },
  {
    id: 5,
    title: "Granville Island Redesign Research",
    description: "User research and interviewing study for reimagining Granville Island's public space experience.",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    tags: ["User Research", "Public Space Design", "Ethnographic Study", "Community Engagement"],
    category: "research",
    problem:
      "Granville Island needed insights into how visitors and locals use the space to inform future development and improve the overall public experience.",
    process: [
      "Stakeholder Interviews",
      "Observational Studies",
      "Visitor Surveys",
      "Data Analysis",
      "Concept Development",
      "Presentation",
    ],
    role: "Lead Researcher - Designed and executed comprehensive research methodology, analyzed findings, and presented recommendations.",
    outcome:
      "Generated actionable insights from 50+ interviews and observations, leading to 8 key recommendations for improving public space utilization and visitor experience.",
    learnings: [
      "How to conduct ethical research in public spaces",
      "Techniques for engaging diverse community stakeholders",
      "Methods for translating research insights into design recommendations",
    ],
    fullDescription:
      "A comprehensive user research study examining how people interact with Granville Island's public spaces to inform future design decisions.",
    pdfReport: "https://example.com/granville-island-research.pdf",
  },
]

function PortfolioContent() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [showCaseStudy, setShowCaseStudy] = useState<number | null>(null)

  const handleCaseStudyClick = (projectId: number) => {
    setShowCaseStudy(projectId)
  }

  const handleBackFromCaseStudy = () => {
    setShowCaseStudy(null)
  }

  if (showCaseStudy === 2) {
    return <CaseStudyPage onBack={handleBackFromCaseStudy} />
  }

  if (showCaseStudy === 1) {
    return <LinkedInCaseStudy onBack={handleBackFromCaseStudy} />
  }

  if (showCaseStudy === 3) {
    return <WellnestCaseStudy onBack={handleBackFromCaseStudy} />
  }

  if (showCaseStudy === 4) {
    return <KalmontCaseStudy onBack={handleBackFromCaseStudy} />
  }

  if (showCaseStudy === 5) {
    return <GranvilleIslandCaseStudy onBack={handleBackFromCaseStudy} />
  }

  return (
    <>
      <ColorSchemeSelector
        currentScheme="brown-cream"
        onSchemeChange={(scheme) => {
          console.log("Scheme changed to:", scheme)
        }}
      />

      <Navbar />

      {/* Hero Section */}
      <div id="home">
        <ThemedHeroSection />
      </div>

      {/* About Me Section */}
      <div id="about">
        <AboutMe />
      </div>

      {/* Skills Section */}
      <div id="skills">
        <Skills />
      </div>

      {/* Works Gallery Section */}
      <WorksGallery
        projects={projects}
        onProjectClick={setSelectedProject}
        onCaseStudyClick={handleCaseStudyClick}
      />

      {/* Contact Section */}
      <div id="contact">
        <Contact />
      </div>

      {/* Footer */}
      <Footer />

      {/* Project Modal */}
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </>
  )
}

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-cream-50">
        <PortfolioContent />
      </div>
    </ThemeProvider>
  )
}
