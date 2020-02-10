import {combineReducers} from 'redux'

import clockReducer from './Clock/reducer'
import counterReducer from './Counter/reducer'
import userDataReducer from './UserData/reducer'

const rootReducer = combineReducers({
  clock: clockReducer,
  counter: counterReducer,
  userData: userDataReducer
})

export default rootReducer;
// import {LOAD_DATA_SUCCESS, LOAD_DATA_FAIL} from './UserData/actionConstants'
// import {INCREMENT, DECREMENT, RESET} from './Counter/actionConstants'
// import {TICK_CLOCK} from './Clock/actionConstants'
//
// export const exampleInitialState = {
//   count: 0,
//   error: false,
//   lastUpdate: 0,
//   light: false,
//   placeholderData: null
// }
//
// function rootReducer(state = exampleInitialState, action) {
//   switch (action.type) {
//     case LOAD_DATA_FAIL:
//       return {
//         ...state,
//         ...{error: action.error}
//       }
//
//     case INCREMENT:
//       return {
//         ...state,
//         ...{count: state.count + 1}
//       }
//
//     case DECREMENT:
//       return {
//         ...state,
//         ...{count: state.count - 1}
//       }
//
//     case RESET:
//       return {
//         ...state,
//         ...{count: exampleInitialState.count}
//       }
//
//     case LOAD_DATA_SUCCESS:
//       return {
//         ...state,
//         ...{placeholderData: action.data}
//       }
//
//     case TICK_CLOCK:
//       return {
//         ...state,
//         ...{lastUpdate: action.ts, light: !!action.light}
//       }
//
//     default:
//       return state
//   }
// }
//
// export default rootReducer
