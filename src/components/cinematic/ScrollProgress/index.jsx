import { useEffect, useState } from 'react'
import { useReducedMotion } from '../../../hooks/useReducedMotion'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) return undefined

    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [reduced])

  if (reduced) return null

  return (
    <div
      className="fixed top-0 right-0 z-30 w-px h-screen pointer-events-none hidden lg:block"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-white/[0.06]" />
      <div
        className="absolute top-0 left-0 w-full bg-[#C9A86A]/70 transition-[height] duration-150 ease-out"
        style={{ height: `${progress * 100}%` }}
      />
    </div>
  )
}
