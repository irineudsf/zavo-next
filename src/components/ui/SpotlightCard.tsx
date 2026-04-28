'use client'
import { useRef, useState, MouseEvent, CSSProperties } from 'react'

interface SpotlightCardProps {
  children: React.ReactNode
  style?: CSSProperties
  className?: string
}

export function SpotlightCard({ children, style, className }: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={className}
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: '#F0F0F0',
        borderRadius: 16,
        border: `1px solid ${hovered ? 'rgba(245,184,0,0.35)' : '#E8E8E8'}`,
        transition: 'border-color 0.3s, box-shadow 0.3s',
        boxShadow: hovered
          ? '0 0 0 1px rgba(245,184,0,0.15), 0 8px 32px rgba(245,184,0,0.08)'
          : '0 1px 4px rgba(0,0,0,0.04)',
        ...style,
      }}
    >
      {/* spotlight radial que segue o cursor */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.4s',
          background: `radial-gradient(400px circle at ${pos.x}px ${pos.y}px, rgba(245,184,0,0.18) 0%, rgba(245,184,0,0.04) 40%, transparent 70%)`,
          zIndex: 0,
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  )
}
