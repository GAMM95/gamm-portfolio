import { useState, useEffect } from 'react'
import './index.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Scroll from './components/scroll/Scroll'

import Home from './pages/home/Home'
import Skills from './pages/skills/Skills'
import Projects from './pages/projects/Projects'
import Qualification from './pages/qualification/Qualification'
import Contact from './pages/contact/Contact'

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

const App = () => {
  // ── Dark mode ──────────────────────────────────────────────────────────────
  // Read saved preference; fall back to OS preference
  const getInitialTheme = () => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  const [isDark, setIsDark] = useState(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  const toggleTheme = () => setIsDark((prev) => !prev)
  // ──────────────────────────────────────────────────────────────────────────

  return (
    <div className="flex flex-col min-h-screen">
      <Header isDark={isDark} toggleTheme={toggleTheme} />

      <main className="flex-1 pt-16 md:pt-20">
        <Home />
        <Skills />
        <Projects />
        <Qualification />
        <Contact />
      </main>

      <Footer />
      <Scroll />
    </div>
  )
}

export default App