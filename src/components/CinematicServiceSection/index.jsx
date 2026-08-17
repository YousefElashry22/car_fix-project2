import { motion } from 'framer-motion'

export default function CinematicServiceSection({
  number,
  title,
  description,
  imageSrc,
  imageAlt,
  layout = 'image-right',
  label,
}) {
  const imageVariants = {
    hidden: { opacity: 0, scale: 1.08 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  }

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const isImageRight = layout === 'image-right'
  const isImageLeft = layout === 'image-left'

  return (
    <section className="py-20 lg:py-32 bg-[#0A0C0F] border-b border-white/5">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image - Conditional rendering */}
          {(isImageRight || isImageLeft) && (
            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className={`relative ${isImageLeft ? 'lg:order-1' : 'lg:order-2'}`}
            >
              <div className="rounded-2xl overflow-hidden aspect-square lg:aspect-auto lg:h-[500px] bg-[#111419]">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C0F]/40 via-transparent to-transparent" />
              </div>
            </motion.div>
          )}

          {/* Text Content */}
          <motion.div
            variants={staggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className={isImageLeft ? 'lg:order-2' : 'lg:order-1'}
          >
            <motion.div variants={textVariants} className="mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C9A86A]">
                {number} / {label}
              </span>
            </motion.div>

            <motion.h2
              variants={textVariants}
              className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.03em] text-white mb-6"
            >
              {title}
            </motion.h2>

            <motion.p
              variants={textVariants}
              className="text-lg text-[#8B919B] leading-relaxed mb-8 max-w-md"
            >
              {description}
            </motion.p>

            <motion.div variants={textVariants}>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#C9A86A] hover:text-[#F4F4F4] transition-colors group"
              >
                Learn More
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
