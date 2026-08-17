import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'How long does a diagnostic inspection take?',
    a: 'A diagnostic inspection typically takes 45–60 minutes depending on your vehicle model and systems involved.',
  },
  {
    q: 'Do I need an appointment?',
    a: 'Appointments are recommended to guarantee immediate service, though walk-ins are welcomed based on workshop capacity.',
  },
  {
    q: 'Do you provide emergency support?',
    a: 'Yes, AUTOVEX offers 24/7 emergency hotline support for registered customers.',
  },
  {
    q: 'Can I track my vehicle maintenance?',
    a: 'Yes, our digital Maintenance Intelligence dashboard keeps a record of all completed and upcoming maintenance items.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i
        return (
          <div key={i} className="card-clean overflow-hidden">
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-[#F5F5F0] hover:text-[#C9A86A] transition-colors"
            >
              <span>{faq.q}</span>
              <ChevronDown
                size={18}
                className={`text-[#9A9FA5] transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#C9A86A]' : ''}`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="px-5 pb-5 text-[#9A9FA5] text-sm leading-relaxed border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
