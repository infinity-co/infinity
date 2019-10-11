require('dotenv').config()

module.exports = {
  target: 'serverless',
  env: {
    STATICKIT_ID: process.env.STATICKIT_ID,
    AUTHENTICATION_SERVICE: process.env.AUTHENTICATION_SERVICE,
    COOKIE_DOMAIN: process.env.COOKIE_DOMAIN,
    COOKIE_NAME: process.env.COOKIE_NAME
  }
}
