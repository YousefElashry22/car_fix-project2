import { motion } from 'framer-motion'
import PageHeader from '../../components/PageHeader'
import SectionHeader from '../../components/SectionHeader'
import StatCard from '../../components/StatCard'
import CTA from '../../components/CTA'
import { Cpu, Shield, CheckCircle, Users } from 'lucide-react'

const stats = [
  { value: '12K+', label: 'Vehicles serviced' },
  { value: '18+', label: 'Years experience' },
  { value: '98%', label: 'Customer satisfaction' },
]

const processSteps = [
  { num: '01', title: 'Inspect', desc: 'Comprehensive multi-point vehicle evaluation.' },
  { num: '02', title: 'Diagnose', desc: 'Computerized telemetry analysis & fault detection.' },
  { num: '03', title: 'Repair', desc: 'Precision engineering service using OEM components.' },
  { num: '04', title: 'Verify', desc: 'Rigorous quality control and road testing.' },
  { num: '05', title: 'Deliver', desc: 'Detailed service report and vehicle return.' },
]

const whyItems = [
  { icon: Cpu, title: 'Advanced Diagnostics', desc: 'Modern computerized vehicle analysis.' },
  { icon: Shield, title: 'Certified Expertise', desc: 'Professional technicians and engineering-focused service.' },
  { icon: CheckCircle, title: 'Transparent Service', desc: 'Clear recommendations and straightforward pricing.' },
  { icon: Users, title: 'Genuine Quality', desc: 'High-quality parts and professional maintenance.' },
]

export default function About() {
  return (
    <main>
      <PageHeader
        badge="ABOUT AUTOVEX"
        title="Engineering Better Automotive Care"
        description="Combining computerized telemetry diagnostics, certified technicians, preventive maintenance, and data-driven vehicle care into one unified platform."
      />

      {/* Company Story (2-column editorial layout) */}
      <section className="section-padding bg-[#0B0D0F]">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="h2-title">
                Precision Maintenance & Telemetry
              </h2>
              <p className="body-text">
                AUTOVEX combines modern computerized diagnostics, professional certified technicians, preventive maintenance, and data-driven vehicle care into one unified platform.
              </p>
              <p className="small-text leading-relaxed">
                We believe vehicle service should be transparent, accurate, and stress-free. By focusing on root-cause analysis rather than temporary fixes, we keep your car performing at its peak.
              </p>
            </div>

            {/* Right Visual Image Banner (5 cols) */}
            <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative img-16-10 bg-[#121518] group">
              <img
                src="/images/workshop.jpg"
                alt="AUTOVEX Facility & Technicians"
                className="img-cover group-hover:scale-[1.03] transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0F]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-[#0B0D0F]/80 backdrop-blur-md border border-white/10">
                <div className="text-xs font-bold font-mono text-[#C9A86A]">AUTOVEX FACILITY</div>
                <div className="small-text text-white font-semibold mt-0.5">Certified Technicians & Diagnostics Center</div>
              </div>
            </div>
          </div>

          {/* Three Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((st, i) => (
              <StatCard key={st.label} {...st} delay={i * 0.05} />
            ))}
          </div>
        </div>
      </section>

      {/* Why AUTOVEX */}
      <section className="section-padding bg-[#121518] border-t border-b border-white/5">
        <div className="container">
          <SectionHeader
            badge="WHY CHOOSE US"
            title="Why AUTOVEX"
            className="mb-12"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyItems.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="card-clean p-6"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#C9A86A]/10 text-[#C9A86A] flex items-center justify-center mb-4">
                    <Icon size={20} />
                  </div>
                  <h3 className="h3-title text-lg mb-2">{item.title}</h3>
                  <p className="small-text">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-padding bg-[#0B0D0F]">
        <div className="container max-w-4xl">
          <SectionHeader
            badge="OUR PROCESS"
            title="How We Service Your Vehicle"
            className="mb-12"
          />

          <div className="space-y-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="card-clean p-5 flex items-center gap-6"
              >
                <span className="text-lg font-extrabold text-[#C9A86A] bg-[#C9A86A]/10 px-3 py-1.5 rounded-lg flex-shrink-0">
                  {step.num}
                </span>
                <div>
                  <h3 className="h3-title text-base mb-1">{step.title}</h3>
                  <p className="small-text">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}
