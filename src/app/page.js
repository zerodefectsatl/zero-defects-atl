import Image from 'next/image'
import Navbar from '@/components/Navbar'
import SiteGate from '@/components/SiteGate'
import ParallaxScroll from '@/components/ParallaxScroll'
import ContactForm from '@/components/ContactForm'
import RevealText from '@/components/RevealText'
import HeroSlider from '@/components/HeroSlider'
import IntroCube from '@/components/IntroCube'
import LazyVideo from '@/components/LazyVideo'

const galleryImages = [
  '/images/gallery/IMG_7437.jpeg',
  '/images/gallery/IMG_7887.jpeg',
  '/images/gallery/IMG_8058.jpeg',
  '/images/gallery/IMG_8433.jpeg',
  '/images/gallery/IMG_8556.jpeg',
  '/images/gallery/IMG_8707.jpeg',
]

/* ─── Data ─────────────────────────────────────────────────── */
const reviews = [
  {
    name: 'Keith Campbell',
    ago: '6 years ago',
    text: 'The black paint came out looking like black chrome! Absolutely Beautiful, and bugs can now be wiped off easily. This process and this installer are well worth the money. I\'m bringing my other show car to him asap. Great Job Chris!',
    vehicle: 'ProTouring \'66 Fairlane',
  },
  {
    name: 'Kenny Fletcher',
    ago: '3 years ago',
    text: 'Blown away with the caliber and quality of work — from the GTechniq Crystal Serum Ceramic Coating to the XPEL PPF. His attention to every detail is incredible, just like his company name: ZERO DEFECTS. Could not recommend any higher!',
    vehicle: 'Ford Mach 1',
  },
  {
    name: 'Anthony Matthew',
    ago: '6 months ago',
    text: 'Chris did an outstanding and amazing job. When I got there to pick up my car, boy was I impressed. My car was looking amazing and brand new. He walked me around and explained everything. Customer service at its best. 10/10 stars.',
    vehicle: 'Ceramic Coating & PPF',
  },
]

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
    desc: 'The absolute best in ceramic protection. Dual-layer 10H/7H system delivers swirl resistance no 9H coating can match — rated from −40°C to +250°C.',
    features: [
      'Paint · Windows · Wheels · Calipers · Trim',
      'Full wash, decontamination & clay bar included',
      'Paint correction included',
      'Accredited installer — only shop in the area',
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
    desc: 'Micro Sediment Suspension packs more ceramic into every bond — harder adhesion, stronger protection, longer life.',
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
    desc: 'Same Sediment Suspension technology as Revolution, tuned for a 3–5 year window. Professional-grade protection at the right price.',
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
    desc: 'Front bumper, headlights, partial hood & fenders — the highest-impact zones on any road.',
  },
  {
    name: 'Track Pack',
    tag: 'Maximum Coverage',
    desc: 'Full hood, fenders, bumper, mirrors & headlights — maximum peace of mind for daily drivers.',
  },
  {
    name: 'Full Vehicle',
    tag: 'Total Protection',
    desc: 'Every painted panel covered. The only choice for exotics, collectors, and anyone who refuses to compromise.',
  },
]

const processSteps = [
  {
    num: '01',
    title: 'Consultation',
    desc: 'We assess your vehicle and goals — then recommend exactly what it needs.',
  },
  {
    num: '02',
    title: 'Decontamination',
    desc: 'Full wash, clay bar, and iron decontamination. Surface is clean before anything touches it.',
  },
  {
    num: '03',
    title: 'Correction',
    desc: 'Defects removed, not hidden. Your finish is flawless before any product goes down.',
  },
  {
    num: '04',
    title: 'Protection',
    desc: 'Coating or film applied by certified hands. Inspected, detailed, and delivered.',
  },
]

const trustPoints = [
  {
    title: 'Gtechniq Accredited',
    desc: 'Certified for Crystal Serum Ultra — the highest tier of ceramic protection, with professional warranty.',
  },
  {
    title: 'XPEL Authorized',
    desc: 'Factory-trained at XPEL HQ. Computer-cut templates and 10-year manufacturer warranty on every install.',
  },
  {
    title: 'Paint Correction',
    desc: 'Defects removed, not hidden. Multi-stage polishing before any coating touches the paint.',
  },
  {
    title: 'Braselton, Georgia',
    desc: 'Serving Atlanta metro and Northeast Georgia from a climate-controlled shop built for precision.',
  },
]

const recentWork = [
  { title: 'Paint Correction', service: 'Multi-Stage Polish · Full Detail', img: galleryImages[0] },
  { title: 'Ceramic Coating', service: 'Crystal Serum Ultra · Gtechniq', img: galleryImages[1] },
  { title: 'Paint Protection Film', service: 'XPEL Ultimate Plus · Full Front', img: galleryImages[2] },
  { title: 'Paint Protection Film', service: 'XPEL Ultimate Plus · Full Vehicle', img: galleryImages[3] },
  { title: 'Ceramic Coating', service: 'Crystal Serum Ultra · Paint Correction', img: galleryImages[4] },
  { title: 'Ceramic Coating', service: 'CCI Revolution · Full Detail', img: galleryImages[5] },
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
    fontSize: '13px',
    fontWeight: 700,
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
    fontSize: '12px',
    fontWeight: 700,
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
      <IntroCube />
      <ParallaxScroll />
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section
        className="zd-hero"
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        {/* Sliding Ken Burns photo carousel */}
        <HeroSlider />

        {/* Gradient overlay — just enough for text legibility, lets photos breathe */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(to top right, rgba(8,10,12,0.48) 0%, rgba(8,10,12,0.12) 50%, rgba(8,10,12,0.02) 100%)',
        }} />

        {/* Wordmark — bottom-left; mobile override in zd-hero-wordmark class */}
        <div className="zd-hero-wordmark">
          <h1 style={{
            fontFamily: 'var(--font-bebas-neue), sans-serif',
            fontSize: 'clamp(54px, 9vw, 120px)',
            lineHeight: 0.88,
            letterSpacing: '4px',
            margin: 0,
          }}>
            <span style={{ display: 'block', color: '#f0f4f8', filter: 'drop-shadow(0 2px 20px rgba(0,0,0,0.92))' }}>ZERO</span>
            <span className="stroke-text" style={{ display: 'block' }}>DEFECTS</span>
          </h1>
        </div>

      </section>


      {/* ── STATEMENT ─────────────────────────────────────────── */}
      <section style={{ background: '#0e1216', padding: 'clamp(48px,7vw,80px) clamp(20px,5.5vw,48px)', textAlign: 'center' }}>
        <RevealText
          style={{
            fontFamily: 'var(--font-barlow-body), sans-serif',
            fontSize: 'clamp(22px, 3vw, 34px)',
            fontWeight: 500,
            lineHeight: 1.5,
            color: 'rgba(240,244,248,0.92)',
            maxWidth: '860px',
            margin: '0 auto',
            letterSpacing: '0.01em',
          }}
        >
          Precision protection for the vehicles that earn it. Ceramic coatings, PPF, and paint correction — by certified specialists who take quality personally.
        </RevealText>
      </section>

      {/* ── SERVICES — CERAMIC COATINGS ───────────────────────── */}
      <section id="services" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Parallax background — fixed on desktop, scroll on iOS (background-attachment:fixed broken on Safari) */}
        <div className="zd-services-bg" style={{
          position: 'absolute', inset: 0,
          backgroundImage: "url('/images/gallery/g-techniq-ultra-serum.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 50%',
          zIndex: 0,
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,10,12,0.82)', zIndex: 1 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 50% at 15% 65%, rgba(26,143,255,0.07) 0%, transparent 55%)', zIndex: 1 }} />

        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={S.section}>

            {/* Header — centered */}
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <span style={S.eyebrow} data-reveal>What We Do</span>
              <h2 style={{ ...S.sectionTitle, textShadow: GLOW }} data-reveal data-reveal-delay="1">Our Services</h2>
            </div>

            {/* ── 01 Ceramic Coatings ── */}
            <div style={{ marginBottom: '96px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '48px', paddingBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <span style={{ ...S.cardLabel, color: '#1a8fff', fontSize: '11px', letterSpacing: '4px' }}>01</span>
                <h3 style={{ fontFamily: 'var(--font-barlow-cond), sans-serif', fontSize: '22px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#f0f4f8' }}>Ceramic Coatings</h3>
                <span style={{ ...S.cardLabel, fontSize: '10px', color: 'rgba(240,244,248,0.35)' }}>Two Premium Brands · One Elite Shop</span>
              </div>

              {/* Crystal Serum Ultra — editorial, no photo */}
              <div data-reveal style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '56px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
                  <span className="gradient-text" style={{ fontFamily: 'var(--font-bebas-neue), sans-serif', fontSize: '64px', lineHeight: 1 }}>01</span>
                  <span style={{ ...S.cardLabel, fontSize: '10px', color: '#00e5a0', letterSpacing: '2px' }}>9-Year Warranty</span>
                </div>
                <div className="zd-csu-grid">
                  <div>
                    <div style={{ ...S.cardLabel, fontSize: '10px', color: '#1a8fff', marginBottom: '8px' }}>Gtechniq</div>
                    <h4 style={{ fontFamily: 'var(--font-barlow-cond), sans-serif', fontSize: '32px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#f0f4f8', marginBottom: '8px' }}>Crystal Serum Ultra</h4>
                    <div style={{ ...S.cardLabel, fontSize: '10px', color: 'rgba(240,244,248,0.38)' }}>Accredited Installer · Only Shop in the Area</div>
                  </div>
                  <div>
                    <p style={{ fontSize: '15px', lineHeight: 1.75, color: 'rgba(240,244,248,0.78)', marginBottom: '28px' }}>
                      The absolute best in ceramic protection. Dual-layer 10H/7H system delivers swirl resistance no 9H coating can match — rated from −40°C to +250°C.
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px' }} className="zd-features-2col">
                      {coatingServices[0].features.map((f) => (
                        <li key={f} style={{ fontSize: '14px', color: 'rgba(240,244,248,0.72)', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.04)', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                          <span style={{ color: '#1a8fff', flexShrink: 0 }}>✓</span>{f}
                        </li>
                      ))}
                    </ul>
                    <div style={{ display: 'flex', gap: '0', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                      {coatingServices[0].pricing.map((p, pi) => (
                        <div key={p.label} style={{ flex: 1, padding: '16px', borderRight: pi < coatingServices[0].pricing.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                          <div style={{ ...S.cardLabel, fontSize: '10px', color: 'rgba(240,244,248,0.35)', marginBottom: '4px' }}>{p.label}</div>
                          <div style={{ fontFamily: 'var(--font-barlow-cond), sans-serif', fontSize: '17px', fontWeight: 700, color: '#f0f4f8' }}>{p.price}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* CCI Revolution + Advance — open 2-col */}
              <div className="zd-cci-grid">
                {coatingServices.slice(1).map((svc, i) => (
                  <div key={svc.name} data-reveal style={{ padding: '48px 40px', borderRight: i === 0 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                      <span className="gradient-text" style={{ fontFamily: 'var(--font-bebas-neue), sans-serif', fontSize: '56px', lineHeight: 1 }}>{svc.num}</span>
                      <span style={{ ...S.cardLabel, fontSize: '10px', color: '#00e5a0', letterSpacing: '2px', textAlign: 'right' }}>{svc.warranty}</span>
                    </div>
                    <div style={{ ...S.cardLabel, fontSize: '10px', color: '#1a8fff', marginBottom: '4px' }}>{svc.brand}</div>
                    <h4 style={{ fontFamily: 'var(--font-barlow-cond), sans-serif', fontSize: '22px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#f0f4f8', marginBottom: '4px' }}>{svc.name}</h4>
                    <div style={{ ...S.cardLabel, fontSize: '10px', color: 'rgba(240,244,248,0.4)', marginBottom: '16px' }}>{svc.tag}</div>
                    <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'rgba(240,244,248,0.78)', marginBottom: '24px' }}>{svc.desc}</p>
                    <ul style={{ listStyle: 'none', padding: 0, marginBottom: '28px' }}>
                      {svc.features.map((f) => (
                        <li key={f} style={{ fontSize: '14px', color: 'rgba(240,244,248,0.72)', padding: '7px 0', borderBottom: '1px solid rgba(255,255,255,0.04)', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                          <span style={{ color: '#1a8fff', flexShrink: 0 }}>✓</span>{f}
                        </li>
                      ))}
                    </ul>
                    <a href="tel:4044063355" style={{ fontFamily: 'var(--font-barlow-cond), sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#1a8fff', textDecoration: 'none' }}>
                      Call for Pricing →
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* ── 02 PPF ── */}
            <div style={{ marginBottom: '96px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '48px', paddingBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <span style={{ ...S.cardLabel, color: '#1a8fff', fontSize: '11px', letterSpacing: '4px' }}>02</span>
                <h3 style={{ fontFamily: 'var(--font-barlow-cond), sans-serif', fontSize: '22px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#f0f4f8' }}>Paint Protection Film</h3>
                <span style={{ ...S.cardLabel, fontSize: '10px', color: 'rgba(240,244,248,0.35)' }}>XPEL Authorized Installer · 10-Year Warranty</span>
              </div>
              <div className="zd-grid-ppf-split">
                <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'rgba(240,244,248,0.78)' }}>
                  Self-healing TPU film — stops rock chips, scratches, and UV before they reach your paint.
                  Available in gloss or matte. Factory-certified at XPEL HQ in San Antonio.
                  10-year manufacturer warranty included.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    'Self-healing top coat — scuffs disappear with heat',
                    'OEM approved by virtually all car manufacturers',
                    'XPEL factory-trained & certified — San Antonio, TX',
                    'Computer-cut templates for seamless, precision fitment',
                    'XPEL Ultimate Plus (gloss) or XPEL Stealth (matte)',
                  ].map((f) => (
                    <div key={f} style={{ fontSize: '14px', color: 'rgba(240,244,248,0.75)', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <span style={{ color: '#00e5a0', flexShrink: 0 }}>✓</span>{f}
                    </div>
                  ))}
                </div>
              </div>
              <div className="zd-grid-ppf-packages" style={{ gap: '0', marginTop: '48px' }}>
                {ppfPackages.map((pkg, i) => (
                  <div key={pkg.name} style={{ padding: '32px', borderTop: i === 0 ? '2px solid #1a8fff' : '1px solid rgba(255,255,255,0.07)' }}>
                    {i === 0 && <span style={{ ...S.cardLabel, fontSize: '10px', color: '#1a8fff', display: 'block', marginBottom: '12px' }}>★ Most Popular</span>}
                    <h4 style={{ fontFamily: 'var(--font-barlow-cond), sans-serif', fontSize: '20px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#f0f4f8', marginBottom: '4px' }}>{pkg.name}</h4>
                    <div style={{ ...S.cardLabel, fontSize: '10px', color: '#00e5a0', marginBottom: '16px' }}>{pkg.tag}</div>
                    <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'rgba(240,244,248,0.6)', marginBottom: '24px' }}>{pkg.desc}</p>
                    <a href="tel:4044063355" style={{ fontFamily: 'var(--font-barlow-cond), sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#1a8fff', textDecoration: 'none', borderBottom: '1px solid rgba(26,143,255,0.35)', paddingBottom: '2px' }}>
                      Call for Pricing →
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* ── 03 Paint Correction ── */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '32px', flexWrap: 'wrap', paddingTop: '40px', paddingBottom: '16px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
                  <span style={{ ...S.cardLabel, color: '#1a8fff', fontSize: '11px', letterSpacing: '4px' }}>03</span>
                  <h3 style={{ fontFamily: 'var(--font-barlow-cond), sans-serif', fontSize: '22px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#f0f4f8' }}>Paint Correction</h3>
                </div>
                <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'rgba(240,244,248,0.78)', maxWidth: '520px' }}>
                  Machine polishing removes swirls, water spots, and oxidation — restoring true depth before any coating goes on.
                </p>
              </div>
              <a href="tel:4044063355" style={{ fontFamily: 'var(--font-barlow-cond), sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#080a0c', background: 'linear-gradient(90deg, #1a8fff, #00e5a0)', padding: '14px 32px', borderRadius: '4px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                Contact for Pricing
              </a>
            </div>

          </div>
        </div>
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

      {/* ── REVIEWS ───────────────────────────────────────────── */}
      <section style={{ background: '#080a0c', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '80px 0' }}>
        <div style={S.section}>

          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span style={S.eyebrow} data-reveal>Google Reviews</span>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginTop: '4px' }}>
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ fontSize: '18px', color: '#f5c842' }}>★</span>
              ))}
              <span style={{ fontFamily: 'var(--font-barlow-cond), sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: 'rgba(240,244,248,0.45)', marginLeft: '8px' }}>5.0 · Google</span>
            </div>
          </div>

          <div className="zd-grid-reviews" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {reviews.map((r, i) => (
              <div key={r.name} data-reveal data-reveal-delay={String(i + 1)} style={{
                background: 'rgba(14,20,28,0.6)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '8px',
                padding: '36px 32px 32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                position: 'relative',
              }}>
                {/* Large quote mark */}
                <span style={{
                  position: 'absolute', top: '20px', right: '28px',
                  fontFamily: 'Georgia, serif',
                  fontSize: '72px', lineHeight: 1,
                  background: 'linear-gradient(135deg, #1a8fff, #00e5a0)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  opacity: 0.25,
                  userSelect: 'none',
                }}>"</span>

                {/* Stars */}
                <div style={{ display: 'flex', gap: '3px' }}>
                  {[...Array(5)].map((_, si) => (
                    <span key={si} style={{ fontSize: '13px', color: '#f5c842' }}>★</span>
                  ))}
                </div>

                {/* Review text */}
                <p style={{
                  fontFamily: 'var(--font-barlow-body), sans-serif',
                  fontSize: '15px', lineHeight: 1.75,
                  color: 'rgba(240,244,248,0.82)',
                  margin: 0, flex: 1,
                }}>"{r.text}"</p>

                {/* Reviewer */}
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '18px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-barlow-cond), sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#f0f4f8' }}>{r.name}</div>
                    <div style={{ fontFamily: 'var(--font-barlow-cond), sans-serif', fontSize: '11px', letterSpacing: '1px', color: '#1a8fff', marginTop: '3px' }}>{r.vehicle}</div>
                  </div>
                  <div style={{ fontFamily: 'var(--font-barlow-cond), sans-serif', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(240,244,248,0.25)' }}>{r.ago}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Google link */}
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <a
              href="https://maps.app.goo.gl/2vKxF6ayqwKjdA4i7"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: 'var(--font-barlow-cond), sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(240,244,248,0.35)', textDecoration: 'none' }}
            >
              Read all reviews on Google →
            </a>
          </div>

        </div>
      </section>

      {/* ── OUR WORK ──────────────────────────────────────────── */}
      <section id="work" style={{ background: BG.alt, borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '96px 0' }}>
        <div style={S.section}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={S.eyebrow} data-reveal>Recent Projects</span>
            <h2 style={{ ...S.sectionTitle, marginBottom: '20px', textShadow: GLOW }} data-reveal data-reveal-delay="1">Our Work</h2>
            <a href="/gallery" style={{ fontFamily: 'var(--font-barlow-cond), sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: '#1a8fff', textDecoration: 'none' }}>
              Full Gallery →
            </a>
          </div>

          <div
            data-parallax
            data-parallax-speed="-0.15"
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

          <div className="zd-process-grid">
            {processSteps.map((step, i) => (
              <div key={step.num} className="zd-process-cell" style={{
                borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                borderRight: i % 2 === 0 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              }}>
                <div className="gradient-text" style={{ fontFamily: 'var(--font-bebas-neue), sans-serif', fontSize: '80px', lineHeight: 1, marginBottom: '16px' }}>{step.num}</div>
                <h3 style={{ fontFamily: 'var(--font-barlow-cond), sans-serif', fontSize: '20px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#f0f4f8', marginBottom: '12px' }}>{step.title}</h3>
                <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'rgba(240,244,248,0.78)' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ────────────────────────────────────────── */}
      <section id="about" style={{ background: '#111418', borderTop: '1px solid rgba(232,228,218,0.08)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'relative', padding: 'clamp(72px,10vw,120px) clamp(20px,5.5vw,48px) 0', maxWidth: '1200px', margin: '0 auto' }}>
          <span style={S.eyebrow} data-reveal>The Philosophy</span>

          <h2 data-reveal data-reveal-delay="1" style={{ fontFamily: 'var(--font-bebas-neue), sans-serif', fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: 0.92, letterSpacing: '3px', marginTop: '20px', marginBottom: '28px', position: 'relative', zIndex: 1 }}>
            <span style={{ display: 'block', color: 'rgba(240,244,248,0.88)' }}>Zero</span>
            <span className="gradient-text" style={{ display: 'block' }}>Defects</span>
          </h2>

          <p data-reveal data-reveal-delay="2" style={{ fontSize: '14px', lineHeight: 1.9, color: 'rgba(232,228,218,0.38)', maxWidth: '420px', position: 'relative', zIndex: 1, paddingBottom: 'clamp(56px,8vw,96px)', letterSpacing: '0.02em' }}>
            A standard born inside the United States military — governing every decision made in this shop, from the first inspection to the final coat.
          </p>
        </div>

        {/* Principles */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: 'clamp(20px,5.5vw,48px)', top: 0, bottom: 0, width: '1px', background: 'linear-gradient(to bottom, rgba(26,143,255,0.4), rgba(0,229,160,0.2) 60%, transparent)', pointerEvents: 'none' }} />

          {[
            { n: '01', title: 'Quality is conformance to requirements', accentColor: '#1a8fff' },
            { n: '02', title: 'Defect prevention is preferable to quality inspection and correction', accentColor: '#00c48a' },
            { n: '03', title: 'Zero Defects is the quality standard', accentColor: '#1a8fff' },
            { n: '04', title: 'Quality is measured in monetary terms — the Price of Nonconformance', accentColor: '#00e5a0' },
          ].map((p, i) => (
            <div key={p.n} data-reveal data-reveal-delay={String((i % 2) + 1)} style={{ borderTop: '1px solid rgba(232,228,218,0.09)', position: 'relative' }}>
              <div style={{ position: 'absolute', left: 'calc(clamp(20px,5.5vw,48px) - 3px)', top: '50%', width: '7px', height: '7px', borderRadius: '50%', background: p.accentColor, boxShadow: `0 0 10px ${p.accentColor}66`, transform: 'translateY(-50%)', zIndex: 2 }} />
              <div style={{ padding: 'clamp(32px,4.5vw,52px) clamp(20px,5.5vw,48px)', paddingLeft: `calc(clamp(20px,5.5vw,48px) + 28px)` }}>
                <div style={{ fontFamily: 'var(--font-barlow-cond), sans-serif', fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', color: p.accentColor, marginBottom: '12px', opacity: 0.85 }}>{p.n}</div>
                <h3 style={{ fontFamily: 'var(--font-barlow-cond), sans-serif', fontSize: 'clamp(12px, 1.2vw, 15px)', fontWeight: 400, fontStyle: 'italic', lineHeight: 1.55, letterSpacing: '0.02em', color: 'rgba(232,228,218,0.65)', maxWidth: '620px' }}>{p.title}</h3>
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid rgba(232,228,218,0.09)' }} />
        </div>

        {/* Attribution */}
        <div data-reveal style={{ background: 'rgba(255,255,255,0.012)', borderTop: '1px solid rgba(232,228,218,0.08)', padding: 'clamp(40px,6vw,72px) clamp(20px,5.5vw,48px)' }}>
          <div style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px', flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontFamily: 'var(--font-barlow-cond), sans-serif', fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', color: 'rgba(232,228,218,0.22)', marginBottom: '8px' }}>Source</p>
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
        {/* Ferrari wheel video background — lazy-loaded when scrolled into view */}
        <LazyVideo
          src="/videos/ferrari-wheel.mp4"
          poster="/images/gallery/IMG_8707.jpeg"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            zIndex: 0,
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(26,143,255,0.07) 0%, transparent 70%)', zIndex: 1 }} />

        <div style={{ ...S.section, position: 'relative', zIndex: 2 }}>
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
                <p className="zd-trust-row-desc" style={{ fontSize: '15px', lineHeight: 1.75, color: 'rgba(240,244,248,0.82)' }}>{pt.desc}</p>
              </div>
            ))}
          </div>

          <div data-reveal style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--font-barlow-cond), sans-serif', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', color: 'rgba(240,244,248,0.45)', flexShrink: 0 }}>Certified by</span>
            {['Gtechniq Crystal Serum Ultra', 'XPEL Authorized', 'Glassparency Authorized'].map((c) => (
              <div key={c} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-barlow-cond), sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(240,244,248,0.82)' }}>
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
          <div className="zd-contact-grid">
            <div>
              <span style={{ ...S.eyebrow, color: '#f0f4f8' }}>Get a Quote</span>
              <h2 style={{ ...S.sectionTitle, color: '#f0f4f8', textShadow: 'none', marginBottom: '24px' }}>
                Let&apos;s Protect Your Vehicle
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'rgba(240,244,248,0.78)', marginBottom: '40px' }}>
                Tell us about your vehicle. We respond within 24 hours with a custom quote.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { icon: '📍', label: 'Location', val: '5450 Technology Pkwy, Suite 500\nBraselton, GA 30517', href: 'https://maps.google.com/?q=5450+Technology+Pkwy+Suite+500+Braselton+GA+30517' },
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


      {/* ── FOOTER ────────────────────────────────────────────── */}
      <footer style={{ background: '#080a0c', borderTop: '1px solid rgba(255,255,255,0.07)', padding: '48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '36px', height: '36px', background: 'linear-gradient(135deg, #1a8fff, #00e5a0)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-bebas-neue), sans-serif', fontSize: '16px', color: '#080a0c' }}>ZD</div>
            <div>
              <div style={{ fontFamily: 'var(--font-barlow-cond), sans-serif', fontWeight: 700, fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', color: '#f0f4f8' }}>Zero Defects</div>
              <div style={{ fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(240,244,248,0.4)' }}>5450 Technology Pkwy, Ste 500 · Braselton, GA 30517</div>
            </div>
          </div>

          <nav style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            {[['#services', 'Services'], ['#work', 'Our Work'], ['#process', 'Process'], ['#about', 'About'], ['#contact', 'Contact']].map(([href, label]) => (
              <a key={href} href={href} style={{ fontFamily: 'var(--font-barlow-cond), sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(240,244,248,0.4)', textDecoration: 'none' }}>{label}</a>
            ))}
            <a href="https://instagram.com/zerodefectsatl" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-barlow-cond), sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(240,244,248,0.4)', textDecoration: 'none' }}>Instagram</a>
          </nav>

          <div style={{ fontSize: '12px', color: 'rgba(240,244,248,0.25)', fontFamily: 'var(--font-barlow-cond), sans-serif', letterSpacing: '1px' }}>
            © {new Date().getFullYear()} Zero Defects · Braselton, GA
          </div>
        </div>
      </footer>
    </>
  )
}
