'use client'

import { useEffect, useRef } from 'react'

/**
 * Parallax wrapper for elements inside a scroll-tile (.tile-scroll).
 * The child moves at a slower rate than the scroll, creating depth.
 *
 * Props:
 *  - speed: 0 = fixed (no movement), 0.5 = half speed, 1 = normal (default 0.4)
 *  - className, style: passed through to the wrapper div
 */
export default function ParallaxScroller({ speed = 0.4, className, style, children }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const scroller = el.closest('.tile-scroll') || el.closest('[style*="overflow"]')
    if (!scroller) return

    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        const scrollerRect = scroller.getBoundingClientRect()
        const offset = rect.top - scrollerRect.top
        const shift = offset * (1 - speed) * -1
        el.style.transform = `translateY(${shift}px)`
        ticking = false
      })
    }

    scroller.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => scroller.removeEventListener('scroll', onScroll)
  }, [speed])

  return (
    <div ref={ref} className={className} style={{ willChange: 'transform', ...style }}>
      {children}
    </div>
  )
}
