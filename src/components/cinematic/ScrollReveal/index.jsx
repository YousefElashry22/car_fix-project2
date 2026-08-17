import { motion } from 'framer-motion'
import { useReducedMotion } from '../../../hooks/useReducedMotion'
import { DURATION, EASE_PREMIUM, STAGGER } from '../../../utils/motion'

const reducedTransition = { duration: 0.3, ease: 'easeOut' }

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  variants,
  as = 'div',
}) {
  const reduced = useReducedMotion()
  const Component = motion[as] || motion.div

  const defaultVariants = {
    hidden: { opacity: 0, y: reduced ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduced
        ? reducedTransition
        : { duration: DURATION.text, ease: EASE_PREMIUM, delay },
    },
  }

  return (
    <Component
      variants={variants || defaultVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={className}
    >
      {children}
    </Component>
  )
}

export function StaggerReveal({ children, className = '', stagger = STAGGER.text }) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: reduced ? 0 : stagger,
            delayChildren: 0.1,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.text, ease: EASE_PREMIUM },
  },
}

export const headingRevealVariant = {
  hidden: { opacity: 0, y: 40, clipPath: 'inset(100% 0 0 0)' },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: 'inset(0% 0 0 0)',
    transition: { duration: DURATION.text, ease: EASE_PREMIUM },
  },
}

export const imageRevealVariant = {
  hidden: { opacity: 0, scale: 1.08, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: DURATION.image, ease: EASE_PREMIUM },
  },
}

export const clipRevealVariant = {
  hidden: { opacity: 0.6, clipPath: 'inset(0 100% 0 0)' },
  visible: {
    opacity: 1,
    clipPath: 'inset(0 0 0 0)',
    transition: { duration: DURATION.cinematic, ease: EASE_PREMIUM },
  },
}

export const sectionExitVariant = {
  hidden: { opacity: 0.85, scale: 0.98 },
  visible: { opacity: 1, scale: 1 },
}
