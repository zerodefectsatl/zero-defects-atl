'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Ceramic Coating', href: '/#ceramic-coating' },
    { label: 'PPF', href: '/#ppf' },
    { label: 'Paint Correction', href: '/#paint-correction' },
  ]

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 48px 0 clamp(12px, 2vw, 24px)',
        background: scrolled ? 'rgba(8,10,12,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : 'none',
        transition: 'background 0.3s',
      }}
    >
      {/* Logo */}
      <a
        href="/"
        style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}
      >
        <Image
          src="/images/logos/zd-logo-clean.png"
          alt="Zero Defects ATL"
          width={48}
          height={47}
          style={{ display: 'block', objectFit: 'contain', height: '48px', width: '48px', marginTop: '0', viewTransitionName: 'zd-logo' }}
          priority
          fetchPriority="high"
          loading="eager"
        />
      </a>

      {/* Desktop nav — three minimal lines, label on hover */}
      <div className="zd-nav-desktop">
        {links.map((l) => (
          <a key={l.label} href={l.href} className="zd-nav-line" aria-label={l.label}>
            <span className="zd-nav-line__label">{l.label}</span>
          </a>
        ))}
      </div>

      {/* Hamburger */}
      <button
          className="zd-nav-burger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            color: '#f0f4f8',
          }}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>

      {/* Dropdown */}
      {menuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '72px',
            left: 0,
            right: 0,
            background: '#0e1216',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
            boxShadow: '0 24px 48px rgba(0,0,0,0.5)',
            padding: '24px 24px 32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="zd-navlink"
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-barlow-cond), sans-serif',
                fontSize: '15px',
                fontWeight: 600,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                textDecoration: 'none',
                padding: '14px 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:4044063355"
            style={{
              marginTop: '20px',
              fontFamily: 'var(--font-barlow-cond), sans-serif',
              fontSize: '14px',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#080a0c',
              background: '#eaff00',
              padding: '14px 24px',
              borderRadius: '4px',
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            Call 404-406-3355
          </a>
        </div>
      )}
    </nav>
  )
}
