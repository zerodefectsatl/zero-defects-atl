import { Bebas_Neue, Barlow, Barlow_Condensed } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
  display: 'swap',
})

const barlow = Barlow({
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-barlow-body',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-barlow-cond',
  display: 'swap',
})

export const metadata = {
  title: 'Zero Defects — Ceramic Coatings · Paint Protection · Paint Correction | Braselton, GA',
  description:
    'Gtechniq Crystal Serum Ultra accredited & XPEL authorized installer in Braselton, GA. Serving the greater Atlanta metro with precision ceramic coatings, PPF, and paint correction.',
  keywords: [
    'ceramic coating Atlanta',
    'PPF Atlanta',
    'paint protection film Atlanta',
    'ceramic coating Braselton GA',
    'XPEL installer Atlanta',
    'Gtechniq installer Atlanta',
    'paint correction Atlanta',
    'auto detailing Braselton',
    'Zero Defects ATL',
  ],
  openGraph: {
    title: 'Zero Defects — Ceramic Coatings & Paint Protection | Braselton, GA',
    description:
      'Gtechniq Crystal Serum Ultra accredited & XPEL authorized installer serving the greater Atlanta metro.',
    url: 'https://zerodefectsatl.com',
    siteName: 'Zero Defects ATL',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${barlow.variable} ${barlowCondensed.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
