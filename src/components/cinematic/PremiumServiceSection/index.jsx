import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useReducedMotion } from '../../../hooks/useReducedMotion'
import { EASE_PREMIUM } from '../../../utils/motion'

const textStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

const makeTextItem = (delay = 0, fromRight = true) => ({
  hidden: { opacity: 0, x: fromRight ? 50 : -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.85, ease: EASE_PREMIUM, delay },
  },
})

export default function PremiumServiceSection({
  id,
  number,
  label,
  title,
  description,
  imageSrc,
  imageAlt,
  objectPosition = 'center center',
  layout = 'image-left',
  clipReveal = false,
  features = [],
  ctaTo = '/contact',
}) {
  const sectionRef = useRef(null)
  const reduced = useReducedMotion()
  const isImageLeft = layout === 'image-left'
  const titleLines = typeof title === 'string' ? title.split('\n') : [title]
  const contentFromRight = isImageLeft

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [-30, 30])

  const imageRadius = isImageLeft
    ? 'rounded-none lg:rounded-r-[24px]'
    : 'rounded-none lg:rounded-l-[24px]'

  return (
    <section
      id={id}
      ref={sectionRef}
      className="relative py-8 lg:py-0 bg-[#080A0C] scroll-mt-[calc(var(--navbar-height)+72px)]"
    >
      <div
        className={`flex flex-col ${
          isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
        } min-h-0 lg:min-h-[75vh] lg:max-h-[900px]`}
      >
        {/* Large image panel — 50% viewport */}
        <motion.div
          className={`relative w-full lg:w-1/2 h-[58vh] sm:h-[62vh] lg:h-[75vh] lg:min-h-[600px] overflow-hidden ${imageRadius}`}
          initial={
            reduced
              ? { opacity: 0 }
              : {
                  opacity: 0,
                  scale: 1.08,
                  x: isImageLeft ? -50 : 50,
                  clipPath: clipReveal ? 'inset(0 100% 0 0)' : 'inset(0 0 0 0)',
                }
          }
          whileInView={
            reduced
              ? { opacity: 1 }
              : {
                  opacity: 1,
                  scale: 1,
                  x: 0,
                  clipPath: 'inset(0 0% 0 0)',
                }
          }
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: clipReveal ? 1 : 1.05, ease: EASE_PREMIUM }}
        >
          <motion.div
            className="absolute inset-0 will-change-transform"
            style={reduced ? undefined : { y: imageY }}
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              loading="lazy"
              className="w-full h-full object-cover brightness-[0.97] contrast-[1.03]"
              style={{ objectPosition }}
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#080A0C]/50 via-transparent to-transparent pointer-events-none lg:hidden" />
        </motion.div>

        {/* Content panel — 50% */}
        <div className="w-full lg:w-1/2 flex items-center">
          <motion.div
            variants={textStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="w-full px-5 sm:px-8 md:px-12 lg:px-14 xl:px-20 py-10 lg:py-16"
          >
            <motion.span
              variants={makeTextItem(0, contentFromRight)}
              className="block text-[13px] font-bold uppercase tracking-[0.15em] text-[#C9A86A] mb-5"
            >
              {number} / {label}
            </motion.span>

            <motion.h2
              variants={makeTextItem(0.1, contentFromRight)}
              className="text-[clamp(2.625rem,5vw,5.125rem)] font-extrabold leading-[0.98] tracking-[-0.04em] text-[#F4F4F4] mb-6 uppercase"
            >
              {titleLines.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </motion.h2>

            <motion.p
              variants={makeTextItem(0.2, contentFromRight)}
              className="text-[17px] lg:text-[18px] leading-[1.6] text-[#8B919B] mb-8 max-w-lg"
            >
              {description}
            </motion.p>

            {features.length > 0 && (
              <motion.ul variants={makeTextItem(0.3, contentFromRight)} className="space-y-5 mb-10">
                {features.map((feature) => (
                  <li key={feature.title} className="border-l border-[#C9A86A]/30 pl-4">
                    <p className="text-[15px] font-semibold text-[#F4F4F4] mb-0.5">
                      {feature.title}
                    </p>
                    <p className="text-sm text-[#8B919B]">{feature.desc}</p>
                  </li>
                ))}
              </motion.ul>
            )}

            <motion.div variants={makeTextItem(0.45, contentFromRight)}>
              <Link
                to={ctaTo}
                className="group inline-flex items-center gap-2 px-6 py-3.5 text-[13px] font-bold uppercase tracking-[0.1em] text-[#C9A86A] border border-[#C9A86A]/60 rounded-[10px] transition-all duration-250 hover:bg-[#C9A86A] hover:text-[#080A0C] hover:-translate-y-0.5"
              >
                Book This Service
                <span className="inline-block transition-transform duration-250 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Dark transition spacer between scenes */}
      <div className="hidden lg:block h-16 bg-gradient-to-b from-[#080A0C] to-[#0C0F12]" aria-hidden="true" />
    </section>
  )
}
