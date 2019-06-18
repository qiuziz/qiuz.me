const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/bloglist', { target: 'http://localhost:8888/' }));
};