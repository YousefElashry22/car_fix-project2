import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
]

type NavbarProps = {
  onBookService?: () => void
}

export default function Navbar({ onBookService = () => window.location.assign('/contact') }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [headerTop, setHeaderTop] = useState(0)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // control mount/unmount to allow open/close animations
  useEffect(() => {
    if (isOpen) {
      setMounted(true)
    } else {
      const t = setTimeout(() => setMounted(false), 360)
      return () => clearTimeout(t)
    }
  }, [isOpen])

  // track page scroll to apply a stronger glass effect once user scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // measure header height so the mobile dropdown can start beneath it
  useEffect(() => {
    const update = () => {
      const el = document.querySelector('.site-header-inner') as HTMLElement | null
      const height = el?.getBoundingClientRect().height ?? 72
      setHeaderTop(Math.round(height))
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
        <div className="site-header-inner flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-[1.05rem] font-extrabold tracking-[-0.06em] text-white md:text-[1.2rem]">
            <span>AUTOVEX</span>
            <span className="h-2.5 w-2.5 rounded-full bg-[#d9ad5c]" aria-hidden="true" />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="nav-link text-[0.95rem] font-medium text-[#9a9da3] transition-colors duration-200 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={onBookService}
            className="header-cta group hidden items-center gap-2 rounded-xl bg-[#d9ad5c] px-4 py-2.5 text-sm font-semibold text-[#050708] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 lg:inline-flex"
          >
            <span>Book Service</span>
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
          </button>

          <button
            type="button"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white transition-colors hover:border-white/20 hover:text-[#d9ad5c] lg:hidden"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mounted && (
        <div
          className={`mobile-menu-overlay lg:hidden ${isOpen ? 'menu-open' : 'menu-closed'}`}
          style={{ top: headerTop }}
        >
          <div className="mobile-menu-panel">
            <div className="mobile-menu-header">
              <div className="flex items-center gap-2 text-lg font-extrabold text-white">
                <span>AUTOVEX</span>
                <span className="h-2 w-2 rounded-full bg-[#d9ad5c]" aria-hidden="true" />
              </div>
              <button type="button" onClick={() => setIsOpen(false)} className="mobile-menu-close">
                <X size={22} />
              </button>
            </div>

            <nav className="mobile-menu-nav">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className="mobile-menu-link"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <button
              type="button"
              onClick={() => {
                setIsOpen(false)
                onBookService()
              }}
              className="mobile-menu-button"
            >
              <span>Book Service</span>
              <span>→</span>
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
