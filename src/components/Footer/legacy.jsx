import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050708]">
      <div className="site-container flex items-center justify-between gap-4 py-4 text-[11px] md:text-[12px]">
        <Link to="/" className="flex items-center gap-2 font-extrabold tracking-[-0.05em] text-white">
          <span>AUTOVEX</span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#C9A86A]" aria-hidden="true" />
        </Link>

        <div className="text-[#8B919B]">
          <span className="mr-2">© 2026 AUTOVEX</span>
          <span>
            Designed by <span className="text-white">Yousef Elashry</span>
          </span>
        </div>
      </div>
    </footer>
  )
}
