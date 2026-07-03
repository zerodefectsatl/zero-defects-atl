'use client'

import { useEffect } from 'react'
import { track } from '@/lib/analytics'

// Site-wide conversion listener. One delegated click handler covers every
// tel:/mailto: link (Navbar, Footer, service pages, city pages, FAQ, contact
// section) plus outbound Instagram / Google Maps clicks — no per-link wiring,
// and links added later are tracked automatically.
export default function AnalyticsEvents() {
  useEffect(() => {
    const onClick = (e) => {
      const link = e.target.closest?.('a[href]')
      if (!link) return
      const href = link.getAttribute('href') || ''
      const params = { page_path: window.location.pathname, link_url: href }

      if (href.startsWith('tel:')) {
        track('phone_call', params)
      } else if (href.startsWith('mailto:')) {
        track('email_click', params)
      } else if (href.includes('instagram.com') || href.includes('maps.app.goo.gl')) {
        track('outbound_profile_click', params)
      }
    }
    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])

  return null
}
