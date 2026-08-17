import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Cpu, Disc, Droplets, CircleDot, Zap, Wind, Settings2, GitBranch } from 'lucide-react'

const iconMap = { Cpu, Disc, Droplets, CircleDot, Zap, Wind, Settings2, GitBranch }

export default function ServiceCard({ service, index = 0 }) {
  const Icon = iconMap[service.icon] || Cpu

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.25, delay: index * 0.04 }}
      className="card-clean p-6 flex flex-col justify-between group"
    >
      <div>
        <div className="w-10 h-10 rounded-lg bg-[#C9A86A]/10 text-[#C9A86A] flex items-center justify-center mb-4">
          <Icon size={20} />
        </div>
        <h3 className="h3-title text-lg mb-2 block group-hover:text-[#C9A86A] transition-colors">
          {service.title}
        </h3>
        <p className="body-text text-sm leading-relaxed mb-6 block">
          {service.shortDesc}
        </p>
      </div>

      <Link
        to="/contact"
        className="btn-ghost inline-flex text-sm"
      >
        <span>Book Service</span>
        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  )
}
