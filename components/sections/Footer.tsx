'use client'

import React from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-background py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-secondary-400 font-mono mb-2">
          {t.footer.createdBy}
        </p>
        <p className="text-secondary-500 font-mono text-sm">
          {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}

