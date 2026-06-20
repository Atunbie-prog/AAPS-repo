import { useState, useEffect } from 'react'
import './RotatingWord.css'

// Cycles through a list of words with a fade transition, every `interval` ms.
// Respects prefers-reduced-motion by simply not animating (first word stays static).
export default function RotatingWord({ words, interval = 5000 }) {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (words.length <= 1) return undefined

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return undefined

    const timer = setInterval(() => {
      setVisible(false)
      const fadeOut = setTimeout(() => {
        setIndex((i) => (i + 1) % words.length)
        setVisible(true)
      }, 280)
      return () => clearTimeout(fadeOut)
    }, interval)

    return () => clearInterval(timer)
  }, [words, interval])

  return (
    <span className="rotating-word">
      <span className={`rotating-word__inner ${visible ? 'is-visible' : 'is-hidden'}`}>
        {words[index]}
      </span>
    </span>
  )
}
