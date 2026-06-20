import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import './CTASection.css'

export default function CTASection({ heading, sub, cta1, cta2 }) {
  return (
    <section className="section section--dark cta-section">
      <div className="container cta-section__inner">
        <h2 className="section-heading">{heading}</h2>
        {sub && <p className="cta-section__sub">{sub}</p>}
        <div className="cta-section__buttons">
          {cta1 && (
            <Link to={cta1.path} className="btn btn--gold">
              {cta1.label} <ArrowRight size={17} />
            </Link>
          )}
          {cta2 && (
            <Link to={cta2.path} className="btn btn--outline">
              {cta2.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
