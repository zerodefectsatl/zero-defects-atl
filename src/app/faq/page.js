'use client'

import { useState } from 'react'
import Link from 'next/link'

const sections = [
  {
    heading: 'Services',
    items: [
      {
        q: 'What is ceramic coating, and what does it actually do?',
        a: 'Ceramic coating is a liquid polymer that chemically bonds to your factory paint, forming a transparent, ultra-hard protective layer. It makes water bead and roll off (hydrophobic), blocks UV that causes paint oxidation, and gives the surface a deep, glassy gloss. It does NOT protect against rock chips or scratches — that’s what PPF is for.',
      },
      {
        q: 'What is paint protection film (PPF) and how is it different from ceramic coating?',
        a: 'PPF is a clear, self-healing TPU film that physically shields the paint from rock chips, road debris, bug etching, scratches, and minor abrasions. Ceramic coating is chemical protection (gloss, UV, hydrophobicity); PPF is physical armor. Many of our clients run both — PPF on the impact zones (front bumper, hood, mirrors) and ceramic over the entire car.',
      },
      {
        q: 'What is paint correction, and why do I need it before coating?',
        a: 'Paint correction is the multi-stage machine polishing process that removes swirls, fine scratches, water spots, oxidation, and buffer trails from your clear coat. Ceramic coating locks in whatever is on the surface — so applying it over damaged paint just preserves the damage forever. Every coating install at Zero Defects includes proper correction first. No shortcuts.',
      },
    ],
  },
  {
    heading: 'Products & Warranty',
    items: [
      {
        q: 'Which ceramic coating is right for my car?',
        a: 'For daily-driven cars in Georgia weather, CCI Advance (3–5 yrs) or CCI Revolution (6+ yrs) hit the sweet spot of cost and durability. For exotics, weekend cars, or anything you want to keep for a long time, Gtechniq Crystal Serum Ultra is the pinnacle — a dual-layer 10H/7H system with a 9-year warranty, rated from −40°C to +250°C. We walk through your goals on the consultation call before recommending.',
      },
      {
        q: 'How long does each ceramic coating last?',
        a: 'Gtechniq Crystal Serum Ultra: 9-year warranty. CCI Revolution: 6+ years. CCI Advance: 3–5 years. Real-world longevity depends on wash habits, parking environment (garage vs outdoor), and annual maintenance. We provide aftercare instructions with every install.',
      },
      {
        q: 'Which PPF packages do you install?',
        a: 'Three XPEL tiers: Track Pack (front bumper + headlights + mirrors), Shield (full front end — bumper, hood, fenders, mirrors, headlights, A-pillars), and Armor (full vehicle, every painted panel). All use XPEL Ultimate Plus self-healing film with computer-cut templates and a 10-year manufacturer warranty.',
      },
      {
        q: 'What warranties come with my install?',
        a: 'Ceramic: warranty depends on the product — 9 years (Crystal Serum Ultra), 6+ years (CCI Revolution), 3–5 years (CCI Advance). PPF: 10-year XPEL manufacturer warranty against yellowing, peeling, cracking, and adhesive failure. We provide all paperwork at delivery and the warranties transfer with the vehicle if you sell it.',
      },
    ],
  },
  {
    heading: 'Process & Timing',
    items: [
      {
        q: 'How long does a typical install take?',
        a: 'Ceramic-only with correction: 2–3 days depending on paint condition. Full-front PPF: 2 days. Full-vehicle PPF: 4–6 days. Combo installs (PPF + ceramic over top) add 1–2 days. We give you a firm timeline at the consultation — we don’t rush.',
      },
      {
        q: 'When can I drive my car after a ceramic coating?',
        a: 'Same day. The coating is dry to the touch within hours. The full chemical cure takes 5–7 days, during which you should keep the car out of heavy rain, avoid washing it, and skip car covers. We’ll give you a specific care window when you pick up.',
      },
      {
        q: 'When can I wash it after a fresh install?',
        a: 'Wait 7 days after ceramic coating before the first wash. PPF can be washed after 48 hours but avoid pressure washing within 6 inches of the edges for the first week so the adhesive can fully bond.',
      },
    ],
  },
  {
    heading: 'Care & Maintenance',
    items: [
      {
        q: 'How do I wash my car after ceramic coating?',
        a: 'Two-bucket hand wash with a pH-neutral ceramic-safe shampoo. No automatic brush washes ever. No harsh degreasers, no glass cleaners with ammonia on coated surfaces. We send you home with a starter care kit and a written maintenance schedule.',
      },
      {
        q: 'Can I run my PPF’d car through a touchless car wash?',
        a: 'Touchless: yes, but stay 12+ inches away from the wand and skip any wash that uses harsh degreasers or wheel acid. Hand washing is always safer. Never use automatic brush washes — the brushes can lift PPF edges over time.',
      },
      {
        q: 'Will PPF yellow, peel, or damage my paint over time?',
        a: 'No. XPEL Ultimate Plus uses non-yellowing polyurethane and is warrantied against yellowing, peeling, cracking, and adhesive failure for 10 years. When removed by a professional, it lifts cleanly and leaves the original paint untouched — in fact, the paint underneath is in better condition than the rest of the car because it was protected the whole time.',
      },
    ],
  },
  {
    heading: 'Booking & Location',
    items: [
      {
        q: 'How do I get a quote?',
        a: 'Send us the year/make/model, what you want done (ceramic, PPF, correction, or a combo), and a few photos of the car. Either fill out the contact form on the services page, email zerodefectsatl@gmail.com, or call 404-406-3355. We respond within one business day with a written estimate.',
      },
      {
        q: 'Where are you located and do you do mobile?',
        a: 'Our shop is in Braselton, GA, serving the greater Atlanta metro. All installs are done in our climate-controlled facility — we do not offer mobile because ceramic and PPF installs require dust-controlled conditions to come out right. We have customers drive in from Gainesville, Buford, Cumming, and across Atlanta regularly.',
      },
      {
        q: 'Do you require a deposit?',
        a: 'For PPF and full ceramic installs, we ask for a 25% deposit to hold your appointment slot. The deposit is fully credited to your final invoice. Smaller jobs (single-stage correction, top-up coatings) are pay-on-pickup.',
      },
    ],
  },
]

export const dynamic = 'force-static'

export default function FAQPage() {
  const [open, setOpen] = useState(() => new Set())

  const toggle = (key) =>
    setOpen((prev) => {
      const next = new Set(prev)
      next.has(key) ? next.delete(key) : next.add(key)
      return next
    })

  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#080808',
        color: '#ffffff',
        padding: '64px 24px 120px',
      }}
    >
      <article style={{ maxWidth: 820, margin: '0 auto' }}>
        <Link
          href="/"
          style={{
            display: 'inline-block',
            marginBottom: 40,
            fontSize: 11,
            letterSpacing: 3,
            textTransform: 'uppercase',
            color: '#FFD700',
            textDecoration: 'none',
            fontFamily: 'var(--font-barlow-cond), Manrope, sans-serif',
            fontWeight: 600,
          }}
        >
          ← Back to home
        </Link>

        <header style={{ marginBottom: 56 }}>
          <div
            style={{
              fontSize: 11,
              letterSpacing: 4,
              textTransform: 'uppercase',
              color: '#FFD700',
              marginBottom: 16,
              fontFamily: 'var(--font-barlow-cond), Manrope, sans-serif',
              fontWeight: 600,
            }}
          >
            Frequently Asked
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-bebas-neue), Manrope, sans-serif',
              fontSize: 'clamp(56px, 8vw, 112px)',
              lineHeight: 0.95,
              marginBottom: 24,
              letterSpacing: 0.5,
              fontWeight: 700,
            }}
          >
            Questions, answered.
          </h1>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.6)',
              maxWidth: 620,
              margin: 0,
            }}
          >
            Everything we get asked about ceramic coating, paint protection film,
            paint correction, and what it’s like to work with us. Don’t see
            yours? <a href="tel:4044063355" style={{ color: '#FFD700', textDecoration: 'underline' }}>Call us</a>.
          </p>
        </header>

        {sections.map((sec, si) => (
          <section key={si} style={{ marginBottom: 56 }}>
            <h2
              style={{
                fontFamily: 'var(--font-barlow-cond), Manrope, sans-serif',
                fontSize: 12,
                letterSpacing: 3,
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.45)',
                marginBottom: 16,
                fontWeight: 600,
              }}
            >
              {sec.heading}
            </h2>
            <div style={{ borderTop: '1px solid #1c1c1c' }}>
              {sec.items.map((item, ii) => {
                const key = `${si}-${ii}`
                const isOpen = open.has(key)
                return (
                  <div
                    key={key}
                    style={{ borderBottom: '1px solid #1c1c1c' }}
                  >
                    <button
                      type="button"
                      onClick={() => toggle(key)}
                      aria-expanded={isOpen}
                      style={{
                        all: 'unset',
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        gap: 24,
                        width: '100%',
                        padding: '22px 0',
                        cursor: 'pointer',
                        fontFamily: 'inherit',
                      }}
                    >
                      <span
                        style={{
                          fontSize: 17,
                          lineHeight: 1.4,
                          color: '#fff',
                          fontWeight: 500,
                        }}
                      >
                        {item.q}
                      </span>
                      <span
                        aria-hidden="true"
                        style={{
                          flexShrink: 0,
                          width: 28,
                          height: 28,
                          borderRadius: 6,
                          background: isOpen ? '#FFD700' : 'transparent',
                          border: `1px solid ${isOpen ? '#FFD700' : '#2a2a2a'}`,
                          color: isOpen ? '#000' : '#FFD700',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: 14,
                          fontWeight: 700,
                          marginTop: 2,
                        }}
                      >
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    {isOpen && (
                      <div
                        style={{
                          padding: '0 0 24px 0',
                          fontSize: 15,
                          lineHeight: 1.65,
                          color: 'rgba(255,255,255,0.7)',
                          maxWidth: 720,
                        }}
                      >
                        {item.a}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </section>
        ))}

        {/* Bottom CTA */}
        <div
          style={{
            marginTop: 24,
            padding: '40px 32px',
            background: '#101010',
            border: '1px solid #1c1c1c',
            borderRadius: 10,
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
        >
          <div
            style={{
              fontSize: 11,
              letterSpacing: 3,
              textTransform: 'uppercase',
              color: '#FFD700',
              fontFamily: 'var(--font-barlow-cond), Manrope, sans-serif',
              fontWeight: 600,
            }}
          >
            Still have a question?
          </div>
          <div
            style={{
              fontFamily: 'var(--font-bebas-neue), Manrope, sans-serif',
              fontSize: 'clamp(28px, 4vw, 44px)',
              lineHeight: 1,
              fontWeight: 700,
              letterSpacing: 0.5,
            }}
          >
            Talk to us directly.
          </div>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 15, lineHeight: 1.5, margin: '4px 0 16px' }}>
            We answer every quote request within one business day.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a
              href="tel:4044063355"
              style={{
                display: 'inline-block',
                background: '#FFD700',
                color: '#000',
                padding: '12px 24px',
                borderRadius: 6,
                fontWeight: 800,
                fontSize: 12,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              Call 404-406-3355
            </a>
            <Link
              href="/services#contact"
              style={{
                display: 'inline-block',
                background: 'transparent',
                color: '#FFD700',
                border: '1px solid #FFD700',
                padding: '11px 24px',
                borderRadius: 6,
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </article>
    </main>
  )
}
