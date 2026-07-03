// Thin client-side wrapper around gtag so components can report GA4 events
// without caring whether the GA script has loaded (ad-blockers, slow
// networks). Event names follow GA4 recommended events where one exists
// (generate_lead); the rest are custom and get marked as key events in the
// GA admin UI.

export function track(eventName, params = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', eventName, params)
}
