import Image from 'next/image'
import IntroCube from '@/components/IntroCube'
import ParallaxScroll from '@/components/ParallaxScroll'
import IntroVideoGate from '@/components/IntroVideoGate'
import LazyVideo from '@/components/LazyVideo'
import ContactForm from '@/components/ContactForm'

const reviews = [
  {
    name: 'Keith Campbell',
    ago: '6 years ago',
    text: 'The black paint came out looking like black chrome! Absolutely Beautiful, and bugs can now be wiped off easily. This process and this installer are well worth the money.',
    vehicle: "ProTouring '66 Fairlane",
  },
  {
    name: 'Kenny Fletcher',
    ago: '3 years ago',
    text: 'Blown away with the caliber and quality of work — from the GTechniq Crystal Serum Ceramic Coating to the XPEL PPF. His attention to every detail is incredible, just like his company name: ZERO DEFECTS.',
    vehicle: 'Ford Mach 1',
  },
  {
    name: 'Anthony Matthew',
    ago: '6 months ago',
    text: 'Chris did an outstanding and amazing job. When I got there to pick up my car, boy was I impressed. He walked me around and explained everything. Customer service at its best. 10/10 stars.',
    vehicle: 'Ceramic Coating & PPF',
  },
]

const stats = [
  { num: '17+', label: 'Years of Experience' },
  { num: '500+', label: 'Vehicles Protected' },
  { num: '3', label: 'Premium Certifications' },
  { num: '5★', label: 'Google Rating' },
]

const processSteps = [
  { num: '01', title: 'Consultation', desc: 'We assess your vehicle and discuss the right protection package for your goals and budget.' },
  { num: '02', title: 'Paint Correction', desc: 'Every swirl, scratch, and water spot is removed before any protection is applied.' },
  { num: '03', title: 'Application', desc: 'Precision ceramic coating or PPF film is installed in our climate-controlled facility.' },
  { num: '04', title: 'Delivery', desc: 'Final inspection, care instructions, and warranty paperwork. Your car leaves perfect.' },
]

const recentWork = [
  { src: '/images/gallery/IMG_8707.jpeg', label: 'Ceramic Coating · Porsche GT3 RS' },
  { src: '/images/gallery/IMG_8556.jpeg', label: 'Full PPF · McLaren 720S' },
  { src: '/images/gallery/IMG_9517.jpeg', label: 'CSU + PPF Combo · Lamborghini Huracán' },
]

export default function Home() {
  return (
    <>
      <IntroCube />
      <ParallaxScroll />
      <IntroVideoGate />

      {/* BENTO DASHBOARD */}
      <section id="services" className="zd-bento-section">
        {/* Single unified block — logo chip, large tile, small tile all in one container */}
        <div className="zd-bento-block">

          {/* Logo chip — absolute top-left of the whole block */}
          <div className="zd-bento-logo">
            <Image
              src="/images/logos/zd-lockup-compact.svg"
              alt="Zero Defects ATL"
              width={160}
              height={160}
              unoptimized
              style={{ objectFit: 'contain', padding: 16 }}
            />
          </div>

          {/* Grid: large tile + small tile, flush inside the block */}
          <div className="zd-bento-inner">

            {/* Large tile: ZD Mentality */}
            <div className="zd-bento-tile--large">
              <LazyVideo
                src="/videos/engine.mp4"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.18) 55%, transparent 100%)',
                pointerEvents: 'none',
              }} />
              {/* Yellow icon chip — top-right */}
              <div className="zd-bento-chip">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#000">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                </svg>
              </div>
              <div style={{ position: 'absolute', bottom: 36, left: 36, right: 36 }}>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>
                  The ZD Mentality
                </p>
                <h2 style={{ color: '#fff', fontSize: 'clamp(26px, 2.8vw, 44px)', fontWeight: 800, lineHeight: 1.1, margin: '0 0 16px' }}>
                  Obsession-level detail.<br />Zero compromises.
                </h2>
                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 22, lineHeight: 1 }}>↗</span>
              </div>
            </div>

            {/* Small tile 1: Our Services */}
            <a href="/services" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <div className="zd-bento-tile--small">
                <div className="zd-tile-img-wrap zd-tile-img-wrap--left">
                  <Image
                    src="/images/gallery/porsche-mission-x.jpg"
                    alt="Our Services"
                    fill
                    style={{ objectFit: 'cover', objectPosition: '30% center' }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)', zIndex: 1 }} />
                {/* Yellow icon chip */}
                <div className="zd-bento-chip" style={{ zIndex: 2 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#000">
                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.01 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                  </svg>
                </div>
                <div style={{ position: 'absolute', bottom: 22, left: 24, right: 24, zIndex: 2 }}>
                  <h3 style={{ color: '#fff', fontSize: 26, fontWeight: 800, margin: '0 0 10px', lineHeight: 1.1 }}>
                    Our Services
                  </h3>
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 20 }}>↗</span>
                </div>
              </div>
            </a>

            {/* Small tile 2: Our Process */}
            <a href="#process" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <div className="zd-bento-tile--small">
                <div className="zd-tile-img-wrap zd-tile-img-wrap--right">
                  <Image
                    src="/images/gallery/g-techniq-ultra-serum.jpg"
                    alt="Our Process"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)', zIndex: 1 }} />
                {/* Yellow icon chip */}
                <div className="zd-bento-chip" style={{ zIndex: 2 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#000">
                    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
                  </svg>
                </div>
                <div style={{ position: 'absolute', bottom: 22, left: 24, right: 24, zIndex: 2 }}>
                  <h3 style={{ color: '#fff', fontSize: 26, fontWeight: 800, margin: '0 0 10px', lineHeight: 1.1 }}>
                    Our Process
                  </h3>
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 20 }}>↗</span>
                </div>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: '#111', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="zd-grid-stats" style={{ maxWidth: 1280 }}>
          {stats.map((s, i) => (
            <div key={i} style={{ padding: '40px 24px', textAlign: 'center', borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
              <div style={{ fontSize: 'clamp(36px,4vw,56px)', fontWeight: 800, color: '#eaff00', lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', marginTop: 6, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section style={{ background: '#0a0a0a', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p style={{ color: '#eaff00', fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 12 }}>Client Results</p>
          <h2 style={{ fontSize: 'clamp(32px,4vw,52px)', fontWeight: 800, marginBottom: 48, color: '#fff' }}>What owners are saying</h2>
          <div className="zd-grid-reviews" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
            {reviews.map((r, i) => (
              <div key={i} className="zd-card" style={{ padding: '32px 28px' }}>
                <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
                  {[...Array(5)].map((_, j) => <span key={j} style={{ color: '#eaff00', fontSize: 14 }}>&#9733;</span>)}
                </div>
                <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 15, lineHeight: 1.65, marginBottom: 24 }}>{r.text}</p>
                <div>
                  <div style={{ fontWeight: 700, color: '#fff', fontSize: 14 }}>{r.name}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>{r.vehicle} &middot; {r.ago}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" style={{ background: '#000', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p style={{ color: '#eaff00', fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 12 }}>How It Works</p>
          <h2 style={{ fontSize: 'clamp(32px,4vw,52px)', fontWeight: 800, marginBottom: 48, color: '#fff' }}>The Zero Defects Process</h2>
          <div className="zd-grid-process" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
            {processSteps.map((s, i) => (
              <div key={i} style={{ borderTop: '2px solid rgba(234,255,0,0.3)', paddingTop: 24 }}>
                <div style={{ fontSize: 56, fontWeight: 800, color: 'rgba(234,255,0,0.15)', lineHeight: 1, marginBottom: 12 }}>{s.num}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Work */}
      <section style={{ background: '#0a0a0a', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p style={{ color: '#eaff00', fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 12 }}>Portfolio</p>
          <h2 style={{ fontSize: 'clamp(32px,4vw,52px)', fontWeight: 800, marginBottom: 48, color: '#fff' }}>Recent Work</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
            {recentWork.map((w, i) => (
              <div key={i} className="zd-work-tile">
                <Image src={w.src} alt={w.label} fill style={{ objectFit: 'cover' }} sizes="(max-width:768px) 100vw, 33vw" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)' }} />
                <p style={{ position: 'absolute', bottom: 20, left: 20, color: '#fff', fontSize: 13, fontWeight: 600, margin: 0 }}>{w.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section style={{ background: '#000', padding: '64px 24px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 32 }}>Factory Trained &middot; Authorized &middot; Certified</p>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 48, flexWrap: 'wrap' }}>
            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 18, fontWeight: 700 }}>Gtechniq CSU Accredited</span>
            <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 24 }}>&middot;</span>
            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 18, fontWeight: 700 }}>XPEL Authorized Installer</span>
            <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 24 }}>&middot;</span>
            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 18, fontWeight: 700 }}>CCI Certified</span>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ background: '#0a0a0a', padding: '80px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <p style={{ color: '#eaff00', fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 12 }}>Get a Quote</p>
          <h2 style={{ fontSize: 'clamp(32px,4vw,52px)', fontWeight: 800, marginBottom: 8, color: '#fff' }}>
            Let&apos;s protect your investment.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 16, marginBottom: 48 }}>Braselton, GA &middot; By appointment &middot; (404) 406-3355</p>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
