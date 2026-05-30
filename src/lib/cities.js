// City landing page data. Each entry gets a unique page at
// /service-areas/<slug> with locally-specific copy so the pages read as
// genuinely distinct (not thin/duplicate doorway pages).

export const CITIES = [
  {
    slug: 'buford',
    name: 'Buford',
    drive: 'about 20 minutes from our Braselton studio',
    lead:
      'Ceramic coating, paint protection film, and paint correction for Buford, GA drivers. From daily drivers around the Mall of Georgia to weekend cars headed to Lake Lanier, we protect the finishes Buford owners care about — with Gtechniq accreditation and XPEL-authorized PPF.',
    local:
      'Buford sits a short drive up I-85/I-985 from our Braselton shop, so dropping the car off for a multi-day coating or full PPF wrap is easy. Lake days, summer heat, and highway miles are exactly what ceramic and film are built to handle.',
  },
  {
    slug: 'cumming',
    name: 'Cumming',
    drive: 'roughly 30–35 minutes via GA-400 and I-985',
    lead:
      'Ceramic coating, PPF, and paint correction for Cumming and Forsyth County, GA. Whether it is a new build from The Collection at Forsyth or an exotic you baby on the weekends, we lock in the gloss and shield the paint before the GA sun and road debris get to it.',
    local:
      'We see a lot of Cumming clients running both Crystal Serum Ultra ceramic and XPEL film — the combination that handles GA-400 commuting and Lake Lanier weekends without the swirl marks and rock chips.',
  },
  {
    slug: 'gainesville',
    name: 'Gainesville',
    drive: 'about 20 minutes from Braselton',
    lead:
      'Ceramic coating, paint protection film, and paint correction for Gainesville and Hall County, GA. From lake-bound trucks and SUVs to garage-kept performance cars, we correct the paint first and protect it properly — no shortcuts, every install.',
    local:
      'Gainesville sits right on Lake Lanier, and lake life is hard on paint: UV, water spots, and bug etching all add up. Ceramic coating makes washing effortless and PPF stops the chips before they start.',
  },
  {
    slug: 'flowery-branch',
    name: 'Flowery Branch',
    drive: 'about 15 minutes from our Braselton studio',
    lead:
      'Ceramic coating, PPF, and paint correction for Flowery Branch, GA. One of our closest neighbors on Lake Lanier — we keep Flowery Branch finishes glossy, hydrophobic, and protected from the lake-and-highway miles they actually see.',
    local:
      'Being just up I-985, Flowery Branch drop-offs are simple, and the lake-adjacent driving here is the perfect case for hydrophobic ceramic and self-healing film.',
  },
  {
    slug: 'hoschton',
    name: 'Hoschton',
    drive: 'just minutes from our Braselton studio',
    lead:
      'Ceramic coating, paint protection film, and paint correction for Hoschton, GA — practically next door to our Braselton shop. Local drivers get the same Gtechniq-accredited coatings and XPEL-authorized PPF, with the easiest drop-off in the area.',
    local:
      'Hoschton and Braselton share a backyard, so Hoschton clients get the quickest turnaround and the easiest consultations — bring the car by or send photos for a written quote.',
  },
]

export function getCity(slug) {
  return CITIES.find((c) => c.slug === slug)
}
