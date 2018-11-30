import React from 'react';

import {
  Aside,
  Footer,
  Nav,
} from './index';

import { LayoutProps } from '../proptypes';

function Layout({
  children,

  // components
  footer,
  aside,
  nav,

  // componentProps
  asideProps,
  navProps,
  footerProps,
}) {
  const LayoutAside = (
    <Aside
      logo={asideProps.logo}
      list={asideProps.list}
      listProps={asideProps.listProps}
      isShown={asideProps.isShown}
    />
  );

  const LayoutNav = (
    <Nav
      title={navProps.currentRoute.name}
      lastUpdate={navProps.currentRoute.lastUpdate}
      version={navProps.version}
      onButtonClick={navProps.onButtonClick}
      buttonName={navProps.buttonName}
    />
  );

  const LayoutFooter = (
    <Footer
      prevRoute={footerProps.prevRoute}
      nextRoute={footerProps.nextRoute}
      onClickHandler={footerProps.onFooterLinkClick}
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
  asideProps: {
    logo: 'Charm UI',
    list: null,
    isShown: false,
    listProps: {
      LinkComponent: null,
      listContents: [],
    },
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
