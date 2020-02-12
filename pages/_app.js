import React from 'react'
import App from 'next/app'
import { DefaultSeo } from 'next-seo'
import {Provider} from 'react-redux'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import {ThemeProvider} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import createStore from '../src/redux/configureStore'
import SEO from '../next-seo.config'
import theme from '../src/theme'

class MyApp extends App {
  static async getInitialProps({Component, ctx}) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ctx})
    }

    return {pageProps}
  }

  // Remove the server-side injected CSS.
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }

  render() {
    const {Component, pageProps, store} = this.props
    return (
      <React.Fragment>
        <DefaultSeo {...SEO} />
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline/>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
      </React.Fragment>
    )
  }
}

export default withRedux(createStore)(withReduxSaga(MyApp))
