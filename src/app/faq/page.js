import Link from 'next/link'

export const metadata = {
  title: 'FAQ — Zero Defects ATL',
  description: 'Common questions about ceramic coating, PPF, and paint correction.',
  alternates: { canonical: '/faq' },
}

const faqs = [
  {
    q: 'How long does ceramic coating last?',
    a: 'Gtechniq Crystal Serum Ultra carries a 9-year warranty. CCI Revolution: 6+ years. CCI Advance: 3–5 years.',
  },
  {
    q: 'What is the difference between ceramic coating and PPF?',
    a: 'Ceramic bonds to your paint for hydrophobic protection and UV resistance. PPF is a physical TPU film that stops rock chips and scratches. Many customers combine both.',
  },
  {
    q: 'Do I need paint correction before ceramic coating?',
    a: 'Yes. Coating locks in whatever is on the surface. We include correction before every coating.',
  },
  {
    q: 'Is Zero Defects ATL an authorized XPEL installer?',
    a: 'Yes — factory-trained at XPEL HQ in San Antonio. Computer-cut templates, 10-year manufacturer warranty.',
  },
]

export default function FAQPage() {
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
          Frequently asked
        </div>
        <h1 style={{ fontFamily: 'var(--font-bebas-neue), Manrope, sans-serif', fontSize: 'clamp(48px, 7vw, 96px)', lineHeight: 0.95, marginBottom: 40 }}>
          FAQ
        </h1>
        {faqs.map((f, i) => (
          <div key={i} style={{ borderTop: '1px solid #1c1c1c', padding: '20px 0' }}>
            <h2 style={{ fontSize: 18, marginBottom: 8, color: '#fff' }}>{f.q}</h2>
            <p style={{ fontSize: 15, lineHeight: 1.5, color: 'rgba(255,255,255,0.6)' }}>{f.a}</p>
          </div>
        ))}
      </article>
    </main>
  )
}
