'use client'

import React from 'react'
import Section from '@/components/ui/Section'
import LanguageToggle from '@/components/LanguageToggle'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <Section
      id="hero"
      className="min-h-screen flex items-center justify-center relative pt-24 pb-12 sm:pt-20 sm:pb-12"
      bgColor="bg-gradient-to-br from-background via-background to-secondary-900/30"
    >
      {/* Language Toggle */}
      <LanguageToggle />

      {/* LinkedIn Icon */}
      <a
        href="https://www.linkedin.com/in/gabrielsantosgentil"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-6 sm:top-8 left-1/2 -translate-x-1/2 text-secondary-400 hover:text-primary-400 transition-colors duration-300 z-10"
        aria-label="LinkedIn"
      >
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </a>

      <div className="text-center animate-fade-in max-w-2xl mx-auto px-6 sm:px-8 w-full overflow-x-hidden">
        <p className="text-lg sm:text-xl md:text-2xl text-secondary-300 mb-4 font-mono">
          {t.hero.greeting}
        </p>
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-mono flex items-center justify-center">
              <span className="inline-block whitespace-nowrap border-r-4 border-primary-500 pr-1 overflow-hidden max-w-full animate-typing-mobile sm:animate-typing">
            {t.hero.name}
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-secondary-300 font-mono leading-relaxed">
          {t.hero.description} <span className="text-[#4ca6ff] font-semibold">{t.hero.purpose}</span>. {t.hero.descriptionEnd}
        </p>
      </div>
    </Section>
  )
}

