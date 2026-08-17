import { motion } from 'framer-motion'

export default function CinematicServiceIntro() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative min-h-[480px] flex items-center justify-center py-20 bg-[#0A0C0F] overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#C9A86A]/8 via-transparent to-transparent" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="relative z-10 max-w-3xl mx-auto px-6 text-center"
      >
        <motion.span
          variants={itemVariants}
          className="inline-block text-xs font-bold uppercase tracking-widest text-[#C9A86A] mb-6"
        >
          Precision. Care. Performance.
        </motion.span>

        <motion.h1
          variants={itemVariants}
          className="text-[clamp(2.5rem,6vw,4rem)] font-bold leading-[1.1] tracking-[-0.03em] text-white mb-6"
        >
          Premium Automotive Services
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg text-[#8B919B] leading-relaxed mb-12 max-w-2xl mx-auto"
        >
          Every service designed with precision engineering and meticulous attention to detail.
        </motion.p>

        {/* Visual divider */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-4">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#C9A86A]" />
          <span className="text-xs text-[#8B919B] uppercase tracking-widest">04 Core Services</span>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#C9A86A]" />
        </motion.div>
      </motion.div>
    </section>
  )
}
