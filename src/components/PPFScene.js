'use client'

import { useEffect, useRef, useCallback } from 'react'

const LAYERS = [
  { key:'top',   name:'Self-Healing Topcoat', mat:'Elastomeric clearcoat', th:'~0.5 mil',
    t:0.18, color:0x9fe9f2, opacity:0.30, clear:true,  desc:'Hydrophobic, scratch self-heals with heat' },
  { key:'tpu',   name:'TPU Film Core',        mat:'Thermoplastic polyurethane', th:'~6 mil',
    t:0.62, color:0x6fb6ff, opacity:0.26, clear:true,  desc:'Impact + stone-chip absorption' },
  { key:'adh',   name:'Acrylic Adhesive',     mat:'Pressure-sensitive bond', th:'~1.2 mil',
    t:0.24, color:0xf7b955, opacity:0.55, clear:false, desc:'Optically clear, repositionable' },
  { key:'liner', name:'Release Liner',        mat:'PET carrier (peeled off)', th:'disposable',
    t:0.16, color:0x46566e, opacity:0.85, clear:false, desc:'Removed during installation' },
  { key:'gap',   spacer:true },
  { key:'clear', name:'Factory Clearcoat',    mat:'OEM gloss layer', th:'~1.8 mil',
    t:0.30, color:0xd7e3f0, opacity:0.40, clear:true,  desc:'The paint surface being protected' },
  { key:'base',  name:'Base / Color Coat',    mat:'Pigmented paint', th:'~0.8 mil',
    t:0.26, color:0xc02b3a, opacity:0.95, clear:false, desc:'Vehicle body color' },
  { key:'prime', name:'Primer',               mat:'Adhesion + corrosion layer', th:'~1 mil',
    t:0.24, color:0x6b7280, opacity:0.95, clear:false, desc:'Bonds paint to metal' },
  { key:'sub',   name:'Substrate Panel',      mat:'Steel / aluminium', th:'body panel',
    t:0.5,  color:0x2c3645, opacity:1.0,  clear:false, desc:'The vehicle panel itself' },
]

/**
 * PPF layer cross-section 3D scene.
 *   mode="full"      — interactive with legend, controls, header (standalone page)
 *   mode="ambient"   — auto-rotating backdrop, no UI (services tile background)
 */
export default function PPFScene({ mode = 'full' }) {
  const mountRef = useRef(null)
  const stateRef = useRef(null)

  const init = useCallback(() => {
    if (typeof window === 'undefined') return
    const THREE = require('three')
    const container = mountRef.current
    if (!container) return

    const W = 6, D = 4
    let az = -0.6, pol = 1.12, dist = mode === 'ambient' ? 16 : 13
    let autoRot = true, spin = mode === 'ambient' ? 0.12 : 0.22
    let explode = mode === 'ambient' ? 0.45 : 0.55
    let isolated = null, drag = false, px = 0, py = 0

    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x0a0e16, 0.028)

    const camera = new THREE.PerspectiveCamera(42, container.clientWidth / container.clientHeight, 0.1, 100)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2))
    renderer.setSize(container.clientWidth, container.clientHeight)
    container.appendChild(renderer.domElement)

    scene.add(new THREE.AmbientLight(0x9fb4d8, 0.55))
    const key = new THREE.DirectionalLight(0xffffff, 1.15); key.position.set(6, 10, 8); scene.add(key)
    const rim = new THREE.DirectionalLight(0x39d6e8, 0.9); rim.position.set(-8, 3, -6); scene.add(rim)
    const fill = new THREE.PointLight(0xf7b955, 0.5, 40); fill.position.set(5, -6, 6); scene.add(fill)

    const group = new THREE.Group(); scene.add(group)

    const grid = new THREE.GridHelper(40, 40, 0x39d6e8, 0x18435a)
    grid.material.transparent = true; grid.material.opacity = 0.10; grid.position.y = -6
    scene.add(grid)

    const solid = LAYERS.filter(l => !l.spacer)
    let totalT = solid.reduce((s, l) => s + l.t, 0) + 0.9
    let cursor = totalT / 2
    LAYERS.forEach(l => {
      if (l.spacer) { l.baseY = cursor - 0.45; cursor -= 0.9; return }
      l.baseY = cursor - l.t / 2; cursor -= l.t
    })
    const mid = (solid.length - 1) / 2
    let si = 0
    LAYERS.forEach(l => { if (!l.spacer) { l.spreadDir = si - mid; si++ } })

    const meshes = []
    LAYERS.forEach((l, i) => {
      if (l.spacer) return
      const geo = new THREE.BoxGeometry(W, l.t, D)
      const mat = new THREE.MeshPhysicalMaterial({
        color: l.color, metalness: l.clear ? 0.0 : 0.25, roughness: l.clear ? 0.08 : 0.55,
        transparent: l.opacity < 1, opacity: l.opacity, clearcoat: l.clear ? 1 : 0.2,
        clearcoatRoughness: 0.1, transmission: l.clear ? 0.35 : 0, ior: 1.45,
        side: THREE.DoubleSide,
      })
      const mesh = new THREE.Mesh(geo, mat)
      mesh.userData = { layer: l, idx: i }
      const edges = new THREE.LineSegments(
        new THREE.EdgesGeometry(geo),
        new THREE.LineBasicMaterial({ color: 0xbfe9f2, transparent: true, opacity: 0.28 })
      )
      mesh.add(edges)
      group.add(mesh)
      meshes.push(mesh)
    })

    let raf
    function animate() {
      raf = requestAnimationFrame(animate)
      if (autoRot) az += spin * 0.006
      meshes.forEach(m => {
        const l = m.userData.layer
        m.position.y = l.baseY + l.spreadDir * explode * 1.7
      })
      camera.position.set(
        dist * Math.sin(pol) * Math.sin(az),
        dist * Math.cos(pol),
        dist * Math.sin(pol) * Math.cos(az),
      )
      camera.lookAt(0, 0, 0)
      renderer.render(scene, camera)
    }
    animate()

    if (mode === 'full') {
      const c = renderer.domElement
      c.addEventListener('pointerdown', e => { drag = true; px = e.clientX; py = e.clientY; autoRot = false })
      window.addEventListener('pointerup', () => { drag = false })
      window.addEventListener('pointermove', e => {
        if (!drag) return
        az -= (e.clientX - px) * 0.008
        pol = Math.max(0.25, Math.min(2.5, pol - (e.clientY - py) * 0.006))
        px = e.clientX; py = e.clientY
      })
      c.addEventListener('wheel', e => { e.preventDefault(); dist = Math.max(7, Math.min(24, dist + e.deltaY * 0.012)) }, { passive: false })
    }

    const onResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
    }
    window.addEventListener('resize', onResize)

    stateRef.current = {
      renderer, raf, onResize,
      setExplode: v => { explode = v },
      setSpin: v => { spin = v },
      setAutoRot: v => { autoRot = v },
      getAutoRot: () => autoRot,
      reset: () => { az = -0.6; pol = 1.12; dist = 13; autoRot = true; explode = 0.55; spin = 0.22 },
    }
  }, [mode])

  useEffect(() => {
    init()
    return () => {
      if (stateRef.current) {
        cancelAnimationFrame(stateRef.current.raf)
        window.removeEventListener('resize', stateRef.current.onResize)
        stateRef.current.renderer.dispose()
      }
    }
  }, [init])

  if (mode === 'ambient') {
    return <div ref={mountRef} style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.4, pointerEvents: 'none' }} />
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div ref={mountRef} style={{ position: 'absolute', inset: 0 }} />

      {/* Header overlay */}
      <div style={{ position: 'absolute', top: 22, left: 30, zIndex: 20, pointerEvents: 'none' }}>
        <div style={{ fontSize: 11, letterSpacing: '0.42em', textTransform: 'uppercase', color: '#39d6e8', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ width: 26, height: 1, background: '#39d6e8', display: 'inline-block' }} />
          Cross-Section · Exploded View
        </div>
        <h1 style={{ fontFamily: 'var(--font-bebas-neue), sans-serif', fontWeight: 800, fontSize: 'clamp(26px, 3.4vw, 44px)', lineHeight: 0.96, letterSpacing: '-0.02em', color: '#e8edf5' }}>
          Paint Protection<br />Film <span style={{ color: '#f7b955' }}>Stack</span>
        </h1>
        <p style={{ color: '#7d8aa0', fontSize: 12.5, marginTop: 10, maxWidth: 340, lineHeight: 1.5, fontFamily: 'var(--font-barlow-body), monospace' }}>
          A multilayer <b style={{ color: '#e8edf5' }}>PPF</b> construction — self-healing topcoat over a urethane core, bonded to the painted substrate it shields.
        </p>
      </div>

      {/* Spec overlay — top right */}
      <div style={{ position: 'absolute', top: 22, right: 30, zIndex: 20, textAlign: 'right', fontSize: 11, color: '#7d8aa0', lineHeight: 1.9, borderRight: '2px solid #1e2a3d', paddingRight: 14, fontFamily: 'var(--font-barlow-body), monospace' }}>
        <div>TOTAL FILM <b style={{ color: '#e8edf5', fontWeight: 600 }}>≈ 8 mil</b></div>
        <div>CORE <b style={{ color: '#e8edf5', fontWeight: 600 }}>TPU urethane</b></div>
        <div>WARRANTY <b style={{ color: '#e8edf5', fontWeight: 600 }}>10 yr</b></div>
        <div>FINISH <b style={{ color: '#e8edf5', fontWeight: 600 }}>gloss / matte</b></div>
      </div>

      {/* Controls — bottom left */}
      <div style={{ position: 'absolute', bottom: 26, left: 30, zIndex: 20, width: 320 }}>
        <div style={{ background: 'rgba(12,18,28,0.72)', backdropFilter: 'blur(10px)', border: '1px solid #1e2a3d', borderRadius: 12, padding: '16px 18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14, marginBottom: 13 }}>
            <span style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7d8aa0' }}>Explode</span>
            <input type="range" min="0" max="100" defaultValue="55" style={{ width: 140, accentColor: '#39d6e8' }}
              onChange={e => stateRef.current?.setExplode(e.target.value / 100)} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14 }}>
            <span style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7d8aa0' }}>Spin speed</span>
            <input type="range" min="0" max="100" defaultValue="22" style={{ width: 140, accentColor: '#39d6e8' }}
              onChange={e => stateRef.current?.setSpin(e.target.value / 100)} />
          </div>
        </div>
        <div style={{ fontSize: 10.5, color: '#7d8aa0', letterSpacing: '0.05em', marginTop: 10, display: 'flex', alignItems: 'center', gap: 7 }}>
          <span style={{ color: '#39d6e8' }}>◈</span> Drag to orbit · scroll to zoom
        </div>
      </div>

      {/* Back link */}
      <a href="/paint-protection-film" style={{ position: 'absolute', bottom: 26, right: 30, zIndex: 20, fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: '#eaff00', textDecoration: 'none', fontWeight: 700 }}>
        ← Back to PPF
      </a>
    </div>
  )
}
