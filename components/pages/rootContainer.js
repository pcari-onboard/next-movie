import Banner from '../banner'
import MoviesList from '../moviesList'

export default function Root() {
  return (
    <>
      <Banner homeMovies />
      <MoviesList />
    </>
  )
}