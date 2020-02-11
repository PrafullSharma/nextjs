import {delay, put, take} from 'redux-saga/effects'
import {START_CLOCK} from './actionConstants'
import {tickClock} from './actionCreators'

function* clockWatcher() {
  yield take(START_CLOCK)
  while (true) {
    yield put(tickClock(false))
    yield delay(1000)
  }
}

export default clockWatcher
