import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], weight: ['400','500','600','700','800','900'] })

export const metadata: Metadata = {
  title: 'Zavo — Tecnologia que gera lucro para o seu negócio',
  description: 'A Zavo aumenta o lucro do seu negócio pelos dois lados: mais clientes chegando com sites profissionais e menos custo operacional com IA e automações.',
  metadataBase: new URL('https://zavo.digital'),
  openGraph: {
    title: 'Zavo — Tecnologia que gera lucro para o seu negócio',
    description: 'Mais clientes chegando. Menos custo operacional. Sites, IA e automações para pequenos negócios.',
    url: 'https://zavo.digital',
    siteName: 'Zavo',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zavo — Tecnologia que gera lucro para o seu negócio',
    description: 'Mais clientes chegando. Menos custo operacional. Sites, IA e automações para pequenos negócios.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
