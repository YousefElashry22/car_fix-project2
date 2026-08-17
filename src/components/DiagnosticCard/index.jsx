import { motion } from 'framer-motion'

export default function DiagnosticCard({ title, percentage }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-semibold text-white">{title}</span>
        <span className="text-[#C9A86A] font-mono font-bold">{percentage}%</span>
      </div>
      <div className="h-2 bg-[#121518] rounded-full overflow-hidden border border-white/5">
        <motion.div
          className="h-full bg-[#C9A86A] rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}
