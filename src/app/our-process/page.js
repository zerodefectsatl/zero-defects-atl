import Link from 'next/link'

export const metadata = {
  title: 'Our Process — Zero Defects ATL',
  description: 'How we approach every ceramic coating and PPF installation.',
  alternates: { canonical: '/our-process' },
}

export default function OurProcessPage() {
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
        <div style={{ fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', color: '#FFD700', marginBottom: 16 }}>
          How it works
        </div>
        <h1 style={{ fontFamily: 'var(--font-bebas-neue), Manrope, sans-serif', fontSize: 'clamp(48px, 7vw, 96px)', lineHeight: 0.95, marginBottom: 32 }}>
          Our Process
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: 'rgba(255,255,255,0.65)' }}>
          (Placeholder — full 4-step process page goes here.)
        </p>
      </article>
    </main>
  )
}
