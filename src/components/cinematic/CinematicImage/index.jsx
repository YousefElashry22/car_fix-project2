import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useReducedMotion } from '../../../hooks/useReducedMotion'
import { DURATION, EASE_PREMIUM } from '../../../utils/motion'

export default function CinematicImage({
  src,
  alt,
  className = '',
  imageClassName = '',
  objectPosition = 'center center',
  parallax = false,
  parallaxAmount = 30,
  loading = 'lazy',
  rounded = true,
  overlay = true,
  grain = true,
  reveal = 'scale',
  hoverLabel,
  enableHover = false,
  children,
}) {
  const ref = useRef(null)
  const [hovered, setHovered] = useState(false)
  const reduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? [0, 0] : [parallaxAmount * 0.5, -parallaxAmount * 0.5]
  )
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduced ? [1, 1, 1] : [1.05, 1, 1.02]
  )

  const revealVariants = {
    scale: {
      hidden: { opacity: 0, scale: 1.08, y: 40 },
      visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: DURATION.image, ease: EASE_PREMIUM },
      },
    },
    clip: {
      hidden: { opacity: 0.7, clipPath: 'inset(0 100% 0 0)' },
      visible: {
        opacity: 1,
        clipPath: 'inset(0 0 0 0)',
        transition: { duration: DURATION.cinematic, ease: EASE_PREMIUM },
      },
    },
    fade: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: DURATION.text, ease: EASE_PREMIUM },
      },
    },
  }

  const variants = reduced
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3 } },
      }
    : revealVariants[reveal] || revealVariants.scale

  return (
    <motion.div
      ref={ref}
      className={`group relative overflow-hidden ${rounded ? 'rounded-[18px] lg:rounded-[22px]' : ''} ${className}`}
      onMouseEnter={() => enableHover && setHovered(true)}
      onMouseLeave={() => enableHover && setHovered(false)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={variants}
    >
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={parallax && !reduced ? { y, scale } : undefined}
        animate={enableHover && hovered && !reduced ? { scale: 1.03 } : { scale: 1 }}
        transition={{ duration: DURATION.hover, ease: EASE_PREMIUM }}
      >
        <img
          src={src}
          alt={alt}
          loading={loading}
          style={{ objectPosition }}
          className={`w-full h-full object-cover brightness-[0.97] contrast-[1.02] ${imageClassName}`}
        />
      </motion.div>

      {overlay && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-[#0A0C0F]/75 via-[#0A0C0F]/10 to-transparent pointer-events-none"
          animate={enableHover && hovered ? { opacity: 0.9 } : { opacity: 1 }}
          transition={{ duration: DURATION.hover }}
        />
      )}

      {grain && (
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
      )}

      {enableHover && hoverLabel && (
        <motion.span
          className="absolute bottom-4 left-4 text-[11px] font-bold uppercase tracking-[0.12em] text-[#C9A86A] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-hidden="true"
        >
          {hoverLabel}
        </motion.span>
      )}

      {children}
    </motion.div>
  )
}
