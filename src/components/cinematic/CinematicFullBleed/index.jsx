import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useReducedMotion } from '../../../hooks/useReducedMotion'
import { DURATION, EASE_PREMIUM } from '../../../utils/motion'

const textStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const textItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.text, ease: EASE_PREMIUM },
  },
}

export default function CinematicFullBleed({
  label,
  title,
  description,
  imageSrc,
  imageAlt,
  objectPosition = 'center center',
  ctaText,
  ctaTo = '/contact',
  sectionIndex,
  showScrollIndicator = false,
  titleUppercase = false,
  bridgeFromHero = false,
}) {
  const sectionRef = useRef(null)
  const reduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, -40])
  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduced ? [1, 1, 1] : [1.08, 1, 0.96]
  )
  const imageOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.85, 1, 1, 0.9])

  const titleLines = typeof title === 'string' ? title.split('\n') : [title]

  return (
    <section
      ref={sectionRef}
      className={`relative w-full min-h-[75vh] lg:min-h-[85vh] max-h-[900px] overflow-hidden bg-[#090B0D] ${bridgeFromHero ? '-mt-20 lg:-mt-28' : ''}`}
    >
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={
          reduced
            ? undefined
            : { y: imageY, scale: imageScale, opacity: imageOpacity }
        }
      >
        <motion.img
          src={imageSrc}
          alt={imageAlt}
          loading="lazy"
          className="absolute inset-0 w-full h-[115%] -top-[7.5%] object-cover brightness-[0.97] contrast-[1.02]"
          style={{ objectPosition }}
          initial={reduced ? { opacity: 0 } : { opacity: 0.75, scale: 1.08, clipPath: 'inset(0 8% 0 8%)' }}
          whileInView={
            reduced
              ? { opacity: 1 }
              : { opacity: 1, scale: 1, clipPath: 'inset(0 0% 0 0%)' }
          }
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: DURATION.cinematic, ease: EASE_PREMIUM }}
        />
      </motion.div>

      {bridgeFromHero && (
        <div className="absolute top-0 inset-x-0 h-28 lg:h-36 bg-gradient-to-b from-[#0A0C0F] via-[#0A0C0F]/80 to-transparent z-[1] pointer-events-none" />
      )}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/[0.05] to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-transparent" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.35) 100%)',
          }}
        />
      </div>

      {sectionIndex && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: EASE_PREMIUM }}
          className="absolute top-8 right-5 sm:right-8 lg:top-12 lg:right-12 z-10 text-right hidden sm:block"
        >
          <p className="text-[11px] font-bold tracking-[0.15em] text-[#F5F5F5] uppercase">
            {sectionIndex.current}
            {sectionIndex.total && (
              <span className="text-[#8A919B]"> / {sectionIndex.total}</span>
            )}
          </p>
          {sectionIndex.label && (
            <p className="mt-1 text-[11px] font-bold tracking-[0.12em] text-[#8A919B] uppercase">
              {sectionIndex.label}
            </p>
          )}
        </motion.div>
      )}

      <div className="absolute inset-x-0 bottom-0 z-10 pb-12 sm:pb-16 lg:pb-20">
        <div className="site-container">
          <motion.div
            variants={textStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="max-w-[700px]"
          >
            {label && (
              <motion.span
                variants={textItem}
                className="block text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.18em] text-[#C9A86A] mb-4 lg:mb-5"
              >
                {label}
              </motion.span>
            )}

            <motion.h2
              variants={textItem}
              className={`text-[clamp(2.625rem,6.5vw,5.5rem)] font-extrabold leading-[0.95] tracking-[-0.03em] text-[#F5F5F5] mb-4 lg:mb-5 ${titleUppercase ? 'uppercase' : ''}`}
            >
              {titleLines.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </motion.h2>

            {description && (
              <motion.p
                variants={textItem}
                className="text-[15px] sm:text-base lg:text-[17px] leading-[1.5] text-white/[0.68] max-w-[550px] mb-6 lg:mb-8"
              >
                {description}
              </motion.p>
            )}

            {ctaText && (
              <motion.div variants={textItem}>
                <Link
                  to={ctaTo}
                  className="inline-flex items-center gap-2 px-5 py-3 text-[13px] font-bold uppercase tracking-[0.1em] text-[#F5F5F5] border border-white/25 rounded-lg backdrop-blur-[2px] bg-white/[0.04] transition-all duration-300 hover:border-[#C9A86A] hover:text-[#C9A86A] hover:-translate-y-0.5"
                >
                  {ctaText}
                  <span aria-hidden="true">→</span>
                </Link>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {showScrollIndicator && !reduced && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-12 right-5 sm:right-8 lg:bottom-20 lg:right-12 z-10 hidden md:flex flex-col items-center gap-3"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/40">
            Scroll
          </span>
          <div className="relative h-[45px] w-px bg-white/20 overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full h-3 bg-white/60"
              animate={{ y: [0, 32, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      )}
    </section>
  )
}
