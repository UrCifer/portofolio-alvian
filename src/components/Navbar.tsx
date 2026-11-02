import { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react'
import { LinkedinIcon } from '@/components/Icons'
import { useSmoothScroll } from '@/hooks/useScrollEffects'
import { useTheme } from '@/hooks/useTheme'

const NAV_LINKS = [
  { id: 'projects', label: 'Proyek' },
  { id: 'skills', label: 'Keahlian' },
  { id: 'about', label: 'Tentang' },
  { id: 'contact', label: 'Kontak' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const scrollTo = useSmoothScroll()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (id: string) => {
    scrollTo(id)
    setIsOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/90 dark:bg-[#0c0d0e]/90 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80 py-3.5 shadow-sm'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Name */}
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' })
              setIsOpen(false)
            }}
            className="text-left group cursor-pointer"
          >
            <span className="font-semibold text-sm sm:text-base text-zinc-900 dark:text-zinc-100 group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
              Alvian Eka Pratama
            </span>
          </button>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}

            {/* Dark / Light Mode Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
              aria-label={theme === 'dark' ? 'Ganti ke Mode Terang' : 'Ganti ke Mode Gelap'}
              title={theme === 'dark' ? 'Ganti ke Mode Terang' : 'Ganti ke Mode Gelap'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-zinc-700" />
              )}
            </button>

            <a
              href="https://www.linkedin.com/in/alvian-eka-pratama-19288b2b8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#0077B5] hover:bg-[#006097] text-white text-xs font-semibold rounded-full transition-colors shadow-sm"
            >
              <LinkedinIcon className="w-3.5 h-3.5 fill-current" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </nav>

          {/* Mobile Right Bar (Theme toggle + Hamburger) */}
          <div className="flex md:hidden items-center gap-1">
            <button
              onClick={toggleTheme}
              className="p-2 text-zinc-600 dark:text-zinc-400 cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-zinc-700" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-[#0c0d0e] border-b border-zinc-200 dark:border-zinc-800 px-6 py-6 space-y-4 shadow-lg">
          <nav className="flex flex-col space-y-3 text-sm">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="text-left text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white py-1"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2">
              <a
                href="https://www.linkedin.com/in/alvian-eka-pratama-19288b2b8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-4 bg-[#0077B5] text-white text-xs font-semibold rounded-xl shadow-sm"
              >
                <LinkedinIcon className="w-4 h-4 fill-current" />
                <span>LinkedIn</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
