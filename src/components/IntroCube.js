'use client'

import { useEffect, useState } from 'react'

// Circle-target reticle cursor: outer ring + inner blue ring + center dot + 4 tick marks
const CURSOR_TARGET = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 36 36'%3E%3Ccircle cx='18' cy='18' r='16' fill='none' stroke='%23f0f4f8' stroke-width='1.2' opacity='0.75'/%3E%3Ccircle cx='18' cy='18' r='6' fill='none' stroke='%231a8fff' stroke-width='1.4'/%3E%3Ccircle cx='18' cy='18' r='1.8' fill='%23f0f4f8'/%3E%3Cline x1='18' y1='1' x2='18' y2='10' stroke='%23f0f4f8' stroke-width='1' opacity='0.6'/%3E%3Cline x1='18' y1='26' x2='18' y2='35' stroke='%23f0f4f8' stroke-width='1' opacity='0.6'/%3E%3Cline x1='1' y1='18' x2='10' y2='18' stroke='%23f0f4f8' stroke-width='1' opacity='0.6'/%3E%3Cline x1='26' y1='18' x2='35' y2='18' stroke='%23f0f4f8' stroke-width='1' opacity='0.6'/%3E%3C/svg%3E") 18 18, crosshair`

const S  = 400   // outer cube side
const IW = 260   // inner logo prism width
const IH = 340   // inner logo prism height
const ID = 260   // inner logo prism depth
const RA = 520   // equatorial ring diameter
const RB = 480   // polar ring diameter

export default function IntroCube({ onComplete }) {
  const [phase, setPhase] = useState('hidden')

  useEffect(() => {
    let seen = false
    try { seen = !!sessionStorage.getItem('zd-intro-seen') } catch (e) {}
    if (seen) {
      setPhase('done')
      document.body.style.cursor = 'auto'
      return
    }
    const t0 = setTimeout(() => setPhase('spin'),   80)
    const t1 = setTimeout(() => setPhase('stable'), 3600)
    return () => [t0, t1].forEach(clearTimeout)
  }, [])

  const dismiss = () => {
    if (phase === 'fading' || phase === 'done') return
    try { sessionStorage.setItem('zd-intro-seen', '1') } catch (e) {}
    setPhase('fading')
    setTimeout(() => {
      setPhase('done')
      document.body.style.cursor = 'auto'
      onComplete?.()
    }, 900)
  }

  if (phase === 'done') return null

  const spinning = phase === 'spin'
  const stable   = phase === 'stable'

  return (
    <div
      onClick={dismiss}
      className="zd-intro-gate"
      style={{
        position: 'fixed', inset: 0, zIndex: 20000,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        background: '#080a0c',
        opacity: phase === 'fading' ? 0 : 1,
        transition: phase === 'fading' ? 'opacity 1s ease' : 'none',
        pointerEvents: phase === 'fading' ? 'none' : 'auto',
        cursor: CURSOR_TARGET,
        overflow: 'hidden',
      }}
    >
      {/* Multi-layer ambient glow */}
      <div style={{ position:'absolute', inset:0, pointerEvents:'none',
        background:'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(26,143,255,0.07) 0%, rgba(234,255,0,0.03) 40%, transparent 70%)'
      }}/>

      {/* 3D perspective scene */}
      <div style={{ perspective: '1100px', perspectiveOrigin: '50% 50%' }}>
        <div style={{
          width: S, height: S,
          position: 'relative',
          transformStyle: 'preserve-3d',
          animation: spinning ? 'cubeSpinIn 3.4s cubic-bezier(0.16, 1, 0.3, 1) forwards'
                   : stable  ? 'cubeSpin 12s linear infinite'
                   : undefined,
        }}>

          {/* ── OUTER CUBE (6 faces, wireframe) ─────────────── */}
          {OUTER_FACES.map(f => (
            <div key={f.type} style={{
              position:'absolute',
              width: f.w, height: f.h,
              top:'50%', left:'50%',
              marginTop: -f.h/2, marginLeft: -f.w/2,
              transform: f.tf,
              background: f.bg,
              border: `1px solid ${f.border}`,
              boxShadow: f.shadow || undefined,
              backfaceVisibility: 'visible',
              // inner inset frame lines
              outline: `1px solid ${f.border.replace(/[\d.]+\)$/, '0.06)')}`,
              outlineOffset: '-10px',
            }}>
              {/* diagonal X on each face */}
              <svg width="100%" height="100%" style={{ position:'absolute', inset:0, opacity:0.12 }}>
                <line x1="0" y1="0" x2="100%" y2="100%" stroke={f.lineColor} strokeWidth="0.8"/>
                <line x1="100%" y1="0" x2="0" y2="100%" stroke={f.lineColor} strokeWidth="0.8"/>
                {/* horizontal & vertical midlines */}
                <line x1="50%" y1="0" x2="50%" y2="100%" stroke={f.lineColor} strokeWidth="0.5"/>
                <line x1="0" y1="50%" x2="100%" y2="50%" stroke={f.lineColor} strokeWidth="0.5"/>
              </svg>
            </div>
          ))}

          {/* ── CORNER VERTEX SPHERES (8 outer corners) ──────── */}
          {OUTER_CORNERS.map((c, i) => (
            <div key={`oc-${i}`} style={{
              position:'absolute',
              width: 7, height: 7,
              borderRadius:'50%',
              background: i < 4 ? '#1a8fff' : '#eaff00',
              boxShadow: `0 0 10px 3px ${i < 4 ? 'rgba(26,143,255,0.9)' : 'rgba(234,255,0,0.9)'}`,
              left: c[0] - 3.5,
              top:  c[1] - 3.5,
              transform: `translateZ(${c[2]}px)`,
            }}/>
          ))}

          {/* ── EDGE MIDPOINT DOTS (12 edges) ────────────────── */}
          {EDGE_MIDS.map((m, i) => (
            <div key={`em-${i}`} style={{
              position:'absolute',
              width: 4, height: 4,
              borderRadius:'50%',
              background: 'rgba(180,220,255,0.7)',
              boxShadow: '0 0 6px 2px rgba(100,180,255,0.5)',
              left: m[0] - 2,
              top:  m[1] - 2,
              transform: `translateZ(${m[2]}px)`,
            }}/>
          ))}

          {/* ── EQUATORIAL RING (horizontal, XZ plane) ────────── */}
          <div style={{
            position:'absolute',
            width: RA, height: RA,
            borderRadius:'50%',
            border: '1px solid rgba(26,143,255,0.28)',
            boxShadow: '0 0 18px rgba(26,143,255,0.12), inset 0 0 18px rgba(26,143,255,0.06)',
            top:'50%', left:'50%',
            marginTop: -RA/2, marginLeft: -RA/2,
            transform: 'rotateX(90deg)',
          }}/>
          {/* ring tick marks */}
          {[0,45,90,135,180,225,270,315].map(deg => (
            <div key={`rt-${deg}`} style={{
              position:'absolute',
              width: 8, height: 2,
              background: 'rgba(26,143,255,0.5)',
              top:'50%', left:'50%',
              marginTop: -1,
              marginLeft: -4,
              transform: `rotateX(90deg) rotateZ(${deg}deg) translateX(${RA/2 - 4}px)`,
            }}/>
          ))}

          {/* ── POLAR RING (vertical, YZ plane) ──────────────── */}
          <div style={{
            position:'absolute',
            width: RB, height: RB,
            borderRadius:'50%',
            border: '1px solid rgba(234,255,0,0.22)',
            boxShadow: '0 0 14px rgba(234,255,0,0.1)',
            top:'50%', left:'50%',
            marginTop: -RB/2, marginLeft: -RB/2,
            transform: 'rotateY(90deg)',
          }}/>

          {/* ── DIAGONAL RING (tilted 35°) ─────────────────────── */}
          <div style={{
            position:'absolute',
            width: RB - 40, height: RB - 40,
            borderRadius:'50%',
            border: '1px solid rgba(100,200,255,0.15)',
            top:'50%', left:'50%',
            marginTop: -(RB-40)/2, marginLeft: -(RB-40)/2,
            transform: 'rotateX(35deg) rotateY(45deg)',
          }}/>

          {/* ── INNER LOGO PRISM (portrait, holds logo) ──────── */}
          <div style={{
            position:'absolute',
            width: IW, height: IH,
            top:'50%', left:'50%',
            marginTop: -IH/2, marginLeft: -IW/2,
            transformStyle: 'preserve-3d',
          }}>
            {INNER_FACES.map(f => (
              <div key={f.type} style={{
                position:'absolute',
                width: f.w, height: f.h,
                top:'50%', left:'50%',
                marginTop: -f.h/2, marginLeft: -f.w/2,
                transform: f.tf,
                background: f.bg,
                border: `1px solid ${f.border}`,
                boxShadow: f.shadow || undefined,
                display: f.type === 'front' ? 'flex' : 'block',
                alignItems: 'center',
                justifyContent: 'center',
                backfaceVisibility: 'visible',
              }}>
                {f.type === 'front' && <LogoInCube />}
              </div>
            ))}

            {/* Inner corner glows */}
            {INNER_CORNERS.map((c, i) => (
              <div key={`ic-${i}`} style={{
                position:'absolute',
                width: 5, height: 5,
                borderRadius:'50%',
                background: i % 2 === 0 ? 'rgba(26,143,255,0.9)' : 'rgba(234,255,0,0.9)',
                boxShadow: `0 0 8px 2px ${i%2===0?'rgba(26,143,255,0.7)':'rgba(234,255,0,0.7)'}`,
                left: c[0] - 2.5,
                top:  c[1] - 2.5,
                transform: `translateZ(${c[2]}px)`,
              }}/>
            ))}
          </div>

        </div>
      </div>

      {/* Tap hint */}
      <p style={{
        position:'absolute', bottom:40,
        fontSize:11, letterSpacing:'5px', textTransform:'uppercase',
        color:'rgba(240,244,248,0.7)',
        opacity: stable ? 1 : 0,
        transition:'opacity 1.2s ease',
        animation: stable ? 'tapPulse 2s ease-in-out infinite' : 'none',
        margin:0,
        userSelect:'none',
        pointerEvents:'none',
      }}>— Tap anywhere to enter —</p>

      <style>{`
        @keyframes cubeSpinIn {
          0%   { transform: scale(0.05) rotateX(300deg) rotateY(300deg) rotateZ(20deg); opacity:0; }
          3%   { opacity: 1; }
          80%  { transform: scale(1.05) rotateX(1082deg) rotateY(1447deg) rotateZ(0deg); }
          100% { transform: scale(1)    rotateX(1080deg) rotateY(1455deg) rotateZ(0deg); }
        }
        @keyframes cubeSpin {
          from { transform: scale(1) rotateX(1080deg) rotateY(1455deg); }
          to   { transform: scale(1) rotateX(1080deg) rotateY(1815deg); }
        }
        @keyframes tapPulse {
          0%, 100% { opacity: 0.5; }
          50%      { opacity: 1; }
        }
      `}</style>
    </div>
  )
}

// ── Outer cube face definitions ──────────────────────────────────
const h = S / 2
const OUTER_FACES = [
  { type:'front',  w:S, h:S, tf:`translateZ(${h}px)`,               bg:'rgba(26,143,255,0.025)',  border:'rgba(26,143,255,0.4)',  shadow:'inset 0 0 60px rgba(26,143,255,0.05)', lineColor:'#1a8fff' },
  { type:'back',   w:S, h:S, tf:`rotateY(180deg) translateZ(${h}px)`,bg:'rgba(234,255,0,0.015)',   border:'rgba(234,255,0,0.25)',  shadow:null,                                   lineColor:'#eaff00' },
  { type:'right',  w:S, h:S, tf:`rotateY(90deg) translateZ(${h}px)`, bg:'rgba(234,255,0,0.02)',    border:'rgba(234,255,0,0.3)',   shadow:null,                                   lineColor:'#eaff00' },
  { type:'left',   w:S, h:S, tf:`rotateY(-90deg) translateZ(${h}px)`,bg:'rgba(26,143,255,0.015)',  border:'rgba(26,143,255,0.25)', shadow:null,                                   lineColor:'#1a8fff' },
  { type:'top',    w:S, h:S, tf:`rotateX(90deg) translateZ(${h}px)`, bg:'rgba(100,200,255,0.015)', border:'rgba(100,200,255,0.22)',shadow:null,                                   lineColor:'#64c8ff' },
  { type:'bottom', w:S, h:S, tf:`rotateX(-90deg) translateZ(${h}px)`,bg:'rgba(100,200,255,0.01)',  border:'rgba(100,200,255,0.18)',shadow:null,                                   lineColor:'#64c8ff' },
]

// Outer cube 8 corners [left, top, translateZ]
const OUTER_CORNERS = [
  [0, 0, h],   [S, 0, h],   [0, S, h],   [S, S, h],   // front face corners
  [0, 0, -h],  [S, 0, -h],  [0, S, -h],  [S, S, -h],  // back face corners
]

// Edge midpoints for the 12 edges
const EDGE_MIDS = [
  // front face edges
  [S/2, 0,   h], [S,   S/2, h], [S/2, S,   h], [0,   S/2, h],
  // back face edges
  [S/2, 0,  -h], [S,   S/2,-h], [S/2, S,  -h], [0,   S/2,-h],
  // connecting edges (top-bottom midpoints)
  [0, 0, 0], [S, 0, 0], [0, S, 0], [S, S, 0],
]

// ── Inner logo prism face definitions ────────────────────────────
const iw2 = IW/2, ih2 = IH/2, id2 = ID/2
const INNER_FACES = [
  { type:'front',  w:IW, h:IH, tf:`translateZ(${id2}px)`,                bg:'rgba(26,143,255,0.06)', border:'rgba(26,143,255,0.5)',  shadow:'inset 0 0 40px rgba(26,143,255,0.08)' },
  { type:'back',   w:IW, h:IH, tf:`rotateY(180deg) translateZ(${id2}px)`,bg:'rgba(234,255,0,0.03)',  border:'rgba(234,255,0,0.35)',  shadow:null },
  { type:'right',  w:ID, h:IH, tf:`rotateY(90deg) translateZ(${iw2}px)`, bg:'rgba(234,255,0,0.03)',  border:'rgba(234,255,0,0.3)',   shadow:null },
  { type:'left',   w:ID, h:IH, tf:`rotateY(-90deg) translateZ(${iw2}px)`,bg:'rgba(26,143,255,0.03)', border:'rgba(26,143,255,0.3)',  shadow:null },
  { type:'top',    w:IW, h:ID, tf:`rotateX(90deg) translateZ(${ih2}px)`, bg:'rgba(100,200,255,0.02)',border:'rgba(100,200,255,0.25)',shadow:null },
  { type:'bottom', w:IW, h:ID, tf:`rotateX(-90deg) translateZ(${ih2}px)`,bg:'rgba(100,200,255,0.02)',border:'rgba(100,200,255,0.2)', shadow:null },
]

// Inner prism 8 corners
const INNER_CORNERS = [
  [0, 0, id2],   [IW, 0, id2],   [0, IH, id2],   [IW, IH, id2],
  [0, 0, -id2],  [IW, 0, -id2],  [0, IH, -id2],  [IW, IH, -id2],
]

// ── Logo SVG ──────────────────────────────────────────────────────
function LogoInCube() {
  return (
    <svg width="230" height="300" viewBox="-10 0 400 440" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cz" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#c8e0ff"/>
          <stop offset="20%"  stopColor="#1a8fff"/>
          <stop offset="55%"  stopColor="#0044bb"/>
          <stop offset="100%" stopColor="#001840"/>
        </linearGradient>
        <linearGradient id="cd" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#fffde0"/>
          <stop offset="28%"  stopColor="#f8ff50"/>
          <stop offset="62%"  stopColor="#eaff00"/>
          <stop offset="100%" stopColor="#c8d800"/>
        </linearGradient>
        <linearGradient id="ct" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#1a8fff"/>
          <stop offset="60%"  stopColor="#44aaff"/>
          <stop offset="100%" stopColor="#eaff00"/>
        </linearGradient>
        <filter id="ls">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000" floodOpacity="0.9"/>
        </filter>
        <filter id="tg">
          <feGaussianBlur stdDeviation="3" result="b"/>
          <feColorMatrix in="b" type="matrix" values="0 0 0 0 0.1  0 0 0 0 0.3  0 0 0 0 1  0 0 0 0.5 0" result="g"/>
          <feMerge><feMergeNode in="g"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      {/* Z — thick blocky bars + parallelogram diagonal (matches original chunky logo) */}
      <rect x="8" y="8" width="163" height="188" rx="3" fill="rgba(26,143,255,0.08)" stroke="rgba(26,143,255,0.35)" strokeWidth="1"/>
      <polygon points="18,12 175,12 175,72 88,140 175,140 175,200 18,200 18,140 105,72 18,72" fill="rgba(0,20,60,0.5)"/>
      <polygon points="14,8 171,8 171,68 84,136 171,136 171,196 14,196 14,136 101,68 14,68" fill="url(#cz)" filter="url(#ls)"/>
      {/* D — shifted right to clear Z shadow bleed; moderately rounded bowl */}
      <rect x="191" y="8" width="163" height="188" rx="3" fill="rgba(234,255,0,0.06)" stroke="rgba(234,255,0,0.3)" strokeWidth="1"/>
      <path d="M 197,12 L 239,12 A 115 94 0 0 1 239,200 L 197,200 Z M 239,52 A 73 54 0 0 1 239,160 Z" fill="rgba(0,20,10,0.5)" fillRule="evenodd"/>
      <path d="M 193,8 L 235,8 A 115 94 0 0 1 235,196 L 193,196 Z M 235,48 A 73 54 0 0 1 235,156 Z" fill="url(#cd)" fillRule="evenodd" filter="url(#ls)"/>
      <rect x="8" y="208" width="344" height="1" fill="rgba(255,255,255,0.08)"/>
      <text x="180" y="278" textAnchor="middle" fontFamily="Arial Black,Impact,sans-serif" fontSize="72" fontWeight="900" letterSpacing="8" fill="url(#ct)" filter="url(#tg)">ZERO</text>
      <text x="180" y="348" textAnchor="middle" fontFamily="Arial Black,Impact,sans-serif" fontSize="68" fontWeight="900" letterSpacing="4" fill="url(#ct)" filter="url(#tg)">DEFECTS</text>
      <rect x="60" y="365" width="240" height="1" fill="rgba(255,255,255,0.1)"/>
      <text x="180" y="390" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="13" fontWeight="500" letterSpacing="5" fill="rgba(240,244,248,0.45)">PROTECTIVE SURFACE COATINGS</text>
      <rect x="130" y="408" width="100" height="2" rx="1" fill="url(#ct)" opacity="0.6"/>
    </svg>
  )
}
