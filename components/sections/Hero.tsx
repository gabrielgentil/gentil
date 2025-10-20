import React from 'react'
import Section from '@/components/ui/Section'

export default function Hero() {
  return (
    <Section
      id="hero"
      className="min-h-screen flex items-center justify-center relative"
      bgColor="bg-gradient-to-br from-background via-background to-secondary-900/30"
    >
      {/* LinkedIn Icon */}
      <a
        href="https://www.linkedin.com/in/gabrielsantosgentil"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-8 left-1/2 -translate-x-1/2 text-secondary-400 hover:text-primary-400 transition-colors duration-300"
        aria-label="LinkedIn"
      >
        <svg
          className="w-8 h-8"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </a>

      <div className="text-center animate-fade-in max-w-2xl mx-auto px-4">
        <p className="text-xl sm:text-2xl text-secondary-300 mb-4 font-mono">
          Oi! Eu sou o
        </p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 font-mono flex items-center justify-center">
          <span className="inline-block overflow-hidden whitespace-nowrap border-r-4 border-primary-500 pr-1 animate-typing">
            Gabriel Gentil
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-secondary-300 font-mono">
          Construindo, aprendendo e empreendendo — ajudando pessoas com tecnologia e <span className="text-[#4ca6ff] font-semibold">propósito</span>. 👊🏾
        </p>
      </div>
    </Section>
  )
}

