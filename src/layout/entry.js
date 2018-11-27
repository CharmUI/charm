import './css/all.css';
import 'Tags/all.css';

import { hot } from 'react-hot-loader';
import ReactDOM from 'react-dom';

import App from './App';

const Render = hot(module)(() => <App />);

ReactDOM.render(
  <Render />,
  document.getElementById('js-root'),
);
