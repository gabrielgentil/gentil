export interface Experience {
  id: string
  company: string
  position: string
  period: string
  description: string
  technologies: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  link?: string
  github?: string
}

export interface Education {
  id: string
  institution: string
  degree: string
  period: string
  description?: string
}

export interface Skill {
  id: string
  name: string
  category: 'frontend' | 'backend' | 'tools' | 'other'
  level?: number
}

export interface ContactInfo {
  email: string
  phone?: string
  linkedin?: string
  github?: string
  website?: string
  location?: string
}

export interface PersonalInfo {
  name: string
  title: string
  bio: string
  avatar?: string
  contactInfo: ContactInfo
}

