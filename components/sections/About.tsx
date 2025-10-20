'use client'

import React from 'react'
import Image from 'next/image'
import Section from '@/components/ui/Section'
import { useLanguage } from '@/contexts/LanguageContext'

export default function About() {
  const { t } = useLanguage()

  return (
    <Section id="about" title={t.about.title} bgColor="bg-background">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="animate-slide-up">
          <p className="text-lg text-secondary-300 mb-4 font-mono">
            {t.about.paragraph1.split(t.about.engineerHighlight)[0]}
            <span className="text-[#4ca6ff] font-semibold">{t.about.engineerHighlight}</span>
            {t.about.paragraph1.split(t.about.engineerHighlight)[1]}
          </p>
          <p className="text-lg text-secondary-300 mb-4 font-mono">
            {t.about.paragraph2}
          </p>
          <p className="text-lg text-secondary-300 font-mono">
            <span className="text-[#4ca6ff] font-semibold">{t.about.optimistHighlight}</span>
            {t.about.paragraph3.split(t.about.optimistHighlight)[1]}
          </p>
        </div>
        <div className="flex justify-center animate-slide-up">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <Image
              src="/images/profile.jpg"
              alt="Gabriel Gentil"
              fill
              className="rounded-lg object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </Section>
  )
}

