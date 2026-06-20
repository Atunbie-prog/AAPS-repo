import { MapPin, Phone, Mail, Clock, MessageCircle, Linkedin, Facebook, Instagram } from 'lucide-react'
import PageMeta from '../components/PageMeta.jsx'
import Hero from '../components/Hero.jsx'
import ContactForm from '../components/ContactForm.jsx'
import { practice } from '../data/content.js'
import { heroImages } from '../data/images.js'
import './Contact.css'

export default function Contact() {
  const number = (practice.whatsapp || '').replace(/\D/g, '')
  const waHref = number ? `https://wa.me/${number}` : 'https://wa.me/'

  return (
    <>
      <PageMeta
        title="Contact Us"
        description="Get in touch with Atunbi Associates Professional Services — phone, WhatsApp, email, or the contact form."
      />

      <Hero
        compact
        eyebrow="Contact Us"
        headline="Let's Talk About What You Need"
        subHeadline="Tell us what you need — we will respond within 24 hours with exactly how we can help."
        image={heroImages.contact}
      />

      <section className="section section--card">
        <div className="container contact-grid">
          <div className="contact-grid__form">
            <h2 className="section-heading" style={{ marginBottom: '1.75rem' }}>Send an Enquiry</h2>
            <ContactForm />
          </div>

          <div className="contact-grid__details">
            <div className="contact-detail-card">
              <span className="contact-detail-card__icon"><MapPin size={18} strokeWidth={1.75} /></span>
              <div>
                <h3>Office Address</h3>
                <p>{practice.address}</p>
              </div>
            </div>
            <div className="contact-detail-card">
              <span className="contact-detail-card__icon"><Phone size={18} strokeWidth={1.75} /></span>
              <div>
                <h3>Phone</h3>
                <p>{practice.phone || 'To be confirmed'}</p>
              </div>
            </div>
            <div className="contact-detail-card">
              <span className="contact-detail-card__icon"><Mail size={18} strokeWidth={1.75} /></span>
              <div>
                <h3>Email</h3>
                <p>{practice.email || 'To be confirmed'}</p>
              </div>
            </div>
            <div className="contact-detail-card">
              <span className="contact-detail-card__icon"><Clock size={18} strokeWidth={1.75} /></span>
              <div>
                <h3>Office Hours</h3>
                {practice.officeHours.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>

            <a href={waHref} target="_blank" rel="noreferrer" className="btn btn--green btn--block contact-whatsapp-btn">
              <MessageCircle size={17} /> Chat on WhatsApp
            </a>

            <div className="contact-map" aria-label="Map placeholder">
              <span>Map embed — office location in Ikotun, Lagos</span>
            </div>

            <div className="contact-social">
              <a href={practice.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href={practice.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={18} /></a>
              <a href={practice.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
