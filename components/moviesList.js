import Link from 'next/link'
import styles from 'styles/components/MoviesList.module.css'

export default function MoviesList({ isSearchMovie, moviesList }) {
  return(
    <div className={`${styles.bgContainer} py-[133px] px-[103px]`}>
      <div className="flex justify-between items-center mb-[56px]">
        {!isSearchMovie ?
        <h4 className="text-white text-[48px]">New Releases</h4>
        : <h4 className="text-white text-[48px]">Search Results</h4>}
        {!isSearchMovie && <Link href="/movies/all-releases"><a className="text-[#FED530] text-[24px] hover:underline">View More</a></Link>}
      </div>
      <div className={`movie-results__component`}>
        <div className="movie-release-container__component grid grid-cols-3 gap-4">
          {moviesList && moviesList.map((movie, i) => (
            <div key={i} className={`movie-release-grid__component relative ${i === 0 ? 'col-span-2' : ''} ${styles.movieComponentGrid}`}>
              <div className="">
                <div className="mt-[26px] ml-[24px]">
                  <span className={`${styles.movieReleaseTag}`}>{movie.Genre}</span>

                </div>
                <div className="absolute bottom-0 ml-[24px] mb-[24px]">
                  <div className="time-taken text-white inline-block">
                    <img className="inline-block" src="images/clock.svg" />
                    <span className="ml-[10px] text-[14px]">{movie.Duration}</span>
                  </div>
                  <div className="views text-white inline-block ml-[24px]">
                    <img className="inline-block" src="images/views.svg" />
                    <span className="ml-[10px] text-[14px]">{movie.Views} views</span>
                  </div>
                  <div className="movie-name text-white">
                    <span className="text-[48px]">{movie.Title}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}