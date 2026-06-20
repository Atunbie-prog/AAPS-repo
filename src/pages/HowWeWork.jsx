import PageMeta from '../components/PageMeta.jsx'
import Hero from '../components/Hero.jsx'
import { howWeWork } from '../data/content.js'
import { heroImages } from '../data/images.js'
import './HowWeWork.css'

export default function HowWeWork() {
  return (
    <>
      <PageMeta
        title="How We Work"
        description="A clear, step-by-step process — from enquiry to ongoing compliance support."
      />

      <Hero
        compact
        eyebrow="Our Process"
        headline="How We Work"
        subHeadline="Engaging us is straightforward. Here is exactly what happens from your first enquiry to ongoing compliance support."
        image={heroImages.howWeWork}
      />

      <section className="section section--card">
        <div className="container">
          <ol className="step-flow">
            {howWeWork.map((item) => (
              <li className="step-flow__item" key={item.step}>
                <div className="step-flow__number">{String(item.step).padStart(2, '0')}</div>
                <div className="step-flow__content">
                  <h2 className="step-flow__title">{item.title}</h2>
                  <p className="step-flow__desc">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
