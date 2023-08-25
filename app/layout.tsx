import './globals.css'
import { Playfair_Display } from 'next/font/google'
import Header from './components/Header'

const playfair_display = Playfair_Display({ subsets: ['latin'] })

export const metadata = {
  title: 'Photography',
  description: 'Save all your images',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={playfair_display.className + ' selection:bg-[#E4F1F4]'}>
        <Header />
        {children}
        </body>
    </html>
  )
}
