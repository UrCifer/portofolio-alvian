import { ArrowUpRight } from 'lucide-react'
import { LinkedinIcon } from '@/components/Icons'
import { useScrollReveal } from '@/hooks/useScrollEffects'

export default function Contact() {
  const { ref, isVisible } = useScrollReveal()
  const linkedinUrl = 'https://www.linkedin.com/in/alvian-eka-pratama-19288b2b8'

  return (
    <section id="contact" className="py-24 border-t border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div ref={ref} className={`reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}>
          
          <div className="max-w-xl space-y-6">
            <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">
              Mari Terhubung
            </h2>
            
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
              Tertarik untuk mendiskusikan peluang kerja, proyek website, atau sekadar bertukar ide seputar teknologi dan desain? Mari terhubung langsung melalui profil LinkedIn saya.
            </p>

            {/* LinkedIn Connection Card */}
            <div className="pt-2">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 sm:p-6 rounded-3xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-[#0077B5]/60 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#0077B5]/15 text-[#0077B5] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <LinkedinIcon className="w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block">LINKEDIN RESMI</span>
                    <span className="text-base font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-[#0077B5] transition-colors block">
                      Alvian Eka Pratama
                    </span>
                    <span className="text-xs text-zinc-500 block">
                      Informatika · Universitas Mercu Buana Jakarta
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#0077B5] hover:bg-[#006097] text-white text-xs sm:text-sm font-medium transition-colors shadow-sm whitespace-nowrap">
                  <span>Kunjungi LinkedIn</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
