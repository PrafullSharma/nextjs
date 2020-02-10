import {put, takeLatest} from 'redux-saga/effects'
import {LOAD_DATA_REQUEST} from './actionConstants'
import {loadDataSuccess, failure} from './actionCreators'

function* loadDataSaga() {
  try {
    const res = yield fetch('https://jsonplaceholder.typicode.com/users')
    const data = yield res.json()
    yield put(loadDataSuccess(data))
  } catch (err) {
    yield put(failure(err))
  }
}

const sagas = [
  takeLatest(LOAD_DATA_REQUEST, loadDataSaga)
];

export default sagas;


