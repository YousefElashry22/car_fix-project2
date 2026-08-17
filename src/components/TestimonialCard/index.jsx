import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export default function TestimonialCard({ name, role, content, rating = 5, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="card-clean p-6 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center gap-1 text-[#C9A86A] mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} size={16} fill="currentColor" />
          ))}
        </div>
        <p className="text-[#F5F5F0] text-sm leading-relaxed mb-6">
          &ldquo;{content}&rdquo;
        </p>
      </div>
      <div>
        <div className="text-[#F5F5F0] text-sm font-bold">{name}</div>
        <div className="text-[#9A9FA5] text-xs">{role}</div>
      </div>
    </motion.div>
  )
}
