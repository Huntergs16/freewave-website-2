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
      <Head>
        {/* Add the link tags for the Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin /> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className={rajdhani.className}>
      <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
