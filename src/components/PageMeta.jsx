import { useEffect } from 'react'

// Lightweight per-page title/meta handler (no external dependency needed).
export default function PageMeta({ title, description }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | Atunbi Associates Professional Services` : document.title
    document.title = fullTitle

    if (description) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', 'description')
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', description)
    }
  }, [title, description])

  return null
}
