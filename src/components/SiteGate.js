'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function SiteGate() {
  const [scan, setScan]       = useState(false)
  const [badge, setBadge]     = useState(false)
  const [words, setWords]     = useState(false)
  const [prompt, setPrompt]   = useState(false)
  const [closing, setClosing] = useState(false)
  const [gone, setGone]       = useState(false)

  const [cursorPos, setCursorPos]     = useState({ x: -200, y: -200 })
  const [cursorHover, setCursorHover] = useState(false)

  useEffect(() => {
    const t0 = setTimeout(() => setScan(true),   80)
    const t1 = setTimeout(() => setBadge(true),  420)
    const t2 = setTimeout(() => setWords(true),  580)
    const t3 = setTimeout(() => setPrompt(true), 1300)
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
      {/* Custom cursor */}
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

      {/* Gate */}
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
        {/* Subtle radial glow */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 55% 45% at 50% 50%, rgba(26,143,255,0.055) 0%, transparent 70%)',
        }} />

        {/* Scanner line — sweeps top→bottom */}
        {scan && (
          <div style={{
            position: 'absolute', left: 0, right: 0,
            height: '1.5px',
            background: 'linear-gradient(90deg, transparent 0%, rgba(26,143,255,0.9) 20%, rgba(0,229,160,0.9) 80%, transparent 100%)',
            boxShadow: '0 0 12px rgba(26,143,255,0.6), 0 0 40px rgba(26,143,255,0.2)',
            animation: 'scanDown 0.55s cubic-bezier(0.4, 0, 0.2, 1) forwards',
            pointerEvents: 'none',
            zIndex: 2,
          }} />
        )}

        {/* Scanned area fill */}
        {scan && (
          <div style={{
            position: 'absolute', left: 0, right: 0, bottom: 0,
            background: 'rgba(26,143,255,0.015)',
            animation: 'scanFill 0.55s cubic-bezier(0.4, 0, 0.2, 1) forwards',
            pointerEvents: 'none',
            zIndex: 1,
          }} />
        )}

        {/* Logo block — perfectly centered */}
        <div style={{
          position: 'relative', zIndex: 3,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center',
          gap: '0',
        }}>

          {/* Logo — swirls in from a tiny point */}
          <div style={{
            marginBottom: '28px',
            animation: badge ? 'logoReveal 2.5s cubic-bezier(0.16, 1, 0.3, 1) forwards' : 'none',
            opacity: badge ? undefined : 0,
            maskImage: 'radial-gradient(ellipse 82% 78% at 50% 50%, black 45%, rgba(0,0,0,0.6) 65%, transparent 85%)',
            WebkitMaskImage: 'radial-gradient(ellipse 82% 78% at 50% 50%, black 45%, rgba(0,0,0,0.6) 65%, transparent 85%)',
          }}>
            <Image
              src="/images/logos/zd-logo.png"
              alt="Zero Defects"
              width={240}
              height={240}
              priority
              style={{ display: 'block' }}
            />
          </div>

          {/* Wordmark */}
          <div style={{ overflow: 'hidden', marginBottom: '5px' }}>
            <div style={{
              transform: words ? 'translateY(0)' : 'translateY(105%)',
              transition: 'transform 0.75s cubic-bezier(0.23, 1, 0.32, 1)',
              fontFamily: 'var(--font-barlow-cond), sans-serif',
              fontWeight: 700,
              fontSize: '14px',
              letterSpacing: words ? '7px' : '2px',
              textTransform: 'uppercase',
              color: '#f0f4f8',
              whiteSpace: 'nowrap',
              transitionProperty: 'transform, letter-spacing',
              transitionDuration: '0.75s, 1.1s',
              transitionTimingFunction: 'cubic-bezier(0.23,1,0.32,1), ease',
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
