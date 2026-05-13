import Image from 'next/image'
import Navbar from '@/components/Navbar'

/* ─── Gallery image list (78 real photos) ─────────────────── */
const galleryImages = [
  '/images/gallery/IMG_6937.jpeg',
  '/images/gallery/IMG_7388.jpeg',
  '/images/gallery/IMG_7531.jpeg',
  '/images/gallery/IMG_8427.jpeg',
  '/images/gallery/IMG_8856.jpeg',
  '/images/gallery/IMG_9306.jpeg',
]

const heroImage = '/images/gallery/IMG_6951.jpeg'

/* ─── Data ─────────────────────────────────────────────────── */
const stats = [
  { num: '10+', label: 'Years of Experience' },
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
    price: 'Call for Pricing',
  },
  {
    name: 'Track Pack',
    tag: 'Maximum Coverage',
    desc: 'Full hood, full fenders, bumper, mirrors & headlights — ideal for daily drivers wanting maximum peace of mind.',
    price: 'Call for Pricing',
  },
  {
    name: 'Full Vehicle',
    tag: 'Total Protection',
    desc: 'Every painted panel protected — the ultimate solution for exotics, luxury vehicles, and collectors who refuse to compromise.',
    price: 'Call for Pricing',
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
    icon: '🏆',
    title: 'Gtechniq Accredited Installer',
    desc: 'One of a select group of shops certified to install Crystal Serum Ultra — the pinnacle of ceramic coating technology. Backed by a professional warranty.',
  },
  {
    icon: '🛡️',
    title: 'XPEL Authorized Installer',
    desc: 'Factory-trained in XPEL Ultimate Plus and XPEL Stealth PPF. Computer-cut templates, seamless installation, and an industry-leading 10-year warranty.',
  },
  {
    icon: '🔬',
    title: 'Meticulous Paint Correction',
    desc: "We don't mask defects — we remove them. Multi-stage machine polishing restores true paint depth before any protection product touches your car.",
  },
  {
    icon: '📍',
    title: 'Braselton, Georgia',
    desc: 'Serving the greater Atlanta metro and Northeast Georgia. Our climate-controlled shop is purpose-built for precision detailing work at the highest level.',
  },
]

const recentWork = [
  { title: 'BMW M3 Touring', service: 'Crystal Serum Ultra · XPEL Stealth', img: galleryImages[0] },
  { title: 'Corvette Z06', service: 'XPEL Ultimate Plus · Full Front', img: galleryImages[1] },
  { title: 'Ferrari 296 GTS', service: 'Full PPF · Ceramic Coating', img: galleryImages[2] },
  { title: 'BMW M2', service: 'Crystal Serum Ultra', img: galleryImages[3] },
  { title: 'Lexus', service: 'XPEL Ultimate Plus', img: galleryImages[4] },
  { title: 'Porsche Cayenne', service: 'XPEL Ultimate Plus · Paint Correction', img: galleryImages[5] },
]

/* ─── Shared style constants ───────────────────────────────── */
const S = {
  section: {
    padding: '96px 48px',
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

/* ─── Page ─────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Background image */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src={heroImage}
            alt="Zero Defects ATL — Ceramic Coating"
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          {/* Dark gradient overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(105deg, rgba(8,10,12,0.95) 45%, rgba(8,10,12,0.5) 100%)',
            }}
          />
          {/* Subtle blue accent line */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '1px',
              background: 'linear-gradient(90deg, transparent, #1a8fff, #00e5a0, transparent)',
            }}
          />
        </div>

        {/* Hero content */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            padding: '160px 48px 80px',
            maxWidth: '800px',
          }}
        >
          <span style={S.eyebrow}>Gtechniq Crystal Serum Ultra · XPEL Authorized</span>

          <h1
            style={{
              fontFamily: 'var(--font-bebas-neue), sans-serif',
              fontSize: 'clamp(80px, 14vw, 180px)',
              lineHeight: 0.88,
              letterSpacing: '4px',
              marginBottom: '32px',
            }}
          >
            <span style={{ display: 'block', color: '#f0f4f8' }}>ZERO</span>
            <span
              className="stroke-text"
              style={{ display: 'block' }}
            >
              DEFECTS
            </span>
          </h1>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.7,
              color: 'rgba(240,244,248,0.7)',
              maxWidth: '520px',
              marginBottom: '40px',
              fontWeight: 300,
            }}
          >
            Precision ceramic coatings, paint protection film, and paint correction
            for vehicles that demand the absolute best.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
            <a
              href="tel:4044063355"
              style={{
                fontFamily: 'var(--font-barlow-cond), sans-serif',
                fontSize: '14px',
                fontWeight: 700,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#080a0c',
                background: 'linear-gradient(90deg, #1a8fff, #00e5a0)',
                padding: '16px 36px',
                borderRadius: '4px',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Get a Quote
            </a>
            <a
              href="#work"
              style={{
                fontFamily: 'var(--font-barlow-cond), sans-serif',
                fontSize: '14px',
                fontWeight: 700,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#f0f4f8',
                border: '1px solid rgba(255,255,255,0.2)',
                padding: '16px 36px',
                borderRadius: '4px',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              View Our Work
            </a>
          </div>

          {/* Cert badges */}
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            {['Gtechniq Crystal Serum Ultra', 'XPEL Authorized Installer', 'Glassparency Authorized'].map(
              (badge) => (
                <div
                  key={badge}
                  style={{
                    ...S.cardLabel,
                    color: 'rgba(240,244,248,0.5)',
                    fontSize: '10px',
                    letterSpacing: '2px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #1a8fff, #00e5a0)',
                      flexShrink: 0,
                    }}
                  />
                  {badge}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────── */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.07)',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          background: '#0e1216',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 48px',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
          }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              style={{
                padding: '40px 24px',
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                textAlign: 'center',
              }}
            >
              <div
                className="gradient-text"
                style={{
                  fontFamily: 'var(--font-bebas-neue), sans-serif',
                  fontSize: '52px',
                  lineHeight: 1,
                  marginBottom: '8px',
                }}
              >
                {s.num}
              </div>
              <div
                style={{
                  ...S.cardLabel,
                  fontSize: '11px',
                  color: 'rgba(240,244,248,0.5)',
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── SERVICES — CERAMIC COATINGS ───────────────────────── */}
      <section id="services" style={{ background: '#080a0c', padding: '96px 0' }}>
        <div style={S.section}>
          <span style={S.eyebrow}>What We Do</span>
          <h2 style={S.sectionTitle}>Our Services</h2>

          {/* ── Ceramic Coatings ── */}
          <div style={{ marginBottom: '80px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '40px',
                paddingBottom: '24px',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <span
                style={{
                  ...S.cardLabel,
                  color: '#1a8fff',
                  fontSize: '11px',
                  letterSpacing: '4px',
                }}
              >
                01
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-barlow-cond), sans-serif',
                  fontSize: '22px',
                  fontWeight: 700,
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  color: '#f0f4f8',
                }}
              >
                Ceramic Coatings
              </h3>
              <span
                style={{
                  ...S.cardLabel,
                  fontSize: '10px',
                  color: 'rgba(240,244,248,0.4)',
                }}
              >
                Two Premium Brands · One Elite Shop
              </span>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2px',
              }}
            >
              {coatingServices.map((svc) => (
                <div
                  key={svc.name}
                  className="zd-card"
                  style={{ padding: '36px', borderRadius: '4px' }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '8px',
                    }}
                  >
                    <span
                      className="gradient-text"
                      style={{
                        fontFamily: 'var(--font-bebas-neue), sans-serif',
                        fontSize: '48px',
                        lineHeight: 1,
                      }}
                    >
                      {svc.num}
                    </span>
                    <span
                      style={{
                        ...S.cardLabel,
                        fontSize: '10px',
                        color: '#00e5a0',
                        letterSpacing: '2px',
                        textAlign: 'right',
                        maxWidth: '120px',
                        lineHeight: 1.4,
                      }}
                    >
                      {svc.warranty}
                    </span>
                  </div>

                  <div
                    style={{
                      ...S.cardLabel,
                      fontSize: '10px',
                      color: '#1a8fff',
                      marginBottom: '4px',
                    }}
                  >
                    {svc.brand}
                  </div>
                  <h4
                    style={{
                      fontFamily: 'var(--font-barlow-cond), sans-serif',
                      fontSize: '22px',
                      fontWeight: 700,
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      color: '#f0f4f8',
                      marginBottom: '4px',
                    }}
                  >
                    {svc.name}
                  </h4>
                  <div
                    style={{
                      ...S.cardLabel,
                      fontSize: '10px',
                      color: 'rgba(240,244,248,0.4)',
                      marginBottom: '16px',
                    }}
                  >
                    {svc.tag}
                  </div>

                  <p
                    style={{
                      fontSize: '14px',
                      lineHeight: 1.7,
                      color: 'rgba(240,244,248,0.6)',
                      marginBottom: '20px',
                    }}
                  >
                    {svc.desc}
                  </p>

                  <ul style={{ listStyle: 'none', padding: 0, marginBottom: '24px' }}>
                    {svc.features.map((f) => (
                      <li
                        key={f}
                        style={{
                          fontSize: '13px',
                          color: 'rgba(240,244,248,0.6)',
                          padding: '6px 0',
                          borderBottom: '1px solid rgba(255,255,255,0.04)',
                          display: 'flex',
                          gap: '10px',
                          alignItems: 'flex-start',
                        }}
                      >
                        <span style={{ color: '#1a8fff', flexShrink: 0 }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {svc.pricing.map((p) => (
                      <div
                        key={p.label}
                        style={{
                          flex: 1,
                          minWidth: '100px',
                          background: 'rgba(26,143,255,0.06)',
                          border: '1px solid rgba(26,143,255,0.15)',
                          borderRadius: '4px',
                          padding: '12px',
                          textAlign: 'center',
                        }}
                      >
                        <div
                          style={{
                            ...S.cardLabel,
                            fontSize: '10px',
                            color: 'rgba(240,244,248,0.4)',
                            marginBottom: '4px',
                          }}
                        >
                          {p.label}
                        </div>
                        <div
                          style={{
                            fontFamily: 'var(--font-barlow-cond), sans-serif',
                            fontSize: '16px',
                            fontWeight: 700,
                            color: '#f0f4f8',
                          }}
                        >
                          {p.price}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── PPF ── */}
          <div style={{ marginBottom: '80px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '40px',
                paddingBottom: '24px',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <span
                style={{
                  ...S.cardLabel,
                  color: '#1a8fff',
                  fontSize: '11px',
                  letterSpacing: '4px',
                }}
              >
                02
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-barlow-cond), sans-serif',
                  fontSize: '22px',
                  fontWeight: 700,
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  color: '#f0f4f8',
                }}
              >
                Paint Protection Film
              </h3>
              <span
                style={{
                  ...S.cardLabel,
                  fontSize: '10px',
                  color: 'rgba(240,244,248,0.4)',
                }}
              >
                XPEL Authorized Installer · 10-Year Warranty
              </span>
            </div>

            {/* PPF explainer */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '48px',
                marginBottom: '40px',
              }}
            >
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
                  <div
                    key={f}
                    style={{
                      fontSize: '13px',
                      color: 'rgba(240,244,248,0.6)',
                      display: 'flex',
                      gap: '10px',
                      alignItems: 'flex-start',
                    }}
                  >
                    <span style={{ color: '#00e5a0', flexShrink: 0 }}>✓</span>
                    {f}
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '2px',
              }}
            >
              {ppfPackages.map((pkg, i) => (
                <div
                  key={pkg.name}
                  className="zd-card"
                  style={{
                    padding: '32px',
                    borderRadius: '4px',
                    borderTop: i === 0 ? '2px solid #1a8fff' : '2px solid transparent',
                  }}
                >
                  {i === 0 && (
                    <span
                      style={{
                        ...S.cardLabel,
                        fontSize: '10px',
                        color: '#1a8fff',
                        display: 'block',
                        marginBottom: '12px',
                      }}
                    >
                      ★ Most Popular
                    </span>
                  )}
                  <h4
                    style={{
                      fontFamily: 'var(--font-barlow-cond), sans-serif',
                      fontSize: '20px',
                      fontWeight: 700,
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      color: '#f0f4f8',
                      marginBottom: '4px',
                    }}
                  >
                    {pkg.name}
                  </h4>
                  <div
                    style={{
                      ...S.cardLabel,
                      fontSize: '10px',
                      color: '#00e5a0',
                      marginBottom: '16px',
                    }}
                  >
                    {pkg.tag}
                  </div>
                  <p
                    style={{
                      fontSize: '14px',
                      lineHeight: 1.7,
                      color: 'rgba(240,244,248,0.6)',
                      marginBottom: '24px',
                    }}
                  >
                    {pkg.desc}
                  </p>
                  <a
                    href="tel:4044063355"
                    style={{
                      fontFamily: 'var(--font-barlow-cond), sans-serif',
                      fontSize: '12px',
                      fontWeight: 700,
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      color: '#1a8fff',
                      textDecoration: 'none',
                      border: '1px solid rgba(26,143,255,0.3)',
                      padding: '10px 20px',
                      borderRadius: '4px',
                      display: 'inline-block',
                    }}
                  >
                    Call for Pricing →
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* ── Paint Correction ── */}
          <div
            className="zd-card"
            style={{
              padding: '40px',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '32px',
              flexWrap: 'wrap',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <span
                  style={{
                    ...S.cardLabel,
                    color: '#1a8fff',
                    fontSize: '11px',
                    letterSpacing: '4px',
                  }}
                >
                  03
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-barlow-cond), sans-serif',
                    fontSize: '22px',
                    fontWeight: 700,
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    color: '#f0f4f8',
                  }}
                >
                  Paint Correction
                </h3>
              </div>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'rgba(240,244,248,0.6)', maxWidth: '520px' }}>
                Machine polishing to remove swirl marks, water spots, oxidation, and light scratches —
                restoring depth and clarity to your paint before protection is applied.
              </p>
            </div>
            <a
              href="tel:4044063355"
              style={{
                fontFamily: 'var(--font-barlow-cond), sans-serif',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#080a0c',
                background: 'linear-gradient(90deg, #1a8fff, #00e5a0)',
                padding: '14px 32px',
                borderRadius: '4px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              Contact for Pricing
            </a>
          </div>
        </div>
      </section>

      {/* ── OUR WORK ──────────────────────────────────────────── */}
      <section
        id="work"
        style={{
          background: '#0e1216',
          borderTop: '1px solid rgba(255,255,255,0.07)',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          padding: '96px 0',
        }}
      >
        <div style={S.section}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <span style={S.eyebrow}>Recent Projects</span>
              <h2 style={{ ...S.sectionTitle, marginBottom: 0 }}>Our Work</h2>
            </div>
            <a
              href="/gallery"
              style={{
                fontFamily: 'var(--font-barlow-cond), sans-serif',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#1a8fff',
                textDecoration: 'none',
              }}
            >
              Full Gallery →
            </a>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '12px',
            }}
          >
            {recentWork.map((item) => (
              <div
                key={item.title}
                style={{
                  position: 'relative',
                  aspectRatio: '4/3',
                  overflow: 'hidden',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  style={{ objectFit: 'cover', transition: 'transform 0.4s' }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(8,10,12,0.9) 0%, transparent 60%)',
                  }}
                />
                <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-barlow-cond), sans-serif',
                      fontSize: '16px',
                      fontWeight: 700,
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      color: '#f0f4f8',
                      marginBottom: '4px',
                    }}
                  >
                    {item.title}
                  </div>
                  <div style={{ ...S.cardLabel, fontSize: '10px', color: '#1a8fff' }}>
                    {item.service}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────── */}
      <section id="process" style={{ background: '#080a0c', padding: '96px 0' }}>
        <div style={S.section}>
          <span style={S.eyebrow}>How It Works</span>
          <h2 style={S.sectionTitle}>The Process</h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1px',
              background: 'rgba(255,255,255,0.07)',
              borderRadius: '4px',
              overflow: 'hidden',
            }}
          >
            {processSteps.map((step, i) => (
              <div
                key={step.num}
                style={{
                  background: '#080a0c',
                  padding: '40px 32px',
                  position: 'relative',
                }}
              >
                {/* Accent top bar */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background:
                      i === 0
                        ? 'linear-gradient(90deg, #1a8fff, #00e5a0)'
                        : 'transparent',
                  }}
                />
                <div
                  className="gradient-text"
                  style={{
                    fontFamily: 'var(--font-bebas-neue), sans-serif',
                    fontSize: '64px',
                    lineHeight: 1,
                    marginBottom: '16px',
                  }}
                >
                  {step.num}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-barlow-cond), sans-serif',
                    fontSize: '18px',
                    fontWeight: 700,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    color: '#f0f4f8',
                    marginBottom: '12px',
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'rgba(240,244,248,0.55)' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY ZERO DEFECTS ──────────────────────────────────── */}
      <section
        id="about"
        style={{
          background: '#0e1216',
          borderTop: '1px solid rgba(255,255,255,0.07)',
          padding: '96px 0',
        }}
      >
        <div style={S.section}>
          <span style={S.eyebrow}>Why Zero Defects</span>
          <h2 style={S.sectionTitle}>Built on Precision</h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '2px',
            }}
          >
            {trustPoints.map((pt) => (
              <div
                key={pt.title}
                className="zd-card"
                style={{ padding: '40px', borderRadius: '4px' }}
              >
                <div style={{ fontSize: '32px', marginBottom: '16px' }}>{pt.icon}</div>
                <h3
                  style={{
                    fontFamily: 'var(--font-barlow-cond), sans-serif',
                    fontSize: '18px',
                    fontWeight: 700,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    color: '#f0f4f8',
                    marginBottom: '12px',
                  }}
                >
                  {pt.title}
                </h3>
                <p style={{ fontSize: '14px', lineHeight: 1.8, color: 'rgba(240,244,248,0.6)' }}>
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Cert badges row */}
          <div
            style={{
              marginTop: '48px',
              padding: '32px 40px',
              background: '#12161b',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '48px',
              flexWrap: 'wrap',
            }}
          >
            <span
              style={{
                ...S.cardLabel,
                fontSize: '10px',
                color: 'rgba(240,244,248,0.35)',
                letterSpacing: '3px',
              }}
            >
              Certified by:
            </span>
            {['Gtechniq Crystal Serum Ultra', 'XPEL Authorized', 'Glassparency Authorized'].map((c) => (
              <div
                key={c}
                style={{
                  fontFamily: 'var(--font-barlow-cond), sans-serif',
                  fontSize: '13px',
                  fontWeight: 700,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: 'rgba(240,244,248,0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #1a8fff, #00e5a0)',
                  }}
                />
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────── */}
      <section
        style={{
          background: 'linear-gradient(135deg, rgba(26,143,255,0.12) 0%, rgba(0,229,160,0.08) 100%)',
          borderTop: '1px solid rgba(26,143,255,0.2)',
          borderBottom: '1px solid rgba(26,143,255,0.2)',
          padding: '96px 48px',
          textAlign: 'center',
        }}
      >
        <span style={S.eyebrow}>Ready to Protect Your Investment?</span>
        <h2
          style={{
            fontFamily: 'var(--font-bebas-neue), sans-serif',
            fontSize: 'clamp(48px, 6vw, 80px)',
            lineHeight: 0.9,
            letterSpacing: '3px',
            marginBottom: '24px',
          }}
        >
          Let&apos;s Get to Work
        </h2>
        <p
          style={{
            fontSize: '16px',
            color: 'rgba(240,244,248,0.6)',
            marginBottom: '40px',
            maxWidth: '420px',
            margin: '0 auto 40px',
            lineHeight: 1.7,
          }}
        >
          Schedule a free consultation and get a custom quote for your vehicle.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="tel:4044063355"
            style={{
              fontFamily: 'var(--font-barlow-cond), sans-serif',
              fontSize: '14px',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#080a0c',
              background: 'linear-gradient(90deg, #1a8fff, #00e5a0)',
              padding: '16px 40px',
              borderRadius: '4px',
              textDecoration: 'none',
            }}
          >
            Call 404-406-3355
          </a>
          <a
            href="mailto:zerodefectsatl@gmail.com"
            style={{
              fontFamily: 'var(--font-barlow-cond), sans-serif',
              fontSize: '14px',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#f0f4f8',
              border: '1px solid rgba(255,255,255,0.2)',
              padding: '16px 40px',
              borderRadius: '4px',
              textDecoration: 'none',
            }}
          >
            Email Us
          </a>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────── */}
      <footer
        style={{
          background: '#080a0c',
          borderTop: '1px solid rgba(255,255,255,0.07)',
          padding: '48px',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                background: 'linear-gradient(135deg, #1a8fff, #00e5a0)',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-bebas-neue), sans-serif',
                fontSize: '16px',
                color: '#080a0c',
              }}
            >
              ZD
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-barlow-cond), sans-serif',
                  fontWeight: 700,
                  fontSize: '14px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: '#f0f4f8',
                }}
              >
                Zero Defects
              </div>
              <div
                style={{
                  fontSize: '10px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  color: 'rgba(240,244,248,0.4)',
                }}
              >
                Braselton, GA 30517
              </div>
            </div>
          </div>

          {/* Footer links */}
          <nav style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            {['#services', '#work', '#about'].map((href) => (
              <a
                key={href}
                href={href}
                style={{
                  fontFamily: 'var(--font-barlow-cond), sans-serif',
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: 'rgba(240,244,248,0.4)',
                  textDecoration: 'none',
                }}
              >
                {href.replace('#', '')}
              </a>
            ))}
            <a
              href="mailto:zerodefectsatl@gmail.com"
              style={{
                fontFamily: 'var(--font-barlow-cond), sans-serif',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: 'rgba(240,244,248,0.4)',
                textDecoration: 'none',
              }}
            >
              Contact
            </a>
            <a
              href="https://instagram.com/zerodefectsatl"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-barlow-cond), sans-serif',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: 'rgba(240,244,248,0.4)',
                textDecoration: 'none',
              }}
            >
              Instagram
            </a>
          </nav>

          {/* Copyright */}
          <div
            style={{
              fontSize: '12px',
              color: 'rgba(240,244,248,0.25)',
              fontFamily: 'var(--font-barlow-cond), sans-serif',
              letterSpacing: '1px',
            }}
          >
            © 2025 Zero Defects · Braselton, GA
          </div>
        </div>
      </footer>
    </>
  )
}
