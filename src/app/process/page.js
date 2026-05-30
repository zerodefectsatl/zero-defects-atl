import Image from 'next/image'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Our Process — Zero Defects ATL | The 4-Step Detail Method',
  description: 'How Zero Defects ATL approaches every car: consultation, paint correction, application, delivery. The 4-step method behind every ceramic, PPF, and correction job.',
  alternates: { canonical: '/process' },
  openGraph: {
    title: 'Our Process — Zero Defects ATL',
    description: 'The 4-step Zero Defects method — consultation, paint correction, application, delivery.',
    images: [{ url: '/images/gallery/IMG_9517.jpeg', width: 1200, height: 800, alt: 'Zero Defects ATL process' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Process — Zero Defects ATL',
    description: 'The 4-step Zero Defects method — consultation, paint correction, application, delivery.',
    images: ['/images/gallery/IMG_9517.jpeg'],
  },
}

const processSteps = [
  {
    num: '01',
    title: 'Consultation',
    desc: 'We assess your vehicle and discuss the right protection package for your goals and budget.',
    detail: 'Every project begins with an in-person walk-around. We document the current paint condition, identify any swirls or chips, evaluate your driving habits, and recommend the protection level that actually fits how you use the car — not just the priciest option.',
    img: '/images/gallery/IMG_7392.jpeg',
  },
  {
    num: '02',
    title: 'Paint Correction',
    desc: 'Every swirl, scratch, and water spot is removed before any protection is applied.',
    detail: 'Multi-stage machine polishing with Rupes and Flex tools. We never coat or wrap over damaged paint — that just preserves the damage forever. IDA-certified technician, single/two/three-stage correction depending on what the paint needs.',
    img: '/images/gallery/IMG_9417.jpeg',
  },
  {
    num: '03',
    title: 'Application',
    desc: 'Precision ceramic coating or PPF film is installed in our climate-controlled facility.',
    detail: 'Gtechniq Crystal Serum Ultra, CCI Revolution, or XPEL Ultimate Plus — applied panel-by-panel in a dust-controlled bay. Computer-cut templates for PPF, factory-trained installation, multi-day cure times when the product calls for it.',
    img: '/images/gallery/IMG_7399.jpeg',
  },
  {
    num: '04',
    title: 'Delivery',
    desc: 'Final inspection, care instructions, and warranty paperwork. Your car leaves perfect.',
    detail: 'A second technician inspects the work before delivery. You get the care guide, your warranty paperwork, and a personal walk-through of how to maintain the finish. Most clients return for annual decontamination wash and inspection.',
    img: '/images/gallery/IMG_7437.jpeg',
  },
]

export default function ProcessPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="zd-process-hero">
        <div className="zd-process-hero__bg">
          <video
            className="zd-process-hero__video"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/images/gallery/IMG_9417.jpeg"
          >
            <source src="/videos/hero-services.mp4" type="video/mp4" />
          </video>
          <div className="zd-process-hero__overlay" />
        </div>
        <div className="zd-process-hero__inner">
          <p className="zd-process-hero__eyebrow">How It Works</p>
          <h1 className="zd-process-hero__title">The Zero Defects<br />Process</h1>
          <p className="zd-process-hero__tagline">
            Four steps. No shortcuts. Every car gets the same standard.
          </p>
        </div>
      </section>

      {/* Steps in detail */}
      <section className="zd-process-detail">
        <div className="zd-process-detail__inner">
          {processSteps.map((s, i) => (
            <article key={i} className={`zd-process-step ${i % 2 === 1 ? 'zd-process-step--reverse' : ''}`}>
              <div className="zd-process-step__media">
                <Image
                  src={s.img}
                  alt={`${s.title} — Zero Defects ATL`}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="zd-process-step__body">
                <div className="zd-process-step__num">{s.num}</div>
                <h2 className="zd-process-step__title">{s.title}</h2>
                <p className="zd-process-step__desc">{s.desc}</p>
                <p className="zd-process-step__detail">{s.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="zd-process-cta">
        <h2 className="zd-process-cta__title">Ready to start step one?</h2>
        <p className="zd-process-cta__sub">Book a consultation in Braselton, GA.</p>
        <a href="/services#contact" className="zd-process-cta__btn">Get a Quote &rarr;</a>
      </section>
    </>
  )
}
