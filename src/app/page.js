import Image from 'next/image'
import Navbar from '@/components/Navbar'
import SiteGate from '@/components/SiteGate'
import ParallaxScroll from '@/components/ParallaxScroll'
import ContactForm from '@/components/ContactForm'
import RevealText from '@/components/RevealText'

const galleryImages = [
  '/images/gallery/IMG_6937.jpeg',
  '/images/gallery/IMG_7388.jpeg',
  '/images/gallery/IMG_7531.jpeg',
  '/images/gallery/IMG_8427.jpeg',
  '/images/gallery/IMG_8856.jpeg',
  '/images/gallery/IMG_9306.jpeg',
]

const heroImage = '/images/gallery/IMG_9517.jpeg'

/* ─── Data ─────────────────────────────────────────────────── */
const stats = [
  { num: '17+', label: 'Years of Experience' },
  { num: '500+', label: 'Vehicles Protected' },
  { num: '3', label: 'Premium Certifications' },
  { num: '5★', label: 'Google Rating' },
]

const coatingServices = [
  {
    num: '01',
    brand: 'Gtechniq',
    name: 'Crystal Serum Ultra',
    tag: 'Accredited Installer · Only Shop in the Area',
    desc: 'Our premium flagship coating — the absolute best in protection, durability, and performance. Dual-layer 10H/7H system delivers swirl resistance no standard 9H coating can match. Withstands temperatures from −40°C to +250°C.',
    features: [
      'Paint · Windows · Wheels · Calipers · Trim',
      'Full wash, decontamination & clay bar included',
      'Paint correction included',
      'Accredited installer — only shop in area',
    ],
    pricing: [
      { label: 'Small Cars', price: '$1,500' },
      { label: 'Medium Cars', price: '$1,750' },
      { label: 'Large Cars', price: '$2,000' },
    ],
    warranty: '9-Year Warranty',
  },
  {
    num: '02',
    brand: 'CCI',
    name: 'Revolution',
    tag: 'Micro Sediment Suspension Technology',
    desc: "CCI's flagship coating. Micro Sediment Suspension technology delivers a denser load of ceramic material that bonds harder to your paint for stronger, longer-lasting protection.",
    features: [
      '6+ years of protection',
      'Micro Sediment Suspension — maximum ceramic density',
      'Single coat covers paint, trim, plastics & wheels',
      'Unmatched hydrophobic performance',
    ],
    pricing: [{ label: 'Flagship', price: 'Call for Pricing' }],
    warranty: '6+ Year Protection',
  },
  {
    num: '03',
    brand: 'CCI',
    name: 'Advance',
    tag: 'Best Value',
    desc: "CCI's premier entry coating — engineered with the same proprietary Sediment Suspension technology as Revolution but tuned for a 3–5 year protection window. Outstanding value for drivers who want professional-grade protection.",
    features: [
      '3–5 years of protection',
      'Sediment Suspension — full-strength formula',
      'Ultra-high gloss · super slick surface',
      'Paint, trim, plastics & wheels — one product',
    ],
    pricing: [{ label: 'Best Value', price: 'Call for Pricing' }],
    warranty: '3–5 Year Protection',
  },
]

const ppfPackages = [
  {
    name: 'Full Front End',
    tag: 'Most Popular',
    desc: 'Front bumper, headlights, partial hood & partial fenders — the highest-impact zones on the road.',
  },
  {
    name: 'Track Pack',
    tag: 'Maximum Coverage',
    desc: 'Full hood, full fenders, bumper, mirrors & headlights — ideal for daily drivers wanting maximum peace of mind.',
  },
  {
    name: 'Full Vehicle',
    tag: 'Total Protection',
    desc: 'Every painted panel protected — the ultimate solution for exotics, luxury vehicles, and collectors who refuse to compromise.',
  },
]

const processSteps = [
  {
    num: '01',
    title: 'Consultation',
    desc: 'We assess your vehicle, goals, and budget to recommend the ideal protection package.',
  },
  {
    num: '02',
    title: 'Decontamination',
    desc: 'Full wash, clay bar, iron decontamination, and surface prep before any work begins.',
  },
  {
    num: '03',
    title: 'Correction',
    desc: 'Paint correction removes defects so your finish is flawless before coating or film.',
  },
  {
    num: '04',
    title: 'Protection',
    desc: 'Ceramic coating or PPF applied with precision by certified installers. Inspect and deliver.',
  },
]

const trustPoints = [
  {
    title: 'Gtechniq Accredited',
    desc: 'Certified for Crystal Serum Ultra — the highest tier of ceramic protection. Professional warranty included.',
  },
  {
    title: 'XPEL Authorized',
    desc: 'Factory-trained in XPEL Ultimate Plus and Stealth PPF. Computer-cut templates. 10-year manufacturer warranty.',
  },
  {
    title: 'Paint Correction',
    desc: 'Defects removed, not hidden. Multi-stage machine polishing before any coating touches the surface.',
  },
  {
    title: 'Braselton, Georgia',
    desc: 'Serving Atlanta metro and Northeast Georgia. Climate-controlled shop built for precision work.',
  },
]

const recentWork = [
  { title: 'Porsche Cayenne GTS', service: 'XPEL Ultimate Plus · Full Front', img: galleryImages[0] },
  { title: 'Porsche Cayenne GTS', service: 'Crystal Serum Ultra · Paint Correction', img: galleryImages[1] },
  { title: 'GMC Sierra Denali', service: 'XPEL Stealth · Full Wrap', img: galleryImages[2] },
  { title: 'Aston Martin DB11', service: 'XPEL Ultimate Plus · Full PPF', img: galleryImages[3] },
  { title: 'BMW i8', service: 'XPEL Ultimate Plus · Full PPF', img: galleryImages[4] },
  { title: 'Corvette Z06 C8', service: 'Crystal Serum Ultra · Ceramic Coating', img: galleryImages[5] },
]

/* ─── Style constants ──────────────────────────────────────── */
const S = {
  section: {
    padding: 'clamp(48px, 8vw, 96px) clamp(20px, 5.5vw, 48px)',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  eyebrow: {
    fontFamily: 'var(--font-barlow-cond), sans-serif',
    fontSize: '11px',
    fontWeight: 600,
    letterSpacing: '4px',
    textTransform: 'uppercase',
    color: '#1a8fff',
    marginBottom: '16px',
    display: 'block',
  },
  sectionTitle: {
    fontFamily: 'var(--font-bebas-neue), sans-serif',
    fontSize: 'clamp(48px, 6vw, 80px)',
    lineHeight: 0.9,
    letterSpacing: '2px',
    marginBottom: '48px',
  },
  cardLabel: {
    fontFamily: 'var(--font-barlow-cond), sans-serif',
    fontSize: '11px',
    fontWeight: 600,
    letterSpacing: '3px',
    textTransform: 'uppercase',
  },
}

const BG = {
  primary: 'radial-gradient(ellipse 90% 55% at 25% 100%, rgba(26,143,255,0.055) 0%, transparent 58%), #080a0c',
  alt:     'radial-gradient(ellipse 90% 55% at 75% 100%, rgba(26,143,255,0.045) 0%, transparent 58%), #0e1216',
}

const GLOW = '0 0 80px rgba(26,143,255,0.2), 0 0 160px rgba(26,143,255,0.08)'

const S3 = [
  { transform: 'translateY(-8px) scale(1.013)' },
  { transform: 'translateY(10px) scale(0.990)' },
  { transform: 'translateY(2px)  scale(1.002)' },
]
const S4 = [
  { transform: 'translateY(0px)' },
  { transform: 'translateY(-9px)' },
  { transform: 'translateY(-16px)' },
  { transform: 'translateY(-7px)' },
]
const S6 = [
  { transform: 'translateY(0px)   scale(1.006)' },
  { transform: 'translateY(18px)  scale(0.993)' },
  { transform: 'translateY(9px)   scale(1.000)' },
  { transform: 'translateY(-6px)  scale(1.006)' },
  { transform: 'translateY(14px)  scale(0.994)' },
  { transform: 'translateY(-10px) scale(1.008)' },
]

/* ─── Page ─────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <SiteGate />
      <ParallaxScroll />
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section
        className="zd-hero"
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        {/* Ken Burns background */}
        <div
          data-parallax
          data-parallax-speed="0.28"
          style={{ position: 'absolute', top: '-15%', bottom: '-15%', left: 0, right: 0, zIndex: 0 }}
        >
          <Image
            src={heroImage}
            alt="Zero Defects ATL shop"
            fill
            priority
            className="ken-burns"
            style={{
              objectFit: 'cover',
              objectPosition: 'center 40%',
              filter: 'brightness(0.82) contrast(1.08) saturate(0.88)',
            }}
          />
        </div>

        {/* Gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(105deg, rgba(8,10,12,0.88) 40%, rgba(8,10,12,0.45) 100%)',
        }} />

        {/* Blue accent line at base */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', zIndex: 3, pointerEvents: 'none',
          background: 'linear-gradient(90deg, transparent, #1a8fff, #00e5a0, transparent)',
        }} />

        {/* Wordmark — bottom-left */}
        <div style={{
          position: 'absolute',
          bottom: 0, left: 0,
          zIndex: 2,
          padding: '0 0 clamp(200px, 34vh, 380px) clamp(12px, 2vw, 24px)',
        }}>
          <span style={{ ...S.eyebrow, marginBottom: '12px' }}>
            Gtechniq Crystal Serum Ultra · XPEL Authorized
          </span>
          <h1 style={{
            fontFamily: 'var(--font-bebas-neue), sans-serif',
            fontSize: 'clamp(54px, 9vw, 120px)',
            lineHeight: 0.88,
            letterSpacing: '4px',
            margin: 0,
          }}>
            <span style={{ display: 'block', color: '#f0f4f8' }}>ZERO</span>
            <span className="stroke-text" style={{ display: 'block' }}>DEFECTS</span>
          </h1>
        </div>

        {/* Bottom fade */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: '200px', zIndex: 3, pointerEvents: 'none',
          background: 'linear-gradient(to bottom, transparent, #080a0c)',
        }} />
      </section>


      {/* ── STATS BAR ─────────────────────────────────────────── */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)', background: BG.alt }}>
        <div className="zd-grid-stats">
          {stats.map((s, i) => (
            <div
              key={s.label}
              style={{
                padding: '40px 24px',
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                textAlign: 'center',
              }}
            >
              <div className="gradient-text" style={{ fontFamily: 'var(--font-bebas-neue), sans-serif', fontSize: '52px', lineHeight: 1, marginBottom: '8px' }}>
                {s.num}
              </div>
              <div style={{ ...S.cardLabel, fontSize: '11px', color: 'rgba(240,244,248,0.7)' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── STATEMENT ─────────────────────────────────────────── */}
      <section style={{ background: '#080a0c', padding: 'clamp(64px,10vw,112px) clamp(20px,5.5vw,48px)', textAlign: 'center' }}>
        <RevealText
          style={{
            fontFamily: 'var(--font-barlow-body), sans-serif',
            fontSize: 'clamp(20px, 3vw, 32px)',
            fontWeight: 300,
            lineHeight: 1.55,
            color: 'rgba(240,244,248,0.75)',
            maxWidth: '900px',
            margin: '0 auto',
            letterSpacing: '0.01em',
          }}
        >
          Flawless protection for vehicles that deserve nothing less. Ceramic coatings, paint protection film, and paint correction — applied with the precision of people who take quality personally.
        </RevealText>
      </section>

      {/* ── SERVICES — CERAMIC COATINGS ───────────────────────── */}
      <section id="services" style={{ background: BG.primary, padding: '96px 0' }}>
        <div style={S.section}>
          <span style={S.eyebrow} data-reveal>What We Do</span>
          <h2 style={{ ...S.sectionTitle, textShadow: GLOW }} data-reveal data-reveal-delay="1">Our Services</h2>

          {/* Ceramic Coatings */}
          <div style={{ marginBottom: '80px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px', paddingBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <span style={{ ...S.cardLabel, color: '#1a8fff', fontSize: '11px', letterSpacing: '4px' }}>01</span>
              <h3 style={{ fontFamily: 'var(--font-barlow-cond), sans-serif', fontSize: '22px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#f0f4f8' }}>Ceramic Coatings</h3>
              <span style={{ ...S.cardLabel, fontSize: '10px', color: 'rgba(240,244,248,0.4)' }}>Two Premium Brands · One Elite Shop</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2px' }}>
              {coatingServices.map((svc, i) => (
                <div key={svc.name} className="zd-card" style={{ padding: '36px', ...S3[i % 3] }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <span className="gradient-text" style={{ fontFamily: 'var(--font-bebas-neue), sans-serif', fontSize: '48px', lineHeight: 1 }}>{svc.num}</span>
                    <span style={{ ...S.cardLabel, fontSize: '10px', color: '#00e5a0', letterSpacing: '2px', textAlign: 'right', maxWidth: '120px', lineHeight: 1.4 }}>{svc.warranty}</span>
                  </div>
                  <div style={{ ...S.cardLabel, fontSize: '10px', color: '#1a8fff', marginBottom: '4px' }}>{svc.brand}</div>
                  <h4 style={{ fontFamily: 'var(--font-barlow-cond), sans-serif', fontSize: '22px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#f0f4f8', marginBottom: '4px' }}>{svc.name}</h4>
                  <div style={{ ...S.cardLabel, fontSize: '10px', color: 'rgba(240,244,248,0.4)', marginBottom: '16px' }}>{svc.tag}</div>
                  <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'rgba(240,244,248,0.6)', marginBottom: '20px' }}>{svc.desc}</p>
                  <ul style={{ listStyle: 'none', padding: 0, marginBottom: '24px' }}>
                    {svc.features.map((f) => (
                      <li key={f} style={{ fontSize: '13px', color: 'rgba(240,244,248,0.6)', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.04)', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                        <span style={{ color: '#1a8fff', flexShrink: 0 }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {svc.pricing.map((p) => (
                      <div key={p.label} style={{ flex: 1, minWidth: '100px', background: 'rgba(26,143,255,0.06)', border: '1px solid rgba(26,143,255,0.15)', borderRadius: '4px', padding: '12px', textAlign: 'center' }}>
                        <div style={{ ...S.cardLabel, fontSize: '10px', color: 'rgba(240,244,248,0.4)', marginBottom: '4px' }}>{p.label}</div>
                        <div style={{ fontFamily: 'var(--font-barlow-cond), sans-serif', fontSize: '16px', fontWeight: 700, color: '#f0f4f8' }}>{p.price}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PPF */}
          <div style={{ marginBottom: '80px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px', paddingBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <span style={{ ...S.cardLabel, color: '#1a8fff', fontSize: '11px', letterSpacing: '4px' }}>02</span>
              <h3 style={{ fontFamily: 'var(--font-barlow-cond), sans-serif', fontSize: '22px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#f0f4f8' }}>Paint Protection Film</h3>
              <span style={{ ...S.cardLabel, fontSize: '10px', color: 'rgba(240,244,248,0.4)' }}>XPEL Authorized Installer · 10-Year Warranty</span>
            </div>

            <div className="zd-grid-ppf-split">
              <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'rgba(240,244,248,0.6)' }}>
                Self-healing TPU film that defends against rock chips, scratches, road debris & UV.
                Available in gloss (XPEL Ultimate Plus) or satin matte (XPEL Stealth). Backed by a
                10-year XPEL manufacturer warranty. We completed factory training certification at
                XPEL headquarters in San Antonio, TX.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'Self-healing top coat — scuffs disappear with heat',
                  'OEM approved by virtually all car manufacturers',
                  'XPEL factory-trained & certified — San Antonio, TX',
                  'Computer-cut templates for seamless, precision fitment',
                  'XPEL Ultimate Plus (gloss) or XPEL Stealth (matte)',
                ].map((f) => (
                  <div key={f} style={{ fontSize: '13px', color: 'rgba(240,244,248,0.6)', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#00e5a0', flexShrink: 0 }}>✓</span>
                    {f}
                  </div>
                ))}
              </div>
            </div>

            <div className="zd-grid-ppf-packages" style={{ gap: '2px' }}>
              {ppfPackages.map((pkg, i) => (
                <div key={pkg.name} className="zd-card" style={{ padding: '32px', borderTop: i === 0 ? '2px solid #1a8fff' : '2px solid transparent' }}>
                  {i === 0 && <span style={{ ...S.cardLabel, fontSize: '10px', color: '#1a8fff', display: 'block', marginBottom: '12px' }}>★ Most Popular</span>}
                  <h4 style={{ fontFamily: 'var(--font-barlow-cond), sans-serif', fontSize: '20px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#f0f4f8', marginBottom: '4px' }}>{pkg.name}</h4>
                  <div style={{ ...S.cardLabel, fontSize: '10px', color: '#00e5a0', marginBottom: '16px' }}>{pkg.tag}</div>
                  <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'rgba(240,244,248,0.6)', marginBottom: '24px' }}>{pkg.desc}</p>
                  <a href="tel:4044063355" style={{ fontFamily: 'var(--font-barlow-cond), sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#1a8fff', textDecoration: 'none', border: '1px solid rgba(26,143,255,0.3)', padding: '10px 20px', borderRadius: '4px', display: 'inline-block' }}>
                    Call for Pricing →
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Paint Correction */}
          <div className="zd-card" style={{ padding: '40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '32px', flexWrap: 'wrap' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <span style={{ ...S.cardLabel, color: '#1a8fff', fontSize: '11px', letterSpacing: '4px' }}>03</span>
                <h3 style={{ fontFamily: 'var(--font-barlow-cond), sans-serif', fontSize: '22px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#f0f4f8' }}>Paint Correction</h3>
              </div>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'rgba(240,244,248,0.6)', maxWidth: '520px' }}>
                Machine polishing to remove swirl marks, water spots, oxidation, and light scratches —
                restoring depth and clarity to your paint before protection is applied.
              </p>
            </div>
            <a href="tel:4044063355" style={{ fontFamily: 'var(--font-barlow-cond), sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#080a0c', background: 'linear-gradient(90deg, #1a8fff, #00e5a0)', padding: '14px 32px', borderRadius: '4px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
              Contact for Pricing
            </a>
          </div>
        </div>
      </section>

      {/* ── OUR WORK ──────────────────────────────────────────── */}
      <section id="work" style={{ background: BG.alt, borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '96px 0' }}>
        <div style={S.section}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <span style={S.eyebrow} data-reveal>Recent Projects</span>
              <h2 style={{ ...S.sectionTitle, marginBottom: 0, textShadow: GLOW }} data-reveal data-reveal-delay="1">Our Work</h2>
            </div>
            <a href="/gallery" style={{ fontFamily: 'var(--font-barlow-cond), sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: '#1a8fff', textDecoration: 'none' }}>
              Full Gallery →
            </a>
          </div>

          <div
            data-parallax
            data-parallax-speed="-0.06"
            className="zd-grid-work"
            style={{ gap: '12px' }}
          >
            {recentWork.map((item, i) => (
              <div
                key={i}
                style={{
                  position: 'relative',
                  aspectRatio: '4/3',
                  overflow: 'hidden',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  ...S6[i % S6.length],
                  boxShadow: i % 3 === 0
                    ? '0 24px 64px rgba(26,143,255,0.15)'
                    : i % 3 === 1
                    ? '0 32px 80px rgba(0,0,0,0.4)'
                    : '0 16px 48px rgba(26,143,255,0.08)',
                }}
              >
                <Image src={item.img} alt={item.title} fill style={{ objectFit: 'cover', transition: 'transform 0.4s' }} sizes="(max-width: 768px) 100vw, 33vw" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,10,12,0.9) 0%, transparent 60%)' }} />
                <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-barlow-cond), sans-serif', fontSize: '16px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: '#f0f4f8', marginBottom: '4px' }}>{item.title}</div>
                  <div style={{ ...S.cardLabel, fontSize: '10px', color: '#1a8fff' }}>{item.service}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────── */}
      <section id="process" style={{ position: 'relative', padding: '96px 0', overflow: 'hidden' }}>
        <div
          data-parallax
          data-parallax-speed="0.18"
          style={{ position: 'absolute', top: '-15%', bottom: '-15%', left: 0, right: 0, zIndex: 0 }}
        >
          <Image src="/images/gallery/IMG_8856.jpeg" alt="" fill style={{ objectFit: 'cover', objectPosition: 'center 40%' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,10,12,0.82)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, #080a0c 0%, transparent 30%, transparent 70%, #080a0c 100%)' }} />
        </div>
        <div style={{ ...S.section, position: 'relative', zIndex: 1 }}>
          <span style={S.eyebrow} data-reveal>How It Works</span>
          <h2 style={{ ...S.sectionTitle, textShadow: GLOW }} data-reveal data-reveal-delay="1">The Process</h2>

          <div className="zd-grid-process" style={{ gap: '16px' }}>
            {processSteps.map((step, i) => (
              <div key={step.num} className="zd-card" style={{ padding: '40px 32px', position: 'relative', ...S4[i] }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: i === 0 ? 'linear-gradient(90deg, #1a8fff, #00e5a0)' : 'transparent' }} />
                <div className="gradient-text" style={{ fontFamily: 'var(--font-bebas-neue), sans-serif', fontSize: '64px', lineHeight: 1, marginBottom: '16px' }}>{step.num}</div>
                <h3 style={{ fontFamily: 'var(--font-barlow-cond), sans-serif', fontSize: '18px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#f0f4f8', marginBottom: '12px' }}>{step.title}</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'rgba(240,244,248,0.72)' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ────────────────────────────────────────── */}
      <section id="about" style={{ background: '#080a0c', borderTop: '1px solid rgba(255,255,255,0.06)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'relative', padding: 'clamp(72px,10vw,120px) clamp(20px,5.5vw,48px) 0', maxWidth: '1200px', margin: '0 auto' }}>
          <span style={S.eyebrow} data-reveal>The Philosophy</span>

          {/* Ghost background text */}
          <div style={{ position: 'absolute', right: '-2%', top: '40px', fontFamily: 'var(--font-bebas-neue), sans-serif', fontSize: 'clamp(120px, 22vw, 280px)', lineHeight: 0.85, letterSpacing: '4px', color: 'rgba(255,255,255,0.025)', userSelect: 'none', pointerEvents: 'none', whiteSpace: 'nowrap' }} aria-hidden>
            ZERO<br />DEFECTS
          </div>

          <h2 data-reveal data-reveal-delay="1" style={{ fontFamily: 'var(--font-bebas-neue), sans-serif', fontSize: 'clamp(64px, 11vw, 140px)', lineHeight: 0.88, letterSpacing: '4px', marginTop: '20px', marginBottom: '32px', position: 'relative', zIndex: 1 }}>
            <span style={{ display: 'block', color: '#f0f4f8' }}>Zero</span>
            <span className="gradient-text" style={{ display: 'block' }}>Defects</span>
          </h2>

          <p data-reveal data-reveal-delay="2" style={{ fontSize: '15px', lineHeight: 1.85, color: 'rgba(240,244,248,0.42)', maxWidth: '460px', position: 'relative', zIndex: 1, paddingBottom: 'clamp(56px,8vw,96px)' }}>
            A standard born inside the United States military — governing every decision made in this shop, from the first inspection to the final coat.
          </p>
        </div>

        {/* Principles */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: 'clamp(20px,5.5vw,48px)', top: 0, bottom: 0, width: '1px', background: 'linear-gradient(to bottom, rgba(26,143,255,0.5), rgba(0,229,160,0.25) 60%, transparent)', pointerEvents: 'none' }} />

          {[
            { n: '01', title: 'Quality is conformance to requirements', indent: '0%', accentColor: '#1a8fff' },
            { n: '02', title: 'Defect prevention is preferable to quality inspection and correction', indent: '8%', accentColor: '#00c48a' },
            { n: '03', title: 'Zero Defects is the quality standard', indent: '4%', accentColor: '#1a8fff' },
            { n: '04', title: 'Quality is measured in monetary terms — the Price of Nonconformance', indent: '0%', accentColor: '#00e5a0' },
          ].map((p, i) => (
            <div key={p.n} data-reveal data-reveal-delay={String((i % 2) + 1)} style={{ borderTop: '1px solid rgba(255,255,255,0.055)', position: 'relative' }}>
              <div style={{ position: 'absolute', left: 'calc(clamp(20px,5.5vw,48px) - 4px)', top: '50%', width: '9px', height: '9px', borderRadius: '50%', background: p.accentColor, boxShadow: `0 0 12px ${p.accentColor}88`, transform: 'translateY(-50%)', zIndex: 2 }} />
              <div style={{ padding: `clamp(40px,6vw,68px) clamp(20px,5.5vw,48px)`, paddingLeft: `calc(clamp(20px,5.5vw,48px) + 28px)`, marginLeft: p.indent, position: 'relative' }}>
                <div style={{ position: 'absolute', right: i % 2 === 0 ? '-10px' : 'auto', left: i % 2 === 1 ? '-10px' : 'auto', top: '50%', transform: 'translateY(-50%)', fontFamily: 'var(--font-bebas-neue), sans-serif', fontSize: 'clamp(100px, 16vw, 180px)', lineHeight: 1, color: 'rgba(255,255,255,0.028)', userSelect: 'none', pointerEvents: 'none', letterSpacing: '2px' }}>{p.n}</div>
                <div style={{ fontFamily: 'var(--font-bebas-neue), sans-serif', fontSize: '11px', letterSpacing: '4px', color: p.accentColor, marginBottom: '14px', opacity: 0.9 }}>{p.n}</div>
                <h3 style={{ fontFamily: 'var(--font-bebas-neue), sans-serif', fontSize: 'clamp(26px, 4vw, 48px)', lineHeight: 1.05, letterSpacing: '1px', color: '#f0f4f8', fontWeight: 400, maxWidth: '720px' }}>{p.title}</h3>
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.055)' }} />
        </div>

        {/* Attribution */}
        <div data-reveal style={{ background: 'rgba(255,255,255,0.018)', borderTop: '1px solid rgba(255,255,255,0.06)', padding: 'clamp(40px,6vw,72px) clamp(20px,5.5vw,48px)' }}>
          <div style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px', flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontFamily: 'var(--font-barlow-cond), sans-serif', fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', color: 'rgba(240,244,248,0.25)', marginBottom: '8px' }}>Source</p>
              <p style={{ fontFamily: 'var(--font-barlow-cond), sans-serif', fontSize: '15px', fontWeight: 700, letterSpacing: '1px', color: 'rgba(240,244,248,0.8)', marginBottom: '4px' }}>United States Army. Pershing Missile Program.</p>
              <p style={{ fontSize: '13px', color: 'rgba(240,244,248,0.35)' }}>Philip Crosby, Founder of the Standard Philosophy; <em>Zero Defects</em></p>
            </div>
            <p style={{ fontFamily: 'var(--font-bebas-neue), sans-serif', fontSize: 'clamp(14px, 2vw, 20px)', letterSpacing: '5px', background: 'linear-gradient(90deg, #1a8fff, #00e5a0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', whiteSpace: 'nowrap', flexShrink: 0 }}>
              Proudly Preserving American Values
            </p>
          </div>
        </div>
      </section>

      {/* ── WHY ZERO DEFECTS ──────────────────────────────────── */}
      <section style={{ position: 'relative', borderTop: '1px solid rgba(255,255,255,0.07)', padding: '96px 0', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,10,12,0.92)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(26,143,255,0.08) 0%, transparent 70%)' }} />

        <div style={{ ...S.section, position: 'relative', zIndex: 1 }}>
          <span style={S.eyebrow} data-reveal>Why Zero Defects</span>
          <h2 style={{ ...S.sectionTitle, textShadow: GLOW }} data-reveal data-reveal-delay="1">Built on Precision</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {trustPoints.map((pt, i) => (
              <div
                key={pt.title}
                data-reveal
                data-reveal-delay={String((i % 2) + 1)}
                className="zd-trust-row"
                style={{ display: 'grid', gridTemplateColumns: '56px 1fr 2fr', gap: '32px', alignItems: 'start', padding: '36px 0', borderBottom: i < trustPoints.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}
              >
                <div style={{ fontFamily: 'var(--font-bebas-neue), sans-serif', fontSize: '13px', letterSpacing: '3px', background: 'linear-gradient(135deg, #1a8fff, #00e5a0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', paddingTop: '3px' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 style={{ fontFamily: 'var(--font-barlow-cond), sans-serif', fontSize: '17px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#f0f4f8', paddingTop: '2px' }}>{pt.title}</h3>
                <p className="zd-trust-row-desc" style={{ fontSize: '15px', lineHeight: 1.75, color: 'rgba(240,244,248,0.68)' }}>{pt.desc}</p>
              </div>
            ))}
          </div>

          <div data-reveal style={{ marginTop: '56px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--font-barlow-cond), sans-serif', fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', color: 'rgba(240,244,248,0.3)', flexShrink: 0 }}>Certified by</span>
            {['Gtechniq Crystal Serum Ultra', 'XPEL Authorized', 'Glassparency Authorized'].map((c) => (
              <div key={c} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-barlow-cond), sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(240,244,248,0.75)' }}>
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'linear-gradient(135deg, #1a8fff, #00e5a0)', flexShrink: 0 }} />
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────────── */}
      <section id="contact" style={{ background: BG.alt, padding: '96px 0' }}>
        <div style={S.section}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }} className="zd-grid-trust">
            <div>
              <span style={S.eyebrow}>Get a Quote</span>
              <h2 style={{ ...S.sectionTitle, textShadow: GLOW, marginBottom: '24px' }}>
                Let&apos;s Protect Your Vehicle
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'rgba(240,244,248,0.55)', marginBottom: '40px' }}>
                Tell us about your vehicle and what you&apos;re looking for. We&apos;ll get back to you within 24 hours with a custom quote.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { icon: '📍', label: 'Location', val: 'Braselton, Georgia' },
                  { icon: '📞', label: 'Phone', val: '404-406-3355', href: 'tel:4044063355' },
                  { icon: '⏱', label: 'Response Time', val: 'Within 24 hours' },
                ].map((item) => (
                  <div key={item.label} style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <span style={{ fontSize: '18px' }}>{item.icon}</span>
                    <div>
                      <div style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(240,244,248,0.35)', marginBottom: '2px' }}>{item.label}</div>
                      {item.href
                        ? <a href={item.href} style={{ fontSize: '15px', color: '#1a8fff', textDecoration: 'none' }}>{item.val}</a>
                        : <div style={{ fontSize: '15px', color: 'rgba(240,244,248,0.7)' }}>{item.val}</div>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="zd-card" style={{ padding: '40px' }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────── */}
      <section style={{ background: 'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(26,143,255,0.14) 0%, rgba(0,229,160,0.06) 60%, transparent 100%), #080a0c', borderTop: '1px solid rgba(26,143,255,0.2)', borderBottom: '1px solid rgba(26,143,255,0.2)', padding: '96px 48px', textAlign: 'center' }}>
        <span style={S.eyebrow}>Ready to Protect Your Investment?</span>
        <h2 style={{ fontFamily: 'var(--font-bebas-neue), sans-serif', fontSize: 'clamp(48px, 6vw, 80px)', lineHeight: 0.9, letterSpacing: '3px', marginBottom: '24px', textShadow: GLOW }}>
          Let&apos;s Get to Work
        </h2>
        <p style={{ fontSize: '16px', color: 'rgba(240,244,248,0.6)', maxWidth: '420px', margin: '0 auto 40px', lineHeight: 1.7 }}>
          Schedule a free consultation and get a custom quote for your vehicle.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="tel:4044063355" style={{ fontFamily: 'var(--font-barlow-cond), sans-serif', fontSize: '14px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#080a0c', background: 'linear-gradient(90deg, #1a8fff, #00e5a0)', padding: '16px 40px', borderRadius: '4px', textDecoration: 'none' }}>
            Call 404-406-3355
          </a>
          <a href="mailto:zerodefectsatl@gmail.com" style={{ fontFamily: 'var(--font-barlow-cond), sans-serif', fontSize: '14px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#f0f4f8', border: '1px solid rgba(255,255,255,0.2)', padding: '16px 40px', borderRadius: '4px', textDecoration: 'none' }}>
            Email Us
          </a>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────── */}
      <footer style={{ background: '#080a0c', borderTop: '1px solid rgba(255,255,255,0.07)', padding: '48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '36px', height: '36px', background: 'linear-gradient(135deg, #1a8fff, #00e5a0)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-bebas-neue), sans-serif', fontSize: '16px', color: '#080a0c' }}>ZD</div>
            <div>
              <div style={{ fontFamily: 'var(--font-barlow-cond), sans-serif', fontWeight: 700, fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', color: '#f0f4f8' }}>Zero Defects</div>
              <div style={{ fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(240,244,248,0.4)' }}>Braselton, GA 30517</div>
            </div>
          </div>

          <nav style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            {[['#services', 'Services'], ['#work', 'Our Work'], ['#about', 'About'], ['#contact', 'Contact']].map(([href, label]) => (
              <a key={href} href={href} style={{ fontFamily: 'var(--font-barlow-cond), sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(240,244,248,0.4)', textDecoration: 'none' }}>{label}</a>
            ))}
            <a href="https://instagram.com/zerodefectsatl" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-barlow-cond), sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(240,244,248,0.4)', textDecoration: 'none' }}>Instagram</a>
          </nav>

          <div style={{ fontSize: '12px', color: 'rgba(240,244,248,0.25)', fontFamily: 'var(--font-barlow-cond), sans-serif', letterSpacing: '1px' }}>
            © 2025 Zero Defects · Braselton, GA
          </div>
        </div>
      </footer>
    </>
  )
}
