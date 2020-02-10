import {LOAD_DATA_FAIL, LOAD_DATA_SUCCESS} from './actionConstants'

const initialState = {
  placeholderData: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA_FAIL:
      return {
        ...state,
        ...{error: action.error}
      }

    case LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{placeholderData: action.data}
      }

    default:
      return state
  }
}
