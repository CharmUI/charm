import 'highlight.js/styles/tomorrow-night.css';
import './css/all.css';
import 'Tags/all.css';

import 'Static/images/1.jpg';

import { HashRouter as Router } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';

import App from './App';

const Render = hot(module)(() => (
  <Router>
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Charm</title>
      </Helmet>
      <App />
    </>
  </Router>
));

ReactDOM.render(
  <Render />,
  document.getElementById('js-root'),
);
