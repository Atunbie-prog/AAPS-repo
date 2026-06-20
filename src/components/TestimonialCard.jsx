import { Quote } from 'lucide-react'
import './TestimonialCard.css'

export default function TestimonialCard({ name, quote }) {
  return (
    <blockquote className="testimonial-card">
      <Quote className="testimonial-card__mark" size={28} strokeWidth={1.5} aria-hidden="true" />
      <p className="testimonial-card__quote">{quote}</p>
      <footer className="testimonial-card__name">{name}</footer>
    </blockquote>
  )
}
