import React             from 'react';
import AppFlux           from '../AppFlux';
import { RouteHandler }  from 'react-router';

var AppView = {
  contextTypes: {
    flux: React.PropTypes.instanceOf(AppFlux)
  },

  render() {
    return (
      <div>

        <title>Flummox Demo</title>

        <h2>fsadf</h2>

        <RouteHandler {...this.props} />

        <script type="application/javascript" src="/bundle.js"></script>
      </div>
    );
  }
};

export default React.createClass(AppView);
