'use client'

import { useState, useEffect } from 'react'
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

// Hold each slide long enough for its Ken Burns move (max 6s) to finish before
// the crossfade to the next one begins.
const INTERVAL = 6000
const FADE_MS  = 1000

export default function HeroSlider() {
  // cur = visible slide, prev = outgoing slide still fading underneath (null when settled).
  // Both indices are derived from prior state in one pure updater — no side effects in the updater.
  const [{ cur, prev }, setState] = useState({ cur: 0, prev: null })

  useEffect(() => {
    const id = setInterval(() => {
      setState(s => ({ cur: (s.cur + 1) % SLIDES.length, prev: s.cur }))
    }, INTERVAL)
    return () => clearInterval(id)
  }, [])

  // Once the incoming slide has finished fading in, drop the outgoing layer.
  useEffect(() => {
    if (prev === null) return
    const t = setTimeout(() => setState(s => ({ ...s, prev: null })), FADE_MS)
    return () => clearTimeout(t)
  }, [cur, prev])

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      {/* Outgoing slide — stays fully opaque underneath while the incoming fades in over it */}
      {prev !== null && (
        <div key={`prev-${prev}`} style={{ position: 'absolute', inset: 0 }}>
          <SlideFrame slide={SLIDES[prev]} active={false} />
        </div>
      )}

      {/* Incoming slide — fades 0→1 on mount. A CSS keyframe animates on mount;
          a `transition` would not, because the element is born at its target opacity. */}
      <div
        key={`cur-${cur}`}
        style={{
          position: 'absolute', inset: 0,
          animation: prev !== null ? `zd-hero-fade ${FADE_MS}ms ease forwards` : 'none',
        }}
      >
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
