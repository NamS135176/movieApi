import { takeEvery, put, call, takeLatest } from 'redux-saga/effects'
import { create, ApisauceInstance } from 'apisauce'
import { GET_MOVIES, GET_MOVIES_SUCCESS, GET_MOVIES_ERROR } from '../actions/actionTypes'
import MovieTrend from '../interfaces/movieTrendModel'




const api = create(
    {
        baseURL: 'https://api.themoviedb.org/3/'
    }
)


const getResponseData = (res: any) => {
    if (res.ok) {   
        return res.data;
    } else {
        
        return Promise.reject(res.error);
    }
}

const getMovieNowPlaying = async () => {
    const res = await api.get('movie/now_playing?api_key=c64f2daa298cc3988df7cd7e1eb81f96&language=en-US&page=1');
    return getResponseData(res);
}

const getMoviewPopular = async () => {
    const res = await api.get('movie/popular?api_key=c64f2daa298cc3988df7cd7e1eb81f96&language=en-US&page=1');
    return getResponseData(res);
}

const getTVPopular = async () => {
    const res = await api.get('tv/popular?api_key=c64f2daa298cc3988df7cd7e1eb81f96&language=en-US&page=1');
    return getResponseData(res);
}


function* getData() {

    const listMoviesData: IMovieData = yield call(getMovieNowPlaying);
    const listMoivesTrend: Array<MovieTrend> = yield listMoviesData.results;
    const listMoviesPopData: IMovieData = yield call(getMoviewPopular);
    const listMoviesPopular: Array<MovieTrend> = yield listMoviesPopData.results;
    const listTVData: IMovieData = yield call(getTVPopular);
    const listTVPopular: Array<IMovieTrend> = yield listTVData.results
    
    
        yield put({ type: GET_MOVIES_SUCCESS, payload: [listMoivesTrend,listMoviesPopular,listTVPopular] })

}
export default function* moviesSaga() {
    yield takeLatest(GET_MOVIES, getData)
}