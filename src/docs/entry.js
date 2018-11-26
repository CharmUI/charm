import './css/all.css';
import '../css/classes/all.css';

import ReactDOM from 'react-dom';
import Container from './container';

const render = Component => ReactDOM.render(
  <Component />,
  document.getElementById('js-root'),
);

render(Container);
