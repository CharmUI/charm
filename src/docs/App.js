import {
  Route as Content,
  withRouter,
} from 'react-router-dom';

import {
  Layout,
  Footer,
  Aside,
  Nav,
  List,
} from 'Layout';

import Package from 'Root/package.json';

import getLink from './components/Link';
import withRouteScroll from './components/Scroll';

import contents from './content/contents';

import {
  getUpdatedContent,
  getCurrentRoute,
  getCurrentContentIndex,
} from './helpers';

function App({ location, history }) {
  const currentContentIndex = getCurrentContentIndex(contents, location);
  const currentRoute = getCurrentRoute(contents, location);
  const prevRoute = contents[currentContentIndex - 1];
  const nextRoute = contents[currentContentIndex + 1];

  const LayoutAside = (
    <Aside
      logo={Package.name}
      nav={(
        <List
          links={getUpdatedContent(contents, location)}
          LinkComponent={getLink()}
          HashLinkComponent={getLink(true)}
        />
      )}
    />
  );

  const LayoutNav = (
    <Nav
      title={currentRoute.name}
      lastUpdate={currentRoute.lastUpdate}
      version={Package.version}
    />
  );

  const LayoutFooter = (
    <Footer
      prevRoute={prevRoute}
      nextRoute={nextRoute}
      onClickHandler={path => history.push(path)}
    />
  );

  return (
    <Layout
      aside={LayoutAside}
      nav={LayoutNav}
      footer={LayoutFooter}
    >
      { contents.map(content => (
        <Content
          key={content.bullet}
          {...content}
          component={withRouteScroll(content.component)}
        />
      )) }
    </Layout>
  );
}

App.defaultProps = {
  location: null,
  history: null,
};

App.propTypes = {
  location: PropTypes.shape(),
  history: PropTypes.shape(),
};

export default withRouter(App);
