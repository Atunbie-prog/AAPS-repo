import {
  FileText, CalendarCheck, HeartHandshake, Building2,
  Calculator, Landmark, BadgeCheck, ClipboardList,
} from 'lucide-react'
import PageMeta from '../components/PageMeta.jsx'
import Hero from '../components/Hero.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import BannerStrip from '../components/BannerStrip.jsx'
import ServiceTile from '../components/ServiceTile.jsx'
import CTASection from '../components/CTASection.jsx'
import TestimonialMarquee from '../components/TestimonialMarquee.jsx'
import AudienceStrip from '../components/AudienceStrip.jsx'
import { home } from '../data/content.js'
import { heroImages, sectionImages } from '../data/images.js'
import './Home.css'

const TILE_ICONS = [
  FileText, CalendarCheck, HeartHandshake, Building2,
  Calculator, Landmark, BadgeCheck, ClipboardList,
]

export default function Home() {
  return (
    <>
      <PageMeta
        title="Home"
        description="CAC accredited agency and financial management practice serving businesses, NGOs, churches, cooperatives, and associations across Nigeria."
      />

      <Hero
        eyebrow="CAC Accredited Agency"
        rotatingPrefix="Your Business. Properly"
        rotatingWords={['Registered.', 'Compliant.', 'Secured.', 'Funded.']}
        subHeadline={home.hero.subHeadline}
        cta1={home.hero.cta1}
        cta2={home.hero.cta2}
        image={heroImages.home}
      />

      <AudienceStrip />

      <section className="section section--card intro-section">
        <div className="container">
          <p className="intro-section__text prose">{home.intro}</p>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <span className="eyebrow">Why Choose Us</span>
          <h2 className="section-heading">Built on accreditation and accountability</h2>
          <WhyChooseUs items={home.whyChooseUs} />
        </div>
      </section>

      <BannerStrip text={home.complianceBanner} />

      <section className="section section--card">
        <div className="container">
          <span className="eyebrow">What We Do</span>
          <h2 className="section-heading">Services at a Glance</h2>
          <p className="section-sub" style={{ marginBottom: '3rem' }}>
            End-to-end professional support — from incorporation to ongoing compliance.
          </p>
          <div className="service-tile-grid">
            {home.serviceTiles.map((tile, i) => (
              <ServiceTile key={tile.title} icon={TILE_ICONS[i]} title={tile.title} desc={tile.desc} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--card">
        <div className="container closing-section">
          <div className="closing-section__image">
            <img src={sectionImages.growth} alt="Team reviewing business growth documents" loading="lazy" />
          </div>
          <div className="closing-section__text">
            <span className="eyebrow">Long-Term Partnership</span>
            <h2 className="section-heading">{home.closing.heading}</h2>
            <p className="closing-section__body">{home.closing.body}</p>
          </div>
        </div>
      </section>

      <CTASection
        heading={home.ctaSection.heading}
        sub={home.ctaSection.sub}
        cta1={home.ctaSection.cta1}
        cta2={home.ctaSection.cta2}
      />

      <section className="section section--card testimonial-section">
        <div className="container">
          <span className="eyebrow">What Clients Say</span>
          <h2 className="section-heading" style={{ marginBottom: '2.75rem' }}>Testimonials</h2>
        </div>
        <div className="full-bleed">
          <TestimonialMarquee testimonials={home.testimonials} />
        </div>
      </section>
    </>
  )
}
