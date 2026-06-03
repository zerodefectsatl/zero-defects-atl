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
            <span style={{ display: 'block', color: '#1a8fff' }}>ZERO</span>
            <span style={{ display: 'block' }}>DEFECTS</span>
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
      <section id="services" style={{ position: 'relative', overflow: 'hidden', background: BG.primary }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, background: 'radial-gradient(ellipse 70% 50% at 15% 25%, rgba(26,143,255,0.07) 0%, transparent 55%)' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={S.section}>

            <div style={{ marginBottom: 'clamp(40px, 6vw, 72px)' }}>
              <span style={S.eyebrow} data-reveal>What We Do</span>
              <h2 style={{ ...S.sectionTitle, textShadow: GLOW, marginBottom: 0 }} data-reveal data-reveal-delay="1">Our Services</h2>
            </div>

            {/* 01 — Ceramic Coatings */}
            <div id="ceramic-coating" className="zd-svc-card2" data-reveal>
              <div className="zd-svc-card2__head">
                <span className="zd-svc-card2__num">01</span>
                <h3 className="zd-svc-card2__title">Ceramic Coatings</h3>
                <span className="zd-svc-card2__meta">Two Premium Brands · One Elite Shop</span>
              </div>
              <div className="zd-coat-grid">
                {coatingServices.map((svc) => (
                  <div key={svc.name} className="zd-coat-item">
                    <div className="zd-coat-item__top">
                      <span className="gradient-text zd-coat-item__num">{svc.num}</span>
                      <span className="zd-coat-item__warr">{svc.warranty}</span>
                    </div>
                    <div className="zd-svc-card2__brand">{svc.brand}</div>
                    <h4 className="zd-coat-item__name">{svc.name}</h4>
                    <div className="zd-coat-item__tag">{svc.tag}</div>
                    <p className="zd-coat-item__desc">{svc.desc}</p>
                    <ul className="zd-feat">
                      {svc.features.map((f) => (
                        <li key={f}><span className="zd-feat__tick">✓</span>{f}</li>
                      ))}
                    </ul>
                    <div className="zd-price-row">
                      {svc.pricing.map((p) => (
                        <div key={p.label} className="zd-price">
                          <div className="zd-price__label">{p.label}</div>
                          <div className="zd-price__val">{p.price}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 02 — Paint Protection Film */}
            <div id="ppf" className="zd-svc-card2" data-reveal>
              <div className="zd-svc-card2__head">
                <span className="zd-svc-card2__num">02</span>
                <h3 className="zd-svc-card2__title">Paint Protection Film</h3>
                <span className="zd-svc-card2__meta">XPEL Authorized · 10-Year Warranty</span>
              </div>
              <div className="zd-ppf-grid">
                <div>
                  <p className="zd-svc-lead">Self-healing TPU film — stops rock chips, scratches, and UV before they reach your paint. Available in gloss or matte. Factory-certified at XPEL HQ in San Antonio, with a 10-year manufacturer warranty.</p>
                  <ul className="zd-feat">
                    {['Self-healing top coat — scuffs vanish with heat', 'OEM approved by virtually all manufacturers', 'XPEL factory-trained & certified — San Antonio, TX', 'Computer-cut templates for seamless fitment', 'XPEL Ultimate Plus (gloss) or Stealth (matte)'].map((f) => (
                      <li key={f}><span className="zd-feat__tick">✓</span>{f}</li>
                    ))}
                  </ul>
                </div>
                <div className="zd-pkg-list">
                  {ppfPackages.map((pkg, i) => (
                    <div key={pkg.name} className={`zd-pkg${i === 0 ? ' zd-pkg--pop' : ''}`}>
                      {i === 0 && <span className="zd-pkg__pop">★ Most Popular</span>}
                      <h4 className="zd-pkg__name">{pkg.name}</h4>
                      <div className="zd-pkg__tag">{pkg.tag}</div>
                      <p className="zd-pkg__desc">{pkg.desc}</p>
                      <a href="tel:4044063355" className="zd-pkg__cta">Call for Pricing →</a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 03 — Paint Correction */}
            <div id="paint-correction" className="zd-svc-card2 zd-svc-card2--row" data-reveal>
              <div>
                <div className="zd-svc-card2__head zd-svc-card2__head--tight">
                  <span className="zd-svc-card2__num">03</span>
                  <h3 className="zd-svc-card2__title">Paint Correction</h3>
                </div>
                <p className="zd-svc-lead" style={{ maxWidth: 560, margin: '12px 0 0' }}>Machine polishing removes swirls, water spots, and oxidation — restoring true depth before any coating goes on.</p>
              </div>
              <a href="tel:4044063355" className="zd-cta-solid">Contact for Pricing</a>
            </div>

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
                  background: '#1a8fff',
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

      {/* ── PROCESS ───────────────────────────────────────────── */}
      <section id="process" style={{ position: 'relative', padding: 'clamp(64px, 9vw, 110px) 0', overflow: 'hidden', background: BG.alt }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, background: 'radial-gradient(ellipse 70% 50% at 80% 20%, rgba(26,143,255,0.07) 0%, transparent 55%)' }} />
        <div style={{ ...S.section, position: 'relative', zIndex: 1 }}>
          <span style={S.eyebrow} data-reveal>How It Works</span>
          <h2 style={{ ...S.sectionTitle, textShadow: GLOW }} data-reveal data-reveal-delay="1">The Process</h2>
          <div className="zd-timeline" data-reveal>
            {processSteps.map((step) => (
              <div key={step.num} className="zd-timeline__step">
                <span className="zd-timeline__dot" aria-hidden="true" />
                <div className="zd-timeline__num">{step.num}</div>
                <h3 className="zd-timeline__title">{step.title}</h3>
                <p className="zd-timeline__desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT US ──────────────────────────────────────────── */}
      <section id="about" style={{ position: 'relative', overflow: 'hidden', background: BG.primary, borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, background: 'radial-gradient(ellipse 70% 50% at 80% 12%, rgba(26,143,255,0.06) 0%, transparent 55%)' }} />
        <div style={{ ...S.section, position: 'relative', zIndex: 1 }}>
          <span style={S.eyebrow} data-reveal>Who We Are</span>
          <h2 style={{ ...S.sectionTitle, textShadow: GLOW }} data-reveal data-reveal-delay="1">The Standard Isn&rsquo;t Negotiable</h2>

          <div className="zd-about-grid">
            <div className="zd-about-body" data-reveal>
              <p>Some standards don&rsquo;t have a middle ground. You either meet them or you don&rsquo;t. That&rsquo;s the philosophy Chris Kessler built a career on.</p>
              <p>CK has spent more than 17 years in this industry — nearly his entire professional life. He didn&rsquo;t come up in a dealership detail bay. His experience runs deeper: hands-on work with professional race teams, where the relationship between surface preparation and performance is literal, not theoretical. Motorsport sharpens your eye. When you&rsquo;ve worked on cars that run at Road Atlanta, you stop tolerating imperfection — you develop a standard, and you hold to it.</p>
              <p>Zero Defects ATL is based in Braselton, Georgia — minutes from Road Atlanta, one of the most respected road courses in North America. This is Northeast Georgia: a region where exotic, luxury, and performance vehicles are part of everyday life, and where the people who own them expect more than an average shop can deliver.</p>
              <p>CK holds two of the most respected credentials in the protective coatings industry — an <strong>XPEL Authorized Installer</strong> for paint protection film, and a <strong>Gtechniq Crystal Serum Ultra Accredited Installer</strong>. These require factory training, documented application standards, and ongoing accountability to the manufacturer. When CK puts his name on a job, those credentials are on the line with it.</p>
              <p>The vehicles that come through reflect that standard: Ferraris, Porsches, Lamborghinis, McLarens, Aston Martins — owners who understand exactly what their car is worth, and what it takes to protect it properly.</p>
              <p>This has never been a volume shop. CK oversees every vehicle, every step. Some shops measure their week by how many cars they turn over. Zero Defects measures it by whether each car leaves better than its owner expected.</p>
            </div>
            <aside className="zd-about-aside" data-reveal data-reveal-delay="1">
              <blockquote className="zd-about-quote">&ldquo;The only Gtechniq Crystal Serum Ultra accredited installer in the area.&rdquo;</blockquote>
              <div className="zd-about-creds">
                <div className="zd-about-cred"><span className="zd-about-cred__k">XPEL</span><span className="zd-about-cred__v">Authorized Installer</span></div>
                <div className="zd-about-cred"><span className="zd-about-cred__k">Gtechniq</span><span className="zd-about-cred__v">Crystal Serum Ultra Accredited</span></div>
                <div className="zd-about-cred"><span className="zd-about-cred__k">17+ Years</span><span className="zd-about-cred__v">Motorsport-honed experience</span></div>
              </div>
            </aside>
          </div>

          <p className="zd-about-areas" data-reveal>Serving Braselton, Atlanta, Gainesville, Buford, Flowery Branch, Hoschton, Jefferson, Cumming, Suwanee &amp; all of Northeast Georgia.</p>
          <p className="zd-about-tag" data-reveal><span style={{ color: '#1a8fff' }}>Zero</span> <span style={{ color: '#f5ff36' }}>Defects</span> — because the standard isn&rsquo;t negotiable.</p>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────────── */}
      <section id="contact" style={{ position: 'relative', overflow: 'hidden', padding: '96px 0' }}>
        <LazyVideo
          src="/videos/lambo.mp4"
          poster="/images/gallery/IMG_8707.jpeg"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', zIndex: 0 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,10,12,0.55)', zIndex: 1 }} />
        <div style={{ ...S.section, position: 'relative', zIndex: 2 }}>
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
                  { icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>), label: 'Location', val: '5450 Technology Pkwy, Suite 500\nBraselton, GA 30517', href: 'https://maps.google.com/?q=5450+Technology+Pkwy+Suite+500+Braselton+GA+30517' },
                  { icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>), label: 'Phone', val: '404-406-3355', href: 'tel:4044063355' },
                  { icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>), label: 'Response Time', val: 'Within 24 hours' },
                ].map((item) => (
                  <div key={item.label} style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <span style={{ color: '#1a8fff', display: 'flex', alignItems: 'center' }}>{item.icon}</span>
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
            <div style={{ width: '36px', height: '36px', background: '#1a8fff', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-bebas-neue), sans-serif', fontSize: '16px', color: '#080a0c' }}>ZD</div>
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
