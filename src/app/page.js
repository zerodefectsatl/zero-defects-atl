import Image from 'next/image'
import IntroCube from '@/components/IntroCube'

const reviews = [
  {
    stars: 5,
    text: 'Best ceramic coating in Atlanta. Period. They don’t cut corners.',
    author: 'Keith C.',
  },
  {
    stars: 5,
    text: 'Blown away with the caliber and quality of work. Attention to every detail is incredible.',
    author: 'Kenny F.',
  },
  {
    stars: 5,
    text: 'Customer service at its best. 10 / 10 stars. Looked brand new.',
    author: 'Anthony M.',
  },
]

export default function Home() {
  return (
    <main className="bento-wrap">
      <h1 className="sr-only">PPF &amp; Ceramic Coating in Atlanta, GA — Zero Defects ATL</h1>
      {/* Logo intro cube — self-dismisses on click, ~3.5s auto-spin */}
      <IntroCube />

      <div className="bento">

        {/* ══════════════ LEFT COLUMN ══════════════ */}
        <div className="bento-left">

          {/* HERO CARD — L-shape, z-index 1, sits BEHIND logo card */}
          <a href="/zd-mentality" className="bento-card bento-hero" aria-label="The ZD Mentality">
            <video
              className="bento-hero__video"
              src="/videos/engine.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
            <div className="bento-hero__overlay" />
            <div className="bento-hero__content">
              <div className="bento-hero__eyebrow">
                <span className="bento-hero__eyebrow-bar" />
                The ZD Mentality
              </div>
              <p className="bento-hero__headline">
                Obsession-level detail.<br />
                <span className="bento-accent">Zero</span> compromises.
              </p>
              <div className="bento-hero__cta">
                Explore the philosophy
                <span className="bento-hero__cta-arrow">↗</span>
              </div>
            </div>
            <span className="bento-corner-arrow" aria-hidden="true">↗</span>
          </a>

          {/* LOGO CARD — own bento tile, z-index 2, creates L-shape cutout */}
          <div className="bento-card bento-logo-card">
            <Image
              src="/images/logos/zd-logo-clean.png"
              alt="Zero Defects ATL"
              width={325}
              height={321}
              priority
              fetchPriority="high"
              loading="eager"
              className="bento-logo-card__mark"
              style={{ viewTransitionName: 'zd-logo' }}
            />
          </div>

          {/* FAQ — bottom left (narrow tile) */}
          <a href="/faq" className="bento-card bento-faq-card">
            <div className="bento-faq__lines" aria-hidden="true">
              <div /><div /><div /><div />
            </div>
            <div className="bento-card__label">
              <div className="bento-card__eyebrow">Help</div>
              <h2 className="bento-card__title">FAQ</h2>
            </div>
            <span className="bento-corner-arrow" aria-hidden="true">↗</span>
          </a>

          {/* PROCESS — bottom center */}
          <a href="/our-process" className="bento-card bento-process-card">
            <div
              className="bento-card__bg"
              style={{ backgroundImage: 'url(/images/gallery/IMG_9306.jpeg)' }}
            />
            <div className="bento-card__overlay" />
            <div className="bento-card__label">
              <div className="bento-card__eyebrow">How it works</div>
              <h2 className="bento-card__title">Our Process</h2>
            </div>
            <span className="bento-corner-arrow" aria-hidden="true">↗</span>
          </a>

          {/* GALLERY — bottom right of left column */}
          <a href="/gallery" className="bento-card bento-gallery-card">
            <div
              className="bento-card__bg"
              style={{ backgroundImage: 'url(/images/gallery/IMG_9219.jpeg)' }}
            />
            <div className="bento-card__overlay" />
            <div className="bento-card__label">
              <div className="bento-card__eyebrow">Our work</div>
              <h2 className="bento-card__title">Gallery</h2>
            </div>
            <span className="bento-corner-arrow" aria-hidden="true">↗</span>
          </a>

        </div>

        {/* ══════════════ RIGHT COLUMN ══════════════ */}
        <div className="bento-right">

          {/* SOCIAL ROW — 3 equal tiles */}
          <div className="bento-social-row">
            <a
              href="https://www.instagram.com/zerodefectsatl"
              target="_blank"
              rel="noopener noreferrer"
              className="bento-card bento-social"
              aria-label="Instagram"
            >
              <svg className="bento-social__icon" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span className="bento-social__label">Instagram</span>
            </a>

            <a
              href="https://www.facebook.com/zerodefectsatl"
              target="_blank"
              rel="noopener noreferrer"
              className="bento-card bento-social"
              aria-label="Facebook"
            >
              <svg className="bento-social__icon" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="bento-social__label">Facebook</span>
            </a>

            <a
              href="https://www.youtube.com/@zerodefectsatl"
              target="_blank"
              rel="noopener noreferrer"
              className="bento-card bento-social"
              aria-label="YouTube"
            >
              <svg className="bento-social__icon" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <span className="bento-social__label">YouTube</span>
            </a>
          </div>

          {/* REVIEWS CARD — large, middle */}
          <div className="bento-card bento-reviews-card">
            <div className="bento-reviews__header">
              <h2 className="bento-reviews__title">Reviews</h2>
              <div className="bento-reviews__count">5.0 ★ · 40 reviews</div>
            </div>
            <div className="bento-reviews__items">
              {reviews.map((r, i) => (
                <div key={i} className="bento-reviews__item">
                  <div className="bento-reviews__stars">{'★'.repeat(r.stars)}</div>
                  <div className="bento-reviews__text">&ldquo;{r.text}&rdquo;</div>
                  <div className="bento-reviews__author">— {r.author}</div>
                </div>
              ))}
            </div>
            <div className="bento-reviews__avg">
              <div className="bento-reviews__num">5.0</div>
              <div className="bento-reviews__of">out of 5</div>
            </div>
          </div>

          {/* SERVICES — bottom right (wide tile) */}
          <a href="/services" className="bento-card bento-services-card">
            <div
              className="bento-card__bg"
              style={{ backgroundImage: 'url(/images/gallery/g-techniq-ultra-serum.jpg)' }}
            />
            <div className="bento-card__overlay" />
            <div className="bento-card__label">
              <div className="bento-card__eyebrow">What we do</div>
              <h2 className="bento-card__title">Our Services</h2>
            </div>
            <span className="bento-corner-arrow" aria-hidden="true">↗</span>
          </a>

        </div>

      </div>
    </main>
  )
}
