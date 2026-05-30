import TilePage from '@/components/TilePage'
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

const DISPLAY = 'var(--font-bebas-neue), Manrope, sans-serif'
const LIME = '#eaff00'
const BLUE = '#1a8fff'
const lead = { fontSize: 17, lineHeight: 1.65, color: 'rgba(255,255,255,0.75)', margin: '0 0 18px' }
const strong = { color: '#fff', fontWeight: 700 }
const divider = { borderTop: '1px solid #262626', marginTop: 34, paddingTop: 30 }

export default function ZdMentalityPage() {
  return (
    <TilePage>
      <div style={{ padding: '80px 38px 40px' }}>
        {/* Hero */}
        <a href="/" style={{ display: 'inline-block', marginBottom: 22, fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: LIME, textDecoration: 'none', fontWeight: 700 }}>
          ← Back
        </a>
        <p className="tile-eyebrow">The ZD Mentality</p>
        <h1 style={{ fontFamily: DISPLAY, fontWeight: 800, fontSize: 'clamp(38px, 5.6vw, 70px)', lineHeight: 0.98, letterSpacing: 0.5, margin: '0 0 24px' }}>
          Obsession-level detail.<br />
          <span className="zd-zero-outline">Zero</span> compromises.
        </h1>
        <p style={lead}>
          Every panel, every edge, every reflection. We don&rsquo;t hand a car back until it&rsquo;s
          right — not because the warranty paperwork says so, but because that&rsquo;s the only
          standard we know.
        </p>
        <p style={{ ...lead, margin: 0 }}>
          The name isn&rsquo;t a slogan. Defects aren&rsquo;t inevitable &mdash; they&rsquo;re the
          product of weak systems. Build the system right and the work comes out right, which is why
          we treat prevention as the job itself: catching a flaw before it happens always costs less
          than correcting it after.
        </p>

        {/* Four Absolutes */}
        <div style={divider}>
          <p className="tile-eyebrow">The Four Absolutes of Quality</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 6 }}>
            {absolutes.map((a, i) => (
              <div key={i} style={{ background: '#171717', border: '1px solid #262626', borderRadius: 8, padding: '20px 22px' }}>
                <div style={{ fontFamily: 'var(--font-barlow-cond), sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: LIME, marginBottom: 10 }}>
                  {String(i + 1).padStart(2, '0')} &middot; {a.k}
                </div>
                <h2 style={{ fontSize: 18, fontWeight: 800, lineHeight: 1.25, margin: '0 0 10px', color: '#fff' }}>{a.t}</h2>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.6)', margin: 0 }}>{a.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bridge + About */}
        <div style={divider}>
          <p style={lead}>
            Principles like these are easy to print and hard to hold. They mean nothing until someone
            refuses to let a car leave until it meets them. At Zero Defects ATL, that someone is Chris
            Kessler.
          </p>
          <p className="tile-eyebrow" style={{ marginTop: 8 }}>About</p>
          <h2 style={{ fontFamily: DISPLAY, fontWeight: 800, fontSize: 'clamp(30px, 4.5vw, 52px)', lineHeight: 1.0, letterSpacing: 0.5, margin: '0 0 20px' }}>
            The standard, made real.
          </h2>
          <p style={lead}>
            Some standards don&rsquo;t have a middle ground. You either meet them or you don&rsquo;t.
            That&rsquo;s the philosophy CK built a career on.
          </p>
          <p style={lead}>
            CK has spent more than 17 years in this industry &mdash; nearly his entire professional
            life. He didn&rsquo;t come up in a dealership detail bay. His experience runs deeper:
            hands-on work with professional race teams, where the relationship between surface
            preparation and performance is literal, not theoretical. Motorsport has a way of sharpening
            your eye. When you&rsquo;ve worked on cars that run at Road Atlanta, you stop tolerating
            imperfection. You develop a standard &mdash; and you hold to it.
          </p>
          <p style={{ ...lead, margin: 0 }}>
            Zero Defects ATL is based in Braselton, Georgia &mdash; minutes from Road Atlanta, one of
            the most respected road courses in North America. The location isn&rsquo;t coincidental.
            This is Northeast Georgia: a region where exotic, luxury, and performance vehicles are part
            of everyday life, and where the people who own them expect more than an average shop can
            deliver.
          </p>
        </div>

        {/* Pull-quote */}
        <div style={{ borderLeft: `3px solid ${BLUE}`, paddingLeft: 22, margin: '34px 0' }}>
          <p style={{ fontFamily: DISPLAY, fontWeight: 800, fontSize: 'clamp(22px, 3vw, 32px)', lineHeight: 1.15, color: '#fff', margin: 0 }}>
            The only Gtechniq Crystal Serum Ultra accredited installer in the area.
          </p>
        </div>

        {/* Credentials / clientele / shop */}
        <div>
          <p style={lead}>
            CK holds two of the most respected credentials in the protective-coatings industry. Zero
            Defects ATL is an <strong style={strong}>XPEL Authorized Installer</strong> for paint
            protection film and a{' '}
            <strong style={strong}>Gtechniq Crystal Serum Ultra Accredited Installer</strong>. These
            aren&rsquo;t handed out for showing up to a class &mdash; they require factory training,
            documented application standards, and ongoing accountability to the manufacturer. When CK
            puts his name on a job, those credentials are on the line with it.
          </p>
          <p style={lead}>
            The vehicles that come through reflect that standard: Ferraris, Porsches, Lamborghinis,
            McLarens, Aston Martins. Owners who understand exactly what their car is worth &mdash; and
            what it takes to protect it properly.
          </p>
          <p style={lead}>
            Zero Defects ATL offers paint protection film, ceramic coating, paint correction, and vinyl
            wraps. Every vehicle starts with a full consultation and paint correction before any
            protection is applied &mdash; because no coating performs better than the surface beneath it.
          </p>
          <p style={{ ...lead, margin: 0 }}>
            This has never been a volume shop. CK oversees every vehicle, every step. Some shops measure
            their week by how many cars they turn over. Zero Defects measures it by whether each car
            leaves better than its owner expected.
          </p>
        </div>

        {/* Closing / CTA */}
        <div style={divider}>
          <p style={{ fontSize: 13, lineHeight: 1.6, color: 'rgba(255,255,255,0.5)', margin: '0 0 18px' }}>
            Serving Braselton, Atlanta, Gainesville, Buford, Flowery Branch, Hoschton, Jefferson,
            Cumming, Suwanee, and all of Northeast Georgia. See our{' '}
            <a href="/service-areas" style={{ color: BLUE, textDecoration: 'none' }}>service areas →</a>
          </p>
          <p style={{ fontFamily: DISPLAY, fontWeight: 800, fontSize: 'clamp(20px, 2.6vw, 30px)', lineHeight: 1.15, color: BLUE, margin: '0 0 26px' }}>
            Zero Defects — because the standard isn&rsquo;t negotiable.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <a href="/services#contact" style={{ background: LIME, color: '#000', fontWeight: 700, fontSize: 14, letterSpacing: 1, textTransform: 'uppercase', padding: '14px 26px', borderRadius: 999, textDecoration: 'none' }}>
              Get a Free Quote →
            </a>
            <a href="tel:4044063355" style={{ border: '1px solid rgba(255,255,255,0.3)', color: '#fff', fontWeight: 700, fontSize: 14, letterSpacing: 1, textTransform: 'uppercase', padding: '14px 26px', borderRadius: 999, textDecoration: 'none' }}>
              Call 404-406-3355
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </TilePage>
  )
}
