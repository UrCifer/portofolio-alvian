import { GraduationCap, MapPin, Sparkles, CheckCircle2 } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollEffects'

export default function About() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="about" className="py-24 border-t border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div ref={ref} className={`reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}>
          
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-100 tracking-tight">
              Tentang Saya
            </h2>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-start">
            
            {/* Story */}
            <div className="md:col-span-7 space-y-5 text-zinc-300 text-sm sm:text-base leading-relaxed">
              <p>
                Halo! Nama saya <strong className="text-white font-semibold">Alvian Eka Pratama</strong>, 
                mahasiswa/lulusan Informatika di <strong className="text-white font-medium">Universitas Mercu Buana Jakarta</strong>.
              </p>

              <p className="text-zinc-400">
                Saya berfokus pada <strong className="text-zinc-200">Frontend Web Development</strong> dan{' '}
                <strong className="text-zinc-200">UI/UX Design</strong>. Saya berpengalaman dalam merancang antarmuka yang bersih serta membangun aplikasi website responsif menggunakan HTML, CSS, JavaScript, dan ekosistem web modern—mengubah ide dan desain menjadi produk digital yang fungsional, interaktif, dan mudah digunakan.
              </p>

              <p className="text-zinc-400">
                Saya selalu antusias mempelajari teknologi baru dan terus mengasah keahlian teknis untuk menciptakan solusi web yang bermanfaat bagi pengguna nyata.
              </p>

              <div className="pt-2">
                <a
                  href="/Alvian_Eka_Pratama_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-200 hover:text-white rounded-full text-xs sm:text-sm font-medium transition-colors"
                >
                  <span>Lihat Resume / CV Lengkap (PDF)</span>
                </a>
              </div>
            </div>

            {/* Quick Cards */}
            <div className="md:col-span-5 space-y-4">
              
              {/* Education */}
              <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-2">
                <div className="flex items-center gap-2 text-zinc-200 font-semibold text-sm">
                  <GraduationCap className="w-4 h-4 text-sky-400" />
                  <span>Pendidikan</span>
                </div>
                <div className="text-xs text-zinc-400 space-y-1">
                  <p className="text-zinc-200 font-medium">Teknik Informatika (S.Kom)</p>
                  <p>Universitas Mercu Buana Jakarta</p>
                  <p className="text-zinc-500 font-mono">Angkatan 2020</p>
                </div>
              </div>

              {/* Location */}
              <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-2">
                <div className="flex items-center gap-2 text-zinc-200 font-semibold text-sm">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>Domisili</span>
                </div>
                <div className="text-xs text-zinc-400 space-y-1">
                  <p className="text-zinc-200 font-medium">Jakarta, Indonesia</p>
                  <p>Terbuka untuk pekerjaan On-site, Hybrid, maupun Remote.</p>
                </div>
              </div>

              {/* Focus */}
              <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-2">
                <div className="flex items-center gap-2 text-zinc-200 font-semibold text-sm">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Fokus Utama</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Frontend Web Development (HTML, CSS, JavaScript, React) serta UI/UX Design di Figma.
                </p>
              </div>

              {/* Work Availability */}
              <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-2">
                <div className="flex items-center gap-2 text-zinc-200 font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Kesiapan Kerja</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Siap segera bergabung (<span className="text-zinc-200">Immediate Start</span>) untuk posisi Frontend Web Developer atau UI/UX Designer.
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
