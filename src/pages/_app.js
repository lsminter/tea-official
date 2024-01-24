import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css'

import localFont from 'next/font/local'

const rsfont = localFont({
  weight: '100',
  src: '../../fonts/runescape.ttf',
})

export default function App({ Component, pageProps }) {
  return (
    <main className={rsfont.className}>
      <Component {...pageProps} />
    </main>
    )
}
