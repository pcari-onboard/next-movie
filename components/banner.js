import styles from '../styles/components/Banner.module.css'

export default function Banner({ homeMovies, findMovies, findTheaters }) {
  return (
    <section className={`${styles.bannerSection} py-36 lg:px-[103px]`}>
      <div className="flex items-center justify-items-stretch justify-between px-[111px]">
        <img src="images/play-button.png" />
        <div className="banner-section__text-block w-1/2 text-white">
          <h3 className="text-7xl font-bold leading-tight">Find your movies here!</h3>
          <p className="text-base mt-6">Explore our gallery full of exciting films from all around the globe only your yor entertainments. No hidden charges or disturbing ads.</p>
        </div>
      </div>
    </section>
  )
}