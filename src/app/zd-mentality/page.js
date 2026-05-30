import MorphLogo from '@/components/MorphLogo'
import Footer from '@/components/Footer'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  path: '/zd-mentality',
  title: 'ZD Mentality — Zero Defects ATL',
  description:
    'The philosophy behind the name, and the story of Chris Kessler and Zero Defects ATL — Braselton&rsquo;s XPEL and Gtechniq Crystal Serum Ultra accredited installer.',
  keywords: [
    'Zero Defects philosophy',
    'about Zero Defects ATL',
    'Chris Kessler Zero Defects',
    'quality ceramic coating Braselton',
    'meticulous PPF installer Georgia',
    'no shortcuts detailing Atlanta',
  ],
})

const absolutes = [
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
]

export default function ZdMentalityPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#ffffff',
        color: '#000000',
        padding: '80px 24px',
      }}
    >
      <MorphLogo />
      <article style={{ maxWidth: '720px', width: '100%', margin: '0 auto' }}>
        <a
          href="/"
          style={{
            display: 'inline-block',
            marginBottom: 32,
            fontSize: 11,
            letterSpacing: 3,
            textTransform: 'uppercase',
            color: '#1a8fff',
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
            color: '#1a8fff',
            marginBottom: 16,
            fontWeight: 700,
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
            fontWeight: 800,
          }}
        >
          Obsession-level detail.<br />
          <span className="zd-zero-outline">Zero</span> compromises.
        </h1>

        <p style={{ fontSize: 18, lineHeight: 1.6, color: 'rgba(0,0,0,0.78)', marginBottom: 20 }}>
          Every panel, every edge, every reflection. We don&rsquo;t hand a car back
          until it&rsquo;s right — not because the warranty paperwork says so,
          but because that&rsquo;s the only standard we know.
        </p>

        <p style={{ fontSize: 18, lineHeight: 1.6, color: 'rgba(0,0,0,0.78)', marginBottom: 40 }}>
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
            color: '#1a8fff',
            marginBottom: 24,
            fontWeight: 700,
          }}
        >
          The Four Absolutes of Quality
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {absolutes.map((a, i) => (
            <div key={i} style={{ borderLeft: '2px solid #1a8fff', paddingLeft: 22 }}>
              <div style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: '#1a8fff', marginBottom: 8, fontWeight: 700 }}>
                {String(i + 1).padStart(2, '0')} &middot; {a.k}
              </div>
              <h2 style={{ fontSize: 22, lineHeight: 1.3, marginBottom: 8, fontWeight: 700 }}>{a.t}</h2>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: 'rgba(0,0,0,0.6)', margin: 0 }}>{a.d}</p>
            </div>
          ))}
        </div>

        <p style={{ fontSize: 18, lineHeight: 1.6, color: 'rgba(0,0,0,0.78)', margin: '48px 0 0' }}>
          Principles like these are easy to print and hard to hold. They mean nothing until
          someone refuses to let a car leave until it meets them. At Zero Defects ATL, that
          someone is Chris Kessler.
        </p>

        <div
          aria-hidden="true"
          style={{ height: 1, background: 'rgba(0,0,0,0.12)', margin: '48px 0 40px' }}
        />

        <div
          style={{
            fontSize: 11,
            letterSpacing: 4,
            textTransform: 'uppercase',
            color: '#1a8fff',
            marginBottom: 16,
            fontWeight: 700,
          }}
        >
          About
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-bebas-neue), Manrope, sans-serif',
            fontSize: 'clamp(34px, 5vw, 60px)',
            lineHeight: 1.0,
            marginBottom: 28,
            letterSpacing: 0.5,
            fontWeight: 800,
          }}
        >
          The standard, made real.
        </h2>

        <p style={{ fontSize: 18, lineHeight: 1.6, color: 'rgba(0,0,0,0.78)', marginBottom: 20 }}>
          Some standards don&rsquo;t have a middle ground. You either meet them or you don&rsquo;t.
          That&rsquo;s the philosophy CK built a career on.
        </p>

        <p style={{ fontSize: 18, lineHeight: 1.6, color: 'rgba(0,0,0,0.78)', marginBottom: 20 }}>
          CK has spent more than 17 years in this industry &mdash; nearly his entire professional
          life. He didn&rsquo;t come up in a dealership detail bay. His experience runs deeper:
          hands-on work with professional race teams, where the relationship between surface
          preparation and performance is literal, not theoretical. Motorsport has a way of
          sharpening your eye. When you&rsquo;ve worked on cars that run at Road Atlanta, you stop
          tolerating imperfection. You develop a standard &mdash; and you hold to it.
        </p>

        <p style={{ fontSize: 18, lineHeight: 1.6, color: 'rgba(0,0,0,0.78)', marginBottom: 36 }}>
          Zero Defects ATL is based in Braselton, Georgia &mdash; minutes from Road Atlanta, one of
          the most respected road courses in North America. The location isn&rsquo;t coincidental.
          This is Northeast Georgia: a region where exotic, luxury, and performance vehicles are
          part of everyday life, and where the people who own them expect more than an average shop
          can deliver.
        </p>

        <blockquote
          style={{
            borderLeft: '2px solid #1a8fff',
            paddingLeft: 22,
            margin: '0 0 36px',
            fontFamily: 'var(--font-bebas-neue), Manrope, sans-serif',
            fontSize: 'clamp(22px, 3vw, 30px)',
            lineHeight: 1.2,
            color: '#000000',
          }}
        >
          The only Gtechniq Crystal Serum Ultra accredited installer in the area.
        </blockquote>

        <p style={{ fontSize: 18, lineHeight: 1.6, color: 'rgba(0,0,0,0.78)', marginBottom: 20 }}>
          CK holds two of the most respected credentials in the protective-coatings industry. Zero
          Defects ATL is an <strong style={{ color: '#000', fontWeight: 700 }}>XPEL Authorized
          Installer</strong> for paint protection film and a{' '}
          <strong style={{ color: '#000', fontWeight: 700 }}>Gtechniq Crystal Serum Ultra Accredited
          Installer</strong>. These aren&rsquo;t handed out for showing up to a class &mdash; they
          require factory training, documented application standards, and ongoing accountability to
          the manufacturer. When CK puts his name on a job, those credentials are on the line with
          it.
        </p>

        <p style={{ fontSize: 18, lineHeight: 1.6, color: 'rgba(0,0,0,0.78)', marginBottom: 20 }}>
          The vehicles that come through reflect that standard: Ferraris, Porsches, Lamborghinis,
          McLarens, Aston Martins. Owners who understand exactly what their car is worth &mdash; and
          what it takes to protect it properly.
        </p>

        <p style={{ fontSize: 18, lineHeight: 1.6, color: 'rgba(0,0,0,0.78)', marginBottom: 20 }}>
          Zero Defects ATL offers paint protection film, ceramic coating, paint correction, and
          vinyl wraps. Every vehicle starts with a full consultation and paint correction before any
          protection is applied &mdash; because no coating performs better than the surface beneath
          it.
        </p>

        <p style={{ fontSize: 18, lineHeight: 1.6, color: 'rgba(0,0,0,0.78)', marginBottom: 36 }}>
          This has never been a volume shop. CK oversees every vehicle, every step. Some shops
          measure their week by how many cars they turn over. Zero Defects measures it by whether
          each car leaves better than its owner expected.
        </p>

        <p style={{ fontSize: 14, lineHeight: 1.6, color: 'rgba(0,0,0,0.5)', marginBottom: 28 }}>
          Serving Braselton, Atlanta, Gainesville, Buford, Flowery Branch, Hoschton, Jefferson,
          Cumming, Suwanee, and all of Northeast Georgia. See our{' '}
          <a href="/service-areas" style={{ color: '#1a8fff', textDecoration: 'none' }}>service areas →</a>
        </p>

        <p
          style={{
            fontFamily: 'var(--font-bebas-neue), Manrope, sans-serif',
            fontSize: 'clamp(20px, 2.5vw, 26px)',
            lineHeight: 1.2,
            color: '#1a8fff',
            margin: 0,
          }}
        >
          Zero Defects — because the standard isn&rsquo;t negotiable.
        </p>
      </article>
      <Footer />
    </main>
  )
}
