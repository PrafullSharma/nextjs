import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {increment, decrement, reset} from '../redux/Counter/actionCreators'

export default () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.count)

  return (
    <div>
      <style jsx>{`
          div {
            padding: 0 0 20px 0;
          }
        `}</style>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )

}
