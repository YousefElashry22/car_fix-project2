import { useEffect, useRef, useState } from 'react'

export function useScrollSection(stepCount, heightMultiplier = 0.8) {
  const containerRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let rafId = null

    const handleScroll = () => {
      if (rafId !== null) return

      rafId = window.requestAnimationFrame(() => {
        if (!containerRef.current) return

        const rect = containerRef.current.getBoundingClientRect()
        const totalHeight = rect.height - window.innerHeight
        if (totalHeight <= 0) return

        const rawProgress = Math.max(0, Math.min(1, -rect.top / totalHeight))
        setProgress(rawProgress)

        const index = Math.min(
          stepCount - 1,
          Math.floor(rawProgress * stepCount * (1 / heightMultiplier) * heightMultiplier)
        )
        const clampedIndex = Math.min(stepCount - 1, Math.floor(rawProgress * stepCount))
        setActiveIndex(clampedIndex)

        rafId = null
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId !== null) window.cancelAnimationFrame(rafId)
    }
  }, [stepCount, heightMultiplier])

  return { containerRef, activeIndex, progress }
}
