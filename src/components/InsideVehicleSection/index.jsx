import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const storySteps = [
  {
    id: '01',
    badge: '01 · COMPLETE VEHICLE',
    title: 'Complete Vehicle',
    description: 'A clean, confident start with the chassis, bodywork, and finish inspected as one complete system.',
    image: '/images/car-hero.jpg',
    imagePosition: 'center center',
  },
  {
    id: '02',
    badge: '02 · DIAGNOSTICS',
    title: 'Diagnostics',
    description: 'Advanced electronic scanning reveals the hidden issues before they become costly failures.',
    image: '/images/engine.jpg',
    imagePosition: 'center center',
  },
  {
    id: '03',
    badge: '03 · ENGINE / MECHANICAL',
    title: 'Engine & Mechanical',
    description: 'Precision inspection and maintenance keep the powertrain reliable, efficient, and road-ready.',
    image: '/images/engine.jpg',
    imagePosition: 'center center',
  },
  {
    id: '04',
    badge: '04 · BRAKES / WHEELS',
    title: 'Brakes & Wheels',
    description: 'Safety-critical components are tested and restored for sharper control, stability, and confidence.',
    image: '/images/brakes.jpg',
    imagePosition: 'center center',
  },
  {
    id: '05',
    badge: '05 · MAINTENANCE',
    title: 'Maintenance',
    description: 'Routine care and expert checks prevent wear, downtime, and preventable repairs.',
    image: '/images/workshop.jpg',
    imagePosition: 'center center',
  },
  {
    id: '06',
    badge: '06 · COMPLETE VEHICLE',
    title: 'Complete Vehicle',
    description: 'The final result: a clean, properly maintained car delivered ready to perform without compromise.',
    image: '/images/car-hero.jpg',
    imagePosition: 'center center',
  },
]

export default function InsideVehicleSection() {
  const containerRef = useRef(null)
  const [activeStep, setActiveStep] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    let rafId = null

    const handleScroll = () => {
      if (rafId !== null) return

      rafId = window.requestAnimationFrame(() => {
        if (!containerRef.current) return

        const rect = containerRef.current.getBoundingClientRect()
        const totalHeight = rect.height - window.innerHeight
        if (totalHeight <= 0) return

        const currentScroll = -rect.top
        const rawProgress = Math.max(0, Math.min(1, currentScroll / totalHeight))
        setScrollProgress(rawProgress)

        const stepIndex = Math.min(
          storySteps.length - 1,
          Math.floor(rawProgress * storySteps.length)
        )
        setActiveStep(stepIndex)

        rafId = null
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId)
      }
    }
  }, [])

  const currentStep = storySteps[activeStep]

  return (
    <section ref={containerRef} className="relative h-[240vh] bg-[#0B0D0F]">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden">
        
        <div className="container h-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center py-16 relative z-10">
          
          {/* Left Story Text (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Header */}
            <div>
              <span className="text-label">AUTOMOTIVE EXPERIENCE</span>
              <h2 className="h2-title mt-1">
                Precision in Motion
              </h2>
            </div>

            {/* Step Progress Bar */}
            <div className="flex items-center gap-3 py-2 border-y border-white/10">
              {storySteps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`flex items-center gap-2 text-xs font-mono font-bold transition-all ${
                    index === activeStep ? 'text-[#C9A86A]' : 'text-gray-600 hover:text-gray-300'
                  }`}
                >
                  <span>{step.id}</span>
                  {index < storySteps.length - 1 && <span className="text-gray-800">•</span>}
                </button>
              ))}
            </div>

            {/* Active Story Step */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep.id}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 12 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="space-y-4"
              >
                <div className="text-xs font-bold uppercase tracking-widest text-[#C9A86A]">
                  {currentStep.badge}
                </div>

                <h3 className="h3-title text-white">
                  {currentStep.title}
                </h3>

                <p className="body-text">
                  {currentStep.description}
                </p>

                <div className="pt-2">
                  <Link to="/contact" className="btn-primary inline-flex text-sm">
                    <span>Book Service</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Image Visual Display (7 Cols) */}
          <div className="lg:col-span-7 h-[45vh] lg:h-[60vh] relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#121518]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep.image + currentStep.title}
                initial={{ opacity: 0, scale: 0.97, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.02, y: -12 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="w-full h-full relative"
              >
                <img
                  src={currentStep.image}
                  alt={currentStep.title}
                  style={{ objectPosition: currentStep.imagePosition || 'center center' }}
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0F]/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-5 left-5 px-3 py-1.5 rounded-lg bg-[#0B0D0F]/85 border border-white/10 backdrop-blur-md flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A86A]" />
                  <span className="text-xs font-mono font-bold text-white uppercase">{currentStep.title}</span>
                </div>
              </motion.div>
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
