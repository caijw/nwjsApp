const express = require('express');
const config = require('./config');

const app = express();

app.use('/static', express.static('./static'));

app.listen(config.port, function () {
  console.log(`Example app listening on port ${config.port}!`);
});