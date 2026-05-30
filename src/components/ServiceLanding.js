import Image from 'next/image'
import MorphLogo from '@/components/MorphLogo'
import Footer from '@/components/Footer'
import { BUSINESS, SERVICE_AREAS, serviceJsonLd } from '@/lib/seo'

const LIME = '#eaff00'
const BLUE = '#1a8fff'
const DISPLAY = 'var(--font-bebas-neue), Manrope, sans-serif'

/**
 * Shared template for the individual SEO service landing pages
 * (/ceramic-coating, /paint-protection-film, /paint-correction).
 * 363-style scrolling tile layout. Server component — emits Service +
 * BreadcrumbList JSON-LD.
 */
export default function ServiceLanding({
  path,
  eyebrow,
  h1,
  serviceType,
  schemaDescription,
  lead,
  heroImage,
  highlights = [],
  included = [],
  faq = [],
  related = [],
}) {
  const jsonLd = serviceJsonLd({
    path,
    name: serviceType,
    serviceType,
    description: schemaDescription,
  })

  const areasLine = SERVICE_AREAS.join(', ')

  return (
    <main className="tile-field">
      <MorphLogo />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="tile-frame">
        {/* Hero tile — bright photo, left gradient, content scrolls inside the tile */}
        <section className="tile" style={{ position: 'relative', overflow: 'hidden', padding: 0, height: 'min(78vh, 660px)' }}>
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <Image
              src={heroImage}
              alt={`${serviceType} at Zero Defects ATL in Braselton, GA`}
              fill
              priority
              sizes="100vw"
              style={{ objectFit: 'cover', opacity: 0.95 }}
            />
            {/* Left-to-right gradient: dark on the left for text, photo visible on the right */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(16,16,16,0.94) 0%, rgba(16,16,16,0.72) 38%, rgba(16,16,16,0.25) 68%, rgba(16,16,16,0) 100%)' }} />
          </div>
          <div style={{ position: 'relative', zIndex: 1, height: '100%', overflowY: 'auto', padding: '44px 38px' }}>
            <div style={{ maxWidth: 560 }}>
              <a href="/" style={{ display: 'inline-block', marginBottom: 22, fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: LIME, textDecoration: 'none', fontWeight: 700 }}>
                ← Back to home
              </a>
              <p className="tile-eyebrow">{eyebrow}</p>
              <h1 style={{ fontFamily: DISPLAY, fontWeight: 800, fontSize: 'clamp(40px, 6vw, 76px)', lineHeight: 0.98, letterSpacing: 0.5, margin: '0 0 20px' }}>
                {h1}
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 18, lineHeight: 1.7, margin: 0 }}>{lead}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, margin: '30px 0 8px' }}>
                <a href="/services#contact" style={{ background: LIME, color: '#000', fontWeight: 700, fontSize: 14, letterSpacing: 1, textTransform: 'uppercase', padding: '14px 26px', borderRadius: 999, textDecoration: 'none' }}>
                  Get a Free Quote →
                </a>
                <a href={`tel:${BUSINESS.telephone.replace('+1', '')}`} style={{ border: '1px solid rgba(255,255,255,0.3)', color: '#fff', fontWeight: 700, fontSize: 14, letterSpacing: 1, textTransform: 'uppercase', padding: '14px 26px', borderRadius: 999, textDecoration: 'none' }}>
                  Call 404-406-3355
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Highlight tiles */}
        {highlights.length > 0 && (
          <div className="tile-grid">
            {highlights.map((h, i) => (
              <div key={i} className="tile" style={{ padding: '24px 26px' }}>
                <h2 style={{ fontSize: 17, fontWeight: 800, margin: '0 0 8px', color: '#fff' }}>{h.title}</h2>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{h.body}</p>
              </div>
            ))}
          </div>
        )}

        {/* What's included tile */}
        {included.length > 0 && (
          <section className="tile">
            <p className="tile-eyebrow">What&apos;s included</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              {included.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: 'rgba(255,255,255,0.8)', fontSize: 15, lineHeight: 1.5 }}>
                  <span style={{ color: LIME, fontSize: 12, marginTop: 4 }}>▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Service-area tile — near-me targeting */}
        <section className="tile">
          <h2 style={{ fontSize: 18, fontWeight: 800, margin: '0 0 8px' }}>
            {serviceType} near you in North Georgia
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
            Based in Braselton, we serve {areasLine} and the surrounding metro Atlanta area.
            Searching for {serviceType.toLowerCase()} near {SERVICE_AREAS.slice(0, 4).join(', ')}? You&apos;re in the right place.
          </p>
        </section>

        {/* FAQ tile */}
        {faq.length > 0 && (
          <section className="tile">
            <h2 style={{ fontFamily: DISPLAY, fontWeight: 800, fontSize: 'clamp(26px,4vw,38px)', letterSpacing: '0.5px', margin: '0 0 20px' }}>
              Common questions
            </h2>
            {faq.map((f, i) => (
              <div key={i} style={{ borderTop: '1px solid #262626', padding: '18px 0' }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, margin: '0 0 8px', color: '#fff' }}>{f.q}</h3>
                <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: 15, lineHeight: 1.65, margin: 0 }}>{f.a}</p>
              </div>
            ))}
          </section>
        )}

        {/* Related tiles */}
        {related.length > 0 && (
          <div className="tile-grid">
            {related.map((r, i) => (
              <a key={i} href={r.href} className="tile" style={{ padding: '20px 22px', textDecoration: 'none', color: '#fff' }}>
                <span style={{ color: BLUE, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 700 }}>{r.eyebrow}</span>
                <div style={{ fontSize: 18, fontWeight: 800, marginTop: 6 }}>{r.label} →</div>
              </a>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </main>
  )
}
