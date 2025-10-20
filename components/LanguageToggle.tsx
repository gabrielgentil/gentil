'use client'

import React from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt')
  }

  return (
    <button
      onClick={toggleLanguage}
      className="absolute top-8 right-8 flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary-800/50 border border-secondary-700/50 text-secondary-300 hover:text-primary-400 hover:border-primary-600/50 transition-all duration-300 font-mono text-sm"
      aria-label="Toggle Language"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
        />
      </svg>
      <span>{language === 'pt' ? 'EN' : 'PT'}</span>
    </button>
  )
}

