'use client'
import { Suspense, lazy } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

export function SplineBackground() {
  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      zIndex: 0,
      pointerEvents: 'auto',
      overflow: 'hidden',
    }}>
      <Suspense fallback={<div style={{ width: '100%', height: '100%', background: '#0D0D0D' }} />}>
        <Spline
          scene="https://prod.spline.design/us3ALejTXl6usHZ7/scene.splinecode"
          style={{ width: '100%', height: '100%', pointerEvents: 'auto' }}
        />
      </Suspense>

      {/* gradientes laterais e inferior para fundir com as seções seguintes */}
      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        background: `
          linear-gradient(to right, rgba(13,13,13,0.75) 0%, transparent 28%, transparent 72%, rgba(13,13,13,0.75) 100%),
          linear-gradient(to bottom, transparent 50%, rgba(13,13,13,0.95) 100%)
        `,
      }} />
    </div>
  )
}
