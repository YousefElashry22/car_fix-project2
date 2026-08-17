import PageHeader from '../../components/PageHeader'
import MaintenanceCard from '../../components/MaintenanceCard'
import CTA from '../../components/CTA'

const maintenanceTimeline = [
  {
    title: 'Oil Change',
    date: 'August 12, 2026',
    system: 'Engine System',
    action: 'Synthetic oil replacement & filter change completed.',
    status: 'completed',
  },
  {
    title: 'Brake Inspection',
    date: 'September 15, 2026',
    system: 'Brake System',
    action: 'Brake pad thickness & rotor surface inspection scheduled.',
    status: 'upcoming',
  },
  {
    title: 'Tire Rotation',
    date: 'October 02, 2026',
    system: 'Wheel Assembly',
    action: 'Recommended 4-wheel rotation and balancing.',
    status: 'recommended',
  },
]

export default function Maintenance() {
  return (
    <main>
      <PageHeader
        badge="MAINTENANCE INTELLIGENCE"
        title="Maintenance Intelligence"
        description="Know what your vehicle needs before it becomes a problem."
      />

      <section className="section-padding bg-[#0B0D0F]">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Health Score Card (4 cols) */}
            <div className="lg:col-span-4 card-clean text-center space-y-4">
              <span className="small-text uppercase font-medium">Overall Vehicle Health Score</span>
              <div className="text-5xl font-extrabold text-[#C9A86A]">
                87 <span className="text-xl text-[#9A9FA5] font-normal">/ 100</span>
              </div>
              <div className="inline-block px-3 py-1 rounded-full bg-[#C9A86A]/10 border border-[#C9A86A]/30 text-[#C9A86A] text-xs font-bold uppercase tracking-wider">
                GOOD CONDITION
              </div>
              <p className="small-text pt-2 border-t border-white/5">
                Calculated based on diagnostic history & component wear algorithms. (Demo data)
              </p>
            </div>

            {/* Timeline Cards (8 cols) */}
            <div className="lg:col-span-8 space-y-4">
              <h3 className="h3-title mb-2">Service History & Schedule</h3>
              {maintenanceTimeline.map((item, index) => (
                <MaintenanceCard key={item.title} {...item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}
