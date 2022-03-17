import { axiosInstance } from 'config/axios';
import { createContext, useReducer, useContext } from "react";
import movieReducer,
{ initialState,
  GET_MOVIES,
  SEARCH_MOVIES,
  RESET_MOVIES
} from "reducer/movieReducer";

const MovieContext = createContext(initialState);

export const MovieProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(movieReducer, initialState);

  const getMovies = async () => {
    try {
      const resp = await axiosInstance.get('/new_movies');

      dispatch({
        type: GET_MOVIES,
        payload: {
          movies: resp.data.data
        }
      });
    } catch (err) {
      throw new Error("getMovies", err);
    }
  }

  const getMoviesByTheatre = async (theatreName, desiredDate) => {
    try {
      const resp = await axiosInstance.get(`/specific_movie_theater?theater_name=${theatreName}&d_date=${desiredDate}`);

      dispatch({
        type: SEARCH_MOVIES,
        payload: {
          movies: resp.data.data
        }
      })

    } catch (err) {
      throw new Error("getMoviesByTheatre", err);
    }
  }

  const resetMovies = () => {
    dispatch({
      type: RESET_MOVIES
    })
  }

  const value = {
    movies: state.movies,
    getMovies,
    getMoviesByTheatre,
    resetMovies
  }

  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
}

export default function useMovie() {
  const context = useContext(MovieContext)

  if (context === undefined) {
    throw new Error("useMovie must be used within MovieContext");
  }
  // console.log("CONTEXT", context)
  return context;
}