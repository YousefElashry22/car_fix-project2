import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CinematicImage from '../CinematicImage'
import { useReducedMotion } from '../../../hooks/useReducedMotion'
import { DURATION, EASE_PREMIUM } from '../../../utils/motion'

export default function StickyServiceShowcase({ items, eyebrow = 'PRECISION SERVICE' }) {
  const containerRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const reduced = useReducedMotion()

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile || reduced) return undefined

    let rafId = null

    const handleScroll = () => {
      if (rafId !== null) return

      rafId = window.requestAnimationFrame(() => {
        if (!containerRef.current) return

        const rect = containerRef.current.getBoundingClientRect()
        const scrollable = rect.height - window.innerHeight
        if (scrollable <= 0) return

        const raw = Math.max(0, Math.min(1, -rect.top / scrollable))
        setActiveIndex(Math.min(items.length - 1, Math.floor(raw * items.length)))

        rafId = null
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId !== null) window.cancelAnimationFrame(rafId)
    }
  }, [items.length, isMobile, reduced])

  if (isMobile || reduced) {
    return (
      <section className="py-14 bg-[#0A0C0F]">
        <div className="site-container space-y-12">
          <div>
            <span className="cinematic-label">{eyebrow}</span>
            <h2 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-[#F4F4F4]">
              Core Systems
            </h2>
          </div>

          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, ease: EASE_PREMIUM, delay: i * 0.05 }}
              className="space-y-5"
            >
              <CinematicImage
                src={item.image}
                alt={item.title}
                objectPosition={item.objectPosition || 'center center'}
                className="h-[300px] sm:h-[360px]"
                parallax={false}
                reveal="scale"
              />
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#C9A86A]">
                  {item.number}
                </span>
                <h3 className="mt-1 text-xl font-bold text-[#F4F4F4] tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[#8B919B] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section
      ref={containerRef}
      className="relative bg-[#0A0C0F]"
      style={{ height: `${items.length * 50 + 25}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="site-container w-full">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
            <div className="relative h-[min(68vh,580px)]">
              <AnimatePresence mode="sync">
                {items.map((item, index) =>
                  index === activeIndex ? (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, scale: 1.04, filter: 'blur(10px)' }}
                      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, scale: 1.04, filter: 'blur(8px)' }}
                      transition={{ duration: DURATION.sticky, ease: EASE_PREMIUM }}
                      className="absolute inset-0"
                    >
                      <CinematicImage
                        src={item.image}
                        alt={item.title}
                        objectPosition={item.objectPosition || 'center center'}
                        className="h-full"
                        parallax={false}
                        reveal="fade"
                      />
                    </motion.div>
                  ) : null
                )}
              </AnimatePresence>
            </div>

            <div className="space-y-8">
              <div>
                <span className="cinematic-label">{eyebrow}</span>
                <h2 className="mt-3 text-[clamp(1.75rem,3vw,2.25rem)] font-bold tracking-[-0.03em] text-[#F4F4F4]">
                  Core Systems
                </h2>
              </div>

              <div className="space-y-5">
                {items.map((item, index) => {
                  const isActive = index === activeIndex
                  return (
                    <motion.div
                      key={item.id}
                      animate={{
                        opacity: isActive ? 1 : 0.35,
                        y: isActive ? 0 : 6,
                        x: isActive ? 0 : -4,
                      }}
                      transition={{ duration: 0.45, ease: EASE_PREMIUM }}
                      className="border-l-2 pl-5"
                      style={{
                        borderColor: isActive ? '#C9A86A' : 'rgba(255,255,255,0.08)',
                      }}
                    >
                      <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#8B919B]">
                        {item.number}
                      </span>
                      <h3
                        className={`mt-1 text-xl lg:text-2xl font-bold tracking-[-0.02em] transition-colors ${
                          isActive ? 'text-[#F4F4F4]' : 'text-[#8B919B]'
                        }`}
                      >
                        {item.title}
                      </h3>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, ease: EASE_PREMIUM }}
                          className="mt-2 text-sm lg:text-base text-[#8B919B] leading-relaxed max-w-md"
                        >
                          {item.description}
                        </motion.p>
                      )}
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 site-container">
          <div className="h-px bg-white/10">
            <motion.div
              className="h-full bg-[#C9A86A]"
              style={{ width: `${((activeIndex + 1) / items.length) * 100}%` }}
              transition={{ duration: 0.35, ease: EASE_PREMIUM }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
