'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
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
        padding: '0 48px',
        background: scrolled
          ? 'rgba(8,10,12,0.95)'
          : 'rgba(8,10,12,0.7)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        transition: 'background 0.3s',
      }}
    >
      {/* Logo */}
      <a
        href="#"
        style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}
        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
      >
        <div
          style={{
            width: '40px',
            height: '40px',
            background: 'linear-gradient(135deg, #1a8fff, #00e5a0)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-bebas-neue), sans-serif',
            fontSize: '18px',
            color: '#080a0c',
            fontWeight: 400,
            letterSpacing: '1px',
          }}
        >
          ZD
        </div>
        <div>
          <div
            style={{
              fontFamily: 'var(--font-barlow-cond), sans-serif',
              fontWeight: 700,
              fontSize: '15px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#f0f4f8',
            }}
          >
            Zero Defects
          </div>
          <div
            style={{
              fontSize: '10px',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: 'rgba(240,244,248,0.45)',
            }}
          >
            Braselton, Georgia
          </div>
        </div>
      </a>

      {/* Desktop links */}
      <ul
        style={{
          gap: '8px',
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}
        className="hidden md:flex"
      >
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              style={{
                fontFamily: 'var(--font-barlow-cond), sans-serif',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: 'rgba(240,244,248,0.6)',
                textDecoration: 'none',
                padding: '8px 12px',
                borderRadius: '4px',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#f0f4f8')}
              onMouseLeave={(e) => (e.target.style.color = 'rgba(240,244,248,0.6)')}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Book Now CTA */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <a
          href="tel:4044063355"
          style={{
            fontFamily: 'var(--font-barlow-cond), sans-serif',
            fontSize: '13px',
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#080a0c',
            background: 'linear-gradient(90deg, #1a8fff, #00e5a0)',
            padding: '10px 24px',
            borderRadius: '4px',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          Book Now
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
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
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '72px',
            left: 0,
            right: 0,
            background: 'rgba(14,18,22,0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
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
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-barlow-cond), sans-serif',
                fontSize: '15px',
                fontWeight: 600,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: 'rgba(240,244,248,0.7)',
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
              background: 'linear-gradient(90deg, #1a8fff, #00e5a0)',
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
