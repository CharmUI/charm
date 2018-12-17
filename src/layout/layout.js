import React, { memo } from 'react';

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
        <nav className="content" role="contentinfo">{ nav }</nav>

        <main className="content" role="main">
          { children }
        </main>

        <footer className="content" role="navigation">
          <hr />

          { footer }
        </footer>
      </div>

      <aside className={`aside ${isAsideShown ? 'is-shown' : ''}`} role="navigation">{ aside }</aside>
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

export default memo(Layout);
