const express = require('express');
const app = express();
const setHeaders = require('./utils/setHeaders');
const bodyParser = require('./utils/bodyParser');
const cakeRouter = require('./routers/cake.router');

// set headers to avoid CORS Policy
app.use(setHeaders);
// parser the body of the request
app.use(bodyParser);

// setting cake router
app.use('/cake', cakeRouter);

module.exports = app;