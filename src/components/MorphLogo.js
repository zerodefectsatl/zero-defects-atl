import Image from 'next/image'

/* Shared-element morph target for cross-document View Transitions.
   Carries the SAME view-transition-name ('zd-logo') as the home bento
   logo card (src/app/page.js) and uses the SAME asset + square aspect,
   so the logo morphs into a consistent top-left spot on every
   destination page instead of vanishing with the outgoing page.

   One — and only one — element per page may carry this name, or the
   browser skips the whole transition. Pages that render <Navbar/>
   (gallery/process/reviews) get their zd-logo from the Navbar logo
   instead, so they must NOT also render <MorphLogo/>. */
export default function MorphLogo() {
  return (
    <a
      href="/"
      aria-label="Zero Defects ATL — home"
      style={{
        position: 'fixed',
        top: 20,
        left: 24,
        zIndex: 50,
        display: 'block',
        lineHeight: 0,
      }}
    >
      <Image
        src="/images/logos/zd-logo-clean.png"
        alt="Zero Defects ATL"
        width={52}
        height={51}
        priority
        fetchPriority="high"
        loading="eager"
        style={{ display: 'block', viewTransitionName: 'zd-logo' }}
      />
    </a>
  )
}
