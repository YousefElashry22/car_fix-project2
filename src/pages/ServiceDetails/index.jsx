import { useParams, Link, Navigate } from 'react-router-dom'
import { getServiceById } from '../../data/services'
import { ArrowLeft, Clock, CheckCircle2, Cpu, Disc, Droplets, CircleDot, Zap, Wind, Settings2, GitBranch } from 'lucide-react'
import PageHeader from '../../components/PageHeader'
import CTA from '../../components/CTA'

const iconMap = { Cpu, Disc, Droplets, CircleDot, Zap, Wind, Settings2, GitBranch }

export default function ServiceDetails() {
  const { serviceId } = useParams()
  const service = getServiceById(serviceId)

  if (!service) return <Navigate to="/services" replace />

  const Icon = iconMap[service.icon] || Cpu

  return (
    <main>
      <PageHeader
        badge="SERVICE DETAILS"
        title={service.title}
        description={service.shortDesc}
      />

      <section className="section-padding bg-[#0B0D0F]">
        <div className="container">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm text-[#9A9FA5] hover:text-white mb-10 transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to Services</span>
          </Link>

          {/* 60% Left / 40% Right Split Desktop */}
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Content Column (7 cols ~ 60%) */}
            <div className="lg:col-span-7 space-y-10">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#C9A86A]/10 text-[#C9A86A] flex items-center justify-center mb-6">
                  <Icon size={24} />
                </div>
                <h2 className="h2-title mb-4">
                  Overview
                </h2>
                <p className="body-text">
                  {service.description}
                </p>
              </div>

              {/* What We Check */}
              <div className="card-clean">
                <h3 className="h3-title mb-6">What We Check</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.checklist.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-[#F5F5F0]">
                      <CheckCircle2 size={16} className="text-[#C9A86A] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div className="card-clean">
                <h3 className="h3-title mb-6">Process</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {service.process.map((step) => (
                    <div key={step.step} className="flex items-start gap-4">
                      <span className="text-sm font-extrabold text-[#C9A86A] bg-[#C9A86A]/10 px-2.5 py-1 rounded">
                        {step.step}
                      </span>
                      <div>
                        <h4 className="text-base font-bold text-white mb-1">{step.title}</h4>
                        <p className="small-text">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Information Sidebar (5 cols ~ 40%) */}
            <div className="lg:col-span-5 card-clean space-y-6">
              <h3 className="h3-title">Information</h3>

              <div className="space-y-4 text-sm text-[#F5F5F0] border-b border-white/10 pb-6">
                <div className="flex items-center justify-between">
                  <span className="text-[#9A9FA5]">Estimated Time</span>
                  <span className="font-semibold text-white flex items-center gap-1.5">
                    <Clock size={14} className="text-[#C9A86A]" />
                    {service.time}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#9A9FA5]">Starting Price</span>
                  <span className="font-semibold text-[#C9A86A]">${service.price}*</span>
                </div>
              </div>

              <Link to="/booking" className="btn-primary w-full text-center">
                Book This Service
              </Link>
              <p className="small-text text-center italic">*Demo price for preview only</p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}
