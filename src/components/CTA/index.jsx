import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { StaggerReveal, fadeUpVariant } from '../cinematic/ScrollReveal'

export default function CTA({
  title = 'Ready to take better\ncare of your car?',
  description = 'Schedule your service appointment with AUTOVEX today.',
  buttonText = 'Book a Service →',
  buttonTo = '/contact',
}) {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-[#0A0C0F]">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-80"
        src="/1.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[#0A0C0F]/55" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,106,0.10),transparent_48%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0C0F]/15 to-[#0A0C0F] pointer-events-none" />

      <div className="relative site-container">
        <StaggerReveal className="max-w-2xl mx-auto text-center relative z-10">
          <motion.h2
            variants={fadeUpVariant}
            className="text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.03em] text-[#F4F4F4] mb-5 whitespace-pre-line"
          >
            {title}
          </motion.h2>

          <motion.p
            variants={fadeUpVariant}
            className="text-base lg:text-[17px] text-[#C8CDD4] leading-relaxed mb-8 max-w-md mx-auto"
          >
            {description}
          </motion.p>

          <motion.div variants={fadeUpVariant}>
            <Link
              to={buttonTo}
              className="inline-flex items-center justify-center gap-2 bg-[#C9A86A] text-[#0A0C0F] font-bold rounded-[11px] h-[54px] px-8 transition-all duration-250 hover:bg-[#D4B57A] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(201,168,106,0.2)]"
            >
              {buttonText}
            </Link>
          </motion.div>
        </StaggerReveal>
      </div>
    </section>
  )
}
