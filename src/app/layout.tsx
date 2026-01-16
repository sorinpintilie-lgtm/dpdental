import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'DP Dental Group - Zâmbete Naturale, Fără Durere',
  description: 'Clinică dentară premium în București, specializată în stomatologie modernă fără durere.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro">
      <body className={`${inter.variable} ${playfair.variable} font-body`}>
        {children}
      </body>
    </html>
  )
}