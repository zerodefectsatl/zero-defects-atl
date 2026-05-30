'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ServiceCarousel({ slides, alt }) {
  const [idx, setIdx] = useState(0)
  const total = slides.length

  const go = (next) => setIdx((next + total) % total)

  return (
    <div className="zd-ppf-carousel">
      {slides.map((s, i) => (
        <div
          key={s.src}
          className="zd-ppf-carousel__slide"
          style={{
            opacity: i === idx ? 1 : 0,
            pointerEvents: i === idx ? 'auto' : 'none',
          }}
          aria-hidden={i !== idx}
        >
          <Image
            src={s.src}
            alt={`${alt} — ${s.label}`}
            fill
            style={{
              objectFit: 'cover',
              objectPosition: s.position || 'center center',
            }}
            sizes="(max-width:768px) 100vw, 50vw"
            priority={i === 0}
          />
          <div className="zd-ppf-carousel__caption">
            <span className="zd-ppf-carousel__step">Step {i + 1} of {total}</span>
            <span className="zd-ppf-carousel__label">{s.label}</span>
          </div>
        </div>
      ))}

      {/* Prev / Next buttons */}
      <button
        type="button"
        className="zd-ppf-carousel__btn zd-ppf-carousel__btn--prev"
        onClick={() => go(idx - 1)}
        aria-label="Previous photo"
      >
        &#8592;
      </button>
      <button
        type="button"
        className="zd-ppf-carousel__btn zd-ppf-carousel__btn--next"
        onClick={() => go(idx + 1)}
        aria-label="Next photo"
      >
        &#8594;
      </button>

      {/* Dot indicators */}
      <div className="zd-ppf-carousel__dots" role="tablist" aria-label="Slides">
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            className={`zd-ppf-carousel__dot${i === idx ? ' is-active' : ''}`}
            onClick={() => setIdx(i)}
            aria-label={`Go to slide ${i + 1}: ${s.label}`}
            aria-selected={i === idx}
            role="tab"
          />
        ))}
      </div>
    </div>
  )
}
