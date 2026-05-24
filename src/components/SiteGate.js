'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function SiteGate() {
  const [logo, setLogo]       = useState(false)
  const [frame, setFrame]     = useState(false)
  const [words, setWords]     = useState(false)
  const [prompt, setPrompt]   = useState(false)
  const [closing, setClosing] = useState(false)
  const [gone, setGone]       = useState(false)

  const [cursorPos, setCursorPos]     = useState({ x: -200, y: -200 })
  const [cursorHover, setCursorHover] = useState(false)

  useEffect(() => {
    // logo spins in (1.8s) → frame locks in → wordmark → prompt
    const t0 = setTimeout(() => setLogo(true),   300)
    const t1 = setTimeout(() => setFrame(true),  1900)
    const t2 = setTimeout(() => setWords(true),  2600)
    const t3 = setTimeout(() => setPrompt(true), 3400)
    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  useEffect(() => {
    if (gone) return
    const move = (e) => setCursorPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [gone])

  const enter = () => {
    if (closing || gone) return
    setClosing(true)
    setTimeout(() => setGone(true), 900)
  }

  if (gone) return null

  return (
    <>
      {/* Custom cursor ring */}
      <div style={{
        position: 'fixed', top: 0, left: 0,
        width: cursorHover ? '52px' : '34px',
        height: cursorHover ? '52px' : '34px',
        border: `1.5px solid ${cursorHover ? '#1a8fff' : 'rgba(240,244,248,0.65)'}`,
        borderRadius: '50%',
        pointerEvents: 'none', zIndex: 10001,
        transform: `translate(${cursorPos.x - (cursorHover ? 26 : 17)}px, ${cursorPos.y - (cursorHover ? 26 : 17)}px)`,
        transition: 'width 0.22s ease, height 0.22s ease, border-color 0.22s ease, transform 0.07s linear',
        mixBlendMode: 'exclusion',
      }} />
      <div style={{
        position: 'fixed', top: 0, left: 0,
        width: '4px', height: '4px',
        background: '#f0f4f8', borderRadius: '50%',
        pointerEvents: 'none', zIndex: 10001,
        transform: `translate(${cursorPos.x - 2}px, ${cursorPos.y - 2}px)`,
        transition: 'transform 0.02s linear',
      }} />

      {/* Gate overlay */}
      <div
        onClick={enter}
        onMouseEnter={() => setCursorHover(true)}
        onMouseLeave={() => setCursorHover(false)}
        style={{
          position: 'fixed', inset: 0, zIndex: 9000,
          cursor: 'none',
          background: '#000000',
          clipPath: closing ? 'circle(0% at 50% 50%)' : undefined,
          transition: closing ? 'clip-path 0.85s cubic-bezier(0.77, 0, 0.175, 1)' : undefined,
          overflow: 'hidden',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        {/* Subtle center glow */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 55% 45% at 50% 50%, rgba(26,143,255,0.06) 0%, transparent 70%)',
        }} />

        {/* Centered content block */}
        <div style={{
          position: 'relative', zIndex: 3,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center',
        }}>

          {/* Logo + frame wrapper */}
          <div style={{
            position: 'relative',
            marginBottom: '32px',
          }}>

            {/* Logo — spins in from a tiny invisible point */}
            <div style={{
              animation: logo ? 'logoReveal 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards' : 'none',
              opacity: logo ? undefined : 0,
            }}>
              <Image
                src="/images/logos/zd-logo.png"
                alt="Zero Defects"
                width={480}
                height={270}
                priority
                style={{ display: 'block', width: '480px', height: 'auto' }}
              />
            </div>
          </div>

          {/* Wordmark */}
          <div style={{ overflow: 'hidden', marginBottom: '5px' }}>
            <div style={{
              transform: words ? 'translateY(0)' : 'translateY(105%)',
              transitionProperty: 'transform, letter-spacing',
              transitionDuration: '0.75s, 1.1s',
              transitionTimingFunction: 'cubic-bezier(0.23,1,0.32,1), ease',
              fontFamily: 'var(--font-barlow-cond), sans-serif',
              fontWeight: 700,
              fontSize: '14px',
              letterSpacing: words ? '7px' : '2px',
              textTransform: 'uppercase',
              color: '#f0f4f8',
              whiteSpace: 'nowrap',
            }}>
              Zero Defects
            </div>
          </div>

          {/* City */}
          <div style={{ overflow: 'hidden', marginBottom: '30px' }}>
            <div style={{
              transform: words ? 'translateY(0)' : 'translateY(105%)',
              transition: 'transform 0.75s cubic-bezier(0.23, 1, 0.32, 1) 0.08s',
              fontSize: '10px', letterSpacing: '3px',
              textTransform: 'uppercase',
              color: 'rgba(240,244,248,0.28)',
              whiteSpace: 'nowrap',
            }}>
              Braselton, Georgia
            </div>
          </div>

          {/* Accent line */}
          <div style={{
            height: '1px',
            width: words ? '56px' : '0px',
            background: 'linear-gradient(90deg, transparent, rgba(26,143,255,0.55), rgba(0,229,160,0.4), transparent)',
            transition: 'width 0.9s ease 0.2s',
            marginBottom: '26px',
          }} />

          {/* Enter prompt */}
          <div style={{ overflow: 'hidden' }}>
            <div style={{
              transform: prompt ? 'translateY(0)' : 'translateY(100%)',
              opacity: prompt ? 1 : 0,
              transition: 'transform 0.65s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.65s ease',
              fontFamily: 'var(--font-barlow-cond), sans-serif',
              fontSize: '10px', letterSpacing: '5px',
              textTransform: 'uppercase',
              color: 'rgba(240,244,248,0.35)',
              animation: prompt ? 'gatePulse 2.6s ease-in-out infinite' : 'none',
              whiteSpace: 'nowrap',
            }}>
              Click to enter
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
