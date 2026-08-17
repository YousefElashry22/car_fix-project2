import { motion } from 'framer-motion'
import { StaggerReveal, fadeUpVariant } from '../ScrollReveal'

export default function ServicesClosing() {
  return (
    <section className="relative py-20 lg:py-24 bg-[#090B0D] border-t border-white/[0.06]">
      <div className="site-container">
        <StaggerReveal className="max-w-xl mx-auto text-center">
          <motion.h2
            variants={fadeUpVariant}
            className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.08] tracking-[-0.03em] text-[#F4F4F4] mb-4 uppercase whitespace-pre-line"
          >
            Ready for Better{'\n'}Car Care?
          </motion.h2>
          <motion.p
            variants={fadeUpVariant}
            className="text-base text-[#8B919B] leading-relaxed"
          >
            Schedule your service appointment with AUTOVEX today.
          </motion.p>
        </StaggerReveal>
      </div>
    </section>
  )
}
