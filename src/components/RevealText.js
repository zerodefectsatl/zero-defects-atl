'use client'

import { useEffect, useRef } from 'react'

export default function RevealText({ children, style, tag: Tag = 'p' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.rl').forEach((letter, i) => {
            setTimeout(() => {
              letter.style.opacity = '1'
              letter.style.transform = 'translateY(0)'
            }, i * 22)
          })
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const words = (typeof children === 'string' ? children : '').split(' ')
  let charIndex = 0

  return (
    <Tag ref={ref} style={style}>
      {words.map((word, wi) => (
        <span
          key={wi}
          style={{ display: 'inline-block', whiteSpace: 'nowrap', marginRight: '0.28em' }}
        >
          {word.split('').map((char) => {
            const idx = charIndex++
            return (
              <span
                key={idx}
                className="rl"
                style={{
                  display: 'inline-block',
                  opacity: 0,
                  transform: 'translateY(18px)',
                  transition: 'opacity 0.55s ease, transform 0.55s cubic-bezier(0.23, 1, 0.32, 1)',
                }}
              >
                {char}
              </span>
            )
          })}
        </span>
      ))}
    </Tag>
  )
}
