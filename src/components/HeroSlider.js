'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

const SLIDES = [
  { src: '/images/gallery/IMG_9306.jpeg', pos: '38% 72%', kb: 'kb-pullback',  dur: '6s', alt: 'White Corvette Z06 — ceramic coating by Zero Defects ATL, Braselton GA' },
  { src: '/images/gallery/IMG_8707.jpeg', pos: '50% 60%', kb: 'kb-panleft',   dur: '5s', alt: 'Red Ferrari 488 — paint protection film by Zero Defects ATL' },
  { src: '/images/gallery/IMG_6130.jpeg', pos: '48% 62%', kb: 'kb-zoomin',    dur: '6s', alt: 'APEX GT4 custom art wrap — Zero Defects ATL' },
  { src: '/images/gallery/IMG_9219.jpeg', pos: '68% 72%', kb: 'kb-panright',  dur: '5s', alt: 'Grey Ferrari 296 — ceramic coating detail, Zero Defects ATL' },
  { src: '/images/gallery/IMG_7437.jpeg', pos: '58% 68%', kb: 'kb-diag1',     dur: '6s', alt: 'Matte black Audi R8 — PPF and ceramic coating, Zero Defects ATL' },
  { src: '/images/gallery/IMG_8433.jpeg', pos: '38% 64%', kb: 'kb-driftup',   dur: '5s', alt: 'Matte black Aston Martin — paint protection film by Zero Defects ATL' },
  { src: '/images/gallery/IMG_7887.jpeg', pos: '36% 50%', kb: 'kb-zoomout',   dur: '6s', alt: 'Color-shift Corvette — ceramic coating showcase, Zero Defects ATL' },
  { src: '/images/gallery/IMG_8058.jpeg', pos: '55% 64%', kb: 'kb-diag2',     dur: '5s', alt: 'Red Corvette E-Ray — PPF full front, Zero Defects ATL Braselton' },
  { src: '/images/gallery/IMG_8556.jpeg', pos: '40% 48%', kb: 'kb-zoomin2',   dur: '6s', alt: 'Gold Bentley Bentayga — ceramic coating by Zero Defects ATL' },
]

const INTERVAL = 4000
const FADE_MS  = 1000

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
      {prev !== null && (
        <div
          key={`prev-${prev}`}
          style={{ position: 'absolute', inset: 0, opacity: 0, transition: `opacity ${FADE_MS}ms ease` }}
        >
          <SlideFrame slide={SLIDES[prev]} active={false} />
        </div>
      )}

      <div key={`cur-${cur}`} style={{ position: 'absolute', inset: 0 }}>
        <SlideFrame slide={SLIDES[cur]} active />
      </div>
    </div>
  )
}

function SlideFrame({ slide, active }) {
  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      <Image
        src={slide.src}
        alt={slide.alt}
        fill
        priority={active}
        quality={90}
        sizes="100vw"
        style={{
          objectFit: 'cover',
          objectPosition: slide.pos,
          filter: 'brightness(0.96) contrast(1.05) saturate(0.92)',
          animation: active ? `${slide.kb} ${slide.dur} ease-in-out forwards` : 'none',
          transformOrigin: '50% 50%',
        }}
      />
    </div>
  )
}
