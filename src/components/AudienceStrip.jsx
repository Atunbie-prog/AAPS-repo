import { Briefcase, HandHeart, Church, Users, UsersRound } from 'lucide-react'
import { sectionImages } from '../data/images.js'
import './AudienceStrip.css'

const audiences = [
  { icon: Briefcase, label: 'SMEs & Local Businesses', image: sectionImages.smeOwner },
  { icon: HandHeart, label: 'NGOs & Foundations', image: sectionImages.ngoTeam },
  { icon: Church, label: 'Churches & Faith Organisations', image: sectionImages.church },
  { icon: Users, label: 'Cooperatives', image: sectionImages.cooperative },
  { icon: UsersRound, label: 'Associations', image: sectionImages.association },
]

export default function AudienceStrip() {
  return (
    <section className="audience-strip">
      <div className="container">
        <span className="eyebrow">Who We Serve</span>
        <h2 className="section-heading audience-strip__heading">Built for Every Kind of Organisation</h2>

        <ul className="audience-strip__list">
          {audiences.map(({ icon: Icon, label, image }) => (
            <li className="audience-strip__item" key={label}>
              <div className="audience-strip__image">
                <img src={image} alt="" loading="lazy" />
                <span className="audience-strip__icon"><Icon size={18} strokeWidth={1.75} /></span>
              </div>
              <span className="audience-strip__label">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
