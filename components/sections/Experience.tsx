'use client'

import React, { useState } from 'react'
import Section from '@/components/ui/Section'
import { useLanguage } from '@/contexts/LanguageContext'
import type { Experience } from '@/types'

const technologies = {
  sami: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'RabbitMQ', 'GCP', 'MySQL', 'Oracle', 'Nestjs', 'MongoDB', 'Redis', 'OpenTelemetry', 'Microservices Architecture'],
  vitta: ['Vuejs', 'NodeJs', 'AWS', 'MongoDB', 'Kafka', 'Typescript', 'Microservices Architecture'],
  btb: ['React', 'NodeJs', 'MongoDB','MySQL','Elasticsearch', 'Typescript', 'Microservices Architecture'],
  drConsulta: ['JavaScript', 'PHP', 'MySQL'],
}

export default function Experience() {
  const { t } = useLanguage()
  
  const experiences: Experience[] = [
    {
      id: '1',
      company: t.experience.sami.company,
      position: t.experience.sami.position,
      period: t.experience.sami.period,
      description: t.experience.sami.description,
      technologies: technologies.sami,
    },
    {
      id: '2',
      company: t.experience.vitta.company,
      position: t.experience.vitta.position,
      period: t.experience.vitta.period,
      description: t.experience.vitta.description,
      technologies: technologies.vitta,
    },
    {
      id: '3',
      company: t.experience.btb.company,
      position: t.experience.btb.position,
      period: t.experience.btb.period,
      description: t.experience.btb.description,
      technologies: technologies.btb,
    },
    {
      id: '4',
      company: t.experience.drConsulta.company,
      position: t.experience.drConsulta.position,
      period: t.experience.drConsulta.period,
      description: t.experience.drConsulta.description,
      technologies: technologies.drConsulta,
    },
  ]

  const [selectedExperience, setSelectedExperience] = useState<Experience>(
    experiences[0]
  )

  return (
    <Section
      id="experience"
      title={t.experience.title}
      bgColor="bg-background"
    >
      <div className="grid md:grid-cols-[300px_1fr] gap-8 animate-slide-up">
        {/* Lista de Empresas */}
        <div className="space-y-2">
          {experiences.map((exp) => (
            <button
              key={exp.id}
              onClick={() => setSelectedExperience(exp)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 font-mono ${
                selectedExperience.id === exp.id
                  ? 'bg-primary-600/20 text-primary-300 border-l-4 border-primary-500'
                  : 'bg-secondary-800/30 text-secondary-400 hover:bg-secondary-800/50 hover:text-secondary-300 border-l-4 border-transparent'
              }`}
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* Detalhes da Experiência */}
        <div className="card p-6">
          <h3 className="text-2xl font-semibold text-white mb-2 font-mono">
            {selectedExperience.position.split('@').map((part, index) => 
              index === 0 ? (
                <span key={index}>{part}</span>
              ) : (
                <span key={index}>
                  <span className="text-[#4ca6ff]">@</span>
                  <span className="text-[#4ca6ff]">{part}</span>
                </span>
              )
            )}
          </h3>
          <p className="text-lg text-primary-400 mb-4 font-mono">
            {selectedExperience.period}
          </p>
          <p className="text-secondary-300 mb-6 font-mono leading-relaxed whitespace-pre-line">
            {selectedExperience.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {selectedExperience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-primary-600/20 text-primary-300 rounded-full text-sm border border-primary-600/30 font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

