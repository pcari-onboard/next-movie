import Banner from "components/banner"
import MovieList from "components/moviesList"
import useMovie from "context/MovieContext"
import { useEffect } from "react"

export default function MoviesContainer() {
  const { movies, getMovies, resetMovies } = useMovie()

  useEffect(() => {
    // getMovies();

    return resetMovies()
  },[])

  return(
    <>
      <Banner findMovies/>
      {movies && <MovieList isSearchMovie moviesList={movies}/>}
    </>

  )
}