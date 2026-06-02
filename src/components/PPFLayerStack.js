'use client'

import { useEffect, useRef } from 'react'

/**
 * Interactive exploded cross-section of a paint-protection-film stack, rendered
 * with Three.js. Standalone full-screen experience for /ppf-layers.
 *   • Explode slider  → spreads the layers apart.
 *   • Spin slider     → auto-rotation speed.
 *   • Drag            → orbit.   Scroll → zoom.
 *
 * Each layer is color-coded to match the legend so the construction reads at a
 * glance. The animation loop, all DOM/window listeners, and the WebGL context
 * are torn down on unmount (the original sketch leaked all three).
 */

// [key, label, sublabel, color, thickness, transparent?]
const LAYERS = [
  { key: 'topcoat',  label: 'Self-healing topcoat', sub: 'Gloss + chemical resist', color: 0xb6e84a, t: 0.22, transp: true },
  { key: 'core',     label: 'TPU elastomer core',   sub: 'Impact + stone-chip armor', color: 0xf5c93b, t: 0.55, transp: false },
  { key: 'adhesive', label: 'Acrylic adhesive',     sub: 'Optically clear bond',       color: 0xdcc59a, t: 0.18, transp: false },
  { key: 'clear',    label: 'Clear coat',           sub: 'OEM gloss layer',            color: 0x3f8ef0, t: 0.30, transp: true },
  { key: 'base',     label: 'Color base coat',      sub: 'Vehicle body color',         color: 0x2756c4, t: 0.34, transp: false },
  { key: 'panel',    label: 'Steel panel',          sub: 'The body panel itself',      color: 0x586677, t: 0.55, transp: false },
]

const SPECS = [
  { k: 'Total film', v: '≈ 8 mil' },
  { k: 'Core', v: 'TPU urethane' },
  { k: 'Warranty', v: '10 yr' },
  { k: 'Finish', v: 'gloss / matte' },
]

const cssColor = (hex) => '#' + hex.toString(16).padStart(6, '0')

export default function PPFLayerStack() {
  const mountRef = useRef(null)
  const ctrlRef = useRef(null)

  useEffect(() => {
    const THREE = require('three')
    const container = mountRef.current
    if (!container) return

    let raf = 0
    let disposed = false

    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x0b1018, 0.045)

    const w = () => container.clientWidth || window.innerWidth
    const h = () => container.clientHeight || window.innerHeight

    const camera = new THREE.PerspectiveCamera(42, w() / h(), 0.1, 100)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(w(), h())
    container.appendChild(renderer.domElement)

    // Lights — punchy and colored, for an "alive" feel.
    scene.add(new THREE.AmbientLight(0x88a0c0, 0.55))
    const key = new THREE.DirectionalLight(0xffffff, 1.15); key.position.set(5, 7, 6); scene.add(key)
    const limeFill = new THREE.PointLight(0xb6e84a, 0.6, 30); limeFill.position.set(-6, 3, 4); scene.add(limeFill)
    const blueRim = new THREE.PointLight(0x3f8ef0, 0.8, 30); blueRim.position.set(4, -4, -6); scene.add(blueRim)

    const group = new THREE.Group(); scene.add(group)
    const W = 4.6, D = 3.2

    // Stacked (touching) base Y for each layer, centered on the group origin.
    const total = LAYERS.reduce((s, l) => s + l.t, 0)
    let y = total / 2
    const baseY = LAYERS.map((l) => { const b = y - l.t / 2; y -= l.t; return b })

    const geometries = []
    const materials = []
    const meshes = []
    LAYERS.forEach((l, i) => {
      const geo = new THREE.BoxGeometry(W, l.t, D)
      const mat = new THREE.MeshPhysicalMaterial({
        color: l.color,
        metalness: l.key === 'panel' ? 0.8 : 0.15,
        roughness: l.key === 'panel' ? 0.45 : 0.35,
        transparent: l.transp, opacity: l.transp ? 0.45 : 1,
        emissive: l.color, emissiveIntensity: l.transp ? 0.25 : 0.12,
        clearcoat: l.transp ? 1 : 0.4, clearcoatRoughness: 0.2,
      })
      const mesh = new THREE.Mesh(geo, mat)
      mesh.position.y = baseY[i]
      const edgeGeo = new THREE.EdgesGeometry(geo)
      const edgeMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.12 })
      mesh.add(new THREE.LineSegments(edgeGeo, edgeMat))
      group.add(mesh)
      meshes.push(mesh)
      geometries.push(geo, edgeGeo)
      materials.push(mat, edgeMat)
    })

    // Interaction / animation state.
    let explode = 0.55, spinSpeed = 0.35
    let rotY = 0.5, rotX = -0.32
    let dragging = false, px = 0, py = 0
    let camDist = 9
    const spread = 1.7
    const center = (LAYERS.length - 1) / 2

    const animate = () => {
      raf = requestAnimationFrame(animate)
      rotY += spinSpeed * 0.006
      group.rotation.y = rotY
      group.rotation.x = rotX
      const tms = Date.now() * 0.002
      meshes.forEach((m, i) => {
        // (center - i): top layers rise, bottom layers sink — preserves the
        // physical stacking order (topcoat on top) as the stack explodes,
        // matching the legend. The source sketch used (i - center), which
        // inverted the order at full explode.
        const target = baseY[i] + (center - i) * spread * explode
        m.position.y += (target - m.position.y) * 0.12
        m.material.emissiveIntensity = (LAYERS[i].transp ? 0.25 : 0.12) + Math.sin(tms + i) * 0.05
      })
      camera.position.set(0, 1.2, camDist)
      camera.lookAt(0, 0, 0)
      renderer.render(scene, camera)
    }
    animate()

    // --- pointer / wheel handlers (referenced so cleanup can remove them) ---
    const el = renderer.domElement
    const down = (x, yy) => { dragging = true; px = x; py = yy }
    const moveTo = (x, yy) => {
      if (!dragging) return
      rotY += (x - px) * 0.008
      rotX += (yy - py) * 0.008
      rotX = Math.max(-1.3, Math.min(1.3, rotX))
      px = x; py = yy
    }
    const up = () => { dragging = false }

    const onMouseDown = (e) => down(e.clientX, e.clientY)
    const onMouseMove = (e) => moveTo(e.clientX, e.clientY)
    const onTouchStart = (e) => { const t = e.touches[0]; down(t.clientX, t.clientY) }
    const onTouchMove = (e) => { const t = e.touches[0]; moveTo(t.clientX, t.clientY) }
    const onWheel = (e) => { e.preventDefault(); camDist = Math.max(5, Math.min(18, camDist + e.deltaY * 0.01)) }
    const onResize = () => {
      camera.aspect = w() / h()
      camera.updateProjectionMatrix()
      renderer.setSize(w(), h())
    }

    el.style.cursor = 'grab'
    el.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', up)
    el.addEventListener('touchstart', onTouchStart, { passive: true })
    el.addEventListener('touchmove', onTouchMove, { passive: true })
    window.addEventListener('touchend', up)
    el.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('resize', onResize)

    ctrlRef.current = {
      setExplode: (v) => { explode = v },
      setSpin: (v) => { spinSpeed = v },
    }

    return () => {
      disposed = true
      cancelAnimationFrame(raf)
      el.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', up)
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', up)
      el.removeEventListener('wheel', onWheel)
      window.removeEventListener('resize', onResize)
      geometries.forEach((g) => g.dispose())
      materials.forEach((m) => m.dispose())
      renderer.dispose()
      if (el.parentNode === container) container.removeChild(el)
      ctrlRef.current = null
    }
  }, [])

  return (
    <div style={{ position: 'fixed', inset: 0, overflow: 'hidden' }}>
      <div ref={mountRef} style={{ position: 'absolute', inset: 0 }} />

      {/* Header */}
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 10, padding: '22px 26px', pointerEvents: 'none' }}>
        <div style={{ fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#b6e84a', display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ width: 24, height: 1, background: '#b6e84a', display: 'inline-block' }} />
          Cross-section · exploded view
        </div>
        <h1 style={{ fontFamily: 'var(--font-bebas-neue), sans-serif', fontWeight: 800, fontSize: 'clamp(24px, 3.2vw, 40px)', lineHeight: 0.96, letterSpacing: '-0.025em', marginTop: 8, maxWidth: '14ch', color: '#eef3f8' }}>
          Paint Protection Film Stack
        </h1>
      </header>

      {/* Legend */}
      <div className="ppfls-legend" style={{ position: 'fixed', top: 24, right: 26, zIndex: 10, display: 'flex', flexDirection: 'column', gap: 7, pointerEvents: 'none' }}>
        {LAYERS.map((l) => (
          <div key={l.key} style={{ display: 'flex', alignItems: 'center', gap: 9, justifyContent: 'flex-end', fontSize: 11, color: '#8b97aa', letterSpacing: '0.04em' }}>
            <b style={{ color: '#eef3f8', fontWeight: 500 }}>{l.label}</b>
            <span style={{ width: 11, height: 11, borderRadius: 2, background: cssColor(l.color), boxShadow: `0 0 8px ${cssColor(l.color)}` }} />
          </div>
        ))}
      </div>

      {/* Specs */}
      <div className="ppfls-specs" style={{ position: 'fixed', left: 26, bottom: 96, zIndex: 10, display: 'flex', gap: 22, flexWrap: 'wrap', pointerEvents: 'none' }}>
        {SPECS.map((s) => (
          <div key={s.k}>
            <div style={{ fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#8b97aa' }}>{s.k}</div>
            <div style={{ fontFamily: 'var(--font-bebas-neue), sans-serif', fontWeight: 600, fontSize: 15, color: '#eef3f8' }}>{s.v}</div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div style={{ position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 10, padding: '18px 26px 26px', display: 'flex', gap: 26, alignItems: 'center', flexWrap: 'wrap', background: 'linear-gradient(0deg, rgba(11,16,24,.9), transparent)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 7, minWidth: 150 }}>
          <label style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#8b97aa' }}>Explode</label>
          <input type="range" min="0" max="100" defaultValue="55" style={{ width: 170, accentColor: '#b6e84a' }}
            onChange={(e) => ctrlRef.current?.setExplode(e.target.value / 100)} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 7, minWidth: 150 }}>
          <label style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#8b97aa' }}>Spin speed</label>
          <input type="range" min="0" max="100" defaultValue="35" style={{ width: 170, accentColor: '#b6e84a' }}
            onChange={(e) => ctrlRef.current?.setSpin(e.target.value / 100)} />
        </div>
        <div style={{ marginLeft: 'auto', fontSize: 11, color: '#8b97aa', letterSpacing: '0.06em' }}>
          <span style={{ color: '#b6e84a' }}>◈ </span>Drag to orbit · scroll to zoom
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .ppfls-legend, .ppfls-specs { display: none !important; }
        }
      `}</style>
    </div>
  )
}
