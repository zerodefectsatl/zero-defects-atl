import Link from 'next/link'

export const metadata = {
  title: 'Our Process — Zero Defects ATL',
  description:
    'Four steps. Zero shortcuts. How Zero Defects ATL approaches every ceramic coating, PPF install, and paint correction in our Braselton, GA facility.',
  alternates: { canonical: '/our-process' },
}

const steps = [
  {
    num: '01',
    title: 'Consultation',
    sub: 'Before anything touches your paint.',
    body: 'We start with a walk-around. We look at your paint condition under proper lighting, listen to how you drive the car, and talk through what you want — daily driver protection, exotic-grade gloss, full-armor PPF, or some combination. You leave the consult with a written quote and a firm timeline. No mystery, no upsells in the middle of the job.',
    detail: 'Bring the car in or send photos for a remote estimate. Either works.',
  },
  {
    num: '02',
    title: 'Paint Correction',
    sub: 'Every swirl, water spot, and buffer trail — gone.',
    body: 'Coating locks in whatever is on the surface. PPF magnifies what’s underneath. So before either touches your car, we machine-polish the clear coat back to a true mirror. Single-stage, two-stage, or three-stage depending on what your paint needs — assessed honestly, not sold up. We use Rupes and Flex polishers, IDA-certified technique, and we stop when the paint says stop.',
    detail: 'Required before every coating install. No exceptions.',
  },
  {
    num: '03',
    title: 'Application',
    sub: 'Climate-controlled. Dust-free. The way it has to be done.',
    body: 'Ceramic coating or PPF gets installed in our dedicated bay — temperature-controlled, lit for inspection, sealed against dust. Gtechniq Crystal Serum Ultra is applied in dual layers (10H base, 7H topper) by an accredited installer. XPEL film is laid using computer-cut templates for perfect panel-by-panel fitment. We don’t install in your driveway. We don’t cut corners with bulk film. That’s why the warranties hold up.',
    detail: 'Crystal Serum Ultra requires Gtechniq accreditation to install. We have it.',
  },
  {
    num: '04',
    title: 'Delivery',
    sub: 'Final inspection. Aftercare. Out the door.',
    body: 'Before you pick up, we re-inspect every panel under multiple light angles to verify the work. We hand you a written care plan, your warranty paperwork (transfers with the car if you sell it), and a starter kit of ceramic-safe wash products. You’ll know exactly when to wash it for the first time, how to wash it after that, and what to never put on it. Then you drive away.',
    detail: 'Ceramic dries to the touch the same day; full chemical cure takes 5–7 days.',
  },
]

const timing = [
  { label: 'Ceramic-only with correction', value: '2–3 days' },
  { label: 'Full-front PPF', value: '2 days' },
  { label: 'Full-vehicle PPF', value: '4–6 days' },
  { label: 'PPF + ceramic combo', value: '+1–2 days' },
]

export default function OurProcessPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#080808',
        color: '#ffffff',
        padding: '64px 24px 120px',
      }}
    >
      <article style={{ maxWidth: 880, margin: '0 auto' }}>
        {/* Back link */}
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

        {/* Header */}
        <header style={{ marginBottom: 64 }}>
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
            How it works
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-bebas-neue), Manrope, sans-serif',
              fontSize: 'clamp(56px, 8vw, 112px)',
              lineHeight: 0.95,
              marginBottom: 24,
              letterSpacing: 0.5,
              fontWeight: 700,
              margin: 0,
            }}
          >
            Four steps.<br />
            <span style={{ color: '#FFD700' }}>Zero</span> shortcuts.
          </h1>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.65)',
              maxWidth: 640,
              margin: '24px 0 0',
            }}
          >
            Every car that comes through Zero Defects ATL goes through the same
            four phases. The order doesn&rsquo;t change. The standards don&rsquo;t
            move. That&rsquo;s why our installs hold up.
          </p>
        </header>

        {/* The 4 steps */}
        <section style={{ marginBottom: 80 }}>
          {steps.map((s, i) => (
            <div
              key={s.num}
              style={{
                display: 'grid',
                gridTemplateColumns: '120px 1fr',
                gap: 32,
                paddingBottom: 56,
                marginBottom: 56,
                borderBottom: i < steps.length - 1 ? '1px solid #1c1c1c' : 'none',
              }}
            >
              {/* Number column */}
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-bebas-neue), Manrope, sans-serif',
                    fontSize: 80,
                    color: '#FFD700',
                    lineHeight: 1,
                    fontWeight: 700,
                  }}
                >
                  {s.num}
                </div>
              </div>
              {/* Content column */}
              <div>
                <h2
                  style={{
                    fontFamily: 'var(--font-bebas-neue), Manrope, sans-serif',
                    fontSize: 'clamp(32px, 4vw, 48px)',
                    lineHeight: 1,
                    marginBottom: 8,
                    fontWeight: 700,
                    margin: 0,
                  }}
                >
                  {s.title}
                </h2>
                <div
                  style={{
                    fontFamily: 'var(--font-barlow-cond), Manrope, sans-serif',
                    fontSize: 14,
                    letterSpacing: 1.5,
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.55)',
                    marginTop: 8,
                    marginBottom: 20,
                    fontWeight: 500,
                  }}
                >
                  {s.sub}
                </div>
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: 'rgba(255,255,255,0.7)',
                    marginBottom: 16,
                  }}
                >
                  {s.body}
                </p>
                <div
                  style={{
                    display: 'inline-block',
                    padding: '8px 14px',
                    background: 'rgba(255,215,0,0.08)',
                    border: '1px solid rgba(255,215,0,0.2)',
                    borderRadius: 6,
                    fontSize: 12,
                    color: 'rgba(255,215,0,0.85)',
                    fontFamily: 'var(--font-barlow-cond), Manrope, sans-serif',
                    letterSpacing: 1,
                    fontWeight: 500,
                  }}
                >
                  {s.detail}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Timing block */}
        <section
          style={{
            background: '#101010',
            border: '1px solid #1c1c1c',
            borderRadius: 10,
            padding: '40px 32px',
            marginBottom: 64,
          }}
        >
          <div
            style={{
              fontSize: 11,
              letterSpacing: 3,
              textTransform: 'uppercase',
              color: '#FFD700',
              marginBottom: 12,
              fontFamily: 'var(--font-barlow-cond), Manrope, sans-serif',
              fontWeight: 600,
            }}
          >
            How long it takes
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-bebas-neue), Manrope, sans-serif',
              fontSize: 'clamp(28px, 3.5vw, 40px)',
              lineHeight: 1,
              fontWeight: 700,
              marginBottom: 24,
              margin: '0 0 24px',
            }}
          >
            Plan around these windows.
          </h2>
          <div
            style={{
              display: 'grid',
              gap: 0,
            }}
          >
            {timing.map((t, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  padding: '16px 0',
                  borderTop: i === 0 ? '1px solid #1c1c1c' : 'none',
                  borderBottom: '1px solid #1c1c1c',
                }}
              >
                <span
                  style={{
                    fontSize: 15,
                    color: 'rgba(255,255,255,0.75)',
                  }}
                >
                  {t.label}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-bebas-neue), Manrope, sans-serif',
                    fontSize: 22,
                    color: '#FFD700',
                    fontWeight: 700,
                    letterSpacing: 0.5,
                  }}
                >
                  {t.value}
                </span>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 20, fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
            Timing depends on paint condition and the protection package chosen.
            We give you a firm date at the consult.
          </p>
        </section>

        {/* CTA */}
        <div
          style={{
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
            Ready to start?
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
            Get a written quote in one business day.
          </div>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 15, lineHeight: 1.5, margin: '4px 0 16px' }}>
            Send your year/make/model and a few photos. We&rsquo;ll come back with
            an honest assessment and a firm price.
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
