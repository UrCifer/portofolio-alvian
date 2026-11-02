import { useState } from 'react'
import { ArrowUpRight, X, Eye, Globe, Code2, Server, MessageCircle } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollEffects'

import krempeImg from '@/assets/projects/krempe.jpg'
import listkuImg from '@/assets/projects/listku.png'
import ebookImg from '@/assets/projects/ebook.jpg'
import siaImg from '@/assets/projects/sia-mercubuana.png'
import sawImg from '@/assets/projects/saw-alritek.jpg'
import portalBeritaImg from '@/assets/projects/portal-berita.jpg'

export interface Project {
  id: string
  title: string
  platform: string
  highlightTag?: string
  category: 'E-Commerce' | 'Aplikasi Web' | 'Sistem Informasi Web'
  role: string
  organization: string
  description: string
  details: string[]
  frontendTech: string[]
  backendTech: string[]
  technologies: string[]
  image?: string
  accentColor: string
}

const ALL_PROJECTS: Project[] = [
  {
    id: 'portal-berita',
    title: 'PortalBerita — Website Portal Berita & Sistem CRUD',
    platform: 'Aplikasi Berbasis Web',
    highlightTag: '✨ Proyek Magang (REST API & CRUD)',
    category: 'Aplikasi Web',
    role: 'Frontend & Web Developer (Magang)',
    organization: 'Proyek Magang Web Development',
    description:
      'Website portal berita berbasis web yang dikembangkan pada saat program magang. Mengintegrasikan penarikan data REST API untuk penayangan berita terkini secara real-time dari berbagai kategori (Teknologi, Pendidikan, Olahraga, Kesehatan, Hiburan), serta dilengkapi sistem otentikasi dan operasi CRUD (Create, Read, Update, Delete) untuk pengelolaan data berita dan pengguna yang mengakses portal.',
    details: [
      'Membangun antarmuka website portal berita yang modern dan responsif dengan banner hero, navigasi kategori, dan kartu berita interaktif menggunakan HTML, CSS, dan JavaScript.',
      'Mengintegrasikan mekanisme penarikan REST API untuk menyajikan konten berita terkini secara dinamis dan otomatis.',
      'Mengembangkan sistem CRUD (Create, Read, Update, Delete) yang memungkinkan admin/pengguna mengelola postingan artikel berita serta data pengguna yang mengakses.',
      'Menyediakan alur autentikasi pengguna (Login & Daftar Akun) untuk pengaturan hak akses portal berita.',
    ],
    frontendTech: ['HTML', 'CSS', 'JavaScript'],
    backendTech: ['Python', 'REST API', 'MySQL'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'REST API', 'CRUD System', 'MySQL'],
    image: portalBeritaImg,
    accentColor: '#8b5cf6',
  },
  {
    id: 'krempe',
    title: 'Krempe — Website E-Commerce Keripik Tempe',
    platform: 'Aplikasi Berbasis Web',
    highlightTag: '🛍️ E-Commerce Produk',
    category: 'E-Commerce',
    role: 'Frontend & Web Developer',
    organization: 'Website Penjualan Produk',
    description:
      'Website e-commerce berbasis web untuk katalog dan pemesanan produk keripik tempe "Krempe" (varian Original dan Balado). Menampilkan informasi lengkap kemasan 200g, masa simpan, level kepedasan, harga, dan tombol pemesanan langsung melalui web browser.',
    details: [
      'Merancang dan membangun antarmuka website e-commerce yang bersih dan responsif menggunakan HTML dan CSS murni.',
      'Menampilkan katalog produk interaktif lengkap dengan foto autentik varian Original & Balado.',
      'Menyajikan spesifikasi produk: berat bersih 200 gram, masa simpan 1-3 bulan, dan level kerenyahan extra crispy.',
      'Backend Python ringan untuk menangani alur pemesanan dan validasi form order.',
    ],
    frontendTech: ['HTML', 'CSS', 'JavaScript'],
    backendTech: ['Python'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'Responsive Web'],
    image: krempeImg,
    accentColor: '#d97706',
  },
  {
    id: 'listku',
    title: 'ListKu — Website Task Manager & To-Do List',
    platform: 'Aplikasi Berbasis Web',
    highlightTag: '⚡ Web Productivity Tool',
    category: 'Aplikasi Web',
    role: 'Frontend & Web Developer',
    organization: 'Web Productivity Tool',
    description:
      'Aplikasi manajemen tugas harian berbasis web yang responsif dan interaktif. Memudahkan pengguna mengelola pekerjaan dengan fitur penambahan tugas baru, pengaturan tenggat waktu, kalender terintegrasi, serta update status selesai secara real-time di web browser.',
    details: [
      'Membangun antarmuka dashboard berbasis web yang minimalis dan terstruktur rapi dengan HTML dan CSS.',
      'Fitur manajemen tugas lengkap: Add New Task, pengelompokan kategori tugas, serta status pengerjaan To-Do / Done.',
      'Tampilan kalender web (Calendar View) untuk memantau deadline dan jadwal aktivitas harian secara terorganisir.',
      'Backend Python untuk mengelola API data tugas, status checklist, dan penyimpanan data aktivitas.',
    ],
    frontendTech: ['HTML', 'CSS', 'JavaScript'],
    backendTech: ['Python'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'Web App'],
    image: listkuImg,
    accentColor: '#38bdf8',
  },
  {
    id: 'ebook-platform',
    title: 'E-Book — Website Perpustakaan Digital',
    platform: 'Aplikasi Berbasis Web',
    highlightTag: '📚 Digital Reading Platform',
    category: 'Aplikasi Web',
    role: 'Frontend & Web Developer',
    organization: 'Digital Library Platform',
    description:
      'Website platform perpustakaan buku digital berbasis web yang menyajikan koleksi e-book gratis dan premium (menampilkan judul unggulan seperti "Filosofi Teras" karya Henry Manampiring, "Indigo", dan "Mahram Untuk Najwa"). Dirancang dengan antarmuka web modern yang nyaman dibaca di desktop maupun mobile browser.',
    details: [
      'Mengembangkan tata letak halaman web perpustakaan modern dengan HTML dan kustomisasi styling CSS yang elegan.',
      'Banner carousel buku unggulan interaktif lengkap dengan sinopsis singkat dan visual sampul buku.',
      'Sistem membership web untuk mengklasifikasikan pembaca buku gratis serta akses eksklusif (Premium).',
      'Backend Python untuk penyediaan REST API katalog e-book, kategori bacaan, dan data ulasan pengguna.',
    ],
    frontendTech: ['HTML', 'CSS', 'JavaScript'],
    backendTech: ['Python'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'REST API'],
    image: ebookImg,
    accentColor: '#a855f7',
  },
  {
    id: 'sia-krs',
    title: 'SIA — Website Portal Pengisian KRS Mahasiswa',
    platform: 'Aplikasi Berbasis Web',
    highlightTag: '🏛️ Portal Akademik Kampus',
    category: 'Sistem Informasi Web',
    role: 'Frontend & System Developer',
    organization: 'Universitas Mercu Buana Jakarta',
    description:
      'Aplikasi Sistem Informasi Akademik (SIA) berbasis web untuk portal pengisian Kartu Rencana Studi (KRS) mahasiswa Universitas Mercu Buana. Terdiri dari modul login autentikasi web, rekapitulasi capaian semester (IPK 3.75, 90 SKS), serta tabel pemilihan mata kuliah semester berjalan secara online.',
    details: [
      'Membangun halaman Login to SIA dan dashboard akademik berbasis web menggunakan HTML, CSS, dan JavaScript.',
      'Tabel pemilihan mata kuliah (Selected Courses) lengkap dengan kode matkul, nama, bobot SKS, dan jadwal kelas.',
      'Backend PHP dan Python untuk validasi kuota kelas, batas maksimal SKS, serta pemrosesan data akademik.',
      'Database MySQL untuk penyimpanan relasional data akun mahasiswa, program studi, dan riwayat rencana studi.',
    ],
    frontendTech: ['HTML', 'CSS', 'JavaScript'],
    backendTech: ['Python', 'PHP', 'MySQL'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'PHP', 'MySQL'],
    image: siaImg,
    accentColor: '#2563eb',
  },
  {
    id: 'erp-alritek',
    title: 'ERP System — Website Inventori & Master Data Gudang',
    platform: 'Aplikasi Berbasis Web',
    highlightTag: '🏢 Sistem ERP Gudang Industri',
    category: 'Sistem Informasi Web',
    role: 'Frontend & Web Developer',
    organization: 'PT Alritek Equipindo Jaya',
    description:
      'Sistem ERP internal berbasis web untuk PT Alritek Equipindo Jaya (spesialis forklift attachments). Menggantikan pencatatan manual menjadi sistem web terpusat untuk katalog master data sparepart mesin, monitoring stok gudang, dan alur pemesanan secara akurat.',
    details: [
      'Membangun antarmuka dashboard inventori berbasis web responsif dengan HTML, CSS, dan Tailwind CSS.',
      'Modul Master Data suku cadang dengan fitur pencarian cepat dan sistem notifikasi stok menipis (Low Stock Alert).',
      'Backend Laravel (PHP) dan skrip Python untuk pengolahan data inventori, kalkulasi pergerakan stok, dan laporan berkala.',
      'Penyimpanan database MySQL untuk menjaga konsistensi transaksi stok masuk dan keluar.',
    ],
    frontendTech: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
    backendTech: ['Python', 'PHP', 'Laravel', 'MySQL'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Python', 'PHP', 'Laravel', 'MySQL'],
    accentColor: '#10b981',
  },
  {
    id: 'dss-saw',
    title: 'SPK SAW — Website Pemilihan Karyawan Terbaik & Analisis Sensitivitas',
    platform: 'Aplikasi Berbasis Web',
    highlightTag: '🎓 Tugas Akhir (Metode SAW)',
    category: 'Sistem Informasi Web',
    role: 'Full Stack Web Developer & Researcher',
    organization: 'PT Alritek Equipindo Jaya (Skripsi / Tugas Akhir)',
    description:
      'Aplikasi Sistem Pendukung Keputusan (SPK) berbasis web untuk PT Alritek Equipindo Jaya. Mengimplementasikan algoritma Simple Additive Weighting (SAW) serta modul simulasi interaktif Analisis Sensitivitas untuk menguji ketahanan peringkat karyawan terbaik terhadap perubahan bobot kriteria secara real-time di web browser.',
    details: [
      'Membangun antarmuka dashboard web bertema korporat merah-putih PT Alritek menggunakan HTML, CSS, dan JavaScript.',
      'Modul simulasi Analisis Sensitivitas interaktif: slider simulasi bobot kriteria (Kerajinan C1 50%, Kehadiran C2 40%, Lembur C3 10%) dengan auto-balancing 100% dan indikator stabilitas ranking.',
      'Implementasi algoritma perhitungan SAW, normalisasi matriks, dan komputasi sensitivitas menggunakan Python & PHP.',
      'Tabel perbandingan ranking SAW real-time yang menampilkan nama karyawan (Efandra, Budi, dll), skor baru, peringkat awal, dan pergeseran posisi.',
      'Database MySQL untuk manajemen data penilaian karyawan dari setiap periode evaluasi.',
    ],
    frontendTech: ['HTML', 'CSS', 'JavaScript'],
    backendTech: ['Python (Algoritma SAW)', 'PHP', 'Laravel', 'MySQL'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'PHP', 'Laravel', 'MySQL', 'Metode SAW'],
    image: sawImg,
    accentColor: '#ef4444',
  },
]

export default function Projects() {
  const { ref, isVisible } = useScrollReveal()
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [filter, setFilter] = useState<'All' | 'E-Commerce' | 'Aplikasi Web' | 'Sistem Informasi Web'>('All')

  const filteredProjects = filter === 'All'
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter((p) => p.category === filter)

  return (
    <section id="projects" className="py-24 border-t border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div ref={ref} className={`reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}>
          
          {/* Header & Filter */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-950/50 border border-sky-800/60 text-sky-300 text-xs font-medium mb-3">
                <Globe className="w-3.5 h-3.5" />
                <span>100% Berbasis Web (Web-Based Applications)</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-100 tracking-tight">
                My Projects
              </h2>
              <p className="text-sm text-zinc-400 mt-2 max-w-lg">
                Kumpulan proyek website dan aplikasi berbasis web yang telah saya rancang dan kembangkan untuk berbagai kebutuhan nyata.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-zinc-900 rounded-2xl border border-zinc-800 text-xs">
              {(['All', 'E-Commerce', 'Aplikasi Web', 'Sistem Informasi Web'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                    filter === cat
                      ? 'bg-zinc-800 text-white font-medium shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {cat === 'All' ? 'Semua Proyek' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-7">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-3xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Real Project Image Preview Frame */}
                  <div className="relative aspect-[16/10] bg-[#0c0d0e] border-b border-zinc-800 overflow-hidden">
                    {project.image ? (
                      <div className="relative w-full h-full overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent pointer-events-none" />
                        
                        {/* Hover Overlay Button */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <button
                            onClick={() => setActiveProject(project)}
                            className="inline-flex items-center gap-1.5 px-4 py-2 bg-zinc-900/90 text-white text-xs font-medium rounded-full border border-white/20 backdrop-blur-md cursor-pointer hover:bg-zinc-800 transition-colors shadow-lg"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>Lihat Detail Foto</span>
                          </button>
                        </div>
                      </div>
                    ) : (
                      /* Fallback visual for Alritek projects without uploaded screenshots */
                      <div className="w-full h-full p-5 flex flex-col justify-between font-mono text-xs bg-gradient-to-br from-zinc-900 to-zinc-950">
                        <div className="flex items-center justify-between text-zinc-500 text-[11px] border-b border-zinc-800 pb-2">
                          <span className="text-zinc-400">
                            {project.id === 'erp-alritek' ? 'ALRITEK ERP · INVENTORY' : 'SPK SAW · DECISION ENGINE'}
                          </span>
                          <span className="text-emerald-400">● Web Application</span>
                        </div>
                        <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-1">
                          <span className="text-zinc-200 block font-semibold">{project.title}</span>
                          <span className="text-[11px] text-zinc-400 block">{project.organization}</span>
                        </div>
                        <span className="text-[10px] text-zinc-500">HTML · CSS · Python · PHP · MySQL</span>
                      </div>
                    )}

                    {/* Platform Badge (Web-Based) on Image */}
                    <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-zinc-950/90 text-sky-300 text-[11px] font-mono border border-sky-500/30 backdrop-blur-md shadow-sm">
                        <Globe className="w-3 h-3 text-sky-400" />
                        <span>Aplikasi Web</span>
                      </span>
                      <span className="px-2 py-1 rounded-full bg-zinc-950/80 text-zinc-300 text-[11px] font-mono border border-white/10 backdrop-blur-md">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-zinc-500 mb-2">
                      <span>{project.organization}</span>
                      {project.highlightTag && (
                        <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-zinc-800/90 text-sky-300 border border-zinc-700/60 font-medium">
                          {project.highlightTag}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-xs text-sky-400 font-mono mt-1 mb-3">
                      Peran: {project.role}
                    </p>

                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-3 mb-4">
                      {project.description}
                    </p>

                    {/* Stack Summary Pills */}
                    <div className="space-y-1.5 pt-2 border-t border-zinc-800/60 text-[11px] font-mono">
                      <div className="flex items-center gap-1.5 text-zinc-400">
                        <span className="text-zinc-500 w-16">Frontend:</span>
                        <span className="text-zinc-300">{project.frontendTech.join(', ')}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-zinc-400">
                        <span className="text-zinc-500 w-16">Backend:</span>
                        <span className="text-emerald-400">{project.backendTech.join(', ')}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer with Tech Badges & Detail Button */}
                <div className="px-6 pb-6 pt-3 border-t border-zinc-800/60 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[11px] font-mono bg-zinc-800 text-zinc-300 rounded-md border border-zinc-700/60"
                      >
                        {t}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-1.5 py-0.5 text-[11px] font-mono text-zinc-500">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => setActiveProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-medium text-sky-400 hover:text-sky-300 cursor-pointer ml-2 whitespace-nowrap"
                  >
                    <span>Detail</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Project Details Modal with Full Screenshot View */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-5 text-zinc-300 shadow-2xl my-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between pb-3 border-b border-zinc-800">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-sky-950/60 text-sky-300 text-xs font-mono border border-sky-800/60">
                    <Globe className="w-3 h-3 text-sky-400" />
                    <span>Aplikasi Berbasis Web</span>
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    · {activeProject.category}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-zinc-100">
                  {activeProject.title}
                </h3>
                <p className="text-xs text-zinc-400 font-mono mt-0.5">
                  {activeProject.organization} · Peran: {activeProject.role}
                </p>
              </div>
              <button
                onClick={() => setActiveProject(null)}
                className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* High-Res Screenshot Display */}
            {activeProject.image && (
              <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-black shadow-md">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-auto object-contain max-h-[350px]"
                />
              </div>
            )}

            <p className="text-sm text-zinc-300 leading-relaxed">
              {activeProject.description}
            </p>

            {/* Tech Stack Breakdown (Frontend & Backend) */}
            <div className="grid sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800">
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-sky-400">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Frontend Web</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {activeProject.frontendTech.map((f) => (
                    <span
                      key={f}
                      className="px-2 py-0.5 text-xs font-mono bg-zinc-900 text-zinc-200 rounded border border-zinc-800"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-400">
                  <Server className="w-3.5 h-3.5" />
                  <span>Backend &amp; Database</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {activeProject.backendTech.map((b) => (
                    <span
                      key={b}
                      className="px-2 py-0.5 text-xs font-mono bg-zinc-900 text-emerald-300 rounded border border-zinc-800"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Features / Details */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                Poin Pekerjaan &amp; Fitur Utama
              </span>
              <ul className="space-y-1.5 text-xs text-zinc-400">
                {activeProject.details.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-sky-400 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-2">
                Seluruh Teknologi yang Digunakan
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeProject.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs font-mono bg-zinc-800 text-zinc-300 rounded-md border border-zinc-700/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <a
                href={`https://wa.me/62895324953916?text=${encodeURIComponent(`Halo Alvian, saya tertarik mendiskusikan proyek "${activeProject.title}" yang saya lihat di portofolio Anda.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 rounded-full transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Diskusikan Proyek via WhatsApp</span>
              </a>

              <button
                onClick={() => setActiveProject(null)}
                className="px-5 py-2.5 text-xs font-medium text-zinc-300 bg-zinc-800 hover:bg-zinc-700 rounded-full transition-colors cursor-pointer text-center"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
