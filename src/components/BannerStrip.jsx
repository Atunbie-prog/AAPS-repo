import { Link } from 'react-router-dom'
import { AlertCircle, ArrowRight } from 'lucide-react'
import './BannerStrip.css'

export default function BannerStrip({ text }) {
  return (
    <div className="banner-strip">
      <div className="container banner-strip__inner">
        <span className="banner-strip__icon" aria-hidden="true">
          <AlertCircle size={20} strokeWidth={2} />
        </span>
        <p className="banner-strip__text">{text}</p>
        <Link to="/contact" className="banner-strip__link">
          Get Help Now <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  )
}
