'use client'

import { useEffect, useRef } from 'react'

export default function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef   = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let W = window.innerWidth
    let H = window.innerHeight
    canvas.width  = W
    canvas.height = H

    const onResize = () => {
      W = window.innerWidth
      H = window.innerHeight
      canvas.width  = W
      canvas.height = H
    }
    window.addEventListener('resize', onResize)

    // ── Aurora blobs ─────────────────────────────────────────────
    const blobs = Array.from({ length: 6 }, () => ({
      x:       Math.random() * W,
      y:       Math.random() * H,
      vx:      (Math.random() - 0.5) * 0.6,
      vy:      (Math.random() - 0.5) * 0.6,
      radius:  Math.random() * 280 + 200,
      opacity: Math.random() * 0.18 + 0.12,
    }))

    // ── Particles ────────────────────────────────────────────────
    const particles = Array.from({ length: 90 }, () => ({
      x:       Math.random() * W,
      y:       Math.random() * H,
      vx:      (Math.random() - 0.5) * 0.5,
      vy:      (Math.random() - 0.5) * 0.5,
      size:    Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.7 + 0.2,
    }))

    const draw = () => {
      ctx.fillStyle = '#000'
      ctx.fillRect(0, 0, W, H)

      // — Aurora blobs —
      for (const b of blobs) {
        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.radius)
        g.addColorStop(0,    `rgba(220, 220, 255, ${b.opacity})`)
        g.addColorStop(0.45, `rgba(180, 180, 230, ${b.opacity * 0.5})`)
        g.addColorStop(1,    'rgba(0,0,0,0)')
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2)
        ctx.fill()

        b.x += b.vx
        b.y += b.vy
        if (b.x < -b.radius)    b.x = W + b.radius
        if (b.x > W + b.radius) b.x = -b.radius
        if (b.y < -b.radius)    b.y = H + b.radius
        if (b.y > H + b.radius) b.y = -b.radius
      }

      // — Particle constellation —
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const q  = particles[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const d  = Math.sqrt(dx * dx + dy * dy)
          if (d < 130) {
            ctx.strokeStyle = `rgba(255,255,255,${0.18 * (1 - d / 130)})`
            ctx.lineWidth   = 0.7
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.stroke()
          }
        }
        ctx.fillStyle = `rgba(255,255,255,${p.opacity})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()

        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = W
        if (p.x > W) p.x = 0
        if (p.y < 0) p.y = H
        if (p.y > H) p.y = 0
      }

      animRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', onResize)
      if (animRef.current) cancelAnimationFrame(animRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position:      'fixed',
        inset:         0,
        zIndex:        9999,
        pointerEvents: 'none',
        mixBlendMode:  'screen',
      }}
    />
  )
}
