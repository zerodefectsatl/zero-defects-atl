import Link from 'next/link'

export const metadata = {
  title: 'ZD Mentality — Zero Defects ATL',
  description:
    'Obsession-level detail. Zero compromises. The philosophy behind every ceramic coating, PPF install, and paint correction at Zero Defects ATL.',
  alternates: { canonical: '/zd-mentality' },
}

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
      <article style={{ maxWidth: '720px', width: '100%' }}>
        <Link
          href="/"
          style={{
            display: 'inline-block',
            marginBottom: 32,
            fontSize: 11,
            letterSpacing: 3,
            textTransform: 'uppercase',
            color: '#FFD700',
            textDecoration: 'none',
          }}
        >
          ← Back
        </Link>

        <div
          style={{
            fontSize: 11,
            letterSpacing: 4,
            textTransform: 'uppercase',
            color: '#FFD700',
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
          <span style={{ color: '#FFD700' }}>Zero</span> compromises.
        </h1>

        <p style={{ fontSize: 18, lineHeight: 1.6, color: 'rgba(255,255,255,0.75)', marginBottom: 20 }}>
          Every panel, every edge, every reflection. We don&rsquo;t hand a car back
          until it&rsquo;s right — not because the warranty paperwork says so,
          but because that&rsquo;s the only standard we know.
        </p>

        <p style={{ fontSize: 16, lineHeight: 1.6, color: 'rgba(255,255,255,0.55)', marginBottom: 20 }}>
          (Placeholder copy — full story page lives here.
          Replace with the company narrative when ready.)
        </p>
      </article>
    </main>
  )
}
