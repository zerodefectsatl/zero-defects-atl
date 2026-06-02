'use client'

import { useRef } from 'react'
import PPFScene from '@/components/PPFScene'

/**
 * Homepage "Our Services" tile: a live, layered-PPF 3D cross-section.
 *   • Click / tap anywhere  → opens /services (plain <a> so the cross-document
 *     view transition still fires — see HANDOFF invariants).
 *   • Drag                  → orbits the 3D model (navigation is suppressed).
 *   • Hover                 → the film layers spread apart, then collapse.
 */
export default function ServicesTile() {
  const draggedRef = useRef(false)

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
        interactive
        onDragStateChange={(dragged) => { draggedRef.current = dragged }}
      />
      <div className="bento-card__overlay" />
      <div className="bento-card__label">
        <div className="bento-card__eyebrow">What we do · drag &amp; hover</div>
        <h2 className="bento-card__title">Our Services</h2>
      </div>
      <span className="bento-corner-arrow" aria-hidden="true">↗</span>
    </a>
  )
}
