import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import CinematicImage from '../CinematicImage'
import { StaggerReveal, fadeUpVariant } from '../ScrollReveal'
import { useReducedMotion } from '../../../hooks/useReducedMotion'

export default function CinematicSplitSection({
  number,
  label,
  title,
  description,
  imageSrc,
  imageAlt,
  layout = 'image-right',
  objectPosition = 'center center',
  details = [],
  ctaText = 'Book Service',
  ctaTo = '/contact',
  reveal = 'scale',
  enableImageHover = true,
}) {
  const sectionRef = useRef(null)
  const isImageLeft = layout === 'image-left'
  const reduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const imageX = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? [0, 0] : [isImageLeft ? -30 : 30, isImageLeft ? 30 : -30]
  )

  const sectionOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.88, 1, 1, 0.92])
  const sectionScale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.99, 1, 1, 0.99])

  return (
    <motion.section
      ref={sectionRef}
      style={reduced ? undefined : { opacity: sectionOpacity, scale: sectionScale }}
      className="py-14 lg:py-24 bg-[#0A0C0F] will-change-transform"
    >
      <div className="site-container">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center">
          <motion.div
            className={`${isImageLeft ? 'lg:order-1' : 'lg:order-2'}`}
            style={{ x: imageX }}
          >
            <CinematicImage
              src={imageSrc}
              alt={imageAlt}
              objectPosition={objectPosition}
              parallax={!reduced}
              parallaxAmount={20}
              reveal={reveal}
              enableHover={enableImageHover}
              hoverLabel="View Service →"
              className="h-[300px] sm:h-[380px] lg:h-[480px] xl:h-[520px] shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
            />
          </motion.div>

          <StaggerReveal className={`${isImageLeft ? 'lg:order-2' : 'lg:order-1'}`} stagger={0.1}>
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
              className="text-base lg:text-[17px] text-[#8B919B] leading-relaxed mb-5 max-w-md"
            >
              {description}
            </motion.p>

            {details.length > 0 && (
              <motion.ul variants={fadeUpVariant} className="space-y-2 mb-7">
                {details.map((detail) => (
                  <li key={detail} className="text-sm text-[#8B919B] flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-[#C9A86A] flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </motion.ul>
            )}

            <motion.div variants={fadeUpVariant}>
              <Link to={ctaTo} className="cinematic-link">
                {ctaText} <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
          </StaggerReveal>
        </div>
      </div>
    </motion.section>
  )
}
