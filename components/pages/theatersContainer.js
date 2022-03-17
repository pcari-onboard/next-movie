import Banner from "components/banner"
import MovieList from "components/moviesList"
import useMovie from "context/MovieContext"
import { useEffect } from "react"

export default function TheatersContainer() {
  const { movies, getMovies, resetMovies } = useMovie()

  useEffect(() => {
    // getMovies();

    return resetMovies()
  },[])

  return(
    <>
      <Banner findTimeSlot/>
      {movies && <MovieList isSearchMovie moviesList={movies}/>}
    </>

  )
}