import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, Phone, ShieldCheck } from 'lucide-react'
import { nav, practice } from '../data/content.js'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand" onClick={() => setOpen(false)}>
          <span className="navbar__mark" aria-hidden="true">
            <ShieldMark />
          </span>
          <span className="navbar__brand-text">
            <span className="navbar__name">{practice.shortName}</span>
            <span className="navbar__tagline">{practice.tagline}</span>
          </span>
        </Link>

        <nav className={`navbar__links ${open ? 'is-open' : ''}`} aria-label="Primary">
          {nav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `navbar__link ${isActive ? 'is-active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}

          <div className="navbar__mobile-extra">
            <div className="seal">
              <span className="seal__icon"><ShieldCheck size={14} /></span>
              <span className="seal__text">
                <span className="seal__label">CAC Accredited Agent</span>
                <span className="seal__value">{practice.accreditationNo}</span>
              </span>
            </div>
          </div>

          <Link to="/contact" className="btn btn--gold navbar__cta" onClick={() => setOpen(false)}>
            <Phone size={16} /> Call Now
          </Link>
        </nav>

        <button
          className={`navbar__toggle ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  )
}

function ShieldMark() {
  return (
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 2L34 8V18C34 27 28 33.5 19 36C10 33.5 4 27 4 18V8L19 2Z" fill="#0F3D24" />
      <path d="M19 5.5L30.5 10V18C30.5 25.3 25.5 30.7 19 32.7C12.5 30.7 7.5 25.3 7.5 18V10L19 5.5Z" fill="#1F6B3A" />
      <path d="M19 11L24 14V19C24 22.5 21.8 25.3 19 26.4C16.2 25.3 14 22.5 14 19V14L19 11Z" fill="#C9941E" />
    </svg>
  )
}
