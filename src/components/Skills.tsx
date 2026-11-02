import {
  ReactIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  TailwindIcon,
  FigmaIcon,
  LaravelIcon,
  PhpIcon,
  MysqlIcon,
  GithubIcon,
  ViteIcon,
  HtmlIcon,
  CssIcon,
  PythonIcon,
} from '@/components/Icons'
import { Terminal, Code, Palette, Database } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollEffects'

export default function Skills() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="skills" className="py-24 border-t border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div ref={ref} className={`reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}>
          
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">
              Skills &amp; Tools
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 max-w-lg">
              Teknologi dan keahlian yang saya gunakan dalam merancang antarmuka dan membangun aplikasi berbasis web.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Design */}
            <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 space-y-4 shadow-sm">
              <div className="flex items-center gap-2.5 text-zinc-900 dark:text-zinc-200 font-semibold text-sm">
                <Palette className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>UI/UX Design</span>
              </div>
              <ul className="space-y-2.5 text-xs text-zinc-600 dark:text-zinc-400">
                <li className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200">
                  <FigmaIcon className="w-4 h-4 flex-shrink-0" />
                  <span>Figma (UI Design &amp; Prototype)</span>
                </li>
                <li>Wireframing &amp; User Flow</li>
                <li>Responsive Web Layout</li>
                <li>Design System &amp; Component</li>
              </ul>
            </div>

            {/* Frontend Web */}
            <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 space-y-4 shadow-sm">
              <div className="flex items-center gap-2.5 text-zinc-900 dark:text-zinc-200 font-semibold text-sm">
                <Code className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                <span>Frontend Web</span>
              </div>
              <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400">
                <li className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200">
                  <HtmlIcon className="w-4 h-4 flex-shrink-0" />
                  <span>HTML / HTML5</span>
                </li>
                <li className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200">
                  <CssIcon className="w-4 h-4 flex-shrink-0" />
                  <span>CSS / CSS3</span>
                </li>
                <li className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200">
                  <JavaScriptIcon className="w-4 h-4 flex-shrink-0" />
                  <span>JavaScript (ES6+)</span>
                </li>
                <li className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200">
                  <ReactIcon className="w-4 h-4 flex-shrink-0" />
                  <span>React</span>
                </li>
                <li className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200">
                  <TailwindIcon className="w-4 h-4 flex-shrink-0" />
                  <span>Tailwind CSS</span>
                </li>
                <li className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200">
                  <TypeScriptIcon className="w-4 h-4 flex-shrink-0" />
                  <span>TypeScript</span>
                </li>
              </ul>
            </div>

            {/* Backend & DB */}
            <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 space-y-4 shadow-sm">
              <div className="flex items-center gap-2.5 text-zinc-900 dark:text-zinc-200 font-semibold text-sm">
                <Database className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Backend &amp; DB</span>
              </div>
              <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400">
                <li className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200">
                  <PythonIcon className="w-4 h-4 flex-shrink-0" />
                  <span>Python</span>
                </li>
                <li className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200">
                  <PhpIcon className="w-4 h-4 flex-shrink-0" />
                  <span>PHP</span>
                </li>
                <li className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200">
                  <LaravelIcon className="w-4 h-4 flex-shrink-0" />
                  <span>Laravel</span>
                </li>
                <li className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200">
                  <MysqlIcon className="w-4 h-4 flex-shrink-0" />
                  <span>MySQL Database</span>
                </li>
                <li>RESTful API &amp; Data Integration</li>
              </ul>
            </div>

            {/* Workflow & Tools */}
            <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 space-y-4 shadow-sm">
              <div className="flex items-center gap-2.5 text-zinc-900 dark:text-zinc-200 font-semibold text-sm">
                <Terminal className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>Tools &amp; Workflow</span>
              </div>
              <ul className="space-y-2.5 text-xs text-zinc-600 dark:text-zinc-400">
                <li className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200">
                  <GithubIcon className="w-4 h-4 flex-shrink-0" />
                  <span>Git &amp; GitHub</span>
                </li>
                <li className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200">
                  <ViteIcon className="w-4 h-4 flex-shrink-0" />
                  <span>Vite Build Tool</span>
                </li>
                <li>VS Code Editor</li>
                <li>Project Management &amp; Scrum Basics</li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
