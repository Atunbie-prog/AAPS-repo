import { Link } from 'react-router-dom'
import { Linkedin, Facebook, Instagram, ShieldCheck } from 'lucide-react'
import { practice, nav } from '../data/content.js'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__col footer__brand">
          <h3 className="footer__name">{practice.name}</h3>
          <p className="footer__tagline">{practice.tagline}</p>

          <span className="seal seal--on-dark footer__seal">
            <span className="seal__icon"><ShieldCheck size={14} /></span>
            <span className="seal__text">
              <span className="seal__label">CAC Accredited Agent</span>
              <span className="seal__value">{practice.accreditationNo}</span>
            </span>
          </span>

          <p className="footer__meta">{practice.address}</p>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Navigate</h4>
          <ul className="footer__list">
            {nav.map((item) => (
              <li key={item.path}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Contact</h4>
          <ul className="footer__list">
            <li>{practice.email || 'info@atunbiassociates.com'}</li>
            <li>{practice.phone || 'Phone available on Contact page'}</li>
            <li>{practice.address}</li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Follow</h4>
          <div className="footer__social">
            <a href={practice.social.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer">
              <Linkedin size={18} strokeWidth={1.75} />
            </a>
            <a href={practice.social.facebook} aria-label="Facebook" target="_blank" rel="noreferrer">
              <Facebook size={18} strokeWidth={1.75} />
            </a>
            <a href={practice.social.instagram} aria-label="Instagram" target="_blank" rel="noreferrer">
              <Instagram size={18} strokeWidth={1.75} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>&copy; {practice.year} {practice.name}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
