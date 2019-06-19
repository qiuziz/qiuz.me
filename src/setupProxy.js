const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/qiuz/', { target: 'http://localhost:8888/' }));
};