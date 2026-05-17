'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

const SLIDES = [
  { src: '/images/gallery/IMG_9517.jpeg', pos: 'center 40%', kb: 'kb1' },
  { src: '/images/gallery/IMG_8707.jpeg', pos: 'center 50%', kb: 'kb4' },
  { src: '/images/gallery/IMG_9306.jpeg', pos: 'center 40%', kb: 'kb6' },
  { src: '/images/gallery/IMG_8715.jpeg', pos: 'center 45%', kb: 'kb7' },
  { src: '/images/gallery/IMG_9417.jpeg', pos: 'center 45%', kb: 'kb5' },
  { src: '/images/gallery/IMG_8556.jpeg', pos: 'center 40%', kb: 'kb2' },
  { src: '/images/gallery/IMG_7388.jpeg', pos: 'center 35%', kb: 'kb3' },
]

const INTERVAL = 5500
const FADE_MS  = 1400

export default function HeroSlider() {
  const [cur,    setCur]    = useState(0)
  const [prev,   setPrev]   = useState(null)
  const [fading, setFading] = useState(false)
  const timer = useRef(null)

  const advance = () => {
    setCur(c => {
      const next = (c + 1) % SLIDES.length
      setPrev(c)
      setFading(true)
      setTimeout(() => { setPrev(null); setFading(false) }, FADE_MS)
      return next
    })
  }

  useEffect(() => {
    timer.current = setInterval(advance, INTERVAL)
    return () => clearInterval(timer.current)
  }, [])

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      {/* Previous slide — fades out */}
      {prev !== null && (
        <div key={`prev-${prev}`} style={{ position: 'absolute', inset: 0, opacity: fading ? 0 : 1, transition: `opacity ${FADE_MS}ms ease` }}>
          <SlideFrame slide={SLIDES[prev]} active={false} />
        </div>
      )}

      {/* Current slide — always visible */}
      <div key={`cur-${cur}`} style={{ position: 'absolute', inset: 0 }}>
        <SlideFrame slide={SLIDES[cur]} active />
      </div>

      {/* Cinematic grade overlay */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 2, background: 'linear-gradient(105deg, rgba(8,10,12,0.45) 20%, rgba(8,10,12,0.12) 100%)', mixBlendMode: 'multiply' }} />
    </div>
  )
}

function SlideFrame({ slide, active }) {
  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      <Image
        src={slide.src}
        alt=""
        fill
        priority={active}
        sizes="100vw"
        style={{
          objectFit: 'cover',
          objectPosition: slide.pos,
          filter: 'brightness(0.84) contrast(1.09) saturate(0.85)',
          animation: active ? `${slide.kb} 10s ease-in-out forwards` : 'none',
          transformOrigin: '50% 50%',
        }}
      />
    </div>
  )
}
