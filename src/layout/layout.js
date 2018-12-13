import React from 'react';

import { LayoutProps } from '../proptypes';

function Layout({
  children,

  // components
  footer,
  aside,
  nav,
}) {
  return (
    <>
      <div className="layout">
        <main className="content">
          { children }
        </main>

        <div className="content">
          <hr />

          <footer className="footer">{ footer }</footer>
        </div>
      </div>

      <nav className="nav">{ nav }</nav>

      <aside className="aside">{ aside }</aside>
    </>
  );
}

Layout.defaultProps = {
  children: null,

  footer: null,
  aside: null,
  nav: null,
};

Layout.propTypes = LayoutProps;

export default Layout;
