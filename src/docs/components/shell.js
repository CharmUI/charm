import { HashRouter as Router } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Aside from './aside';

function Shell({ contents, children }) {
  return (
    <Router>
      <>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <title>Charm</title>
        </Helmet>

        <div className="layout">
          {children}

          <div className="content">
            <hr />

            <div className="display--flex justify-content--between">
              <button type="button">
                Previous
                <br />
                <span className="text--blue">— Contents</span>
              </button>

              <button type="button" className="text--right">
                <span className="text--secondary">Next</span>
                <br />
                <span className="text--blue">Contributions —</span>
              </button>
            </div>
          </div>
        </div>

        <nav className="nav">
          <ul className="list--inline list--style-none">
            <li className="text--secondary"><small className="small">v16.7.0</small></li>
            <li className="text--secondary"><small className="small">Getting Started</small></li>
            <li className="text--light"><small className="small">20th November</small></li>
          </ul>
        </nav>

        <Aside contents={contents} />
      </>
    </Router>
  );
}

Shell.defaultProps = {
  contents: [],
  children: null,
};

Shell.propTypes = {
  contents: PropTypes.arrayOf(PropTypes.shape()),
  children: PropTypes.node,
};

export default Shell;
