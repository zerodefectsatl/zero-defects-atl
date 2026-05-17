'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

// Each slide has a unique motion — no two feel the same
const SLIDES = [
  { src: '/images/gallery/IMG_9306.jpeg', pos: 'center 42%', kb: 'kb-zoomin',   dur: '9s'  },
  { src: '/images/gallery/IMG_8707.jpeg', pos: 'center 50%', kb: 'kb-panleft',  dur: '10s' },
  { src: '/images/gallery/apex-gt4.jpg',  pos: 'center 45%', kb: 'kb-panright', dur: '10s' },
  { src: '/images/gallery/IMG_9219.jpeg', pos: 'center 38%', kb: 'kb-zoomout',  dur: '11s' },
  { src: '/images/gallery/IMG_7437.jpeg', pos: 'center 45%', kb: 'kb-diag1',    dur: '9s'  },
  { src: '/images/gallery/IMG_8433.jpeg', pos: 'center 40%', kb: 'kb-driftup',  dur: '10s' },
  { src: '/images/gallery/IMG_7887.jpeg', pos: 'center 44%', kb: 'kb-diag2',    dur: '9s'  },
  { src: '/images/gallery/IMG_8058.jpeg', pos: 'center 42%', kb: 'kb-zoomin2',  dur: '11s' },
  { src: '/images/gallery/IMG_8556.jpeg', pos: 'center 40%', kb: 'kb-zoomin',   dur: '10s' },
]

const INTERVAL = 5500   // ms per slide
const FADE_MS  = 1400   // crossfade duration

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
        <div
          key={`prev-${prev}`}
          style={{ position: 'absolute', inset: 0, opacity: 0, transition: `opacity ${FADE_MS}ms ease` }}
        >
          <SlideFrame slide={SLIDES[prev]} active={false} />
        </div>
      )}

      {/* Current slide */}
      <div key={`cur-${cur}`} style={{ position: 'absolute', inset: 0 }}>
        <SlideFrame slide={SLIDES[cur]} active />
      </div>

      {/* Cinematic color grade */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 2,
        background: 'linear-gradient(105deg, rgba(8,10,12,0.40) 15%, rgba(8,10,12,0.08) 100%)',
        mixBlendMode: 'multiply',
      }} />
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
          filter: 'brightness(0.82) contrast(1.10) saturate(0.84)',
          animation: active ? `${slide.kb} ${slide.dur} ease-in-out forwards` : 'none',
          transformOrigin: '50% 50%',
        }}
      />
    </div>
  )
}
