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
        {/* Unified block containing all tiles */}
        <div className="zd-bento-block">

          {/* Grid: socials + weather (top row), large tile (with logo overlay), bottom row */}
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
              {/* Logo — small box inside the top-left of the large tile (Option B) */}
              <div className="zd-bento-logo">
                <Image
                  src="/images/logos/zd-lockup-dark.svg"
                  alt="Zero Defects ATL"
                  width={130}
                  height={94}
                  unoptimized
                  priority
                  style={{ objectFit: 'contain', width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
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

            {/* Top row: socials + weather (all in the same row as the logo) */}
              <a className="zd-bento-social zd-bento-social--ig" href="https://instagram.com/zerodefectsatl" target="_blank" rel="noopener" aria-label="Instagram @zerodefectsatl">
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <path d="M12 2.16c3.2 0 3.58.012 4.85.07 1.17.054 1.8.249 2.22.413.56.217.96.477 1.38.896.42.42.68.82.9 1.38.16.42.36 1.06.41 2.22.06 1.27.07 1.65.07 4.85s-.012 3.58-.07 4.85c-.054 1.17-.249 1.8-.413 2.22a3.72 3.72 0 0 1-.896 1.38 3.72 3.72 0 0 1-1.38.9c-.42.16-1.06.36-2.22.41-1.27.06-1.65.07-4.85.07s-3.58-.012-4.85-.07c-1.17-.054-1.8-.249-2.22-.413a3.72 3.72 0 0 1-1.38-.896 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.22C2.172 15.583 2.16 15.2 2.16 12s.012-3.58.07-4.85c.054-1.17.249-1.8.413-2.22.217-.56.477-.96.896-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.22-.41C8.42 2.172 8.8 2.16 12 2.16M12 0C8.74 0 8.33.013 7.05.072 5.77.131 4.9.333 4.14.63a5.88 5.88 0 0 0-2.13 1.38A5.88 5.88 0 0 0 .63 4.14C.333 4.9.131 5.77.072 7.05.013 8.33 0 8.74 0 12s.013 3.67.072 4.95c.06 1.28.261 2.15.558 2.91A5.88 5.88 0 0 0 2.01 22a5.88 5.88 0 0 0 2.13 1.38c.76.296 1.63.499 2.91.558C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.28-.06 2.15-.262 2.91-.559a5.88 5.88 0 0 0 2.13-1.38A5.88 5.88 0 0 0 23.37 19.86c.296-.76.499-1.63.558-2.91C23.99 15.67 24 15.26 24 12s-.01-3.67-.07-4.95c-.06-1.28-.262-2.15-.559-2.91a5.88 5.88 0 0 0-1.38-2.13A5.88 5.88 0 0 0 19.86.63c-.76-.296-1.63-.499-2.91-.558C15.67.013 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-10.81a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/>
                </svg>
                <span className="zd-bento-social__label">Instagram</span>
              </a>
              <a className="zd-bento-social zd-bento-social--fb" href="https://facebook.com/zerodefectsatl" target="_blank" rel="noopener" aria-label="Facebook @zerodefectsatl">
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.03 4.39 11.02 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.23 2.69.23v2.97h-1.52c-1.49 0-1.95.93-1.95 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.09 24 18.1 24 12.07z"/>
                </svg>
                <span className="zd-bento-social__label">Facebook</span>
              </a>
              <a className="zd-bento-social zd-bento-social--yt" href="https://youtube.com/@zerodefectsatl" target="_blank" rel="noopener" aria-label="YouTube @zerodefectsatl">
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <path d="M23.5 6.19a3 3 0 0 0-2.12-2.12C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.52A3 3 0 0 0 .5 6.19C0 8.06 0 12 0 12s0 3.94.5 5.81a3 3 0 0 0 2.12 2.12c1.88.52 9.38.52 9.38.52s7.5 0 9.38-.52a3 3 0 0 0 2.12-2.12C24 15.94 24 12 24 12s0-3.94-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z"/>
                </svg>
                <span className="zd-bento-social__label">YouTube</span>
              </a>

            {/* Weather & coordinates widget — top right (same row as socials) */}
            <div className="zd-bento-weather">
              <div className="zd-bento-weather__top">
                <div className="zd-bento-weather__location">
                  <p className="zd-bento-weather__city">Braselton, GA</p>
                  <p className="zd-bento-weather__coords">34.1018° N · 83.7960° W</p>
                </div>
                <div className="zd-bento-chip" style={{ position: 'static', width: 36, height: 36 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#000">
                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0L12 2.69z"/>
                  </svg>
                </div>
              </div>
              <div className="zd-bento-weather__main">
                <span className="zd-bento-weather__temp">75°</span>
                <span className="zd-bento-weather__cond">Partly Cloudy</span>
              </div>
              <p className="zd-bento-weather__sub">Climate-controlled shop · By appointment</p>
            </div>

            {/* Bottom row: Services / Process / Gallery */}
            <div className="zd-bento-bottom-row">

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
            <a href="/process" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
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

            {/* Small tile 3: Gallery */}
            <a href="/gallery" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <div className="zd-bento-tile--small">
                <div className="zd-tile-img-wrap zd-tile-img-wrap--left">
                  <Image
                    src="/images/gallery/IMG_9517.jpeg"
                    alt="Gallery"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)', zIndex: 1 }} />
                {/* Yellow icon chip */}
                <div className="zd-bento-chip" style={{ zIndex: 2 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#000">
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                  </svg>
                </div>
                <div style={{ position: 'absolute', bottom: 22, left: 24, right: 24, zIndex: 2 }}>
                  <h3 style={{ color: '#fff', fontSize: 26, fontWeight: 800, margin: '0 0 10px', lineHeight: 1.1 }}>
                    Gallery
                  </h3>
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 20 }}>↗</span>
                </div>
              </div>
            </a>

            {/* Small tile 4 (NEW): FAQ */}
            <a href="/faq" className="zd-bento-tile--faq" style={{ textDecoration: 'none' }}>
              <div className="zd-bento-chip">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#000">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
                </svg>
              </div>
              <div className="zd-bento-tile--faq__body">
                <p className="zd-bento-tile--faq__eyebrow">Frequently Asked</p>
                <h3 className="zd-bento-tile--faq__title">FAQ</h3>
                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 20 }}>↗</span>
              </div>
            </a>

            </div>{/* /zd-bento-bottom-row */}

            {/* Featured Video tile — middle row, right side */}
            <a href="/gallery" className="zd-bento-tile--video">
              <LazyVideo
                src="/videos/hero-services.mp4"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className="zd-bento-tile--video__overlay" />
              <div className="zd-bento-chip">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#000">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <div className="zd-bento-tile--video__body">
                <p className="zd-bento-tile--video__eyebrow">Featured Project</p>
                <h3 className="zd-bento-tile--video__title">Watch the<br/>build</h3>
                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 20 }}>↗</span>
              </div>
            </a>

            {/* Reviews marquee — full-width strip at bottom */}
            <a href="/reviews" className="zd-bento-tile--reviews">
              <div className="zd-bento-tile--reviews__track">
                {[...reviews, ...reviews, ...reviews].map((r, i) => (
                  <div key={i} className="zd-bento-tile--reviews__item">
                    <span className="zd-bento-tile--reviews__stars">★★★★★</span>
                    <span className="zd-bento-tile--reviews__text">&ldquo;{r.text.slice(0, 110)}{r.text.length > 110 ? '…' : ''}&rdquo;</span>
                    <span className="zd-bento-tile--reviews__name">— {r.name}, {r.vehicle}</span>
                  </div>
                ))}
              </div>
              <div className="zd-bento-tile--reviews__cta">All Reviews <span aria-hidden>&rarr;</span></div>
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
