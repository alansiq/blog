import '../styles/globals.scss';
import Nav from '../components/nav';
import Footer from '../components/footer';

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Nav />
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
