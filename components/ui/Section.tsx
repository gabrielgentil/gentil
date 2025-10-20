import React from 'react'

interface SectionProps {
  id: string
  title?: string
  children: React.ReactNode
  className?: string
  bgColor?: string
}

export default function Section({
  id,
  title,
  children,
  className = '',
  bgColor = 'bg-white',
}: SectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-20 ${bgColor} ${className}`}>
      <div className="section-container">
        {title && <h2 className="section-title">{title}</h2>}
        {children}
      </div>
    </section>
  )
}

