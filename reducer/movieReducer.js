export const GET_MOVIES = "GET_MOVIES";
export const SEARCH_MOVIES = "SEARCH_MOVIES";
export const RESET_MOVIES = "RESET_MOVIES"

export const initialState = {
  movies: []
}

export default function movieReducer(state, action) {
  const { type , payload } = action;

  switch (type) {
    case GET_MOVIES:
      console.log(GET_MOVIES, payload.movies);

      return {
        ...state,
        movies: payload.movies
      }
    case SEARCH_MOVIES:
      console.log(SEARCH_MOVIES, payload);

      return {
        ...state,
        movies: payload.movies
      }
      case RESET_MOVIES:
        console.log(RESET_MOVIES, payload);
      return {
        ...state,
        movies: initialState.movies
      }
  }
}