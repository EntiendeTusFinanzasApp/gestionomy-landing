import { ReactNode } from "react"

export interface FaqImage {
  src: string
  alt: string
  caption?: string
}

export interface Question {
  id: string
  slug: string
  title: string
  content: string
  images?: FaqImage[]
  steps?: string[]
  relatedQuestions?: string[]
}

export interface Category {
  id: string
  name: string
  icon: ReactNode
  questions: Question[]
}
