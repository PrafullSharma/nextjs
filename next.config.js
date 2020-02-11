const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
require('dotenv').config()

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
      env: {
        // Reference a variable that was defined in the .env file and make it available at Build Time
        TEST_VAR: 'devonly_env_from_nextconfig_file!'
      },
    }
  }

  return {
    env: {
      // Reference a variable that was defined in the .env file and make it available at Build Time
      TEST_VAR: process.env.TEST_VAR,
    },
  }
}
