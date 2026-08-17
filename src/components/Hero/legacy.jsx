import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[100svh] w-full overflow-hidden bg-[#0B0D0F]">
      <motion.video
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: 'center 38%' }}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        preload="auto"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <source src={import.meta.env.BASE_URL + 'car-video.mp4'} type="video/mp4" />
      </motion.video>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        style={{
          background: 'linear-gradient(to right, rgba(11,13,15,0.85) 0%, rgba(11,13,15,0.40) 45%, rgba(11,13,15,0.15) 100%)',
        }}
      />
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        style={{
          background: 'linear-gradient(to top, rgba(11,13,15,0.80) 0%, transparent 40%)',
        }}
      />
      <div
        className="absolute bottom-0 inset-x-0 h-32 lg:h-40 pointer-events-none z-[2]"
        style={{
          background: 'linear-gradient(to bottom, transparent, #0A0C0F)',
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10 h-full flex items-center pb-12 pt-16 px-4 sm:px-6 lg:px-10 -translate-y-3">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: 0.2 }}
              className="text-label mb-5"
            >
              Premium Automotive Care
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
              className="h1-title mb-5"
            >
              Precision in every
              <br />
              <span className="text-[#C9A86A]">detail of your drive.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
              className="body-text mb-8 max-w-lg"
            >
              Advanced diagnostics, performance care, and premium detailing for vehicles that deserve exceptional attention.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <Link to="/contact" className="btn-primary">
                <span>Book Your Service</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="btn-secondary">
                View Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
