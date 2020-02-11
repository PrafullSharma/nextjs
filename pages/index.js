import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'

import {loadData} from '../src/redux/UserData/actionCreators'
import {startClock, tickClock} from '../src/redux/Clock/actionCreators'
import Page from '../src/components/page'

const Index = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startClock())
  })

  return <Page title="Index Page" linkTo="/other" NavigateTo="Other Page"/>
}

Index.getInitialProps = async (props) => {
  const {store, isServer} = props.ctx
  store.dispatch(tickClock(isServer))

  if (!store.getState().placeholderData) {
    store.dispatch(loadData())
  }

  return {isServer}
}

export default Index
