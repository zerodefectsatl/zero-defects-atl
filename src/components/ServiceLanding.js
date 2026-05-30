import Image from 'next/image'
import MorphLogo from '@/components/MorphLogo'
import Footer from '@/components/Footer'
import { BUSINESS, SERVICE_AREAS, serviceJsonLd } from '@/lib/seo'

const LIME = '#eaff00'

/**
 * Shared template for the individual SEO service landing pages
 * (/ceramic-coating, /paint-protection-film, /paint-correction).
 * Server component — emits Service + BreadcrumbList JSON-LD and renders
 * keyword-rich, locally-targeted content.
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
    <main style={{ background: '#080808', color: '#fff', minHeight: '100vh' }}>
      <MorphLogo />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section style={{ position: 'relative', padding: '0 24px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src={heroImage}
            alt={`${serviceType} at Zero Defects ATL in Braselton, GA`}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', opacity: 0.32 }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(180deg, rgba(8,8,8,0.65) 0%, rgba(8,8,8,0.8) 60%, #080808 100%)',
            }}
          />
        </div>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 880, margin: '0 auto', padding: '140px 0 64px' }}>
          <a
            href="/"
            style={{ display: 'inline-block', marginBottom: 28, fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: LIME, textDecoration: 'none' }}
          >
            ← Back to home
          </a>
          <p style={{ color: LIME, fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 16 }}>
            {eyebrow}
          </p>
          <h1 style={{ fontFamily: 'var(--font-bebas-neue), Manrope, sans-serif', fontSize: 'clamp(40px, 6vw, 76px)', lineHeight: 1.02, letterSpacing: '1px', margin: '0 0 20px' }}>
            {h1}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 18, lineHeight: 1.7, maxWidth: 640, margin: 0 }}>
            {lead}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 32 }}>
            <a
              href="/services#contact"
              style={{ background: LIME, color: '#000', fontWeight: 700, fontSize: 14, letterSpacing: 1, textTransform: 'uppercase', padding: '14px 26px', borderRadius: 999, textDecoration: 'none' }}
            >
              Get a Free Quote →
            </a>
            <a
              href={`tel:${BUSINESS.telephone.replace('+1', '')}`}
              style={{ border: '1px solid #2e2e2e', color: '#fff', fontWeight: 700, fontSize: 14, letterSpacing: 1, textTransform: 'uppercase', padding: '14px 26px', borderRadius: 999, textDecoration: 'none' }}
            >
              Call 404-406-3355
            </a>
          </div>
        </div>
      </section>

      {/* Highlights */}
      {highlights.length > 0 && (
        <section style={{ padding: '24px 24px 8px' }}>
          <div style={{ maxWidth: 880, margin: '0 auto', display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
            {highlights.map((h, i) => (
              <div key={i} style={{ background: '#101010', border: '1px solid #1c1c1c', borderRadius: 12, padding: 22 }}>
                <h2 style={{ fontSize: 17, fontWeight: 800, margin: '0 0 8px', color: '#fff' }}>{h.title}</h2>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{h.body}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* What's included */}
      {included.length > 0 && (
        <section style={{ padding: '48px 24px' }}>
          <div style={{ maxWidth: 880, margin: '0 auto' }}>
            <p style={{ color: LIME, fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 12 }}>
              What&apos;s included
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              {included.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: 'rgba(255,255,255,0.8)', fontSize: 15, lineHeight: 1.5 }}>
                  <span style={{ color: LIME, fontSize: 12, marginTop: 4 }}>▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Service area — near-me targeting */}
      <section style={{ padding: '8px 24px 48px' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', background: '#101010', border: '1px solid #1c1c1c', borderRadius: 12, padding: 26 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, margin: '0 0 8px' }}>
            {serviceType} near you in North Georgia
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
            Based in Braselton, we serve {areasLine} and the surrounding metro Atlanta area.
            Searching for {serviceType.toLowerCase()} near {SERVICE_AREAS.slice(0, 4).join(', ')}? You&apos;re in the right place.
          </p>
        </div>
      </section>

      {/* FAQ */}
      {faq.length > 0 && (
        <section style={{ padding: '0 24px 48px' }}>
          <div style={{ maxWidth: 880, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-bebas-neue), Manrope, sans-serif', fontSize: 'clamp(28px,4vw,40px)', letterSpacing: '0.5px', margin: '0 0 24px' }}>
              Common questions
            </h2>
            {faq.map((f, i) => (
              <div key={i} style={{ borderTop: '1px solid #1c1c1c', padding: '20px 0' }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, margin: '0 0 8px', color: '#fff' }}>{f.q}</h3>
                <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: 15, lineHeight: 1.65, margin: 0 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Related links */}
      {related.length > 0 && (
        <section style={{ padding: '0 24px 80px' }}>
          <div style={{ maxWidth: 880, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {related.map((r, i) => (
              <a
                key={i}
                href={r.href}
                style={{ flex: '1 1 220px', background: '#101010', border: '1px solid #1c1c1c', borderRadius: 12, padding: 20, textDecoration: 'none', color: '#fff' }}
              >
                <span style={{ color: LIME, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase' }}>{r.eyebrow}</span>
                <div style={{ fontSize: 18, fontWeight: 800, marginTop: 6 }}>{r.label} →</div>
              </a>
            ))}
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}
