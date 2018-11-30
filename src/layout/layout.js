import React from 'react';

import {
  Aside,
  Footer,
  Nav,
} from './index';

import { LayoutProps } from '../proptypes';

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

Layout.propTypes = LayoutProps;

export default Layout;
