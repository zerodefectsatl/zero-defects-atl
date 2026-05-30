import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'FAQ — Zero Defects ATL | Ceramic Coating & PPF Questions',
  description: 'Answers to common questions about ceramic coatings, paint protection film, paint correction, pricing, and warranty in Braselton, GA.',
  alternates: { canonical: '/faq' },
}

const faqs = [
  {
    q: 'How long does ceramic coating last?',
    a: 'Ceramic coating longevity depends on the product. Gtechniq Crystal Serum Ultra carries a 9-year warranty and is rated for extreme conditions from −40°C to +250°C. CCI Revolution provides 6+ years of protection, and CCI Advance provides 3–5 years.',
  },
  {
    q: 'What is the difference between ceramic coating and paint protection film (PPF)?',
    a: 'Ceramic coating bonds chemically to your paint and provides hydrophobic protection, UV resistance, and enhanced gloss. Paint protection film (PPF) is a physical TPU film that stops rock chips, scratches, and road debris from reaching the paint. For maximum protection, many customers combine both.',
  },
  {
    q: 'Do I need paint correction before ceramic coating?',
    a: 'Yes — ceramic coating locks in whatever is on your paint surface. Zero Defects ATL includes paint correction before every coating application to ensure swirls, water spots, and oxidation are removed first.',
  },
  {
    q: 'How much does ceramic coating cost in Braselton, GA?',
    a: 'Gtechniq Crystal Serum Ultra starts at $1,500 for small cars, $1,750 for medium, and $2,000 for large vehicles, and includes a 9-year warranty. CCI Revolution and Advance pricing is available by quote. Call 404-406-3355 for a custom estimate.',
  },
  {
    q: 'Is Zero Defects ATL an authorized XPEL installer?',
    a: 'Yes. Zero Defects ATL is an XPEL authorized installer, factory-trained at XPEL HQ in San Antonio, TX. Every PPF installation uses computer-cut templates and comes with a 10-year manufacturer warranty.',
  },
  {
    q: 'How long does an install take?',
    a: 'A typical ceramic coating install (with single-stage correction) takes 2–3 days. Full-front PPF takes 1–2 days. Multi-stage correction + full vehicle PPF + ceramic can take up to a week. We give exact timelines at consultation.',
  },
  {
    q: 'Can I wash my car after coating or PPF?',
    a: 'After ceramic coating, wait 7 days before the first wash and avoid automatic car washes (always use hand wash with pH-neutral soap). For PPF, you can wash after 48 hours but skip high-pressure spray on film edges for the first week.',
  },
  {
    q: 'Do you do classic cars or daily drivers?',
    a: 'Both. We work on everything from track-prepped exotics and classic restorations to family SUVs and daily drivers. The standard of work is the same — only the package recommendation changes based on your goals.',
  },
]

export default function FAQPage() {
  return (
    <>
      <Navbar />

      <section className="zd-faq-hero">
        <div className="zd-faq-hero__inner">
          <p className="zd-faq-hero__eyebrow">Frequently Asked</p>
          <h1 className="zd-faq-hero__title">Questions, answered.</h1>
          <p className="zd-faq-hero__tagline">
            The questions we hear most about ceramic, PPF, and correction.
          </p>
        </div>
      </section>

      <section className="zd-faq-list">
        <div className="zd-faq-list__inner">
          {faqs.map((f, i) => (
            <details key={i} className="zd-faq-item">
              <summary className="zd-faq-item__q">
                <span>{f.q}</span>
                <span className="zd-faq-item__chevron" aria-hidden>&rsaquo;</span>
              </summary>
              <p className="zd-faq-item__a">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="zd-faq-cta">
        <h2>Didn&apos;t find your answer?</h2>
        <p>Call <a href="tel:+14044063355">(404) 406-3355</a> or send a message.</p>
        <a href="/services#contact" className="zd-faq-cta__btn">Get in Touch &rarr;</a>
      </section>
    </>
  )
}
