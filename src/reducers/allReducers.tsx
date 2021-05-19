import {combineReducers} from 'redux'
import ListMovies from './listMovies'

export default combineReducers({
    movies: ListMovies
});