'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { pt, type Translations } from '@/locales/pt'
import { en } from '@/locales/en'

type Language = 'pt' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
)

const translations: Record<Language, Translations> = {
  pt,
  en,
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('pt')
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    // Carregar idioma do localStorage ou usar padrão
    const savedLanguage = localStorage.getItem('language') as Language | null
    if (savedLanguage && (savedLanguage === 'pt' || savedLanguage === 'en')) {
      setLanguageState(savedLanguage)
    } else {
      // Detectar idioma do navegador
      const browserLang = navigator.language.toLowerCase()
      if (browserLang.startsWith('pt')) {
        setLanguageState('pt')
      } else {
        setLanguageState('en')
      }
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    if (isClient) {
      localStorage.setItem('language', lang)
    }
  }

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

