const bodyParser = require('body-parser');
const path = require('path');

module.exports = (app, express) => {
  app.use(express.static('dist'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
  })
  );
};
