import React from 'react'
import Image from 'next/image'
import Section from '@/components/ui/Section'

export default function About() {
  return (
    <Section id="about" title="Sobre Mim" bgColor="bg-background">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="animate-slide-up">
          <p className="text-lg text-secondary-300 mb-4 font-mono">
            Sou <span className="text-[#4ca6ff] font-semibold">Engenheiro de Software</span>, nascido em São Paulo, com 8 anos de experiência e apaixonado por tecnologia, esportes e desafios.
          </p>
          <p className="text-lg text-secondary-300 mb-4 font-mono">
            Gosto de estar em movimento, seja resolvendo um problema complexo no código ou superando um novo limite fora dele.
          </p>
          <p className="text-lg text-secondary-300 font-mono">
            <span className="text-[#4ca6ff] font-semibold">Otimista por natureza</span>, acredito que cada desafio é uma oportunidade de evoluir e que o aprendizado está na jornada, não só no resultado.
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

