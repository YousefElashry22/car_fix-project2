import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { DURATION, EASE_PREMIUM } from '../../utils/motion'

const serviceNavItems = [
  { id: 'service-01', label: '01 DIAGNOSE' },
  { id: 'service-02', label: '02 REPAIR' },
  { id: 'service-03', label: '03 OPTIMIZE' },
  { id: 'service-04', label: '04 PERFORM' },
]

const services = [
  {
    id: 'service-01',
    number: '01',
    label: 'PRECISION',
    title: 'Advanced Diagnostics',
    description: 'Detailed scans uncover faults before they become expensive problems.',
    image: import.meta.env.BASE_URL + 'images/engine.jpg',
    objectPosition: 'center center',
    features: [
      { title: 'System Scan', detail: 'Full health analysis' },
      { title: 'Data Accuracy', detail: 'Clear fault detection' },
      { title: 'Early Prevention', detail: 'Lower long-term cost' },
    ],
  },
  {
    id: 'service-02',
    number: '02',
    label: 'SAFETY',
    title: 'Brake Service',
    description: 'Precision inspection and service for safer stops and better control.',
    image: import.meta.env.BASE_URL + 'images/brakes.jpg',
    objectPosition: 'center center',
    features: [
      { title: 'Brake Check', detail: 'Pad and rotor wear' },
      { title: 'Fluid Review', detail: 'Optimized braking response' },
      { title: 'ABS Test', detail: 'System confidence' },
    ],
  },
  {
    id: 'service-03',
    number: '03',
    label: 'MAINTENANCE',
    title: 'Performance Maintenance',
    description: 'Essential care designed to preserve reliability, efficiency, and power.',
    image: import.meta.env.BASE_URL + 'images/workshop.jpg',
    objectPosition: 'center 38%',
    features: [
      { title: 'Fluid Service', detail: 'Engine-specific care' },
      { title: 'Wear Checks', detail: 'Preventive inspection' },
      { title: 'Long-Term Health', detail: 'Reliable ownership' },
    ],
  },
  {
    id: 'service-04',
    number: '04',
    label: 'ELECTRICAL',
    title: 'Electrical Diagnostics',
    description: 'Complete electrical analysis to keep every system precise and dependable.',
    image: import.meta.env.BASE_URL + 'images/bmw.jpg',
    objectPosition: 'center center',
    features: [
      { title: 'Battery Test', detail: 'Power and health check' },
      { title: 'Charging Check', detail: 'Stable output' },
      { title: 'Sensor Calibration', detail: 'Accurate electronics' },
    ],
  },
]

function ServiceScene({ service, index }) {
  const sectionRef = useRef(null)
  const reduced = useReducedMotion()
  const isImageLeft = index % 2 !== 0

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 0.5, 1], reduced ? [0, 0, 0] : [20, 0, -18])
  const imageScale = useTransform(scrollYProgress, [0, 0.45, 0.8, 1], reduced ? [1, 1, 1, 1] : [1.12, 1.02, 1, 1.04])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.12, 0.7, 1], [0.5, 1, 1, 0.8])
  const contentY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], reduced ? [0, 0, 0, 0] : [50, 0, 0, 18])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.15, 0.65, 1], [0, 1, 1, 0.9])

  const titleLines = service.title.split('\n')

  return (
    <motion.section
      id={service.id}
      ref={sectionRef}
      initial={{ opacity: 0.9 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.8, ease: EASE_PREMIUM }}
      className="service-shell"
    >
      <div className={`service-scene ${isImageLeft ? 'image-left' : 'image-right'}`}>
        <motion.div
          className="service-media-wrap"
          initial={reduced ? { opacity: 1 } : { opacity: 0, x: isImageLeft ? -50 : 50, scale: 1.08 }}
          whileInView={reduced ? { opacity: 1 } : { opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: '-12%' }}
          transition={{ duration: 1.05, ease: EASE_PREMIUM }}
          style={reduced ? undefined : { y: imageY, opacity: imageOpacity }}
        >
          <motion.div
            className="service-media"
            style={reduced ? undefined : { scale: imageScale }}
          >
            <motion.img
              src={service.image}
              alt={service.label}
              loading="lazy"
              style={{ objectPosition: service.objectPosition }}
              initial={reduced ? { opacity: 1, clipPath: 'inset(0 0 0 0)' } : { opacity: 0, scale: 1.08, clipPath: 'inset(0 100% 0 0)' }}
              animate={{ opacity: 1, scale: 1, clipPath: 'inset(0 0 0 0)' }}
              transition={{ duration: 0.9, ease: EASE_PREMIUM }}
            />
            <div className="service-media-overlay" />
          </motion.div>
        </motion.div>

        <motion.div
          className="service-content-panel"
          initial={reduced ? { opacity: 1 } : { opacity: 0, x: isImageLeft ? 50 : -50 }}
          whileInView={reduced ? { opacity: 1 } : { opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-12%' }}
          transition={{ duration: 0.96, ease: EASE_PREMIUM }}
          style={reduced ? undefined : { y: contentY, opacity: contentOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: 0.08 }}
            className="service-label"
          >
            {service.number} / {service.label}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: 0.12 }}
            className="service-title"
          >
            {titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.72, ease: EASE_PREMIUM, delay: 0.2 }}
            className="service-description"
          >
            {service.description}
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.8, ease: EASE_PREMIUM, delay: 0.28 }}
            className="service-features"
          >
            {service.features.map((feature) => (
              <li key={feature.title} className="feature-item">
                <span className="feature-title">{feature.title}</span>
                <span className="feature-detail">{feature.detail}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.72, ease: EASE_PREMIUM, delay: 0.4 }}
          >
            <Link to="/contact" className="service-cta group">
              <span>Book This Service</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-250 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default function Services() {
  return (
    <main className="services-page bg-[#080A0C]">
      <section className="services-intro">
        <div className="site-container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: EASE_PREMIUM }}
            className="intro-copy"
          >
            <span className="cinematic-label">Precision Service</span>
            <h1>Premium care for the modern drive.</h1>
            <p>
              Tailored maintenance, diagnostics, and performance care for vehicles that deserve exceptional attention.
            </p>
          </motion.div>
        </div>
      </section>

      <nav className="service-top-nav" aria-label="Service navigation">
        <div className="site-container">
          <div className="service-nav-items">
            {serviceNavItems.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`service-nav-link ${index === 0 ? 'active' : ''}`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {services.map((service, index) => (
        <ServiceScene key={service.id} service={service} index={index} />
      ))}

      <section className="services-close">
        <div className="site-container">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.8, ease: EASE_PREMIUM }}
            className="closing-copy"
          >
            <div className="cinematic-label">AUTOVEX / CARE</div>
            <h2>Ready for better car care?</h2>
            <p>Book your next appointment and let our team handle the details with precision.</p>
          </motion.div>
        </div>
      </section>

      <Link to="/contact" className="booking-float group" aria-label="Book a Service">
        <span className="booking-label">Book a</span>
        <span className="booking-value">
          Service
          <ArrowRight className="h-4 w-4 transition-transform duration-250 group-hover:translate-x-1" />
        </span>
      </Link>
    </main>
  )
}
