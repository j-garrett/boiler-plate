const express = require('express');
const path = require('path');

const middleware = require('./config/middleware');

const app = express();
middleware(app, express);

const home = path.join(__dirname, './../dist/index.html');
app.get('/*', (req, res) => {
  res.sendFile(home);
});

app.listen(3000);
