import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../../../hooks/useReducedMotion'
import { EASE_PREMIUM } from '../../../utils/motion'

export default function FloatingBookCTA() {
  const reduced = useReducedMotion()

  return (
    <>
      {/* Desktop — fixed right */}
      <motion.div
        className="hidden lg:block fixed right-7 top-1/2 z-[100] -translate-y-1/2"
        initial={reduced ? false : { opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: EASE_PREMIUM, delay: 0.6 }}
      >
        <Link
          to="/contact"
          className="group flex flex-col items-center justify-center w-[152px] min-h-[56px] px-4 py-3 bg-[#C9A86A] text-[#090B0D] rounded-[11px] font-bold text-[13px] uppercase tracking-[0.08em] leading-tight text-center shadow-[0_8px_32px_rgba(201,168,106,0.25)] backdrop-blur-sm transition-all duration-300 hover:translate-x-[-5px] hover:bg-[#D4B57A] hover:shadow-[0_12px_40px_rgba(201,168,106,0.35)]"
        >
          <span>Book a</span>
          <span className="flex items-center gap-1">
            Service
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </Link>
      </motion.div>

      {/* Mobile — fixed bottom */}
      <motion.div
        className="lg:hidden fixed bottom-5 left-5 right-5 z-[100]"
        initial={reduced ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE_PREMIUM, delay: 0.4 }}
      >
        <Link
          to="/contact"
          className="flex items-center justify-center gap-2 w-full h-[52px] bg-[#C9A86A]/95 text-[#090B0D] rounded-[11px] font-bold text-[13px] uppercase tracking-[0.1em] shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-md transition-all duration-300 active:scale-[0.98]"
        >
          Book a Service
          <span aria-hidden="true">→</span>
        </Link>
      </motion.div>
    </>
  )
}
