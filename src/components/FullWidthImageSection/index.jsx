import { motion } from 'framer-motion'

export default function FullWidthImageSection({ imageSrc, imageAlt, title, subtitle }) {
  const imageVariants = {
    hidden: { opacity: 0, scale: 1.08 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: 'easeOut' },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.3 },
    },
  }

  return (
    <section className="relative py-20 lg:py-40 bg-[#0A0C0F] overflow-hidden">
      <motion.div
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="relative h-[300px] sm:h-[400px] lg:h-[520px] rounded-2xl overflow-hidden"
        style={{ marginInline: 'clamp(1.5rem, 5vw, 4rem)' }}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C0F]/60 via-[#0A0C0F]/20 to-transparent" />

        {/* Text Overlay */}
        {title && (
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center p-6"
          >
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.03em] text-white mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg text-[#C9A86A] font-medium max-w-xl">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}
