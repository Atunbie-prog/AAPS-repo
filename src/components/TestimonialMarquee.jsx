import { useState } from 'react'
import TestimonialCard from './TestimonialCard.jsx'
import './TestimonialMarquee.css'

// Infinite horizontal scroll. The track renders the testimonial list twice
// back-to-back and animates from 0% to -50%, which is the standard seamless
// CSS marquee technique — at -50% the second copy lines up exactly where
// the first started, so the loop reset is invisible.
export default function TestimonialMarquee({ testimonials }) {
  const [paused, setPaused] = useState(false)
  const looped = [...testimonials, ...testimonials]

  return (
    <div
      className="marquee"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="marquee__fade marquee__fade--left" aria-hidden="true" />
      <div className="marquee__fade marquee__fade--right" aria-hidden="true" />

      <div className={`marquee__track ${paused ? 'is-paused' : ''}`}>
        {looped.map((t, i) => (
          <div className="marquee__item" key={i} aria-hidden={i >= testimonials.length}>
            <TestimonialCard name={t.name} quote={t.quote} />
          </div>
        ))}
      </div>
    </div>
  )
}
