/* global fetch */
import { all } from 'redux-saga/effects'

import clockSagas from './Clock/clockSagas'
import userDataSagas from './UserData/userDataSagas'

export default function* IndexSaga() {
  yield all([
    clockSagas(),
    userDataSagas()
  ])
}
