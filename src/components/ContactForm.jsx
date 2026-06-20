import { useState } from 'react'
import { contactPage } from '../data/content.js'
import './ContactForm.css'

const initialState = {
  fullName: '',
  phone: '',
  email: '',
  entity: '',
  serviceRequired: '',
  message: '',
}

export default function ContactForm() {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  function validate() {
    const next = {}
    if (!values.fullName.trim()) next.fullName = 'Full name is required.'
    if (!values.phone.trim()) next.phone = 'Phone number is required.'
    if (!values.email.trim()) {
      next.email = 'Email address is required.'
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      next.email = 'Enter a valid email address.'
    }
    if (!values.message.trim()) next.message = 'Please tell us what you need.'
    return next
  }

  function handleSubmit(e) {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length === 0) {
      // NOTE: wire this up to your form backend / API endpoint of choice
      // (e.g. Formspree, EmailJS, or a custom serverless function) so
      // enquiries reach the business email automatically.
      setSubmitted(true)
      setValues(initialState)
    }
  }

  if (submitted) {
    return (
      <div className="contact-form__success" role="status">
        <p>{contactPage.afterSubmitMessage}</p>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__field">
        <label htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          value={values.fullName}
          onChange={handleChange}
          aria-invalid={!!errors.fullName}
        />
        {errors.fullName && <span className="contact-form__error">{errors.fullName}</span>}
      </div>

      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={handleChange}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <span className="contact-form__error">{errors.phone}</span>}
        </div>

        <div className="contact-form__field">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
          />
          {errors.email && <span className="contact-form__error">{errors.email}</span>}
        </div>
      </div>

      <div className="contact-form__field">
        <label htmlFor="entity">Entity / Business Name <span className="contact-form__optional">(optional)</span></label>
        <input id="entity" name="entity" type="text" value={values.entity} onChange={handleChange} />
      </div>

      <div className="contact-form__field">
        <label htmlFor="serviceRequired">Service Required</label>
        <select id="serviceRequired" name="serviceRequired" value={values.serviceRequired} onChange={handleChange}>
          <option value="">Select a service</option>
          {contactPage.serviceOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div className="contact-form__field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          aria-invalid={!!errors.message}
        />
        {errors.message && <span className="contact-form__error">{errors.message}</span>}
      </div>

      <button type="submit" className="btn btn--amber btn--block">
        Send Enquiry
      </button>
    </form>
  )
}
