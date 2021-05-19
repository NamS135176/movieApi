import {GET_MOVIES, GET_MOVIES_SUCCESS, GET_MOVIES_ERROR} from './actionTypes'
export const getMovies = () => {
    return {
        type: GET_MOVIES,
        payload: []
    }
}
export const getMoviesSuccess = (data:any) => {
    return {
        type: GET_MOVIES_SUCCESS,
        payload: data
    }
}
export const getMoviesError = (e:string) => {
    return {
        type: GET_MOVIES_ERROR,
        eMessage: e
    }
}