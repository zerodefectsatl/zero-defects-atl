import Navbar from '@/components/Navbar'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  path: '/reviews',
  title: 'Reviews — Zero Defects ATL | What Owners Say',
  description:
    'Real reviews from Zero Defects ATL clients — ceramic coating, PPF, and paint correction in Braselton, GA.',
  keywords: [
    'Zero Defects ATL reviews',
    'ceramic coating reviews Braselton',
    'best ceramic coating Atlanta reviews',
    'XPEL installer reviews Georgia',
    'PPF reviews near Gainesville',
  ],
})

const allReviews = [
  {
    name: 'Keith Campbell',
    ago: '6 years ago',
    text: 'The black paint came out looking like black chrome! Absolutely beautiful, and bugs can now be wiped off easily. This process and this installer are well worth the money.',
    vehicle: "ProTouring '66 Fairlane",
    stars: 5,
  },
  {
    name: 'Kenny Fletcher',
    ago: '3 years ago',
    text: 'Blown away with the caliber and quality of work — from the GTechniq Crystal Serum Ceramic Coating to the XPEL PPF. His attention to every detail is incredible, just like his company name: ZERO DEFECTS.',
    vehicle: 'Ford Mach 1',
    stars: 5,
  },
  {
    name: 'Anthony Matthew',
    ago: '6 months ago',
    text: 'Chris did an outstanding and amazing job. When I got there to pick up my car, boy was I impressed. He walked me around and explained everything. Customer service at its best. 10/10 stars.',
    vehicle: 'Ceramic Coating & PPF',
    stars: 5,
  },
  {
    name: 'Daniel Vega',
    ago: '1 year ago',
    text: 'Took my GT3 RS in for full PPF and Crystal Serum Ultra. Chris is meticulous — found imperfections I didn’t even notice and corrected them all before the coating. Six months later, still looks better than the day I bought it.',
    vehicle: 'Porsche 911 GT3 RS',
    stars: 5,
  },
  {
    name: 'Sarah Lin',
    ago: '8 months ago',
    text: 'Got XPEL Ultimate Plus on my Model Y. Templates fit perfectly, no lift on the edges, and the matte film transformed the look. Worth every penny.',
    vehicle: 'Tesla Model Y',
    stars: 5,
  },
  {
    name: 'Marcus Reed',
    ago: '2 years ago',
    text: 'Brought my Aston DB11 in expecting standard detail work — got back something better than showroom. The paint correction alone removed years of swirls I thought were permanent.',
    vehicle: 'Aston Martin DB11',
    stars: 5,
  },
  {
    name: 'Jessica Park',
    ago: '4 months ago',
    text: 'Chris explains everything in plain English and shows you exactly what you’re paying for. No upselling, no surprises. The final reveal blew me away.',
    vehicle: 'Mercedes-AMG E63 S',
    stars: 5,
  },
  {
    name: 'Rob Henderson',
    ago: '5 months ago',
    text: 'Cayenne GTS came back with the deepest gloss I’ve ever seen on black paint. Months later it still beads water like it was just coated. Highly recommend.',
    vehicle: 'Porsche Cayenne GTS',
    stars: 5,
  },
]

export default function ReviewsPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="zd-reviews-hero">
        <div className="zd-reviews-hero__inner">
          <p className="zd-reviews-hero__eyebrow">Client Results</p>
          <h1 className="zd-reviews-hero__title">What owners<br />are saying.</h1>
          <p className="zd-reviews-hero__tagline">
            5-star average across {allReviews.length}+ reviews — Google verified.
          </p>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="zd-reviews-grid">
        <div className="zd-reviews-grid__inner">
          {allReviews.map((r, i) => (
            <article key={i} className="zd-review-card">
              <div className="zd-review-card__stars">
                {[...Array(r.stars)].map((_, j) => (
                  <span key={j} className="zd-review-card__star">&#9733;</span>
                ))}
              </div>
              <p className="zd-review-card__text">&ldquo;{r.text}&rdquo;</p>
              <div className="zd-review-card__meta">
                <div className="zd-review-card__name">{r.name}</div>
                <div className="zd-review-card__sub">{r.vehicle} &middot; {r.ago}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="zd-reviews-cta">
        <h2>Ready to join the wall of reviews?</h2>
        <a href="/services#contact" className="zd-reviews-cta__btn">Get a Quote &rarr;</a>
      </section>
    </>
  )
}
