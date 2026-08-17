import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Clock } from 'lucide-react'
import { services } from '../data/services'

export default function ServiceListSection() {
  const [hoveredIndex, setHoveredIndex] = useState(0)
  const activeService = services[hoveredIndex] || services[0]

  return (
    <section className="section-padding bg-[#121518] border-t border-b border-white/5">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A86A]">
                OUR SERVICES
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F0] mt-2 mb-4">
                Everything your vehicle needs.
              </h2>
              <p className="text-[#9A9FA5] text-base leading-relaxed">
                Precision engineering service powered by advanced telemetry and certified technician expertise.
              </p>
            </div>

            {/* Active Hover Detail Preview Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="card-clean p-6 bg-[#171B1F] border border-white/10 space-y-4"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#C9A86A] font-bold">{activeService.number} / 08</span>
                  <span className="text-gray-400 flex items-center gap-1">
                    <Clock size={12} /> {activeService.time}
                  </span>
                </div>
                
                <h3 className="block text-xl font-bold text-white">
                  {activeService.title}
                </h3>
                
                <p className="block text-sm text-[#9A9FA5] leading-relaxed">
                  {activeService.shortDesc}
                </p>

                <div className="pt-2">
                  <Link
                    to={`/services/${activeService.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#C9A86A] hover:underline"
                  >
                    <span>Explore details</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column — Clean List of 08 Services (7 cols) */}
          <div className="lg:col-span-7 space-y-2">
            {services.map((item, index) => {
              const isHovered = hoveredIndex === index
              return (
                <Link
                  key={item.id}
                  to={`/services/${item.id}`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-200 group ${
                    isHovered
                      ? 'bg-[#171B1F] border-[#C9A86A]/40 text-[#C9A86A] translate-x-1'
                      : 'bg-transparent border-white/5 text-white hover:border-white/15'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-xs font-mono font-bold transition-colors ${
                        isHovered ? 'text-[#C9A86A]' : 'text-gray-500'
                      }`}
                    >
                      {item.number}
                    </span>
                    <span
                      className={`text-base sm:text-lg font-bold transition-colors ${
                        isHovered ? 'text-[#C9A86A]' : 'text-[#F5F5F0]'
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-500 hidden sm:inline">{item.time}</span>
                    <ArrowRight
                      size={18}
                      className={`transition-transform duration-200 ${
                        isHovered ? 'text-[#C9A86A] translate-x-1' : 'text-gray-600 group-hover:text-gray-300'
                      }`}
                    />
                  </div>
                </Link>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
