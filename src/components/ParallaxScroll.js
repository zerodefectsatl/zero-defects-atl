'use client'

import { useEffect } from 'react'

export default function ParallaxScroll() {
  // Scroll reveal — IntersectionObserver for [data-reveal] elements
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    const t = setTimeout(() => {
      document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el))
    }, 300)
    return () => { clearTimeout(t); observer.disconnect() }
  }, [])

  // Parallax + photo-reveal — RAF-throttled scroll listener
  useEffect(() => {
    let raf = null
    let items = []
    let photoItems = []

    const collect = () => {
      items = []
      document.querySelectorAll('[data-parallax]').forEach((el) => {
        const prev = el.style.transform
        el.style.transform = ''
        const rect = el.getBoundingClientRect()
        el.style.transform = prev
        const naturalTop = rect.top + window.scrollY
        const speed = parseFloat(el.dataset.parallaxSpeed ?? '0.2')
        items.push({ el, naturalTop, speed })
      })

      photoItems = []
      document.querySelectorAll('[data-photo-reveal]').forEach((el) => {
        const prev = el.style.clipPath
        el.style.clipPath = ''
        const rect = el.getBoundingClientRect()
        el.style.clipPath = prev
        const naturalTop = rect.top + window.scrollY
        photoItems.push({ el, naturalTop })
      })
    }

    const update = () => {
      const y = window.scrollY
      const vh = window.innerHeight

      items.forEach(({ el, naturalTop, speed }) => {
        const offset = (y - naturalTop) * speed
        el.style.transform = `translateY(${offset}px)`
      })

      photoItems.forEach(({ el, naturalTop }) => {
        const progress = Math.max(0, Math.min(1, (y + vh - naturalTop) / vh))
        const inset = Math.round((1 - progress) * 38)
        el.style.clipPath = `inset(${inset}% 0)`
      })

      raf = null
    }

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    const t = setTimeout(() => {
      collect()
      update()
    }, 200)

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', collect, { passive: true })

    return () => {
      clearTimeout(t)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', collect)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])  // eslint-disable-line react-hooks/exhaustive-deps

  return null
}
