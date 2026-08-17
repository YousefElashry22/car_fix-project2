import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useReducedMotion } from '../../../hooks/useReducedMotion'
import { DURATION, EASE_PREMIUM } from '../../../utils/motion'

const textStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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

const positionStyles = {
  'bottom-left': {
    container: 'items-end justify-start pb-12 sm:pb-16 lg:pb-20',
    content: 'text-left max-w-[560px]',
    gradient: 'bg-gradient-to-t from-black/80 via-black/30 to-transparent',
    sideGradient: 'bg-gradient-to-r from-black/50 via-transparent to-transparent',
  },
  'bottom-right': {
    container: 'items-end justify-end pb-12 sm:pb-16 lg:pb-20',
    content: 'text-left lg:text-right max-w-[560px] ml-auto',
    gradient: 'bg-gradient-to-t from-black/80 via-black/30 to-transparent',
    sideGradient: 'bg-gradient-to-l from-black/50 via-transparent to-transparent',
  },
  'center-left': {
    container: 'items-center justify-start',
    content: 'text-left max-w-[520px]',
    gradient: 'bg-gradient-to-r from-black/70 via-black/20 to-transparent',
    sideGradient: '',
  },
  'center-right': {
    container: 'items-center justify-end',
    content: 'text-left lg:text-right max-w-[520px] ml-auto',
    gradient: 'bg-gradient-to-l from-black/70 via-black/20 to-transparent',
    sideGradient: '',
  },
}

export default function CinematicServiceScene({
  number,
  total = '04',
  label,
  title,
  description,
  imageSrc,
  imageAlt,
  objectPosition = 'center center',
  textPosition = 'bottom-left',
  clipReveal = false,
  ctaText = 'View Service',
  ctaTo = '/contact',
}) {
  const sectionRef = useRef(null)
  const reduced = useReducedMotion()
  const styles = positionStyles[textPosition] || positionStyles['bottom-left']
  const titleLines = typeof title === 'string' ? title.split('\n') : [title]

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [-30, 30])
  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduced ? [1, 1, 1] : [1.08, 1, 1.03]
  )
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.12, 0.88, 1], [0.7, 1, 1, 0.85])

  return (
    <motion.section
      ref={sectionRef}
      style={reduced ? undefined : { opacity: sectionOpacity }}
      className="relative w-full min-h-[60vh] md:min-h-[75vh] h-[70vh] md:h-[80vh] max-h-[850px] overflow-hidden bg-[#0A0C0F]"
    >
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={reduced ? undefined : { y: imageY, scale: imageScale }}
      >
        <motion.img
          src={imageSrc}
          alt={imageAlt}
          loading="lazy"
          className="absolute inset-0 w-full h-[115%] -top-[7.5%] object-cover brightness-[0.97] contrast-[1.02]"
          style={{ objectPosition }}
          initial={
            reduced
              ? { opacity: 0 }
              : clipReveal
                ? { opacity: 0.7, scale: 1.08, y: 30, clipPath: 'inset(0 100% 0 0)' }
                : { opacity: 0, scale: 1.08, y: 30 }
          }
          whileInView={
            reduced
              ? { opacity: 1 }
              : clipReveal
                ? { opacity: 1, scale: 1, y: 0, clipPath: 'inset(0 0% 0 0)' }
                : { opacity: 1, scale: 1, y: 0 }
          }
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: clipReveal ? 1 : 1.05, ease: EASE_PREMIUM }}
        />
      </motion.div>

      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute inset-0 ${styles.gradient}`} />
        {styles.sideGradient && (
          <div className={`absolute inset-0 ${styles.sideGradient}`} />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/[0.05] via-transparent to-black/20" />
      </div>

      <div
        className={`absolute inset-0 z-10 flex site-container ${styles.container}`}
      >
        <motion.div
          variants={textStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className={styles.content}
        >
          <motion.span
            variants={textItem}
            className="block text-[12px] font-bold uppercase tracking-[0.15em] text-[#C9A86A] mb-3"
          >
            {number} / {total} · {label}
          </motion.span>

          <motion.h2
            variants={textItem}
            className="text-[clamp(2.25rem,5.5vw,4rem)] font-extrabold leading-[0.95] tracking-[-0.03em] text-[#F4F4F4] mb-4 uppercase"
          >
            {titleLines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </motion.h2>

          <motion.p
            variants={textItem}
            className="text-[15px] sm:text-base lg:text-[17px] leading-[1.5] text-white/[0.68] mb-6"
          >
            {description}
          </motion.p>

          <motion.div variants={textItem}>
            <Link
              to={ctaTo}
              className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.1em] text-[#C9A86A] transition-all duration-300 hover:text-[#F4F4F4] hover:gap-3"
            >
              {ctaText}
              <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
