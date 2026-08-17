import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [location])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`site-header transition-all duration-300 ${
          scrolled
            ? 'bg-[#0B0D0F]/90 backdrop-blur-md border-b border-white/10 shadow-lg'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="site-container">
          <div className="site-header-inner flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-[#C9A86A] transition-colors">
                AUTOVEX
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A86A]" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `text-sm font-semibold transition-colors ${
                      isActive ? 'text-[#C9A86A]' : 'text-[#969CA3] hover:text-[#F5F5F5]'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 bg-[#C9A86A] text-[#080A0C] text-xs font-bold h-10 px-4 rounded-[8px] transition-all duration-250 hover:bg-[#D4B57A] hover:-translate-y-0.5"
              >
                Book Service
                <span className="inline-block transition-transform duration-250 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-[#969CA3] hover:text-white rounded-lg transition-colors"
              aria-label={mobileOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/75 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              id="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25, ease: 'easeOut' }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-[#121518] border-l border-white/10 p-6 flex flex-col justify-between lg:hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xl font-bold text-white">AUTOVEX</span>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-1 text-gray-400 hover:text-white"
                  >
                    <X size={20} />
                  </button>
                </div>
                <nav className="flex flex-col gap-4">
                  {navLinks.map(({ to, label }) => (
                    <NavLink
                      key={to}
                      to={to}
                      end={to === '/'}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) =>
                        `text-base font-medium py-1 transition-colors ${
                          isActive ? 'text-[#C9A86A] font-bold' : 'text-gray-300 hover:text-white'
                        }`
                      }
                    >
                      {label}
                    </NavLink>
                  ))}
                </nav>
              </div>
              <div className="pt-6 border-t border-white/10">
                <Link to="/contact" className="btn-primary w-full text-center">
                  Book Service
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
