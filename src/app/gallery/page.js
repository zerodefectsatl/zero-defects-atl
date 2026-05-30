import Image from 'next/image'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Gallery — Zero Defects ATL | Ceramic Coating & PPF Portfolio',
  description: 'Browse completed projects — ceramic coatings, paint protection film, and paint correction on luxury vehicles in Braselton, GA.',
  alternates: { canonical: '/gallery' },
  openGraph: {
    title: 'Gallery — Zero Defects ATL | Ceramic Coating & PPF Portfolio',
    description: 'Browse completed projects — ceramic coatings, PPF, and paint correction on luxury vehicles in Braselton, GA.',
    images: [{ url: '/images/gallery/IMG_9517.jpeg', width: 1200, height: 800, alt: 'Zero Defects ATL gallery' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gallery — Zero Defects ATL | Ceramic Coating & PPF Portfolio',
    description: 'Browse completed projects — ceramic coatings, PPF, and paint correction on luxury vehicles in Braselton, GA.',
    images: ['/images/gallery/IMG_9517.jpeg'],
  },
}

/* ─── All automotive projects (aviation excluded) ─────────── */
const allWork = [
  // Porsche
  { img: '/images/gallery/IMG_9439.jpeg', vehicle: 'Porsche 911 GT2 RS', service: 'Crystal Serum Ultra · XPEL Ultimate', tag: 'Coating + PPF' },
  { img: '/images/gallery/IMG_8518.jpeg', vehicle: 'Porsche 911 GT3 RS', service: 'Crystal Serum Ultra · Paint Correction', tag: 'Coating' },
  { img: '/images/gallery/IMG_8882.jpeg', vehicle: 'Porsche 911 GTS e-Hybrid', service: 'XPEL Ultimate Plus · Full PPF', tag: 'PPF' },
  { img: '/images/gallery/IMG_8862.jpeg', vehicle: 'Porsche 911 GTS e-Hybrid', service: 'XPEL Ultimate Plus · Full PPF', tag: 'PPF' },
  { img: '/images/gallery/IMG_8880.jpeg', vehicle: 'Porsche 911 GTS e-Hybrid', service: 'PPF Installation Detail', tag: 'PPF' },
  { img: '/images/gallery/IMG_7388.jpeg', vehicle: 'Porsche Cayenne GTS', service: 'Crystal Serum Ultra · Paint Correction', tag: 'Coating' },
  { img: '/images/gallery/IMG_6130.jpeg', vehicle: 'Porsche 718 Cayman GT4', service: 'Custom Art Wrap · Paint Protection', tag: 'Wrap' },

  // Audi
  { img: '/images/gallery/IMG_7409.jpeg', vehicle: 'Audi R8 V10', service: 'XPEL Stealth Matte PPF', tag: 'PPF' },
  { img: '/images/gallery/IMG_7437.jpeg', vehicle: 'Audi R8 V10', service: 'XPEL Stealth Matte PPF', tag: 'PPF' },
  { img: '/images/gallery/IMG_7402.jpeg', vehicle: 'Audi R8 V10', service: 'XPEL Stealth · In Progress', tag: 'PPF' },
  { img: '/images/gallery/IMG_7392.jpeg', vehicle: 'Audi R8 V10', service: 'XPEL Stealth Matte PPF', tag: 'PPF' },
  { img: '/images/gallery/IMG_7398.jpeg', vehicle: 'Audi R8 V10', service: 'PPF Installation Detail', tag: 'PPF' },
  { img: '/images/gallery/IMG_7399.jpeg', vehicle: 'Audi R8 V10', service: 'PPF Installation Detail', tag: 'PPF' },
  { img: '/images/gallery/IMG_7400.jpeg', vehicle: 'Audi R8 V10', service: 'XPEL Stealth · In Progress', tag: 'PPF' },
  { img: '/images/gallery/IMG_7405.jpeg', vehicle: 'Audi R8 V10', service: 'XPEL Stealth · Detail View', tag: 'PPF' },
  { img: '/images/gallery/IMG_9517.jpeg', vehicle: 'Audi R8 V10 Performance', service: 'Crystal Serum Ultra · PPF', tag: 'Coating + PPF' },

  // Ferrari
  { img: '/images/gallery/IMG_9219.jpeg', vehicle: 'Ferrari 296 GTS', service: 'Full PPF · Ceramic Coating', tag: 'Coating + PPF' },
  { img: '/images/gallery/IMG_8707.jpeg', vehicle: 'Ferrari 488 Spider', service: 'XPEL Ultimate · Paint Correction', tag: 'PPF' },

  // Corvette C8
  { img: '/images/gallery/IMG_9306.jpeg', vehicle: 'Corvette Z06', service: 'XPEL Ultimate Plus · Full PPF', tag: 'PPF' },
  { img: '/images/gallery/IMG_8054.jpeg', vehicle: 'Corvette Z06', service: 'Crystal Serum Ultra · Paint Correction', tag: 'Coating' },
  { img: '/images/gallery/IMG_8058.jpeg', vehicle: 'Corvette Z06', service: 'Crystal Serum Ultra · XPEL Ultimate', tag: 'Coating + PPF' },
  { img: '/images/gallery/IMG_9417.jpeg', vehicle: 'Corvette E-Ray', service: 'Crystal Serum Ultra · PPF', tag: 'Coating + PPF' },
  { img: '/images/gallery/IMG_7887.jpeg', vehicle: 'Corvette C8', service: 'Color Shift Vinyl Wrap', tag: 'Wrap' },

  // Aston Martin
  { img: '/images/gallery/IMG_8433.jpeg', vehicle: 'Aston Martin DB11', service: 'XPEL Stealth Full PPF', tag: 'PPF' },
  { img: '/images/gallery/IMG_8434.jpeg', vehicle: 'Aston Martin DB11', service: 'XPEL Stealth Full PPF', tag: 'PPF' },
  { img: '/images/gallery/IMG_8427.jpeg', vehicle: 'Aston Martin DB11', service: 'PPF Installation', tag: 'PPF' },
  { img: '/images/gallery/IMG_8859.jpeg', vehicle: 'Aston Martin Vantage GT4', service: 'Race Livery Vinyl Wrap', tag: 'Wrap' },
  { img: '/images/gallery/IMG_8856.jpeg', vehicle: 'Aston Martin Vantage GT4', service: 'Race Livery · In Progress', tag: 'Wrap' },
  { img: '/images/gallery/IMG_8851.jpeg', vehicle: 'Aston Martin Vantage GT4', service: 'Race Livery · In Progress', tag: 'Wrap' },

  // Bentley
  { img: '/images/gallery/IMG_8575.jpeg', vehicle: 'Bentley Bentayga S', service: 'Crystal Serum Ultra · Full PPF', tag: 'Coating + PPF' },
  { img: '/images/gallery/IMG_8556.jpeg', vehicle: 'Bentley Bentayga S', service: 'Crystal Serum Ultra · Full PPF', tag: 'Coating + PPF' },

  // Cadillac
  { img: '/images/gallery/IMG_8718.jpeg', vehicle: 'Cadillac CT5-V Blackwing', service: 'Crystal Serum Ultra', tag: 'Coating' },
  { img: '/images/gallery/IMG_8715.jpeg', vehicle: 'Cadillac CT5-V Blackwing', service: 'Crystal Serum Ultra', tag: 'Coating' },

  // Mercedes
  { img: '/images/gallery/IMG_5864.jpeg', vehicle: 'Mercedes-AMG E63 S', service: 'Crystal Serum Ultra · Matte PPF', tag: 'Coating + PPF' },

  // BMW
  { img: '/images/gallery/IMG_7885.jpeg', vehicle: 'BMW M5', service: 'XPEL Ultimate Plus · Full PPF', tag: 'PPF' },

  // Tesla
  { img: '/images/gallery/IMG_8513.jpeg', vehicle: 'Tesla Model Y', service: 'XPEL Ultimate Plus · PPF', tag: 'PPF' },
  { img: '/images/gallery/IMG_8143.jpeg', vehicle: 'Tesla Model S', service: 'Crystal Serum Ultra · Paint Correction', tag: 'Coating' },

  // Trucks
  { img: '/images/gallery/IMG_7531.jpeg', vehicle: 'GMC Sierra 2500HD Denali', service: 'XPEL Ultimate Plus · Full PPF', tag: 'PPF' },
  { img: '/images/gallery/IMG_7530.jpeg', vehicle: 'GMC Sierra 2500HD Denali', service: 'XPEL Ultimate Plus · Full PPF', tag: 'PPF' },
  { img: '/images/gallery/IMG_7573.jpeg', vehicle: 'Ford F-250 Super Duty', service: 'Crystal Serum Ultra · Paint Correction', tag: 'Coating' },
  { img: '/images/gallery/IMG_1486.jpeg', vehicle: 'Dodge Ram SRT-10', service: 'Paint Correction · Ceramic Coating', tag: 'Coating' },

  // SUVs
  { img: '/images/gallery/IMG_8146.jpeg', vehicle: 'Jeep Wrangler Rubicon', service: 'Crystal Serum Ultra · Full PPF', tag: 'Coating + PPF' },
  { img: '/images/gallery/IMG_6951.jpeg', vehicle: 'Kia Telluride', service: 'Matte Black Vinyl Wrap', tag: 'Wrap' },
  { img: '/images/gallery/IMG_6952.jpeg', vehicle: 'Kia Telluride', service: 'Matte Black Vinyl Wrap · Detail', tag: 'Wrap' },

  // Classics & Muscle
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

const S = {
  eyebrow: {
    fontFamily: 'var(--font-barlow-cond), sans-serif',
    fontSize: '11px',
    fontWeight: 600,
    letterSpacing: '4px',
    textTransform: 'uppercase',
    color: '#1a8fff',
    marginBottom: '16px',
    display: 'block',
  },
}

export default function Gallery() {
  return (
    <>
      <Navbar />

      {/* ── HERO BANNER ───────────────────────────────────────── */}
      <section
        className="zd-gallery-hero"
        style={{
          background: '#080a0c',
          padding: '160px 48px 80px',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <a
            href="/"
            style={{
              display: 'inline-block',
              marginBottom: 32,
              fontSize: 11,
              letterSpacing: 3,
              textTransform: 'uppercase',
              color: '#FFD700',
              textDecoration: 'none',
              fontFamily: 'var(--font-barlow-cond), Manrope, sans-serif',
              fontWeight: 600,
            }}
          >
            ← Back to home
          </a>
          <span style={S.eyebrow}>Portfolio · {allWork.length} Projects</span>
          <h1
            style={{
              fontFamily: 'var(--font-bebas-neue), Manrope, sans-serif',
              fontSize: 'clamp(64px, 10vw, 140px)',
              lineHeight: 0.9,
              letterSpacing: '3px',
              color: '#f0f4f8',
              marginBottom: '24px',
              fontWeight: 700,
            }}
          >
            Our Work
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-barlow), sans-serif',
              fontSize: '17px',
              color: 'rgba(240,244,248,0.55)',
              maxWidth: '520px',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Every vehicle we protect. Paint protection film, ceramic coatings,
            vinyl wraps, and paint correction — all done in our climate-controlled
            Braselton shop.
          </p>

          {/* Legend */}
          <div
            style={{
              display: 'flex',
              gap: '24px',
              marginTop: '40px',
              flexWrap: 'wrap',
            }}
          >
            {Object.entries(tagColor).map(([label, color]) => (
              <div
                key={label}
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: color,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-barlow-cond), sans-serif',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    color: 'rgba(240,244,248,0.5)',
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY GRID ──────────────────────────────────────── */}
      <section className="zd-gallery-grid" style={{ background: '#0a0d10', padding: '64px 48px 96px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div
            className="zd-gallery-grid__inner"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '16px',
            }}
          >
            {allWork.map((item, i) => (
              <GalleryCard key={i} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section
        className="zd-gallery-cta"
        style={{
          background: '#080a0c',
          borderTop: '1px solid rgba(255,255,255,0.07)',
          padding: '80px 48px',
          textAlign: 'center',
        }}
      >
        <span style={{ ...S.eyebrow, display: 'block', textAlign: 'center' }}>
          Ready to Protect Your Vehicle?
        </span>
        <h2
          style={{
            fontFamily: 'var(--font-bebas-neue), sans-serif',
            fontSize: 'clamp(40px, 6vw, 72px)',
            lineHeight: 0.9,
            letterSpacing: '2px',
            color: '#f0f4f8',
            marginBottom: '32px',
          }}
        >
          Get a Free Quote
        </h2>
        <a
          href="/#contact"
          style={{
            display: 'inline-block',
            fontFamily: 'var(--font-barlow-cond), sans-serif',
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#080a0c',
            background: '#1a8fff',
            padding: '16px 40px',
            textDecoration: 'none',
            borderRadius: '2px',
          }}
        >
          Contact Us →
        </a>
      </section>
    </>
  )
}

function GalleryCard({ item }) {
  const color = tagColor[item.tag] || '#1a8fff'

  return (
    <div
      style={{
        position: 'relative',
        aspectRatio: '4/3',
        overflow: 'hidden',
        borderRadius: '4px',
        background: '#111416',
      }}
    >
      <Image
        src={item.img}
        alt={item.vehicle}
        fill
        style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to top, rgba(8,10,12,0.92) 0%, rgba(8,10,12,0.2) 55%, transparent 100%)',
        }}
      />

      {/* Tag pill — top right */}
      <div
        style={{
          position: 'absolute',
          top: '14px',
          right: '14px',
          background: `${color}22`,
          border: `1px solid ${color}55`,
          borderRadius: '2px',
          padding: '4px 10px',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-barlow-cond), sans-serif',
            fontSize: '10px',
            fontWeight: 700,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: color,
          }}
        >
          {item.tag}
        </span>
      </div>

      {/* Vehicle info — bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: '18px',
          left: '18px',
          right: '18px',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-barlow-cond), sans-serif',
            fontSize: '18px',
            fontWeight: 700,
            letterSpacing: '1px',
            textTransform: 'uppercase',
            color: '#f0f4f8',
            marginBottom: '5px',
            lineHeight: 1.1,
          }}
        >
          {item.vehicle}
        </div>
        <div
          style={{
            fontFamily: 'var(--font-barlow-cond), sans-serif',
            fontSize: '10px',
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: color,
          }}
        >
          {item.service}
        </div>
      </div>
    </div>
  )
}
