import {
  HashRouter as Router,
  Route as Content,
  withRouter,
} from 'react-router-dom';

import { Helmet } from 'react-helmet';

import {
  withRouteScroll,
  Shell,
  Footer,
  Aside,
  Nav,
} from './components';

import contents from './content/contents';

const WithRouterFooter = withRouter(Footer);
const WithRouterAside = withRouter(Aside);
const WithRouterNav = withRouter(Nav);

export default function App() {
  return (
    <Router>
      <>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <title>Charm</title>
        </Helmet>

        <Shell
          footer={<WithRouterFooter contents={contents} />}
          aside={<WithRouterAside contents={contents} />}
          nav={<WithRouterNav contents={contents} />}
        >
          { contents.map(content => (
            <Content
              key={content.bullet}
              {...content}
              component={withRouteScroll(content.component)}
            />
          )) }
        </Shell>
      </>
    </Router>
  );
}
