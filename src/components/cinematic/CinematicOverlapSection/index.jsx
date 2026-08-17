import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import CinematicImage from '../CinematicImage'
import { StaggerReveal, fadeUpVariant } from '../ScrollReveal'
import { useReducedMotion } from '../../../hooks/useReducedMotion'

export default function CinematicOverlapSection({
  number,
  label,
  title,
  description,
  primaryImage,
  secondaryImage,
  primaryAlt,
  secondaryAlt,
  primaryPosition = 'center center',
  secondaryPosition = 'center center',
}) {
  const sectionRef = useRef(null)
  const reduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const secondaryY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [20, -20])
  const secondaryX = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [-10, 10])

  return (
    <section ref={sectionRef} className="py-14 lg:py-24 bg-[#0A0C0F]">
      <div className="site-container">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">
          <div className="relative min-h-[380px] lg:min-h-[520px]">
            <CinematicImage
              src={primaryImage}
              alt={primaryAlt}
              objectPosition={primaryPosition}
              reveal="clip"
              parallax
              parallaxAmount={24}
              className="w-full lg:w-[75%] h-[300px] sm:h-[380px] lg:h-[480px] shadow-[0_24px_70px_rgba(0,0,0,0.45)]"
            />
            <motion.div
              style={{ y: secondaryY, x: secondaryX }}
              className="absolute top-[20%] right-0 lg:right-[5%] w-[38%] sm:w-[34%] z-10"
            >
              <CinematicImage
                src={secondaryImage}
                alt={secondaryAlt}
                objectPosition={secondaryPosition}
                reveal="scale"
                parallax={false}
                className="h-[160px] sm:h-[200px] lg:h-[240px] shadow-[0_16px_48px_rgba(0,0,0,0.5)] border border-white/[0.06]"
              />
            </motion.div>
          </div>

          <StaggerReveal>
            <motion.span variants={fadeUpVariant} className="cinematic-label block mb-4">
              {number} / {label}
            </motion.span>
            <motion.h2
              variants={fadeUpVariant}
              className="text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[#F4F4F4] mb-4 uppercase"
            >
              {title}
            </motion.h2>
            <motion.p
              variants={fadeUpVariant}
              className="text-base lg:text-[17px] text-[#8B919B] leading-relaxed max-w-md"
            >
              {description}
            </motion.p>
          </StaggerReveal>
        </div>
      </div>
    </section>
  )
}
