'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Footer from '@/components/Footer'

/* ─── All automotive projects ─────────── */
const allWork = [
  { img: '/images/gallery/IMG_9439.jpeg', vehicle: 'Porsche 911 GT2 RS', service: 'Crystal Serum Ultra · XPEL Ultimate', tag: 'Coating + PPF' },
  { img: '/images/gallery/IMG_8518.jpeg', vehicle: 'Porsche 911 GT3 RS', service: 'Crystal Serum Ultra · Paint Correction', tag: 'Coating' },
  { img: '/images/gallery/IMG_8882.jpeg', vehicle: 'Porsche 911 GTS e-Hybrid', service: 'XPEL Ultimate Plus · Full PPF', tag: 'PPF' },
  { img: '/images/gallery/IMG_8880.jpeg', vehicle: 'Porsche 911 GTS e-Hybrid', service: 'PPF Installation Detail', tag: 'PPF' },
  { img: '/images/gallery/IMG_7388.jpeg', vehicle: 'Porsche Cayenne GTS', service: 'Crystal Serum Ultra · Paint Correction', tag: 'Coating' },
  { img: '/images/gallery/IMG_6130.jpeg', vehicle: 'Porsche 718 Cayman GT4', service: 'Custom Art Wrap · Paint Protection', tag: 'Wrap' },
  { img: '/images/gallery/IMG_7409.jpeg', vehicle: 'Audi R8 V10', service: 'XPEL Stealth Matte PPF', tag: 'PPF' },
  { img: '/images/gallery/IMG_7437.jpeg', vehicle: 'Audi R8 V10', service: 'XPEL Stealth Matte PPF', tag: 'PPF' },
  { img: '/images/gallery/IMG_7402.jpeg', vehicle: 'Audi R8 V10', service: 'XPEL Stealth · In Progress', tag: 'PPF' },
  { img: '/images/gallery/IMG_7392.jpeg', vehicle: 'Audi R8 V10', service: 'XPEL Stealth Matte PPF', tag: 'PPF' },
  { img: '/images/gallery/IMG_7398.jpeg', vehicle: 'Audi R8 V10', service: 'PPF Installation Detail', tag: 'PPF' },
  { img: '/images/gallery/IMG_7399.jpeg', vehicle: 'Audi R8 V10', service: 'PPF Installation Detail', tag: 'PPF' },
  { img: '/images/gallery/IMG_7400.jpeg', vehicle: 'Audi R8 V10', service: 'XPEL Stealth · In Progress', tag: 'PPF' },
  { img: '/images/gallery/IMG_7405.jpeg', vehicle: 'Audi R8 V10', service: 'XPEL Stealth · Detail View', tag: 'PPF' },
  { img: '/images/gallery/IMG_9517.jpeg', vehicle: 'Audi R8 V10 Performance', service: 'Crystal Serum Ultra · PPF', tag: 'Coating + PPF' },
  { img: '/images/gallery/IMG_9219.jpeg', vehicle: 'Ferrari 296 GTS', service: 'Full PPF · Ceramic Coating', tag: 'Coating + PPF' },
  { img: '/images/gallery/IMG_8707.jpeg', vehicle: 'Ferrari 488 Spider', service: 'XPEL Ultimate · Paint Correction', tag: 'PPF' },
  { img: '/images/gallery/IMG_9306.jpeg', vehicle: 'Corvette Z06', service: 'XPEL Ultimate Plus · Full PPF', tag: 'PPF' },
  { img: '/images/gallery/IMG_8054.jpeg', vehicle: 'Corvette Z06', service: 'Crystal Serum Ultra · Paint Correction', tag: 'Coating' },
  { img: '/images/gallery/IMG_8058.jpeg', vehicle: 'Corvette Z06', service: 'Crystal Serum Ultra · XPEL Ultimate', tag: 'Coating + PPF' },
  { img: '/images/gallery/IMG_9417.jpeg', vehicle: 'Corvette E-Ray', service: 'Crystal Serum Ultra · PPF', tag: 'Coating + PPF' },
  { img: '/images/gallery/IMG_7887.jpeg', vehicle: 'Corvette C8', service: 'Color Shift Vinyl Wrap', tag: 'Wrap' },
  { img: '/images/gallery/IMG_8433.jpeg', vehicle: 'Aston Martin DB11', service: 'XPEL Stealth Full PPF', tag: 'PPF' },
  { img: '/images/gallery/IMG_8434.jpeg', vehicle: 'Aston Martin DB11', service: 'XPEL Stealth Full PPF', tag: 'PPF' },
  { img: '/images/gallery/IMG_8427.jpeg', vehicle: 'Aston Martin DB11', service: 'PPF Installation', tag: 'PPF' },
  { img: '/images/gallery/IMG_8859.jpeg', vehicle: 'Aston Martin Vantage GT4', service: 'Race Livery Vinyl Wrap', tag: 'Wrap' },
  { img: '/images/gallery/IMG_8856.jpeg', vehicle: 'Aston Martin Vantage GT4', service: 'Race Livery · In Progress', tag: 'Wrap' },
  { img: '/images/gallery/IMG_8851.jpeg', vehicle: 'Aston Martin Vantage GT4', service: 'Race Livery · In Progress', tag: 'Wrap' },
  { img: '/images/gallery/IMG_8575.jpeg', vehicle: 'Bentley Bentayga S', service: 'Crystal Serum Ultra · Full PPF', tag: 'Coating + PPF' },
  { img: '/images/gallery/IMG_8556.jpeg', vehicle: 'Bentley Bentayga S', service: 'Crystal Serum Ultra · Full PPF', tag: 'Coating + PPF' },
  { img: '/images/gallery/IMG_8718.jpeg', vehicle: 'Cadillac CT5-V Blackwing', service: 'Crystal Serum Ultra', tag: 'Coating' },
  { img: '/images/gallery/IMG_8715.jpeg', vehicle: 'Cadillac CT5-V Blackwing', service: 'Crystal Serum Ultra', tag: 'Coating' },
  { img: '/images/gallery/IMG_5864.jpeg', vehicle: 'Mercedes-AMG E63 S', service: 'Crystal Serum Ultra · Matte PPF', tag: 'Coating + PPF' },
  { img: '/images/gallery/IMG_7885.jpeg', vehicle: 'BMW M5', service: 'XPEL Ultimate Plus · Full PPF', tag: 'PPF' },
  { img: '/images/gallery/IMG_8513.jpeg', vehicle: 'Tesla Model Y', service: 'XPEL Ultimate Plus · PPF', tag: 'PPF' },
  { img: '/images/gallery/IMG_8143.jpeg', vehicle: 'Tesla Model S', service: 'Crystal Serum Ultra · Paint Correction', tag: 'Coating' },
  { img: '/images/gallery/IMG_7531.jpeg', vehicle: 'GMC Sierra 2500HD Denali', service: 'XPEL Ultimate Plus · Full PPF', tag: 'PPF' },
  { img: '/images/gallery/IMG_7530.jpeg', vehicle: 'GMC Sierra 2500HD Denali', service: 'XPEL Ultimate Plus · Full PPF', tag: 'PPF' },
  { img: '/images/gallery/IMG_7573.jpeg', vehicle: 'Ford F-250 Super Duty', service: 'Crystal Serum Ultra · Paint Correction', tag: 'Coating' },
  { img: '/images/gallery/IMG_1486.jpeg', vehicle: 'Dodge Ram SRT-10', service: 'Paint Correction · Ceramic Coating', tag: 'Coating' },
  { img: '/images/gallery/IMG_8146.jpeg', vehicle: 'Jeep Wrangler Rubicon', service: 'Crystal Serum Ultra · Full PPF', tag: 'Coating + PPF' },
  { img: '/images/gallery/IMG_6951.jpeg', vehicle: 'Kia Telluride', service: 'Matte Black Vinyl Wrap', tag: 'Wrap' },
  { img: '/images/gallery/IMG_6952.jpeg', vehicle: 'Kia Telluride', service: 'Matte Black Vinyl Wrap · Detail', tag: 'Wrap' },
  { img: '/images/gallery/IMG_5979.jpeg', vehicle: '1961 Chevrolet Corvette', service: 'Crystal Serum Ultra · Paint Correction', tag: 'Coating' },
  { img: '/images/gallery/IMG_5920.jpeg', vehicle: '1965 Ford Mustang', service: 'Paint Correction · Ceramic Coating', tag: 'Coating' },
  { img: '/images/gallery/IMG_8822.jpeg', vehicle: 'Ford Mustang SVT Cobra', service: 'Crystal Serum Ultra · Paint Correction', tag: 'Coating' },
  { img: '/images/gallery/IMG_6937.jpeg', vehicle: 'Dodge Charger', service: 'XPEL Ultimate Plus · Full PPF', tag: 'PPF' },
  { img: '/images/gallery/IMG_6940.jpeg', vehicle: 'Vinyl Wrap Installation', service: 'Full Vehicle Vinyl Wrap', tag: 'Wrap' },
]

const tagColor = {
  'PPF': '#1a8fff',
  'Coating': '#00e5a0',
  'Coating + PPF': '#a855f7',
  'Wrap': '#f59e0b',
}

const LIME = '#eaff00'
const BLUE = '#1a8fff'
const DISPLAY = 'var(--font-bebas-neue), Manrope, sans-serif'

export default function Gallery() {
  const [selected, setSelected] = useState(null)

  // While the lightbox is open: Esc closes, ← / → step through, and the
  // background scroll is locked.
  useEffect(() => {
    if (selected === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setSelected(null)
      else if (e.key === 'ArrowLeft') setSelected((s) => Math.max(0, s - 1))
      else if (e.key === 'ArrowRight') setSelected((s) => Math.min(allWork.length - 1, s + 1))
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [selected])

  return (
    <main className="tile-page">
      {/* MorphLogo can't be used in a client component that also needs metadata
          from a layout — the layout.js handles metadata; the logo link is inline */}
      <a
        href="/"
        aria-label="Zero Defects ATL — home"
        style={{ position: 'fixed', top: 20, left: 24, zIndex: 50, lineHeight: 0 }}
      >
        <Image
          src="/images/logos/zd-logo-clean.png"
          alt="Zero Defects ATL"
          width={52}
          height={51}
          priority
          style={{ display: 'block', viewTransitionName: 'zd-logo' }}
        />
      </a>

      <div className="tile-lock">
        <section className="tile tile-scroll" style={{ padding: 0 }}>
          {/* Gallery grid (scrollable inside the tile) */}
          <div style={{ padding: '80px 28px 28px' }}>
            <a
              href="/"
              style={{ display: 'inline-block', marginBottom: 22, fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: LIME, textDecoration: 'none', fontWeight: 700 }}
            >
              ← Back to home
            </a>
            <p className="tile-eyebrow" style={{ color: BLUE }}>Portfolio</p>
            <h1 style={{ fontFamily: DISPLAY, fontWeight: 800, fontSize: 'clamp(38px, 5.6vw, 70px)', lineHeight: 0.95, letterSpacing: 1, margin: '0 0 16px' }}>
              Our Work
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, lineHeight: 1.6, maxWidth: 520, margin: '0 0 28px' }}>
              Every vehicle we protect. Click any photo to view it full-size.
            </p>

            {/* Legend */}
            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginBottom: 28 }}>
              {Object.entries(tagColor).map(([label, color]) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                  <div style={{ width: 7, height: 7, borderRadius: '50%', background: color }} />
                  <span style={{ fontFamily: 'var(--font-barlow-cond), sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Image grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 6 }}>
              {allWork.map((item, i) => {
                const color = tagColor[item.tag] || BLUE
                return (
                  <button
                    key={i}
                    onClick={() => setSelected(i)}
                    style={{
                      all: 'unset',
                      cursor: 'pointer',
                      position: 'relative',
                      aspectRatio: '4/3',
                      overflow: 'hidden',
                      borderRadius: 8,
                      background: '#101010',
                      border: '1px solid #262626',
                    }}
                  >
                    <Image
                      src={item.img}
                      alt={item.vehicle}
                      fill
                      style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 50%)' }} />
                    <div style={{ position: 'absolute', bottom: 10, left: 12, right: 12 }}>
                      <div style={{ fontFamily: 'var(--font-barlow-cond), sans-serif', fontSize: 12, fontWeight: 700, color: '#fff', letterSpacing: 0.5 }}>
                        {item.vehicle}
                      </div>
                      <div style={{ fontSize: 10, color: `${color}cc`, marginTop: 3 }}>
                        {item.service}
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>

            <Footer />
          </div>
        </section>
      </div>

      {/* Full-screen lightbox — rendered OUTSIDE .tile-scroll on purpose: that
          container has `perspective` for the parallax effect, and a position:fixed
          element nested inside a perspective/transform ancestor gets trapped in
          that ancestor's box (the small tile) instead of filling the viewport.
          Living here under <main>, it covers the whole screen as its own window. */}
      {selected !== null && (
        <div
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${allWork[selected].vehicle} — full size`}
          style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(8,9,12,0.96)', backdropFilter: 'blur(6px)', display: 'flex', flexDirection: 'column' }}
        >
          {/* Close bar */}
          <div onClick={(e) => e.stopPropagation()} style={{ padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #262626' }}>
            <button
              onClick={() => setSelected(null)}
              style={{ all: 'unset', cursor: 'pointer', fontFamily: 'var(--font-barlow-cond), sans-serif', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: LIME }}
            >
              ← Back to gallery
            </button>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>
              {selected + 1} / {allWork.length}
            </div>
          </div>

          {/* Photo fills the viewport */}
          <div style={{ flex: 1, position: 'relative', minHeight: 0 }}>
            <Image
              src={allWork[selected].img}
              alt={allWork[selected].vehicle}
              fill
              sizes="100vw"
              style={{ objectFit: 'contain', padding: 16 }}
              priority
            />
          </div>

          {/* Info bar */}
          <div onClick={(e) => e.stopPropagation()} style={{ padding: '18px 24px', borderTop: '1px solid #262626', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
            <div>
              <div style={{ fontFamily: DISPLAY, fontWeight: 800, fontSize: 22, letterSpacing: 0.5 }}>
                {allWork[selected].vehicle}
              </div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', marginTop: 4 }}>
                {allWork[selected].service}
              </div>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button
                onClick={() => setSelected(Math.max(0, selected - 1))}
                disabled={selected === 0}
                style={{ all: 'unset', cursor: selected === 0 ? 'default' : 'pointer', opacity: selected === 0 ? 0.3 : 1, fontSize: 18, padding: '6px 14px', border: '1px solid #262626', borderRadius: 6, color: '#fff' }}
              >
                ←
              </button>
              <button
                onClick={() => setSelected(Math.min(allWork.length - 1, selected + 1))}
                disabled={selected === allWork.length - 1}
                style={{ all: 'unset', cursor: selected === allWork.length - 1 ? 'default' : 'pointer', opacity: selected === allWork.length - 1 ? 0.3 : 1, fontSize: 18, padding: '6px 14px', border: '1px solid #262626', borderRadius: 6, color: '#fff' }}
              >
                →
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
