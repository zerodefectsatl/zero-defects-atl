'use client'

import { useEffect, useRef, useState } from 'react'

export default function LazyVideo({ src, poster, type = 'video/mp4', style }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '300px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <video
      ref={ref}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
      style={style}
    >
      {inView && <source src={src} type={type} />}
    </video>
  )
}
