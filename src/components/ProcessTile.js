'use client'

import { useState } from 'react'

/**
 * Homepage "Our Process" tile — a photo-free blueprint card with an animated
 * inspection sweep that lights up the four steps in sequence. Adapts the
 * portrait concept to the wide/short bento cell. Hovering replays the sweep.
 */
const STEPS = [
  { n: '01', name: 'Consult' },
  { n: '02', name: 'Correct' },
  { n: '03', name: 'Apply' },
  { n: '04', name: 'Deliver' },
]

export default function ProcessTile() {
  const [run, setRun] = useState(0)

  return (
    <a
      href="/our-process"
      className="bento-card bento-process-card zdproc"
      onMouseEnter={() => setRun((r) => r + 1)}
    >
      <span className="zdproc__grid" aria-hidden="true" />

      <div className="zdproc__inner">
        <div className="zdproc__top">
          <span className="bento-card__eyebrow zdproc__kicker">How it works</span>
          <span className="zdproc__count">Four steps</span>
        </div>

        {/* key={run} remounts the rail so the CSS sweep replays on hover */}
        <div className="zdproc__rail" key={run}>
          <span className="zdproc__track" />
          <span className="zdproc__fill" />
          {STEPS.map((s, i) => (
            <div className="zdproc__step" style={{ ['--i']: i }} key={s.n}>
              <span className="zdproc__node" />
              <span className="zdproc__num">{s.n}</span>
              <span className="zdproc__name">{s.name}</span>
            </div>
          ))}
        </div>

        <div className="zdproc__bottom">
          <h2 className="bento-card__title">Our Process</h2>
          <span className="zdproc__arrow" aria-hidden="true">↗</span>
        </div>
      </div>

      <style>{`
        .zdproc { background: linear-gradient(180deg, #101a2a 0%, #0c1118 100%); }
        .zdproc__grid {
          position: absolute; inset: 0; z-index: 0; pointer-events: none; opacity: .8;
          background-image:
            linear-gradient(rgba(57,214,232,.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(57,214,232,.07) 1px, transparent 1px);
          background-size: 22px 22px;
          -webkit-mask-image: radial-gradient(130% 115% at 80% 0%, #000 26%, transparent 88%);
          mask-image: radial-gradient(130% 115% at 80% 0%, #000 26%, transparent 88%);
        }
        .zdproc__inner {
          position: absolute; inset: 0; z-index: 2;
          display: flex; flex-direction: column; padding: 16px 18px;
        }
        .zdproc__top { display: flex; justify-content: space-between; align-items: center; }
        .zdproc .zdproc__kicker {
          color: #39d6e8; margin: 0; display: flex; align-items: center; gap: 7px;
        }
        .zdproc .zdproc__kicker::before { content: ''; width: 14px; height: 1px; background: #39d6e8; }
        .zdproc__count {
          font-family: var(--font-barlow-cond), 'Manrope', sans-serif;
          font-size: 9px; letter-spacing: 2px; text-transform: uppercase; color: rgba(125,138,160,.85);
        }
        .zdproc__rail {
          position: relative; margin: auto 0; display: flex; justify-content: space-between; padding: 0 3px;
        }
        .zdproc__track { position: absolute; left: 7px; right: 7px; top: 5px; height: 1.5px; background: #1e2a3d; }
        .zdproc__fill {
          position: absolute; left: 7px; top: 5px; height: 1.5px; width: 0;
          background: linear-gradient(90deg, #39d6e8, rgba(57,214,232,.3));
          box-shadow: 0 0 8px #39d6e8;
          animation: zdprocFill 1.9s cubic-bezier(.65,0,.35,1) .2s forwards;
        }
        @keyframes zdprocFill { to { width: calc(100% - 14px); } }
        .zdproc__step {
          position: relative; flex: 1;
          display: flex; flex-direction: column; align-items: center; gap: 6px;
          opacity: 0; animation: zdprocReveal .5s ease forwards;
          animation-delay: calc(.2s + var(--i) * .42s);
        }
        @keyframes zdprocReveal { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: none; } }
        .zdproc__node {
          width: 9px; height: 9px; border-radius: 50%;
          background: #0c1118; border: 1.5px solid #1e2a3d;
          animation: zdprocPop .01s linear forwards; animation-delay: calc(.5s + var(--i) * .42s);
        }
        @keyframes zdprocPop { to { background: #39d6e8; border-color: #39d6e8; box-shadow: 0 0 10px #39d6e8; } }
        .zdproc__num {
          font-family: var(--font-barlow-cond), 'Manrope', monospace;
          font-size: 9px; letter-spacing: .5px; color: #7d8aa0;
        }
        .zdproc__name {
          font-family: var(--font-barlow-cond), 'Manrope', sans-serif;
          font-size: 10px; font-weight: 700; letter-spacing: .6px; text-transform: uppercase;
          color: #92a0b6; white-space: nowrap;
        }
        .zdproc__bottom { display: flex; justify-content: space-between; align-items: flex-end; }
        .zdproc .bento-card__title { color: #eef3fa; }
        .zdproc__arrow { font-size: 16px; color: #39d6e8; transition: transform .3s ease; }
        .zdproc:hover .zdproc__arrow { transform: translate(3px, -3px); }
      `}</style>
    </a>
  )
}
