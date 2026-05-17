'use client'

import { useState } from 'react'

const SERVICES = [
  'Ceramic Coating',
  'Paint Protection Film (PPF)',
  'Paint Correction',
  'Ceramic Coating + PPF Combo',
  'Not sure — need a consultation',
]

const field = {
  fontFamily: 'var(--font-barlow-body), sans-serif',
  fontSize: '15px',
  fontWeight: 300,
  color: '#f0f4f8',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '4px',
  padding: '14px 18px',
  width: '100%',
  outline: 'none',
  transition: 'border-color 0.2s',
  boxSizing: 'border-box',
}

const label = {
  fontFamily: 'var(--font-barlow-cond), sans-serif',
  fontSize: '11px',
  fontWeight: 600,
  letterSpacing: '3px',
  textTransform: 'uppercase',
  color: 'rgba(240,244,248,0.5)',
  display: 'block',
  marginBottom: '8px',
}

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', vehicle: '', service: '', message: '',
  })
  const [status, setStatus] = useState('idle')
  const [focused, setFocused] = useState(null)

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const borderFor = (key) => ({
    borderColor: focused === key ? 'rgba(26,143,255,0.5)' : 'rgba(255,255,255,0.1)',
    boxShadow: focused === key ? '0 0 0 3px rgba(26,143,255,0.08)' : 'none',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', phone: '', email: '', vehicle: '', service: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div style={{ textAlign: 'center', padding: '64px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'linear-gradient(135deg, #1a8fff, #00e5a0)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>
          ✓
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-bebas-neue), sans-serif', fontSize: '32px', letterSpacing: '2px', color: '#f0f4f8', marginBottom: '8px' }}>
            Request Received
          </div>
          <p style={{ color: 'rgba(240,244,248,0.5)', fontSize: '15px', lineHeight: 1.7 }}>
            We&apos;ll be in touch within 24 hours. For urgent inquiries call{' '}
            <a href="tel:4044063355" style={{ color: '#1a8fff' }}>404-406-3355</a>.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="zd-form-row">
        <div>
          <label style={label}>Full Name</label>
          <input type="text" required placeholder="Chris Dawson" value={form.name} onChange={set('name')} onFocus={() => setFocused('name')} onBlur={() => setFocused(null)} style={{ ...field, ...borderFor('name') }} />
        </div>
        <div>
          <label style={label}>Phone</label>
          <input type="tel" required placeholder="(404) 000-0000" value={form.phone} onChange={set('phone')} onFocus={() => setFocused('phone')} onBlur={() => setFocused(null)} style={{ ...field, ...borderFor('phone') }} />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="zd-form-row">
        <div>
          <label style={label}>Email</label>
          <input type="email" required placeholder="you@example.com" value={form.email} onChange={set('email')} onFocus={() => setFocused('email')} onBlur={() => setFocused(null)} style={{ ...field, ...borderFor('email') }} />
        </div>
        <div>
          <label style={label}>Vehicle</label>
          <input type="text" placeholder="2023 Porsche Cayenne GTS" value={form.vehicle} onChange={set('vehicle')} onFocus={() => setFocused('vehicle')} onBlur={() => setFocused(null)} style={{ ...field, ...borderFor('vehicle') }} />
        </div>
      </div>

      <div>
        <label style={label}>Service Interested In</label>
        <select
          value={form.service}
          onChange={set('service')}
          onFocus={() => setFocused('service')}
          onBlur={() => setFocused(null)}
          style={{
            ...field,
            ...borderFor('service'),
            appearance: 'none',
            cursor: 'pointer',
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%231a8fff' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 16px center',
            paddingRight: '40px',
          }}
        >
          <option value="" style={{ background: '#0e1216' }}>Select a service...</option>
          {SERVICES.map((s) => (
            <option key={s} value={s} style={{ background: '#0e1216' }}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label style={label}>Message (optional)</label>
        <textarea
          rows={4}
          placeholder="Tell us about your vehicle, goals, or any questions..."
          value={form.message}
          onChange={set('message')}
          onFocus={() => setFocused('message')}
          onBlur={() => setFocused(null)}
          style={{ ...field, ...borderFor('message'), resize: 'vertical', lineHeight: 1.7 }}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
        <button
          type="submit"
          disabled={status === 'sending'}
          style={{
            fontFamily: 'var(--font-barlow-cond), sans-serif',
            fontSize: '14px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase',
            color: '#080a0c',
            background: status === 'sending' ? 'rgba(26,143,255,0.5)' : 'linear-gradient(90deg, #1a8fff, #00e5a0)',
            padding: '16px 40px', borderRadius: '4px', border: 'none',
            cursor: status === 'sending' ? 'not-allowed' : 'pointer',
            transition: 'opacity 0.2s',
          }}
        >
          {status === 'sending' ? 'Sending...' : 'Send Request'}
        </button>
        <span style={{ fontSize: '13px', color: 'rgba(240,244,248,0.3)', lineHeight: 1.6 }}>
          Or call us —{' '}
          <a href="tel:4044063355" style={{ color: '#1a8fff', textDecoration: 'none' }}>404-406-3355</a>
        </span>
      </div>

      {status === 'error' && (
        <p style={{ color: '#ff6b6b', fontSize: '14px', margin: 0 }}>
          Something went wrong. Please call us at 404-406-3355 or try again.
        </p>
      )}
    </form>
  )
}
