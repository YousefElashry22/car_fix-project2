export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-[#050708]">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-5 py-6 md:px-8 lg:px-12">
        <div className="flex items-center gap-2 text-lg font-extrabold tracking-[-0.06em] text-white">
          <span>AUTOVEX</span>
          <span className="h-2 w-2 rounded-full bg-[#d9ad5c]" aria-hidden="true" />
        </div>

        <div className="text-[0.75rem] text-[#9a9da3] md:text-sm">
          <span>Designed by</span>{' '}
          <span className="font-semibold text-white">Yousef Elashry</span>
        </div>
      </div>
    </footer>
  )
}
