import type { LucideIcon } from 'lucide-react'

type BenefitItemProps = {
  icon: LucideIcon
  title: string
  subtitle: string
  delay?: number
}

export default function BenefitItem({ icon: Icon, title, subtitle, delay = 0 }: BenefitItemProps) {
  return (
    <div
      className="benefit-item flex items-center gap-4 rounded-[14px] border border-white/5 bg-white/[0.01] px-4 py-4 md:min-h-[100px] md:px-7"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d9ad5c]/40 bg-[#d9ad5c]/8 text-[#d9ad5c]">
        <Icon className="h-4 w-4" />
      </div>
      <div className="leading-none">
        <div className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-[#9a9da3] md:text-[0.75rem]">
          {title}
        </div>
        <div className="mt-1 text-sm font-semibold tracking-[-0.02em] text-white md:text-base">
          {subtitle}
        </div>
      </div>
    </div>
  )
}
