import {
  Route as Content,
  withRouter,
} from 'react-router-dom';

import {
  Shell,
  Footer,
  Aside,
  Nav,
  List,
} from 'Layout/components';

import Package from 'Root/package.json';

import getLink from './Link';
import withRouteScroll from './Scroll';

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

  const ShellAside = (
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

  const ShellNav = (
    <Nav
      title={currentRoute.name}
      lastUpdate={currentRoute.lastUpdate}
      version={Package.version}
    />
  );

  const ShellFooter = (
    <Footer
      prevRoute={prevRoute}
      nextRoute={nextRoute}
      onClickHandler={path => history.push(path)}
    />
  );

  return (
    <Shell
      aside={ShellAside}
      nav={ShellNav}
      footer={ShellFooter}
    >
      { contents.map(content => (
        <Content
          key={content.bullet}
          {...content}
          component={withRouteScroll(content.component)}
        />
      )) }
    </Shell>
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
