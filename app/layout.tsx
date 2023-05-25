import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

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
      <Head>
        {/* Add the link tags for the Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin /> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className={inter.className}>
      <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
