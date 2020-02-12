const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
require('dotenv').config()
const withOffline = require('next-offline')
const scssLoaderConfig = require('./nextConfig/scssLoader')

const nextConfig = (phase, { defaultConfig }) => {
  /* development only config options here */
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        TEST_VAR: 'devonly_env_from_nextconfig_file!'
      },
      webpack: scssLoaderConfig
    }
  }

  /* all config options except development below */
  return {
    env: {
      TEST_VAR: process.env.TEST_VAR,
    },
    webpack: scssLoaderConfig,
    // workboxOpts: {
    //   swDest: process.env.NEXT_EXPORT
    //     ? 'service-worker.js'
    //     : 'static/service-worker.js',
    //   runtimeCaching: [
    //     {
    //       urlPattern: /^https?.*/,
    //       handler: 'NetworkFirst',
    //       options: {
    //         cacheName: 'offlineCache',
    //         expiration: {
    //           maxEntries: 200,
    //         },
    //       },
    //     },
    //   ],
    // },
    // experimental: {
    //   async rewrites() {
    //     return [
    //       {
    //         source: '/service-worker.js',
    //         destination: '/_next/static/service-worker.js',
    //       },
    //     ]
    //   },
    // }
  }
}

// module.exports = withOffline(nextConfig)
module.exports = nextConfig
