import React from 'react';

import { LayoutProps } from '../proptypes';

import {
  Aside,
  Footer,
  Nav,
} from './index';

function Layout({
  children,

  // components
  footer,
  aside,
  nav,

  // componentProps
  footerProps,
  navProps,
  asideProps,
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
  footerProps: null,
  navProps: null,
  asideProps: null,
};

Layout.propTypes = LayoutProps;

export default Layout;
