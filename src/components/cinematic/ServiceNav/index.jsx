import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { serviceNavItems } from '../../../data/cinematicContent'
import { EASE_PREMIUM } from '../../../utils/motion'

export default function ServiceNav() {
  const [activeId, setActiveId] = useState(serviceNavItems[0].targetId)

  useEffect(() => {
    const sections = serviceNavItems
      .map((item) => document.getElementById(item.targetId))
      .filter(Boolean)

    if (sections.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (targetId) => {
    const el = document.getElementById(targetId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav
      className="sticky top-[var(--navbar-height)] z-30 bg-[#080A0C]/90 backdrop-blur-md border-b border-white/[0.06]"
      aria-label="Service sections"
    >
      <div className="services-container">
        <div className="flex items-center justify-between gap-4 py-4 overflow-x-auto scrollbar-none">
          {serviceNavItems.map((item) => {
            const isActive = activeId === item.targetId
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollTo(item.targetId)}
                className="group flex-shrink-0 text-left transition-colors duration-300"
              >
                <span
                  className={`block text-[11px] font-bold tracking-[0.15em] transition-colors duration-300 ${
                    isActive ? 'text-[#C9A86A]' : 'text-[#8B919B]'
                  }`}
                >
                  {item.number}
                </span>
                <span
                  className={`relative mt-1 block text-xs sm:text-sm font-bold tracking-[0.12em] uppercase transition-colors duration-300 ${
                    isActive ? 'text-[#F4F4F4]' : 'text-[#8B919B] group-hover:text-[#F4F4F4]'
                  }`}
                >
                  {item.label}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-px bg-[#C9A86A]"
                    initial={false}
                    animate={{ width: isActive ? '100%' : '0%' }}
                    transition={{ duration: 0.3, ease: EASE_PREMIUM }}
                  />
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
