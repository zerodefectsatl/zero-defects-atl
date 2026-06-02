import Image from 'next/image'
import MorphLogo from '@/components/MorphLogo'
import Footer from '@/components/Footer'
import { BUSINESS, SERVICE_AREAS, serviceJsonLd } from '@/lib/seo'

const LIME = '#eaff00'
const BLUE = '#1a8fff'
const DISPLAY = 'var(--font-bebas-neue), Manrope, sans-serif'

/**
 * Service landing pages (/ceramic-coating, /paint-protection-film,
 * /paint-correction). 363-style: the page is gridlocked to the viewport and
 * does not scroll — the single content tile scrolls internally, with the
 * photo as the hero backdrop. Server component; emits Service +
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
  const jsonLd = serviceJsonLd({ path, name: serviceType, serviceType, description: schemaDescription })
  const areasLine = SERVICE_AREAS.join(', ')

  return (
    <main className="tile-page">
      <MorphLogo />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="tile-lock">
        <section className="tile tile-scroll" style={{ padding: 0 }}>

          {/* Hero block — bright photo backdrop with parallax, left gradient, content left */}
          <div style={{ position: 'relative', overflow: 'hidden', minHeight: 'min(72vh, 540px)' }}>
            <div className="parallax-bg">
              <Image
                src={heroImage}
                alt={`${serviceType} at Zero Defects ATL in Braselton, GA`}
                fill
                priority
                sizes="100vw"
                style={{ objectFit: 'cover', opacity: 0.95 }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(16,16,16,0.94) 0%, rgba(16,16,16,0.72) 38%, rgba(16,16,16,0.25) 68%, rgba(16,16,16,0) 100%)' }} />
            </div>
            <div className="parallax-fg" style={{ padding: '80px 38px 44px', maxWidth: 600 }}>
              <a href="/" style={{ display: 'inline-block', marginBottom: 22, fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: LIME, textDecoration: 'none', fontWeight: 700 }}>
                ← Back to home
              </a>
              <p className="tile-eyebrow">{eyebrow}</p>
              <h1 style={{ fontFamily: DISPLAY, fontWeight: 800, fontSize: 'clamp(40px, 6vw, 76px)', lineHeight: 0.98, letterSpacing: 0.5, margin: '0 0 20px' }}>
                {h1}
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 18, lineHeight: 1.7, margin: 0 }}>{lead}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 30 }}>
                <a href="/services#contact" style={{ background: LIME, color: '#000', fontWeight: 700, fontSize: 14, letterSpacing: 1, textTransform: 'uppercase', padding: '14px 26px', borderRadius: 999, textDecoration: 'none' }}>
                  Get a Free Quote →
                </a>
                <a href={`tel:${BUSINESS.telephone.replace('+1', '')}`} style={{ border: '1px solid rgba(255,255,255,0.3)', color: '#fff', fontWeight: 700, fontSize: 14, letterSpacing: 1, textTransform: 'uppercase', padding: '14px 26px', borderRadius: 999, textDecoration: 'none' }}>
                  Call 404-406-3355
                </a>
              </div>
            </div>
          </div>

          {/* Scrolling content (inside the same tile) */}
          <div style={{ padding: '32px 38px 8px' }}>
            {/* Highlights */}
            {highlights.length > 0 && (
              <div style={{ display: 'grid', gap: 6, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', marginBottom: 36 }}>
                {highlights.map((h, i) => (
                  <div key={i} style={{ background: '#171717', border: '1px solid #262626', borderRadius: 8, padding: '20px 22px' }}>
                    <h2 style={{ fontSize: 17, fontWeight: 800, margin: '0 0 8px', color: '#fff' }}>{h.title}</h2>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{h.body}</p>
                  </div>
                ))}
              </div>
            )}

            {/* What's included */}
            {included.length > 0 && (
              <div style={{ borderTop: '1px solid #262626', paddingTop: 28, marginBottom: 36 }}>
                <p className="tile-eyebrow">What&apos;s included</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                  {included.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: 'rgba(255,255,255,0.8)', fontSize: 15, lineHeight: 1.5 }}>
                      <span style={{ color: LIME, fontSize: 12, marginTop: 4 }}>▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Service area */}
            <div style={{ borderTop: '1px solid #262626', paddingTop: 28, marginBottom: 36 }}>
              <h2 style={{ fontSize: 18, fontWeight: 800, margin: '0 0 8px' }}>{serviceType} near you in North Georgia</h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Based in Braselton, we serve {areasLine} and the surrounding metro Atlanta area.
                Searching for {serviceType.toLowerCase()} near {SERVICE_AREAS.slice(0, 4).join(', ')}? You&apos;re in the right place.
              </p>
            </div>

            {/* FAQ */}
            {faq.length > 0 && (
              <div style={{ borderTop: '1px solid #262626', paddingTop: 28, marginBottom: 36 }}>
                <h2 style={{ fontFamily: DISPLAY, fontWeight: 800, fontSize: 'clamp(26px,4vw,38px)', letterSpacing: '0.5px', margin: '0 0 16px' }}>Common questions</h2>
                {faq.map((f, i) => (
                  <div key={i} style={{ borderTop: i === 0 ? 'none' : '1px solid #1c1c1c', padding: '16px 0' }}>
                    <h3 style={{ fontSize: 16, fontWeight: 700, margin: '0 0 8px', color: '#fff' }}>{f.q}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: 15, lineHeight: 1.65, margin: 0 }}>{f.a}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Related */}
            {related.length > 0 && (
              <div style={{ display: 'grid', gap: 6, gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', paddingBottom: 8 }}>
                {related.map((r, i) => (
                  <a key={i} href={r.href} style={{ background: '#171717', border: '1px solid #262626', borderRadius: 8, padding: '18px 20px', textDecoration: 'none', color: '#fff' }}>
                    <span style={{ color: BLUE, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 700 }}>{r.eyebrow}</span>
                    <div style={{ fontSize: 17, fontWeight: 800, marginTop: 6 }}>{r.label} →</div>
                  </a>
                ))}
              </div>
            )}
          </div>

          <Footer />
        </section>
      </div>
    </main>
  )
}
