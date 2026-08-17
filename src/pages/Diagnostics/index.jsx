import PageHeader from '../../components/PageHeader'
import DiagnosticCard from '../../components/DiagnosticCard'
import CTA from '../../components/CTA'
import { CheckCircle2, AlertCircle } from 'lucide-react'

const healthMetrics = [
  { title: 'Engine Health', percentage: 94 },
  { title: 'Battery', percentage: 91 },
  { title: 'Brakes', percentage: 87 },
  { title: 'Tires', percentage: 82 },
  { title: 'Oil Life', percentage: 68 },
]

const recentDiagnostics = [
  { title: 'Engine', status: 'No critical issues', healthy: true },
  { title: 'Battery', status: 'Healthy', healthy: true },
  { title: 'Brake System', status: 'Maintenance recommended', healthy: false },
  { title: 'Tires', status: 'Rotation recommended', healthy: false },
]

export default function Diagnostics() {
  return (
    <main>
      <PageHeader
        badge="DIAGNOSTICS"
        title="Vehicle Diagnostics"
        description="See what's happening under the hood."
      />

      <section className="section-padding bg-[#0B0D0F]">
        <div className="container">
          {/* Dashboard Card */}
          <div className="card-clean max-w-4xl mx-auto space-y-8">
            {/* Header info */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <span className="small-text uppercase font-medium">Active Vehicle</span>
                <h3 className="h3-title text-[#F5F5F0]">2024 Performance Sedan</h3>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C9A86A]/10 border border-[#C9A86A]/30 text-[#C9A86A] text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#C9A86A] animate-pulse" />
                SYSTEM STATUS: HEALTHY
              </div>
            </div>

            {/* Health Bars Grid */}
            <div className="space-y-6">
              <h3 className="h3-title">System Health Indicators</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {healthMetrics.map(m => (
                  <DiagnosticCard key={m.title} title={m.title} percentage={m.percentage} />
                ))}
              </div>
            </div>

            {/* Recent Diagnostics List */}
            <div className="pt-6 border-t border-white/10">
              <h3 className="h3-title mb-4">Recent Diagnostics</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {recentDiagnostics.map(item => (
                  <div
                    key={item.title}
                    className="p-4 rounded-lg bg-[#121518] border border-white/5 flex items-center justify-between"
                  >
                    <div>
                      <div className="text-sm font-bold text-[#F5F5F0]">{item.title}</div>
                      <div className="small-text">{item.status}</div>
                    </div>
                    {item.healthy ? (
                      <CheckCircle2 size={18} className="text-[#C9A86A] flex-shrink-0" />
                    ) : (
                      <AlertCircle size={18} className="text-[#EF4444] flex-shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}
