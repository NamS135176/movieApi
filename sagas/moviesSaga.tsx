import { takeEvery, put, call, takeLatest } from 'redux-saga/effects'
import { create } from 'apisauce'
import {GET_MOVIES,GET_MOVIES_SUCCESS,GET_MOVIES_ERROR} from '../actions/actionTypes'
function* getData() {
   
   

}
export default function* moviesSaga(){
    yield takeLatest(GET_MOVIES,getData)
}