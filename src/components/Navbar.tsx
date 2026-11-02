import { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { useSmoothScroll } from '@/hooks/useScrollEffects'

const NAV_LINKS = [
  { id: 'projects', label: 'Proyek' },
  { id: 'skills', label: 'Keahlian' },
  { id: 'about', label: 'Tentang' },
  { id: 'contact', label: 'Kontak' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
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
          ? 'bg-[#0c0d0e]/90 backdrop-blur-md border-b border-zinc-800/80 py-3.5'
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
            <span className="font-semibold text-sm sm:text-base text-zinc-100 group-hover:text-sky-400 transition-colors">
              Alvian Eka Pratama
            </span>
          </button>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="text-zinc-400 hover:text-zinc-100 transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            
            {/* Download CV */}
            <a
              href="/Alvian_Eka_Pratama_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white text-xs font-medium rounded-full border border-zinc-800 transition-colors"
            >
              <span>Unduh CV</span>
            </a>

            <a
              href="https://wa.me/62895324953916?text=Halo%20Alvian,%20saya%20tertarik%20dengan%20portofolio%20Anda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-semibold rounded-full transition-colors shadow-sm"
            >
              <span>Hubungi Saya</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-zinc-100 cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#0c0d0e] border-b border-zinc-800 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-sm">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="text-left text-zinc-300 hover:text-white py-1"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="/Alvian_Eka_Pratama_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-2 px-4 bg-zinc-900 text-zinc-300 text-xs font-medium rounded-xl border border-zinc-800"
              >
                Unduh CV (PDF)
              </a>
              <a
                href="https://wa.me/62895324953916?text=Halo%20Alvian,%20saya%20tertarik%20dengan%20portofolio%20Anda"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-2 px-4 bg-emerald-500 text-zinc-950 text-xs font-semibold rounded-xl"
              >
                Hubungi via WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
