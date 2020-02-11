import fetch from 'isomorphic-unfetch'
import {put, takeLatest, call} from 'redux-saga/effects'
import {LOAD_DATA_REQUEST} from './actionConstants'
import {loadDataSuccess, failure} from './actionCreators'

function listUsersApi() {
  const fetchUrl = `https://jsonplaceholder.typicode.com/users`
  const data = fetch(fetchUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  }).then(res => {
    return res.json()
  })

  return data
}

function* loadDataSaga() {
  try {
    const fetchedUser = yield call(listUsersApi)
    yield put(loadDataSuccess(fetchedUser))
  } catch (err) {
    yield put(failure(err))
  }
}

function* userDataWatcher () {
  yield takeLatest(LOAD_DATA_REQUEST, loadDataSaga)
}

export default userDataWatcher;


