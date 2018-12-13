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
        <nav className="content nav">{ nav }</nav>

        <main className="content">
          { children }
        </main>

        <footer className="content footer">
          <hr />

          { footer }
        </footer>
      </div>

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
