import React from 'react'

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string
}

// Brand SVG Icons with high visual fidelity

export function GithubIcon({ className = 'w-5 h-5', ...props }: IconProps) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
    </svg>
  )
}

export function LinkedinIcon({ className = 'w-5 h-5', ...props }: IconProps) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  )
}

export function InstagramIcon({ className = 'w-5 h-5', ...props }: IconProps) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

export function ReactIcon({ className = 'w-5 h-5', ...props }: IconProps) {
  return (
    <svg role="img" viewBox="-11.5 -10.23174 23 20.46348" fill="#00d8ff" className={className} {...props}>
      <circle cx="0" cy="0" r="2.05" />
      <g stroke="#00d8ff" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  )
}

export function TypeScriptIcon({ className = 'w-5 h-5', ...props }: IconProps) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="#3178C6" className={className} {...props}>
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path d="M11.75 14.5c-.3.4-.7.7-1.2.9-.5.2-1.1.3-1.8.3-.8 0-1.5-.2-2-.5-.5-.4-.9-.9-1.1-1.6-.2-.7-.2-1.5-.2-2.5 0-1.2.2-2.1.6-2.8.4-.7 1-1.2 1.7-1.5.7-.3 1.5-.5 2.4-.5.7 0 1.3.1 1.8.3.5.2.9.5 1.2.9l-1.3 1.3c-.4-.5-.9-.8-1.6-.8-.6 0-1.1.2-1.5.6-.4.4-.6 1-.6 1.8 0 .8.2 1.4.6 1.8.4.4.9.6 1.5.6.7 0 1.2-.3 1.6-.8l1.4 1.3zm3.7-6.8h4.6v1.7h-1.4v6.8h-1.9v-6.8h-1.3V7.7z" fill="#ffffff" />
    </svg>
  )
}

export function JavaScriptIcon({ className = 'w-5 h-5', ...props }: IconProps) {
  return (
    <svg role="img" viewBox="0 0 24 24" className={className} {...props}>
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path d="M6.5 18.5l1.8-1.1c.3.6.7 1 1.3 1 .6 0 1-.3 1-1.1v-6.6h2.2v6.6c0 1-.3 1.8-1 2.3-.7.5-1.5.8-2.5.8-1.4 0-2.4-.6-2.8-1.9zm8.2-1.1c.4.7 1 1.2 1.9 1.2.8 0 1.3-.4 1.3-1 0-.6-.4-.9-1.3-1.3l-.6-.3c-1.3-.6-2.1-1.3-2.1-2.6 0-1.3 1-2.3 2.6-2.3 1.2 0 2 .4 2.6 1.4l-1.6 1c-.3-.5-.7-.8-1.2-.8-.5 0-.8.3-.8.7 0 .5.3.7 1 .1l.6.3c1.6.7 2.4 1.4 2.4 2.8 0 1.5-1.2 2.5-3 2.5-1.6 0-2.7-.7-3.2-1.8l1.4-1.1z" fill="#000000" />
    </svg>
  )
}

export function HtmlIcon({ className = 'w-5 h-5', ...props }: IconProps) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="#E34F26" className={className} {...props}>
      <path d="M1.5 0h21l-1.91 21.463L11.97 24l-8.55-2.537L1.5 0zm17.09 4.47H5.41l.36 4.07h11.14l-.4 4.54-4.54 1.23-4.54-1.23-.27-3.08H3.1l.53 5.97 8.34 2.31 8.34-2.31 1.28-14.5z" />
    </svg>
  )
}

export function CssIcon({ className = 'w-5 h-5', ...props }: IconProps) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="#1572B6" className={className} {...props}>
      <path d="M1.5 0h21l-1.91 21.463L11.97 24l-8.55-2.537L1.5 0zm17.09 4.47H5.41l.36 4.07h11.14l-.4 4.54-4.54 1.23-4.54-1.23-.27-3.08H3.1l.53 5.97 8.34 2.31 8.34-2.31 1.28-14.5z" />
    </svg>
  )
}

export function TailwindIcon({ className = 'w-5 h-5', ...props }: IconProps) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="#38BDF8" className={className} {...props}>
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
    </svg>
  )
}

export function FigmaIcon({ className = 'w-5 h-5', ...props }: IconProps) {
  return (
    <svg role="img" viewBox="0 0 38 57" className={className} {...props}>
      <path d="M19 28.5A9.5 9.5 0 1 1 28.5 19 9.5 9.5 0 0 1 19 28.5Z" fill="#1ABCFE" />
      <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0Z" fill="#0ACF83" />
      <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19Z" fill="#FF7262" />
      <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5Z" fill="#F24E1E" />
      <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5Z" fill="#A259FF" />
    </svg>
  )
}

export function PythonIcon({ className = 'w-5 h-5', ...props }: IconProps) {
  return (
    <svg role="img" viewBox="0 0 24 24" className={className} {...props}>
      <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.75h5.82v.825H3.852S0 5.787 0 11.914c0 6.126 3.36 5.92 3.36 5.92h2.004v-2.825s-.108-3.36 3.308-3.36h5.688s3.197.054 3.197-3.142V3.197S18.067 0 11.914 0zm-1.72 1.69a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1z" fill="#3776AB" />
      <path d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.006-2.75h-5.82v-.825h8.174S24 18.213 24 12.086c0-6.126-3.36-5.92-3.36-5.92h-2.004v2.825s.108 3.36-3.308 3.36H9.64s-3.197-.054-3.197 3.142v5.322S5.933 24 12.086 24zm1.72-1.69a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0 2.1z" fill="#FFD43B" />
    </svg>
  )
}

export function LaravelIcon({ className = 'w-5 h-5', ...props }: IconProps) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="#FF2D20" className={className} {...props}>
      <path d="M8.5 2.5L2 6.3v11.4l6.5 3.8 6.5-3.8V6.3L8.5 2.5zm0 2.3l4.6 2.7-4.6 2.7-4.6-2.7 4.6-2.7zm-5.1 4.2l4.6 2.7v5.4l-4.6-2.7V9zm5.6 8.1v-5.4l4.6-2.7v5.4l-4.6 2.7zm6.5-4.3l6.5-3.8V2.5L15 6.3v2.9l-1.5.9v2.3l1.5-.9v3.4zm1.5-7.7l3.6-2.1 3.6 2.1-3.6 2.1-3.6-2.1zm5.1 3.2v3.6l-3.6 2.1V9.9l3.6-2.1z" />
    </svg>
  )
}

export function PhpIcon({ className = 'w-5 h-5', ...props }: IconProps) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="#777BB4" className={className} {...props}>
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-4.7 15.5l.6-2.8H9.3c1.3 0 2.2-.3 2.7-.9.5-.6.7-1.4.5-2.4-.2-1-.7-1.7-1.5-2.1-.8-.4-1.9-.6-3.2-.6H4.2l-2.4 8.8h2.5zm8.9 0l.6-2.8h1.4c1.3 0 2.2-.3 2.7-.9.5-.6.7-1.4.5-2.4-.2-1-.7-1.7-1.5-2.1-.8-.4-1.9-.6-3.2-.6h-3.6l-2.4 8.8h2.5zm-5.2-4.4h-1l.7-3.1h1.2c.6 0 1.1.1 1.4.4.3.3.4.7.5 1.3.1.5 0 .9-.3 1.1-.3.2-.8.3-1.5.3zm8.9 0h-1l.7-3.1h1.2c.6 0 1.1.1 1.4.4.3.3.4.7.5 1.3.1.5 0 .9-.3 1.1-.3.2-.8.3-1.5.3z" />
    </svg>
  )
}

export function MysqlIcon({ className = 'w-5 h-5', ...props }: IconProps) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="#4479A1" className={className} {...props}>
      <path d="M12.012 3c-4.97 0-9 4.03-9 9 0 4.09 2.74 7.53 6.5 8.62.45.08.62-.2.62-.43v-1.54c-2.51.55-3.04-1.21-3.04-1.21-.41-1.04-1-1.32-1-1.32-.82-.56.06-.55.06-.55.91.06 1.39.93 1.39.93.81 1.38 2.11.98 2.63.75.08-.58.31-.98.57-1.2-2-.23-4.1-.1-4.1-4.45 0-1.24.44-2.25 1.17-3.05-.12-.29-.51-1.44.11-3.01 0 0 .95-.31 3.12 1.16a10.84 10.84 0 0 1 5.68 0c2.17-1.47 3.12-1.16 3.12-1.16.62 1.57.23 2.72.11 3.01.73.8 1.17 1.81 1.17 3.05 0 4.36-2.1 4.22-4.11 4.45.32.28.61.83.61 1.67v2.48c0 .24.16.52.62.43 3.75-1.1 6.5-4.54 6.5-8.62 0-4.97-4.03-9-9-9z" />
    </svg>
  )
}

export function ViteIcon({ className = 'w-5 h-5', ...props }: IconProps) {
  return (
    <svg role="img" viewBox="0 0 24 24" className={className} {...props}>
      <path d="M21.72 3.17c-.3-.21-.71-.2-.99.04L13.1 9.9 8.27 1.62A1 1 0 0 0 7.42 1a1 1 0 0 0-.85.49L.22 13.62a1 1 0 0 0 .3 1.34l9.53 6.16c.38.25.87.25 1.25 0l11.45-7.4a1 1 0 0 0 .42-1.08l-1.45-9.47zm-1.84 9.1L11.5 17.7 3.63 12.6l4.9-8.48 3.5 5.98a1 1 0 0 0 1.48.27l6.37-4.9 1.05 6.8z" fill="#BD34FE" />
      <path d="M14.28 9.53l-2.02 5.05 3.03-2.02-1.01-3.03z" fill="#FFD622" />
    </svg>
  )
}

export function ServerApiIcon({ className = 'w-5 h-5', ...props }: IconProps) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  )
}
