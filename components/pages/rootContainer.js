import Banner from '../banner'
import MoviesList from '../moviesList'
import useMovie from "context/MovieContext"
import { useEffect, useState } from "react"

export default function Root() {
  const { movies, getMovies } = useMovie()

  useEffect(async () => {
    await getMovies();
  },[])

  return (
    <>
      <Banner homeMovies />
      <MoviesList moviesList={movies} />
    </>
  )
}