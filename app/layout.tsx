import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Head from 'next/head'

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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=optional"
          rel="stylesheet"
        />
      </Head>
      <body className='font-rajdhani text-black min-h-min flex flex-col w-screen max-w-[100rem] mx-auto'>
        <Navbar />
        <main className="flex-grow min-h-min">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
