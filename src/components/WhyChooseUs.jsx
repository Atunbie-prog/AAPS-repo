import { CheckCircle2 } from 'lucide-react'
import './WhyChooseUs.css'

export default function WhyChooseUs({ items }) {
  return (
    <ul className="why-grid">
      {items.map((item, i) => (
        <li className="why-grid__item" key={i}>
          <span className="why-grid__tick" aria-hidden="true">
            <CheckCircle2 size={20} strokeWidth={1.75} />
          </span>
          <span className="why-grid__text">{item}</span>
        </li>
      ))}
    </ul>
  )
}
