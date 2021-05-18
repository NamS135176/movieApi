import {GET_MOVIES, GET_MOVIES_SUCCESS, GET_MOVIES_ERROR} from '../actions/actionTypes'
const initState = {
    loading: false,
    listMoivesTrend: [],
    listMoviesPop:[],
    listTVTrend:[],
    listTVPop:[],
    error: 'none'
};
interface action {
    type: string,
    payload: any
  }
const ListMovies = (data = initState, action:action) => {
    switch(action.type){
        case GET_MOVIES : {
            return{
               ...data,
                loading:true
            }
        }
        case GET_MOVIES_SUCCESS : {
            return{
                ...data,
                loading: false,
                listMoviesTrend: action.payload.listMoviesTrend,
                listMoviesPop: action.payload.listMoviesPop,
                listTVTrend: action.payload.listTVTrend,
                listTVPop: action.payload.listTVPop
            }
        }
        case GET_MOVIES_ERROR : {
            return{
                ...data,
                loading:false,
                error: action.payload.error
            }
        }
        default: return initState
    }
}
export default ListMovies