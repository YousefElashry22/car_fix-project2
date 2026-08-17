import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { services } from '../../data/services'
import CinematicImage from '../../components/cinematic/CinematicImage'
import { MapPin, Phone, Clock, CheckCircle2, Loader2, X } from 'lucide-react'

const contactInfo = [
  { icon: MapPin, label: 'Location', value: 'Port Said, Egypt' },
  { icon: Phone, label: 'Phone', value: '+20 100 000 0000' },
  { icon: Clock, label: 'Hours', value: '09:00 AM – 10:00 PM' },
]

const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

const fadeUp = (y = 20) => ({
  hidden: { opacity: 0, y },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut' },
  },
})

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    vehicle: '',
    service: '',
    date: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [submittedRef, setSubmittedRef] = useState(null)

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.phone.trim()) errs.phone = 'Phone number is required'
    if (!form.vehicle.trim()) errs.vehicle = 'Vehicle info is required'
    if (!form.service) errs.service = 'Service selection is required'
    if (!form.date) errs.date = 'Preferred date is required'
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmittedRef('AVX-2026-4821')
    }, 1000)
  }

  return (
    <main className="bg-[#090B0D]">
      <div className="site-container pt-14 md:pt-16 lg:pt-[72px] pb-14 md:pb-16 lg:pb-20">
        {/* Hero intro */}
        <motion.header
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="max-w-[750px] mb-12 md:mb-14 lg:mb-16"
        >
          <motion.span
            variants={fadeUp(15)}
            className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#C9A86A] mb-5"
          >
            <span className="h-px w-10 bg-[#C9A86A]/70" />
            Book a Service
          </motion.span>

          <motion.h1
            variants={fadeUp(25)}
            className="text-[clamp(2.625rem,5.5vw,4.5rem)] font-bold leading-[1.02] tracking-[-0.03em] text-[#F4F4F4] mb-5"
          >
            Let&apos;s take care
            <br />
            of your drive.
          </motion.h1>

          <motion.p
            variants={fadeUp(20)}
            className="text-base md:text-[17px] text-[#8B919B] leading-relaxed max-w-[500px]"
          >
            Schedule premium maintenance and diagnostics with the AUTOVEX team.
          </motion.p>
        </motion.header>

        {/* Main 2-column section */}
        <div className="grid lg:grid-cols-[42%_58%] gap-10 lg:gap-12 items-start">
          {/* Left column — service center info + image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.25 }}
            className="space-y-8 lg:space-y-10"
          >
            <div className="rounded-[22px] border border-white/[0.06] bg-[#111419] p-5 md:p-6 shadow-[0_18px_40px_rgba(0,0,0,0.28)]">
              <h2 className="text-[13px] font-bold uppercase tracking-[0.14em] text-[#8B919B] mb-6">
                Service Center
              </h2>

              <div className="space-y-0">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.label}
                      className={`py-4 ${index < contactInfo.length - 1 ? 'border-b border-white/[0.06]' : ''}`}
                    >
                      <span className="block text-[11px] font-bold uppercase tracking-[0.12em] text-[#8B919B] mb-2">
                        {item.label}
                      </span>
                      <div className="flex items-center gap-3">
                        <Icon
                          size={15}
                          className="text-[#C9A86A] flex-shrink-0 opacity-80"
                          strokeWidth={2}
                        />
                        <span className="text-[15px] md:text-base font-semibold text-[#F4F4F4]">
                          {item.value}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <CinematicImage
              src="/images/workshop.jpg"
              alt="AUTOVEX Main Service & Diagnostic Facility"
              objectPosition="center 35%"
              parallax
              parallaxAmount={16}
              reveal="scale"
              className="h-[300px] md:h-[340px] rounded-[22px] overflow-hidden border border-white/[0.06] shadow-[0_18px_40px_rgba(0,0,0,0.28)]"
            >
              <div className="absolute bottom-5 left-5 right-5 z-10 rounded-xl border border-white/10 bg-[#090B0D]/45 px-4 py-3 backdrop-blur-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#C9A86A] mb-1">
                  Autovex / Port Said
                </p>
                <p className="text-sm font-semibold text-[#F4F4F4]">
                  Main Service &amp; Diagnostic Facility
                </p>
              </div>
            </CinematicImage>
          </motion.div>

          {/* Right column — booking form */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            className="bg-[#111419] border border-white/[0.08] rounded-[24px] p-5 sm:p-8 lg:p-10 shadow-[0_22px_50px_rgba(0,0,0,0.28)]"
          >
            <div className="mb-7 lg:mb-8">
              <span className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#C9A86A] mb-4">
                <span className="h-px w-8 bg-[#C9A86A]/70" />
                Request Service
              </span>
              <h2 className="text-[clamp(2.2rem,3vw,3rem)] font-bold leading-[1.1] tracking-[-0.03em] text-[#F4F4F4] mb-2">
                Begin your appointment
              </h2>
              <p className="text-[15px] md:text-base text-[#8B919B]">
                Tell us what your vehicle needs.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5" noValidate>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                <div>
                  <label htmlFor="name" className="block text-[12px] font-semibold text-[#8B919B] mb-2 uppercase tracking-[0.08em]">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="contact-input"
                    placeholder="John Smith"
                    aria-invalid={Boolean(errors.name)}
                  />
                  {errors.name && <p className="text-xs text-[#EF4444] mt-1.5" role="alert">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-[12px] font-semibold text-[#8B919B] mb-2 uppercase tracking-[0.08em]">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="contact-input"
                    placeholder="+20 100 000 0000"
                    aria-invalid={Boolean(errors.phone)}
                  />
                  {errors.phone && <p className="text-xs text-[#EF4444] mt-1.5" role="alert">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                <div>
                  <label htmlFor="vehicle" className="block text-[12px] font-semibold text-[#8B919B] mb-2 uppercase tracking-[0.08em]">
                    Vehicle *
                  </label>
                  <input
                    id="vehicle"
                    name="vehicle"
                    value={form.vehicle}
                    onChange={handleChange}
                    className="contact-input"
                    placeholder="BMW 3 Series 2024"
                    aria-invalid={Boolean(errors.vehicle)}
                  />
                  {errors.vehicle && <p className="text-xs text-[#EF4444] mt-1.5" role="alert">{errors.vehicle}</p>}
                </div>

                <div>
                  <label htmlFor="service" className="block text-[12px] font-semibold text-[#8B919B] mb-2 uppercase tracking-[0.08em]">
                    Service Required *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="contact-input"
                    aria-invalid={Boolean(errors.service)}
                  >
                    <option value="">Select Service</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                  {errors.service && <p className="text-xs text-[#EF4444] mt-1.5" role="alert">{errors.service}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="date" className="block text-[12px] font-semibold text-[#8B919B] mb-2 uppercase tracking-[0.08em]">
                  Preferred Date *
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                  className="contact-input"
                  aria-invalid={Boolean(errors.date)}
                />
                {errors.date && <p className="text-xs text-[#EF4444] mt-1.5" role="alert">{errors.date}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-[12px] font-semibold text-[#8B919B] mb-2 uppercase tracking-[0.08em]">
                  Message / Special Requests
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="contact-input"
                  placeholder="Describe any symptoms or requests..."
                />
              </div>

              <button type="submit" disabled={loading} className="contact-submit mt-1">
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span>Request Service</span>
                    <span aria-hidden="true">→</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Success modal */}
      <AnimatePresence>
        {submittedRef && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-[#090B0D]/90 backdrop-blur-sm"
              onClick={() => setSubmittedRef(null)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="relative bg-[#111419] border border-white/10 rounded-[20px] p-8 max-w-md w-full text-center space-y-6 z-10"
            >
              <button
                type="button"
                onClick={() => setSubmittedRef(null)}
                className="absolute top-4 right-4 text-[#8B919B] hover:text-[#F4F4F4] transition-colors"
                aria-label="Close success message"
              >
                <X size={20} />
              </button>

              <div className="w-12 h-12 rounded-full bg-[#C9A86A]/10 text-[#C9A86A] flex items-center justify-center mx-auto">
                <CheckCircle2 size={28} />
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#F4F4F4] mb-2">Service Request Received</h3>
                <p className="text-sm text-[#8B919B]">Our team will contact you shortly.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#090B0D] border border-white/5 text-xs space-y-1">
                <span className="text-[#8B919B] block uppercase font-medium tracking-[0.1em]">Booking Reference</span>
                <span className="text-base font-mono font-bold text-[#C9A86A]">{submittedRef}</span>
              </div>

              <button onClick={() => setSubmittedRef(null)} className="contact-submit">
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  )
}
