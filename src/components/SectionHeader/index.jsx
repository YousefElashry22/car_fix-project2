import { motion } from 'framer-motion'

export default function SectionHeader({
  badge,
  title,
  description,
  align = 'left',
  className = '',
}) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className={`max-w-2xl ${alignClass} ${className}`}
    >
      {badge && (
        <span className="text-label inline-block mb-2">
          {badge}
        </span>
      )}
      <h2 className="h2-title mb-4">
        {title}
      </h2>
      {description && (
        <p className="body-text">
          {description}
        </p>
      )}
    </motion.div>
  )
}
