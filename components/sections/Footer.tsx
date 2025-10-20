import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-background py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-secondary-400 font-mono mb-2">
          Criado por Gabriel Gentil usando NextJs e TailwindCSS.
        </p>
        <p className="text-secondary-500 font-mono text-sm">
          © Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

