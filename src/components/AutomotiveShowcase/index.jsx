import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    id: '01',
    label: 'STEP 01',
    title: 'Precision Diagnostics',
    subtitle: 'Under the Hood Telemetry',
    description: 'Computerized OBD-II scanning detects fault codes, sensor data anomalies, and early component degradation before minor issues become major repairs.',
    tags: ['OBD-II Scanning', 'Sensor Calibration', 'Fault Code Analysis'],
    progressStart: 0,
    progressEnd: 0.25,
    metrics: [
      { name: 'ENGINE', health: '94%', top: '25%', left: '48%' },
      { name: 'BRAKES', health: '87%', top: '65%', left: '72%' },
    ],
  },
  {
    id: '02',
    label: 'STEP 02',
    title: 'Engine Care',
    subtitle: 'Power & Efficiency',
    description: 'Keep your engine performing efficiently with premium synthetic oil replacements, filter inspections, and ignition system testing.',
    tags: ['Synthetic Oil', 'Filter Inspection', 'Ignition Service'],
    progressStart: 0.25,
    progressEnd: 0.50,
    metrics: [
      { name: 'ENGINE', health: '94%', top: '30%', left: '52%' },
      { name: 'BATTERY', health: '91%', top: '20%', left: '35%' },
    ],
  },
  {
    id: '03',
    label: 'STEP 03',
    title: 'Brake System',
    subtitle: 'Safety & Stopping Power',
    description: 'Comprehensive brake inspections covering pad thickness, rotor runout, hydraulic fluid condition, and ABS module verification.',
    tags: ['Pad Measurement', 'Rotor Inspection', 'ABS Verification'],
    progressStart: 0.50,
    progressEnd: 0.75,
    metrics: [
      { name: 'BRAKES', health: '87%', top: '60%', left: '70%' },
      { name: 'TIRES', health: '82%', top: '68%', left: '30%' },
    ],
  },
  {
    id: '04',
    label: 'STEP 04',
    title: 'Complete Maintenance',
    subtitle: 'Reassembled & Road Ready',
    description: 'Keep every component working together seamlessly with data-driven preventive care, final road verification, and digital record logging.',
    tags: ['Preventive Care', 'Quality Control', 'Digital Logging'],
    progressStart: 0.75,
    progressEnd: 1.0,
    metrics: [
      { name: 'VEHICLE HEALTH', health: '94%', top: '40%', left: '50%' },
    ],
  },
]

export default function AutomotiveShowcase() {
  const containerRef = useRef(null)
  const videoRef = useRef(null)
  const [activeStep, setActiveStep] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  // Track scroll progress within the sticky section
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const totalHeight = rect.height - window.innerHeight
      if (totalHeight <= 0) return

      // Progress ratio from 0 to 1
      const currentScroll = -rect.top
      const rawProgress = Math.max(0, Math.min(1, currentScroll / totalHeight))
      setScrollProgress(rawProgress)

      // Active step index
      const stepIndex = Math.min(
        steps.length - 1,
        Math.floor(rawProgress * steps.length)
      )
      setActiveStep(stepIndex)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth video currentTime scrubbing based on scrollProgress
  useEffect(() => {
    let animId
    const syncVideoTime = () => {
      const video = videoRef.current
      if (video && video.duration) {
        const targetTime = scrollProgress * video.duration
        const currentTime = video.currentTime
        const diff = targetTime - currentTime

        if (Math.abs(diff) > 0.02) {
          video.currentTime = currentTime + diff * 0.2
        }
      }
      animId = requestAnimationFrame(syncVideoTime)
    }
    animId = requestAnimationFrame(syncVideoTime)
    return () => cancelAnimationFrame(animId)
  }, [scrollProgress])

  const currentStep = steps[activeStep]

  return (
    <section ref={containerRef} className="relative h-[320vh] bg-[#0B0D0F]">
      {/* Sticky Viewport */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden">
        {/* Main Split Grid */}
        <div className="container h-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-20 relative z-10">
          
          {/* Left Text Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Vertical Progress Indicator (01 / 02 / 03 / 04) */}
            <div className="flex items-center gap-4 mb-4">
              {steps.map((st, index) => (
                <div key={st.id} className="flex items-center gap-2">
                  <span
                    className={`text-xs font-bold font-mono transition-colors duration-300 ${
                      index === activeStep ? 'text-[#C9A86A]' : 'text-gray-600'
                    }`}
                  >
                    {st.id}
                  </span>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-6 h-[1px] transition-colors duration-300 ${
                        index === activeStep ? 'bg-[#C9A86A]' : 'bg-gray-800'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Step Label */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <div className="inline-block text-xs font-bold uppercase tracking-widest text-[#C9A86A]">
                  {currentStep.label} · {currentStep.subtitle}
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F0]">
                  {currentStep.title}
                </h2>

                <p className="text-[#9A9FA5] text-base leading-relaxed">
                  {currentStep.description}
                </p>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {currentStep.tags.map(tag => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-[#171B1F] border border-white/10 text-gray-300"
                    >
                      <CheckCircle2 size={12} className="text-[#C9A86A]" />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    to="/booking"
                    className="btn-primary inline-flex text-sm py-3 px-6"
                  >
                    <span>Book Service</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Video Visual (7 Cols) */}
          <div className="lg:col-span-7 h-[55vh] lg:h-[70vh] relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#121518]">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              muted
              playsInline
              preload="auto"
            >
              <source src={import.meta.env.BASE_URL + 'car-video.mp4'} type="video/mp4" />
            </video>

            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0F]/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D0F]/40 via-transparent to-transparent pointer-events-none" />

            {/* Floating Technical Indicator Labels */}
            <AnimatePresence>
              {currentStep.metrics.map(m => (
                <motion.div
                  key={m.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  style={{ top: m.top, left: m.left }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0B0D0F]/90 border border-[#C9A86A]/40 text-xs font-mono backdrop-blur-md z-20 shadow-lg pointer-events-none"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A86A] animate-pulse" />
                  <span className="text-gray-300 font-bold">{m.name}</span>
                  <span className="text-[#C9A86A] font-extrabold">{m.health}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>

        {/* Bottom Horizontal Progress Bar */}
        <div className="w-full h-1 bg-gray-900">
          <div
            className="h-full bg-[#C9A86A] transition-all duration-150"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>
      </div>
    </section>
  )
}
