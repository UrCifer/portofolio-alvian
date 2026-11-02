import { ArrowDown, MapPin } from 'lucide-react'
import { LinkedinIcon } from '@/components/Icons'
import { useSmoothScroll } from '@/hooks/useScrollEffects'
import heroImage from '@/assets/hero.jpg'

export default function Hero() {
  const scrollTo = useSmoothScroll()

  return (
    <section className="pt-32 pb-20 sm:pt-40 sm:pb-24">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="grid md:grid-cols-12 gap-10 md:gap-8 items-center">
          
          {/* Left Text */}
          <div className="md:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-700 dark:text-zinc-300 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
              <span>Available</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 leading-[1.15]">
              Halo! Saya Alvian Eka Pratama.
            </h1>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
              Mahasiswa/Lulusan Informatika di <strong className="text-zinc-900 dark:text-zinc-200 font-medium">Universitas Mercu Buana Jakarta</strong> yang berfokus pada <strong className="text-zinc-900 dark:text-zinc-200 font-medium">Frontend Web Development</strong> dan <strong className="text-zinc-900 dark:text-zinc-200 font-medium">UI/UX Design</strong>, serta memiliki pengalaman dalam <strong className="text-zinc-900 dark:text-zinc-200 font-medium">Project Management</strong>. Saya merancang antarmuka yang responsif serta mengembangkan website menggunakan teknologi web modern agar fungsional dan nyaman digunakan.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500">
              <span className="flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
                Jakarta, Indonesia
              </span>
              <span>·</span>
              <span>Universitas Mercu Buana</span>
              <span>·</span>
              <span>Frontend Web, UI/UX &amp; Project Management</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-white font-semibold text-xs sm:text-sm rounded-full transition-all cursor-pointer shadow-sm"
              >
                <span>Lihat Proyek Saya</span>
                <ArrowDown className="w-4 h-4 text-zinc-300 dark:text-zinc-700" />
              </button>

              <a
                href="https://www.linkedin.com/in/alvian-eka-pratama-19288b2b8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0077B5] hover:bg-[#006097] text-white font-medium text-xs sm:text-sm rounded-full transition-colors shadow-sm"
              >
                <LinkedinIcon className="w-4 h-4 fill-current" />
                <span>LinkedIn Profile</span>
              </a>
            </div>

            {/* Micro Highlights Bar */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800/60 text-xs">
              <div className="p-3 rounded-2xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/70 shadow-sm">
                <span className="text-zinc-900 dark:text-zinc-100 font-semibold block text-sm sm:text-base">7 Proyek</span>
                <span className="text-zinc-500 text-[11px]">Aplikasi &amp; Sistem Web</span>
              </div>
              <div className="p-3 rounded-2xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/70 shadow-sm">
                <span className="text-zinc-900 dark:text-zinc-100 font-semibold block text-sm sm:text-base">S.Kom</span>
                <span className="text-zinc-500 text-[11px]">Mercu Buana Jakarta</span>
              </div>
              <div className="p-3 rounded-2xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/70 shadow-sm">
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold block text-sm sm:text-base">Available</span>
                <span className="text-zinc-500 text-[11px]">Open to Opportunities</span>
              </div>
            </div>

          </div>

          {/* Right Image Frame */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="relative w-64 sm:w-72 aspect-[4/5] rounded-3xl overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl group">
              <img
                src={heroImage}
                alt="Alvian Eka Pratama"
                className="w-full h-full object-cover object-top contrast-105 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 dark:from-zinc-950/85 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="text-xs font-medium text-white block">Alvian Eka Pratama</span>
                <span className="text-[11px] font-mono text-zinc-300 dark:text-zinc-400">Universitas Mercu Buana Jakarta</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
