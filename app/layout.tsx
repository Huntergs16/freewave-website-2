import './globals.css'
import { Rajdhani } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Head from 'next/head'

const rajdhani = Rajdhani({
  weight: '400',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Freewave',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='font-rajdhani'>
      <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
