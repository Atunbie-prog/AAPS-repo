import { practice } from '../data/content.js'
import './WhatsAppButton.css'

export default function WhatsAppButton() {
  const number = (practice.whatsapp || '').replace(/\D/g, '')
  const href = number
    ? `https://wa.me/${number}`
    : 'https://wa.me/' // placeholder until MD provides the WhatsApp number

  return (
    <a
      href={href}
      className="whatsapp-fab"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat on WhatsApp"
    >
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16 2.67c-7.36 0-13.33 5.97-13.33 13.33 0 2.35.62 4.56 1.7 6.47L2.67 29.33l7.06-1.65a13.27 13.27 0 0 0 6.27 1.59c7.36 0 13.33-5.97 13.33-13.33S23.36 2.67 16 2.67z"
          fill="#25D366"
        />
        <path
          d="M22.4 19.04c-.34.95-1.7 1.74-2.36 1.85-.6.1-1.36.15-2.2-.14-2.86-.97-5.66-3.78-6.63-6.63-.28-.84-.23-1.6-.14-2.2.11-.66.9-2.02 1.85-2.36.23-.08.5-.06.7.13l1.4 1.4c.16.16.2.4.1.6l-.5 1.1c-.1.22-.07.48.1.66l2.2 2.2c.18.17.44.2.66.1l1.1-.5c.2-.1.44-.06.6.1l1.4 1.4c.19.2.21.47.13.7z"
          fill="#FFFFFF"
        />
      </svg>
    </a>
  )
}
