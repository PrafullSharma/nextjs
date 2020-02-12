import React from 'react'
import { NextSeo } from 'next-seo'
import { useSelector } from 'react-redux'

import Link from '../theme/Link'
import Counter from './counter'
import Clock from './clock'
import testscss from '../styles/test.scss'

export default ({linkTo, NavigateTo, title}) => {
  const error = useSelector(state => state.userData.error)
  const placeholderData = useSelector(state => state.userData.placeholderData)
  const lastUpdate = useSelector(state => state.clock.lastUpdate)
  const light = useSelector(state => state.clock.light)

  return (
    <div>
      <NextSeo
        noindex={true}
        title="Title B"
        description="Description B"
        canonical="https://www.canonical.ie/b"
        languageAlternate={{
          hrefLang: 'de-AT',
          href: 'https://www.canonical.ie/de'
        }}
        mobileAlternate={{
          media: 'only screen and (max-width: 640px)',
          href: 'https://m.canonical.ie'
        }}
        openGraph={{
          url: 'https://www.url.ie/b',
          title: 'Open Graph Title B',
          description: 'Open Graph Description B',
          // Multiple Open Graph images is only available in version `7.0.0-canary.0`+ of next
          images: [
            {
              url: 'https://www.test.ie/og-image-b-01.jpg',
              width: 850,
              height: 650,
              alt: 'Og Image Alt B'
            },
            {
              url: 'https://www.test.ie/og-image-b-02.jpg',
              width: 950,
              height: 850,
              alt: 'Og Image Alt B Second'
            },
            { url: 'https://www.test.ie/og-image-b-03.jpg' },
            { url: 'https://www.test.ie/og-image-b-04.jpg' }
          ],
          videos: [
            {
              url: 'https://www.test.ie/og-video-b-01.jpg',
              width: 850,
              height: 650,
              alt: 'Og Video Alt B'
            },
            {
              url: 'https://www.test.ie/og-video-b-02.jpg',
              width: 950,
              height: 850,
              alt: 'Og Video Alt B Second'
            },
            { url: 'https://www.test.ie/og-video-b-03.jpg' },
            { url: 'https://www.test.ie/og-video-b-04.jpg' }
          ],
          site_name: 'SiteName B'
        }}
        twitter={{
          handle: '@handleb',
          site: '@siteb',
          cardType: 'summary_large_image'
        }}
        facebook={{
          appId: '987654321'
        }}
      />
      <style jsx>{testscss}</style>
      <h1>{title}</h1>
      <p>coming from env: {process.env.TEST_VAR}</p>
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter />
      <nav>
        <Link href={linkTo} color="primary" variant="inherit">
          Navigate: {NavigateTo}
        </Link>
      </nav>
      {placeholderData && (
        <pre>
          <code>{JSON.stringify(placeholderData, null, 2)}</code>
        </pre>
      )}
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
    </div>
  )
}
