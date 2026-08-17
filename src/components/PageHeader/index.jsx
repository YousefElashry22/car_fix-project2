import { motion } from 'framer-motion'

export default function PageHeader({ badge, title, description, className = '' }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className="py-16 lg:py-24 bg-[#0A0C0F] border-b border-white/5">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={`max-w-3xl ${className}`}
        >
          {badge && (
            <motion.span
              variants={itemVariants}
              className="inline-block text-xs font-bold uppercase tracking-widest text-[#C9A86A] mb-4"
            >
              {badge}
            </motion.span>
          )}
          <motion.h1
            variants={itemVariants}
            className="block text-[clamp(2.5rem,6vw,4rem)] font-bold leading-[1.08] tracking-[-0.04em] text-white mb-6"
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              variants={itemVariants}
              className="block text-lg text-[#8B919B] leading-relaxed max-w-2xl"
            >
              {description}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
