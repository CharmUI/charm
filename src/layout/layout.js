import React from 'react';

import {
  Aside,
  Footer,
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
      nav={nav}
      listContents={listContents}
      LinkComponent={link}
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
  // componentProps
  listProps: {
    LinkComponent: null,
    listContents: [],
  },
  asideProps: {
    logo: 'Charm UI',
    nav: null,
  },
  navProps: {
    currentRoute: null,
    version: null,
  },
  footerProps: {
    nextRoute: null,
    prevRoute: null,
    onFooterLinkClick: null,
  },
};

Layout.propTypes = {
  children: PropTypes.node,
  footer: PropTypes.element,
  aside: PropTypes.element,
  // componentProps
  listProps: {
    LinkComponent: PropTypes.element,
    listContents: PropTypes.arrayOf(PropTypes.shape()),
  },
  asideProps: {
    logo: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
    ]),
    nav: PropTypes.element,
  },
  navProps: {
    currentRoute: PropTypes.shape(),
    version: PropTypes.string,
  },
  footerProps: {
    nextRoute: PropTypes.shape(),
    prevRoute: PropTypes.shape(),
    onFooterLinkClick: PropTypes.func,
  },
};

export default Layout;
