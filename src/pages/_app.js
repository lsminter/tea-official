import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css'

import localFont from 'next/font/local'
import NavBar from '../../library/navBar';

const rsfont = localFont({
  weight: '100',
  src: '../../fonts/runescape.ttf',
})

export default function App({ Component, pageProps }) {
  return (
    <main className={rsfont.className}>
      <NavBar />
      <Component {...pageProps} />
    </main>
    )
}
