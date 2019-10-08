require('dotenv').config()

module.exports = {
  target: 'serverless',
  env: {
    STATICKIT_ID: process.env.STATICKIT_ID
  }
}
