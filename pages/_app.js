import '../styles/globals.css'
import Header from 'components/header'
import Footer from 'components/footer'
import { MovieProvider } from 'context/MovieContext'

function MyApp({ Component, pageProps }) {
  return (
    <MovieProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </MovieProvider>
  )
}

export default MyApp
