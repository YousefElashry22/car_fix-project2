import { motion } from 'framer-motion'

const markers = [
  { number: '01', label: 'DIAGNOSE' },
  { number: '02', label: 'REPAIR' },
  { number: '03', label: 'OPTIMIZE' },
  { number: '04', label: 'PERFORM' },
]

export default function StoryMarkers() {
  return (
    <section className="py-10 lg:py-14 border-y border-white/[0.06] bg-[#0A0C0F]">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10"
        >
          {markers.map((marker, i) => (
            <motion.div
              key={marker.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: 'easeOut' }}
              className="text-center lg:text-left"
            >
              <span className="text-[11px] font-bold tracking-[0.16em] text-[#C9A86A]">
                {marker.number}
              </span>
              <p className="mt-1 text-xs lg:text-sm font-bold tracking-[0.12em] text-[#F4F4F4] uppercase">
                {marker.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
