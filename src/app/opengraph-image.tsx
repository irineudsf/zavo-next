import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Zavo — Tecnologia que gera lucro para o seu negócio'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#0D0D0D',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Grade decorativa */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(245,184,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(245,184,0,0.06) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          display: 'flex',
        }} />

        {/* Glow âmbar central */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 800,
          height: 300,
          background: 'radial-gradient(ellipse, rgba(245,184,0,0.15) 0%, transparent 70%)',
          display: 'flex',
        }} />

        {/* Conteúdo */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28, position: 'relative', zIndex: 1, padding: '0 80px', textAlign: 'center' }}>

          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 8 }}>
            <svg width="56" height="56" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" rx="18" fill="#1A1A2E"/>
              <path d="M 18,18 H 82 V 31 L 36,69 H 82 V 82 H 18 V 69 L 64,31 H 18 Z" fill="#F5B800"/>
            </svg>
            <span style={{ fontSize: 40, fontWeight: 900, color: '#fff', letterSpacing: 4 }}>
              <span style={{ color: '#F5B800' }}>Z</span>AVO
            </span>
          </div>

          {/* Headline */}
          <div style={{ fontSize: 52, fontWeight: 900, color: '#fff', lineHeight: 1.1, letterSpacing: -1 }}>
            Tecnologia que gera{' '}
            <span style={{ color: '#F5B800' }}>lucro</span>
            {' '}para o seu negócio
          </div>

          {/* Sub */}
          <div style={{ fontSize: 24, color: 'rgba(255,255,255,0.55)', maxWidth: 700, lineHeight: 1.5 }}>
            Sites · IA aplicada · Automações de processo
          </div>

          {/* URL */}
          <div style={{
            fontSize: 18, color: '#F5B800', fontWeight: 700,
            letterSpacing: 2, opacity: 0.8,
          }}>
            zavo.digital
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
