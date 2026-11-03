import { useState, useEffect, useRef, useCallback } from 'react'

export function useScrollReveal(threshold = 0.02) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(() => {
    // Pada layar HP / mobile, aktifkan langsung sejak render pertama agar tidak kosong
    if (typeof window !== 'undefined') {
      return (
        window.innerWidth <= 768 ||
        !('IntersectionObserver' in window) ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      )
    }
    return false
  })

  useEffect(() => {
    if (isVisible) return

    const el = ref.current
    if (!el) return

    if (!('IntersectionObserver' in window)) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.02, rootMargin: '50px 0px 0px 0px' }
    )

    observer.observe(el)

    // Failsafe timer: pastikan konten selalu tampil maksimal setelah 500ms
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    return () => {
      observer.disconnect()
      clearTimeout(timer)
    }
  }, [isVisible, threshold])

  return { ref, isVisible }
}

export function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState('')

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        }
      },
      { threshold: 0.1, rootMargin: '-80px 0px -40% 0px' }
    )

    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [sectionIds])

  return active
}

export function useTypingEffect(texts: string[], speed = 80, pause = 2000) {
  const [displayText, setDisplayText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[textIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentText.substring(0, charIndex + 1))
          setCharIndex((prev) => prev + 1)

          if (charIndex + 1 === currentText.length) {
            setTimeout(() => setIsDeleting(true), pause)
          }
        } else {
          setDisplayText(currentText.substring(0, charIndex - 1))
          setCharIndex((prev) => prev - 1)

          if (charIndex === 0) {
            setIsDeleting(false)
            setTextIndex((prev) => (prev + 1) % texts.length)
          }
        }
      },
      isDeleting ? speed / 2 : speed
    )

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, textIndex, texts, speed, pause])

  return displayText
}

export function useSmoothScroll() {
  const scrollTo = useCallback((id: string) => {
    if (id === 'root' || id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const el = document.getElementById(id)
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }, [])

  return scrollTo
}

