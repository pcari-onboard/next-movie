import Banner from "components/banner"
import MovieList from "components/moviesList"
import useMovie from "context/MovieContext"
import { useEffect } from "react"

export default function MoviesContainer() {
  const {movies, getMovies} = useMovie()

  useEffect(async () => {
    await getMovies();
  },[])

  return(
    <>
      <Banner findMovies/>
      <MovieList isSearchMovie moviesList={movies}/>
    </>

  )
}