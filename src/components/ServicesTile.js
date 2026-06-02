'use client'

import { useRef, useState, useEffect } from 'react'
import PPFScene from '@/components/PPFScene'

/**
 * Homepage "Our Services" tile: a live, layered-PPF 3D cross-section.
 *   • Click / tap anywhere  → opens /services (plain <a> so the cross-document
 *     view transition still fires — see HANDOFF invariants).
 *   • Drag (desktop)        → orbits the 3D model (navigation is suppressed).
 *   • Hover (desktop)       → the film layers spread apart, then collapse.
 *
 * Interactivity is gated to real pointer/hover devices. On touch, the canvas
 * would swallow scroll (jank) and a tap fires hover-expand with no matching
 * pointerleave — leaving the layers stuck "exploded". There it's a calm,
 * non-interactive backdrop that just navigates on tap.
 */
export default function ServicesTile() {
  const draggedRef = useRef(false)
  const [interactive, setInteractive] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => setInteractive(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return (
    <a
      href="/services"
      className="bento-card bento-services-card"
      aria-label="Our Services"
      draggable={false}
      onDragStart={(e) => e.preventDefault()}
      onClickCapture={(e) => {
        // A drag just happened, not a tap — don't navigate.
        if (draggedRef.current) {
          e.preventDefault()
          draggedRef.current = false
        }
      }}
    >
      <PPFScene
        mode="ambient"
        opacity={0.95}
        interactive={interactive}
        onDragStateChange={(dragged) => { draggedRef.current = dragged }}
      />
      <div className="bento-card__overlay" />
      <div className="bento-card__label">
        <div className="bento-card__eyebrow">
          What we do{interactive ? ' · drag & hover' : ''}
        </div>
        <h2 className="bento-card__title">Our Services</h2>
      </div>
      <span className="bento-corner-arrow" aria-hidden="true">↗</span>
    </a>
  )
}
