import { ArrowUp } from 'lucide-react'
import { useSmoothScroll } from '@/hooks/useScrollEffects'

const YEAR = new Date().getFullYear()

export default function Footer() {
  const scrollTo = useSmoothScroll()

  return (
    <footer className="py-10 border-t border-zinc-800/80 text-xs text-zinc-500">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-center sm:text-left">
            &copy; {YEAR} Alvian Eka Pratama · Universitas Mercu Buana Jakarta
          </p>

          <button
            onClick={() => scrollTo('root')}
            className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-zinc-200 transition-colors font-mono cursor-pointer"
          >
            <span>Kembali ke atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
