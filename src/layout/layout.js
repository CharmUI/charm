import React from 'react';

import {
  Aside,
  Footer,
  List,
  Nav,
} from './index';

function Layout({
  // components
  children,
  footer,
  aside,
  nav,
  link,
  // info
  logo,
  listContents,
  currentRoute,
  nextRoute,
  prevRoute,
  version,
  // functions
  onFooterLinkClick,
}) {
  const LayoutAside = (
    <Aside
      logo={logo}
      nav={(
        <List
          links={listContents}
          LinkComponent={link}
        />
      )}
    />
  );

  const LayoutNav = (
    <Nav
      title={currentRoute.name}
      lastUpdate={currentRoute.lastUpdate}
      version={version}
    />
  );

  const LayoutFooter = (
    <Footer
      prevRoute={prevRoute}
      nextRoute={nextRoute}
      onClickHandler={onFooterLinkClick}
    />
  );

  return (
    <>
      <div className="layout">
        <main className="content">
          { children }
        </main>

        <div className="content">
          <hr />

          { footer || LayoutFooter }
        </div>
      </div>

      { nav || LayoutNav }

      { aside || LayoutAside }
    </>
  );
}

Layout.defaultProps = {
  children: null,
  footer: null,
  aside: null,
  nav: null,
  link: null,
  // info
  logo: 'Charm UI',
  listContents: [],
  currentRoute: null,
  nextRoute: null,
  prevRoute: null,
  version: null,
  // functions
  onFooterLinkClick: null,
};

Layout.propTypes = {
  children: PropTypes.node,
  footer: PropTypes.element,
  aside: PropTypes.element,
  nav: PropTypes.element,
  link: PropTypes.element,
  // info
  logo: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
  listContents: PropTypes.arrayOf(PropTypes.shape()),
  currentRoute: PropTypes.shape(),
  nextRoute: PropTypes.shape(),
  prevRoute: PropTypes.shape(),
  version: PropTypes.string,
  // functions
  onFooterLinkClick: PropTypes.func,
};

export default Layout;
