import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { LanguageProvider } from '@/contexts/LanguageContext'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Gabriel Gentil',
  description:
    'Professional resume and portfolio of Gabriel Gentil - Software Developer',
  keywords: ['developer', 'portfolio', 'resume', 'Gabriel Gentil'],
  openGraph: {
    title: 'Gabriel Gentil',
    description: 'Professional resume and portfolio of Gabriel Gentil - Software Developer',
    images: ['/apple-touch-icon.png'],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}

