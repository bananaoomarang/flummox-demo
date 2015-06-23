var fs            = require('fs');
var path          = require('path');
var express       = require('express');
var React         = require('react');
var Router        = require('react-router');
var routes        = require('./shared/routes');
var AppFlux       = require('./shared/AppFlux');
var FluxComponent = require('flummox/component');
var app           = express();

const BUNDLE_PATH = path.join(__dirname, 'dist', 'bundle.js');

app.get('/bundle.js', function (req, res) {
  fs.createReadStream(BUNDLE_PATH).pipe(res);
});

app.use(function (req, res, next) {
  const flux = new AppFlux();

  const routePath = req.path;

  Router.run(routes, routePath, function (Handler, state) {
    var View = (
      <FluxComponent flux={flux}>
        <Handler {...state} />
      </FluxComponent>
    );

    var html = React.renderToString(View);

    res.end(html);

    next();
  });
});

module.exports = app;
