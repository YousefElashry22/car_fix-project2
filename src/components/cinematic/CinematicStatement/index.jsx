import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { StaggerReveal, fadeUpVariant } from '../ScrollReveal'
import { useReducedMotion } from '../../../hooks/useReducedMotion'
import { DURATION, EASE_PREMIUM } from '../../../utils/motion'

export default function CinematicStatement({
  title,
  description,
  imageSrc,
  imageAlt,
  objectPosition = 'center center',
  expandReveal = false,
}) {
  const sectionRef = useRef(null)
  const reduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [20, -20])
  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduced ? [1, 1, 1] : [1.06, 1, 1.03]
  )
  const widthScale = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65, 1],
    reduced ? [1, 1, 1, 1] : expandReveal ? [0.92, 1, 1, 0.96] : [1, 1, 1, 1]
  )

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-[#0A0C0F] py-2">
      <motion.div
        style={reduced ? undefined : { scale: widthScale }}
        className="relative h-[55vh] min-h-[360px] max-h-[640px] w-full overflow-hidden origin-center"
      >
        <motion.div
          className="absolute inset-0 will-change-transform"
          style={reduced ? undefined : { y: imageY, scale: imageScale }}
          initial={reduced ? { opacity: 0 } : { opacity: 0.7, clipPath: 'inset(0 12% 0 12%)' }}
          whileInView={
            reduced
              ? { opacity: 1 }
              : { opacity: 1, clipPath: 'inset(0 0% 0 0%)' }
          }
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: DURATION.cinematic, ease: EASE_PREMIUM }}
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            loading="lazy"
            className="absolute inset-0 w-full h-[115%] -top-[7.5%] object-cover brightness-[0.96] contrast-[1.03]"
            style={{ objectPosition }}
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C0F]/95 via-[#0A0C0F]/55 to-[#0A0C0F]/25 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0C0F]/40 via-transparent to-[#0A0C0F]/40 pointer-events-none" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <StaggerReveal className="max-w-3xl">
            <motion.h2
              variants={fadeUpVariant}
              className="text-[clamp(2rem,5vw,3.75rem)] font-bold leading-[1.02] tracking-[-0.03em] text-[#F4F4F4] mb-3 uppercase"
            >
              {title}
            </motion.h2>
            {description && (
              <motion.p
                variants={fadeUpVariant}
                className="text-base lg:text-[17px] text-[#8B919B] max-w-xl mx-auto"
              >
                {description}
              </motion.p>
            )}
          </StaggerReveal>
        </div>
      </motion.div>
    </section>
  )
}
