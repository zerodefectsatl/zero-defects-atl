import { BUSINESS } from '@/lib/seo'

const LIME = '#eaff00'

const QUICK_LINKS = [
  { label: 'Ceramic Coating', href: '/ceramic-coating' },
  { label: 'Paint Protection Film', href: '/paint-protection-film' },
  { label: 'Paint Correction', href: '/paint-correction' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'FAQ', href: '/faq' },
]

const labelStyle = {
  color: LIME,
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: '0.16em',
  textTransform: 'uppercase',
  marginBottom: 14,
}

const linkStyle = {
  color: 'rgba(255,255,255,0.62)',
  fontSize: 14,
  textDecoration: 'none',
  lineHeight: 2,
}

/**
 * Site footer with consistent NAP (name/address/phone) and a link to the
 * verified Google Business Profile — reinforces local SEO on every page.
 */
export default function Footer() {
  const year = new Date().getFullYear()
  const telDisplay = '404-406-3355'

  return (
    <footer
      style={{
        background: '#050505',
        borderTop: '1px solid #1c1c1c',
        color: '#fff',
        padding: '56px 24px 28px',
      }}
    >
      <div
        style={{
          maxWidth: 1080,
          margin: '0 auto',
          display: 'grid',
          gap: 40,
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        }}
      >
        {/* Brand + contact / NAP */}
        <div>
          <div style={{ fontFamily: 'var(--font-bebas-neue), Manrope, sans-serif', fontSize: 24, letterSpacing: 1, marginBottom: 14 }}>
            {BUSINESS.name}
          </div>
          <address style={{ fontStyle: 'normal', color: 'rgba(255,255,255,0.62)', fontSize: 14, lineHeight: 1.7 }}>
            {BUSINESS.streetAddress}
            <br />
            {BUSINESS.addressLocality}, {BUSINESS.addressRegion} {BUSINESS.postalCode}
            <br />
            <a href={`tel:${BUSINESS.telephone.replace('+1', '')}`} style={{ color: LIME, textDecoration: 'none' }}>
              {telDisplay}
            </a>
            <br />
            <a href={`mailto:${BUSINESS.email}`} style={{ color: 'rgba(255,255,255,0.62)', textDecoration: 'none' }}>
              {BUSINESS.email}
            </a>
          </address>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, marginTop: 12 }}>
            Mon–Fri 8am–6pm · By appointment
          </p>
        </div>

        {/* Quick links */}
        <div>
          <p style={labelStyle}>Services</p>
          <nav style={{ display: 'flex', flexDirection: 'column' }}>
            {QUICK_LINKS.map((l) => (
              <a key={l.href} href={l.href} style={linkStyle}>
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Find us / social */}
        <div>
          <p style={labelStyle}>Find us</p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <a
              href={BUSINESS.googleProfile}
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...linkStyle, color: LIME, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 8 }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
              </svg>
              Find us on Google
            </a>
            <a href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer" style={linkStyle}>
              Instagram
            </a>
            <a href="/services#contact" style={linkStyle}>
              Get a free quote
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1080,
          margin: '36px auto 0',
          paddingTop: 20,
          borderTop: '1px solid #161616',
          color: 'rgba(255,255,255,0.4)',
          fontSize: 12,
        }}
      >
        © {year} {BUSINESS.name} · Ceramic Coating, PPF &amp; Paint Correction in Braselton, GA
      </div>
    </footer>
  )
}
