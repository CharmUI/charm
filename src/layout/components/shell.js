import { HashRouter as Router, withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Aside from './aside';
import Footer from './footer';
import Nav from './nav';

const WithRouterFooter = withRouter(Footer);
const WithRouterAside = withRouter(Aside);
const WithRouterNav = withRouter(Nav);

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
            { children }
          </main>

          <div className="content">
            <hr />

            <WithRouterFooter contents={contents} />
          </div>
        </div>

        <WithRouterNav contents={contents} />

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
