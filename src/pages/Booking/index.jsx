import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageHeader from '../../components/PageHeader'
import { services } from '../../data/services'
import { CheckCircle2, Loader2, X } from 'lucide-react'

const carBrands = ['BMW', 'Mercedes-Benz', 'Audi', 'Tesla', 'Porsche', 'Toyota', 'Honda', 'Ford', 'Other']
const timeSlots = ['09:00 AM', '11:00 AM', '01:00 PM', '03:00 PM', '05:00 PM']

export default function Booking() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', brand: '', model: '', year: '', service: '', date: '', time: '', notes: ''
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [submittedRef, setSubmittedRef] = useState(null)

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.phone.trim()) errs.phone = 'Phone number is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    if (!form.brand) errs.brand = 'Brand is required'
    if (!form.model.trim()) errs.model = 'Model is required'
    if (!form.year) errs.year = 'Year is required'
    if (!form.service) errs.service = 'Service is required'
    if (!form.date) errs.date = 'Date is required'
    if (!form.time) errs.time = 'Time is required'
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
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
    }, 1200)
  }

  return (
    <main>
      <PageHeader
        badge="BOOKING"
        title="Book a Service"
        description="Select your service requirements and preferred schedule."
      />

      <section className="section-padding bg-[#0B0D0F]">
        <div className="container max-w-2xl">
          <form onSubmit={handleSubmit} className="card-clean space-y-6" noValidate>
            {/* Contact Details */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-[#F5F5F0] uppercase tracking-wider border-b border-white/10 pb-2">
                1. Contact Details
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-[#9A9FA5] mb-1">Full Name *</label>
                  <input id="name" name="name" value={form.name} onChange={handleChange} className="input-field" placeholder="John Doe" />
                  {errors.name && <p className="text-xs text-[#EF4444] mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-[#9A9FA5] mb-1">Phone Number *</label>
                  <input id="phone" name="phone" value={form.phone} onChange={handleChange} className="input-field" placeholder="+1 (555) 000-0000" />
                  {errors.phone && <p className="text-xs text-[#EF4444] mt-1">{errors.phone}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-[#9A9FA5] mb-1">Email Address *</label>
                <input id="email" name="email" type="email" value={form.email} onChange={handleChange} className="input-field" placeholder="john@example.com" />
                {errors.email && <p className="text-xs text-[#EF4444] mt-1">{errors.email}</p>}
              </div>
            </div>

            {/* Vehicle Details */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-[#F5F5F0] uppercase tracking-wider border-b border-white/10 pb-2">
                2. Vehicle Details
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="brand" className="block text-xs font-semibold text-[#9A9FA5] mb-1">Brand *</label>
                  <select id="brand" name="brand" value={form.brand} onChange={handleChange} className="input-field">
                    <option value="">Select Brand</option>
                    {carBrands.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                  {errors.brand && <p className="text-xs text-[#EF4444] mt-1">{errors.brand}</p>}
                </div>
                <div>
                  <label htmlFor="model" className="block text-xs font-semibold text-[#9A9FA5] mb-1">Model *</label>
                  <input id="model" name="model" value={form.model} onChange={handleChange} className="input-field" placeholder="e.g. Model 3" />
                  {errors.model && <p className="text-xs text-[#EF4444] mt-1">{errors.model}</p>}
                </div>
                <div>
                  <label htmlFor="year" className="block text-xs font-semibold text-[#9A9FA5] mb-1">Year *</label>
                  <input id="year" name="year" type="number" value={form.year} onChange={handleChange} className="input-field" placeholder="2024" />
                  {errors.year && <p className="text-xs text-[#EF4444] mt-1">{errors.year}</p>}
                </div>
              </div>
            </div>

            {/* Service & Time */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-[#F5F5F0] uppercase tracking-wider border-b border-white/10 pb-2">
                3. Service & Schedule
              </h3>
              <div>
                <label htmlFor="service" className="block text-xs font-semibold text-[#9A9FA5] mb-1">Service Required *</label>
                <select id="service" name="service" value={form.service} onChange={handleChange} className="input-field">
                  <option value="">Select Service</option>
                  {services.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
                </select>
                {errors.service && <p className="text-xs text-[#EF4444] mt-1">{errors.service}</p>}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-xs font-semibold text-[#9A9FA5] mb-1">Preferred Date *</label>
                  <input id="date" name="date" type="date" value={form.date} onChange={handleChange} className="input-field" />
                  {errors.date && <p className="text-xs text-[#EF4444] mt-1">{errors.date}</p>}
                </div>
                <div>
                  <label htmlFor="time" className="block text-xs font-semibold text-[#9A9FA5] mb-1">Preferred Time *</label>
                  <select id="time" name="time" value={form.time} onChange={handleChange} className="input-field">
                    <option value="">Select Time</option>
                    {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                  {errors.time && <p className="text-xs text-[#EF4444] mt-1">{errors.time}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="notes" className="block text-xs font-semibold text-[#9A9FA5] mb-1">Additional Notes</label>
                <textarea id="notes" name="notes" rows={3} value={form.notes} onChange={handleChange} className="input-field resize-none" placeholder="Any specific issues or requests..." />
              </div>
            </div>

            <button type="submit" disabled={loading} className="btn-primary w-full">
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                'Request Service'
              )}
            </button>
          </form>
        </div>
      </section>

      {/* Success Modal */}
      <AnimatePresence>
        {submittedRef && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setSubmittedRef(null)}
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative bg-[#121518] border border-white/10 rounded-xl p-8 max-w-md w-full text-center space-y-6 z-10"
            >
              <button
                onClick={() => setSubmittedRef(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X size={20} />
              </button>

              <div className="w-12 h-12 rounded-full bg-[#C9A86A]/10 text-[#C9A86A] flex items-center justify-center mx-auto">
                <CheckCircle2 size={28} />
              </div>

              <div>
                <h3 className="h3-title mb-2">Service Request Received</h3>
                <p className="body-text">Our service team will contact you shortly.</p>
              </div>

              <div className="p-4 rounded-lg bg-[#171B1F] border border-white/5 text-xs space-y-1">
                <span className="text-gray-400 block uppercase font-medium">Booking Reference</span>
                <span className="text-base font-mono font-bold text-[#C9A86A]">{submittedRef}</span>
              </div>

              <button
                onClick={() => setSubmittedRef(null)}
                className="btn-primary w-full"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  )
}
