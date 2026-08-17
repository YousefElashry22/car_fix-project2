import { X } from 'lucide-react'
import { useEffect } from 'react'

type BookingModalProps = {
  isOpen: boolean
  onClose: () => void
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050708]/75 p-4 backdrop-blur-sm" onClick={onClose}>
      <div
        className="booking-modal w-full max-w-[620px] rounded-[26px] border border-white/10 bg-[#0b0d0f] p-5 shadow-[0_35px_80px_rgba(0,0,0,0.55)] md:p-7"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#d9ad5c]">Reserve</p>
            <h2 className="mt-2 text-2xl font-bold tracking-[-0.04em] text-white">Book a Service</h2>
          </div>
          <button type="button" onClick={onClose} className="rounded-full border border-white/10 p-2 text-white/80 transition-colors hover:text-white">
            <X size={18} />
          </button>
        </div>

        <form className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="block text-sm text-[#c5c7ca]">
              <span className="mb-2 block text-[0.72rem] font-medium uppercase tracking-[0.14em] text-[#9a9da3]">Name</span>
              <input className="w-full rounded-xl border border-white/10 bg-[#121518] px-3 py-3 text-white outline-none transition-colors placeholder:text-[#7d8188] focus:border-[#d9ad5c]/70" placeholder="John Smith" />
            </label>
            <label className="block text-sm text-[#c5c7ca]">
              <span className="mb-2 block text-[0.72rem] font-medium uppercase tracking-[0.14em] text-[#9a9da3]">Phone</span>
              <input className="w-full rounded-xl border border-white/10 bg-[#121518] px-3 py-3 text-white outline-none transition-colors placeholder:text-[#7d8188] focus:border-[#d9ad5c]/70" placeholder="(123) 456-7890" />
            </label>
            <label className="block text-sm text-[#c5c7ca] md:col-span-2">
              <span className="mb-2 block text-[0.72rem] font-medium uppercase tracking-[0.14em] text-[#9a9da3]">Email</span>
              <input className="w-full rounded-xl border border-white/10 bg-[#121518] px-3 py-3 text-white outline-none transition-colors placeholder:text-[#7d8188] focus:border-[#d9ad5c]/70" placeholder="you@example.com" type="email" />
            </label>
            <label className="block text-sm text-[#c5c7ca]">
              <span className="mb-2 block text-[0.72rem] font-medium uppercase tracking-[0.14em] text-[#9a9da3]">Car Model</span>
              <input className="w-full rounded-xl border border-white/10 bg-[#121518] px-3 py-3 text-white outline-none transition-colors placeholder:text-[#7d8188] focus:border-[#d9ad5c]/70" placeholder="BMW M5" />
            </label>
            <label className="block text-sm text-[#c5c7ca]">
              <span className="mb-2 block text-[0.72rem] font-medium uppercase tracking-[0.14em] text-[#9a9da3]">Service Type</span>
              <select className="w-full rounded-xl border border-white/10 bg-[#121518] px-3 py-3 text-white outline-none transition-colors focus:border-[#d9ad5c]/70">
                <option>Maintenance</option>
                <option>Diagnostics</option>
                <option>Brake Service</option>
                <option>Detailing</option>
              </select>
            </label>
            <label className="block text-sm text-[#c5c7ca]">
              <span className="mb-2 block text-[0.72rem] font-medium uppercase tracking-[0.14em] text-[#9a9da3]">Preferred Date</span>
              <input type="date" className="w-full rounded-xl border border-white/10 bg-[#121518] px-3 py-3 text-white outline-none transition-colors focus:border-[#d9ad5c]/70" />
            </label>
            <label className="block text-sm text-[#c5c7ca]">
              <span className="mb-2 block text-[0.72rem] font-medium uppercase tracking-[0.14em] text-[#9a9da3]">Preferred Time</span>
              <input type="time" className="w-full rounded-xl border border-white/10 bg-[#121518] px-3 py-3 text-white outline-none transition-colors focus:border-[#d9ad5c]/70" />
            </label>
          </div>

          <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
            <button type="button" onClick={onClose} className="rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-white/80 transition-colors hover:border-white/20 hover:text-white">
              Cancel
            </button>
            <button type="submit" className="rounded-xl bg-[#d9ad5c] px-5 py-3 text-sm font-semibold text-[#050708] transition-transform hover:-translate-y-0.5 hover:brightness-110">
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
