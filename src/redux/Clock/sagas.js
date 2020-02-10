import {delay, put, take, call} from 'redux-saga/effects'
import {START_CLOCK} from './actionConstants'
import {tickClock} from './actionCreators'

function* runClockSaga() {
  yield take(START_CLOCK)
  while (true) {
    yield put(tickClock(false))
    yield delay(1000)
  }
}

const sagas = [
  call(runClockSaga)
];

export default sagas;
