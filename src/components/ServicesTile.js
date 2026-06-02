/**
 * Homepage "Our Services" tile — a photo-free card that stacks our three core
 * services as layered "protection" rows. The rows stagger in on load; a cyan
 * sheen sweeps across them on hover. Built to pair visually with ProcessTile
 * (same blueprint grid, cyan accent, scoped <style>), and to fit the wide/short
 * bento cell rather than the portrait concept it came from.
 *
 * Plain <a href> (not next/link) so the cross-document view transition still
 * fires — see HANDOFF invariants. Pure CSS, so no client JS is needed.
 */
const SERVICES = [
  { name: 'Ceramic Coating', tag: 'Gloss + Chemical' },
  { name: 'Paint Protection Film', tag: 'Physical Armor' },
  { name: 'Paint Correction', tag: 'Surface Prep' },
]

export default function ServicesTile() {
  return (
    <a
      href="/services"
      className="bento-card bento-services-card zdsvc"
      aria-label="Our Services"
    >
      <span className="zdsvc__grid" aria-hidden="true" />

      <div className="zdsvc__inner">
        <div className="zdsvc__top">
          <span className="bento-card__eyebrow zdsvc__kicker">What we do</span>
          <span className="zdsvc__count">Three services</span>
        </div>

        <div className="zdsvc__stack">
          {SERVICES.map((s, i) => (
            <div className="zdsvc__layer" style={{ ['--i']: i }} key={s.name}>
              <span className="zdsvc__sheen" aria-hidden="true" />
              <span className="zdsvc__lname">{s.name}</span>
              <span className="zdsvc__ltag">{s.tag}</span>
            </div>
          ))}
        </div>

        <div className="zdsvc__bottom">
          <h2 className="bento-card__title">Our Services</h2>
          <span className="zdsvc__arrow" aria-hidden="true">↗</span>
        </div>
      </div>

      <style>{`
        .zdsvc { background: linear-gradient(180deg, #101a2a 0%, #0c1118 100%); }
        .zdsvc__grid {
          position: absolute; inset: 0; z-index: 0; pointer-events: none; opacity: .8;
          background-image:
            linear-gradient(rgba(57,214,232,.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(57,214,232,.07) 1px, transparent 1px);
          background-size: 22px 22px;
          -webkit-mask-image: radial-gradient(130% 115% at 20% 0%, #000 26%, transparent 88%);
          mask-image: radial-gradient(130% 115% at 20% 0%, #000 26%, transparent 88%);
        }
        .zdsvc__inner {
          position: absolute; inset: 0; z-index: 2;
          display: flex; flex-direction: column; padding: 16px 18px;
        }
        .zdsvc__top { display: flex; justify-content: space-between; align-items: center; }
        .zdsvc .zdsvc__kicker {
          color: #39d6e8; margin: 0; display: flex; align-items: center; gap: 7px;
        }
        .zdsvc .zdsvc__kicker::before { content: ''; width: 14px; height: 1px; background: #39d6e8; }
        .zdsvc__count {
          font-family: var(--font-barlow-cond), 'Manrope', sans-serif;
          font-size: 9px; letter-spacing: 2px; text-transform: uppercase; color: rgba(125,138,160,.85);
        }
        .zdsvc__stack {
          margin: auto 0; display: flex; flex-direction: column; gap: 7px;
          perspective: 700px;
        }
        .zdsvc__layer {
          position: relative; overflow: hidden;
          display: flex; justify-content: space-between; align-items: center; gap: 10px;
          padding: 9px 11px; border-radius: 8px;
          border: 1px solid #1e2a3d;
          background: linear-gradient(100deg, rgba(57,214,232,.08), rgba(57,214,232,.01));
          opacity: 0; transform: translateY(12px) rotateX(8deg);
          animation: zdsvcIn .55s cubic-bezier(.2,.8,.2,1) forwards;
          animation-delay: calc(.15s + var(--i) * .18s);
          transition: border-color .4s ease;
        }
        .zdsvc:hover .zdsvc__layer { border-color: rgba(57,214,232,.32); }
        @keyframes zdsvcIn { to { opacity: 1; transform: none; } }
        .zdsvc__lname {
          font-family: var(--font-bebas-neue), 'Manrope', sans-serif;
          font-size: 15px; letter-spacing: .4px; line-height: 1; color: #eef3fa; font-weight: 700;
        }
        .zdsvc__ltag {
          font-family: var(--font-barlow-cond), 'Manrope', sans-serif;
          font-size: 8.5px; letter-spacing: 1.4px; text-transform: uppercase;
          color: #7d8aa0; white-space: nowrap;
        }
        .zdsvc__sheen {
          position: absolute; inset: 0; pointer-events: none;
          background: linear-gradient(100deg, transparent 30%, rgba(57,214,232,.22) 50%, transparent 70%);
          transform: translateX(-120%);
        }
        .zdsvc:hover .zdsvc__layer .zdsvc__sheen { animation: zdsvcSweep 1.1s ease forwards; }
        .zdsvc:hover .zdsvc__layer:nth-child(1) .zdsvc__sheen { animation-delay: 0s; }
        .zdsvc:hover .zdsvc__layer:nth-child(2) .zdsvc__sheen { animation-delay: .12s; }
        .zdsvc:hover .zdsvc__layer:nth-child(3) .zdsvc__sheen { animation-delay: .24s; }
        @keyframes zdsvcSweep { to { transform: translateX(120%); } }
        .zdsvc__bottom { display: flex; justify-content: space-between; align-items: flex-end; }
        .zdsvc .bento-card__title { color: #eef3fa; }
        .zdsvc__arrow { font-size: 16px; color: #39d6e8; transition: transform .3s ease; }
        .zdsvc:hover .zdsvc__arrow { transform: translate(3px, -3px); }

        @media (prefers-reduced-motion: reduce) {
          .zdsvc__layer { animation: none; opacity: 1; transform: none; }
          .zdsvc:hover .zdsvc__layer .zdsvc__sheen { animation: none; }
        }
      `}</style>
    </a>
  )
}
