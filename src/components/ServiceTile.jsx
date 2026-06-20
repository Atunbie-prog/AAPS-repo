import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import './ServiceTile.css'

export default function ServiceTile({ icon: Icon, title, desc, index }) {
  return (
    <Link to="/services" className="service-tile">
      <span className="service-tile__index">{String(index + 1).padStart(2, '0')}</span>
      <span className="service-tile__icon" aria-hidden="true">
        <Icon size={22} strokeWidth={1.75} />
      </span>
      <h3 className="service-tile__title">{title}</h3>
      <p className="service-tile__desc">{desc}</p>
      <span className="service-tile__link">
        Learn more <ArrowRight size={15} />
      </span>
    </Link>
  )
}
