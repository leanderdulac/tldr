require('dotenv').config({ path: process.env.DOTENV_PATH })
require('newrelic')
const express = require('express')
const database = require('../database')
const receiptController = require('../controllers/receipt')
const redirectHTTPMiddleware = require('../helpers/redirect-http')
const { httpLogger, logger } = require('../helpers/escriba')

const app = express()
const allRoutesExceptHealthCheck = /^\/(?!_health_check(\/|$)).*$/i

app.use(allRoutesExceptHealthCheck, redirectHTTPMiddleware)

app.use(httpLogger)

app.disable('x-powered-by')

app.set('view engine', 'ejs')
app.use('/static', express.static('views/pages/static'))

app.get(
  '/robots.txt',
  (req, res) => res.status(200).send('User-Agent: *\nDisallow: /')
)

app.get(
  '/api/receipt/:receipt_id',
  receiptController.show
)

app.get(
  '/receipt/:receipt_id',
  receiptController.render
)

app.get(
  '/_health_check',
  (req, res) => res.send()
)

if (process.env.NODE_ENV !== 'test') {
  database.bootstrap()
    .then(() => app.listen(process.env.PORT))
    .then(() => {
      logger.info('Server ready and listening', {
        port: process.env.PORT,
        env: process.env.NODE_ENV,
        pkgVersion: process.env.npm_package_version || 'unknown',
      })
    })
}

module.exports = app
