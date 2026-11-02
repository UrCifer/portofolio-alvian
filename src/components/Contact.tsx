import { useState } from 'react'
import { Mail, Copy, Check, Phone, ArrowUpRight } from 'lucide-react'
import { LinkedinIcon, GithubIcon } from '@/components/Icons'
import { useScrollReveal } from '@/hooks/useScrollEffects'

export default function Contact() {
  const { ref, isVisible } = useScrollReveal()
  const [copied, setCopied] = useState(false)
  const email = 'alvianekapratama@gmail.com'
  const phone = '0895324953916'
  const whatsappUrl = 'https://wa.me/62895324953916'
  const linkedinUrl = 'https://www.linkedin.com/in/alvian-eka-pratama-19288b2b8'

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-24 border-t border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div ref={ref} className={`reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}>
          
          <div className="max-w-xl space-y-6">
            <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-100 tracking-tight">
              Hubungi Saya
            </h2>
            
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Tertarik untuk bekerja sama, mendiskusikan peluang kerja, atau sekadar bertukar ide seputar teknologi dan desain? Jangan ragu untuk menghubungi saya melalui kontak di bawah ini.
            </p>

            {/* Direct Email Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-zinc-500 block">EMAIL RESMI</span>
                  <a
                    href={`mailto:${email}`}
                    className="text-sm font-medium text-zinc-200 hover:text-white hover:underline underline-offset-4"
                  >
                    {email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-zinc-300 bg-zinc-800 hover:bg-zinc-700 rounded-xl transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Tersalin</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Salin Email</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-1 px-4 py-2 text-xs font-semibold text-zinc-950 bg-zinc-100 hover:bg-white rounded-xl transition-colors"
                >
                  Kirim Email
                </a>
              </div>
            </div>

            {/* Direct Contact Cards (WhatsApp & LinkedIn) */}
            <div className="grid sm:grid-cols-2 gap-3 pt-1">
              
              {/* WhatsApp / Phone */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-colors flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-zinc-500 block">WHATSAPP / TELEPON</span>
                    <span className="text-xs font-semibold text-zinc-200 group-hover:text-white">{phone}</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
              </a>

              {/* LinkedIn */}
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-colors flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-zinc-500 block">LINKEDIN</span>
                    <span className="text-xs font-semibold text-zinc-200 group-hover:text-white truncate max-w-[150px] block">
                      Alvian Eka Pratama
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-sky-400 transition-colors" />
              </a>

            </div>

            {/* Additional links */}
            <div className="pt-2 flex items-center gap-3 text-xs">
              <a
                href="https://github.com/alvianekapratama"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900/40 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
