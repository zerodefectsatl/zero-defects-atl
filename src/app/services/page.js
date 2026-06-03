import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import TilePage from '@/components/TilePage'
import Footer from '@/components/Footer'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  path: '/services',
  title: 'Ceramic Coating & PPF Services in Atlanta, GA | Zero Defects',
  description:
    'Gtechniq-accredited ceramic coating, XPEL PPF & paint correction for metro Atlanta, GA. Factory-trained installer in Braselton. Get a free quote today.',
  ogTitle: 'Ceramic Coating, PPF & Paint Correction in Atlanta, GA | Zero Defects ATL',
  keywords: [
    'ceramic coating Braselton GA',
    'PPF Braselton',
    'paint protection film Atlanta',
    'paint correction Atlanta',
    'Gtechniq installer Georgia',
    'XPEL installer Braselton',
    'ceramic coating near Buford',
    'PPF installer near Gainesville',
    'auto detailing Braselton GA',
  ],
  imageAlt: 'Ceramic coating and PPF services at Zero Defects ATL — Atlanta, GA',
})

const services = [
  {
    rank: '01',
    name: 'Ceramic Coating',
    subtitle: 'Gtechniq Crystal Serum Ultra · Accredited Installer',
    desc: 'The absolute pinnacle of ceramic protection. Our dual-layer 10H/7H system is the only ceramic coating rated from −40°C to +250°C — and we\'re the only shop in the area with Gtechniq CSU accreditation. Every coating includes full paint correction.',
    features: ['Crystal Serum Ultra · 9-year warranty', 'CCI Revolution · 6+ years', 'CCI Advance · 3–5 years', 'Paint correction included on every install'],
    img: '/images/gallery/g-techniq-ultra-serum.jpg',
    cta: 'Get a Ceramic Quote',
    slug: '/ceramic-coating',
  },
  {
    rank: '02',
    name: 'Paint Protection Film',
    subtitle: 'XPEL Authorized · Factory-Trained in San Antonio',
    desc: 'Physical TPU armor that stops rock chips, scratches, and road debris before they reach your paint. Computer-cut templates ensure perfect fitment on every panel. Our XPEL installations carry a 10-year manufacturer warranty.',
    features: ['XPEL Ultimate Plus · self-healing', 'Computer-cut templates for perfect fit', '10-year XPEL manufacturer warranty', 'Full-front, partial, or custom zone coverage'],
    img: '/images/gallery/ppf-r8-01.jpg',
    gallery: [
      { src: '/images/gallery/ppf-r8-01.jpg', caption: '01 · Film applied wet' },
      { src: '/images/gallery/ppf-r8-02.jpg', caption: '02 · Template cut & laid' },
      { src: '/images/gallery/ppf-r8-03.jpg', caption: '03 · Finished install' },
    ],
    cta: 'Get a PPF Quote',
    slug: '/paint-protection-film',
  },
  {
    rank: '03',
    name: 'Paint Correction',
    subtitle: 'Multi-Stage · Machine Polish · Zero Shortcuts',
    desc: 'Swirls, water spots, oxidation, and buffer trails — we eliminate them all. Our multi-stage correction process restores depth and clarity before any protection is applied. Because coating over damaged paint just preserves the damage.',
    features: ['Single, two, and three-stage correction', 'Machine polish with Rupes and Flex', 'IDA/Detailing PRO certified technician', 'Required before every coating install'],
    img: '/images/gallery/IMG_7437.jpeg',
    cta: 'Get a Correction Quote',
    slug: '/paint-correction',
  },
]

export default function ServicesPage() {
  return (
    <TilePage>
      {/* Hero */}
      <h1 className="sr-only">Ceramic Coating, PPF &amp; Paint Correction in Atlanta, GA</h1>
      <section style={{ background: 'transparent', paddingTop: 80, paddingBottom: 0, paddingLeft: 24, paddingRight: 24 }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>

          <a
            href="/"
            style={{
              display: 'inline-block',
              marginBottom: 32,
              fontSize: 11,
              letterSpacing: 3,
              textTransform: 'uppercase',
              color: '#eaff00',
              textDecoration: 'none',
              fontFamily: 'var(--font-barlow-cond), Manrope, sans-serif',
              fontWeight: 600,
            }}
          >
            ← Back to home
          </a>

          {/* Intro glass card */}
          <div className="zd-services-intro-card zd-svc-intro-grid">
            <div>
              <p style={{ color: '#eaff00', fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 16 }}>
                Zero Defects ATL &mdash; Braselton, GA
              </p>
              <blockquote style={{ fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 800, lineHeight: 1.15, color: '#fff', margin: 0 }}>
                &ldquo;We protect the cars that deserve it most.&rdquo;
              </blockquote>
            </div>
            <div>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 16, lineHeight: 1.75, margin: 0 }}>
                Every service we offer starts with the same standard: paint correction first, protection second. Whether it&apos;s Gtechniq Crystal Serum Ultra, XPEL PPF, or a multi-stage polish — we never apply protection over compromised paint. That&apos;s the Zero Defects difference.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, marginTop: 20 }}>
                Gtechniq CSU Accredited &middot; XPEL Authorized &middot; CCI Certified &middot; 17+ Years
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Service Cards */}
      <section style={{ background: 'transparent', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 24 }}>
          {services.map((svc, idx) => (
            <div key={idx}>
              {/* 68% social proof between cards 01 and 02 */}
              {idx === 1 && (
                <div className="zd-svc-proof" style={{
                  background: '#eaff00',
                  borderRadius: 16,
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
                  <div style={{ marginTop: 32, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 20 }}>
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
                    {svc.slug && (
                      <a href={svc.slug} style={{
                        color: '#eaff00',
                        fontSize: 13,
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        textDecoration: 'none',
                      }}>Learn more →</a>
                    )}
                  </div>
                </div>
                <div className="zd-svc-card__img">
                  {svc.gallery ? (
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateRows: 'repeat(3, 1fr)',
                        gap: 8,
                        width: '100%',
                        height: '100%',
                      }}
                    >
                      {svc.gallery.map((g, gi) => (
                        <div
                          key={gi}
                          style={{
                            position: 'relative',
                            overflow: 'hidden',
                            borderRadius: 6,
                          }}
                        >
                          <Image
                            src={g.src}
                            alt={`${svc.name} — ${g.caption}`}
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width:768px) 100vw, 25vw"
                          />
                          <div
                            style={{
                              position: 'absolute',
                              left: 0,
                              right: 0,
                              bottom: 0,
                              padding: '8px 12px',
                              background:
                                'linear-gradient(0deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0) 100%)',
                              color: '#eaff00',
                              fontSize: 10,
                              fontWeight: 700,
                              letterSpacing: '0.14em',
                              textTransform: 'uppercase',
                              pointerEvents: 'none',
                            }}
                          >
                            {g.caption}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <Image
                      src={svc.img}
                      alt={svc.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width:768px) 100vw, 50vw"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact — Ferrari wheel video background */}
      <section
        id="contact"
        style={{
          position: 'relative',
          background: 'transparent',
          padding: '64px 24px',
          overflow: 'hidden',
          isolation: 'isolate',
        }}
      >
        {/* Background video */}
        <video
          src="/videos/ferrari-wheel.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
        />
        {/* Dark overlay so form stays readable */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.75) 50%, rgba(0,0,0,0.92) 100%)',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />
        {/* Form content, above the video */}
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 800, margin: '0 auto' }}>
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
      <Footer />
    </TilePage>
  )
}
