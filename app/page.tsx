import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Hero />
        <About />
        <Experience />
      </main>
      <Footer />
    </>
  )
}

