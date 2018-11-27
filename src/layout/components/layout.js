function Layout({
  children,
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

          { footer }
        </div>
      </div>

      { nav }

      { aside }
    </>
  );
}

Layout.defaultProps = {
  children: null,
  footer: null,
  aside: null,
  nav: null,
};

Layout.propTypes = {
  children: PropTypes.node,
  footer: PropTypes.element,
  aside: PropTypes.element,
  nav: PropTypes.element,
};

export default Layout;
