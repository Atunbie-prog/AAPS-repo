import { GraduationCap, ShieldCheck, Briefcase, Target } from 'lucide-react'
import PageMeta from '../components/PageMeta.jsx'
import Hero from '../components/Hero.jsx'
import { about, practice } from '../data/content.js'
import { heroImages, sectionImages } from '../data/images.js'
import './About.css'

export default function About() {
  return (
    <>
      <PageMeta
        title="About Us"
        description="Learn about Atunbi Associates Professional Services — our story, principal, mission, and values."
      />

      <Hero
        compact
        eyebrow="About Us"
        headline="Who We Are"
        subHeadline="A practice built on accreditation, accountability, and personal attention to every client engagement."
        image={heroImages.about}
      />

      <section className="section section--card">
        <div className="container">
          <span className="eyebrow">Our Story</span>
          <h2 className="section-heading">Practice Story</h2>
          <p className="about-story prose">{about.story}</p>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container principal-grid">
          <div className="principal-grid__photo" aria-hidden="true">
            <span>Principal portrait — to be supplied</span>
          </div>
          <div className="principal-grid__details">
            <span className="eyebrow">Principal Profile</span>
            <h2 className="section-heading">{about.principal.name}</h2>
            <dl className="principal-dl">
              <div>
                <dt><GraduationCap size={16} /> Qualifications</dt>
                <dd>{about.principal.qualifications}</dd>
              </div>
              <div>
                <dt><ShieldCheck size={16} /> CAC Accreditation</dt>
                <dd>{about.principal.accreditation}</dd>
              </div>
              {about.principal.experience && (
                <div>
                  <dt><Briefcase size={16} /> Experience</dt>
                  <dd>{about.principal.experience}</dd>
                </div>
              )}
              <div>
                <dt><Target size={16} /> Specialisation</dt>
                <dd>{about.principal.specialisation}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="mission-section">
        <div className="mission-section__media" aria-hidden="true">
          <img src={sectionImages.mission} alt="" loading="lazy" />
          <div className="mission-section__scrim" />
        </div>
        <div className="container mission-section__inner">
          <span className="eyebrow">Our Mission</span>
          <h2 className="section-heading">{about.mission}</h2>
        </div>
      </section>

      <section className="section section--card">
        <div className="container">
          <span className="eyebrow">Our Values</span>
          <h2 className="section-heading" style={{ marginBottom: '2.75rem' }}>What Guides Our Work</h2>
          <div className="values-grid">
            {about.values.map((v) => (
              <div className="value-card" key={v.title}>
                <h3 className="value-card__title">{v.title}</h3>
                <p className="value-card__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
