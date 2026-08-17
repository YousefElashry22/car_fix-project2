import Hero from '../../components/Hero'
import CinematicFullBleed from '../../components/cinematic/CinematicFullBleed'
import CinematicSplitSection from '../../components/cinematic/CinematicSplitSection'
import CinematicStatement from '../../components/cinematic/CinematicStatement'
import CinematicOverlapSection from '../../components/cinematic/CinematicOverlapSection'
import StickyServiceShowcase from '../../components/cinematic/StickyServiceShowcase'
import StoryMarkers from '../../components/cinematic/StoryMarkers'
import CTA from '../../components/CTA'
import { stickyServiceItems } from '../../data/cinematicContent'

export default function Home() {
  return (
    <main className="bg-[#0A0C0F]">
      <Hero />

      <StoryMarkers />

      <CinematicOverlapSection
        number="01"
        label="PRECISION"
        title="Advanced Diagnostics"
        description="Computerized scanning reveals hidden issues before they become costly failures."
        primaryImage={import.meta.env.BASE_URL + 'images/engine.jpg'}
        secondaryImage={import.meta.env.BASE_URL + 'images/workshop.jpg'}
        primaryAlt="Engine diagnostics"
        secondaryAlt="AUTOVEX workshop"
        primaryPosition="center 40%"
        secondaryPosition="center 30%"
      />

      <StickyServiceShowcase items={stickyServiceItems} />

      <CinematicStatement
        title="Built for Performance."
        description="Every service. Every system. No compromises."
        imageSrc={import.meta.env.BASE_URL + 'images/bmw.jpg'}
        imageAlt="Performance"
        objectPosition="center 45%"
        expandReveal
      />

      <CinematicSplitSection
        number="02"
        label="BRAKES"
        title="Brake Service"
        description="Complete brake system inspection and maintenance for safe, reliable stopping."
        imageSrc={import.meta.env.BASE_URL + 'images/brakes.jpg'}
        imageAlt="Brake Service"
        layout="image-left"
        reveal="clip"
        ctaText="Book Service"
        ctaTo="/contact"
        details={['Pad & rotor inspection', 'Fluid condition check', 'ABS verification']}
      />

      <CTA
        title="Ready to take better
care of your car?"
        description="Schedule your service appointment with AUTOVEX today."
        buttonText="Book a Service →"
        buttonTo="/contact"
      />
    </main>
  )
}
