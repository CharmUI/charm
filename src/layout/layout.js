import React from 'react';

import { LayoutProps } from '../proptypes';

function Layout({
  children,

  // components
  footer,
  aside,
  nav,

  isAsideShown,

  className,
  ...restProps
}) {
  return (
    <>
      <div className={`layout ${className}`} {...restProps}>
        <main className="content">
          { children }
        </main>

        <div className="content">
          <hr />

          <footer className="footer">{ footer }</footer>
        </div>
      </div>

      <nav className="nav">{ nav }</nav>

      <aside className={`aside ${isAsideShown ? 'is-shown' : ''}`}>{ aside }</aside>
    </>
  );
}

Layout.defaultProps = {
  children: null,

  footer: null,
  aside: null,
  nav: null,

  isAsideShown: false,
  className: '',
};

Layout.propTypes = LayoutProps;

export default Layout;
