import { pageMetadata, BUSINESS } from '@/lib/seo'

// Link-in-bio landing page for the Instagram profile. The bio URL should be:
//   https://www.zerodefectsatl.com/ig?utm_source=instagram&utm_medium=social&utm_campaign=bio
// so GA4 attributes every visit (IG's in-app browser strips referrers, which
// otherwise makes this traffic show up as "direct"). Noindexed — it's a
// routing utility for social, not a search landing page.

export const metadata = {
  ...pageMetadata({
    path: '/ig',
    title: 'Zero Defects ATL — Links',
    description:
      'Ceramic coating, paint protection film & paint correction in Braselton, GA. Get a free quote from Zero Defects ATL.',
  }),
  robots: { index: false, follow: true },
}

const DISPLAY = 'var(--font-bebas-neue), Manrope, sans-serif'
const LIME = '#f5ff36'
const BLUE = '#1a8fff'

const linkBase = {
  display: 'block',
  textAlign: 'center',
  textDecoration: 'none',
  fontFamily: 'var(--font-barlow-cond), sans-serif',
  fontSize: 15,
  fontWeight: 700,
  letterSpacing: 2,
  textTransform: 'uppercase',
  padding: '18px 24px',
  borderRadius: 8,
}

const LINKS = [
  { href: '/#contact', label: 'Get a Free Quote', primary: true },
  { href: `tel:${BUSINESS.telephone.replace('+1', '')}`, label: 'Call 404-406-3355', primary: true },
  { href: '/gallery', label: 'See Our Work' },
  { href: '/ceramic-coating', label: 'Ceramic Coating' },
  { href: '/paint-protection-film', label: 'Paint Protection Film' },
  { href: '/reviews', label: 'Customer Reviews' },
]

export default function IgLinksPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#080808',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '64px 24px 48px',
      }}
    >
      <h1
        style={{
          fontFamily: DISPLAY,
          fontSize: 'clamp(40px, 10vw, 56px)',
          lineHeight: 0.95,
          letterSpacing: 1,
          textAlign: 'center',
          margin: '0 0 10px',
        }}
      >
        <span style={{ color: BLUE }}>ZERO</span>{' '}
        <span style={{ color: LIME }}>DEFECTS</span>
      </h1>
      <p
        style={{
          fontSize: 13,
          letterSpacing: 3,
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.55)',
          textAlign: 'center',
          margin: '0 0 6px',
        }}
      >
        Ceramic Coating · PPF · Paint Correction
      </p>
      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textAlign: 'center', margin: '0 0 40px' }}>
        Braselton, GA — serving metro Atlanta
      </p>

      <nav style={{ width: '100%', maxWidth: 420, display: 'flex', flexDirection: 'column', gap: 14 }}>
        {LINKS.map(({ href, label, primary }) => (
          <a
            key={href}
            href={href}
            style={
              primary
                ? { ...linkBase, background: BLUE, color: '#080a0c' }
                : { ...linkBase, border: '1px solid rgba(255,255,255,0.22)', color: '#fff' }
            }
          >
            {label}
          </a>
        ))}
      </nav>

      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textAlign: 'center', marginTop: 40 }}>
        XPEL authorized · Gtechniq Crystal Serum Ultra accredited
      </p>
    </main>
  )
}
