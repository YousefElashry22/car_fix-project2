import { motion } from 'framer-motion'

export default function StatCard({ value, label, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      className="card-clean p-6 text-center"
    >
      <div className="text-3xl font-extrabold text-white mb-1">
        {value}
      </div>
      <div className="text-gray-400 text-sm font-medium">
        {label}
      </div>
    </motion.div>
  )
}
