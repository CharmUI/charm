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
  return (
    <>
      <div className="layout">
        <main className="content">
          { children }
        </main>

        <div className="content">
          <hr />

          { footer || <Footer {...footerProps} /> }
        </div>
      </div>

      { nav || <Nav {...navProps} /> }

      { aside || <Aside {...asideProps} /> }
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
      onLinkClick: () => {},
      LinkComponent: null,
      listContents: [],
    },
  },
  navProps: {
    version: null,
    buttonName: 'Menu',
    onButtonClick: () => {},
    title: null,
    lastUpdate: null,
  },
  footerProps: {
    nextRoute: null,
    prevRoute: null,
    onFooterLinkClick: null,
  },
};

Layout.propTypes = LayoutProps;

export default Layout;
