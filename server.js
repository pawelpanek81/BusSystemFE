var express = require('express');
var serveStatic = require('serve-static');
var app = express();
app.use(serveStatic(__dirname + '/dist'));
app.get('/api-base-url', (req, res) => {
  res.json({url: process.env.API_BASE_URL})
});
app.get('/api-login-base-url', (req, res) => {
  res.json({url: process.env.API_LOGIN_BASE_URL})
});
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started ' + port);
