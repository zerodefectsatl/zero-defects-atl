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

const DISPLAY = 'var(--font-bebas-neue), Manrope, sans-serif'
const LIME = '#eaff00'
const BLUE = '#1a8fff'

const tile = {
  background: '#101010',
  border: '1px solid #262626',
  borderRadius: 10,
  padding: '40px 36px',
}
const eyebrow = {
  fontFamily: 'var(--font-barlow-cond), sans-serif',
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: LIME,
  marginBottom: 14,
}
const lead = { fontSize: 17, lineHeight: 1.65, color: 'rgba(255,255,255,0.75)', margin: '0 0 18px' }
const strong = { color: '#fff', fontWeight: 700 }

export default function ZdMentalityPage() {
  return (
    <main style={{ background: '#1f1f23', color: '#fff', minHeight: '100vh', padding: '92px 14px 14px' }}>
      <MorphLogo />

      <div style={{ maxWidth: 1040, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 6 }}>

        {/* Hero tile */}
        <section style={tile}>
          <a href="/" style={{ display: 'inline-block', marginBottom: 22, fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: LIME, textDecoration: 'none', fontWeight: 700 }}>
            ← Back
          </a>
          <div style={eyebrow}>The ZD Mentality</div>
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
        </section>

        {/* Four Absolutes — one tile each */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 6 }}>
          {absolutes.map((a, i) => (
            <div key={i} style={{ ...tile, padding: '26px 28px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ ...eyebrow, letterSpacing: '0.16em', marginBottom: 10 }}>
                {String(i + 1).padStart(2, '0')} &middot; {a.k}
              </div>
              <h2 style={{ fontSize: 19, fontWeight: 800, lineHeight: 1.25, margin: '0 0 10px', color: '#fff' }}>{a.t}</h2>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.6)', margin: 0 }}>{a.d}</p>
            </div>
          ))}
        </div>

        {/* Bridge + About tile */}
        <section style={tile}>
          <p style={lead}>
            Principles like these are easy to print and hard to hold. They mean nothing until someone
            refuses to let a car leave until it meets them. At Zero Defects ATL, that someone is Chris
            Kessler.
          </p>
          <div style={{ height: 1, background: '#262626', margin: '28px 0' }} aria-hidden="true" />
          <div style={eyebrow}>About</div>
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
        </section>

        {/* Pull-quote accent tile */}
        <section style={{ ...tile, borderLeft: `3px solid ${BLUE}`, padding: '30px 34px' }}>
          <p style={{ fontFamily: DISPLAY, fontWeight: 800, fontSize: 'clamp(22px, 3vw, 32px)', lineHeight: 1.15, color: '#fff', margin: 0 }}>
            The only Gtechniq Crystal Serum Ultra accredited installer in the area.
          </p>
        </section>

        {/* Credentials / clientele / shop tile */}
        <section style={tile}>
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
        </section>

        {/* Closing / CTA tile */}
        <section style={tile}>
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
            <a href="tel:4044063355" style={{ border: '1px solid #2e2e2e', color: '#fff', fontWeight: 700, fontSize: 14, letterSpacing: 1, textTransform: 'uppercase', padding: '14px 26px', borderRadius: 999, textDecoration: 'none' }}>
              Call 404-406-3355
            </a>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  )
}
