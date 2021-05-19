import { GET_MOVIES, GET_MOVIES_SUCCESS, GET_MOVIES_ERROR } from '../actions/actionTypes'
import MovieTrend from '../interfaces/movieTrendModel'
const initState: IMovieState = {
    loading: false,
    listMoviesTrend: []
};
interface action {
    type: string,
    payload: object
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
            console.log('get success');
            return {
                ...data,
                loading: false,
                listMoviesTrend: action.payload
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