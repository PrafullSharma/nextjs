import {TICK_CLOCK} from './actionConstants'

const initialState = {
  lastUpdate: 0,
  light: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TICK_CLOCK:
      return {
        ...state,
        ...{lastUpdate: action.ts, light: !!action.light}
      }

    default:
      return state
  }
}
