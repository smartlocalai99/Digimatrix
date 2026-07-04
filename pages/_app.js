import { Inter, Manrope } from 'next/font/google'
import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingMobileCTA from '@/components/FloatingMobileCTA'
import LogoIntro from '@/components/LogoIntro'

const manrope = Manrope({ subsets: ['latin'], weight: ['700', '800'], variable: '--font-manrope', display: 'swap' })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-inter', display: 'swap' })

export default function App({ Component, pageProps }) {
  return (
    <div className={`${manrope.variable} ${inter.variable} font-body text-ink antialiased`}>
      <LogoIntro />
      <Navbar />
      <main className="pb-14 sm:pb-0">
        <Component {...pageProps} />
      </main>
      <Footer />
      <FloatingMobileCTA />
    </div>
  )
}
