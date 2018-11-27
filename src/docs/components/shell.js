import { HashRouter as Router, withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Aside from './aside';
import Footer from './footer';

const WithRouterFooter = withRouter(Footer);
const WithRouterAside = withRouter(Aside);

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
          <main className="content">
            {children}
          </main>

          <div className="content">
            <hr />

            <WithRouterFooter contents={contents} />
          </div>
        </div>

        <nav className="nav">
          <ul className="list--inline list--style-none">
            <li className="text--secondary"><small className="small">v16.7.0</small></li>
            <li className="text--secondary"><small className="small">Getting Started</small></li>
            <li className="text--light"><small className="small">20th November</small></li>
          </ul>
        </nav>

        <WithRouterAside contents={contents} />
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
