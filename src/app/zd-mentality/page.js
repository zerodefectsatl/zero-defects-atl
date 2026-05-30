import MorphLogo from '@/components/MorphLogo'
import Footer from '@/components/Footer'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  path: '/zd-mentality',
  title: 'ZD Mentality — Zero Defects ATL',
  description:
    'Obsession-level detail. Zero compromises. The philosophy behind every ceramic coating, PPF install, and paint correction at Zero Defects ATL.',
  keywords: [
    'Zero Defects philosophy',
    'attention to detail car care',
    'quality ceramic coating Braselton',
    'meticulous PPF installer Georgia',
    'no shortcuts detailing Atlanta',
  ],
})

export default function ZdMentalityPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#080808',
        color: '#ffffff',
        padding: '80px 24px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}
    >
      <MorphLogo />
      <article style={{ maxWidth: '720px', width: '100%' }}>
        <a
          href="/"
          style={{
            display: 'inline-block',
            marginBottom: 32,
            fontSize: 11,
            letterSpacing: 3,
            textTransform: 'uppercase',
            color: '#eaff00',
            textDecoration: 'none',
          }}
        >
          ← Back
        </a>

        <div
          style={{
            fontSize: 11,
            letterSpacing: 4,
            textTransform: 'uppercase',
            color: '#eaff00',
            marginBottom: 16,
          }}
        >
          The ZD Mentality
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-bebas-neue), Manrope, sans-serif',
            fontSize: 'clamp(48px, 7vw, 96px)',
            lineHeight: 0.95,
            marginBottom: 32,
            letterSpacing: 0.5,
          }}
        >
          Obsession-level detail.<br />
          <span style={{ color: '#eaff00' }}>Zero</span> compromises.
        </h1>

        <p style={{ fontSize: 18, lineHeight: 1.6, color: 'rgba(255,255,255,0.75)', marginBottom: 20 }}>
          Every panel, every edge, every reflection. We don&rsquo;t hand a car back
          until it&rsquo;s right — not because the warranty paperwork says so,
          but because that&rsquo;s the only standard we know.
        </p>

        <p style={{ fontSize: 18, lineHeight: 1.6, color: 'rgba(255,255,255,0.75)', marginBottom: 40 }}>
          The name isn&rsquo;t a slogan. Defects aren&rsquo;t inevitable &mdash; they&rsquo;re the
          product of weak systems. Build the system right and the work comes out right, which is
          why we treat prevention as the job itself: catching a flaw before it happens always
          costs less than correcting it after.
        </p>

        <div
          style={{
            fontSize: 11,
            letterSpacing: 4,
            textTransform: 'uppercase',
            color: '#eaff00',
            marginBottom: 24,
          }}
        >
          The Four Absolutes of Quality
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {[
            {
              k: 'Definition',
              t: 'Quality is conformance to requirements.',
              d: 'Not “goodness” or subjective excellence, but a defined standard a result either meets or it doesn’t. We set the spec before the work starts, so quality is measurable — never a matter of opinion.',
            },
            {
              k: 'System',
              t: 'The system of quality is prevention.',
              d: 'Not detection, not inspection after the fact. We engineer the process so errors never enter it, rather than hunting for them once the damage is already done.',
            },
            {
              k: 'Standard',
              t: 'The performance standard is zero defects.',
              d: 'Doing it right the first time — not an “acceptable quality level” that quietly budgets for failure. One standard, every car, every time.',
            },
            {
              k: 'Measurement',
              t: 'The measure of quality is the price of nonconformance.',
              d: 'PONC — the real cost of errors, rework, and scrap. Putting a number on what failure costs is what makes getting it right the first time impossible to argue with.',
            },
          ].map((a, i) => (
            <div key={i} style={{ borderLeft: '2px solid #eaff00', paddingLeft: 22 }}>
              <div style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: '#eaff00', marginBottom: 8 }}>
                {String(i + 1).padStart(2, '0')} &middot; {a.k}
              </div>
              <h2 style={{ fontSize: 22, lineHeight: 1.3, marginBottom: 8, fontWeight: 700 }}>{a.t}</h2>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: 'rgba(255,255,255,0.6)', margin: 0 }}>{a.d}</p>
            </div>
          ))}
        </div>
      </article>
      <Footer />
    </main>
  )
}
