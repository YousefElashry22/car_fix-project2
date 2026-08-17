import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'

export default function MaintenanceCard({ title, date, system, action, status = 'upcoming', index = 0 }) {
  const statusStyles = {
    completed: 'text-green-400 bg-green-500/10 border-green-500/20',
    upcoming: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    recommended: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="card-clean p-5"
    >
      <div className="flex items-center justify-between gap-4 mb-3">
        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${statusStyles[status] || statusStyles.upcoming} capitalize`}>
          {status}
        </span>
        <span className="flex items-center gap-1.5 text-xs text-gray-400">
          <Calendar size={12} />
          {date}
        </span>
      </div>
      <h3 className="text-base font-bold text-white mb-1">{title}</h3>
      <p className="text-xs text-gray-400 mb-2">{system}</p>
      {action && <p className="text-sm text-gray-300">{action}</p>}
    </motion.div>
  )
}
