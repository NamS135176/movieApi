import { GET_MOVIES, GET_MOVIES_SUCCESS, GET_MOVIES_ERROR } from '../actions/actionTypes'
const initState: IMovieState = {
    loading: false,
    listMoviesTrend: [],
    listMoviesPopular: [],
    listTVPopular: []
};
interface action {
    type: string,
    payload: Array<object>
}
const ListMovies = (data = initState, action: action) => {


    switch (action.type) {
        case GET_MOVIES: {
            return {
                ...data,
                loading: true
            }
        }
        case GET_MOVIES_SUCCESS: {
            return {
                ...data,
                loading: false,
                listMoviesTrend: action.payload[0],
                listMoviesPopular: action.payload[1],
                listTVPopular: action.payload[2]
            }
        }
        case GET_MOVIES_ERROR: {
            return {
                ...data,
                loading: false
            }
        }
        default:{
            return initState
        } 
    }
}
export default ListMovies