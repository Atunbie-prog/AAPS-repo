import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { practice } from '../data/content.js'
import RotatingWord from './RotatingWord.jsx'
import './Hero.css'

export default function Hero({
  eyebrow, headline, subHeadline, cta1, cta2, image, compact,
  rotatingPrefix, rotatingWords, rotatingSuffix,
}) {
  return (
    <section className={`hero ${compact ? 'hero--compact' : ''}`}>
      <div className="hero__media" aria-hidden="true">
        <img src={image} alt="" loading="eager" />
        <div className="hero__scrim" />
      </div>

      <div className="hero__inner">
        {eyebrow && <span className="hero__eyebrow">{eyebrow}</span>}

        <h1 className="hero__headline">
          {rotatingWords ? (
            <>
              {rotatingPrefix}{' '}
              <RotatingWord words={rotatingWords} />
              {rotatingSuffix}
            </>
          ) : (
            headline
          )}
        </h1>

        {subHeadline && <p className="hero__sub">{subHeadline}</p>}

        {(cta1 || cta2) && (
          <div className="hero__ctas">
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
        )}

        <div className="hero__seal">
          <span className="seal seal--on-dark">
            <span className="seal__icon"><ShieldCheck size={14} /></span>
            <span className="seal__text">
              <span className="seal__label">CAC Accredited Agent</span>
              <span className="seal__value">{practice.accreditationNo}</span>
            </span>
          </span>
        </div>
      </div>
    </section>
  )
}
