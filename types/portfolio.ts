export interface Project {
  id: number
  title: string
  description: string
  image: string
  images: string[]
  tags: string[]
  fullDescription: string
  liveDemo?: string
  githubRepo?: string
  figmaLink?: string
  pdfReport?: string
  category: "research" | "design" | "development" | "concept"
  problem: string
  process: string[]
  role: string
  outcome: string
  learnings: string[]
}
