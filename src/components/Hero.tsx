import { ArrowDown, Mail, MapPin, FileText, MessageCircle } from 'lucide-react'
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Tersedia untuk peluang kerja Full-Time &amp; Freelance</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-100 leading-[1.15]">
              Halo! Saya Alvian Eka Pratama.
            </h1>

            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
              Mahasiswa/Lulusan Informatika di <strong className="text-zinc-200 font-medium">Universitas Mercu Buana Jakarta</strong> yang berfokus pada <strong className="text-zinc-200 font-medium">Frontend Web Development</strong> dan <strong className="text-zinc-200 font-medium">UI/UX Design</strong>. Saya merancang antarmuka yang responsif serta mengembangkan website menggunakan teknologi web modern agar fungsional dan nyaman digunakan.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500">
              <span className="flex items-center gap-1.5 text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                Jakarta, Indonesia
              </span>
              <span>·</span>
              <span>Universitas Mercu Buana</span>
              <span>·</span>
              <span>Frontend Web &amp; UI/UX</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-100 text-zinc-950 font-semibold text-xs sm:text-sm rounded-full hover:bg-white transition-all cursor-pointer shadow-sm"
              >
                <span>Lihat Proyek Saya</span>
                <ArrowDown className="w-4 h-4 text-zinc-700" />
              </button>

              <a
                href="/Alvian_Eka_Pratama_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900 border border-zinc-800 text-zinc-200 hover:text-white font-medium text-xs sm:text-sm rounded-full hover:bg-zinc-800 transition-colors shadow-sm"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                <span>Unduh CV (PDF)</span>
              </a>

              <a
                href="https://wa.me/62895324953916?text=Halo%20Alvian,%20saya%20melihat%20portofolio%20web%20Anda"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/30 text-xs sm:text-sm font-medium rounded-full transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <a
                href="mailto:alvianekapratama@gmail.com"
                className="inline-flex items-center gap-2 px-3 py-2 text-zinc-500 hover:text-zinc-300 text-xs transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
            </div>

            {/* Micro Highlights Bar for HR / Recruiter */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-zinc-800/60 text-xs">
              <div className="p-3 rounded-2xl bg-zinc-900/40 border border-zinc-800/70">
                <span className="text-zinc-100 font-semibold block text-sm sm:text-base">7 Proyek</span>
                <span className="text-zinc-500 text-[11px]">Aplikasi &amp; Sistem Web</span>
              </div>
              <div className="p-3 rounded-2xl bg-zinc-900/40 border border-zinc-800/70">
                <span className="text-zinc-100 font-semibold block text-sm sm:text-base">S.Kom</span>
                <span className="text-zinc-500 text-[11px]">Mercu Buana Jakarta</span>
              </div>
              <div className="p-3 rounded-2xl bg-zinc-900/40 border border-zinc-800/70">
                <span className="text-emerald-400 font-semibold block text-sm sm:text-base">Siap Kerja</span>
                <span className="text-zinc-500 text-[11px]">Full-Time / Freelance</span>
              </div>
            </div>

          </div>

          {/* Right Image Frame */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="relative w-64 sm:w-72 aspect-[4/5] rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-xl group">
              <img
                src={heroImage}
                alt="Alvian Eka Pratama"
                className="w-full h-full object-cover object-top contrast-105 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="text-xs font-medium text-zinc-100 block">Alvian Eka Pratama</span>
                <span className="text-[11px] font-mono text-zinc-400">Universitas Mercu Buana Jakarta</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
