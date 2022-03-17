import { axiosInstance } from 'config/axios';
import { createContext, useReducer, useContext } from "react";
import movieReducer, { initialState, GET_MOVIES } from "reducer/movieReducer";

const MovieContext = createContext(initialState);

export const MovieProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(movieReducer, initialState);

  const getMovies = async () => {
    const resp = await axiosInstance.get('/new_movies');

    dispatch({
      type: GET_MOVIES,
      payload: {
        movies: resp.data.data
      }
    });

  }

  const value = {
    movies: state.movies,
    getMovies,
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