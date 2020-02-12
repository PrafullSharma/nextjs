const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
require('dotenv').config()

module.exports = (phase, { defaultConfig }) => {
  /* development only config options here */
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        TEST_VAR: 'devonly_env_from_nextconfig_file!'
      },
      webpack: (config, { defaultLoaders }) => {
        config.module.rules.push({
          test: /\.scss$/,
          use: [
            defaultLoaders.babel,
            {
              loader: require('styled-jsx/webpack').loader,
              options: {
                type: 'scoped',
              },
            },
            'sass-loader',
          ],
        })

        return config
      }
    }
  }

  /* all config options except development below */
  return {
    env: {
      TEST_VAR: process.env.TEST_VAR,
    },
    webpack: (config, { defaultLoaders }) => {
      config.module.rules.push({
        test: /\.scss$/,
        use: [
          defaultLoaders.babel,
          {
            loader: require('styled-jsx/webpack').loader,
            options: {
              type: 'scoped',
            },
          },
          'sass-loader',
        ],
      })

      return config
    }
  }
}
