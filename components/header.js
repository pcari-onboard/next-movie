import Link from 'next/link'
import navStyles from '../styles/Header.module.css'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()

  return (
    <header className={`text-gray-600 body-font ${navStyles.headerBgBlack} container`}>
      <div className="container mx-auto flex flex-wrap py-5 px-[103px] flex-col md:flex-row items-center">
        <p className="text-white">PcariMovie</p>
        <nav className="text-white md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link href="/"><a className={`mr-12 ${navStyles.navItem} ${router.pathname === '/' ? navStyles.active : ''}`}>Home</a></Link>
          <Link href="/movies"><a className={`mr-12 ${navStyles.navItem} ${router.pathname === '/movies' ? navStyles.active : ''}`} >Movies</a></Link>
          <Link href="/tv-show"><a className={`mr-12 ${navStyles.navItem} ${router.pathname === '/tv-show' ? navStyles.active : ''}`} >TV Show</a></Link>
          <Link href="/video"><a className={`mr-12 ${navStyles.navItem} ${router.pathname === '/video' ? navStyles.active : ''}`} >Video</a></Link>
          <Link href="/faq"><a className={`mr-12 ${navStyles.navItem} ${router.pathname === '/faq' ? navStyles.active : ''}`} >FAQ</a></Link>
          <Link href="/pricing"><a className={`mr-12 ${navStyles.navItem} ${router.pathname === '/pricing' ? navStyles.active : ''}`} >Pricing</a></Link>
          <Link href="/contact-us"><a className={`mr-12 ${navStyles.navItem} ${router.pathname === '/contact-us' ? navStyles.active : ''}`} >Contact Us</a></Link>
        </nav>
        <button className="inline-flex items-cente border-0 py-1 px-3 focus:outline-non rounded text-base mt-4 md:mt-0">
          <img src="images/search-icon.svg" />
        </button>
      </div>
    </header>
  )
}