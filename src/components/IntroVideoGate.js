'use client'
import { useEffect, useRef, useState } from 'react'
import LazyVideo from './LazyVideo'

export default function IntroVideoGate() {
  const [visible, setVisible] = useState(true)
  const lockRef = useRef(null)

  useEffect(() => {
    if (!visible) return

    // Returning visitor in this session — skip the gate entirely, don't lock scroll
    let seen = false
    try { seen = !!sessionStorage.getItem('zd-intro-seen') } catch (e) {}
    if (seen) {
      setVisible(false)
      return
    }

    // Lock scroll
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'

    const blockWheel = (e) => e.preventDefault()
    const blockTouch = (e) => e.preventDefault()
    const blockKey = (e) => {
      const scrollKeys = ['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Space', ' ', 'Home', 'End']
      if (scrollKeys.includes(e.key)) e.preventDefault()
    }

    window.addEventListener('wheel', blockWheel, { passive: false })
    window.addEventListener('touchmove', blockTouch, { passive: false })
    window.addEventListener('keydown', blockKey)

    return () => {
      window.removeEventListener('wheel', blockWheel)
      window.removeEventListener('touchmove', blockTouch)
      window.removeEventListener('keydown', blockKey)
    }
  }, [visible])

  const handleDashboard = () => {
    // Release scroll immediately
    try { sessionStorage.setItem('zd-intro-seen', '1') } catch (e) {}
    document.documentElement.style.overflow = ''
    document.body.style.overflow = ''
    setVisible(false)

    // Scroll to services section
    setTimeout(() => {
      const el = document.getElementById('services')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  if (!visible) return null

  return (
    <div className="zd-video-gate zd-intro-gate">
      <LazyVideo
        src="/videos/dual-car.mp4"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />
      <button className="zd-video-gate__btn" onClick={handleDashboard}>
        Dashboard ↓
      </button>
    </div>
  )
}
