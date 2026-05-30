import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import ServiceCarousel from '@/components/ServiceCarousel'

const ceramicSlides = [
  { src: '/images/gallery/IMG_7887.jpeg', label: 'Custom-finished Corvette C8 — coated to chameleon depth' },
  { src: '/images/gallery/IMG_8707.jpeg', label: 'Ferrari 488 — Crystal Serum Ultra candy-red gloss', position: '75% center' },
  { src: '/images/gallery/IMG_9219.jpeg', label: 'Ferrari 296 — multi-stage correction + ceramic finish' },
]

const ppfSlides = [
  { src: '/images/gallery/IMG_6937.jpeg', label: 'XPEL Ultimate film draped over front end' },
  { src: '/images/gallery/IMG_7398.jpeg', label: 'Pre-cut XPEL template laid on hood' },
  { src: '/images/gallery/IMG_7399.jpeg', label: 'Wet install — squeegeeing film onto paint' },
  { src: '/images/gallery/IMG_7400.jpeg', label: 'Mid-install — front fender wrap' },
  { src: '/images/gallery/IMG_7405.jpeg', label: 'Rear quarter panel — film going down' },
  { src: '/images/gallery/IMG_7402.jpeg', label: 'Finished — flawless front-end coverage' },
  { src: '/images/gallery/IMG_7409.jpeg', label: 'Finished — side profile' },
  { src: '/images/gallery/IMG_7437.jpeg', label: 'Final delivery — XPEL Ultimate Plus' },
]

export const metadata = {
  title: 'Services — Ceramic Coating, PPF & Paint Correction | Zero Defects ATL',
  description: 'Gtechniq Crystal Serum Ultra ceramic coating, XPEL paint protection film, and paint correction in Braselton, GA. Factory-trained. Get a quote today.',
}

const services = [
  {
    rank: '01',
    name: 'Ceramic Coating',
    subtitle: 'Gtechniq Crystal Serum Ultra · Accredited Installer',
    desc: 'The absolute pinnacle of ceramic protection. Our dual-layer 10H/7H system is the only ceramic coating rated from −40°C to +250°C — and we\'re the only shop in the area with Gtechniq CSU accreditation. Every coating includes full paint correction.',
    features: ['Crystal Serum Ultra · 9-year warranty', 'CCI Revolution · 6+ years', 'CCI Advance · 3–5 years', 'Paint correction included on every install'],
    img: '/images/gallery/IMG_9517.jpeg',
    cta: 'Get a Ceramic Quote',
  },
  {
    rank: '02',
    name: 'Paint Protection Film',
    subtitle: 'XPEL Authorized · Factory-Trained in San Antonio',
    desc: 'Physical TPU armor that stops rock chips, scratches, and road debris before they reach your paint. Computer-cut templates ensure perfect fitment on every panel. Our XPEL installations carry a 10-year manufacturer warranty.',
    features: ['XPEL Ultimate Plus · self-healing', 'Computer-cut templates for perfect fit', '10-year XPEL manufacturer warranty', 'Full-front, partial, or custom zone coverage'],
    img: '/images/gallery/IMG_7399.jpeg',
    cta: 'Get a PPF Quote',
  },
  {
    rank: '03',
    name: 'Paint Correction',
    subtitle: 'Multi-Stage · Machine Polish · Zero Shortcuts',
    desc: 'Swirls, water spots, oxidation, and buffer trails — we eliminate them all. Our multi-stage correction process restores depth and clarity before any protection is applied. Because coating over damaged paint just preserves the damage.',
    features: ['Single, two, and three-stage correction', 'Machine polish with Rupes and Flex', 'IDA/Detailing PRO certified technician', 'Required before every coating install'],
    img: '/images/gallery/IMG_9417.jpeg',
    cta: 'Get a Correction Quote',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero — 363-style two-column with custom video backdrop */}
      <section className="zd-services-hero">
        <div className="zd-services-hero__bg">
          <video
            className="zd-services-hero__video"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/images/gallery/IMG_7399.jpeg"
          >
            <source src="/videos/hero-services.mp4" type="video/mp4" />
          </video>
          <div className="zd-services-hero__bg-overlay" />
        </div>
        <div className="zd-services-hero__inner">
          <div className="zd-services-hero__left">
            <h1 className="zd-services-hero__title">
              Bespoke Car<br />Care Services
            </h1>
            <p className="zd-services-hero__tagline">
              Your Vehicle Deserves an Enthusiast.<br />
              <span className="zd-services-hero__tagline-sub">
                Refined Care, Engineered by Devotion, Perfected by Obsession.
              </span>
            </p>
          </div>
          <div className="zd-services-hero__right">
            <p>
              Every service we offer starts with the same standard: paint correction first, protection second. Whether it&apos;s Gtechniq Crystal Serum Ultra, XPEL PPF, or a multi-stage polish &mdash; we never apply protection over compromised paint. That&apos;s the Zero Defects difference.
            </p>
            <p className="zd-services-hero__credentials">
              Gtechniq CSU Accredited &middot; XPEL Authorized &middot; CCI Certified &middot; 17+ Years
            </p>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section style={{ background: '#000', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 24 }}>
          {services.map((svc, idx) => (
            <div key={idx}>
              {/* 68% social proof between cards 01 and 02 */}
              {idx === 1 && (
                <div style={{
                  background: '#eaff00',
                  borderRadius: 16,
                  padding: '40px 48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 32,
                  marginBottom: 24,
                }}>
                  <div>
                    <div style={{ fontSize: 'clamp(56px,6vw,96px)', fontWeight: 800, color: '#000', lineHeight: 1 }}>68%</div>
                    <p style={{ color: 'rgba(0,0,0,0.65)', fontSize: 14, marginTop: 4, fontWeight: 600 }}>of our clients add PPF after their first ceramic install</p>
                  </div>
                  <p style={{ color: '#000', fontSize: 18, fontWeight: 700, maxWidth: 420, lineHeight: 1.5, margin: 0 }}>
                    Ceramic coating makes your car shine. PPF makes sure nothing takes that away. Most serious owners run both.
                  </p>
                </div>
              )}

              <div className="zd-svc-card">
                <div className="zd-svc-card__body">
                  <div>
                    <div className="zd-svc-card__num">{svc.rank}</div>
                    <p style={{ color: '#eaff00', fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 8, marginTop: 8 }}>
                      {svc.subtitle}
                    </p>
                    <h2 style={{ fontSize: 'clamp(28px,3vw,44px)', fontWeight: 800, color: '#fff', lineHeight: 1.1, marginBottom: 20 }}>
                      {svc.name}
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 15, lineHeight: 1.75, marginBottom: 28 }}>
                      {svc.desc}
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {svc.features.map((f, fi) => (
                        <li key={fi} style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', display: 'flex', alignItems: 'center', gap: 10 }}>
                          <span style={{ color: '#eaff00', fontSize: 10 }}>&#9654;</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ marginTop: 32 }}>
                    <a href="#contact" style={{
                      display: 'inline-block',
                      background: '#eaff00',
                      color: '#000',
                      padding: '14px 32px',
                      borderRadius: 4,
                      fontWeight: 800,
                      fontSize: 13,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                    }}>{svc.cta}</a>
                  </div>
                </div>
                <div className="zd-svc-card__img">
                  {svc.rank === '01' ? (
                    <ServiceCarousel slides={ceramicSlides} alt={svc.name} />
                  ) : svc.rank === '02' ? (
                    <ServiceCarousel slides={ppfSlides} alt={svc.name} />
                  ) : (
                    <Image
                      src={svc.img}
                      alt={svc.name}
                      fill
                      style={{ objectFit: 'contain', objectPosition: 'center', background: '#0a0a0c' }}
                      sizes="(max-width:768px) 100vw, 60vw"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ background: '#0a0a0a', padding: '80px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <p style={{ color: '#eaff00', fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 12 }}>Get a Quote</p>
          <h2 style={{ fontSize: 'clamp(32px,4vw,52px)', fontWeight: 800, marginBottom: 8, color: '#fff' }}>
            Ready to protect your car?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 16, marginBottom: 48 }}>
            Braselton, GA &middot; By appointment &middot; (404) 406-3355
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
