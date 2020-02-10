import {LOAD_DATA_REQUEST, LOAD_DATA_SUCCESS, LOAD_DATA_FAIL} from './actionConstants'

export function loadData() {
  return { type: LOAD_DATA_REQUEST }
}

export function loadDataSuccess(data) {
  return {
    type: LOAD_DATA_SUCCESS,
    data,
  }
}

export function failure(error) {
  return {
    type: LOAD_DATA_FAIL,
    error,
  }
}
